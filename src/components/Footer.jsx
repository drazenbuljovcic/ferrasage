export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold text-white">Ferrasage</div>
        <div className="text-slate-500">© 2025 Ferrasage.</div>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-slate-500 transition-colors cursor-pointer hover:text-[var(--color-primary)] active:text-[var(--color-primary)]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
