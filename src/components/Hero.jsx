import { forwardRef, useEffect, useRef } from "react";

/*
  Accent lines, rotated 45deg ("/" direction), anchored at the upper-right
  and growing toward the lower-left.
  - offset: px distance from the central line, perpendicular to the lines
  - len:    max length in vmin
  - phase/freq: drive the scroll-linked grow & shrink
*/
const accentLines = [
  {
    id: "blue-1",
    offset: -330,
    len: 120,
    color: "#4a6fa5",
    alpha: 0.45,
    phase: 0.6,
    freq: 1.0,
  },
  {
    id: "blue-2",
    offset: -220,
    len: 80,
    color: "#4a6fa5",
    alpha: 0.6,
    phase: 2.4,
    freq: 1.3,
  },
  {
    id: "blue-3",
    offset: -120,
    len: 105,
    color: "#4a6fa5",
    alpha: 0.5,
    phase: 4.1,
    freq: 0.8,
  },
  {
    id: "white-1",
    offset: -28,
    len: 70,
    color: "#ffffff",
    alpha: 0.75,
    phase: 1.2,
    freq: 1.1,
  },
  {
    id: "green",
    offset: 0,
    len: 115,
    color: "#98a869",
    alpha: 1,
    phase: 3.0,
    freq: 0.9,
    thick: true,
  },
  {
    id: "white-2",
    offset: 28,
    len: 85,
    color: "#ffffff",
    alpha: 0.75,
    phase: 5.2,
    freq: 1.2,
  },
  {
    id: "blue-4",
    offset: 140,
    len: 60,
    color: "#4a6fa5",
    alpha: 0.55,
    phase: 0.2,
    freq: 1.5,
  },
  {
    id: "blue-5",
    offset: 260,
    len: 90,
    color: "#4a6fa5",
    alpha: 0.4,
    phase: 3.6,
    freq: 0.7,
  },
];

// Cluster anchor (the green line's upper-right end).
const ANCHOR = { right: "14vw", top: "-4vh" };
const SQRT1_2 = Math.SQRT1_2;

// Line length oscillates between MIN_SCALE and 1 of its max length.
const MIN_SCALE = 0.3;
const lineScale = ({ phase, freq }, y) =>
  MIN_SCALE +
  (1 - MIN_SCALE) * (0.5 + 0.5 * Math.sin(y * 0.004 * freq + phase));

// Parallax speeds: fraction of scroll offset each layer drifts upward.
const SPEEDS = { lines: 0.08, title: 0.28, tagline: 0.38 };

export const Hero = forwardRef((_props, ref) => {
  const layers = useRef({});
  const lineEls = useRef({});

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let frame = 0;
    const update = () => {
      frame = 0;
      const y = Math.min(window.scrollY, window.innerHeight * 1.5);
      if (!reduced) {
        for (const [name, el] of Object.entries(layers.current)) {
          if (el)
            el.style.transform = `translate3d(0, ${-y * SPEEDS[name]}px, 0)`;
        }
      }
      for (const line of accentLines) {
        const el = lineEls.current[line.id];
        if (el)
          el.style.transform = `rotate(-45deg) scaleX(${reduced ? 1 : lineScale(line, y)})`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    if (reduced) return;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const setLayer = (name) => (el) => {
    layers.current[name] = el;
  };

  return (
    <section
      ref={ref}
      aria-label="Ferrasage"
      data-id="hero"
      className="relative -mt-12 flex min-h-screen min-h-[100svh] items-center justify-center overflow-hidden bg-slate-900 px-6"
    >
      {/* Bottom glow, inspired by the Core Expertise cards */}
      <div
        aria-hidden="true"
        data-id="hero-bottom-glow"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
        style={{
          background: [
            "radial-gradient(ellipse 120% 100% at 50% 100%, rgba(152, 168, 105, 0.4), transparent 75%)",
            "linear-gradient(to top, rgba(152, 168, 105, 0.18), transparent 60%)",
          ].join(", "),
        }}
      />
      <div
        aria-hidden="true"
        data-id="hero-bottom-line"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary)] to-[var(--color-primary)]/20 shadow-[0_0_24px_4px_rgba(152,168,105,0.5)]"
      />

      {/* Brand accent lines */}
      <div
        ref={setLayer("lines")}
        aria-hidden="true"
        data-id="hero-accent-lines"
        className="pointer-events-none absolute inset-0 opacity-60 will-change-transform md:opacity-100"
      >
        {accentLines.map((line) => (
          <div
            key={line.id}
            ref={(el) => {
              lineEls.current[line.id] = el;
            }}
            data-id={`hero-line-${line.id}`}
            className="absolute origin-right"
            style={{
              right: `calc(${ANCHOR.right} - ${(line.offset * SQRT1_2).toFixed(1)}px)`,
              top: `calc(${ANCHOR.top} + ${(line.offset * SQRT1_2).toFixed(1)}px)`,
              width: `${line.len}vmin`,
              height: line.thick ? 2 : 1,
              background: line.color,
              opacity: line.alpha,
              transform: "rotate(-45deg)",
            }}
          />
        ))}
      </div>

      <div
        data-id="hero-content"
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Logo + wordmark on one line, like the header; sized by viewport */}
        <div
          ref={setLayer("title")}
          data-id="hero-brand"
          className="flex items-center justify-center gap-[0.2em] will-change-transform"
          style={{ fontSize: "clamp(1.75rem, 8vw, 8rem)" }}
        >
          <img
            data-id="hero-logo-mark"
            src="/logo-dark.svg"
            alt=""
            aria-hidden="true"
            className="h-[1.3em] w-[1.3em] shrink-0 will-change-transform"
          />

          <h1 data-id="hero-title" className="relative leading-none">
            <span
              data-id="hero-wordmark"
              className="block whitespace-nowrap font-bold tracking-tight text-[var(--color-primary)] text-shadow-glow text-9xl"
            >
              FERRASAGE
            </span>
          </h1>
        </div>

        {/* Mission statement */}
        <p
          ref={setLayer("tagline")}
          data-id="hero-tagline"
          className="mt-8 text-lg font-semibold sm:text-xl md:mt-14 tracking-wide text-[#8fa3c7] will-change-transform md:text-3xl"
        >
          - From insight to impact -
        </p>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
