export function Headline({
  children,
  size = "4xl",
  underlined = false,
  className = "",
}) {
  const sizeClasses = {
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <h2
        className={`font-bold text-white ${sizeClasses[size]} ${underlined ? "pb-2" : ""}`}
      >
        {children}
      </h2>
      {underlined && (
        <div className="absolute -bottom-1 left-0 right-0 h-0.5 max-w-1 bg-[var(--color-primary)] rounded-full" />
      )}
    </div>
  );
}
