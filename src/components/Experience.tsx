import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer (L2)',
      company: 'Specbee Pvt. Ltd',
      period: '03/2023 - Present',
      achievements: [
        'Architects performant, accessible, and scalable CMS experiences by integrating Drupal backends with Next.js and Tailwind CSS',
        'Utilizes Next.js Page Router features, including getStaticProps and getServerSideProps, to optimize SEO and data-fetching strategies',
        'Develops custom Drupal modules and leverages the Form API to build dynamic, secure administrative and user-facing interfaces',
        'Implements caching strategies (Cache Tags and Contexts) within Drupal to minimize server load'
      ]
    },
    {
      title: 'Drupal Frontend Developer',
      company: 'Innoraft Solutions Pvt. Ltd',
      period: '10/2020 - 02/2023',
      achievements: [
        'Focused on site building in Drupal with frontend tools and converting PSD/Figma to HTML/Twig',
        'Designed and updated layouts to meet usability and performance requirements',
        'Improved the load time by up to 30%'
      ]
    }
  ];

  return (
    <div id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Briefcase size={18} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
