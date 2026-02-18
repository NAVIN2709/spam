import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-2xl font-bold text-gray-900"
        >
          SPAM
        </button>
        <div className="flex gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('governance')}
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Governance
          </button>
          <button
            onClick={() => scrollToSection('join')}
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Join
          </button>
        </div>
      </div>
    </nav>
  );
}
