import React from 'react';
import { 
  Mail, 
  ChevronUp, 
  Phone
} from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function Footer({ onNavigate }) {
  const handleLinkClick = (sectionId) => {
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const elem = document.getElementById(sectionId);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full text-[#1C1917] overflow-hidden">

      {/* ========================================================================= */}
      {/* TRADITIONAL MADHUBANI MOTIF BORDER DIVIDER (CONTINUOUS MARQUEE) */}
      {/* ========================================================================= */}
      <div className="bg-[#261E1A] text-[#C87A38] py-2.5 overflow-hidden border-t border-b border-[#3D302A] select-none">
        <div className="animate-marquee text-[10px] font-mono tracking-[0.3em] uppercase opacity-90 whitespace-nowrap">
          <div className="flex items-center gap-6 pr-6">
            <span>❖ MITHILA HERITAGE</span>
            <span>◆</span>
            <span>KACHNI & BHARNI STYLE</span>
            <span>◆</span>
            <span>100% HAND PAINTED</span>
            <span>◆</span>
            <span>RASHMI DHAR ARTWORKS</span>
            <span>◆</span>
            <span>TRADITIONAL MOTIFS</span>
            <span>◆</span>
          </div>
          <div className="flex items-center gap-6 pr-6">
            <span>❖ MITHILA HERITAGE</span>
            <span>◆</span>
            <span>KACHNI & BHARNI STYLE</span>
            <span>◆</span>
            <span>100% HAND PAINTED</span>
            <span>◆</span>
            <span>RASHMI DHAR ARTWORKS</span>
            <span>◆</span>
            <span>TRADITIONAL MOTIFS</span>
            <span>◆</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TIER 2: BOTTOM TIER - RICH EARTHY TERRACOTTA NAVIGATION & FOOTER */}
      {/* ========================================================================= */}
      <section className="bg-[#1C1613] text-[#EBE5DF] pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#362C26]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Main 4-Column Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            
            {/* Column 1: Brand Identity & Signature (lg:col-span-4) */}
            <div className="lg:col-span-4 space-y-5">
              <div>
                <span className="font-serif text-3xl font-bold tracking-widest text-[#FAF8F3] uppercase block">
                  KALAPRAVAH
                </span>
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#D98A48] block mt-1">
                  MITHILA ART GALLERY & STUDIO
                </span>
              </div>

              <p className="text-xs text-[#A89F95] leading-relaxed max-w-sm">
                Dedicated to preserving the sacred geometry, folklore, and fine line-work of traditional Madhubani art, curated and handcrafted by contemporary Indian artist Rashmi Dhar.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/kalapravah2025?igsh=MWJ4N3ZubzBzczBodg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#2A221D] hover:bg-[#D98A48] hover:text-[#1C1613] border border-[#3D312B] flex items-center justify-center transition-all duration-300 text-[#EBE5DF]"
                  title="Follow on Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/919971399395"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#2A221D] hover:bg-[#25D366] hover:text-[#1C1613] border border-[#3D312B] flex items-center justify-center transition-all duration-300 text-[#EBE5DF]"
                  title="WhatsApp Studio"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href="mailto:kalapravah.art@gmail.com"
                  className="w-9 h-9 rounded-full bg-[#2A221D] hover:bg-[#D98A48] hover:text-[#1C1613] border border-[#3D312B] flex items-center justify-center transition-all duration-300 text-[#EBE5DF]"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Explore Gallery (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-4">
              <h5 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D98A48] border-b border-[#362C26] pb-2">
                EXPLORE GALLERY
              </h5>
              <ul className="space-y-2.5 text-xs text-[#C2B7AC]">
                <li>
                  <button onClick={() => handleLinkClick('artworks')} className="hover:text-[#FAF8F3] hover:translate-x-1 transition-all cursor-pointer">
                    Featured Artworks
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('collections')} className="hover:text-[#FAF8F3] hover:translate-x-1 transition-all cursor-pointer">
                    Curated Collections
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('artist')} className="hover:text-[#FAF8F3] hover:translate-x-1 transition-all cursor-pointer">
                    Artist Profile & Philosophy
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('journal')} className="hover:text-[#FAF8F3] hover:translate-x-1 transition-all cursor-pointer">
                    Mithila Heritage Journal
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('exhibitions')} className="hover:text-[#FAF8F3] hover:translate-x-1 transition-all cursor-pointer">
                    Exhibitions & Features
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Client Services (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-4">
              <h5 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D98A48] border-b border-[#362C26] pb-2">
                CLIENT SERVICES
              </h5>
              <ul className="space-y-2.5 text-xs text-[#C2B7AC]">
                <li>
                  <button onClick={() => handleLinkClick('hero')} className="hover:text-[#FAF8F3] hover:translate-x-1 transition-all cursor-pointer">
                    Bespoke Custom Commissions
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('hero')} className="hover:text-[#FAF8F3] hover:translate-x-1 transition-all cursor-pointer">
                    Madhubani Masterclass Workshops
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('hero')} className="hover:text-[#FAF8F3] hover:translate-x-1 transition-all cursor-pointer">
                    Certificate of Authenticity Guide
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('hero')} className="hover:text-[#FAF8F3] hover:translate-x-1 transition-all cursor-pointer">
                    Collector's Framing & Care
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('hero')} className="hover:text-[#FAF8F3] hover:translate-x-1 transition-all cursor-pointer">
                    Worldwide Express Shipping
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Studio Direct (lg:col-span-2) */}
            <div className="lg:col-span-2 space-y-4">
              <h5 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D98A48] border-b border-[#362C26] pb-2">
                FOLLOW US
              </h5>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/kalapravah2025?igsh=MWJ4N3ZubzBzczBodg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#C2B7AC] hover:text-[#FAF8F3] transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#D98A48]" />
                  <span>@kalapravah2025</span>
                </a>
                <p className="text-[11px] text-[#8C8277] leading-relaxed">
                  Join our Instagram community for behind-the-scenes painting reels, WIP sketches, and workshop announcements.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Legal Strip */}
          <div className="pt-8 border-t border-[#362C26] flex flex-col sm:flex-row items-center justify-between text-[11px] font-semibold tracking-[0.15em] text-[#8C8277] gap-4">
            <div>
              <p>© 2026 KALAPRAVAH — ALL RIGHTS RESERVED • ART BY RASHMI DHAR</p>
            </div>

            <div className="flex items-center gap-6">
              <span className="hover:text-[#EBE5DF] cursor-pointer transition-colors">AUTHENTICITY GUARANTEED</span>
              <span>•</span>
              <button 
                onClick={() => handleLinkClick('hero')} 
                className="inline-flex items-center gap-1 hover:text-[#FAF8F3] text-[#D98A48] cursor-pointer transition-colors"
              >
                <span>BACK TO TOP</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </footer>
  );
}
