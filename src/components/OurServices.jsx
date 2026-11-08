import { Headline } from "./Headline";

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

export function OurServices() {
  return (
    <section
      id="our-services"
      data-id="our-services"
      className="bg-slate-900 px-6 py-20 m-6"
    >
      <div className="mx-auto max-w-6xl text-center">
        <Headline size="4xl" underlined className="mb-16 ">
          Our Services
        </Headline>

        <div
          data-id="our-services-columns"
          className="grid gap-12 md:grid-cols-3 md:gap-0"
        >
          {columns.map((col) => (
            <div
              key={col.key}
              data-id={`our-services-${col.key}`}
              className="md:border-l md:border-dashed md:border-slate-600 md:px-8 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
            >
              <h3 className="mb-6 text-xl font-bold text-[var(--color-primary)]">
                {col.title}
              </h3>
              <ul className="space-y-5">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className={`flex gap-3 leading-snug text-[var(--color-primary)]/90 ${
                      col.italic ? "italic" : ""
                    }`}
                  >
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <p
            data-id="our-services-closing"
            className="text-center text-xl italic text-[var(--color-primary)] md:text-2xl"
          >
            We don&apos;t just design components; we architect solutions
          </p>
          <div
            data-id="our-services-brand"
            className="flex items-center gap-2 self-end text-[var(--color-primary)]"
          >
            <img
              src="/logo-dark.svg"
              alt=""
              aria-hidden="true"
              className="h-8 w-8"
            />
            <span className="text-2xl font-bold tracking-tight">FERRASAGE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
