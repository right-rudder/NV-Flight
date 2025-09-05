const homePage = {
  data: {
    // SEO Header Stuff
    pageTitle: "NV Flight Pilot Training | Flight Training and Flight School in Reno, NV",
    pageDescription:
      "NV Flight School offers flight training in Reno, NV. We offer private pilot training, instrument rating training, commercial pilot training, and more. Contact us today!",
    pageKeywords:
      "flight training, flight school, pilot training, private pilot training, instrument rating training, commercial pilot training, Reno, NV",

    // top header
    header: {
      imagePath: "/src/assets/hero-image.jpg",
      imageAlt: "NV Flight School Cessna 172 on the runway",
      headerH1: `Pilot Training in Reno, NV`,
      paragraph:
        "Take the first step towards your aviation dreams with NV Flight School. Whether you're looking to fly for fun or pursue a career in aviation, we have the training programs to help you succeed.",
      buttons: [
        {
          name: "Get Started",
          link: "/enroll",
          primary: true,
        },
        {
          name: "Book a Discovery Flight",
          link: "/discovery-flight",
          primary: false,
        },
      ],
    },

    whyElite: {
      upperHeading: "Why NV Flight School",
      heading: "Our Commitment",
      descriptions: [
        "Founded in 2014 with a vision to serve aspiring pilots in Reno, NV Flight School continues to be one of the region’s premier flight institutions. Join us and make your flying dreams come true!",
        "NV Flight School is centrally located in Reno, NV, just a short drive from Phoenix. We offer professional and customized flight training programs, including one of the only Multi-Engine Accelerated courses in the area.",
        "Our team of experienced instructors is dedicated to providing you with the best training experience possible. We are committed to helping you achieve your goals and become a safe, competent pilot.",
      ],
      bullets: [
        {
          title: "Experience in Aviation",
          descriptions: [
            "Our instructors are seasoned professionals with years of experience in the aviation industry.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Individualized Attention",
          descriptions: [
            "We provide personalized training to ensure you receive the attention you need to succeed.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Excellent Customer Service",
          descriptions: [
            "Our team is dedicated to providing you with the best customer service experience possible.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Structured Lessons",
          descriptions: [
            "Our programs are designed to provide you with a structured learning experience that will help you succeed.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
      ],
      imagePath: "/src/assets/montain-&-plane.jpg",
      imageAlt: "NV Flight School Cessna 172 waiting for takeoff",
    },

    quizCTA: {
      upperHeading: "Take Our Quiz",
      heading: "Can You Become a Pilot?",
      descriptions: [
        "Many aspiring pilots hesitate due to concerns about cost, time, and safety. These concerns often arise from online research and general uncertainty. We understand these valid concerns and encourage you to speak with an NV Flight School team member to address any questions.",
        "At NV Flight School, you don't need to make a substantial financial commitment upfront. It all begins with an affordable discovery flight, costing only a few hundred dollars. Pursuing your pilot's license is indeed a significant time investment, but it's a life-changing achievement with long-lasting rewards. Safety is our utmost priority, ensuring your journey to becoming a pilot is both fulfilling and safe.",
        `Wondering if a pilot's life is right for you? Discover if the world of aviation is right for you by taking our "Is Flying Right for Me?" quiz. This quiz is designed to help you explore your interests and determine if the skies are where you belong. Get started by clicking below.`,
      ],
      imageLegend: `Luke Poulos<br><small class="text-white font-normal text-sm">Founder & CEO</small>`,
      imagePath: "src/assets/montain-&-plane.jpg",
      imageAlt: "NV Flight School Cessna 172 instrument panel",
      quizModal: true,
    },

    blogfeed: {
      upperHeading: "Our Blog",
      heading: "NV Flight School News",
      description:
        "Stay up to date with the latest news, pilot resources and updates from NV Flight School.",
    },

    flyWithUsCTA: {
      imagePath: "src/assets/montain-&-plane.jpg",
      imageAlt: "NV Flight School team on the runway",
      headerH1: `<span class="text-primary-600">Start Your Aviation Journey</br></span>With a Discovery Flight`,
      paragraph:
        "A discovery flight is the best way to determine if being a pilot is right for you. Whether you're trying it out for fun or want to fly professionally, you’ll see Reno from a whole new perspective.",
      buttons: [
        {
          name: "Schedule Today",
          link: "/discovery-flight",
          primary: true,
        },
      ],
    },

    testimonials: {
      upperHeading: "The NV Flight School Family",
      heading: "Our Students Love Us",
      headingText: [
        "While our main goal is to train future pilots safely and effectively, it’s important to us at NV Flight School that our students have a fun and comfortable environment. We are proud of the relationships we’ve built.",
        "Check out what they have to say about their experiences with us.",
      ],
      buttonText: "Leave Us a Review",
      buttonLink: "https://g.page/r/CXZqN1dEQOpxEBM/review",
      reviews: [
        {
          title: "Best Flight School in Reno!",
          body: "NV Flight constantly reminds me of how welcoming and supportive the aviation community can be, and their knowledgeable flight instructors truly put the students and their safety first. The office staff always greet people with a smile, and the aircraft are amazingly maintained. I would highly recommend this flight school for anyone just getting started in aviation or looking to advance their skills!",
          author: "Lauren E.",
        },
        {
          title: "Great Flight Training",
          body: "I'm 19 and I recently acquired my certificate. The instructors were extremely helpful and patient throughout the process. Highly recommend NV Flight School to anyone looking to start their aviation journey.",
          author: "Jack R.",
        },
        {
          title: "Personalized and Memorable Intro Flight",
          body: "I booked my man an introductory flight as a surprise for Father’s Day. We had one-on-one time with the instructor without feeling rushed. It was very laid back, and we were able to take lots of videos and pictures. Affordable price as well! HIGHLY recommend them. Will definitely go back for more.",
          author: "Lara D.",
        },
        {
          title: "Exceptional for All Levels of Training",
          body: "I would recommend NV Flight for anyone looking to learn to fly or achieve advanced ratings. The instruction is professional, and the aircraft are top-notch. A great place to fly.",
          author: "Jack W.",
        },
        {
          title: "Ideal for Refreshing or Advancing Your Skills",
          body: "If you're looking for a great flight school to touch up on some skills, pursue a new rating, or just get current, I would highly recommend NV Flight.",
          author: "Roger B.",
        },
        {
          title: "Fantastic Rentals and Great Support",
          body: "A great place to learn how to fly and rent reasonably priced single-engine aircraft. Cherie at the office is amazing. Planes are well-maintained and ready to fly every time I go for a rental. Thank you, NV Flight!",
          author: "Fernando L.",
        },
      ],
    },
  },
};

export default homePage;
