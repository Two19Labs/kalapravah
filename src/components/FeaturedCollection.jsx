import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function FeaturedCollection({ onSelectArtwork }) {
  const scrollContainerRef = useRef(null);

  const collectionItems = [
    {
      id: 1,
      title: "WHISPERS OF SILENCE",
      medium: "Oil on Canvas",
      year: "2023",
      image: "/images/still_mind.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "BEYOND HORIZONS",
      medium: "Acrylic on Canvas",
      year: "2022",
      image: "/images/monsoon_court.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "UNTITLED No. 07",
      medium: "Mixed Media",
      year: "2024",
      image: "/images/raas.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "VIGHNAHARTA",
      medium: "Bharni Style • Natural Pigments",
      year: "2025",
      image: "/images/vighnaharta.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "SONEPUR WHEEL",
      medium: "Mineral Dyes & Ink on Khadi Paper",
      year: "2025",
      image: "/images/sonepur_wheel.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="collections" className="py-20 md:py-28 bg-[#FAF8F3] relative overflow-hidden border-t border-[#E7E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Title Column */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C87A38]">
              FEATURED COLLECTION
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#1C1917] leading-[1.08]">
              Timeless <br />
              Expressions
            </h2>

            <p className="text-sm text-[#5C5652] leading-relaxed max-w-sm">
              A curated collection of masterpieces that transcend time and trends.
            </p>

            <div className="pt-2">
              <a
                href="#artworks"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-[#1C1917] hover:text-[#C87A38] transition-colors"
              >
                <span>VIEW COLLECTION</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Scroll Navigation Arrows */}
            <div className="pt-8 flex items-center gap-3">
              <button
                onClick={() => handleScroll('left')}
                className="w-10 h-10 rounded-full border border-[#1C1917]/30 flex items-center justify-center text-[#1C1917] hover:bg-[#1C1917] hover:text-white transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-10 h-10 rounded-full border border-[#1C1917]/30 flex items-center justify-center text-[#1C1917] hover:bg-[#1C1917] hover:text-white transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Horizontal Scrollable Gallery Cards */}
          <div className="lg:col-span-8 overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto carousel-scrollbar pb-6 no-scrollbar"
            >
              {collectionItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectArtwork && onSelectArtwork(item)}
                  className="art-card-frame min-w-[280px] sm:min-w-[320px] max-w-[320px] p-4 rounded-sm group cursor-pointer shrink-0 text-left"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#FAF8F3] mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(e) => {
                        e.currentTarget.src = item.fallbackImage;
                      }}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-base font-bold text-[#1C1917] tracking-wider uppercase">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#78716C]">
                      {item.medium}
                    </p>
                    <p className="text-xs font-serif text-[#C87A38]">
                      {item.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
