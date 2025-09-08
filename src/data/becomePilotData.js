// src/data/becomePilotData.js
const becomePilotData = {
  // SEO
  pageTitle: "Become a Pilot in Reno | NV Flight School Training Programs",
  pageDescription:
    "Start your pilot journey with NV Flight School in Reno. From discovery flights to accelerated programs, get expert training in safety, confidence, and mountain flying.",
  pageKeywords:
    "Reno flight school, Discovery Flight $185, Part 141, accelerated PPL 8 weeks, instrument rating, commercial pilot, CFI, mountain flying, NV Flight",

  // HERO (your page already renders this via HeaderScreen)
  header: {
    stars: true,
    imagePath: "/src/assets/nvflight-reno-student-pilot-hero.webp",
    imageAlt: "NV Flight aircraft over Reno, Tahoe",
    headerH1: "Tailored Flight Training",
    paragraph:
      "Reno’s FAA-approved Part 141 training center, offering Discovery Flights, self-paced and accelerated courses, and mountain flying expertise.",
    buttons: [
      {
        name: "Book a Discovery Flight",
        link: "/discovery-flight#form",
        primary: true,
      },
    ],
  },

  // Ordered flow used by your “How it works” section
  steps: {
    title: "How to Start Pilot Training with NV Flight",
    subtitle: "What sets our training apart",
    blurb:
      "Getting started at our Reno flight school is simple. Follow these four steps to begin your flight training and work toward becoming a certified pilot.",
    items: [
      {
        title: "Step 1 — Schedule a Discovery Flight",
        description:
          "Take your first lesson in the air with a Certified Flight Instructor (CFI). A discovery flight gives you hands-on flying experience, introduces you to our aircraft, and shows you what pilot training at NV Flight is all about.",
        icon: "/src/assets/Small Airplane Icon.png",
        link: "/discovery-flight",
      },
      {
        title: "Step 2 — Meet Your Flight Instructor",
        description:
          "You’ll be paired with one of our experienced flight instructors, trained in safety, decision-making, and mountain flying. Your instructor will walk you through the training requirements and answer your questions about becoming a private pilot.",
        icon: "/src/assets/Noto Pilot Icon.png",
        link: "/nv-flight-about/team",
      },
      {
        title: "Step 3 — Choose Your Training Path",
        description:
          "Whether you prefer a structured program or a self-paced approach, we offer flexible training options tailored to your needs.",
        icon: "/src/assets/Map Pin Check Icon.png",
        link: "/programs",
      },
      {
        title: "Step 4 — On Your Way to Becoming a Pilot",
        description:
          "From your very first flight lesson, you’ll start developing safe flying habits and building the confidence you need to pass your FAA checkride. With Reno’s prime flying conditions and our hands-on approach, you’ll be ready to succeed.",
        icon: "/src/assets/Airplane Departure Icon.png",
        link: "/enroll",
      },
    ],
  },

  // CTA band right after the hero (for CTABandAfterHero.astro)
  cta: {
    imagePath: "/src/assets/nv-flight-reno_1712_Original.webp",
    imageAlt: "NV Flight School Cessna 172 on the runway",
    headerH1: "Your First Step Toward Safe, Confident Flying",
    paragraph1:
      "Learning to fly can feel overwhelming, but you don’t have to do it alone. At NV Flight, we guide every student with safety, clarity, and a culture of excellence so you can focus on building skills and confidence from day one.",
    paragraph2:
      "Our instructors specialize in mountain flying and real-world decision making, giving you experience that goes beyond the basics. With available aircraft, flexible scheduling, and training done right the first time, you’ll get the support you need to progress quickly and safely.",
    buttons: [
      {
        name: "Start Your Training Today",
        link: "/enroll",
        primary: true,
      },
    ],
  },

  // Step-by-step grid like Shakuro’s “Web development solutions” (for StepByStepGrid.astro)
  roadmapItems: {
    title: "Your Pilot Training Roadmap",
    intro:
      "Follow our proven roadmap to go from your very first flight to advanced certifications. Each stage builds on the last, so you always know what’s next.",
    milestones: [
      {
        id: "ppl",
        title: "Accelerated Private Pilot (Part 141)",
        desc: "8-week, Part 141 structured course — $24,000. Includes 70 flight hours, 35 hours of ground training, Lightspeed Zulu 4 headset, Gleim Private Pilot Training Kit, FAA written test, DPE fee, and airplane rental for the checkride.",
        price: "24,000",
        features: [
          "70 Hours Flight Time",
          "35 Hours Ground Training",
          "Lightspeed Zulu 4 Headset",
          "Gleim Private Pilot Training Kit",
          "DPE for the test",
          "Written Test",
          "Airplane Rental for Test",
        ],
        img: "/nvflight-reno-programs-become-pilot.webp",
        href: "/programs/private-pilot-asel",
      },
      {
        id: "mountain",
        title: "Mountain Flight Training",
        desc: "Gain confidence in Reno-Tahoe’s unique terrain. Learn density-altitude procedures, terrain navigation, and complete a mountain checkout for rental privileges.\n\n3-Day Course\n- 15 hours dual instruction\n- 5 hours ground instruction\n- $4,500.00\n\nLocations\n— Truckee\n— South Lake Tahoe\n— Mammoth / June Lakes",
        price: "4,500",
        features: [
          "15 hours dual instruction",
          "5 hours ground instruction",
          "Mountain checkout for rental privileges",
          "Choose from Truckee, South Lake Tahoe, or Mammoth/June Lakes",
        ],
        img: "/nvflight-reno-programs-montain-fl.webp",
        href: "/programs/mountain-flight-training",
      },
      {
        id: "instrument",
        title: "Instrument Rating (Accelerated Part 61)",
        desc: "Advance your skills to fly safely in clouds and weather — $20,000. Includes 50 hours dual flight with a CFII, 40 hours ground training with a CFII, Gleim Instrument Pilot Training Kit, FAA written test, DPE fee, and airplane rental for the checkride.",
        price: "20,000",
        features: [
          "50 Hours Flight Time w/ CFII",
          "40 Hours Ground Training w/ CFII",
          "Gleim Instrument Pilot Training Kit",
          "DPE for the test",
          "Written Test",
          "Airplane Rental for Test",
        ],
        img: "/nv-flight-reno_5364_Original.webp",
        href: "/programs/instrument-pilot-asel",
      },
      {
        id: "commercial",
        title: "Commercial Pilot (Accelerated Part 61)",
        desc: "Take the next step toward a career in aviation. Build confidence with advanced maneuvers, strengthen your skills, and gain the flight experience needed to open doors to professional flying opportunities.",
        img: "/nv-flight-reno_8102_Original.webp",
        href: "/programs/commercial-pilot-asel",
      },
      {
        id: "cfi",
        title: "Flight Instructor (CFI/CFII)",
        desc: "Share your passion for flying and inspire the next generation of pilots. Learn how to teach effectively, refine your own knowledge, and grow your hours in the cockpit while shaping future aviators.",
        img: "/Trygve CFI Original.JPG",
        href: "/programs/flight-instructor-asel",
      },
    ],
  },
};

export default becomePilotData;
