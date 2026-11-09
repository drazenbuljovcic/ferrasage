import { Headline } from "./Headline";
import { Section } from "./Section";

const columns = [
  {
    key: "odm",
    title: "Magnetics Component ODM",
    italic: true,
    items: [
      "End-2-End Design service",
      "Simulation expertise",
      "Mechanical design",
      "Prototype production",
      "Component industrialisation",
    ],
  },
  {
    key: "emc",
    title: "EMC Expert Consultancy",
    items: [
      "System analysis and risk prediction",
      "Filter technology selection and dimensioning",
      "System integration",
      "Validation support and debugging",
    ],
  },
  {
    key: "system",
    title: "System Engineering",
    items: [
      "Power electronics architecture",
      "Power core design",
      "System mechanical concept",
      "Supplier management",
      "Project technical leadership",
    ],
  },
];

export function OurServices({ variant }) {
  return (
    <Section
      variant={variant}
      id="our-services"
      data-id="our-services"
      className="mx-0 mb-6 mt-0 py-5 !px-4 md:mx-6 md:!px-6"
    >
      <div className="mx-auto max-w-6xl text-center">
        <Headline size="4xl" underlined className="mb-16 ">
          Our Services
        </Headline>

        <div
          data-id="our-services-columns"
          className="grid gap-12 lg:grid-cols-3 lg:gap-0"
        >
          {columns.map((col) => (
            <div
              key={col.key}
              data-id={`our-services-${col.key}`}
              className="min-w-0 lg:border-l lg:border-dashed lg:border-section-divider lg:px-6 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0 xl:px-8"
            >
              <h3
                tabIndex={0}
                className="mb-6 text-xl font-bold text-section-accent"
              >
                {col.title}
              </h3>
              <ul className="mx-auto w-full max-w-sm space-y-4 text-left lg:mx-0 lg:max-w-none lg:space-y-5">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 leading-snug text-section-accent/90 ${
                      col.italic ? "italic" : ""
                    }`}
                  >
                    <span aria-hidden="true" className="shrink-0">
                      •
                    </span>
                    <span className="min-w-0 text-balance">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <p
            data-id="our-services-closing"
            className="text-center text-xl italic text-section-accent md:text-2xl"
          >
            We don&apos;t just design components; we architect solutions
          </p>
          <div
            data-id="our-services-brand"
            className="flex items-center gap-2 self-end text-section-accent"
          >
            <img
              src="/logo-dark.svg"
              alt=""
              aria-hidden="true"
              className={`h-8 w-8 ${variant === "black-white" ? "brightness-0" : ""}`}
            />
            <span className="text-2xl font-bold tracking-tight">FERRASAGE</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
