import {
  COMPANY_NAME,
  KEYWORDS,
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  GMAPS,
} from "../consts";

const discoveryForm = {
  data: {
    // SEO Header Stuff
    pageTitle: `Discovery Flight Reno | ${COMPANY_NAME}`,
    pageDescription: `Take the controls and experience the thrill of flying over Reno, Nevada with a discovery flight at ${COMPANY_NAME}. Enjoy stunning views of the Sierra Nevada mountains, Lake Tahoe, and the Reno skyline. Schedule your introductory flight today and see if you have what it takes to become a pilot!`,
    pageKeywords: `${KEYWORDS}, discovery flight Reno, first flight lesson Nevada, introductory flight Reno NV, try flying plane Reno, scenic flights Lake Tahoe, experience flying Nevada, pilot intro flight Reno, learn to fly Reno, flight experience gift Nevada`,

    header: {
      imagePath: "/src/assets/montain-&-plane2.jpg",
      imageAlt: `${COMPANY_NAME} aircraft flying over Reno and the Sierra Nevada mountains`,
      headerH1: "Discovery Flight",
      paragraph: `Experience the thrill of flight firsthand! Take the controls and soar over Reno, Nevada with an introductory flight at ${COMPANY_NAME}. Our discovery flights are the perfect way to explore your interest in aviation.`,
      buttons: [],
    },

    info: {
      address_1: ADDRESS_LINE_1,
      address_2: ADDRESS_LINE_2,
      gmaps: GMAPS,
      phone_num: PHONE_NUMBER,
      email: EMAIL_ADDRESS,
      checkboxText: `I agree to <a href="/terms-of-service" target="_blank" class="font-semibold hover:underline">terms</a> & <a href="/privacy-policy" target="_blank" class="font-semibold hover:underline">conditions</a> provided by the company. By providing my phone number, I agree to receive text messages from the business.`,
    },
  },
};

export default discoveryForm;
