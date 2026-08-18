import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function FeaturedCollection({ onSelectArtwork }) {
  const scrollContainerRef = useRef(null);

  // Exact 5 artwork frames & image assets pulled directly from https://kalapravah-art-roots.lovable.app/gallery
  const collectionItems = [
    {
      id: 1,
      title: "VIGHNAHARTA",
      medium: "Natural pigment & ink on handmade paper",
      style: "Bharni Fill Style",
      year: "2025",
      image: "/images/vighnaharta.jpg",
      description: "Ganesha ringed by a garden in bloom — the remover of obstacles drawn in the bharni fill style, his mouse keeping watch below."
    },
    {
      id: 2,
      title: "THE STILL MIND",
      medium: "Ink, ochre & gold wash on handmade paper",
      style: "Kachni & Gold Wash",
      year: "2026",
      image: "/images/still_mind.jpg",
      description: "A Buddha in abhaya mudra against a halo of turmeric light, lotuses opening at the border in patient, repeated line."
    },
    {
      id: 3,
      title: "MONSOON COURT",
      medium: "Kachni line work on handmade paper",
      style: "Monochrome Kachni Line",
      year: "2025",
      image: "/images/monsoon_court.jpg",
      description: "Three peacocks nested in dense foliage, built entirely from hatched line — the discipline of kachni at its most demanding."
    },
    {
      id: 4,
      title: "RAAS",
      medium: "Natural pigment on handmade paper",
      style: "Sacred Motifs",
      year: "2026",
      image: "/images/raas.jpg",
      description: "Radha and Krishna at the centre of a turning lotus of gopis, framed by a fruiting tree and its birds."
    },
    {
      id: 5,
      title: "SONEPUR WHEEL",
      medium: "Ink & yellow on handmade paper",
      style: "Godna Tattoo Line",
      year: "2025",
      image: "/images/sonepur_wheel.jpg",
      description: "A monochrome mandala worked in godna-inspired tattoo line, the black border holding the composition like a held breath."
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
              SELECTED WORKS
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#1C1917] leading-[1.08]">
              From the studio
            </h2>

            <p className="text-sm text-[#5C5652] leading-relaxed max-w-sm">
              Paintings, each one a story held in line. Painted entirely by hand on handmade paper.
            </p>

            <div className="pt-2">
              <a
                href="#collections"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-[#1C1917] hover:text-[#C87A38] transition-colors"
              >
                <span>SEE ALL FRAMES</span>
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

          {/* Right Horizontal Scrollable Gallery Cards with Pulled Lovable Images */}
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
                  {/* Artwork Image Container */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#FAF8F3] mb-4 border border-[#E7E0D2]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Hover Inspect Overlay */}
                    <div className="absolute inset-0 bg-[#1C1917]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <span className="px-3 py-1.5 bg-[#FAF8F3] text-[#1C1917] text-xs font-semibold uppercase tracking-wider rounded flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5 text-[#B94A2D]" />
                        Inspect Details
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-serif text-base font-bold text-[#1C1917] tracking-wider uppercase">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-[#B94A2D]">
                      {item.medium}
                    </p>
                    <p className="text-xs text-[#5C5652] line-clamp-2 leading-relaxed pt-1">
                      {item.description}
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
