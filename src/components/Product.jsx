import { Section } from "./Section";
import { Headline } from "./Headline";
import { Tag } from "./Tag";

export function Product({ variant }) {
  return (
    <Section
      variant={variant}
      padding="sm"
      id="product"
      data-id="product"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 50% 100%, color-mix(in srgb, var(--section-accent) 18%, transparent), transparent 70%)",
        }}
      />

      <div className="mb-10 px-2 text-center md:mb-12 mt-4">
        <Headline size="4xl" underlined className="text-center">
          <span id="product-title">Active Projects</span>
        </Headline>
      </div>

      <div
        data-id="product-layout"
        className="relative mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] items-center gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,3fr)] md:gap-12"
      >
        <div data-id="product-text" className="text-center md:text-left">
          {/* <p
            data-id="product-eyebrow"
            className="mb-3 text-sm font-semibold uppercase tracking-widest text-section-eyebrow"
          >
            Active Projects
          </p> */}

          <h2
            tabIndex={0}
            data-id="product-name"
            className="text-2xl font-bold leading-tight text-section-accent text-shadow-glow md:text-3xl lg:text-4xl"
          >
            Planar Transformer with External Leakage Inductance
          </h2>

          <ul
            data-id="product-badges"
            aria-label="Product status"
            className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start"
          >
            <li className="inline-flex items-center gap-2 rounded-full bg-section-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-section-bg">
              <span aria-hidden="true">★</span>
              Flagship
            </li>
            <li>
              <Tag variant="shipped" />
            </li>
          </ul>
        </div>

        <figure data-id="product-image" className="min-w-0 w-full">
          <img
            src="/trafo.png"
            alt="Ferrasage planar transformer in its black housing with green terminal covers"
            width={1254}
            height={1254}
            className="mx-auto h-auto w-full max-w-md md:max-w-none"
          />
        </figure>
      </div>
    </Section>
  );
}
