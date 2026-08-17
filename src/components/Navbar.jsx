import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, onSearchOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'artist', label: 'ARTISTS' },
    { id: 'artworks', label: 'ARTWORKS' },
    { id: 'collections', label: 'COLLECTIONS' },
    { id: 'exhibitions', label: 'EXHIBITIONS' },
    { id: 'journal', label: 'JOURNAL' },
    { id: 'about', label: 'ABOUT' },
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

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-xs font-semibold tracking-[0.18em] text-[#44403C] hover:text-[#C87A38] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6 text-xs font-semibold tracking-[0.15em] text-[#1C1917]">
          <button
            onClick={() => setSearchModalOpen(true)}
            className="flex items-center gap-2 hover:text-[#C87A38] transition-colors uppercase"
          >
            <span>SEARCH</span>
            <Search className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-2 hover:text-[#C87A38] transition-colors uppercase"
          >
            <span>MENU</span>
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F3] border-b border-[#E7E0D2] px-6 py-8 space-y-4 shadow-2xl animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left text-sm font-serif font-bold tracking-[0.15em] text-[#1C1917] py-2 border-b border-[#E7E0D2]/60 hover:text-[#C87A38]"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 bg-[#1C1917]/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#FAF8F3] border border-[#E7E0D2] p-8 max-w-lg w-full rounded-sm shadow-2xl relative space-y-4 text-left">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#C87A38]">
                SEARCH COLLECTION
              </span>
              <button 
                onClick={() => setSearchModalOpen(false)}
                className="text-[#1C1917] hover:text-[#C87A38]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search artworks, artists, techniques..."
                className="w-full px-4 py-3 bg-[#FFFDF9] border border-[#C4B9A3]/60 rounded-sm text-sm text-[#1C1917] focus:outline-none focus:border-[#C87A38]"
              />
              <Search className="w-4 h-4 absolute right-3.5 top-3.5 text-[#78716C]" />
            </div>

            <p className="text-xs text-[#78716C]">
              Popular: <span className="underline cursor-pointer" onClick={() => { setSearchQuery('Madhubani'); }}>Madhubani</span>, <span className="underline cursor-pointer" onClick={() => { setSearchQuery('Rashmi Dhar'); }}>Rashmi Dhar</span>, <span className="underline cursor-pointer" onClick={() => { setSearchQuery('Peacock'); }}>Peacock</span>, <span className="underline cursor-pointer" onClick={() => { setSearchQuery('Kachni'); }}>Kachni</span>
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
