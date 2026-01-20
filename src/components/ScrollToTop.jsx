export function ScrollToTop({ show, onScrollToTop }) {
  if (!show) return null;

  return (
    <button
      id="scroll-to-top"
      onClick={onScrollToTop}
      className="cursor-pointer fixed right-3 bottom-3 px-3 py-1 bg-[var(--color-primary)] text-2xl text-center rounded-lg text-black text-bold"
    >
      ^
    </button>
  );
}
