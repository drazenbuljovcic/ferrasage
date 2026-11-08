import { useRef, type ReactNode } from "react";
import { useMousePosition } from "../hooks";

export type TileVariant = "default" | "black-white";

interface TileProps {
  href: string;
  /** "default" = olive green on dark, "black-white" = monochrome on light */
  variant?: TileVariant;
  /** Accessible label for the link */
  label: string;
  children?: ReactNode;
  className?: string;
}

const TILE_INDEX = 0;

const variants: Record<
  TileVariant,
  { base: string; glow: string; text: string }
> = {
  default: {
    base: "bg-slate-800 border-slate-700 hover:border-[var(--color-primary)]/50 active:border-[var(--color-primary)]/50 before:from-[var(--color-primary)]/20",
    glow: "rgba(152, 168, 105, 0.15)",
    text: "text-slate-300 group-hover:text-white group-active:text-white",
  },
  "black-white": {
    base: "bg-white border-black/15 hover:border-black active:border-black before:from-black/10",
    glow: "rgba(0, 0, 0, 0.08)",
    text: "text-neutral-700 group-hover:text-black group-active:text-black",
  },
};

/**
 * A hovering-card style tile where the whole tile is the link/button.
 */
export function Tile({
  href,
  variant = "default",
  label,
  children,
  className = "",
}: TileProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { mousePositions, handleMouseMove, handleTouchMove, handleReset } =
    useMousePosition();

  const mouse = mousePositions[TILE_INDEX];
  const hasMouse = mouse?.x !== undefined;
  const v = variants[variant];

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseMove={(e) => handleMouseMove(e, TILE_INDEX, ref.current)}
      onMouseLeave={handleReset}
      onTouchMove={(e) => handleTouchMove(e, TILE_INDEX, ref.current)}
      onTouchEnd={handleReset}
      className={`group relative flex min-h-11 w-fit max-w-full justify-self-center items-center overflow-hidden rounded-xl border px-4 py-2 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 active:before:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 ${v.base} ${className}`}
      style={{
        // @ts-expect-error CSS custom properties
        "--mouse-x": hasMouse ? `${mouse.x}%` : "50%",
        "--mouse-y": hasMouse ? `${mouse.y}%` : "50%",
      }}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
          hasMouse ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${v.glow}, transparent 40%)`,
        }}
      />
      <span
        className={`relative z-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center transition-colors duration-300 ${v.text}`}
      >
        {children}
      </span>
    </a>
  );
}
