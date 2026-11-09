import { useRef } from "react";
import { useMousePosition } from "../hooks";
import { Headline } from "./Headline";
import { Section } from "./Section";

const CARD_INDEX = 0;

const expertiseText =
  "Ferrasage as an advanced magnetics and electrification architecture company born from deep automotive engineering roots. We combine technological expertise in the development of magnetics and system architecture that enables the deployment of green energies and the creation of an independent energy infrastructure.";

export function Expertise({ variant }) {
  const cardRef = useRef(null);
  const { mousePositions, handleMouseMove, handleTouchMove, handleReset } =
    useMousePosition();

  const mouse = mousePositions[CARD_INDEX];
  const hasMouse = mouse?.x !== undefined;

  return (
    <Section
      variant={variant}
      tone="raised"
      id="expertise"
      data-id="expertise"
      className="py-5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Headline size="4xl" underlined className="mb-4">
            Core Expertise
          </Headline>
          <p className="text-xl text-section-muted max-w-2xl mx-auto">
            Deep technical capabilities across the engineering spectrum
          </p>
        </div>

        <figure
          ref={cardRef}
          data-id="expertise-card"
          data-servisable
          data-service="Core Expertise"
          onMouseMove={(e) => handleMouseMove(e, CARD_INDEX, cardRef.current)}
          onMouseLeave={handleReset}
          onTouchMove={(e) => handleTouchMove(e, CARD_INDEX, cardRef.current)}
          onTouchEnd={handleReset}
          className="mx-auto max-w-3xl p-8 md:p-12 bg-section-surface border border-section-border rounded-2xl transition-all duration-300 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-section-accent/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:border-section-accent/50 hover:before:opacity-100 active:border-section-accent/50 active:before:opacity-100"
          style={{
            "--mouse-x": hasMouse ? `${mouse.x}%` : "50%",
            "--mouse-y": hasMouse ? `${mouse.y}%` : "50%",
          }}
        >
          <div
            className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
              hasMouse ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), color-mix(in srgb, var(--section-accent) 15%, transparent), transparent 40%)`,
            }}
          />
          <p
            data-id="expertise-text"
            className="relative z-10 select-none text-left text-lg md:text-xl leading-relaxed text-section-text transition-colors duration-300 group-hover:text-section-heading group-active:text-section-heading"
          >
            {expertiseText}
          </p>
        </figure>
      </div>
    </Section>
  );
}
