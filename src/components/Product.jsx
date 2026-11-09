import { lazy, Suspense } from "react";
import { Section } from "./Section";
import { ProductGallery } from "./ProductGallery";
import { Headline } from "./Headline";

// three.js is loaded on demand so it doesn't weigh down the first paint.
const ProductScene = lazy(() => import("./ProductScene"));

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

      <div className="text-center">
        <Headline size="4xl" underlined className="text-center">
          <span id="innovative-concepts-title">Active Projects</span>
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
            <li className="inline-flex items-center gap-2 rounded-full border border-section-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-section-accent">
              <span aria-hidden="true">✓</span>
              Shipped
            </li>
          </ul>

          <p
            data-id="product-subtext"
            className="max-w-xl text-lg leading-relaxed text-section-text md:text-xl mt-4"
          >
            3.6kW 48V/800V 100kHz
          </p>
        </div>

        <div data-id="product-model" className="min-w-0 w-full">
          <div
            data-id="product-viewer"
            className="h-[360px] w-full md:h-[520px]"
          >
            <Suspense
              fallback={
                <div className="flex h-full items-center justify-center text-section-faint">
                  Loading 3D model…
                </div>
              }
            >
              <ProductScene />
            </Suspense>
          </div>
          <p
            data-id="product-hint"
            className="mt-2 text-center text-sm text-section-muted"
          >
            Drag to rotate · scroll to zoom
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-6xl">
        <ProductGallery />
      </div>
    </Section>
  );
}
