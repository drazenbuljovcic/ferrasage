import { Headline } from './Headline';
import { Section } from './Section';

export function Services({ variant }) {
  return (
    <Section variant={variant} tone="none" id="services">
      <div className="max-w-4xl mx-auto text-center">
        <Headline size="4xl" underlined className="mb-8">
          Mindset
        </Headline>
        <div className="bg-section-surface p-12 rounded-3xl border border-section-border">
          <p className="text-xl text-section-text leading-relaxed mb-6">
            Ferrasage know's a way
          </p>
          <p className="text-lg text-section-muted leading-relaxed px-6 py-6">
            Ideas evolve, challenged by constraints, and reality tests every assumption.
            Through design work and research, prototyping, and production, we partner with
            entrepreneurs and enterprises to innovate and drive technology forward.
          </p>
          <p className="text-lg text-section-muted leading-relaxed mb-8 px-6 py-6">
            Our experience spans industries and scales, allowing us to navigate complexity,
            anticipate challenges, and turn ambition into solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-section-surface-2 text-section-accent rounded-full text-sm font-medium">
              Consultations
            </span>
            <span className="px-4 py-2 bg-section-surface-2 text-section-accent rounded-full text-sm font-medium">
              Research & Development
            </span>
            <span className="px-4 py-2 bg-section-surface-2 text-section-accent rounded-full text-sm font-medium">
              Production Support
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
