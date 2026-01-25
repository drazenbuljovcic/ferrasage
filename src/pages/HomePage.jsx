import { useRef } from "react";
import {
  Header,
  Hero,
  Expertise,
  Services,
  Contact,
  Footer,
  ScrollToTop,
  EngineeringNote,
} from "../components";
import { useSmoothScroll, useScrollPosition } from "../hooks";
import { Analytics } from "@vercel/analytics/react";

function HomePage() {
  const heroSectionRef = useRef(null);
  const { scrollToSection } = useSmoothScroll();
  const showScrollTop = useScrollPosition(heroSectionRef);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      <Header onNavigate={scrollToSection} />

      <main className="mt-12">
        <Hero ref={heroSectionRef} onNavigate={scrollToSection} />
        <Expertise />
        <Services />
        <EngineeringNote />
        <Contact />
        <ScrollToTop show={showScrollTop} />
      </main>

      <Footer />

      <Analytics />
    </div>
  );
}

export default HomePage;
