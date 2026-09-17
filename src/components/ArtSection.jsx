import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ArtSection({ onSelectArtwork }) {
  return (
    <section id="art" className="pt-5 sm:pt-7 lg:pt-8 pb-7 sm:pb-9 lg:pb-10 bg-transparent relative overflow-hidden border-b border-[#E7E0D2] scroll-mt-20 sm:scroll-mt-24">
      {/* Soft Decorative Ambient Spotlights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#C87A38]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5 sm:space-y-6">
        
        {/* Main Section Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-[10px] font-bold tracking-[0.24em] text-[#C87A38] uppercase block">
            ANCIENT CIVILIZATIONAL HERITAGE ART
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            ART
          </h2>
          <div className="w-16 h-[2.5px] bg-[#C87A38] mx-auto rounded-full mt-1.5" />
          <p className="text-sm sm:text-base text-[#5C5652] leading-relaxed max-w-2xl mx-auto font-light pt-1">
            Discover the centuries-old civilizational heritage of Madhubani art, defined by sacred Vedic motifs, double-line hatching, and organic pigments.
          </p>
        </div>

        {/* Unified High-Impact Editorial Card */}
        <div className="deckled-frame bg-[#FFFDF9] border border-[#E7E0D2] rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Tradition & Technique Narrative */}
          <div className="lg:col-span-6 p-5 sm:p-7 lg:p-8 xl:p-10 flex flex-col justify-between space-y-5 sm:space-y-6 text-left border-b lg:border-b-0 lg:border-r border-[#E7E0D2]">
            <div className="space-y-3.5 sm:space-y-4">
              <span className="text-[10px] font-bold tracking-[0.24em] text-[#C87A38] uppercase block">
                TRADITION & TECHNIQUE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] leading-tight">
                Sacred Living Heritage
              </h3>
              <p className="text-sm sm:text-base text-[#332F2C] leading-relaxed font-light">
                Originating in northern Bihar's Madhubani region, <strong className="font-semibold text-[#1C1917]">Madhubani folk art</strong> is a centuries-old sacred tradition historically painted by women on domestic mud courtyard walls (<em>Bhitti Chitra</em>) during auspicious festivals, marriages, and harvest celebrations.
              </p>
              <p className="text-sm sm:text-base text-[#332F2C] leading-relaxed font-light">
                Celebrated worldwide for bold double-line contours, fine bamboo nib penmanship, and natural pigments, every motif preserves ancient Vedic symbolism, ecological harmony, and living civilizational memory.
              </p>
              <p className="text-sm sm:text-base text-[#332F2C] leading-relaxed font-light">
                Each canvas acts as a sacred visual bridge, translating timeless folklore and civilizational narratives into living art for modern residential and gallery spaces.
              </p>
            </div>

            {/* Heritage Hallmark Indicators */}
            <div className="pt-4 border-t border-[#E7E0D2] grid grid-cols-3 gap-2 sm:gap-2.5">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#FAF8F3] border border-[#E7E0D2] text-center">
                <span className="block text-[9px] sm:text-[10px] font-bold text-[#C87A38] uppercase tracking-wider">Heritage</span>
                <span className="block text-[10.5px] xs:text-xs sm:text-sm font-semibold text-[#1C1917] mt-0.5 leading-tight">Bhitti Chitra</span>
              </div>
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#FAF8F3] border border-[#E7E0D2] text-center">
                <span className="block text-[9px] sm:text-[10px] font-bold text-[#C87A38] uppercase tracking-wider">Pigments</span>
                <span className="block text-[10.5px] xs:text-xs sm:text-sm font-semibold text-[#1C1917] mt-0.5 leading-tight">Natural Colors</span>
              </div>
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#FAF8F3] border border-[#E7E0D2] text-center">
                <span className="block text-[9px] sm:text-[10px] font-bold text-[#C87A38] uppercase tracking-wider">Technique</span>
                <span className="block text-[10.5px] xs:text-xs sm:text-sm font-semibold text-[#1C1917] mt-0.5 leading-tight">Double-Line</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Masterpiece Showcase */}
          <div 
            onClick={() => {
              if (onSelectArtwork) {
                onSelectArtwork({
                  title: "Janak Phulwari: The Sacred Royal Garden",
                  image: "/images/janak_phulwari.jpg",
                  styleCategory: "Bharni & Kachni",
                  medium: "Natural pigments and acrylic on handmade cotton rag paper",
                  story: "Depicts Lord Rama and Lakshmana visiting King Janaka's sacred flower garden in Mithila, where Rama first beholds Sita surrounded by attendants. Intricately adorned with lush floral canopies, sacred peacocks, double-line hatching, and vibrant Bharni color fills.",
                  year: "2024",
                  dimensions: "22 × 15 in",
                  inStock: false
                });
              }
            }}
            className="lg:col-span-6 p-5 sm:p-7 lg:p-8 xl:p-10 bg-[#FAF8F3]/50 flex flex-col justify-between text-left group cursor-pointer space-y-4"
          >
            {/* Top Showcase Tag */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-[0.24em] text-[#C87A38] uppercase block">
                CURATED MASTERWORK
              </span>
              <span className="text-[10px] font-bold text-[#C87A38] uppercase tracking-wider bg-[#C87A38]/10 px-2.5 py-0.5 rounded-full border border-[#C87A38]/20">
                BHARNI & KACHNI
              </span>
            </div>

            {/* High-Impact Framed Painting */}
            <div className="flex-1 flex flex-col justify-center py-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#2C241E] bg-[#FFFDF9] p-2.5 sm:p-3.5 ring-1 ring-[#C87A38]/20 group-hover:scale-[1.02] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-all duration-500">
                <div className="relative rounded-xl overflow-hidden bg-[#FAF8F3] border border-[#E7E0D2] aspect-[16/11]">
                  <img
                    src="/images/janak_phulwari.jpg"
                    alt="Janak Phulwari: Traditional Madhubani Folk Artwork"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle click hint badge */}
                  <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                    <span className="text-[10px] font-medium text-white bg-[#1C1917]/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 shadow-xs">
                      Click to inspect
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Artwork Metadata Bar */}
            <div className="pt-3 border-t border-[#E7E0D2] flex items-center justify-between">
              <div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C1917] group-hover:text-[#C87A38] transition-colors">
                  Janak Phulwari: Sacred Garden
                </h4>
                <p className="text-[11px] sm:text-xs text-[#78716C] font-light">
                  Natural pigments & acrylic on handmade cotton rag paper • 22 × 15 in
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#C87A38] shrink-0">
                <span>Inspect</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
