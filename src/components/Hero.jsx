import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import LunarGravityCard from '@/components/ui/lunar-gravity-card';

const ART_FORMS = [
  {
    id: 'madhubani',
    name: 'Madhubani',
    region: 'Mithila, Bihar',
    textureUrl: '/images/madhubani_art_texture.jpg',
    ringColor: '#C87A38',
    description: 'Ancient folk art characterized by line drawings, natural mineral dyes, and sacred peacock motifs.'
  },
  {
    id: 'pichwai',
    name: 'Pichwai',
    region: 'Nathdwara, Rajasthan',
    textureUrl: '/images/raas.jpg',
    ringColor: '#B94A2D',
    description: 'Intricate cloth drapes depicting celestial lotus ponds, monsoon skies, and devotional heritage.'
  },
  {
    id: 'tanjore',
    name: 'Tanjore',
    region: 'Thanjavur, Tamil Nadu',
    textureUrl: '/images/vighnaharta.jpg',
    ringColor: '#D4AF37',
    description: 'Renowned for 22k gold leaf foil embossing, rich Gesso relief work, and semi-precious stone inlays.'
  },
  {
    id: 'gond',
    name: 'Gond',
    region: 'Central India',
    textureUrl: '/images/monsoon_court.jpg',
    ringColor: '#2563EB',
    description: 'Vibrant tribal patterns composed of dots, dashes, and sacred forest spirit iconography.'
  }
];

export default function Hero({ onExploreArtworks }) {
  const [selectedArtIndex, setSelectedArtIndex] = useState(0);
  const activeArt = ART_FORMS[selectedArtIndex];

  return (
    <section id="hero" className="relative pt-24 lg:pt-28 overflow-hidden bg-[#FAF8F3] border-b border-[#E7E0D2]">
      
      {/* Soft Ambient Warm Spotlight behind 3D Canvas */}
      <div 
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full blur-[130px] pointer-events-none opacity-20 transition-all duration-700"
        style={{ backgroundColor: activeArt.ringColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-100px)] lg:min-h-[640px] items-center gap-8 lg:gap-12 py-12 lg:py-16">
          
          {/* Left Column: Clean Editorial Typography */}
          <div className="lg:col-span-6 space-y-8 text-left flex flex-col justify-center">
            
            {/* Top Category Tag */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#C87A38]">
                INDIAN HERITAGE FINE ART
              </span>
              <span className="w-8 h-[1px] bg-[#C87A38]/50" />
            </div>

            {/* Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1C1917] leading-[1.05]">
              Where Art <br />
              Inspires Life
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5C5652] max-w-md font-normal leading-relaxed">
              Discover original masterpieces, visionary Indian artisans, and centuries of living cultural heritage.
            </p>

            {/* Minimalist Art Form Selector Tabs */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#78716C] block mb-3">
                ART FORM FOCUS: <span className="text-[#1C1917] font-bold ml-1">{activeArt.region}</span>
              </span>

              <div className="flex items-center gap-6 text-xs font-semibold tracking-[0.15em] border-b border-[#E7E0D2] pb-3">
                {ART_FORMS.map((art, idx) => {
                  const isActive = idx === selectedArtIndex;
                  return (
                    <button
                      key={art.id}
                      onClick={() => setSelectedArtIndex(idx)}
                      className={`relative pb-1 uppercase transition-colors duration-300 ${
                        isActive ? 'text-[#1C1917]' : 'text-[#78716C] hover:text-[#C87A38]'
                      }`}
                    >
                      {art.name}
                      {isActive && (
                        <span className="absolute bottom-[-13px] left-0 w-full h-[2px] bg-[#C87A38] transition-all duration-300" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main CTA Action */}
            <div className="pt-2 flex items-center gap-6">
              <button
                onClick={onExploreArtworks}
                className="btn-artesia group"
              >
                <span>EXPLORE ARTWORKS</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Clean Floating 3D Art Gallery Showcase */}
          <div className="lg:col-span-6 relative w-full h-[450px] sm:h-[560px] lg:h-[620px] flex items-center justify-center">
            
            {/* Subtle Gallery Pedestal / Soft Circle Vignette */}
            <div className="absolute inset-0 rounded-full bg-[#FAF8F3] border border-[#E7E0D2]/50 shadow-[0_20px_50px_rgba(28,25,23,0.04)] overflow-hidden flex items-center justify-center">
              
              <LunarGravityCard 
                key={activeArt.id}
                artTextureUrl={activeArt.textureUrl}
                ringColor={activeArt.ringColor}
                hintText={`${activeArt.name} art — click sphere to ignite`}
                className="w-full h-full !min-h-full"
              />

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
