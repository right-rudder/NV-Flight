import { COMPANY_NAME } from "../consts";

const teamData = {
  pageTitle: `The NVFlight Crew | ${COMPANY_NAME}`,
  pageDescription:
    "Discover the dedicated team behind NVFlight Flight School. Our leadership and certified flight instructors are committed to providing exceptional training and support to help you achieve your aviation goals.",
  pageKeywords:
    "NVFlight Flight School team, flight instructors, aviation experts, leadership team, certified flight instructors, aviation training",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/NVFlight-student-pilot-and-cfi-smiling-croped.jpg",
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
    subHeading: "Our leadership team consists of skilled and experienced aviation experts who have a deep passion for the flight training and are dedicated to delivering exceptional training and support to our students.",

    leadership:[
      {
        img: "/src/assets/crew-NVFlight-Greg-updated-headshot.jpg",
        alt: "Greg Hadley Co-Owner at NVFlight Flight School",
        name: "Greg Hadley",
        title: "Owner",
        summary: "Greg has had a lifelong passion for airplanes and flying, which began at a young age. While still in high school, he worked at Sky Park in Bountiful, Utah, and earned his private pilot's license. Though life led him through a successful career in HVAC construction and over 20 years in real estate, he has returned to his first love: aviation. Together with his wife, he owns and operates NVFlight, a venture that combines their shared love for flying. As he continues to work toward earning additional ratings, Greg balances his professional pursuits with personal interests that include fishing, spending time with family, and solving puzzles.",
      },
      {
        img: "/src/assets/Julie-Hadley.webp",
        alt: "Julie Hadley Co-Owner at NVFlight Flight School",
        name: "Julie Hadley",
        title: "Owner",
        summary: "With 18 years of experience in education, Julie is a lifelong learner and passionate teacher. Known for her organizational skills and talent for working with numbers, she thrives in both creative and analytical pursuits. Outside the classroom, she enjoys reading, sewing, paddle boarding, and exploring family history. A true collaborator, she loves working alongside her husband and supporting him in their shared ventures, including their exciting journey with NVFlight. Above all, she treasures spending time with her children and grandchildren, cherishing every moment with her growing family.",
      },
    ],

    heading2: "Our Certified Flight Instructors",
    subHeading2: "At NVFlight, our dedicated instructors prioritize delivering top-notch flight training to students. They combine their extensive aviation expertise, passion for the field, and commitment to creating a safe and supportive learning atmosphere. By doing so, they enable students to reach their aspirations and develop into proficient pilots.",

    team:[
      {
        img: "/src/assets/Scott-Wilson.webp",
        name: "Scott Wilson",
        title: "A&P, IA, MEI",
      },
      {
        img: "/src/assets/Anders-Jones.webp",
        name: "Anders Jones",
        title: "CFI/CFII",
      },
      {
        img: "/src/assets/Bridon-Bowen.webp",
        name: "Bridon Bowen",
        title: "CFI/CFII",
      },
      {
        img: "/src/assets/Blake-Meservy.webp",
        name: "Blake Meservy",
        title: "CFI/CFII",
      },
      {
        img: "/src/assets/Davin-Hansen.webp",
        name: "Davin Hansen",
        title: "CFI/CFII",
      },
      {
        img: "/src/assets/Adel-Ho.webp",
        name: "Adel Ho",
        title: "CFI/CFII/MEI",
      },
      {
        img: "/src/assets/Jake-Horn.webp",
        name: "Jake Horn",
        title: "CFI/CFII/MEI",
      },
      {
        img: "/src/assets/Dolly-Woodhall.webp",
        name: "Dolly Woodhall",
        title: "CFI/CFII",
      },
      {
        img: "/src/assets/Josh-Perkins.webp",
        name: "Josh Perkins",
        title: "CFI/CFII",
      },
      {
        img: "/src/assets/Porter-Arnett.webp",
        name: "Porter Arnett",
        title: "CFI/CFII",
      },
      {
        img: "/src/assets/Jessica-Roy.webp",
        name: "Jessica Roy",
        title: "CFI/CFII",
      },
      {
        img: "/src/assets/Zach-Figgins.webp",
        name: "Zach Figgins",
        title: "CFI/CFII",
      },
      {
        img: "/src/assets/Isaac-Young.webp",
        name: "Isaac Young",
        title: "CFI/CFII/MEI",
      },
      {
        img: "/src/assets/Mitch-Lovell.webp",
        name: "Mitch Lovell",
        title: "CFI/CFII",
      },
      {
        img: "/src/assets/Devon-Webb.webp",
        name: "Devon Webb",
        title: "CFI/CFII",
      },
      {
        img: "/src/assets/crew-NVFlight-Garrett-Ruddell-CFI.jpg",
        name: "Garrett Ruddell",
        title: "CFI",
      },
      {
        img: "/src/assets/Corey-Elmquist.webp",
        name: "Corey Elmquist",
        title: "A&P",
      },
      {
        img: "/src/assets/crew-NVFlight-Sara-Van-Sciver-Office-Manager.jpg",
        name: "Sara Van Sciver",
        title: "Office Manager",
      },
      {
        img: "/src/assets/crew-NVFlight-Wendi-Painter-Office-Assistant-.jpg",
        name: "Wendi Painter",
        title: "Office Assistant",
      },
    ],

    cta: {
      title: "Enroll in the CFI Program",
      description:
        "Start your journey as a Certified Flight Instructor at NVFlight Flight School and gain the experience needed for a successful aviation career.",
      button: {
        name: "Enroll Now",
        link: "/enroll-at-NVFlight",
      },
    },

    faqs: [
      {
        question: "How long does it take to become a Certified Flight Instructor?",
        answer:
          "Most students complete their CFI training in 4-8 weeks, depending on proficiency and study schedule.",
      },
      {
        question: "Do I need a Commercial Pilot License before becoming a CFI?",
        answer:
          "Yes, a Commercial Pilot License (CPL) is required before obtaining a Certified Flight Instructor (CFI) certification.",
      },
      {
        question: "What can I do with a CFI certification?",
        answer:
          "As a CFI, you can teach student pilots, build valuable flight hours, and gain experience for future airline or corporate pilot opportunities.",
      },
    ],
  },
};

export default teamData;
