import React, { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import LunarGravityCard from '@/components/ui/lunar-gravity-card';

export default function Hero({ onExploreArtworks }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  const handleNext = () => {
    setCurrentSlide((prev) => (prev % totalSlides) + 1);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF8F3]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: ARTESIA Exact Hero Layout in Light Theme */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Tag */}
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C87A38]">
              WELCOME TO KALAPRAVAH
            </span>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-7xl font-normal tracking-tight text-[#1C1917] leading-[1.05]">
              Where Art <br />
              Inspires Life
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5C5652] max-w-md font-normal leading-relaxed">
              Discover original artworks, visionary artists, and stories that move the world.
            </p>

            {/* Square Outline Button */}
            <div>
              <button
                onClick={onExploreArtworks}
                className="btn-artesia group"
              >
                <span>EXPLORE ARTWORKS</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Bottom Carousel / Pagination Bar */}
            <div className="pt-8 flex items-center gap-6 text-xs font-semibold tracking-[0.15em] text-[#1C1917]">
              <span>0{currentSlide}</span>
              <div className="w-24 h-[1px] bg-[#C4B9A3] relative">
                <div 
                  className="h-[2px] bg-[#1C1917] absolute top-0 left-0 transition-all duration-300"
                  style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
                />
              </div>
              <span>0{totalSlides}</span>

              {/* Arrow Buttons */}
              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full border border-[#1C1917]/40 flex items-center justify-center text-[#1C1917] hover:bg-[#1C1917] hover:text-white transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full border border-[#1C1917]/40 flex items-center justify-center text-[#1C1917] hover:bg-[#1C1917] hover:text-white transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Madhubani Art Sphere */}
          <div className="lg:col-span-6 relative w-full flex justify-center">
            <div className="w-full max-w-lg lg:max-w-none aspect-[4/3.8] sm:aspect-[4/3] lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#C4B9A3]/50 bg-black relative">
              <LunarGravityCard className="w-full h-full min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] !border-none !rounded-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
