import { Headline } from "./Headline";
import { Section } from "./Section";
import { Tile } from "./Tile";
import { COMPANY, MAP_EMBED_URL } from "../data/company";

const NTP_URL = "https://www.ntpns.rs";
const NTP_LOGO = "https://www.ntpns.rs/logo-light.svg";
const NTP_NAME = "Science and Technology Park Novi Sad";
const NTP_ADDRESS = "Fruškogorska 1, Novi Sad 21102, Serbia";

export function Ntp({ variant }) {
  return (
    <Section variant={variant} id="ntp" data-id="ntp">
      <div className="max-w-6xl mx-auto">
        <div data-id="ntp-intro" className="mb-12 text-center">
          <p className="mb-2 text-lg font-semibold tracking-wide text-section-eyebrow">
            - In collaboration with -
          </p>
          <h2 tabIndex={0} className="text-3xl font-bold text-section-heading md:text-4xl">
            {NTP_NAME}
          </h2>
        </div>

        <figure
          data-id="ntp-image"
          className="mx-auto mb-10 max-w-md overflow-hidden rounded-2xl border border-section-border"
        >
          <img
            src="/ntp.jpg"
            alt="Science and Technology Park Novi Sad building"
            width={1200}
            height={1600}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
        </figure>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* <address
            data-id="ntp-address"
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
          </address> */}

          <Tile
            href={NTP_URL}
            variant="black-white"
            label={`${NTP_NAME} (NTP), ${NTP_ADDRESS}. Visit ntpns.rs (opens in a new tab)`}
          >
            <img
              src={NTP_LOGO}
              alt=""
              aria-hidden="true"
              className="h-8 w-auto"
              loading="lazy"
            />
            <span className="text-xs font-semibold uppercase tracking-wider">
              ntpns.rs →
            </span>
          </Tile>

          <div
            data-id="ntp-map"
            className="h-72 md:h-96 overflow-hidden rounded-2xl border border-section-border"
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
    </Section>
  );
}
