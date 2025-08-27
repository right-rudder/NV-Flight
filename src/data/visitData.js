import { COMPANY_NAME } from "../consts";

const visitData = {
  pageTitle: `Visit NV Flight Flight School in Reno, NV | ${COMPANY_NAME}`,
  pageDescription:
    "Visit NV Flight Flight School in Reno, NV, and explore our state-of-the-art aviation training facilities. Schedule a tour today to kickstart your pilot training journey.",
  pageKeywords:
    "flight school Reno NV, visit NV Flight, aviation training Reno, flight school tour Reno, pilot training facilities Reno NV",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/montain-&-plane2.jpg",
    imageAlt: "NV Flight Flight School campus and facilities",
    headerH1: `Visit US`,
    paragraph: `Explore NV Flight Flight School and see firsthand our state-of-the-art facilities and training environment. Schedule a visit today and take the first step towards your aviation career.`,
    buttons: [
      {
        name: "Enroll Today",
        link: "/enroll",
        primary: false,
      },
      {
        name: "Contact Us",
        link: "#contact",
        primary: false,
      },
    ],
  },

  // Visit Details
  details: {
    upperHeading: "Plan Your Visit",
    heading: "Welcome to NV Flight",
    subHeading:
      "We invite you to visit NV Flight Flight School and experience our exceptional training environment. Our team is excited to show you around and answer any questions you may have.",
  },
};

export default visitData;
