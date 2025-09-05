const fleetPage = {
  data: {
    pageTitle: "Our Fleet | Piper Cherokee 180 Aircraft at NV Flight School",
    pageDescription: "Explore NV Flight’s fleet of Piper Cherokee 180 aircraft in Reno, NV. Reliable, safe, and ideal for student pilots, mountain flying, and accelerated training.",
    pageKeywords:
      "NV Flight fleet, Piper Cherokee 180, Reno flight school planes, Nevada pilot training aircraft, mountain flying planes, Reno",

    header: {
      imagePath: "/src/assets/Planes-all-fleet-back.webp",
      imageAlt: "NV Flight fleet of Piper Cherokee aircraft on the ramp",
      headerH1: `Our Fleet`,
      paragraph:
        "Explore our reliable Piper Cherokee 180 aircraft. Each is maintained to the highest standards, providing a safe, consistent, and professional training environment.",
      buttons: [
        {
          name: "Contact Us",
          link: "/contact",
          primary: true,
        },
        {
          name: "Explore Training Options",
          link: "/programs",
          primary: true,
        },
      ],
    },

    fleet: {
      title: "Our Fleet",
      description:
        "Our primary training fleet consists of well-maintained Piper Cherokee 180 aircraft. Known for their reliability, stability, and forgiving handling, these aircraft are ideal for student pilots, mountain flying, and accelerated training programs.",
      imagePath: "/src/assets/placeholder-img.jpg",
      imageAlt: "Lineup of NV Flight Piper Cherokee 180 aircraft on the tarmac",
      planes: [
        {
          name: "Cherokee 180 - PIPER PA-28-180",
          tail: "N6576J",
          model: "Cherokee 180",
          summary:
            "1968 Piper Cherokee 180 – a four-seat, single-engine trainer perfect for all levels of flight training.",
          year: 1968,
          manufacture: "Piper Aircraft",
          engine: "Lycoming O-360-A4A (Reciprocating)",
          weight: "2,400 pounds gross weight",
          horsepower: "180 HP",
          airworthiness: "Standard/Normal",
          speed: "Cruise ~107 mph",
          imagePath: "/src/assets/Plane-N6576J-ground-sunset.webp",
          imageAlt: "Piper Cherokee 180 N6576J parked on the ramp",
          description:
            "The Cherokee 180 N6576J is a versatile trainer equipped for private through commercial training. Its balanced performance and forgiving handling make it an excellent choice for pilots in training.",
          features: [
            "Four-seat cabin",
            "Dependable Lycoming engine",
            "Stable low-wing design",
            "Perfect for mountain flying",
          ],
          avionics: [
            "Dual radios",
            "Basic IFR instrumentation",
            "GPS navigation",
          ],
          equipment: ["Four-place intercom", "Standard training configuration"],
          images: [
            {
              imagePath: "/src/assets/Plane-N6576J-flying-sky.webp",
              imageAlt: "Cockpit view of Cherokee 180 N6576J",
            },
            {
              imagePath: "/src/assets/Plane-N6576J-ground-blue-sky-clouds.webp",
              imageAlt: "Side view of Cherokee 180 N6576J",
            },
            {
              imagePath: "/src/assets/N6576J- (3).webp",
              imageAlt: "Side view of Cherokee 180 N6576J",
            },
          ],
        },
        {
          name: "Cherokee 180 - PIPER PA-28-180",
          tail: "N7824W",
          model: "Cherokee 180",
          summary:
            "1964 Piper Cherokee 180 – reliable and efficient single-engine trainer with seating for four.",
          year: 1964,
          manufacture: "Piper Aircraft",
          engine: "Lycoming O-360-A4A (Reciprocating)",
          weight: "2,400lbs gross weight",
          horsepower: "180 HP",
          airworthiness: "Standard/Normal",
          speed: "Cruise ~107 mph",
          imagePath: "/src/assets/aircraft-plane-N7824W.webp",
          imageAlt: "Piper Cherokee 180 N7824W in flight over Nevada",
          description:
            "Cherokee 180 N7824W is a robust aircraft offering consistent performance for student pilots. A dependable platform for training in both VFR and IFR conditions.",
          features: [
            "Low-wing trainer",
            "Four-seat capacity",
            "Mountain flying capability",
          ],
          avionics: [
            "Updated avionics panel",
            "GPS navigation",
            "IFR-capable instruments",
          ],
          equipment: ["Modern intercom system", "Training-friendly setup"],
          images: [
            {
              imagePath: "/src/assets/Plane-N7824W-flying-sky.webp",
              imageAlt: "Cockpit interior of Cherokee 180 N7824W",
            },
            {
              imagePath:
                "/src/assets/N7824W-plane-with-student-pilot-reno-flight-lessons.webp",
              imageAlt: "Cockpit interior of Cherokee 180 N7824W",
            },
            {
              imagePath: "/src/assets/N7824W-.webp",
              imageAlt: "Cockpit interior of Cherokee 180 N7824W",
            },
          ],
        },
        {
          name: "Cherokee 180 - PIPER PA-28-180",
          tail: "N7969W",
          model: "Cherokee 180",
          summary:
            "1963 Piper Cherokee 180 – trusted general aviation trainer with 180 horsepower Lycoming engine.",
          year: 1963,
          manufacture: "Piper Aircraft",
          engine: "Lycoming O-360-A4A (Reciprocating)",
          weight: "2,400lbs gross weight",
          horsepower: "180 HP",
          airworthiness: "Standard/Normal",
          speed: "Cruise ~107 mph",
          imagePath: "/src/assets/aircraft-plane-N7969W.webp",
          imageAlt: "Piper Cherokee 180 N7969W on the runway",
          description:
            "The Cherokee 180 N7969W is one of our cornerstone training aircraft, perfectly suited for accelerated courses and mountain flying lessons.",
          features: [
            "Four-seat trainer",
            "Proven safety record",
            "Stable for IFR and VFR operations",
          ],
          avionics: ["IFR training instruments", "Dual comm radios", "GPS"],
          equipment: ["Four-place intercom", "Comfortable seating"],
          images: [],
        },
      ],
    },

    fleetFAQs: [
      {
        title: "What aircraft are included in NV Flight’s fleet?",
        content: `Our fleet consists of well-maintained Piper Cherokee 180 aircraft. These planes are known for their stability, reliability, and forgiving flight characteristics, making them perfect for students at every level of training.`,
      },
      {
        title: "Why did NV Flight choose the Piper Cherokee 180 for training?",
        content: `The Piper Cherokee 180 is an excellent balance of performance, safety, and cost-effectiveness. With 180 horsepower, a low-wing design, and stable handling, it’s ideal for both beginner pilots and advanced mountain flying instruction.`,
      },
      {
        title: "How is the fleet maintained?",
        content: `All aircraft are maintained in-house by our experienced team, including instructors who also hold FAA Airframe & Powerplant (A&P) mechanic certifications. This ensures every plane in our fleet is kept in peak condition for safety and performance.`,
      },
      {
        title: "Are the aircraft IFR-equipped?",
        content: `Yes, our Cherokee 180s are equipped with the avionics necessary for both VFR and IFR training. Students can confidently train for Private, Instrument, and Commercial ratings using our fleet.`,
      },
      {
        title: "How many students can a Cherokee 180 carry?",
        content: `Each Piper Cherokee 180 seats four people (including the pilot). For training, it’s typically flown with one student and one instructor, but it’s also capable of carrying passengers on cross-country flights once licensed.`,
      },
      {
        title: "Do you have simulators as part of your fleet?",
        content: `No, our focus is on real-world flight training in actual aircraft. While we provide ground training tools and materials, the Cherokee 180 fleet is the core of our hands-on instruction. For IFR practice, students fly in properly equipped training aircraft.`,
      },
      {
        title: "Can I fly the fleet aircraft during a Discovery Flight?",
        content: `Yes! Discovery Flights are flown in our Piper Cherokee 180s, allowing prospective students to experience firsthand the same aircraft they’ll use for their training. It’s a great way to get comfortable in the cockpit.`,
      },
    ],

    flyWithUsCTA: {
      imagePath: "/src/assets/placeholder-img.jpg",
      imageAlt: "Student and instructor preparing for a discovery flight",
      headerH1: `Fly With NV Flight`,
      paragraph:
        "Start your aviation journey today with our fleet of dependable Piper Cherokee 180s. Whether you’re beginning as a student or advancing toward a career, our aircraft and instructors are here to help you succeed.",
      buttons: [
        {
          name: "Book a Discovery Flight",
          link: "/discovery-flights",
          primary: true,
        },
      ],
    },
  },
};

export default fleetPage;
