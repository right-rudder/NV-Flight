import { COMPANY_NAME, KEYWORDS } from "../consts";

const contactConfirmation = {
  data: {
    //SEO Header Stuff
    pageTitle: `Contact Confirmation | ${COMPANY_NAME}`,
    pageDescription: `Start your aviation journey with a discovery flight at ${COMPANY_NAME}. Contact us to schedule your flight today!`,
    pageKeywords: `discovery flight, contact us, enroll at ${COMPANY_NAME}, discovery flight training, discovery flight school, aviation academy, ${COMPANY_NAME}, flight training programs, aviation goals, ${KEYWORDS}`,

    header: {
      imagePath: "/src/assets/montain-&-plane2.jpg",
      imageAlt: `${COMPANY_NAME} crew pulling plane from hangar`,
      headerH1: "THANK YOU",
      paragraph: `Thank for your interest in ${COMPANY_NAME}. This is the first step to achieving your aviation goals!<br>Please allow 1-2 business days for one of our Training Support Specialists to get in touch with you`,
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

export default contactConfirmation;
