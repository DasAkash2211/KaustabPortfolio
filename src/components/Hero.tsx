import { Download, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-float">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-cyan-500 shadow-2xl shadow-cyan-500/50 flex items-center justify-center">
            <img
              src="/WhatsApp_Image_2026-03-12_at_20.48.21.jpeg.jpeg"
              alt="Kaustab Roy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Kaustab Roy
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 animate-slide-up animation-delay-100">
          Software Developer
        </h2>

        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
          Fullstack Drupal & Next.js Developer with a proven ability to architect performant,
          decoupled CMS solutions. Expert at bridging Drupal backend systems with modern Next.js
          architectures to deliver seamless user experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up animation-delay-300">
          <a
            href="/Kroy_CV_March_2026_(1).pdf"
            download
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105"
          >
            <Download size={20} className="group-hover:animate-bounce" />
            Download CV
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 border border-cyan-500 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-gray-400 animate-slide-up animation-delay-400">
          <a href="mailto:kaustavroy1111@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Mail size={18} />
            <span className="text-sm">kaustavroy1111@gmail.com</span>
          </a>
          <a href="tel:9007622586" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Phone size={18} />
            <span className="text-sm">9007622586</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span className="text-sm">Kolkata, West Bengal 70118</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
