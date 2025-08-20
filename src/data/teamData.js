import { COMPANY_NAME } from "../consts";

const teamPageData = {
  pageTitle: `The NVFlight Crew | ${COMPANY_NAME}`,
  pageDescription:
    "Discover the dedicated team behind NVFlight Flight School. Our leadership and certified flight instructors are committed to providing exceptional training and support to help you achieve your aviation goals.",
  pageKeywords:
    "NVFlight Flight School team, flight instructors, aviation experts, leadership team, certified flight instructors, aviation training",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/montain-&-plane2.jpg",
    imageAlt:
      "NVFlight Flight School student and flight instructor in a Cessna airplane cockpit",
    headerH1: `Meet Our <br>TEAM</span>`,
    paragraph: `Get to know the passionate and experienced team at NVFlight Flight School. Our leadership and certified flight instructors are dedicated to helping you succeed in your aviation journey.`,
    buttons: [
      {
        name: "Enroll Today",
        link: "/enroll-at-NVFlight",
        primary: false,
      },
      {
        name: "Discovery Flight",
        link: "/discovery-flight",
        primary: false,
      },
    ],
  },

  // Program Details
  details: {
    upperHeading: "Meet the Crew",
    heading: "Leadership Team",
    subHeading:
      "Our leadership team consists of skilled and experienced aviation experts who have a deep passion for the flight training and are dedicated to delivering exceptional training and support to our students.",

    teamMembers: [
      {
        id: "emma-justis",
        name: "Emma Justis",
        role: "Owner & Chief Pilot",
        image: "/images/team/emma-justis.jpg",
        group: "Leadership",
        featured: true,
        certifications: ["ASEL COMM", "AMEL ATP", "CFI", "CFII"],
        bio:
          "Emma Justis is an Owner and Chief Pilot at NV Flight. Raised in Reno, she loves teaching people to fly across Nevada's stunning landscapes. With 4,000 flight hours, her background spans aerial photography, forest fire spotting, and corporate flying. When she isn't instructing in NV Flight's Piper Cherokees, she flies the Falcon 2000."
      },
      {
        id: "collin-justis",
        name: "Collin Justis",
        role: "Owner, Flight Instructor, Mechanic",
        image: "/images/team/collin-justis.jpg",
        group: "Leadership",
        featured: true,
        certifications: ["COMM ASEL", "CFI", "CFII", "A&P"],
        bio:
          "Collin Justis is the Co-Owner of NV Flight as well as a Flight Instructor and A&P Mechanic. He has been flying for 11 years and holds commercial fixed-wing and private rotor-wing certificates alongside his aviation mechanic license. Collin teaches private, instrument, and commercial students and finds deep fulfillment in guiding pilots to become safe, thoughtful aviators."
      },
      {
        id: "trygve",
        name: "Trygve",
        role: "Assistant Chief Pilot",
        image: "/images/team/trygve.jpg",
        group: "Leadership",
        featured: false,
        certifications: ["COMM ASEL", "CFI", "CFII"],
        bio:
          "Trygve is the Assistant Chief Pilot at NV Flight with more than 2,000 hours across 42 U.S. states and nine countries. Raised in an airline family at Lake Tahoe, he has lived in Europe and the Middle East. He began flying 13 years ago in southern Africa in a Cessna 182 and has since flown his Piper Dakota as far as Guatemala and Maine. He has instructed for three years and is passionate about helping people grow into skilled aviators."
      },

    // ——— Instructors ———
      {
        id: "joel-guasch",
        name: "Joel Guasch",
        role: "Flight Instructor",
        image: "/images/team/joel-guasch.jpg",
        group: "Instructors",
        featured: false,
        certifications: ["COMM ASEL", "AMEL", "CFI"],
        bio:
          "Joel Guasch is a Certified Flight Instructor dedicated to sharing the joy of flight. He blends deep aviation knowledge with hands-on training to help each student reach their potential. Outside the cockpit, Joel enjoys snowboarding, mountain biking, and time in nature—an adventurous spirit that complements his approach to aviation."
      },
      {
        id: "ben-roller",
        name: "Ben Roller",
        role: "Flight Instructor",
        image: "/images/team/ben-roller.jpg",
        group: "Instructors",
        featured: false,
        certifications: ["COMM ASEL", "AMEL", "CFI", "CFII"],
        bio:
          "Ben Roller is a CFI and CFII who teaches private, instrument, and commercial students. He fell in love with aviation after his first air show and later earned a bachelor's in Mechanical Engineering from the University of Nevada, Reno. After graduating, he pursued flight training and quickly realized he preferred the view from the flight deck to the office. When not flying, Ben is outdoors enjoying the Sierra Nevada."
      },
      {
        id: "jeremy",
        name: "Jeremy",
        role: "Flight Instructor",
        image: "/images/team/jeremy.jpg",
        group: "Instructors",
        featured: false,
        certifications: ["COMM ASEL", "CFI"],
        bio:
          "Jeremy is a Certified Flight Instructor with four years of flying experience. His teaching combines enthusiasm with a strong focus on safety, precision, and customer care. Inspired by NV Flight's supportive community and his family's encouragement, he helps the next generation of aviators turn their goals into reality."
      }
    ]
  },
};

export default teamPageData;
export const leadership = teamPageData.details.teamMembers.filter((m) => m.group === "Leadership");
export const instructors = teamPageData.details.teamMembers.filter((m) => m.group === "Instructors");
