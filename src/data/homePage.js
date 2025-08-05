const homePage = {
  data: {
    // SEO Header Stuff
    pageDescription:
      "NV Flight School offers flight training in Reno, NV. We offer private pilot training, instrument rating training, commercial pilot training, and more. Contact us today!",
    pageKeywords:
      "flight training, flight school, pilot training, private pilot training, instrument rating training, commercial pilot training, Reno, NV",

    // top header
    header: {
      imagePath: "/src/assets/hero-image-index.jpg",
      imageAlt: "NV Flight School Cessna 172 on the runway",
      headerH1: `WHERE DREAMS TAKE FLIGHT`,
      paragraph:
        "Take the first step towards your aviation dreams with NV Flight School. Whether you're looking to fly for fun or pursue a career in aviation, we have the training programs to help you succeed.",
      buttons: [
        {
          name: "Get Started",
          link: "/enroll-at-nv-flight-school",
          primary: true,
        },
        {
          name: "Book a Discovery Flight",
          link: "/discovery-flight",
          primary: true,
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
      headerH1: `<span class="text-accent-600">Start Your Aviation Journey</br></span>With a Discovery Flight`,
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
      buttonLink: "https://g.co/kgs/TLWS5Yz",
      reviews: [
        {
          title: "A More Affordable School with a Great Curriculum",
          body: "Awesome school! I’ve been flying here for a little over a year and have nothing but good to say. It is a more affordable school than most. They are also flexible and work with my schedule. I’m taking my commercial checkride in a few days, and I feel prepared for each stage of training.",
          author: "Jared H.",
        },
        {
          title: "One of the Best Flight Schools I’ve Trained At",
          body: "After several years and multiple flight schools, NV Flight School succeeded where everyone else failed. They found discrepancies in my logbook and insurance that previous schools missed. Thanks to their thorough staff, those mistakes were caught and fixed before becoming a problem.",
          author: "David D.",
        },
        {
          title: "Highly Recommended for Serious Pilots",
          body: "Training at NV Flight School has been a fantastic experience. The instructors are knowledgeable, patient, and truly invested in student success. Aircraft are well-maintained, and the operation runs seamlessly. Pricing is fair and transparent.",
          author: "Tanner G.",
        },
        {
          title: "Best School for Career-Oriented Pilots",
          body: "The perfect flight school if you want to make a career out of aviation! The instructors and administrators truly make you feel like they care and just want to see you succeed.",
          author: "Paul B.",
        },
        {
          title: "Flexibility That Fits Any Schedule",
          body: "NV Flight School is a great school. I appreciated the flexibility they provide, allowing me to work full-time while earning my PPL at the same time. Cannot thank my instructor enough for all the hard work she put into getting me ready for my checkride!",
          author: "Josh A.",
        },
        {
          title: "Supportive and Encouraging Student Environment",
          body: "Fantastic school! Great instructors and very affordable! I feel fortunate to find a school that allows me to work and learn aviation simultaneously. The student environment is healthy—not competitive, and everyone encourages each other.",
          author: "Kathryn W.",
        },
        {
          title: "Exceptional Instructors and Training",
          body: "NV Flight School is top-notch! I completed my CFI with them, and they helped me feel confident in my teaching. The instructors have a real passion for aviation—if you want to understand aviation deeply, this is the place to go!",
          author: "Zach F.",
        },
      ],
    },
  },
};

export default homePage;
