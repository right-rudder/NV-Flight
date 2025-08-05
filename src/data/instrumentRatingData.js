import { COMPANY_NAME } from "../consts";

const instrumentRatingData = {
  pageTitle: `Instrument Rating Course in Reno, NV | ${COMPANY_NAME}`,
  pageDescription:
    "Join NVFlight Flight School in Reno, NV, for our Instrument Rating course. Master IFR navigation, low-visibility flying, and advance your aviation career with expert training.",
  pageKeywords:
    "instrument rating Reno NV, IFR training Reno, flight school Reno NV, advanced pilot training Reno, aviation school Reno NV, instrument flight rules certification",

  // Top Header
  header: {
    stars: true,
    imagePath:
      "/src/assets/montain-&-plane2.jpg",
    imageAlt: "NVFlight Flight School Cirrus airplane instrument panel",
    headerH1: `Instrument <br>RATING</span>`,
    paragraph: `Advance your skills with NVFlight Flight School's Instrument Rating program. Learn to navigate through clouds, low visibility, and controlled airspace with confidence.`,
    buttons: [
      {
        name: "Enroll Today",
        link: "/enroll-at-NVFlight",
        primary: false,
      },
    ],
  },

  // Program Details
  details: {
    upperHeading: "Advance Your Skills with an",
    heading: "Instrument Rating Certification",
    subHeading:
      "An Instrument Rating (IFR) allows you to fly in all weather conditions, improving your safety and proficiency as a pilot.",

    title: "Overview",
    description: `
      The Instrument Rating (IFR) course at NVFlight Flight School is designed for pilots looking to enhance their flying abilities and operate safely in low-visibility conditions. This certification is a critical step for those pursuing a commercial aviation career or wanting to improve their overall pilot proficiency.
      <br/>
      <br/>
      Throughout the course, you will gain in-depth knowledge of IFR navigation, meteorology, and the complexities of controlled airspace. You will learn to rely solely on your aircraft's instruments to maintain precise altitude, heading, and approach procedures—even in adverse weather conditions.
      <br/>
      <br/>
      By the end of this program, you will be proficient in instrument flight techniques, holding patterns, approach procedures, and emergency protocols. Our expert instructors will ensure that you develop the skills and confidence to pass the FAA Instrument Rating checkride and safely operate under Instrument Flight Rules (IFR).`,

    keyPoints: [
      "Learn to Fly Safely in Low-Visibility Conditions",
      "Master IFR Navigation & Approach Procedures",
      "Enhance Your Skills for a Professional Pilot Career",
      "Comprehensive Ground & Flight Training",
    ],

    cta: {
      imagePath: "/src/assets/female_pilot_smiling.webp",
      imageAlt: "Female pilot smiling",
      title: "Enroll in the Instrument Rating Program",
      description:
        "Take your aviation skills to the next level. Join NVFlight Flight School's Instrument Rating program and become a more capable, professional pilot.",
      button: {
        name: "Enroll Now",
        link: "/enroll-at-NVFlight",
      },
    },

    faqs: [
      {
        question: "How long does it take to get an Instrument Rating?",
        answer:
          "Most students complete the training in 3-4 months, depending on flight frequency and study pace.",
      },
      {
        question: "Do I need a Private Pilot License first?",
        answer:
          "Yes, you must have a Private Pilot Certificate before pursuing an Instrument Rating.",
      },
      {
        question: "What does the training include?",
        answer:
          "The course includes IFR ground school, simulator training, in-flight instrument training, and FAA checkride preparation.",
      },
    ],
  },
};

export default instrumentRatingData;
