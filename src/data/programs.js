const programs = {
  upperHeading: "Explore",
  heading: "Our Training Programs",
  description:
    "From your very first takeoff to advanced ratings and instructor certification, NV Flight offers a proven, step-by-step path to every pilot goal.",
  cards: [
    {
      title: "Private Pilot ASEL",
      slug: "private-pilot-asel",
      imagePath: "/src/assets/private-pilot.jpg",
      imageAlt:
        "Student and instructor beside a Cessna on the ramp at NV Flight",
      description:
        "FAA Part 141/61, Gleim syllabus. Your first step to becoming a pilot. Gain the skills and knowledge to fly safely and confidently as Pilot In Command.",
      syllabus: "Gleim",
      part: "Part 141/61",
      highlights: [
        "Aircraft control, takeoffs/landings, traffic patterns",
        "Airspace, weather basics, and cross‑country planning",
        "Radio communications and aeronautical decision‑making (ADM)",
        "Solo flight milestones and pre‑checkride prep",
      ],
      outcomes: [
        "Operate as PIC for VFR day/night flights",
        "Plan and execute cross‑country flights using modern nav tools",
        "Demonstrate safe, standardized procedures and checklists",
      ],
      prerequisites: [
        "Minimum 17 years old for certificate (solo may occur earlier)",
        "Valid government‑issued photo ID and English proficiency",
        "FAA medical (3rd Class or BasicMed equivalent)",
      ],
      idealFor: [
        "First‑time pilots",
        "Travelers seeking personal flying capability",
        "Future pros building toward Instrument and Commercial",
      ],
    },
    {
      title: "Instrument Pilot ASEL",
      slug: "instrument-pilot-asel",
      imagePath: "/src/assets/instrument-pilot.jpg",
      imageAlt: "Panel showing instruments and navigation displays",
      description:
        "61 Training Program, Gleim syllabus. Learn to safely fly in low visibility and complex airspace using the full suite of modern instruments.",
      syllabus: "Gleim",
      part: "Part 61",
      highlights: [
        "IFR procedures, holds, and instrument approach profiles",
        "Enroute navigation, STARs/SIDs, and IFR communications",
        "Weather systems, reports, forecasts, and risk management",
        "Partial‑panel and abnormal/emergency procedures",
      ],
      outcomes: [
        "Confident IFR flight planning and execution",
        "Proficiency with instrument scan and automation management",
        "Approach currency foundation and workload management",
      ],
      prerequisites: [
        "Private Pilot ASEL",
        "Current medical and recent flight experience",
        "Recommended: basic experience with GPS and moving map",
      ],
      idealFor: [
        "Pilots seeking all‑weather utility",
        "Career‑bound students building precision skills",
        "Safety‑focused aviators",
      ],
    },
    {
      title: "Commercial Pilot ASEL",
      slug: "commercial-pilot-asel",
      imagePath: "/src/assets/commercial-pilot.jpg",
      imageAlt: "NV Flight aircraft in flight over the Sierra Nevada",
      description:
        "61 Training Program, Gleim syllabus. Prepare for a career in aviation. Train to the standards required for paid flying and advanced pilot proficiency.",
      syllabus: "Gleim",
      part: "Part 61",
      highlights: [
        "Advanced maneuvers (lazy eights, chandelles, eights‑on‑pylons)",
        "Refined energy management and precision landings",
        "Commercial decision‑making and regulations",
        "Cross‑country proficiency with performance planning",
      ],
      outcomes: [
        "Meet ACS standards for Commercial ASEL",
        "Professional‑level stick‑and‑rudder and systems knowledge",
        "Readiness for CFI track and multi‑engine add‑ons",
      ],
      prerequisites: [
        "Private Pilot ASEL; Instrument rating recommended",
        "Time‑building to meet aeronautical experience requirements",
        "Current FAA medical",
      ],
      idealFor: [
        "Career‑focused pilots",
        "Pilots pursuing paid flying (CFI, charter, etc.)",
        "Aviators seeking advanced proficiency",
      ],
    },
    {
      title: "Flight Instructor ASEL (CFI)",
      slug: "flight-instructor-asel",
      imagePath: "/src/assets/flight-instructor.jpg",
      imageAlt: "Instructor guiding a student during a preflight inspection",
      description:
        "61 Training Program, Gleim syllabus. Become a Certified Flight Instructor (CFI) and launch your professional teaching career in aviation.",
      syllabus: "Gleim",
      part: "Part 61",
      highlights: [
        "Fundamentals of Instruction (FOI) and lesson planning",
        "Right‑seat flying and demonstration of common errors",
        "Endorsements, regs, and proficiency‑based instruction",
        "Scenario‑based training and stage checking",
      ],
      outcomes: [
        "Teach, evaluate, and endorse student pilots",
        "Develop lesson plans and training syllabi",
        "Prepare students for knowledge tests and checkrides",
      ],
      prerequisites: [
        "Commercial Pilot ASEL",
        "Strong teaching/communication mindset",
        "Current FAA medical and CFI study materials",
      ],
      idealFor: [
        "Commercial pilots pursuing their first flying job",
        "Those who enjoy mentoring and coaching",
        "Pilots building time toward airline or corporate goals",
      ],
    },
    {
      title: "Flight Instructor Instrument (CFII)",
      slug: "flight-instructor-instrument",
      imagePath: "/src/assets/instructor-instrument.jpg",
      imageAlt: "Instructor and student working on instrument approach charts",
      description:
        "61 Training Program, Gleim CFII syllabus. Take your teaching to the next level. Train pilots for safe, precise instrument flight as a CFII.",
      syllabus: "Gleim CFII",
      part: "Part 61",
      highlights: [
        "Teaching IFR procedures and approach standards",
        "IFR‑specific risk management and weather analysis",
        "Automation management and abnormal procedures",
        "Developing IFR training scenarios and stage checks",
      ],
      outcomes: [
        "Instruct instrument students to ACS standards",
        "Author IFR endorsements and track instrument currency",
        "Mentor safe, systems‑aware instrument pilots",
      ],
      prerequisites: [
        "CFI (ASEL) and Instrument Rating",
        "Proficiency with IFR procedures and avionics",
        "Current FAA medical",
      ],
      idealFor: [
        "Active CFIs expanding qualifications",
        "Career builders targeting higher‑value instruction",
        "Safety‑focused mentors",
      ],
    },
  ],
};

export default programs;
