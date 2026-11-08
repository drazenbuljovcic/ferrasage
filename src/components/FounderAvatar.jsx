import { useState } from "react";
import { FOUNDER } from "../data/founder";

// Circular portrait with an initials fallback until /public/dalibor.jpg exists.
export function FounderAvatar({ className = "" }) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      data-id="founder-avatar"
      className={`overflow-hidden rounded-full border-[var(--color-primary)]/60 bg-slate-800 flex items-center justify-center ${className}`}
    >
      {failed ? (
        <span className="font-bold text-[var(--color-primary)]">
          {FOUNDER.initials}
        </span>
      ) : (
        <img
          src={FOUNDER.photo}
          alt={FOUNDER.name}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
