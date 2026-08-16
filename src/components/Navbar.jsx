import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Feather, Calendar, Palette } from 'lucide-react';

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

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'artist', label: 'The Artist' },
    { id: 'motifs', label: 'Motifs' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF8F3]/90 backdrop-blur-md shadow-sm border-b border-[#E7E0D2] py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Mark */}
          <button 
            onClick={() => scrollTo('hero')}
            className="group text-left focus:outline-none flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded border border-[#C87A38]/40 bg-[#FFFDF9] flex items-center justify-center text-[#B94A2D] shadow-sm group-hover:border-[#B94A2D] transition-colors">
              <Feather className="w-5 h-5 transform group-hover:rotate-12 transition-transform" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1C1917] block leading-none">
                KALAPRAVAH
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#78716C] font-medium block mt-1">
                Handmade Madhubani • Rashmi Dhar
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  activeSection === link.id
                    ? 'text-[#B94A2D]'
                    : 'text-[#44403C] hover:text-[#1C1917]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B94A2D] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenCommission}
              className="btn-outline !py-2 !px-4 text-xs font-semibold flex items-center gap-2 border-[#C87A38]/50 hover:border-[#C87A38] text-[#1C1917]"
            >
              <Palette className="w-3.5 h-3.5 text-[#C87A38]" />
              Commission Art
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary !py-2 !px-4 text-xs font-semibold"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-[#1C1917] hover:bg-[#E7E0D2]/50 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F3] border-b border-[#E7E0D2] px-6 py-6 space-y-4 shadow-xl animate-fade-in">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left text-base font-serif font-medium py-2 border-b border-[#E7E0D2]/40 ${
                  activeSection === link.id ? 'text-[#B94A2D] font-bold' : 'text-[#1C1917]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommission();
              }}
              className="btn-outline w-full justify-center text-sm"
            >
              <Palette className="w-4 h-4 text-[#C87A38]" />
              Commission Bespoke Art
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary w-full justify-center text-sm"
            >
              Contact Studio
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
