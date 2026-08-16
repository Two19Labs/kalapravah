import React from 'react';
import { Feather, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-[#FAF8F3] pt-16 pb-12 border-t border-[#2E2A27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2E2A27]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded border border-[#C5A059]/40 bg-[#2A2421] flex items-center justify-center text-[#B94A2D]">
                <Feather className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF8F3]">
                KALAPRAVAH
              </span>
            </div>

            <p className="text-xs text-[#A8A29E] max-w-sm leading-relaxed">
              An art venture keeping handmade folk traditions alive — one painted line at a time. Original Madhubani paintings, workshops, and bespoke commissions by Rashmi Dhar.
            </p>

            <div className="pt-2 text-xs text-[#D5CEA3] font-mono">
              Delhi NCR, India • hello@kalapravah.art
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 text-left space-y-3">
            <h4 className="font-serif text-sm font-bold tracking-wider uppercase text-[#C5A059]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#D6D3D1]">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors">
                  Selected Gallery Works
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('artist')} className="hover:text-white transition-colors">
                  The Artist (Rashmi Dhar)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('motifs')} className="hover:text-white transition-colors">
                  Motif Symbol Dictionary
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('workshops')} className="hover:text-white transition-colors">
                  Workshops & Masterclasses
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact Studio
                </button>
              </li>
            </ul>
          </div>

          {/* Back to top */}
          <div className="md:col-span-3 text-left md:text-right flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-[#2A2421] border border-[#443E3A] hover:bg-[#B94A2D] text-white transition-all group"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <span className="text-[11px] text-[#A8A29E] mt-4 md:mt-0 font-serif italic">
              Est. in line, colour and memory
            </span>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8A29E] gap-4">
          <p>© 2026 Kalapravah — Handmade in India by Rashmi Dhar</p>
          <p className="flex items-center gap-1">
            Preserving intangible Mithila heritage with <Heart className="w-3 h-3 text-[#B94A2D] fill-current" />
          </p>
        </div>

      </div>
    </footer>
  );
}
