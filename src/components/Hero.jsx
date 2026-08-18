import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import LunarGravityCard from '@/components/ui/lunar-gravity-card';

const MADHUBANI_ART = {
  id: 'madhubani',
  name: 'Madhubani',
  region: 'Mithila, Bihar',
  textureUrl: '/images/sphere_madhubani.jpg',
  ringColor: '#C87A38',
  description: 'Ancient folk art characterized by line drawings, natural mineral dyes, and sacred peacock motifs.'
};

export default function Hero({ onExploreArtworks }) {
  return (
    <section id="hero" className="relative pt-24 lg:pt-28 overflow-hidden bg-[#FAF8F3] border-b border-[#E7E0D2]">
      
      {/* Soft Ambient Warm Spotlight behind 3D Canvas */}
      <div 
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full blur-[130px] pointer-events-none opacity-20 transition-all duration-700"
        style={{ backgroundColor: MADHUBANI_ART.ringColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-100px)] lg:min-h-[640px] items-center gap-8 lg:gap-12 py-12 lg:py-16">
          
          {/* Left Column: Clean Editorial Typography */}
          <div className="lg:col-span-6 space-y-8 text-left flex flex-col justify-center">
            
            {/* Top Category Tag */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#C87A38]">
                MADHUBANI HERITAGE FINE ART
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
              Discover original Mithila masterpieces, visionary Indian artisans, and centuries of living Madhubani cultural heritage.
            </p>

            {/* Focused Art Form Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C87A38]/10 border border-[#C87A38]/30 text-xs font-semibold tracking-wider text-[#C87A38] uppercase">
                <span>ART FORM FOCUS:</span>
                <span className="text-[#1C1917] font-bold">{MADHUBANI_ART.name} ({MADHUBANI_ART.region})</span>
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
                key={MADHUBANI_ART.id}
                artTextureUrl={MADHUBANI_ART.textureUrl}
                ringColor={MADHUBANI_ART.ringColor}
                hintText="Madhubani art — click sphere to ignite"
                className="w-full h-full !min-h-full"
              />

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
