import { Link } from "react-router-dom";
import { FounderAvatar } from "./FounderAvatar";
import { Section } from "./Section";
import { FOUNDER } from "../data/founder";

export function Founder({ variant }) {
  return (
    <Section
      variant={variant}
      padding="sm"
      id="founder"
      data-id="founder"
      className="bg-section-raised"
    >
      <div
        data-id="founder-card"
        className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center md:flex-row md:text-left"
      >
        <FounderAvatar className="h-[100px] w-[100px] shrink-0 border-2 text-3xl" />

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-section-eyebrow">
            Founder
          </p>
          <h2
            tabIndex={0}
            className="mt-1 text-2xl font-bold text-section-heading"
          >
            {FOUNDER.name}
          </h2>
          <p className="mt-2 leading-relaxed text-section-muted">
            Built a career in power electronics, EMC and magnetic design, then
            founded Ferrasage to bring a system-level view to electrification
            architecture.
          </p>
          <Link
            to="/founder"
            data-id="founder-link"
            className="mt-3 inline-block font-medium text-section-accent transition-colors hover:text-section-accent-hover"
          >
            Check Portfolio →
          </Link>
        </div>
      </div>
    </Section>
  );
}
