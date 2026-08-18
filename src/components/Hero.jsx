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
    <section id="hero" className="relative pt-16 sm:pt-20 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 overflow-hidden bg-[#FAF8F3] border-b border-[#E7E0D2]">
      
      {/* Soft Ambient Warm Spotlight behind 3D Canvas */}
      <div 
        className="absolute top-1/2 left-1/2 sm:left-auto sm:right-1/4 -translate-x-1/2 sm:translate-x-0 -translate-y-1/2 w-[280px] xs:w-[380px] sm:w-[600px] h-[280px] xs:h-[380px] sm:h-[600px] rounded-full blur-[90px] sm:blur-[130px] pointer-events-none opacity-25 sm:opacity-20 transition-all duration-700"
        style={{ backgroundColor: MADHUBANI_ART.ringColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-0 lg:min-h-[520px] items-center gap-6 sm:gap-8 lg:gap-10 pt-2 sm:pt-4 lg:pt-4 pb-4 sm:pb-6 lg:pb-8">
          
          {/* Left Column: Clean Editorial Typography */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-8 text-left flex flex-col justify-center">
            
            {/* Top Category Tag */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="text-[10px] xs:text-xs font-semibold tracking-[0.16em] sm:tracking-[0.22em] uppercase text-[#C87A38]">
                MADHUBANI HERITAGE FINE ART
              </span>
              <span className="w-6 sm:w-8 h-[1px] bg-[#C87A38]/50" />
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1C1917] leading-[1.1] sm:leading-[1.05]">
              Where Art <br className="hidden xs:inline" />
              Inspires Life
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-[#5C5652] max-w-md font-normal leading-relaxed">
              Discover original Mithila masterpieces, visionary Indian artisans, and centuries of living Madhubani cultural heritage.
            </p>

            {/* Focused Art Form Badge */}
            <div className="pt-1 sm:pt-2">
              <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#C87A38]/10 border border-[#C87A38]/30 text-[10px] sm:text-xs font-semibold tracking-wider text-[#C87A38] uppercase max-w-full">
                <span>ART FORM FOCUS:</span>
                <span className="text-[#1C1917] font-bold">{MADHUBANI_ART.name} ({MADHUBANI_ART.region})</span>
              </div>
            </div>

            {/* Main CTA Action */}
            <div className="pt-2 flex flex-col xs:flex-row items-stretch xs:items-center gap-4 sm:gap-6">
              <button
                onClick={onExploreArtworks}
                className="btn-artesia group justify-center w-full xs:w-auto"
              >
                <span>EXPLORE ARTWORKS</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Clean Floating 3D Art Gallery Showcase */}
          <div className="lg:col-span-6 relative w-full flex flex-col items-center justify-center pt-2 sm:pt-4 lg:pt-0">
            
            {/* Subtle Gallery Pedestal / Soft Circle Vignette */}
            <div className="relative w-full max-w-[290px] xs:max-w-[340px] sm:max-w-[480px] lg:max-w-[580px] aspect-square rounded-full bg-[#FAF8F3] border border-[#E7E0D2]/50 shadow-[0_20px_50px_rgba(28,25,23,0.04)] overflow-hidden flex items-center justify-center mx-auto">
              
              <LunarGravityCard 
                key={MADHUBANI_ART.id}
                artTextureUrl={MADHUBANI_ART.textureUrl}
                ringColor={MADHUBANI_ART.ringColor}
                hintText=""
                className="w-full h-full min-h-0 sm:min-h-0 lg:min-h-0"
              />

            </div>

            {/* Elegant Description Card Below Circle */}
            <div className="mt-5 sm:mt-6 text-center max-w-lg mx-auto px-4 sm:px-6 py-3.5 rounded-2xl bg-[#FFFDF9] border border-[#E7E0D2] shadow-[0_4px_20px_rgba(28,25,23,0.05)] space-y-1.5 transition-all">
              <p className="text-xs sm:text-sm md:text-[15px] text-[#292524] font-medium leading-relaxed">
                In Madhubani folklore, celestial bodies like the Sun, Moon & Stars represent timeless cosmic balance.
              </p>
              <div className="pt-0.5 flex items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold text-[#C87A38] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#C87A38] animate-pulse shrink-0" />
                <span>Click sphere to ignite interactive particle rings</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
