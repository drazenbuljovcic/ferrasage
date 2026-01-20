import { useState, useRef, useCallback, useEffect } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const fileInputRef = useRef(null);
  const figureRefs = useRef([]);
  const [mousePositions, setMousePositions] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const heroSectionRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (heroSectionRef.current) {
        const heroBottom =
          heroSectionRef.current.offsetTop +
          heroSectionRef.current.offsetHeight;
        setShowScrollTop(window.scrollY > heroBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const smoothScroll = useCallback((targetY, duration = 800) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      window.scrollTo(0, startY + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, []);

  const scrollToSection = useCallback(
    (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight;

        smoothScroll(offsetPosition);
      }
    },
    [smoothScroll],
  );

  const scrollToTop = useCallback(() => {
    smoothScroll(0, 600);
  }, [smoothScroll]);

  const handleMouseMove = (e, index) => {
    const rect = figureRefs.current[index]?.getBoundingClientRect();
    if (rect) {
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePositions((prev) => ({ ...prev, [index]: { x, y } }));
    }
  };

  const handleTouchMove = (e, index) => {
    const touch = e.touches[0];
    const rect = figureRefs.current[index]?.getBoundingClientRect();
    if (rect && touch) {
      const x = ((touch.clientX - rect.left) / rect.width) * 100;
      const y = ((touch.clientY - rect.top) / rect.height) * 100;
      setMousePositions((prev) => ({ ...prev, [index]: { x, y } }));
    }
  };

  const handleTouchEnd = () => {
    setMousePositions({});
  };

  const handleMouseLeave = () => {
    setMousePositions({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formDataWithFiles = new FormData();
    formDataWithFiles.append("name", formData.name);
    formDataWithFiles.append("email", formData.email);
    formDataWithFiles.append("message", formData.message);
    attachments.forEach((file) => {
      formDataWithFiles.append("attachments", file);
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setAttachments([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setTimeout(() => setSubmitted(false), 3000);
  };

  const catchPhrases = [
    { title: "Single-Minded", subtitle: "Execution" },
    { title: "Multy-Industry", subtitle: "Insight" },
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % catchPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [catchPhrases.length]);

  const handleTouchStartHero = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMoveHero = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEndHero = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentPhraseIndex((prev) => (prev + 1) % catchPhrases.length);
      } else {
        setCurrentPhraseIndex(
          (prev) => (prev - 1 + catchPhrases.length) % catchPhrases.length,
        );
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const services = [
    {
      icon: "📊",
      title: "Technical Expertise",
      description:
        "Expert guidance on complex engineering problems, technology strategy, and technical due diligence.",
    },
    {
      icon: "⚡",
      title: "Electrical Converters",
      description:
        "Circuit design, power systems, and electromagnetic solutions for industrial and commercial applications.",
    },
    // {
    //   icon: "🔧",
    //   title: "Hardware Engineering",
    //   description:
    //     "PCB design, embedded systems, and hardware architecture for next-generation devices.",
    // },
    {
      icon: "🧲",
      title: "Magneticism",
      description: "Transformers, Filters",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
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
                onClick={() => scrollToSection("expertise")}
                className="cursor-pointer transition-colors hover:text-[var(--color-primary)] hover:active:text-[var(--color-primary)]"
              >
                Expertise
              </a>
              <a
                onClick={() => scrollToSection("services")}
                className="cursor-pointer transition-colors hover:text-[var(--color-primary)] hover:active:text-[var(--color-primary)]"
              >
                Services
              </a>
              <a
                onClick={() => scrollToSection("contact")}
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
                  onClick={() => {
                    scrollToSection("expertise");
                    closeMobileMenu();
                  }}
                  className="cursor-pointer transition-colors hover:text-[var(--color-primary)] py-2"
                >
                  Expertise
                </a>
                <a
                  onClick={() => {
                    scrollToSection("services");
                    closeMobileMenu();
                  }}
                  className="cursor-pointer transition-colors hover:text-[var(--color-primary)] py-2"
                >
                  Services
                </a>
                <a
                  onClick={() => {
                    scrollToSection("contact");
                    closeMobileMenu();
                  }}
                  className="cursor-pointer transition-colors hover:text-[var(--color-primary)] py-2"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="mt-12">
        <section ref={heroSectionRef} className="pt-20 pb-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col">
              <div className="inline-block px-4 py-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm font-medium mb-6 self-center">
                Engineering Excellence Since <b className="text-xl">2025</b>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-6 text-center text-shadow-glow">
                FERRASAGE{" "}
                <span className="text-[var(--color-primary)]">Engineering</span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed text-center bold">
                From insight to impact, we partner with teams to deliver results
                that scale.
              </p>
              <div className="flex gap-4">
                <a
                  onClick={() => scrollToSection("contact")}
                  className="flex-1 text-center px-8 py-4 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:active:bg-[var(--color-primary)] transition-all hover:active:scale-105 cursor-pointer"
                >
                  Start a Project
                </a>
                <a
                  onClick={() => scrollToSection("services")}
                  className="flex-1 text-center px-8 py-4 border border-slate-600 text-slate-300 font-medium rounded-lg hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all hover:active:border-[var(--color-primary)] hover:active:text-[var(--color-primary)] cursor-pointer"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="relative">
              <div className=" transition-all duration-300 aspect-square rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-slate-700 hover:border-[var(--color-primary)]/50 hover:border-4 hover:bg-slate-800/80">
                <div className="relative w-62 h-56 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center text-white text-6xl font-bold shadow-2xl shadow-[var(--color-primary)]/50">
                  {/* <img src="logo-white.svg" className="w-80 h-80 absolute" /> */}
                  <span className="z-1 text-5xl select-none transition-all text-shadow-accent hover:-translate-y-2 hover:scale-110">
                    FERRASAGE
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl">
                <div className="text-3xl font-bold text-[var(--color-primary)] text-shadow-glow">
                  10+
                </div>
                <div className="text-slate-400">Years Experience</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl">
                <div id="main-hero-catch">
                  <div
                    className="main-hero-catch-phrase"
                    onTouchStart={handleTouchStartHero}
                    onTouchMove={handleTouchMoveHero}
                    onTouchEnd={handleTouchEndHero}
                  >
                    <div className="text-1xl font-bold text-[var(--color-primary)] text-shadow-glow">
                      {catchPhrases[currentPhraseIndex].title}
                    </div>
                    <div className="text-1xl text-slate-400">
                      {catchPhrases[currentPhraseIndex].subtitle}
                    </div>
                    <div className="flex justify-center gap-2 mt-2">
                      {catchPhrases.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentPhraseIndex
                              ? "bg-[var(--color-primary)]"
                              : "bg-slate-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Core Expertise
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Deep technical capabilities across the engineering spectrum
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <figure
                  key={index}
                  ref={(el) => (figureRefs.current[index] = el)}
                  data-servisable
                  data-service={service.title}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={handleMouseLeave}
                  onTouchMove={(e) => handleTouchMove(e, index)}
                  onTouchEnd={handleTouchEnd}
                  className="p-8 bg-slate-800 border border-slate-700 rounded-2xl transition-all duration-300 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-[var(--color-primary)]/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:border-[var(--color-primary)]/50 hover:before:opacity-100 active:border-[var(--color-primary)]/50 active:before:opacity-100"
                  style={{
                    "--mouse-x":
                      mousePositions[index]?.x !== undefined
                        ? `${mousePositions[index].x}%`
                        : "50%",
                    "--mouse-y":
                      mousePositions[index]?.y !== undefined
                        ? `${mousePositions[index].y}%`
                        : "50%",
                  }}
                >
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                      mousePositions[index]?.x !== undefined
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    style={{
                      background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(152, 168, 105, 0.15), transparent 40%)`,
                    }}
                  />
                  <div className="relative z-10 select-none">
                    <div className="select-none text-6xl mb-8 text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-active:scale-110 group-active:rotate-3">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-[var(--color-primary)] group-active:text-[var(--color-primary)]">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed transition-colors duration-300 group-hover:text-slate-300 group-active:text-slate-300">
                      {service.description}
                    </p>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Naš Aprouč</h2>
            <div className="bg-slate-800 p-12 rounded-3xl border border-slate-700">
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                Ferrasage. Najjača priča znaš.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                From initial consultation through research, prototyping, and
                production—we partner with entrepreneurs and enterprises to
                build reliable, cutting-edge technology that performs in the
                real world.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-slate-700 text-[var(--color-primary)] rounded-full text-sm font-medium">
                  Consultations
                </span>
                <span className="px-4 py-2 bg-slate-700 text-[var(--color-primary)] rounded-full text-sm font-medium">
                  Research & Development
                </span>
                <span className="px-4 py-2 bg-slate-700 text-[var(--color-primary)] rounded-full text-sm font-medium">
                  Production Support
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 bg-gradient-to-r from-[var(--color-primary-dark)]/40 to-slate-900 border-y border-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider mb-2">
              Engineering Note
            </p>
            <p className="text-2xl text-white font-light italic leading-relaxed">
              "We don't just build products. We engineer solutions that
              work—because the physics always has the final say."
            </p>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Direct it our way
              </h2>
              {/* <p className="text-xl text-slate-400">Šta te muči?</p> */}
            </div>

            {/* <a
              className="max-w-xl mx-auto text-slate-500 transition-colors hover:text-red-400 active:text-red-400"
              href="mailto:office@ferrasage.com"
            >
              🔗
            </a> */}

            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="space-y-6">
                {/* <div>
                  <label className=" block text-sm font-medium text-slate-300 mb-2 p-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className=" text-center w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all text-white placeholder-slate-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className=" block text-sm font-medium text-slate-300 mb-2 text-4xl p-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="text-center w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all text-white placeholder-slate-500"
                    placeholder="client@ferrasage.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2 p-2">
                    Project Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all resize-none text-white placeholder-slate-500"
                    placeholder="Describe your engineering requirements..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2 p-2">
                    Attachments
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center justify-center px-4 py-3 bg-slate-800 border border-dashed border-slate-600 rounded-lg cursor-pointer transition-all group hover:border-[var(--color-primary)] hover:bg-slate-800/80 active:border-[var(--color-primary)]">
                      <input
                        type="file"
                        multiple
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <span className="text-slate-400 group-hover:text-[var(--color-primary)] transition-colors">
                        <b>++ Attachments ++</b>
                      </span>
                    </label>
                    {attachments.length > 0 && (
                      <div className="space-y-2">
                        {attachments.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg"
                          >
                            <span className="text-slate-300 text-sm truncate max-w-[200px]">
                              {file.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeAttachment(index)}
                              className="text-slate-500 transition-colors hover:text-red-400 active:text-red-400"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div> */}

                <a href="mailto:office@ferrasage.com" className="pointer">
                  <button
                    type="button"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[var(--color-primary)] text-white font-medium rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--color-primary)] hover:scale-[1.02] active:scale-[1.02]"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"} 🔗
                  </button>
                </a>
                {submitted && (
                  <div className="p-4 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-lg text-center border border-[var(--color-primary)]/20">
                    Thank you. We'll be in touch shortly.
                  </div>
                )}
              </div>
            </form>
          </div>
        </section>

        {showScrollTop && (
          <button
            id="scroll-to-top"
            onClick={scrollToTop}
            className="cursor-pointer fixed right-3 bottom-3 px-3 py-1 bg-[var(--color-primary)] text-2xl text-center rounded-lg text-black text-bold"
          >
            ^
          </button>
        )}
      </main>
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold text-white">Ferrasage</div>
          <div className="text-slate-500">
            © 2025 Ferrasage. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-slate-500 transition-colors cursor-pointer hover:text-[var(--color-primary)] active:text-[var(--color-primary)]"
            >
              LinkedIn
            </a>
            <a
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-slate-500 transition-colors cursor-pointer hover:text-[var(--color-primary)] active:text-[var(--color-primary)]"
            >
              ResearchGate
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
