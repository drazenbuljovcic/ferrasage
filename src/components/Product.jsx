import { lazy, Suspense } from "react";

// three.js is loaded on demand so it doesn't weigh down the first paint.
const ProductScene = lazy(() => import("./ProductScene"));

export function Product() {
  return (
    <section
      id="product"
      data-id="product"
      className="relative overflow-hidden bg-slate-900 px-6 py-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 50% 100%, rgba(152, 168, 105, 0.18), transparent 70%)",
        }}
      />
      <div
        data-id="product-layout"
        className="relative mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] items-center gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,3fr)] md:gap-12"
      >
        <div data-id="product-text" className="text-center md:text-left">
          <p
            data-id="product-eyebrow"
            className="mb-4 text-lg font-semibold tracking-wide text-[#8fa3c7]"
          >
            - Our Product -
          </p>
          <h2
            data-id="product-name"
            className="mb-6 text-4xl font-bold leading-tight text-[var(--color-primary)] text-shadow-glow md:text-5xl lg:text-6xl"
          >
            Integrated Magnetics Unit
          </h2>
          <p
            data-id="product-subtext"
            className="max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl"
          >
            Compact, robust power magnetics engineered for electrification
            systems and independent energy infrastructure.
          </p>
        </div>

        <div data-id="product-model" className="min-w-0 w-full">
          <div
            data-id="product-viewer"
            className="h-[360px] w-full md:h-[520px]"
          >
            <Suspense
              fallback={
                <div className="flex h-full items-center justify-center text-slate-500">
                  Loading 3D model…
                </div>
              }
            >
              <ProductScene />
            </Suspense>
          </div>
          <p
            data-id="product-hint"
            className="mt-2 text-center text-sm text-slate-400"
          >
            Drag to rotate · scroll to zoom
          </p>
        </div>
      </div>
    </section>
  );
}
