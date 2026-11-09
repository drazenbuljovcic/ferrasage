import { Section } from "./Section";

const PARTNERS = [
  {
    name: "Science and Technology Park Novi Sad",
    src: "/logos-ntp.svg",
    className: "h-8 md:h-10",
  },
  {
    name: "Sense and Drive",
    src: "/logos-sense-and-drive.png",
    className: "h-12 md:h-16",
  },
  { name: "Volicorp", src: "/logos-volicorp.png", className: "h-14 md:h-20" },
];

// One set of logos, repeated so a single group is wider than most screens.
const REPEATS = 2;

function LogoGroup({ hidden }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-16 pr-16 md:gap-24 md:pr-24"
    >
      {Array.from({ length: REPEATS }).flatMap((_, r) =>
        PARTNERS.map((p) => (
          <li key={`${r}-${p.name}`} className="flex shrink-0 items-center">
            <img
              src={p.src}
              alt={hidden ? "" : p.name}
              loading="lazy"
              draggable="false"
              // brightness(0) + invert(1) turns every logo solid white, whatever its original colour.
              className={`w-auto select-none opacity-70 transition-opacity hover:opacity-100 [filter:brightness(0)_invert(1)] ${p.className}`}
            />
          </li>
        )),
      )}
    </ul>
  );
}

/**
 * Auto-scrolling track of partner logos, rendered in white on the dark theme.
 * The second group is a decorative duplicate (hidden from assistive tech)
 * that makes the loop seamless. Motion stops for reduced-motion users.
 */
export function Partners({ variant = "default" }) {
  return (
    <Section
      variant={variant}
      padding="none"
      id="partners"
      data-id="partners"
      aria-labelledby="partners-title"
      className="py-10 pt-0 bg-section-raised"
    >
      {/* <h2
        id="partners-title"
        tabIndex={0}
        className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-section-eyebrow"
      >
        Our partners
      </h2> */}

      <div
        data-id="partners-track"
        className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]"
      >
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <LogoGroup />
          <LogoGroup hidden />
        </div>
      </div>
    </Section>
  );
}
