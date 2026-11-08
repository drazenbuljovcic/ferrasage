export const FOUNDER = {
  name: "Dalibor Buljovčić",
  role: "Founder",
  photo: "/headshot.png",
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

// Portfolio, taken from "Dalibor Buljovcic - Portfolio 2026.pdf".
// Categories contain projects; each project has a title, an optional
// one-line summary and one or more titled bullet lists.
export const PORTFOLIO = [
  {
    id: "entrepreneurial",
    label: "Entrepreneurial",
    projects: [
      {
        id: "planar-dab-transformer",
        title: "Planar DAB Transformer",
        summary:
          "48V > 800V system; 3.6kW SiC based System. 100kHz Operation with Triple Phase shift DAB",
        lists: [
          {
            heading: "Characteristics",
            points: [
              "Bobbinless transformer with external leakage inductance",
              "Gapped N95 ER/PLT core magnetic structure",
              "Custom 6mm/3oz PCB with concatenated hole contacts",
            ],
          },
          {
            heading: "Customer Service",
            points: [
              "Technical project/stakeholder requirement management",
              "Converter architecture consulting and system engineering",
              "Electric and mechanical transformer elements design",
              "Functional converter simulation in Plecs and Matlab",
              "Magnetic and Thermal FEM simulation in Ansys",
              "Supplier management and prototyping",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "power-electronics-magnetics",
    label: "Power Electronics and Magnetics",
    projects: [
      {
        id: "quadratic-boost-converter",
        title: "Quadratic-Boost Converter - Fuel Cell Application",
        summary:
          "100kW GaN based DC/DC converter platform development for Hydrogen Fuel Cell Systems",
        lists: [
          {
            heading: "Characteristics",
            points: [
              "Non-isolated Quadratic-Boost with high voltage gain",
              "High-Frequency Coupled Inductor Magnetics array",
            ],
          },
          {
            heading: "Responsibilities",
            points: [
              "Power core product segment ownership",
              "Market research, project potential and development cost estimation",
              "Converter architecture and mechanical concept",
              "Functionality scope and proof of concept",
              "Supply chain and technology scoping",
            ],
          },
        ],
      },
      {
        id: "dual-stage-converter",
        title: "Dual Stage DC/AC Converter - Reefer Supply",
        summary:
          "2x15kW DAB converter integrated with 22kW 3-phase Grid forming Inverter",
        lists: [
          {
            heading: "Characteristics",
            points: [
              "15kW two chamber winding transformer with flux focus elements",
              "Flat winding FeSi powder resin molded PFC choke array",
            ],
          },
          {
            heading: "Responsibilities",
            points: [
              "Power core product development leadership",
              "EMC device concept and power conversion architecture",
              "Technical sourcing and supplier management",
              "FEM simulation",
            ],
          },
        ],
      },
      {
        id: "emc-function-ownership",
        title: "EMC Function Ownership - E-Mobility Division",
        lists: [
          {
            heading: "OBC EMC filtering solutions",
            points: [
              "22kW segmented wire-wound racetrack design",
              "DC and AC side conducted emission filtering concept",
            ],
          },
          {
            heading: "Traction Inverter EMC filtering solutions",
            points: [
              "300kW multi-turn laser welded winding CMC with integrated filtering capacitors",
              "Multi-stage filtering configuration for commercial and passenger vehicle segment",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "system",
    label: "System",
    projects: [
      {
        id: "booster-pump-controller",
        title: "Booster Pump IoT Controller",
        lists: [
          {
            points: [
              "Frequency regulated 1kW PSM motor controller with PFC stage",
              "Digital electronics design and IoT connectivity",
            ],
          },
        ],
      },
      {
        id: "drain-pump-controller",
        title: "Drain Pump IoT Controller",
        lists: [
          {
            points: [
              "IoT platform controller for pump operation monitoring and water presence detection",
              "Consumer style package with plug and HMI - mechatronics",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "digital-electronics",
    label: "Digital Electronics",
    projects: [
      {
        id: "smartphone-access-ecu",
        title: "Smartphone Access Automotive ECU",
        lists: [
          {
            points: [
              "Technical responsibility for hardware end-to-end development",
              "ECU Hub module for vehicle antenna communication acquisition",
              "Design coordination and management of technical team",
              "Automotive industrialisation and development processes",
            ],
          },
        ],
      },
      {
        id: "parking-data-logger",
        title: "Data Logger Interface Board for Autonomous Parking System",
        lists: [
          {
            points: [
              "High-Speed HDI PCB design of DDR2 memory",
              "Ethernet 100Mb/s + Broad-Reach",
              "USB and CAN communication",
            ],
          },
        ],
      },
    ],
  },
];

// Contact row shown under the biography. `icon` keys map to ContactIcons.jsx.
export const CONTACTS = [
  {
    id: "linkedin",
    icon: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dalibor-buljovcic-52a215121/",
    external: true,
  },
  {
    id: "email",
    icon: "email",
    label: "Email dalibor.buljovcic@ferrasage.com",
    href: "mailto:dalibor.buljovcic@ferrasage.com",
  },
  // {
  //   id: "phone",
  //   icon: "phone",
  //   label: "Call +381 61 606 91 41",
  //   href: "tel:+381616069141",
  // },
];
