import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [category, setCategory] = useState('Artwork Purchase');
  const [message, setMessage] = useState('');

  const categories = ['Artwork Purchase', 'Custom Commission', 'Workshops', 'General Inquiry'];

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const formattedText = `Hello Kalapravah,\n\nI am inquiring about: *${category}*.\n${message.trim() ? `Message: ${message.trim()}` : 'Please share more details with me.'}`;
    const waUrl = `https://wa.me/919971399395?text=${encodeURIComponent(formattedText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#FAF8F3] text-[#1C1917] pt-20 pb-12 border-t border-[#E7E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ARTESIA WhatsApp Inquiry & Socials Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[#E7E0D2] items-start text-left">
          
          {/* Left: STAY INSPIRED */}
          <div className="lg:col-span-4 space-y-3 pt-2">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C87A38] block">
              STAY INSPIRED
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] leading-snug">
              Bring Madhubani heritage into your space
            </h3>
            <p className="text-xs text-[#5C5652] leading-relaxed max-w-sm">
              Connect directly with our curator on WhatsApp for original paintings, custom commissions, or workshop bookings.
            </p>
          </div>

          {/* Center: Luxury Art WhatsApp Inquiry Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFDF9] border border-[#E7E0D2] rounded-xs p-5 sm:p-6 shadow-xs hover:border-[#C4B9A3] transition-all space-y-5">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#E7E0D2] pb-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/25 shrink-0">
                    <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.84L0 24l6.344-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.84 0-3.567-.492-5.064-1.353l-.363-.21-3.76.888.888-3.66-.232-.375A9.957 9.957 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#1C1917] tracking-tight">
                      Direct WhatsApp Inquiry
                    </h4>
                    <p className="text-[11px] text-[#78716C] font-mono mt-0.5">
                      +91 99713 99395
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-full border border-[#25D366]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                  Curator Online
                </span>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSendWhatsApp} className="space-y-4">
                
                {/* Category Options */}
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C87A38] mb-2">
                    Inquiry Type
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setCategory(cat)}
                        className={`text-[11px] font-medium px-3 py-2 rounded-xs border transition-all duration-200 text-center cursor-pointer ${
                          category === cat
                            ? 'bg-[#1C1917] text-[#FAF8F3] border-[#1C1917] shadow-xs'
                            : 'bg-[#FAF8F3] text-[#5C5652] border-[#E7E0D2] hover:border-[#C4B9A3] hover:text-[#1C1917]'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Input Box */}
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C87A38] mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your inquiry or painting of interest..."
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F3] border border-[#E7E0D2] rounded-xs text-xs text-[#1C1917] placeholder:text-[#948E88] focus:outline-none focus:border-[#C87A38] focus:bg-[#FFFDF9] transition-all resize-none font-sans leading-relaxed"
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-5 bg-[#1C1917] hover:bg-[#C87A38] text-[#FAF8F3] font-semibold text-xs tracking-[0.15em] uppercase rounded-xs transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
                >
                  <svg className="w-4 h-4 fill-current text-[#25D366] group-hover:text-white transition-colors" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.84L0 24l6.344-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.84 0-3.567-.492-5.064-1.353l-.363-.21-3.76.888.888-3.66-.232-.375A9.957 9.957 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                  </svg>
                  <span>Send on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-[#FAF8F3] group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

            </div>
          </div>

          {/* Right: FOLLOW US */}
          <div className="lg:col-span-3 space-y-2 text-left lg:text-right pt-2">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C87A38] block">
              FOLLOW US
            </span>
            <div className="flex items-center lg:justify-end gap-2 text-xs font-medium text-[#1C1917]">
              <a
                href="https://www.instagram.com/kalapravah2025?igsh=MWJ4N3ZubzBzczBodg=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#1C1917] hover:text-[#C87A38] transition-colors py-1.5 px-3 rounded-xs hover:bg-[#F3EFE6] border border-transparent hover:border-[#E7E0D2]"
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


