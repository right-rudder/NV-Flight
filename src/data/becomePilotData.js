// src/data/becomePilotData.js
const becomePilotData = {
  // SEO
  pageTitle: "Become a Pilot | Reno’s Flight Training Center | NV Flight",
  pageDescription:
    "Book a $185 Discovery Flight, choose self-paced or an 8-week Part 141 Private Pilot program, and train with Northern Nevada’s FAA-approved 141 school. Call or text 775-242-5994.",
  pageKeywords:
    "Reno flight school, Discovery Flight $185, Part 141, accelerated PPL 8 weeks, instrument rating, commercial pilot, CFI, mountain flying, NV Flight",

  // HERO (your page already renders this via HeaderScreen)
  header: {
    stars: true,
    imagePath: "/src/assets/montain-&-plane2.jpg",
    imageAlt: "NV Flight aircraft over Reno, Tahoe",
    headerH1: "Start Your Journey to Becoming a Pilot",
    paragraph:
      "Reno’s FAA-approved Part 141 training center, offering Discovery Flights, self-paced and accelerated courses, and mountain flying expertise.",
    buttons: [
      { name: "Book a Discovery Flight", link: "/contact", primary: true },
      { name: "Enroll Now", link: "/enroll", primary: false },
    ],
  },

  // Ordered flow used by your “How it works” section
  steps: {
    title: "How it works at NV Flight",
    items: [
      {
        step: "01",
        title: "Book a $185 Discovery Flight",
        desc: "Hands-on intro (about 45 minutes) with a CFI, then a personalized training plan.",
      },
      {
        step: "02",
        title: "Pick your training track",
        desc: "Self-paced (Part 61/141) or Accelerated Private Pilot 141 in about 8 weeks.",
      },
      {
        step: "03",
        title: "Get your FAA medical",
        desc: "Schedule a Class 3 medical so you’re cleared to solo and continue training.",
      },
      {
        step: "04",
        title: "Enroll & get your kit",
        desc: "We’ll onboard you, set up your lessons, and provide your Gleim Private Pilot kit.",
      },
      {
        step: "05",
        title: "Train consistently",
        desc: "Accelerated track flies ~5 days/week; self-paced sets a steady cadence that fits your schedule.",
      },
      {
        step: "06",
        title: "Stage checks & first solo",
        desc: "Milestones confirm proficiency before solo and cross-country phases.",
      },
      {
        step: "07",
        title: "X-country & checkride prep",
        desc: "Plan and fly to ACS standards; targeted ground and flight prep for your DPE.",
      },
      {
        step: "08",
        title: "Next ratings",
        desc: "Continue with Instrument, Commercial, and Flight Instructor (CFI/CFII) training.",
      },
    ],
  },

  // CTA band right after the hero (for CTABandAfterHero.astro)
  cta: {
    imagePath: "/src/assets/nv-flight-reno_1712_Original.webp",
    imageAlt: "NV Flight School Cessna 172 on the runway",
    headerH1: "Why Choose NV Flight School?",
    paragraph:
      "Experience personalized training, expert instructors, and a commitment to your success.",
    buttons: [
      {
        name: "Book a Discovery Flight",
        link: "/discovery-flight",
        primary: true,
      },
    ],
  },

  // Step-by-step grid like Shakuro’s “Web development solutions” (for StepByStepGrid.astro)
  stepItems: {
    title: "Training options & highlights",
    items: [
      {
        title: "Accelerated PPL (Part 141)",
        desc: "Finish in ~8 weeks, fly ~5 days/week. Starts at $12,500 and includes ~35 flight hours and ~35 ground hours with a Gleim kit.",
      },
      {
        title: "Self-Paced Programs",
        desc: "Flexible scheduling with the same high standards. Part 61 or 141 depending on your goals.",
      },
      {
        title: "Mountain Flying Focus",
        desc: "Local terrain & density-altitude procedures. Mountain checkout required for rentals.",
      },
      {
        title: "Instrument Rating",
        desc: "One-on-one accelerated IFR (Part 61). Starting at $14,350.",
      },
      {
        title: "Commercial Pilot",
        desc: "Accelerated Commercial (Part 61). Starting at $9,950.",
      },
      {
        title: "Flight Instructor (CFI/CFII)",
        desc: "Accelerated instructor ratings. Starting at $10,325.",
      },
    ],
    columns: 3,
    numbered: false,
  },
};

export default becomePilotData;
