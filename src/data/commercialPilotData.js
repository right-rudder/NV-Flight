import { COMPANY_NAME } from "../consts";

const commercialPilotData = {
  pageTitle: `Commercial Pilot | ${COMPANY_NAME}`,
  pageDescription:
    "Launch your professional aviation career with NV Flight Flight School’s Commercial Pilot License (CPL) program. Gain the skills and experience to fly for hire.",
  pageKeywords:
    "commercial pilot license Arizona, flight school Reno, CPL certification, professional pilot training, aviation career, commercial aviation training",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/montain-&-plane2.jpg",
    imageAlt:
      "NV Flight Flight School student and flight instructor in a Cessna airplane cockpit",
    headerH1: `Commercial <br>PILOT LICENSE</span>`,
    paragraph: `Turn your passion for flying into a career with NV Flight Flight School's Commercial Pilot License program. Gain the expertise needed to fly professionally and get paid to do what you love.`,
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
    upperHeading: "Become a Professional Pilot with a",
    heading: "Commercial Pilot License",
    subHeading:
      "A CPL allows you to fly for hire, opening doors to careers in airlines, charter flights, corporate aviation, and more.",

    title: "Overview",
    description: `
      The Commercial Pilot License (CPL) program at NV Flight Flight School is designed for pilots who want to take their skills to a professional level. This program provides advanced flight training, in-depth aeronautical knowledge, and real-world experience to prepare you for a career in aviation.
      <br/>
      <br/>
      You will refine your piloting skills, master precision maneuvers, and develop the knowledge necessary for safe and efficient commercial flight operations. The course covers advanced aerodynamics, performance-based navigation, emergency procedures, and FAA regulations.
      <br/>
      <br/>
      Upon completion, you will be fully prepared to pass the FAA Commercial Pilot checkride. Whether you plan to become an airline pilot, charter pilot, or flight instructor, this certification is an essential step toward achieving your aviation career goals.`,

    keyPoints: [
      "Earn a License to Fly for Hire",
      "Master Advanced Flight Maneuvers",
      "Develop Professional-Level Aviation Knowledge",
      "Comprehensive Flight & Ground Training",
    ],

    cta: {
      imagePath: "/src/assets/montain-&-plane2.jpg",
      imageAlt: "Female pilot smiling",
      title: "Enroll in the Commercial Pilot Program",
      description:
        "Take the next step in your aviation career. Join NV Flight Flight School's Commercial Pilot program and train to become a professional pilot.",
      button: {
        name: "Enroll Now",
        link: "/enroll",
      },
    },

    faqs: [
      {
        question: "How long does it take to get a Commercial Pilot License?",
        answer:
          "Most students complete their CPL in 2-3 months, depending on training frequency and flight hours logged.",
      },
      {
        question: "Do I need an Instrument Rating before starting?",
        answer:
          "Yes, an Instrument Rating is required before obtaining a Commercial Pilot License.",
      },
      {
        question: "What can I do with a Commercial Pilot License?",
        answer:
          "With a CPL, you can work as a commercial pilot in charter flights, corporate aviation, flight instruction, and more.",
      },
    ],
  },
};

export default commercialPilotData;
