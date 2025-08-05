import { COMPANY_NAME } from "../consts";

const coursesIndex = {
  data: {
    // SEO Header Stuff
    pageTitle: `Training Programs | ${COMPANY_NAME}`,
    pageDescription:
      "Discover NVFlight Flight School’s comprehensive pilot training programs. From Private Pilot License to advanced certifications like Instrument Rating, Multi-Engine, and Certified Flight Instructor, our expert-led courses are designed to help you achieve your aviation dreams.",
    pageKeywords:
      "flight training courses Arizona, aviation certifications, private to commercial pilot, multi-engine rating training, CFI courses Reno, aviation school programs",

    // Top Header
    header: {
      stars: true,
      imagePath: "/src/assets/airline-pilot-courses-at-NVFlight-flight-school.webp",
      imageAlt:
        "Photograph of a NVFlight Flight School aircraft soaring over the Arizona landscape",
      headerH1: `Pilot <br>PROGRAMS</span>`,
      paragraph: `Join NVFlight Flight School and take your first step towards a successful aviation career. Whether you're starting with a discovery flight or pursuing advanced ratings, we’re here to support you every step of the way.`,
      buttons: [
        {
          name: "Enroll Today",
          link: "/enroll-at-NVFlight",
          primary: false,
        },
        {
          name: "Program Guide",
          link: "/path",
          primary: false,
        },
      ],
    },
  },
};

export default coursesIndex;
