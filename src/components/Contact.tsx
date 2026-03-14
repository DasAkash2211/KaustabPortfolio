import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen flex items-center justify-center px-4 py-16 md:py-20">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-gray-700 space-y-4">
          <a
            href="mailto:kaustavroy1111@gmail.com"
            className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group border border-gray-600 hover:border-cyan-500/50 active:scale-95"
          >
            <div className="flex-shrink-0 p-2 md:p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
              <Mail className="text-cyan-400" size={20} md={{ size: 24 }} />
            </div>
            <div className="min-w-0">
              <p className="text-gray-400 text-xs md:text-sm">Email</p>
              <p className="text-gray-200 font-medium text-sm md:text-base truncate">kaustavroy1111@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:9007622586"
            className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group border border-gray-600 hover:border-cyan-500/50 active:scale-95"
          >
            <div className="flex-shrink-0 p-2 md:p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
              <Phone className="text-cyan-400" size={20} md={{ size: 24 }} />
            </div>
            <div>
              <p className="text-gray-400 text-xs md:text-sm">Phone</p>
              <p className="text-gray-200 font-medium text-sm md:text-base">9007622586</p>
            </div>
          </a>

          <div className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-gray-700/30 rounded-xl border border-gray-600">
            <div className="flex-shrink-0 p-2 md:p-3 bg-cyan-500/10 rounded-lg">
              <MapPin className="text-cyan-400" size={20} md={{ size: 24 }} />
            </div>
            <div className="min-w-0">
              <p className="text-gray-400 text-xs md:text-sm">Location</p>
              <p className="text-gray-200 font-medium text-sm md:text-base">Kolkata, West Bengal 70118</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-center text-gray-400 mb-6 text-sm md:text-base">Connect with me</p>
            <div className="flex justify-center gap-3 md:gap-4">
              <a
                href="#"
                className="p-3 md:p-4 bg-gray-700/30 rounded-lg hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110 border border-gray-600 hover:border-cyan-500/50 active:scale-95"
              >
                <Linkedin className="text-cyan-400" size={20} md={{ size: 24 }} />
              </a>
              <a
                href="#"
                className="p-3 md:p-4 bg-gray-700/30 rounded-lg hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110 border border-gray-600 hover:border-cyan-500/50 active:scale-95"
              >
                <Github className="text-cyan-400" size={20} md={{ size: 24 }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
