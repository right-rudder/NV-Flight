import { useMemo, useState } from "react";

/**
 * StepCardsColumnGrow — sectionized
 * - Vertical on mobile, horizontal on desktop
 * - Uses becomePilotData.roadmapItems.milestones: [{ id, title, desc, img, href }]
 * - Adds eyebrow/heading/blurb above the rail
 */
export default function StepsAccordion({
  content = content,
  steps = content.milestones || [],
  buttonLabel = "Learn More",
  eyebrow = "Become a Pilot",
  heading = content.title ?? "Your Pilot Training Roadmap",
  blurb = content.intro ??
    "Follow our proven roadmap from your first Discovery Flight through advanced ratings. Each stage builds on the last, so you always know what’s next.",
}) {
  const data = useMemo(() => {
    const src = Array.isArray(steps) ? steps : [];
    return src.map((s, i) => ({
      id: s.id ?? String(i + 1),
      number: i + 1,
      title: s.title ?? `Item ${i + 1}`,
      text: s.desc ?? s.description ?? "",
      img: s.img ?? s.image ?? null,
      href: s.href ?? s.link ?? "#",
    }));
  }, [steps]);

  const [active, setActive] = useState(data[0]?.id ?? null);

  return (
    <section className="mx-auto w-full h-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-primary-950 to-accent-700/90 text-white">
      {/* Section header */}
      <div className="flex flex-col gap-4 sm:gap-6 mx-auto max-w-3xl px-2 sm:px-4 py-4 sm:py-8 text-center mb-6 sm:mb-8 items-center">
        {eyebrow && (
          <div className="mb-1 sm:mb-2 w-auto rounded-full bg-primary-50 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-primary-700">
            {eyebrow}
          </div>
        )}
        <h2 className="text-[1.5rem] leading-tight font-extrabold tracking-tight text-accent-200 sm:text-3xl md:text-4xl">
          {heading}
        </h2>
        {blurb && (
          <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base text-white/90">
            {blurb}
          </p>
        )}
      </div>

      {/* Rail */}
      <div className="flex overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-900/95 min-h-[26rem] sm:min-h-[30rem] md:min-h-[34rem] md:flex-row md:flex-nowrap flex-col">
        {data.map((s, idx) => (
          <Card
            key={s.id ?? idx}
            step={s}
            index={idx}
            isActive={active === (s.id ?? idx)}
            hasActive={active !== null}
            setActive={setActive}
            buttonLabel={buttonLabel}
          />
        ))}
      </div>
    </section>
  );
}

function Card({ step, index, isActive, hasActive, setActive, buttonLabel }) {
  const flexGrow = isActive ? 3 : hasActive ? 0.6 : 1;

  return (
    <button
      type="button"
      onClick={() => setActive(step.id ?? index)}
      className={[
        "relative isolate w-full overflow-hidden text-left outline-none transition-all duration-300 ease-in-out",
        "border-b border-gray-800/60 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0",
        "min-h-64",
        "flex flex-col justify-between",
      ].join(" ")}
      style={{ flex: `${flexGrow} 1 0%` }}
      aria-expanded={isActive}
    >
      {/* Media / background fills full card */}
      <div className="absolute inset-0 min-h-full">
        {step.img ? (
          <img
            src={step.img}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ${
              isActive ? "scale-105" : "scale-100"
            }`}
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />
        )}
        {/* Global darkener */}
        <div
          className={`absolute inset-0 ${isActive ? "bg-black/25" : "bg-black/35"}`}
        />
        {/* Bottom gradient for readability */}
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />
      </div>

      {/* Expanded content (active) */}
      {isActive && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-3 sm:p-4 md:p-5 animate-[fadeInUp_0.35s_ease_forwards] text-white">
          <div className="rounded-xl bg-muted-900/70 p-3 sm:p-4 md:p-5 backdrop-blur-lg">
            <h3 className="text-[1.05rem] sm:text-lg md:text-xl font-semibold leading-snug">
              {step.title}
            </h3>
            {step.text && (
              <p className="mt-1 text-[0.9rem] sm:text-[0.95rem] md:text-base leading-relaxed">
                {step.text}
              </p>
            )}
            <div className="mt-3 sm:mt-4 flex justify-start">
              <a
                href={step.href}
                className="pointer-events-auto inline-block rounded-lg bg-primary-600 px-3 py-2 sm:px-4 sm:py-2.5 text-sm font-semibold text-white shadow hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                {buttonLabel}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Collapsed labels */}
      {!isActive && (
        <>
          {/* Mobile label — bottom, horizontal */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-3 z-20 block md:hidden"
            aria-hidden="true"
          >
            <div className="mx-2 flex items-center justify-between">
              <span className="text-[clamp(1rem,3.8vw,1.25rem)] font-bold leading-none text-white drop-shadow whitespace-nowrap">
                {step.title}
              </span>
              <PointerIcon className="h-6 w-6 text-white drop-shadow" />
            </div>
          </div>

          {/* Desktop label — vertical; title above, arrow uniformly aligned below */}
          <div
            className="pointer-events-none absolute left-4 bottom-4 z-20 hidden md:block px-4"
            aria-hidden="true"
          >
            <div className="relative">
              {/* Arrow fixed to bottom-center (uniform across cards) */}
              <PointerIcon className="h-6 w-6 text-white drop-shadow absolute left-1/2 -translate-x-1/2 bottom-0" />
              {/* Title placed a fixed gap (bottom-8) above the arrow; length grows upward */}
              <span className="[writing-mode:vertical-rl] [text-orientation:mixed] absolute left-1/2 -translate-x-1/2 bottom-8 text-[1.5rem] font-bold leading-none text-white drop-shadow whitespace-nowrap">
                {step.title}
              </span>
            </div>
          </div>
        </>
      )}

      <span className="pointer-events-none absolute inset-0 ring-0 ring-primary-500 ring-offset-0 focus-within:ring-2" />
    </button>
  );
}

function PointerIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}
