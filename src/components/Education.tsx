import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <div id="education" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="space-y-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <GraduationCap className="text-cyan-400" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-2">B.Tech/B.E</h3>
                <p className="text-xl text-gray-300 mb-2">JIS University</p>
                <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                  <span>05/2016 - 05/2020</span>
                  <span className="text-cyan-400 font-semibold">GPA: 9.38/10</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/30">
                    <Award className="text-yellow-400 mt-1" size={20} />
                    <div>
                      <p className="text-gray-300 font-medium mb-1">Gold Medal for Academic Excellence</p>
                      <p className="text-gray-400 text-sm">
                        Awarded for securing 1st position in BTech Computer Science and Engineering
                        in year 2020, dated 25th March 2021
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                    <Award className="text-cyan-400 mt-1" size={20} />
                    <div>
                      <p className="text-gray-300 font-medium">Selected for CII 3 Times</p>
                      <p className="text-gray-400 text-sm">Recognition for unique project ideas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <GraduationCap className="text-cyan-400" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-2">XII</h3>
                <p className="text-xl text-gray-300 mb-2">Army Public School Barrackpore</p>
                <div className="flex flex-wrap gap-4 text-gray-400">
                  <span>05/2015 - 05/2016</span>
                  <span className="text-cyan-400 font-semibold">Percentage: 84.64%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
