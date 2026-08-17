import React from 'react';
import { Feather, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'techniques', label: 'Techniques' },
    { id: 'artist', label: 'The Artist' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#1C1917] text-[#FAF8F3] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <Feather className="w-5 h-5 text-[#C87A38]" />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Kalapravah
              </span>
            </div>

            <p className="text-sm text-zinc-400 max-w-md font-normal leading-relaxed">
              An art venture keeping handmade folk traditions alive — one painted line at a time. Original Madhubani paintings, workshops, and custom commissions by Rashmi Dhar.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-[#C87A38] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Studio
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <p className="text-white font-medium">Rashmi Dhar</p>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C87A38]" />
                <span>Delhi NCR, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C87A38]" />
                <a href="mailto:hello@kalapravah.art" className="hover:text-[#C87A38] transition-colors">
                  hello@kalapravah.art
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© 2026 Kalapravah — Handmade in India with line & cultural memory</p>
          <div className="flex items-center gap-1">
            <span>Preserving Indian Folk Heritage</span>
            <Heart className="w-3.5 h-3.5 text-[#B94A2D]" />
          </div>
        </div>

      </div>
    </footer>
  );
}
