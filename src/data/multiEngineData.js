import { COMPANY_NAME } from "../consts";

const multiEngineData = {
  pageTitle: `Multi-Engine Rating Course in Reno, NV | ${COMPANY_NAME}`,
  pageDescription:
    "Earn your Multi-Engine Rating at NV Flight Flight School in Reno, NV. Master twin-engine aircraft operations and expand your career opportunities with expert training.",
  pageKeywords:
    "multi-engine rating Reno NV, twin-engine pilot training Reno, flight school Reno NV, commercial pilot training Reno, aviation school Reno NV, multi-engine certification Reno",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/montain-&-plane2.jpg",
    imageAlt: "NV Flight Flight School student by a multi-engine airplane",
    headerH1: `Multi-Engine <br>RATING</span>`,
    paragraph: `Take your flying skills to the next level with NV Flight Flight School's Multi-Engine Rating program. Learn to operate twin-engine aircraft with confidence and precision.`,
    buttons: [
      {
        name: "Enroll Today",
        link: "/enroll",
        primary: false,
      },
    ],
  },

  // Program Details
  details: {
    upperHeading: "Expand Your Skills with a",
    heading: "Multi-Engine Rating",
    subHeading:
      "A Multi-Engine Rating allows you to fly aircraft with more than one engine, increasing your capabilities and career opportunities.",

    title: "Overview",
    description: `
      The Multi-Engine Rating (MER) program at NV Flight Flight School is designed for pilots who want to expand their skill set by learning to fly twin-engine aircraft. This rating is essential for those pursuing a career in commercial aviation and offers a deeper understanding of complex aircraft systems.
      <br/>
      <br/>
      During the course, you will receive hands-on training in multi-engine aerodynamics, emergency procedures, engine-out operations, and aircraft performance calculations. You will learn how to safely manage engine failures, asymmetrical thrust, and other challenges unique to multi-engine flying.
      <br/>
      <br/>
      By the end of this program, you will have mastered the skills needed to pass the FAA Multi-Engine checkride and confidently operate multi-engine aircraft in various flight conditions.`,

    keyPoints: [
      "Master Twin-Engine Aircraft Operations",
      "Learn Advanced Emergency Procedures",
      "Increase Career Opportunities in Commercial Aviation",
      "Comprehensive Ground & Flight Training",
    ],

    addons: [
      {
        title: "Multi-Engine Commercial Pilot",
        description:
          "With the multi-engine add-on to your commercial rating, you can unlock new career opportunities in commercial aviation. Our integrated training program prepares you for the demands of a professional pilot career. We start training with checkride date set.",
        duration: "~7-10 days",
      },
    ],

    cta: {
      imagePath: "/src/assets/montain-&-plane2.jpg",
      imageAlt: "Female pilot smiling",
      title: "Enroll in the Multi-Engine Rating Program",
      description:
        "Advance your aviation skills and career opportunities by earning your Multi-Engine Rating at NV Flight Flight School.",
      button: {
        name: "Enroll Now",
        link: "/enroll",
      },
    },

    faqs: [
      {
        question: "How long does it take to get a Multi-Engine Rating?",
        answer:
          "Most students complete their MER in 1-2 weeks, depending on training frequency and proficiency and having completed Commercial Pilot Certificate.",
      },
      {
        question:
          "Do I need a Commercial Pilot License before getting a Multi-Engine Rating?",
        answer:
          "No, you can obtain a Multi-Engine Rating with a Private Pilot License, but it is often pursued alongside a Commercial Pilot License.",
      },
      {
        question: "What can I do with a Multi-Engine Rating?",
        answer:
          "With an MER, you can fly multi-engine aircraft, increasing job opportunities in commercial aviation, charter operations, and corporate flying.",
      },
    ],
  },
};

export default multiEngineData;
