import { Headline } from "./Headline";
import { COMPANY, MAP_EMBED_URL } from "../data/company";

export function FindUs() {
  return (
    <section
      id="find-us"
      data-id="find-us"
      className="py-20 px-6 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Headline size="4xl" underlined>
            Find us
          </Headline>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <address
            data-id="find-us-address"
            className="not-italic text-center md:text-left"
          >
            <div className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              {COMPANY.name}
            </div>
            <div className="text-xl text-slate-300 leading-relaxed">
              {COMPANY.addressLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-6 inline-block text-slate-400 transition-colors hover:text-[var(--color-primary)]"
            >
              {COMPANY.email}
            </a>
          </address>

          <div
            data-id="find-us-map"
            className="h-72 md:h-96 overflow-hidden rounded-2xl border border-slate-700"
          >
            <iframe
              title="Ferrasage location"
              src={MAP_EMBED_URL}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
