import { useState } from "react";
import { EMAIL_ADDRESS } from "../consts";

// Simple inline SVG for plus/minus
const PlusIcon = ({ open }) => (
  <svg
    className={`h-6 w-6 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    {open ? (
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
    ) : (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
      </>
    )}
  </svg>
);

export default function FAQs({ faqs, type }) {
  const [open, setOpen] = useState(null);

  const handleClick = (idx) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <div className="bg-muted-300">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-32 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          {type && (
            <p className="mx-auto mt-12 uppercase text-lg lg:text-xl lg:max-w-3xl font-sans text-center font-bold tracking-tight text-muted-800">
              {type}
            </p>
          )}
          <h2 className="mx-auto mb-3 text-4xl lg:text-6xl lg:max-w-3xl font-title text-center font-bold tracking-tight text-accent-700">
            Frequently Asked Questions
          </h2>
          <dl className="mt-16 divide-y divide-muted-400" id="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between text-left text-primary-900 hover:text-accent-500 group"
                    aria-expanded={open === idx}
                    onClick={() => handleClick(idx)}
                  >
                    <span className="text-base font-semibold">{faq.title}</span>
                    <span className="ml-6 flex h-7 items-center text-accent-700 group-hover:text-accent-500 font-bold">
                      <PlusIcon open={open === idx} />
                    </span>
                  </button>
                </dt>
                <dd
                  className={`mt-2 pr-12 text-base text-muted-600 overflow-hidden transition-all duration-300 ease-in-out ${
                    open === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-70"
                  }`}
                >
                  {/* Render HTML content safely */}
                  <div dangerouslySetInnerHTML={{ __html: faq.content }} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="text-center mt-12 text-muted-600">
          If you have any additional questions please send us an email to{" "}
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="text-accent-500 hover:underline hover:brightness-125 duration-200"
          >
            {EMAIL_ADDRESS}
          </a>
        </p>
      </div>
    </div>
  );
}
