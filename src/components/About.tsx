import { Code, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Full-Stack Expertise',
      description: 'Specialized in Drupal backend integration with modern Next.js architectures'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance Focused',
      description: 'Optimizing SEO and data-fetching strategies with proven 30% load time improvements'
    },
    {
      icon: <Users size={24} />,
      title: 'Collaborative Leader',
      description: 'Reducing bottlenecks through effective workload distribution and automation'
    }
  ];

  return (
    <div id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="text-cyan-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <p className="text-gray-300 leading-relaxed text-lg">
            Passionate about scalable component-driven development using SDC, Tailwind CSS, and TypeScript.
            I specialize in developing custom Drupal modules, leveraging Form API and implementing caching
            strategies to minimize server load. My expertise extends to utilizing Next.js Page Router features,
            including getStaticProps and getServerSideProps, to create performant and SEO-optimized applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
