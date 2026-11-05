import { useState } from 'react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Electrical Converter Systems',
      category: 'engineering',
      description: 'Advanced power conversion systems for industrial applications, achieving 98.7% efficiency across multiple operating conditions.',
      image: 'https://images.unsplash.com/photo-1595670644008-05f10e792d2e?w=400&h=300&fit=crop',
      year: '2024',
      technologies: ['Power Electronics', 'Control Systems', 'EMC Design']
    },
    {
      id: 2,
      title: 'Magnetic Filter Design',
      category: 'magneticism',
      description: 'Novel filter topology that reduces harmonic distortion by 42% while maintaining high bandwidth and thermal stability.',
      image: 'https://images.unsplash.com/photo-1581090464021-911a7c75054d?w=400&h=300&fit=crop',
      year: '2024',
      technologies: ['Magnetic Design', 'Finite Element Analysis', 'Thermal Management']
    },
    {
      id: 3,
      title: 'Industrial Power Systems',
      category: 'engineering',
      description: 'Complete power system solution for manufacturing facility, reducing energy costs by 31% through optimized power factor correction and load balancing.',
      image: 'https://images.unsplash.com/photo-1517590532842-52107b0b1058?w=400&h=300&fit=crop',
      year: '2023',
      technologies: ['Power System Design', 'SCADA Integration', 'Energy Management']
    },
    {
      id: 4,
      title: 'Transformer Optimization',
      category: 'magneticism',
      description: 'Patented transformer design that reduces losses by 27% through innovative winding configuration and core material selection.',
      image: 'https://images.unsplash.com/photo-1595670644008-05f10e792d2e?w=400&h=300&fit=crop',
      year: '2023',
      technologies: ['Transformer Design', 'Materials Science', 'EM Simulation']
    },
    {
      id: 5,
      title: 'High-Precision Control Systems',
      category: 'engineering',
      description: 'Advanced control algorithms for precision positioning systems, achieving sub-micron accuracy in high-speed applications.',
      image: 'https://images.unsplash.com/photo-1595670644008-05f10e792d2e?w=400&h=300&fit=crop',
      year: '2023',
      technologies: ['Control Theory', 'Real-time Processing', 'Sensor Fusion']
    },
    {
      id: 6,
      title: 'Magnetic Shielding Solutions',
      category: 'magneticism',
      description: 'Custom magnetic shielding for sensitive equipment, reducing external interference by 99.8% in challenging environments.',
      image: 'https://images.unsplash.com/photo-1581090464021-911a7c75054d?w=400&h=300&fit=crop',
      year: '2023',
      technologies: ['Magnetic Shielding', 'EMI/RFI Protection', 'Field Modeling']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'engineering', name: 'Engineering Solutions' },
    { id: 'magneticism', name: 'Magneticism' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Explore our engineering excellence through successful projects that demonstrate our commitment to innovation and technical mastery.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/30' 
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-[var(--color-primary)]/50 transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-slate-400">{project.year}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  className="w-full py-2 bg-[var(--color-primary)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-primary)]/80 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;