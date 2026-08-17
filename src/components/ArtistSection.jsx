import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ArtistSection({ onContactStudio }) {
  return (
    <section id="artist" className="py-20 md:py-28 bg-[#FAF8F3] relative overflow-hidden border-t border-[#E7E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Artist Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="deckled-frame p-4 rounded-sm bg-[#FFFDF9] border border-[#E7E0D2] shadow-xl">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#FAF8F3]">
                  <img
                    src="/images/rashmi_dhar.jpg"
                    alt="Rashmi Dhar — Artist & Founder of Kalapravah"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80";
                    }}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Lovable Artist Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#C87A38]">
              The artist
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1917] leading-[1.12]">
              Rashmi Dhar — a professional turned artist
            </h2>

            <p className="text-base sm:text-lg text-[#5C5652] font-normal leading-relaxed">
              A Kashmiri Pandit born and raised in Kashmir, now living and working in the Delhi NCR. Her practice is shaped by the memory of home, the upheaval her community endured, and the conscious choice to answer that pain with creativity and healing.
            </p>

            <div className="pt-2">
              <button
                onClick={onContactStudio}
                className="btn-outline inline-flex items-center gap-2 text-sm font-semibold px-6 py-3"
              >
                <span>Read her story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
