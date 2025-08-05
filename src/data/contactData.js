import {
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
} from "../consts";

export default {
  upperHeading: "Get in Touch",
  description: "Have questions or need more information? Contact us today and our team will be happy to assist you.",
  contactTitle: "Contact Information",
  address: `${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`,
  phone: PHONE_NUMBER,
  email: EMAIL_ADDRESS,
  sections: [
    {
      title: "How Can We Help?",
      content: "Whether you're looking for details on flight training programs, financing options, or scheduling a discovery flight, we're here to provide answers. Reach out and let us help you start your aviation journey.",
    },
    {
      title: "Visit Us",
      content: "Stop by our location to speak with our team in person, tour our facilities, and see our fleet. We recommend calling ahead to schedule a time.",
    },
    {
      title: "Stay Connected",
      content: "Follow us on social media for the latest updates, events, and training opportunities. We look forward to hearing from you!",
    },
  ],
  checkboxText: `I agree to <a href="/terms-of-service" target="_blank" class="font-semibold hover:underline">terms</a> & <a href="/privacy-policy" target="_blank" class="font-semibold hover:underline">conditions</a> provided by the company. By providing my phone number, I agree to receive text messages from the business.`,
};
