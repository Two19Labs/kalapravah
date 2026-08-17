import React, { useState, useEffect } from 'react';
import { Menu, X, Feather } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'artist', label: 'The Artist' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF8F3]/90 backdrop-blur-md border-b border-[#E7E0D2] shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('hero')} 
          className="text-left group focus:outline-none flex items-center gap-2.5"
        >
          <Feather className="w-5 h-5 text-[#B94A2D]" />
          <span className="font-serif text-2xl font-bold tracking-tight text-[#1C1917]">
            Kalapravah
          </span>
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-colors hover:text-[#B94A2D] ${
                activeSection === item.id 
                  ? 'text-[#B94A2D] font-semibold' 
                  : 'text-[#44403C]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1C1917] hover:text-[#B94A2D] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F3] border-b border-[#E7E0D2] px-6 py-6 space-y-3 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left text-base font-serif font-medium py-2 border-b border-[#E7E0D2]/50 ${
                activeSection === item.id ? 'text-[#B94A2D] font-bold' : 'text-[#1C1917]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
