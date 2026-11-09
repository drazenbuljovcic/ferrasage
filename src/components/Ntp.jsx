import { Section } from "./Section";
import { Tile } from "./Tile";
import { COMPANY, MAP_EMBED_URL } from "../data/company";

const NTP_URL = "https://www.ntpns.rs";
const NTP_LOGO = "https://www.ntpns.rs/logo-light.svg";
const NTP_NAME = "Science and Technology Park Novi Sad";
const NTP_ADDRESS = "Fruškogorska 1, Novi Sad 21102, Serbia";

export function Ntp({ variant }) {
  return (
    <Section variant={variant} id="ntp" data-id="ntp" aria-labelledby="ntp-title">
      <div className="mx-auto max-w-6xl">
        <div data-id="ntp-intro" className="mb-12 text-center">
          <p className="mb-2 text-lg font-semibold tracking-wide text-section-eyebrow">
            - In collaboration with -
          </p>
          <h2
            id="ntp-title"
            tabIndex={0}
            className="text-3xl font-bold text-section-heading md:text-4xl"
          >
            {NTP_NAME}
          </h2>
        </div>

        <div className="grid items-stretch gap-8 md:grid-cols-5 md:gap-10">
          <figure
            data-id="ntp-image"
            className="md:col-span-2 overflow-hidden rounded-2xl border border-section-border"
          >
            <img
              src="/ntp.jpg"
              alt="Science and Technology Park Novi Sad building"
              width={1200}
              height={1600}
              loading="lazy"
              className="mx-auto h-full max-h-[32rem] w-full object-cover md:max-h-none"
            />
          </figure>

          <div className="flex flex-col gap-6 md:col-span-3">
            <address
              data-id="ntp-address"
              className="flex flex-col items-center gap-4 not-italic text-center md:flex-row md:items-center md:justify-between md:text-left"
            >
              <div>
                <p className="text-lg font-semibold text-section-heading">
                  {COMPANY.name}
                </p>
                <p className="mt-1 leading-relaxed text-section-muted">
                  {NTP_ADDRESS}
                </p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="mt-1 inline-block text-section-accent underline-offset-4 hover:underline focus-visible:underline"
                >
                  {COMPANY.email}
                </a>
              </div>

              <Tile
                href={NTP_URL}
                variant="black-white"
                className="md:justify-self-end"
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
            </address>

            <div
              data-id="ntp-map"
              className="min-h-72 flex-1 overflow-hidden rounded-2xl border border-section-border"
            >
              <iframe
                title="Ferrasage location"
                src={MAP_EMBED_URL}
                className="h-full min-h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
