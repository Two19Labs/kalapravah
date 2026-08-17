import React from 'react';
import { Feather, Heart, MapPin, Quote, ShieldCheck } from 'lucide-react';

export default function ArtistSection({ onContactStudio }) {
  return (
    <section id="artist" className="py-20 md:py-28 bg-[#1C1917] text-[#FAF8F3] relative overflow-hidden">
      
      {/* Background Watermark Art */}
      <div className="absolute top-10 right-10 opacity-5 pointer-events-none text-9xl font-serif text-[#FAF8F3]">
        🦚
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Artist Image & Signature Stamp */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Paper Frame */}
              <div className="deckled-frame p-4 rounded-sm bg-[#2A2725] border border-white/10 shadow-2xl relative">
                
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#121110]">
                  <img
                    src="/images/rashmi_dhar.jpg"
                    alt="Rashmi Dhar — Folk Artist & Founder of Kalapravah"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80";
                    }}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />

                  {/* Location Badge Overlay */}
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/20 flex items-center gap-2 text-xs text-[#E7E0D2]">
                    <MapPin className="w-3.5 h-3.5 text-[#C87A38]" />
                    <span>Delhi NCR Studio, India</span>
                  </div>
                </div>

                {/* Artist Sign-off Stamp */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5 font-serif italic text-white text-sm">
                    <Feather className="w-4 h-4 text-[#C87A38]" />
                    Rashmi Dhar
                  </span>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#C87A38]">
                    Master Folk Artist
                  </span>
                </div>

              </div>

              {/* Floating Personal Quote Badge */}
              <div className="absolute -bottom-6 -right-4 bg-[#FAF8F3] text-[#1C1917] p-4 rounded shadow-2xl max-w-xs hidden sm:block border border-[#C4B9A3]">
                <Quote className="w-5 h-5 text-[#B94A2D] mb-1" />
                <p className="font-serif italic text-xs leading-relaxed text-[#1C1917]">
                  "Art is not just line and colour; it is memory preserved by the human hand."
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Biography & Story */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-[#E7E0D2]">
              <Feather className="w-3.5 h-3.5 text-[#C87A38]" />
              <span>The Artist's Journey</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]">
              Rashmi Dhar — <br />
              <span className="italic font-normal text-[#C87A38]">a professional turned artist.</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              A Kashmiri Pandit born and raised in Kashmir, now living and working in the Delhi NCR. Her practice is shaped by the memory of home, the upheaval her community endured, and the conscious choice to answer that pain with creativity and healing.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
              Having spent years in professional corporate life, Rashmi returned to traditional folk art as an anchor. Her Madhubani paintings combine ancient Bharni color saturations and Kachni fine line hatching with modern narrative storytelling.
            </p>

            {/* Core Values Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10">
              <div className="p-4 bg-white/5 rounded border border-white/10 space-y-1">
                <span className="text-xs font-semibold text-[#C87A38] uppercase tracking-wider block">
                  Cultural Roots
                </span>
                <p className="text-xs text-zinc-300">
                  Carrying forward centuries-old Mithila & Madhubani line art traditions without shortcuts.
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded border border-white/10 space-y-1">
                <span className="text-xs font-semibold text-[#C87A38] uppercase tracking-wider block">
                  Authentic Dyes
                </span>
                <p className="text-xs text-zinc-300">
                  Hand-ground mineral ochres, turmeric yellows, and leaf indigo on handmade khadi paper.
                </p>
              </div>
            </div>

            {/* Action Callout */}
            <div className="pt-4">
              <button
                onClick={onContactStudio}
                className="btn-primary !bg-[#B94A2D] !border-[#B94A2D] hover:!bg-[#963920]"
              >
                <span>Enquire About Original Works</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
