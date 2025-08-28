import React, { useMemo, useState } from "react";

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
  blurb = content.intro ?? "Follow our proven roadmap from your first Discovery Flight through advanced ratings. Each stage builds on the last so you always know what’s next.",
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
    <section className="mx-auto w-full h-auto px-12 py-20 bg-gradient-to-b from-primary-950 to-accent-700/90 text-white">
      {/* Section header */}
      <div className="flex flex-col gap-6 mx-auto max-w-3xl px-4 py-8 text-center mb-8 items-center">
        {eyebrow && (
          <div className="mb-2 w-auto rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700">
            {eyebrow}
          </div>
        )}
        <h2 className="text-2xl font-extrabold tracking-tight text-accent-300 md:text-4xl">
          {heading}
        </h2>
        {blurb && (
          <p className="mx-auto mt-3 max-w-2xl text-sm md:mt-4 md:text-base">
            {blurb}
          </p>
        )}
      </div>

      {/* Rail */}
      <div className="flex overflow-hidden rounded-3xl bg-gray-900/95 min-h-[34rem] md:flex-row md:flex-nowrap flex-col">
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
        "border-b border-gray-200 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0",
        "min-h-64",
        "flex flex-col justify-between",
      ].join(" ")}
      style={{ flex: `${flexGrow} 1 0%` }}
      aria-expanded={isActive}
    >
      {/* Media / background fills full card to avoid white gaps */}
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
        <div
          className={`absolute inset-0 ${isActive ? "bg-black/25" : "bg-black/35"}`}
        />
      </div>

      {/* Expanded content (white panel) overlays bottom; only when active */}
      {isActive && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5 animate-[fadeInUp_0.35s_ease_forwards] text-white">
          <div className="rounded-xl bg-black/20 p-4 shadow backdrop-blur-md">
            <h3 className="text-base font-semibold sm:text-lg md:text-xl">
              {step.title}
            </h3>
            {step.text && (
              <p className="mt-1 text-sm sm:text-[0.95rem]">{step.text}</p>
            )}
            <div className="mt-3 flex justify-start">
              <a
                href={step.href}
                className="pointer-events-auto inline-block rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                {buttonLabel}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Collapsed labels — flex spaced-between, no bg on title */}
      {!isActive && (
        <>
          {/* Mobile label */}
          <div
            className="pointer-events-none absolute inset-x-0 top-2 z-20 block md:hidden"
            aria-hidden="true"
          >
            <div className="mx-2 flex items-center justify-between">
              <span className="text-[1.5rem] font-bold leading-none text-white">
                {step.title}
              </span>
              <PointerIcon className="h-6 w-6 text-white drop-shadow" />
            </div>
          </div>

          {/* Desktop rotated label */}
          <div
            className="pointer-events-none absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 origin-left -rotate-90 md:block"
            aria-hidden="true"
          >
            <div className="flex min-w-[14rem] items-center justify-between">
              <span className="text-[1.5rem] font-bold leading-none text-white text-center">
                {step.title}
              </span>
              <PointerIcon className="h-6 w-6 text-white drop-shadow" />
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
      strokeWidth="1.5"
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
