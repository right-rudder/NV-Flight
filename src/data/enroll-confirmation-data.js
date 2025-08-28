import { COMPANY_NAME, KEYWORDS } from "../consts";

const enrollConfirmation = {
  data: {
    //SEO Header Stuff
    pageTitle: `Enrollment Confirmation | ${COMPANY_NAME}`,
    pageDescription: `Thank you for enrolling at ${COMPANY_NAME}. Please allow 1-2 business days for one of our Training Support Specialists to get in touch with you.`,
    pageKeywords: `discovery flight, contact us, enroll at ${COMPANY_NAME}, discovery flight training, discovery flight school, aviation academy, ${COMPANY_NAME}, flight training programs, aviation goals, ${KEYWORDS}`,

    header: {
      imagePath: "/src/assets/montain-&-plane2.jpg",
      imageAlt: `${COMPANY_NAME} crew pulling plane from hangar`,
      headerH1: "ON YOUR WAY TO BECOMING A PILOT",
      paragraph: `Thank you for your interest in ${COMPANY_NAME}. This is the first step to becoming a pilot!<br>Please allow 1-2 business days for one of our Training Support Specialists to get in touch with you`,
      buttons: [
        {
          name: "Home Page",
          link: "/",
          primary: false,
        },
      ],
    },
  },
};

export default enrollConfirmation;
