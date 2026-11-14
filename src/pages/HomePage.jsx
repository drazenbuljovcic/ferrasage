import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import {
  Header,
  Hero,
  Expertise,
  Partners,
  OurServices,
  Product,
  InnovativeConcepts,
  Founder,
  Contact,
  Ntp,
  Footer,
  ScrollToTop,
} from "../components";
import { useSmoothScroll, useScrollPosition } from "../hooks";

function HomePage() {
  const heroSectionRef = useRef(null);
  const { scrollToSection } = useSmoothScroll();
  const showScrollTop = useScrollPosition(heroSectionRef);
  const location = useLocation();

  // Arriving from another page with a target section (e.g. from the founder page).
  useEffect(() => {
    const id = location.state?.scrollTo;
    if (id) setTimeout(() => scrollToSection(id), 50);
  }, [location.state, scrollToSection]);
  return (
    <>
      <div className="min-h-screen bg-slate-900 text-slate-300">
        <Header onNavigate={scrollToSection} />

        <main className="mt-12">
          <Hero ref={heroSectionRef} onNavigate={scrollToSection} />
          <Founder />
          <Expertise />
          <Partners />
          <Product />
          <InnovativeConcepts />
          <OurServices />
          <Contact />
          <ScrollToTop show={showScrollTop} />
        </main>

        <Footer showFounderLink />

        <Analytics />
      </div>
    </>
  );
}

export default HomePage;
