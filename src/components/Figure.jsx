/**
 * Design-system figure: a semantic <figure> with a thick, themed border.
 * Colours come from the section tokens, so it follows the surrounding
 * <Section variant="...">. Building block for the gallery.
 *
 * @param {object} props
 * @param {React.ReactNode} [props.caption] rendered in a <figcaption>
 * @param {string} [props.className] extra classes
 * Any other prop (id, data-id, …) goes to the <figure>.
 */
export function Figure({ caption, className = "", children, ...props }) {
  return (
    <figure
      className={`border-4 border-section-accent ${className}`}
      {...props}
    >
      {children}
      {caption && (
        <figcaption className="px-3 py-2 text-sm text-section-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
