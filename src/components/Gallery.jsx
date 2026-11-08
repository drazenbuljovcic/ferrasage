import { useRef, useState } from "react";
import { Figure } from "./Figure";

/**
 * Reusable image gallery: thumbnails on the left, position dots in the gap,
 * and the selected image large on the right. On mobile the thumbnails
 * and dots move below the main image as a row.
 *
 * @param {Object} props
 * @param {{src: string, alt: string, caption: string, width?: number, height?: number}[]} props.images
 * @param {string} [props.id] - base for data-id attributes (default "gallery")
 * @param {string} [props.label] - accessible name of the gallery (default "Image gallery")
 *
 * Keyboard: Tab moves to the thumbnail list (one tab stop); Arrow keys
 * move between thumbnails, Home/End jump to first/last. Selection follows
 * focus; Enter/Space also select. The main image change is announced
 * via a polite live region.
 */
export function Gallery({ images, id = "gallery", label = "Image gallery" }) {
  const [active, setActive] = useState(0);
  const thumbRefs = useRef([]);
  if (!images?.length) return null;
  const index = Math.min(active, images.length - 1);
  const current = images[index];
  const count = images.length;

  const select = (i, focus = false) => {
    setActive(i);
    if (focus) thumbRefs.current[i]?.focus();
  };

  const onThumbKeyDown = (e) => {
    const keys = {
      ArrowRight: (index + 1) % count,
      ArrowDown: (index + 1) % count,
      ArrowLeft: (index - 1 + count) % count,
      ArrowUp: (index - 1 + count) % count,
      Home: 0,
      End: count - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      select(keys[e.key], true);
    }
  };

  return (
    <div
      data-id={id}
      role="group"
      aria-roledescription="gallery"
      aria-label={label}
      className="mx-auto grid w-full grid-cols-1 gap-4 md:max-w-3xl md:grid-cols-[5rem_auto_minmax(0,1fr)] md:gap-5"
    >
      <ul
        data-id={`${id}-thumbs`}
        aria-label="Gallery thumbnails"
        onKeyDown={onThumbKeyDown}
        className="order-2 flex gap-3 md:order-1 md:flex-col"
      >
        {images.map((img, i) => (
          <li key={img.src} className="w-20 md:w-full">
            <button
              type="button"
              ref={(el) => (thumbRefs.current[i] = el)}
              onClick={() => select(i)}
              tabIndex={i === index ? 0 : -1}
              aria-label={`Image ${i + 1} of ${count}: ${img.caption}`}
              aria-pressed={i === index}
              className={`block aspect-square w-full overflow-hidden border-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-section-accent ${
                i === index
                  ? "border-section-accent"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={img.src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </button>
          </li>
        ))}
      </ul>

      <div
        data-id={`${id}-dots`}
        aria-hidden="true"
        className="order-3 flex items-center justify-center gap-2 md:order-2 md:flex-col"
      >
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            tabIndex={-1}
            onClick={() => select(i)}
            className={`rounded-full transition-all ${
              i === index
                ? "h-2.5 w-2.5 bg-section-accent"
                : "h-2 w-2 bg-section-muted opacity-50 hover:opacity-100"
            }`}
          />
        ))}
      </div>

      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {`Image ${index + 1} of ${count}: ${current.caption}`}
      </p>

      <Figure
        data-id={`${id}-main`}
        caption={current.caption}
        className="order-1 md:order-3"
      >
        <div className="flex aspect-[4/3] items-center justify-center">
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            width={current.width}
            height={current.height}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </Figure>
    </div>
  );
}
