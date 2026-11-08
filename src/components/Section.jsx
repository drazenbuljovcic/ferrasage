

// Background shade, resolved per variant through CSS tokens (see index.css).
const tones = {
  base: "bg-section-bg",
  raised: "bg-section-raised",
  subtle: "bg-section-subtle",
  none: "",
};

const paddings = {
  md: "px-6 py-20",
  sm: "px-6 py-10",
  none: "",
};

/**
 * Reusable page section. Sets the colour theme for everything inside it:
 * children read the tokens via utilities like `text-section-muted`,
 * `bg-section-surface` and `border-section-border`.
 *
 * @param {object} props
 * @param {"default" | "black-white"} [props.variant="default"] olive-on-dark, or monochrome
 * @param {"base" | "raised" | "subtle" | "none"} [props.tone="base"] background shade
 * @param {"md" | "sm" | "none"} [props.padding="md"]
 * @param {string} [props.className] extra classes
 * Any other prop (id, ref, data-id, aria-label, …) goes to the <section>.
 */
export function Section({
  variant = "default",
  tone = "base",
  padding = "md",
  className = "",
  children,
  ...props
}) {
  const classes = [
    tones[tone],
    paddings[padding],
    "text-section-text",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section data-variant={variant} className={classes} {...props}>
      {children}
    </section>
  );
}
