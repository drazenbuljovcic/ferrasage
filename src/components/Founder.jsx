import { Link } from "react-router-dom";
import { FounderAvatar } from "./FounderAvatar";
import { FOUNDER } from "../data/founder";

export function Founder() {
  return (
    <section id="founder" data-id="founder" className="bg-slate-900 px-6 py-10">
      <div
        data-id="founder-card"
        className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center md:flex-row md:text-left"
      >
        <FounderAvatar className="h-[100px] w-[100px] shrink-0 border-2 text-3xl" />

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#8fa3c7]">
            Founder
          </p>
          <h2 className="mt-1 text-2xl font-bold text-white">{FOUNDER.name}</h2>
          <p className="mt-2 leading-relaxed text-slate-400">
            Built a career in power electronics, EMC and magnetic design, then
            founded Ferrasage to bring a system-level view to electrification
            architecture.
          </p>
          <Link
            to="/daliborbuljovcic"
            data-id="founder-link"
            className="mt-3 inline-block font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-light)]"
          >
            Meet the founder →
          </Link>
        </div>
      </div>
    </section>
  );
}
