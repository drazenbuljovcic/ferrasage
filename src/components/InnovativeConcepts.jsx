import { Gallery } from "./Gallery";
import { Headline } from "./Headline";
import { Section } from "./Section";
import { Tag } from "./Tag";

const images = [
  {
    src: "/innovative-mobile-hidrogen-charging-station.png",
    alt: "Ferrasage mobile hydrogen charging station: a trailer carrying a hydrogen tank and a control cabinet with display and charging cable",
    caption: (
      <>
        <Tag variant="concept" /> Power electronics | Mobile hydrogen charging
        station
      </>
    ),
    captionText:
      "Concept: Power electronics | Mobile hydrogen charging station",
    width: 2044,
    height: 698,
  },
  {
    src: "/innovative-hidrogen-fuel-cell.png",
    alt: "Ferrasage hydrogen fuel cell power electronics unit in a dark blue enclosure with connectors and coolant ports",
    caption: (
      <>
        <Tag variant="concept" /> Power electronics | Hydrogen fuel cell
      </>
    ),
    captionText: "Concept: Power electronics | Hydrogen fuel cell",
    width: 853,
    height: 500,
  },
];

export function InnovativeConcepts({ variant }) {
  return (
    <Section
      variant={variant}
      id="innovative-concepts"
      data-id="innovative-concepts"
      aria-labelledby="innovative-concepts-title"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 50% 100%, color-mix(in srgb, var(--section-accent) 18%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-section-eyebrow">
            Looking ahead
          </p>
          <Headline size="4xl" underlined>
            <span id="innovative-concepts-title">Innovative Concepts</span>
          </Headline>
        </div>
        <Gallery
          id="innovative-concepts-gallery"
          label="Innovative concepts"
          images={images}
        />
      </div>
    </Section>
  );
}
