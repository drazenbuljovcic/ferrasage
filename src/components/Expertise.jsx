import { useRef } from 'react';
import { useMousePosition } from '../hooks';
import { Headline } from './Headline';

const services = [
  {
    icon: '📊',
    title: 'Technical Expertise',
    description:
      'Expert guidance on technology implementation and EMC in power electronics.',
  },
  {
    icon: '⚡',
    title: 'Electrical Converters',
    description:[
      'Power systems design for reliable operation.',
      'Electronics, packaging and cooling included.',
    ]
  },
  {
    icon: '🧲',
    title: 'Magnetics',
    description: [
      'Tailored design and integration of',
      'Transformers',
      'Inductors',
      'EMI chokes',]
  },
];

export function Expertise() {
  const figureRefs = useRef([]);
  const { mousePositions, handleMouseMove, handleTouchMove, handleReset } =
    useMousePosition();

  return (
    <section id="expertise" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Headline size="4xl" underlined className="mb-4">
            Core Expertise
          </Headline>
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
              onMouseMove={(e) => handleMouseMove(e, index, figureRefs.current[index])}
              onMouseLeave={handleReset}
              onTouchMove={(e) => handleTouchMove(e, index, figureRefs.current[index])}
              onTouchEnd={handleReset}
              className="p-8 bg-slate-800 border border-slate-700 rounded-2xl transition-all duration-300 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-[var(--color-primary)]/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:border-[var(--color-primary)]/50 hover:before:opacity-100 active:border-[var(--color-primary)]/50 active:before:opacity-100"
              style={{
                '--mouse-x':
                  mousePositions[index]?.x !== undefined
                    ? `${mousePositions[index].x}%`
                    : '50%',
                '--mouse-y':
                  mousePositions[index]?.y !== undefined
                    ? `${mousePositions[index].y}%`
                    : '50%',
              }}
            >
              <div
                className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                  mousePositions[index]?.x !== undefined
                    ? 'opacity-100'
                    : 'opacity-0'
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
                
                {service.description.map((line, i) => (
                  <p key={i} className="text-slate-400 leading-relaxed transition-colors duration-300 group-hover:text-slate-300 group-active:text-slate-300">
                    {line}
                  </p>
                ))}

                /*<p className="text-slate-400 leading-relaxed transition-colors duration-300 group-hover:text-slate-300 group-active:text-slate-300">
                  {service.description}
                </p>*/
                
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
