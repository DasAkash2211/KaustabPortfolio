const Skills = () => {
  const skillCategories = [
    {
      category: 'Framework/Library',
      skills: ['Drupal 11', 'Next.js', 'React JS', 'jQuery', 'Greensock JS', 'JavaScript', 'TypeScript']
    },
    {
      category: 'Automation & Task Runners',
      skills: ['Docker', 'Lando', 'Gulp']
    },
    {
      category: 'Structural',
      skills: ['HTML5', 'JSON', 'YAML']
    },
    {
      category: 'Styling',
      skills: ['CSS', 'SCSS', 'Tailwind CSS']
    }
  ];

  return (
    <div id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/30">
          <h3 className="text-2xl font-semibold text-center mb-4 text-cyan-400">Languages</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="text-center">
              <p className="text-gray-300 font-medium">Bengali</p>
              <p className="text-gray-500 text-sm">Full Professional Proficiency</p>
            </div>
            <div className="text-center">
              <p className="text-gray-300 font-medium">English</p>
              <p className="text-gray-500 text-sm">Full Professional Proficiency</p>
            </div>
            <div className="text-center">
              <p className="text-gray-300 font-medium">Hindi</p>
              <p className="text-gray-500 text-sm">Full Professional Proficiency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
