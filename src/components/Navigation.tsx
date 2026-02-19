import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false); // Close menu on click
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-2xl font-bold text-gray-900 z-50 relative"
        >
          Campus Verse
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-900 z-50 relative"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={() => scrollToSection('about')}
            className="text-2xl font-medium text-gray-900 hover:text-indigo-600 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-2xl font-medium text-gray-900 hover:text-indigo-600 transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('governance')}
            className="text-2xl font-medium text-gray-900 hover:text-indigo-600 transition-colors"
          >
            Governance
          </button>
          <button
            onClick={() => scrollToSection('join')}
            className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
}
