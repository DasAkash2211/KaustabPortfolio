import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Jewel Mutuals Group',
      description: 'Streamlined the Design-to-Code workflow by implementing Figma Tokens Transformer, ensuring consistent Tailwind CSS utility mapping across the design system.',
      technologies: ['Drupal', 'React', 'Tailwind CSS', 'JSON:API'],
      highlights: [
        'Leveraged Drupal APIs (JSON:API) to fetch and normalize complex data structures for consumption by the React application layer'
      ]
    },
    {
      title: 'Apollo Hospitals',
      description: 'Spearheaded the migration from WordPress to Drupal 10, implementing revamped layouts through Single Directory Components (SDC).',
      technologies: ['Drupal 10', 'Next.js', 'SDC', 'JSON:API'],
      highlights: [
        'Next.js Decoupled Drupal site using json api module'
      ]
    },
    {
      title: 'L&T Digital Engineering Awards',
      description: 'Lead the theming and visual delivery of the awards website.',
      technologies: ['Drupal', 'Tailwind CSS', 'JavaScript'],
      highlights: []
    },
    {
      title: 'HCL TECH Brand-Transformation',
      description: 'Revamped legacy pages to align with new global brand transformation guidelines.',
      technologies: ['Drupal', 'CSS', 'JavaScript'],
      highlights: []
    }
  ];

  return (
    <div id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <ExternalLink size={20} className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

              {project.highlights.length > 0 && (
                <ul className="mb-4 space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2 text-gray-400 text-sm">
                      <span className="text-cyan-400">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
