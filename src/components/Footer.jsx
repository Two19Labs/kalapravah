import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Sparkles, 
  Award, 
  ChevronUp, 
  Phone,
  Clock
} from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function Footer({ onNavigate }) {
  const [category, setCategory] = useState('Artwork Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Artwork Inquiry', 
    'Custom Commission', 
    'Workshops & Teaching', 
    'Exhibition / Gallery Feature',
    'General Enquiry'
  ];

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const formattedText = `Hello Rashmi,\n\nI am inquiring about: *${category}*.\n${message.trim() ? message.trim() : 'Please share available collection catalog and details.'}`;
    const waUrl = `https://wa.me/919971399395?text=${encodeURIComponent(formattedText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

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
      {/* TIER 1: TOP TIER - WARM LINEN INQUIRY & STUDIO CONNECT HUB */}
      {/* ========================================================================= */}
      <section className="bg-[#F5EFEE] border-t border-[#E5DAC8] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Banner */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EBE0CE] rounded-full border border-[#D9C4A6]">
              <Sparkles className="w-3.5 h-3.5 text-[#C87A38]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8C5220]">
                STUDIO DIRECT CONNECTIONS
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] tracking-wide">
              Bring Timeless Madhubani Heritage into Your Space
            </h3>
            <p className="text-xs sm:text-sm text-[#665E56] leading-relaxed">
              Enquire about original paintings, request bespoke custom commissions, or invite artist Rashmi Dhar to host a Madhubani masterclass workshop.
            </p>
          </div>

          {/* Dual Panel Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Panel: WhatsApp Inquiry Form */}
            <div className="lg:col-span-7 bg-[#FFFDF9] border border-[#DFCFA8] p-6 sm:p-8 rounded-sm shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#EBE0CE] pb-4 mb-6">
                  <div>
                    <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#C87A38] block">
                      QUICK INQUIRY FORM
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#1C1917]">
                      Send Direct Inquiry to Artist
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-full border border-[#25D366]/20">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    WhatsApp Active
                  </span>
                </div>

                <form onSubmit={handleSendWhatsApp} className="space-y-4">
                  {/* Category Selection */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#665E56] mb-2">
                      1. Select Inquiry Topic
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setCategory(cat)}
                          className={`px-3 py-2 text-[11px] font-medium tracking-wide rounded-sm border transition-all text-left truncate cursor-pointer ${
                            category === cat
                              ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-sm'
                              : 'bg-[#FAF8F3] text-[#44403C] border-[#D9C4A6] hover:border-[#C87A38] hover:bg-[#F5EFEE]'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#665E56] mb-2">
                      2. Personal Note or Dimensions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share details like preferred painting size, color palette, wall space, or event dates..."
                      className="w-full px-4 py-3 bg-[#FAF8F3] border border-[#D9C4A6] focus:border-[#C87A38] rounded-sm text-xs text-[#1C1917] placeholder:text-[#948B81] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-between px-6 py-4 bg-[#1C1917] hover:bg-[#C87A38] text-white rounded-sm text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 group cursor-pointer shadow-md hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.84L0 24l6.344-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.84 0-3.567-.492-5.064-1.353l-.363-.21-3.76.888.888-3.66-.232-.375A9.957 9.957 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                      </svg>
                      <span>Send Inquiry via WhatsApp</span>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>

              {submitted && (
                <p className="mt-3 text-xs font-semibold text-[#25D366] text-center">
                  ✓ Opening WhatsApp message with pre-formatted details...
                </p>
              )}
            </div>

            {/* Right Panel: Studio Credentials & Collector Assurance */}
            <div className="lg:col-span-5 bg-[#FAF6EE] border border-[#DFCFA8] p-6 sm:p-8 rounded-sm shadow-sm flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#C87A38] block border-b border-[#EBE0CE] pb-3">
                  ARTISAN STUDIO DETAILS
                </span>
                
                <ul className="space-y-4 text-xs text-[#44403C]">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#C87A38] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#1C1917] block">Studio Location</span>
                      <span>New Delhi / NCR, India • Shipping Worldwide</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#C87A38] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#1C1917] block">Direct Email</span>
                      <a href="mailto:kalapravah.art@gmail.com" className="hover:text-[#C87A38] underline transition-colors">
                        kalapravah.art@gmail.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#C87A38] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#1C1917] block">Studio Hours</span>
                      <span>Monday – Saturday, 10:00 AM – 7:00 PM IST</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Authenticity Guarantee Card */}
              <div className="p-4 bg-[#FFFDF9] border border-[#E5DAC8] rounded-sm space-y-2">
                <div className="flex items-center gap-2 text-[#C87A38]">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                    100% Original Mithila Art Guarantee
                  </span>
                </div>
                <p className="text-[11px] text-[#665E56] leading-relaxed">
                  Each artwork created by Rashmi Dhar is hand-drawn and painted using traditional natural pigments or fine acrylics, complete with an official physical Certificate of Authenticity.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

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
