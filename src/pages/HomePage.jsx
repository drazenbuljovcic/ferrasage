import { useRef } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Helmet } from "react-helmet-async";

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

function HomePage() {
  const heroSectionRef = useRef(null);
  const { scrollToSection } = useSmoothScroll();
  const showScrollTop = useScrollPosition(heroSectionRef);
  return (
    <>
      <div className="min-h-screen bg-slate-900 text-slate-300">
        <Helmet>
          <title>Ferrasage | Engineering Expertise</title>
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://ferrasage.com/" />
          <meta name="author" content="Ferrasage"></meta>
          <meta
            data-react-helmet="true"
            name="description"
            content="We are engineers by practice and professionals by principle — hands‑on, accountable, and committed to deliver. When challenges arise, we engage directly, with respect for the technology, the craft, and the people behind it."
          />
          <meta name="theme-color" content="#98a869" />

          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Ferrasage | Engineering Expertise"
          />
          <meta
            property="og:description"
            content="We are engineers by practice and professionals by principle — hands‑on, accountable, and committed to deliver. When challenges arise, we engage directly, with respect for the technology, the craft, and the people behind it."
          />
          <meta property="og:url" content="https://ferrasage.com/" />
          <meta property="og:image" content="https://ferrasage.com/og.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Ferrasage | Engineering Expertise"
          />
          <meta
            name="twitter:description"
            content="We are engineers by practice and professionals by principle — hands‑on, accountable, and committed to deliver. When challenges arise, we engage directly, with respect for the technology, the craft, and the people behind it."
          />
          <meta name="twitter:image" content="https://ferrasage.com/og.png" />
        </Helmet>
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
    </>
  );
}

export default HomePage;
