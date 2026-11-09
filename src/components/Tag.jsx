const variants = {
  shipped: { icon: "✓", label: "Shipped", style: "border-solid" },
  concept: { icon: "◇", label: "Concept", style: "border-dashed" },
};

/**
 * Small status pill. Colours come from the section tokens.
 *
 * @param {object} props
 * @param {"shipped" | "concept"} props.variant
 * @param {string} [props.className] extra classes
 */
export function Tag({ variant, className = "" }) {
  const v = variants[variant];
  if (!v) return null;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider border-section-accent text-section-accent ${v.style} ${className}`}
    >
      <span aria-hidden="true">{v.icon}</span>
      {v.label}
    </span>
  );
}
