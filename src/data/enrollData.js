import {
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  SITE_DESCRIPTION,
} from "../consts";

export default {
  upperHeading: "Enroll to Fly",
  description: `Get to the skies and experience flying like never before. Sign up
            and start your training to become a pilot. Fill out the form to get
            started.`,
  contactTitle: "Contact Us",
  address: `${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`,
  phone: PHONE_NUMBER,
  email: EMAIL_ADDRESS,
  sections: [
    {
      title: "Why Fly at NVFlight?",
      content: "Your success is our priority. Learning to fly is a transformative experience, and we are dedicated to providing you with the knowledge, skills, and support you need to reach new heights.",
    },
    {
      title: "Programs to Fit Your Schedule",
      content: "We offer full-time and part-time programs to match your schedule, whether you're training for a career or for recreation.",
    },
    {
      title: "Start Your Career",
      content: "Many of our students have trained with us and successfully transitioned to airline careers. This is your opportunity to take flight!",
    },
  ],
  checkboxText: `I agree to <a href="/terms-of-service" target="_blank" class="font-semibold hover:underline">terms</a> & <a href="/privacy-policy" target="_blank" class="font-semibold hover:underline">conditions</a> provided by the company. By providing my phone number, I agree to receive text messages from the business.`,
};
