import { forwardRef } from 'react';
import { useTouchNavigation } from '../hooks';

const catchPhrases = [
  { title: 'Single-Minded', subtitle: 'Execution' },
  { title: 'Multy-Industry', subtitle: 'Insight' },
];

export const Hero = forwardRef(({ onNavigate }, ref) => {
  const { currentIndex, handleTouchStart, handleTouchMove, handleTouchEnd } =
    useTouchNavigation(catchPhrases);

  return (
    <section ref={ref} className="pt-20 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col">
          <div className="inline-block px-4 py-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm font-medium mb-6 self-center">
            Engineering Excellence Since <b className="text-xl">2025</b>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-6 text-center text-shadow-glow">
            FERRASAGE{' '}
            <span className="text-[var(--color-primary)]">Engineering</span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 leading-relaxed text-center bold">
            From insight to impact, we partner with teams to deliver results that
            scale.
          </p>
          <div className="flex gap-4">
            <a
              onClick={() => onNavigate('contact')}
              className="flex-1 text-center px-8 py-4 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:active:bg-[var(--color-primary)] transition-all hover:active:scale-105 cursor-pointer"
            >
              Start a Project
            </a>
            <a
              onClick={() => onNavigate('services')}
              className="flex-1 text-center px-8 py-4 border border-slate-600 text-slate-300 font-medium rounded-lg hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all hover:active:border-[var(--color-primary)] hover:active:text-[var(--color-primary)] cursor-pointer"
            >
              Explore Services
            </a>
          </div>
        </div>

        <div className="relative">
          <div className=" transition-all duration-300 aspect-square rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-slate-700 hover:border-[var(--color-primary)]/50 hover:border-4 hover:bg-slate-800/80">
            <div className="relative w-62 h-56 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center text-white text-6xl font-bold shadow-2xl shadow-[var(--color-primary)]/50">
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
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="text-1xl font-bold text-[var(--color-primary)] text-shadow-glow">
                {catchPhrases[currentIndex].title}
              </div>
              <div className="text-1xl text-slate-400">
                {catchPhrases[currentIndex].subtitle}
              </div>
              <div className="flex justify-center gap-2 mt-2">
                {catchPhrases.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-[var(--color-primary)]'
                        : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
