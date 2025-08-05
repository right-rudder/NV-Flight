import {
  COMPANY_NAME,
  SITE_DESCRIPTION,
  KEYWORDS,
  PHONE_NUMBER
} from "../consts";

const data500 = {
  data: {
    //SEO Header Stuff
    pageTitle: `500 | ${COMPANY_NAME}`,
    pageDescription:
      `This page shows error 500`,
    pageKeywords:
      `error 500`,


    header: {
      imagePath:
        "/src/assets/stock-victor-zhuk-3MYtBMg8Ex4-unsplash.jpg",
      imageAlt: `${COMPANY_NAME} plane taking off`,
      headerH1: `well, this is AWKWARD`,
      paragraph:
        `It appears the form you were trying to send crashed (better here then on the runway right? you're right we shouldn't joke about that, sorry). Please call us on ${PHONE_NUMBER} for your request, also please notify our staff of this error. <br>Now back to landing with you!`,
      buttons: [
        {
          name: "Home Page",
          link: "/",
          primary: false,
        },
        {
          name: "Call Us",
          link: `tel:${PHONE_NUMBER}`,
          primary: false,
        },
      ],
    },
  }
};

export default data500;