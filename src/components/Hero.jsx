import React, { useState } from 'react';
import { ArrowRight, Volume2, VolumeX, Sparkles, Feather, Compass, Sparkle } from 'lucide-react';
import LunarGravityCard from '@/components/ui/lunar-gravity-card';

export default function Hero({ onExploreGallery, onMeetArtist, onOpenCommission }) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleStudioAmbience = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF8F3]">
      
      {/* Background Subtle Watermark Art Motifs */}
      <div className="absolute top-12 left-10 opacity-5 pointer-events-none text-9xl font-serif text-[#1E304B]">
        🦚
      </div>
      <div className="absolute bottom-10 right-10 opacity-5 pointer-events-none text-9xl font-serif text-[#C87A38]">
        🪷
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Website Narrative & Intro */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Live Studio Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7E0D2]/70 border border-[#C4B9A3]/60 text-xs font-medium text-[#44403C]">
              <span className="w-2 h-2 rounded-full bg-[#B94A2D] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#B94A2D] -ml-4" />
              <span>Est. in line, colour & cultural memory • Studio open for commissions</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-6xl font-bold tracking-tight text-[#1C1917] leading-[1.08]">
              Where the hand <br />
              <span className="italic font-normal text-[#B94A2D]">still speaks.</span>
            </h1>

            {/* Narrative Body: What Kalapravah is all about */}
            <p className="text-base sm:text-lg text-[#5C5652] max-w-xl font-normal leading-relaxed">
              Kalapravah is an art venture devoted to handmade folk traditions — Madhubani paintings drawn line by patient line, carrying the memories, motifs and stories of the people who made them first.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreGallery}
                className="btn-primary group text-sm sm:text-base px-6 py-3"
              >
                <span>View the Gallery</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onMeetArtist}
                className="btn-outline text-sm sm:text-base px-5 py-3"
              >
                <span>Meet the Artist</span>
              </button>

              <button
                onClick={onOpenCommission}
                className="btn-outline !border-[#C87A38]/50 hover:!border-[#C87A38] text-[#C87A38] text-sm sm:text-base px-5 py-3 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#C87A38]" />
                <span>Commission Art</span>
              </button>
            </div>

            {/* Studio Features Bar */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-[#E7E0D2] max-w-xl">
              <div>
                <span className="block font-serif text-lg sm:text-2xl font-bold text-[#1C1917]">100%</span>
                <span className="text-xs text-[#78716C]">Hand-painted on handmade paper</span>
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-2xl font-bold text-[#1C1917]">Natural</span>
                <span className="text-xs text-[#78716C]">Organic pigments & mineral dyes</span>
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-2xl font-bold text-[#1C1917]">Bespoke</span>
                <span className="text-xs text-[#78716C]">Custom stories & commissions</span>
              </div>
            </div>

            {/* Studio Soundscape Floating Control */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#78716C]">
              <button
                onClick={toggleStudioAmbience}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                  isPlayingAudio ? 'bg-[#B94A2D] text-white' : 'bg-[#E7E0D2] text-[#1C1917] hover:bg-[#D8CDBA]'
                }`}
                aria-label="Toggle Studio Soundscape"
              >
                {isPlayingAudio ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
              <div>
                <span className="text-xs font-semibold text-[#1C1917] block">Studio Ambience</span>
                <span className="text-[11px] text-[#78716C]">
                  {isPlayingAudio ? 'Playing: Soft sitar & brush stroke soundscape' : 'Click soundscape for studio audio'}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Enlarged 3D Art Canvas Sphere */}
          <div className="lg:col-span-6 relative w-full flex justify-center">
            <div className="w-full max-w-lg lg:max-w-none aspect-[4/3.8] sm:aspect-[4/3] lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#C4B9A3]/40 bg-black relative">
              <LunarGravityCard className="w-full h-full min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] !border-none !rounded-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
