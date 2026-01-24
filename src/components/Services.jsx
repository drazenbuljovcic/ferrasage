import { Headline } from './Headline';

export function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Headline size="4xl" underlined className="mb-8">
          Mindset
        </Headline>
        <div className="bg-slate-800 p-12 rounded-3xl border border-slate-700">
          <p className="text-xl text-slate-300 leading-relaxed mb-6">
            Ferrasage know's a way
          </p>
          <p className="text-lg text-slate-400 leading-relaxed mb-1 px-6 py-6">
            Ideas evolve, challenged by constraints, and reality tests every assumption.
            Through design work and research, prototyping, and production, we partner with
            entrepreneurs and enterprises to innovate and drive technology forward.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed mb-8 px-6 py-6">
            Our experience spans industries and scales, allowing us to navigate complexity, 
            anticipate challenges, and turn ambition into solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-slate-700 text-[var(--color-primary)] rounded-full text-sm font-medium">
              Consultations
            </span>
            <span className="px-4 py-2 bg-slate-700 text-[var(--color-primary)] rounded-full text-sm font-medium">
              Research & Development
            </span>
            <span className="px-4 py-2 bg-slate-700 text-[var(--color-primary)] rounded-full text-sm font-medium">
              Production Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
