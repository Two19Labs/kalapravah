import React from 'react';

export default function Footer({ onNavigate }) {
  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'artist', label: 'The Artist' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#FAF8F3] text-[#1C1917] pt-16 pb-12 border-t border-[#E7E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E7E0D2]">
          
          {/* Tagline */}
          <div className="md:col-span-6 space-y-3 text-left">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#1C1917] block">
              Kalapravah
            </span>
            <p className="text-sm text-[#5C5652] max-w-md font-normal leading-relaxed">
              An art venture keeping handmade folk traditions alive — one painted line at a time.
            </p>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="font-serif text-sm font-bold text-[#1C1917] uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#5C5652]">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-[#B94A2D] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contact Info */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="font-serif text-sm font-bold text-[#1C1917] uppercase tracking-wider">
              Studio
            </h4>
            <div className="space-y-1.5 text-xs text-[#5C5652]">
              <p className="font-medium text-[#1C1917]">Rashmi Dhar</p>
              <p>Delhi NCR, India</p>
              <p>
                <a href="mailto:hello@kalapravah.art" className="hover:text-[#B94A2D] transition-colors">
                  hello@kalapravah.art
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-left text-xs text-[#78716C]">
          <p>© 2026 Kalapravah — Handmade in India</p>
        </div>

      </div>
    </footer>
  );
}
