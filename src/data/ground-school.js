import { COMPANY_NAME, PHONE_NUMBER } from "../consts";

const groundSchoolData = {
  pageTitle: `In-Person Ground School Sessions in Reno, NV | ${COMPANY_NAME}`,
  pageDescription:
    "Join NVFlight's in-person ground school sessions led by experienced instructors. Open to all student pilots—whether you're enrolled in a school or not. Just $50 for 3 hours of training in Reno, NV.",
  pageKeywords:
    "ground school Reno NV, pilot ground school, aviation classes Reno, flight training Reno, NVFlight Flight School ground school, aviation knowledge classes",

  // Top Header
  header: {
    stars: false,
    imagePath: "/src/assets/montain-&-plane2.jpg",
    imageAlt: "NVFlight students participating in a ground school session",
    headerH1: `Ground School at <br>NVFlight`,
    paragraph: `Join our in-person ground school sessions in Reno, NV—open to anyone who wants to sharpen their aviation knowledge. Whether you're training at NVFlight, another school, or haven’t started flight training yet, our $50, 3-hour sessions are a great way to build your confidence and understanding. Each session is led by our instructor Dolly Woodhall and covers essential topics for every student pilot.`,
    buttons: [
      {
        name: "Sign Up Now",
        link: "#form",
        primary: true,
      },
      {
        name: "See Schedule",
        link: "#schedule",
        primary: true,
      },
      {
        name: "Call to Register",
        link: `tel:${PHONE_NUMBER}`,
        primary: true,
      },
    ],
  },
};

export default groundSchoolData;
