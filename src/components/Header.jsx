import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const FOUNDER_PATH = "/daliborbuljovcic";

// Scroll targets on the home page (section ids).
const SCROLL_ITEMS = [
  { id: "expertise", label: "Core Expertise" },
  { id: "product", label: "Active Projects" },
  { id: "innovative-concepts", label: "Innovative Concepts" },
  { id: "our-services", label: "Mindset" },
  { id: "contact", label: "Contact" },
];

const LINK_CLASS =
  "cursor-pointer transition-colors hover:text-[var(--color-primary)]";

export function Header({ onNavigate, showScrollItems = true }) {
  const { pathname } = useLocation();
  const founderActive = pathname === FOUNDER_PATH;
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

  const navLinks = (mobile) => {
    const pad = mobile ? " py-2" : "";
    return (
      <>
        <Link
          to={FOUNDER_PATH}
          onClick={closeMobileMenu}
          aria-current={founderActive ? "page" : undefined}
          className={`${LINK_CLASS}${pad} ${
            founderActive
              ? "text-[var(--color-primary)] underline underline-offset-8 decoration-2"
              : ""
          }`}
        >
          Founder
        </Link>
        {showScrollItems ? (
          SCROLL_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              onClick={() => handleNavClick(id)}
              className={`${LINK_CLASS}${pad}`}
            >
              {label}
            </a>
          ))
        ) : (
          <Link to="/" onClick={closeMobileMenu} className={`${LINK_CLASS}${pad}`}>
            Home
          </Link>
        )}
      </>
    );
  };

  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            <a className="pointer" href="/">
              <img src="logo-dark.svg" className="w-12 h-12 inline" />
              <h1 tabIndex={0} className="text-2xl inline text-[var(--color-primary)]">
                FERRASAGE
              </h1>
            </a>
          </div>
          <div className="hidden md:flex gap-8">
            {navLinks(false)}
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
              {navLinks(true)}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
