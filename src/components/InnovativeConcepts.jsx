import { Gallery } from "./Gallery";
import { Headline } from "./Headline";
import { Section } from "./Section";

const images = [
  {
    src: "/innovative-mobile-hidrogen-charging-station.png",
    alt: "Ferrasage mobile hydrogen charging station: a trailer carrying a hydrogen tank and a control cabinet with display and charging cable",
    caption: "Mobile hydrogen charging station",
    width: 2044,
    height: 698,
  },
  {
    src: "/innovative-hidrogen-fuel-cell.png",
    alt: "Ferrasage hydrogen fuel cell power electronics unit in a dark blue enclosure with connectors and coolant ports",
    caption: "Hydrogen fuel cell power electronics",
    width: 853,
    height: 500,
  },
  {
    src: "/innovative-transformer-cropped.png",
    alt: "Simulation model of a transformer core with red and yellow windings",
    caption: "Innovative transformer concept",
    width: 1040,
    height: 780,
  },
];

export function InnovativeConcepts({ variant }) {
  return (
    <Section
      variant={variant}
      id="innovative-concepts"
      data-id="innovative-concepts"
      aria-labelledby="innovative-concepts-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-section-eyebrow">
            Looking ahead
          </p>
          <Headline size="4xl">
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
