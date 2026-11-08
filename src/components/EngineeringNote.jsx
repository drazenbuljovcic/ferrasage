import { Section } from "./Section";

export function EngineeringNote({ variant }) {
  return (
    <Section
      variant={variant}
      tone="none"
      className="py-32 px-6 bg-gradient-to-r from-section-accent/40 to-section-bg border-y border-section-border"
      padding="none"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-medium text-section-accent uppercase tracking-wider mb-2">
          Engineering Note
        </p>
        <p className="text-2xl text-section-heading font-light italic leading-relaxed">
          We are engineers by practice and professionals by principle —
          hands‑on, accountable, and committed to deliver. When challenges
          arise, we engage directly, with respect for the technology, the craft,
          and the people behind it.
        </p>
      </div>
    </Section>
  );
}
