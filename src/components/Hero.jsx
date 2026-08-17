import React from 'react';
import { ArrowRight } from 'lucide-react';
import LunarGravityCard from '@/components/ui/lunar-gravity-card';

export default function Hero({ onExploreGallery, onMeetArtist }) {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF8F3]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Lovable Exact Hero Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7E0D2]/70 border border-[#C4B9A3]/60 text-xs font-medium text-[#44403C]">
              <span>Est. in line, colour and memory</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-6xl font-bold tracking-tight text-[#1C1917] leading-[1.08]">
              Where the hand <br />
              <span className="italic font-normal text-[#B94A2D]">still speaks.</span>
            </h1>

            {/* Narrative Body */}
            <p className="text-base sm:text-lg text-[#5C5652] max-w-xl font-normal leading-relaxed">
              Kalapravah is an art venture devoted to handmade folk traditions — Madhubani paintings drawn line by patient line, carrying the memories, motifs and stories of the people who made them first.
            </p>

            {/* Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreGallery}
                className="btn-primary text-sm sm:text-base px-6 py-3"
              >
                <span>View the gallery</span>
              </button>

              <button
                onClick={onMeetArtist}
                className="btn-outline text-sm sm:text-base px-6 py-3"
              >
                <span>Meet the artist</span>
              </button>
            </div>

          </div>

          {/* Right Column: Retained 3D Interactive Sphere */}
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
