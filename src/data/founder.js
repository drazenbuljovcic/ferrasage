export const FOUNDER = {
  name: "Dalibor Buljovčić",
  role: "Founder & Principal Engineer",
  photo: "/dalibor.jpg", // drop the picture into /public/dalibor.jpg
  initials: "DB",
  shortBio:
    "Driven by curiosity and a tendency to challenge established solutions, Dalibor Buljovčić built his career around complex electronics, power conversion and magnetic design. Experience spanning hardware architecture, EMC, industrialization and supplier collaboration gradually shaped a broader system-level perspective. He founded Ferrasage to bring that thinking into a company focused on electrification architecture and advanced magnetic solutions.",
  longBio: [
    "I’ve always been more interested in understanding why something works than simply accepting that it does.",
    "That curiosity has followed me throughout my engineering career, from electronics and embedded hardware to power converters, EMC, magnetic components and eventually complete system architecture. Most important thing those experiences taught me was to stop seeing engineering disciplines in isolation, as most interesting engineering problems appear at the boundaries between.",
    "Power electronics became a particular passion, especially magnetic components. The deeper I went into technology, the more interested I became in the bigger picture around it. Working on increasingly complex products gave me today’s engineering perspective: instead of focusing only on individual components, I became increasingly interested in understanding the complete system and the decisions that shape it.",
    "I also discovered that I enjoy challenging existing solutions. Improvement starts with stepping back, questioning the original assumptions and looking at the problem from another angle.",
    "Ferrasage is where those threads come together. It is place where magnetics, electrification and multidisciplinary engineering live.",
  ],
};

// Portfolio items shown on the central sheet. Edit / extend freely.
export const PORTFOLIO = [
  {
    id: "magnetics",
    title: "Magnetics Component Design",
    description:
      "Tailored design and integration of transformers, inductors and EMI chokes.",
    tags: ["Transformers", "Inductors", "EMI chokes"],
  },
  {
    id: "converters",
    title: "Electrical Converters",
    description:
      "Power systems design for reliable operation, with electronics, packaging and cooling as key pillars of the architecture.",
    tags: ["Power electronics", "Packaging", "Cooling"],
  },
  {
    id: "emc",
    title: "EMC Expert Consultancy",
    description:
      "System analysis and risk prediction, filter technology selection and dimensioning, validation support and debugging.",
    tags: ["EMC", "Filters", "Validation"],
  },
  {
    id: "architecture",
    title: "System Architecture",
    description:
      "Power electronics architecture, power core design, system mechanical concept, supplier management and technical leadership.",
    tags: ["Architecture", "Industrialisation", "Suppliers"],
  },
];
