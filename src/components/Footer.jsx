import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-[#FAF8F3] text-[#1C1917] pt-20 pb-12 border-t border-[#E7E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ARTESIA Newsletter & Socials Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[#E7E0D2] items-center text-left">
          
          {/* Left: STAY INSPIRED */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C87A38]">
              STAY INSPIRED
            </span>
            <p className="text-xs text-[#5C5652] leading-relaxed max-w-sm">
              Subscribe to our newsletter for updates on new artworks and exhibitions.
            </p>
          </div>

          {/* Center: Input Box */}
          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-[#3E5A47] bg-[#F3EFE6] px-4 py-3 rounded-sm border border-[#C4B9A3]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you for subscribing to Kalapravah updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-[#FFFDF9] border border-[#C4B9A3]/80 rounded-sm text-xs text-[#1C1917] focus:outline-none focus:border-[#1C1917] placeholder:text-[#78716C] tracking-wide"
                />
                <button
                  type="submit"
                  className="absolute right-3 text-[#1C1917] hover:text-[#C87A38] transition-colors p-1"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right: FOLLOW US */}
          <div className="lg:col-span-3 space-y-2 text-left lg:text-right">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C87A38]">
              FOLLOW US
            </span>
            <div className="flex items-center lg:justify-end gap-4 text-xs font-medium text-[#1C1917]">
              <a href="#instagram" className="hover:text-[#C87A38] transition-colors">Instagram</a>
              <a href="#pinterest" className="hover:text-[#C87A38] transition-colors">Pinterest</a>
              <a href="#twitter" className="hover:text-[#C87A38] transition-colors">Twitter</a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-semibold tracking-[0.15em] text-[#78716C] uppercase">
          <p>© 2026 KALAPRAVAH — ALL RIGHTS RESERVED</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <button onClick={() => onNavigate('hero')} className="hover:text-[#1C1917]">BACK TO TOP ↑</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
