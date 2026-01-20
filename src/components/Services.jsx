import { Headline } from './Headline';

export function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Headline size="4xl" underlined className="mb-8">
          Naš Aprouč
        </Headline>
        <div className="bg-slate-800 p-12 rounded-3xl border border-slate-700">
          <p className="text-xl text-slate-300 leading-relaxed mb-6">
            Ferrasage. Najjača priča znaš.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            From initial consultation through research, prototyping, and
            production—we partner with entrepreneurs and enterprises to build
            reliable, cutting-edge technology that performs in the real world.
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
