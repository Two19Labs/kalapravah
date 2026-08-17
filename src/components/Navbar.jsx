import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Feather } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, onOpenCommission }) {
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
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'techniques', label: 'Techniques' },
    { id: 'artist', label: 'The Artist' },
    { id: 'workshops', label: 'Workshops' },
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
          ? 'bg-[#FAF8F3]/90 backdrop-blur-md border-b border-[#E7E0D2] shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Tagline */}
        <button 
          onClick={() => handleNavClick('hero')} 
          className="text-left group focus:outline-none"
        >
          <div className="flex items-center gap-2">
            <Feather className="w-5 h-5 text-[#B94A2D] transform group-hover:rotate-12 transition-transform" />
            <span className="font-serif text-2xl font-bold tracking-tight text-[#1C1917]">
              Kalapravah
            </span>
          </div>
          <span className="text-[10px] text-[#78716C] tracking-wide block uppercase font-medium">
            Handmade Madhubani Folk Art
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-colors hover:text-[#B94A2D] relative py-1 ${
                activeSection === item.id 
                  ? 'text-[#B94A2D] font-semibold' 
                  : 'text-[#44403C]'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B94A2D] rounded-full animate-fade-in" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCommission}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-sm bg-[#1C1917] text-[#FAF8F3] hover:bg-[#B94A2D] transition-colors border border-[#1C1917]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C87A38]" />
            <span>Commission Art</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1C1917] hover:text-[#B94A2D] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F3] border-b border-[#E7E0D2] px-6 py-6 space-y-4 shadow-xl animate-fade-in">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base font-serif font-medium py-2 border-b border-[#E7E0D2]/50 ${
                  activeSection === item.id ? 'text-[#B94A2D] font-bold' : 'text-[#1C1917]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCommission();
            }}
            className="w-full mt-4 flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase rounded-sm bg-[#B94A2D] text-white"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Commission Bespoke Artwork</span>
          </button>
        </div>
      )}
    </header>
  );
}
