import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header, Footer, FindUs, Headline, FounderAvatar } from "../components";
import { FOUNDER, PORTFOLIO } from "../data/founder";

function FounderPage() {
  const navigate = useNavigate();
  const goHomeSection = (id) => navigate("/", { state: { scrollTo: id } });

  return (
    <>
      <Helmet>
        <title>{`${FOUNDER.name} | Ferrasage`}</title>
        <meta name="description" content={FOUNDER.shortBio} />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-slate-300">
        <Header onNavigate={goHomeSection} />

        <main className="pt-28">
          {/* Intro */}
          <section data-id="founder-intro" className="px-6 pb-16 text-center">
            <FounderAvatar className="mx-auto h-44 w-44 border-4 text-5xl shadow-2xl shadow-[var(--color-primary)]/20 md:h-56 md:w-56 md:text-6xl" />
            <h1
              data-id="founder-name"
              className="mt-8 text-4xl md:text-6xl font-bold text-white"
            >
              {FOUNDER.name}
            </h1>
            <p
              data-id="founder-role"
              className="mt-3 text-lg md:text-xl font-semibold tracking-wide text-[var(--color-primary)]"
            >
              {FOUNDER.role}
            </p>
            <p
              data-id="founder-short-bio"
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300"
            >
              {FOUNDER.shortBio}
            </p>
          </section>

          {/* Biography */}
          <section data-id="founder-bio" className="px-6 py-16 bg-slate-800/50">
            <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-slate-300">
              {FOUNDER.longBio.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </section>

          {/* Portfolio sheet */}
          <section id="portfolio" data-id="founder-portfolio" className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <Headline size="4xl" underlined>
                  Portfolio
                </Headline>
              </div>

              <div
                data-id="portfolio-sheet"
                className="mx-auto max-w-3xl rounded-2xl border border-slate-700 bg-slate-800 p-8 md:p-12"
              >
                <ul className="divide-y divide-slate-700">
                  {PORTFOLIO.map((item) => (
                    <li
                      key={item.id}
                      data-id={`portfolio-item-${item.id}`}
                      className="py-6 first:pt-0 last:pb-0"
                    >
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-sm text-[var(--color-primary)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <FindUs />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default FounderPage;
