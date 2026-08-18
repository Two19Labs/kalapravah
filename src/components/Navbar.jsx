import React, { useState, useEffect } from 'react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'collections', label: 'ARTWORKS' },
    { id: 'journal', label: 'JOURNAL' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#E7E0D2] shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('hero')} 
          className="text-left group focus:outline-none"
        >
          <span className="font-serif text-2xl font-bold tracking-widest text-[#1C1917] uppercase">
            KALAPRAVAH
          </span>
        </button>

        {/* Header Nav Links */}
        <nav className="flex items-center gap-4 sm:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-xs font-semibold tracking-[0.18em] text-[#44403C] hover:text-[#C87A38] transition-colors uppercase"
            >
              {item.label}
            </button>
          ))}
        </nav>

      </div>
    </header>
  );
}
