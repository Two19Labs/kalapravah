import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ArrowRight } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'art-artist', label: 'ART & ARTIST' },
    { id: 'gallery', label: 'ART GALLERY' },
    { id: 'contact', label: 'CONTACT' },
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
        isScrolled || mobileMenuOpen
          ? 'bg-[#FAF8F3]/50 backdrop-blur-md border-b border-[#E7E0D2]/60 shadow-sm py-3 sm:py-3.5' 
          : 'bg-transparent py-3.5 sm:py-4 border-b border-[#E7E0D2]/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="text-left group focus:outline-none flex items-center gap-2.5 sm:gap-3"
        >
          <img 
            src="/images/logo-emblem.png" 
            alt="Kalapravah Emblem" 
            className="w-10 h-10 sm:w-11 sm:h-11 object-contain group-hover:scale-105 transition-transform duration-300" 
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-2xl font-bold tracking-widest text-[#1C1917] uppercase leading-none">
              KALAPRAVAH
            </span>
            <span className="text-[8px] sm:text-[9.5px] font-semibold tracking-[0.22em] text-[#C87A38] uppercase mt-0.5">
              MITHILA ART & ARTIST STUDIO
            </span>
          </div>
        </button>

        {/* Desktop Header Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs font-semibold tracking-[0.18em] transition-all duration-300 uppercase relative py-1.5 px-0.5 cursor-pointer ${
                  isActive 
                    ? 'text-[#C87A38] font-bold' 
                    : 'text-[#44403C] hover:text-[#C87A38]'
                }`}
              >
                <span>{item.label}</span>
                <span 
                  className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-[#C87A38] rounded-full transition-all duration-300 ease-out origin-left ${
                    isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`} 
                />
              </button>
            );
          })}
        </nav>

        {/* Quick Contact Badge / Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/919971399395?text=Hello%20Rashmi%2C%20I%20am%20inquiring%20about%20Kalapravah%20artworks."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1917] hover:bg-[#C87A38] text-white text-[11px] font-semibold tracking-wider uppercase transition-colors shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
            <span>INQUIRE</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-[#FFFDF9] border border-[#E7E0D2] flex items-center justify-center text-[#1C1917] hover:text-[#C87A38] active:scale-95 transition-all shadow-sm"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Slide-Down Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-x-0 top-[60px] bottom-0 bg-[#1C1917]/50 backdrop-blur-md z-40 animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="bg-[#FAF8F3] border-b border-[#E7E0D2] px-5 sm:px-6 pt-5 pb-8 shadow-2xl space-y-5 max-h-[calc(100vh-70px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-2">
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C87A38] block border-b border-[#E7E0D2] pb-2">
                INDEX MENU
              </span>

              <div className="flex flex-col space-y-1 pt-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between py-3.5 px-4 rounded-md text-sm font-semibold tracking-wider transition-all text-left uppercase ${
                      activeSection === item.id
                        ? 'bg-[#1C1917] text-white shadow-sm'
                        : 'text-[#44403C] hover:bg-[#F3EFE6]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${activeSection === item.id ? 'translate-x-1 text-[#C87A38]' : 'text-[#78716C]'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick WhatsApp Inquiry Action in Drawer */}
            <div className="pt-2 border-t border-[#E7E0D2]">
              <a
                href="https://wa.me/919971399395?text=Hello%20Rashmi%2C%20I%20am%20inquiring%20about%20Kalapravah%20artworks."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-md font-semibold text-xs tracking-wider uppercase transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
