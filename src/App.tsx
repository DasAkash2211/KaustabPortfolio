import { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <Navigation />
      <main>
        <section ref={el => sectionsRef.current[0] = el} className="fade-in-section">
          <Hero />
        </section>
        <section ref={el => sectionsRef.current[1] = el} className="fade-in-section">
          <About />
        </section>
        <section ref={el => sectionsRef.current[2] = el} className="fade-in-section">
          <Experience />
        </section>
        <section ref={el => sectionsRef.current[3] = el} className="fade-in-section">
          <Skills />
        </section>
        <section ref={el => sectionsRef.current[4] = el} className="fade-in-section">
          <Projects />
        </section>
        <section ref={el => sectionsRef.current[5] = el} className="fade-in-section">
          <Education />
        </section>
        <section ref={el => sectionsRef.current[6] = el} className="fade-in-section">
          <Contact />
        </section>
      </main>
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2026 Kaustab Roy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
