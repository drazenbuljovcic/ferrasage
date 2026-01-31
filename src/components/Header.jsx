import { useState } from "react";

export function Header({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (sectionId) => {
    onNavigate(sectionId);
    closeMobileMenu();
  };

  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            <a className="pointer" href="/">
              <img src="logo-dark.svg" className="w-12 h-12 inline" />
              <h1 className="text-2xl inline text-[var(--color-primary)]">
                FERRASAGE
              </h1>
            </a>
          </div>
          <div className="hidden md:flex gap-8">
            <a
              onClick={() => handleNavClick("expertise")}
              className="cursor-pointer transition-colors hover:text-[var(--color-primary)] hover:active:text-[var(--color-primary)]"
            >
              Core Expertise
            </a>
            <a
              onClick={() => handleNavClick("services")}
              className="cursor-pointer transition-colors hover:text-[var(--color-primary)] hover:active:text-[var(--color-primary)]"
            >
              Mindset
            </a>
            <a
              onClick={() => handleNavClick("contact")}
              className="cursor-pointer transition-colors hover:text-[var(--color-primary)] hover:active:text-[var(--color-primary)]"
            >
              Contact
            </a>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="flex flex-col py-4 px-6 gap-4">
              <a
                onClick={() => handleNavClick("expertise")}
                className="cursor-pointer transition-colors hover:text-[var(--color-primary)] py-2"
              >
                Expertise
              </a>
              <a
                onClick={() => handleNavClick("services")}
                className="cursor-pointer transition-colors hover:text-[var(--color-primary)] py-2"
              >
                Services
              </a>
              <a
                onClick={() => handleNavClick("contact")}
                className="cursor-pointer transition-colors hover:text-[var(--color-primary)] py-2"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
