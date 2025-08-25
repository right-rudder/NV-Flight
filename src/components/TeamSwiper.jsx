import { useEffect, useMemo, useRef, useState } from "react";

export default function TeamProfileInteractiveSwiper({
  pageData,
  defaultMemberId,
  className = "",
})

{
  // 1) Normalize input data
  const allMembers = useMemo(() => {
    if (Array.isArray(pageData?.details?.teamMembers))
      return pageData.details.teamMembers;
    if (Array.isArray(pageData?.team)) return pageData.team;
    if (Array.isArray(pageData)) return pageData;
    return [];
  }, [pageData]);

  // 2) Build stable IDs (in case some members lack id)
  const toUid = (m, i) =>
    (m.id && String(m.id)) ||
    (m.name &&
      String(m.name)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")) ||
    `member-${i}`;

  const members = useMemo(
    () => allMembers.map((m, i) => ({ ...m, __uid: toUid(m, i) })),
    [allMembers]
  );

  const byUid = useMemo(() => {
    const map = new Map();
    members.forEach((m) => map.set(m.__uid, m));
    return map;
  }, [members]);

  // 3) Hero selection
  const initialUid =
    (defaultMemberId &&
      members.find(
        (m) => m.__uid === defaultMemberId || m.id === defaultMemberId
      )?.__uid) ||
    members[0]?.__uid ||
    null;

  const [selectedUid, setSelectedUid] = useState(initialUid);
  const hero = byUid.get(selectedUid) || null;

  // 4) Carousel (others excluding hero)
  const others = useMemo(
    () => members.filter((m) => m.__uid !== selectedUid),
    [members, selectedUid]
  );

  // 5) Refs & state for arrows-only carousel
  const viewportRef = useRef(null); // wrapper
  const trackRef = useRef(null); // <ul> we translate
  const itemRefs = useRef([]); // <li> refs
  itemRefs.current = others.map((_, i) => itemRefs.current[i] || null);

  const [activeIdx, setActiveIdx] = useState(0); // current focused slide
  const [x, setX] = useState(0);
  const [animate, setAnimate] = useState(false); // toggles transition

  // Compute translateX to center slide i
  const centerXFor = (i) => {
    const vp = viewportRef.current;
    const li = itemRefs.current[i];
    if (!vp || !li) return 0;

    const vpW = vp.getBoundingClientRect().width;
    const liW = li.getBoundingClientRect().width;
    const liLeft = li.offsetLeft; // offset within the track

    const target = liLeft - (vpW - liW) / 2; // positive means move left
    return -Math.max(0, target);
  };

  const goTo = (i, smooth = true) => {
    const max = Math.max(others.length - 1, 0);
    const clamped = Math.max(0, Math.min(i, max));
    setActiveIdx(clamped);
    setAnimate(smooth);
    setX(centerXFor(clamped));
  };

  const prev = () => goTo(activeIdx - 1, true);
  const next = () => goTo(activeIdx + 1, true);

  // 6) Select hero from carousel
  const selectByIndex = (i) => {
    const pick = others[i];
    if (!pick) return;
    setSelectedUid(pick.__uid);
    // After selection, 'others' changes (picked card disappears).
    // Reset carousel to start and re-center without animation.
    requestAnimationFrame(() => {
      setActiveIdx(0);
      setAnimate(false);
      setX(centerXFor(0));
    });
  };

  // 7) Keep things measured/aligned after layout changes & resize
  useEffect(() => {
    // when hero changes or others length changes, recenter first item (if any)
    if (others.length > 0) {
      setAnimate(false);
      setX(centerXFor(0));
    } else {
      setX(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUid, others.length]);

  useEffect(() => {
    const onResize = () => {
      setAnimate(false);
      setX(centerXFor(activeIdx));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx, others.length]);

  if (!hero) {
    return (
      <section
        className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 ${className}`}
      >
        <p className="text-muted-700">No team data found.</p>
      </section>
    );
  }

  const heroParagraphs = Array.isArray(hero.bio)
    ? hero.bio
    : hero.bio
      ? String(hero.bio).split(/\n\s*\n/)
      : [];

  // Exact icons you provided
  const LeftArrows = () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L12.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M4.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L6.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
  const RightArrows = () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <section
      className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-32 ${className}`}
      aria-live="polite"
    >
      {/* Kicker */}
      <p className="text-xs font-medium uppercase tracking-wider text-muted-500">
        Our People
      </p>

      {/* HERO */}
      <div className="mt-3 grid grid-cols-1 gap-8 md:mt-6 md:grid-cols-12">
        {/* Text */}
        <div className="md:col-span-7 lg:col-span-7">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-4xl">
            {hero.name}
          </h1>
          {hero.role && (
            <p className="mt-1 text-lg text-muted-700">{hero.role}</p>
          )}

          {Array.isArray(hero.certifications) &&
            hero.certifications.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {hero.certifications.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-accent-200 bg-accent-500/80 px-3 py-1 text-xs font-medium text-muted-700"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            )}

          <div className="prose prose-neutral mt-6 max-w-none dark:prose-invert text-muted-700">
            {heroParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Portrait */}
        <div className="md:col-span-5 lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl bg-muted-100/70">
            {hero.image ? (
              <img
                src={hero.image}
                alt={`${hero.name} headshot`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="aspect-[3/4] w-full" />
            )}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10" />
          </div>
        </div>
      </div>

      {/* CAROUSEL (arrows only) */}
      {others.length > 0 && (
        <section className="mt-16 md:mt-20">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-4xl font-semibold tracking-tight mb-2">
              Meet the rest of our team
            </h2>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                disabled={activeIdx <= 0}
                aria-label="Previous"
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-muted-200 bg-muted-200 shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-400 dark:border-muted-700 dark:bg-muted-900/70 ${
                  activeIdx <= 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <LeftArrows />
              </button>
              <button
                type="button"
                onClick={next}
                disabled={activeIdx >= others.length - 1}
                aria-label="Next"
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-muted-200 bg-white/80 shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-400 dark:border-muted-700 dark:bg-muted-900/70 ${
                  activeIdx >= others.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <RightArrows />
              </button>
            </div>
          </div>

          <div
            ref={viewportRef}
            className="relative overflow-hidden"
            style={{ touchAction: "none" }} // no swipe/drag
          >
            <ul
              ref={trackRef}
              className={`flex gap-6 pr-4 ${animate ? "transition-transform duration-300 ease-out" : "transition-none"}`}
              style={{ transform: `translate3d(${x}px,0,0)` }}
            >
              {others.map((m, i) => (
                <li
                  key={m.__uid}
                  ref={(el) => (itemRefs.current[i] = el)}
                  className="shrink-0"
                >
                  <button
                    type="button"
                    onClick={() => selectByIndex(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        selectByIndex(i);
                      }
                    }}
                    aria-label={`View ${m.name}'s profile`}
                    aria-pressed={activeIdx === i}
                    className={[
                      "group relative block w-[82vw] sm:w-[48vw] lg:w-[31vw]",
                      "aspect-video overflow-hidden rounded-2xl border border-muted-200 shadow-sm",
                      "bg-muted-900", // subtle letterbox behind object-contain
                      "focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2",
                      activeIdx === i ? "ring-1 ring-muted-200" : "",
                    ].join(" ")}
                  >
                    {/* Image (fully visible, no crop) */}
                    <img
                      src={m.image}
                      alt={`${m.name} headshot`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-contain transition duration-500 group-hover:scale-[1.02] group-hover:blur-[2px]"
                    />

                    {/* Darken overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/40" />

                    {/* Hover content */}
                    <div className="absolute inset-0 flex items-end p-5 opacity-0 translate-y-2 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      <div className="w-full text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                        <h3 className="text-base font-semibold">{m.name}</h3>
                        {m.role && (
                          <p className="mt-0.5 text-sm/5 text-white/90">
                            {m.role}
                          </p>
                        )}
                        {m.bio && (
                          <p className="mt-3 line-clamp-3 text-sm/6 text-white/90">
                            {Array.isArray(m.bio) ? m.bio[0] : String(m.bio)}
                          </p>
                        )}

                        <div className="mt-4 flex items-center justify-between gap-3">
                          <span />
                          <div className="flex items-center gap-3">
                            {m.links?.linkedin && (
                              <a
                                href={m.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${m.name} LinkedIn`}
                                className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
                                onClick={(e) => e.stopPropagation()}
                                title="LinkedIn"
                              >
                                <svg
                                  className="h-5 w-5"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.82-2.05 3.75-2.05C20.4 8 23 10.2 23 14.4V23h-4v-7.2c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.87-2.77 3.82V23h-4V8z" />
                                </svg>
                              </a>
                            )}

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                selectByIndex(i);
                              }}
                              className="btn-accent text-sm"
                              aria-label={`View full bio for ${m.name}`}
                            >
                              View full bio
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Border/shine hint */}
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </section>
  );
}
