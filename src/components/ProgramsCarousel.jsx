// ContinuousCarousel.jsx
import React from "react";

export default function ContinuousCarousel({ dataPrograms = programs }) {
  // duplicate the cards so the scroll loops seamlessly
  const slides = [...dataPrograms.cards, ...dataPrograms.cards];

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex items-stretch space-x-6"
        style={{
          animation: "scroll 30s linear infinite",
        }}
      >
        {slides.map((card, idx) => (
          <div
            key={idx}
            className="min-w-[300px] bg-white rounded-3xl shadow-lg flex-shrink-0"
          >
            <img
              src={card.imagePath}
              alt={card.imageAlt}
              className="w-full h-40 object-cover rounded-t-3xl"
            />
            <div className="p-4 flex flex-col h-full">
              <h3 className="text-lg font-bold text-accent-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 flex-grow">{card.description}</p>
              <a
                href={card.link}
                className="mt-4 inline-block text-sm font-medium text-accent-600 hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* keyframes injected right in the component */}
      <style>{`
        @keyframes scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
