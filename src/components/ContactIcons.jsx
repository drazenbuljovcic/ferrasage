import { CONTACTS } from "../data/founder";

const svgProps = {
  viewBox: "0 0 24 24",
  className: "h-5 w-5",
  "aria-hidden": "true",
  focusable: "false",
};

// To use a different LinkedIn artwork, replace the contents of this icon.
const icons = {
  linkedin: (
    <svg {...svgProps} fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.83v1.57h.06c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.78 2.66 4.78 6.12v5.88h-4v-5.2c0-1.24-.02-2.83-1.73-2.83-1.73 0-2 1.35-2 2.74v5.29h-4V9.75Z" />
    </svg>
  ),
  email: (
    <svg
      {...svgProps}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  ),
  // phone: (
  //   <svg
  //     {...svgProps}
  //     fill="none"
  //     stroke="currentColor"
  //     strokeWidth="1.8"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //   >
  //     <path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5L16 14l4 1.5V19a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  //   </svg>
  // ),
};

/** A row of round, tappable (44px) contact links. */
export function ContactIcons({ className = "" }) {
  return (
    <ul
      data-id="contact-icons"
      className={`flex items-center justify-center gap-4 ${className}`}
    >
      {CONTACTS.map((c) => (
        <li key={c.id}>
          <a
            href={c.href}
            aria-label={
              c.external ? `${c.label} (opens in a new tab)` : c.label
            }
            title={c.label}
            {...(c.external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-section-border bg-section-surface text-section-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-section-accent hover:text-section-accent focus-visible:outline-2 focus-visible:outline-offset-2 active:border-section-accent active:text-section-accent"
          >
            {icons[c.icon]}
          </a>
        </li>
      ))}
    </ul>
  );
}
