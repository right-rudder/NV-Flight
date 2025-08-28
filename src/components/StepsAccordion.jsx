import React, { useMemo, useState } from "react";

/**
 * StepCardsColumnGrow — responsive fix
 *
 * Prevents white panels from showing when collapsed. Ensures full dark background in collapsed state.
 */
export default function StepAccordion({
  steps,
  className = "",
  buttonLabel = "Learn More",
}) {
  const data = useMemo(() => {
    const src = Array.isArray(steps) && steps.length > 0 ? steps : [];
    if (src.length > 0) {
      return src.map((s, i) => {
        const num = (() => {
          const raw = (s.step ?? "").toString();
          const parsed = parseInt(raw.replace(/[^0-9]/g, ""), 10);
          return Number.isFinite(parsed) ? parsed : i + 1;
        })();
        return {
          id: s.id ?? s.step ?? String(i + 1),
          number: num,
          title: s.title ?? s.name ?? `Step ${i + 1}`,
          text: s.desc ?? s.text ?? "",
          img: s.img ?? s.image ?? null,
          href: s.href ?? s.link ?? "#",
        };
      });
    }
    return [
      {
        id: "1",
        number: 1,
        title: "Discover",
        text: "Explore programs and fit.",
        img: null,
      },
      {
        id: "2",
        number: 2,
        title: "Enroll",
        text: "Match with an instructor.",
        img: null,
      },
      {
        id: "3",
        number: 3,
        title: "Train",
        text: "Fly consistently.",
        img: null,
      },
      {
        id: "4",
        number: 4,
        title: "Achieve",
        text: "Pass your checkride.",
        img: null,
      },
    ];
  }, [steps]);

  const [active, setActive] = useState(data[0]?.id ?? null);

  return (
    <section className={`mx-auto w-full max-w-7xl ${className}`}>
      <div className="flex overflow-hidden rounded-2xl border border-gray-200 flex-col md:flex-row md:flex-nowrap bg-gray-900">
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
        "border-b border-gray-700 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0",
        "min-h-48 sm:min-h-56 md:min-h-80",
        "flex flex-col bg-gray-900",
      ].join(" ")}
      style={{ flex: `${flexGrow} 1 0%` }}
      aria-expanded={isActive}
    >
      {/* Media / background covers full card */}
      <div className="absolute inset-0">
        {step.href ? (
          <img
            src={step.href}
            alt=""
            className={`h-full w-full object-cover transition-transform duration-500 ${
              isActive ? "scale-105" : "scale-100"
            }`}
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-gray-800 to-gray-900" />
        )}
        <div
          className={`absolute inset-0 ${isActive ? "bg-black/25" : "bg-black/50"}`}
        />
      </div>

      {/* Expanded content */}
      {isActive && (
        <div className="relative z-10 mt-auto p-4 sm:p-5 animate-[fadeInUp_0.35s_ease_forwards] bg-white/90 backdrop-blur">
          <h3 className="text-base font-semibold text-gray-900 sm:text-lg md:text-xl">
            {step.title}
          </h3>
          {step.text && (
            <p className="mt-1 text-sm text-gray-700 sm:text-[0.95rem]">
              {step.text}
            </p>
          )}
          <div className="mt-3 flex justify-center">
            <a
              href={step.href}
              className="inline-block rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              {buttonLabel}
            </a>
          </div>
        </div>
      )}

      {/* Collapsed labels */}
      {!isActive && (
        <>
          <div className="relative z-10 flex flex-col items-center justify-end h-full p-2 md:hidden">
            <span className="inline-flex items-center justify-center gap-2 rounded-lg bg-black/80 px-4 py-1.5 text-[1.25rem] font-bold text-white">
              {step.number}. {step.title}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mt-1 h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>

          <div className="pointer-events-none absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 origin-left -rotate-90 md:flex md:flex-col md:items-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-lg bg-black/80 px-5 py-2 text-[1.5rem] font-bold text-white text-center">
              {step.number}. {step.title}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mt-1 h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </>
      )}

      <span className="pointer-events-none absolute inset-0 ring-0 ring-primary-500 ring-offset-0 focus-within:ring-2" />
    </button>
  );
}
