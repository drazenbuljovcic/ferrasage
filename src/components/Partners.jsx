import { useEffect, useRef, useState } from "react";
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

// Constant scroll speed in px/s, so mobile and desktop feel the same.
const SPEED = 70;

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
              loading="eager"
              decoding="async"
              draggable="false"
              className={`w-auto select-none ${p.className}`}
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
  const trackRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let cancelled = false;

    const measure = () => {
      const w = el.firstElementChild?.offsetWidth;
      if (w) el.style.setProperty("--marquee-duration", `${w / SPEED}s`);
    };

    // Start only once every logo has loaded and decoded, so widths are final
    // (no jump or flash from late layout shifts).
    const imgs = [...el.querySelectorAll("img")];
    Promise.all(
      imgs.map((img) => img.decode().catch(() => {})),
    ).then(() => {
      if (cancelled) return;
      measure();
      setReady(true);
    });

    const ro = new ResizeObserver(measure);
    ro.observe(el.firstElementChild);
    return () => {
      cancelled = true;
      ro.disconnect();
    };
  }, []);

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
        className="group overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)] [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]"
      >
        {/* Filter lives on the moving layer (one composite) rather than on every image. brightness(0) + invert(1) turns each logo solid white. */}
        <div
          ref={trackRef}
          className={`flex w-max transition-opacity duration-500 [filter:brightness(0)_invert(1)] will-change-transform hover:opacity-100 group-hover:[animation-play-state:paused] motion-reduce:animate-none ${
            ready ? "animate-marquee opacity-70" : "opacity-0"
          }`}
        >
          <LogoGroup />
          <LogoGroup hidden />
        </div>
      </div>
    </Section>
  );
}
