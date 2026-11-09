import { Helmet } from "react-helmet-async";
import {
  Header,
  Footer,
  Ntp,
  Headline,
  FounderAvatar,
  Section,
  ContactIcons,
  Contact,
} from "../components";
import { FOUNDER, PORTFOLIO } from "../data/founder";

function FounderPage() {
  return (
    <>
      <Helmet>
        <title>{`${FOUNDER.name} | Ferrasage`}</title>
        <meta name="description" content={FOUNDER.shortBio} />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-slate-300">
        <Header showScrollItems={false} />

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

            <blockquote className="relative mx-auto max-w-3xl border-l-2 border-[var(--color-primary)]/60 pl-6 md:pl-10">
              <p
                data-id="founder-short-bio"
                className="mx-auto mt-6 max-w-3xl text-md leading-relaxed text-slate-300 text-left"
              >
                {FOUNDER.shortBio}
              </p>
            </blockquote>
          </Section>

          {/* Biography */}
          <section data-id="founder-bio" className="px-6 py-16 bg-slate-800/50">
            {/* <div className="text-center">
              <p className="mb-6 text-lg font-semibold uppercase tracking-widest text-section-eyebrow">
                In Dalibor's words
              </p>
            </div> */}

            <blockquote className="relative mx-auto max-w-3xl border-l-2 border-[var(--color-primary)]/60 pl-6 md:pl-10 pt-4">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-2 left-4 select-none font-serif text-7xl leading-none text-[var(--color-primary)]/40 md:left-8 md:text-8xl"
              >
                “
              </span>

              <div className="space-y-5 pt-6 text-md italic leading-relaxed text-slate-300">
                {FOUNDER.longBio.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>

              <footer className="mt-8 flex items-center gap-3 not-italic">
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-[var(--color-primary)]"
                />
                <cite className="text-base font-semibold not-italic tracking-wide text-white">
                  {FOUNDER.name}
                  <span className="ml-2 font-normal text-slate-400">
                    {FOUNDER.role}
                  </span>
                </cite>
              </footer>
            </blockquote>
            <ContactIcons className="mt-10" />
          </section>

          {/* Portfolio */}
          <Section
            id="portfolio"
            data-id="founder-portfolio"
            padding="none"
            className="px-6 pt-14 pb-2"
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
              padding="sm"
            >
              <div className="mx-auto max-w-5xl">
                <h3
                  tabIndex={0}
                  className="mb-5 text-center text-md font-semibold uppercase tracking-widest text-section-eyebrow"
                >
                  {category.label}
                </h3>

                <div className="space-y-4">
                  {category.projects.map((project) => (
                    <article
                      key={project.id}
                      data-id={`portfolio-item-${project.id}`}
                      className="rounded-2xl border border-section-border bg-section-surface p-4 md:p-5"
                    >
                      <h4
                        tabIndex={0}
                        className="text-base font-semibold uppercase tracking-wide text-section-heading"
                      >
                        {project.title}
                      </h4>
                      {project.summary && (
                        <p className="mt-1 text-sm italic text-section-muted">
                          {project.summary}
                        </p>
                      )}

                      <div className="mt-3 grid gap-x-6 gap-y-3 md:grid-cols-2">
                        {project.lists.map((list) => (
                          <div key={list.heading ?? list.points[0]}>
                            {list.heading && (
                              <h5
                                tabIndex={0}
                                className="mb-1.5 text-sm font-semibold text-section-accent"
                              >
                                {list.heading}
                              </h5>
                            )}
                            <ul className="space-y-1 text-sm leading-snug text-section-text">
                              {list.points.map((point) => (
                                <li key={point} className="flex gap-2">
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

          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default FounderPage;
