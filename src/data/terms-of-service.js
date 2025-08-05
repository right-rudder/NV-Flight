import {
  COMPANY_NAME,
  EMAIL_ADDRESS,
  WEBSITE_URL,
  CITY_STATE,
} from "../consts";

const terms = {
  data: {
    heading: `Terms of Service of<br /> ${COMPANY_NAME}`,
    subheading: `Last updated: 04/10/2025`,
    content: [
      {
        heading: "Terms",
        paragraphs: [
          `By accessing this website, accessible from ${WEBSITE_URL}, you agree to be bound by these Website Terms and Conditions of Use and that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trademark law.`,
        ],
      },
      {
        heading: "Use License",
        paragraphs: [
          `Permission is granted to temporarily download one copy of the materials on ${COMPANY_NAME}'s website for personal, non-commercial transitory viewing only. This is a license grant, not a transfer of title, and under this license you may not:`,
          "• Modify or copy the materials",
          "• Use the materials for any commercial purpose or public display",
          "• Attempt to reverse engineer any software contained on the website",
          "• Remove any copyright or proprietary notations from the materials",
          "• Transfer the materials to another person or mirror them on another server",
          `${COMPANY_NAME} may terminate this license if any of these restrictions are violated. Upon termination, you must destroy any downloaded materials in your possession, whether in printed or electronic format.`,
        ],
      },
      {
        heading: "Disclaimer",
        paragraphs: [
          `All materials on ${COMPANY_NAME}’s website are provided “as is.” ${COMPANY_NAME} makes no warranties, expressed or implied, and disclaims all other warranties. Furthermore, ${COMPANY_NAME} does not warrant or make any representations concerning the accuracy or reliability of the materials or any linked sites.`,
        ],
      },
      {
        heading: "Limitations",
        paragraphs: [
          `${COMPANY_NAME} and its suppliers shall not be liable for any damages arising out of the use or inability to use the materials on its website, even if ${COMPANY_NAME} or a representative has been notified of the possibility of such damage. Some jurisdictions do not allow limitations on implied warranties or liability for incidental damages, so these limitations may not apply to you.`,
        ],
      },
      {
        heading: "Revisions and Errata",
        paragraphs: [
          `The materials on ${COMPANY_NAME}’s website may include technical, typographical, or photographic errors. ${COMPANY_NAME} does not warrant that any materials are accurate, complete, or current. We may make changes at any time without notice but are not obligated to update them.`,
        ],
      },
      {
        heading: "Links",
        paragraphs: [
          `${COMPANY_NAME} has not reviewed all of the sites linked to this website and is not responsible for the content of any such linked site. The presence of a link does not imply endorsement. Use of any linked website is at the user's own risk.`,
        ],
      },
      {
        heading: "Site Terms of Use Modifications",
        paragraphs: [
          `${COMPANY_NAME} may revise these Terms of Use at any time without notice. By using this website, you agree to be bound by the then-current version of these Terms and Conditions.`,
        ],
      },
      {
        heading: "Your Privacy",
        paragraphs: [
          "Please review our Privacy Policy to understand how we collect, use, and protect your data.",
        ],
      },
      {
        heading: "Governing Law",
        paragraphs: [
          `Any claims related to ${COMPANY_NAME}’s website shall be governed by the laws of the State of Arizona, without regard to conflict of law provisions.`,
        ],
      },
      {
        heading: "Contact Us",
        paragraphs: [
          `If you have questions or feedback about our Terms of Service, please reach out to us at ${EMAIL_ADDRESS}.`,
        ],
      },
    ],
  },
};

export default terms;
