import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Header,
  Footer,
  Ntp,
  Headline,
  FounderAvatar,
  Section,
  ContactIcons,
} from "../components";
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
          <Section data-id="founder-intro" className="px-6 pb-16 text-center">
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
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 text-left"
            >
              {FOUNDER.shortBio}
            </p>
          </Section>

          {/* Biography */}
          <section data-id="founder-bio" className="px-6 py-16 bg-slate-800/50">
            <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-slate-300">
              {FOUNDER.longBio.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <ContactIcons className="mt-10" />
          </section>

          {/* Portfolio */}
          <Section
            id="portfolio"
            data-id="founder-portfolio"
            padding="none"
            className="px-6 pt-20 pb-4"
          >
            <div className="text-center">
              <Headline size="4xl" underlined>
                Portfolio
              </Headline>
            </div>
          </Section>

          {PORTFOLIO.map((category, i) => (
            <Section
              key={category.id}
              tone={i % 2 === 0 ? "base" : "raised"}
              data-id={`portfolio-${category.id}`}
              className="py-14"
            >
              <div className="mx-auto max-w-5xl">
                <h3 tabIndex={0} className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-section-eyebrow">
                  {category.label}
                </h3>

                <div className="space-y-8">
                  {category.projects.map((project) => (
                    <article
                      key={project.id}
                      data-id={`portfolio-item-${project.id}`}
                      className="rounded-2xl border border-section-border bg-section-surface p-6 md:p-8"
                    >
                      <h4 tabIndex={0} className="text-xl font-semibold uppercase tracking-wide text-section-heading">
                        {project.title}
                      </h4>
                      {project.summary && (
                        <p className="mt-2 italic text-section-muted">
                          {project.summary}
                        </p>
                      )}

                      <div className="mt-6 grid gap-8 md:grid-cols-2">
                        {project.lists.map((list) => (
                          <div key={list.heading ?? list.points[0]}>
                            {list.heading && (
                              <h5 tabIndex={0} className="mb-3 font-semibold text-section-accent">
                                {list.heading}
                              </h5>
                            )}
                            <ul className="space-y-2 leading-relaxed text-section-text">
                              {list.points.map((point) => (
                                <li key={point} className="flex gap-3">
                                  <span
                                    aria-hidden="true"
                                    className="text-section-accent"
                                  >
                                    •
                                  </span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </Section>
          ))}

          <Ntp variant="black-white" />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default FounderPage;
