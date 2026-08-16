import React, { useState } from 'react';
import { ArrowRight, Volume2, VolumeX, Sparkles, Feather, ShieldCheck, Compass } from 'lucide-react';

export default function Hero({ onExploreGallery, onMeetArtist, onOpenCommission }) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleStudioAmbience = () => {
    setIsPlayingAudio(!isPlayingAudio);
    // Visual feedback notification for soundscape toggle
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background Subtle Watermark Art Motifs */}
      <div className="absolute top-12 left-10 opacity-5 pointer-events-none text-9xl font-serif text-[#1E304B]">
        🦚
      </div>
      <div className="absolute bottom-10 right-10 opacity-5 pointer-events-none text-9xl font-serif text-[#C87A38]">
        🪷
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Studio Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7E0D2]/60 border border-[#C4B9A3]/50 text-xs font-medium text-[#44403C]">
              <span className="w-2 h-2 rounded-full bg-[#B94A2D] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#B94A2D] -ml-4" />
              <span>Est. in line, colour & cultural memory • Studio open for commissions</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1C1917] leading-[1.08]">
              Where the hand <br />
              <span className="italic font-normal text-[#B94A2D]">still speaks.</span>
            </h1>

            {/* Narrative Body */}
            <p className="text-lg sm:text-xl text-[#5C5652] max-w-2xl font-normal leading-relaxed">
              Kalapravah is an art venture devoted to handmade folk traditions — Madhubani paintings drawn line by patient line, carrying the memories, motifs and stories of the people who made them first.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreGallery}
                className="btn-primary group"
              >
                <span>View the Gallery</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onMeetArtist}
                className="btn-outline"
              >
                <span>Meet the Artist</span>
              </button>

              <button
                onClick={onOpenCommission}
                className="btn-outline !border-[#C87A38]/50 hover:!border-[#C87A38] text-[#C87A38]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Commission Art</span>
              </button>
            </div>

            {/* Studio Features Bar */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-[#E7E0D2] max-w-xl">
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">100%</span>
                <span className="text-xs text-[#78716C]">Hand-painted on handmade paper</span>
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">Natural</span>
                <span className="text-xs text-[#78716C]">Organic pigments & mineral dyes</span>
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">Bespoke</span>
                <span className="text-xs text-[#78716C]">Custom stories & commissions</span>
              </div>
            </div>

          </div>

          {/* Featured Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Paper Frame */}
              <div className="deckled-frame p-4 rounded-sm bg-[#FFFDF9] shadow-2xl relative">
                
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#FAF8F3]">
                  <img
                    src="./images/vighnaharta.jpg"
                    alt="Vighnaharta Madhubani Artwork by Rashmi Dhar"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-[#FAF8F3]/95 backdrop-blur-sm p-3 border border-[#E7E0D2] rounded-sm flex items-center justify-between">
                    <div>
                      <span className="font-serif text-base font-bold text-[#1C1917] block">Vighnaharta</span>
                      <span className="text-xs text-[#78716C]">Bharni Style • Natural Pigment</span>
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 bg-[#1E304B] text-[#FAF8F3] rounded">
                      Featured Piece
                    </span>
                  </div>
                </div>

                {/* Artist Sign-off Stamp */}
                <div className="mt-3 pt-3 border-t border-[#E7E0D2]/60 flex items-center justify-between text-xs text-[#78716C]">
                  <span className="flex items-center gap-1.5 font-serif italic text-[#1C1917]">
                    <Feather className="w-3.5 h-3.5 text-[#B94A2D]" />
                    Signed by Rashmi Dhar
                  </span>
                  <span>Delhi NCR Studio</span>
                </div>

              </div>

              {/* Studio Soundscape Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#FFFDF9] border border-[#C4B9A3] p-3 rounded shadow-lg flex items-center gap-3">
                <button
                  onClick={toggleStudioAmbience}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                    isPlayingAudio ? 'bg-[#B94A2D] text-white' : 'bg-[#E7E0D2] text-[#1C1917]'
                  }`}
                  aria-label="Toggle Studio Soundscape"
                >
                  {isPlayingAudio ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
                <div>
                  <span className="text-xs font-semibold text-[#1C1917] block">Studio Ambience</span>
                  <span className="text-[10px] text-[#78716C]">
                    {isPlayingAudio ? 'Playing: Brush strokes & soft sitar' : 'Click to toggle soundscape'}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
