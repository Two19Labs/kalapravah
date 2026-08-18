import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [category, setCategory] = useState('Artwork Inquiry');
  const [message, setMessage] = useState('');

  const categories = ['Artwork Inquiry', 'Custom Commission', 'Workshops & Teaching', 'General Enquiry'];

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const formattedText = `Hello Kalapravah,\n\nI am inquiring about: *${category}*.\n${message.trim() ? `Message: ${message.trim()}` : 'Please share more details with me.'}`;
    const waUrl = `https://wa.me/919971399395?text=${encodeURIComponent(formattedText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#FAF8F3] text-[#1C1917] pt-20 pb-12 border-t border-[#E7E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[#E7E0D2] items-start text-left">
          
          {/* Left Column: STAY INSPIRED */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C87A38] block">
              STAY INSPIRED
            </span>
            <p className="text-xs text-[#5C5652] leading-relaxed max-w-sm">
              Enquire about available paintings, commission a piece, or invite Kalapravah to host a Madhubani workshop.
            </p>
          </div>

          {/* Center Column: WhatsApp Inquiry Form */}
          <div className="lg:col-span-5 space-y-3">
            <form onSubmit={handleSendWhatsApp} className="space-y-3">
              
              {/* Category Select Box */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#78716C] mb-1.5">
                  Choose Category
                </label>
                <div className="relative">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FFFDF9] border border-[#C4B9A3]/80 rounded-sm text-xs text-[#1C1917] focus:outline-none focus:border-[#1C1917] tracking-wide cursor-pointer appearance-none pr-8"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#78716C]">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message Box */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#78716C] mb-1.5">
                  Your Message
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your inquiry message..."
                  className="w-full px-4 py-3 bg-[#FFFDF9] border border-[#C4B9A3]/80 rounded-sm text-xs text-[#1C1917] placeholder:text-[#78716C] focus:outline-none focus:border-[#1C1917] tracking-wide resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-between px-5 py-3.5 bg-[#FFFDF9] hover:bg-[#F3EFE6] border border-[#C4B9A3]/80 hover:border-[#1C1917] rounded-sm text-xs text-[#1C1917] transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.84L0 24l6.344-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.84 0-3.567-.492-5.064-1.353l-.363-.21-3.76.888.888-3.66-.232-.375A9.957 9.957 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                  </svg>
                  <span className="font-semibold uppercase tracking-wider text-[11px] text-[#1C1917] group-hover:text-[#C87A38] transition-colors">
                    Send via WhatsApp
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#1C1917] group-hover:text-[#C87A38] group-hover:translate-x-1 transition-all duration-300 shrink-0" />
              </button>
            </form>
          </div>

          {/* Right Column: FOLLOW US */}
          <div className="lg:col-span-3 space-y-2 text-left lg:text-right">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C87A38] block">
              FOLLOW US
            </span>
            <div className="flex items-center lg:justify-end gap-2 text-xs font-medium text-[#1C1917]">
              <a
                href="https://www.instagram.com/kalapravah2025?igsh=MWJ4N3ZubzBzczBodg=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#C87A38] transition-colors text-xs font-medium text-[#1C1917]"
              >
                <svg className="w-4 h-4 fill-current text-[#C87A38]" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-semibold tracking-[0.15em] text-[#78716C] uppercase">
          <p>© 2026 KALAPRAVAH — ALL RIGHTS RESERVED</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <button onClick={() => onNavigate('hero')} className="hover:text-[#1C1917] cursor-pointer">BACK TO TOP ↑</button>
          </div>
        </div>

      </div>
    </footer>
  );
}


