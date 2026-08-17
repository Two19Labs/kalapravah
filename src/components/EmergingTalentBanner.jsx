import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function EmergingTalentBanner({ onDiscoverArtists }) {
  return (
    <section className="py-16 md:py-24 bg-[#FAF8F3] relative overflow-hidden border-t border-[#E7E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Full Width Parchment Card */}
        <div className="art-card-frame p-8 md:p-12 rounded-sm bg-[#F3EFE6]/80 border border-[#C4B9A3]/60 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Section with Monogram Seal */}
            <div className="lg:col-span-8 flex flex-col md:flex-row items-start md:items-center gap-8 text-left">
              
              {/* Monogram Seal */}
              <div className="w-16 h-16 rounded-full border border-[#1C1917]/30 flex items-center justify-center shrink-0">
                <span className="font-serif text-2xl font-normal text-[#1C1917]">
                  K
                </span>
              </div>

              {/* Copy */}
              <div className="space-y-4 max-w-xl">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C87A38]">
                  EMERGING TALENT & FOLK HERITAGE
                </span>

                <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1917] leading-[1.08]">
                  The Future <br />
                  Starts Here
                </h2>

                <p className="text-sm sm:text-base text-[#5C5652] leading-relaxed">
                  We believe in the power of new perspectives. Explore works by emerging artists reshaping the art world.
                </p>

                <div className="pt-2">
                  <button
                    onClick={onDiscoverArtists}
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-[#1C1917] hover:text-[#C87A38] transition-colors"
                  >
                    <span>DISCOVER ARTISTS</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative aspect-[3/4] w-full max-w-[260px] overflow-hidden rounded-sm border border-[#1C1917]/20 shadow-xl">
                <img
                  src="/images/madhubani_art_texture.jpg"
                  alt="Emerging Folk Art Sculpture & Canvas"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80";
                  }}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
