import React from 'react';
import { CoverflowCarousel } from '@/components/ui/coverflow-carousel';
import { ARTWORKS } from '../data/artworks';

export default function FeaturedCollection({ onSelectArtwork }) {
  // Convert exact collection items to CoverflowCarousel slides
  const slides = ARTWORKS.map((item) => ({
    src: item.image,
    alt: item.title,
    title: item.title.toUpperCase(),
    subtitle: `${item.styleCategory} • ${item.medium}`,
    meta: [
      { label: "Year", value: item.year },
      { label: "Style", value: item.styleCategory },
      { label: "Dimensions", value: item.dimensions },
    ],
  }));

  return (
    <section id="collections" className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12 bg-[#FAF8F3] relative overflow-hidden border-t border-[#E7E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C87A38]">
            SELECTED WORKS & EXHIBITION
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#1C1917] leading-[1.08]">
            From the Studio Gallery
          </h2>
          <p className="text-sm text-[#5C5652] leading-relaxed">
            Click any artwork or drag the 3D coverflow carousel to inspect detailed cultural lore, pigment details, and original Mithila motifs.
          </p>
        </div>

        {/* 3D Coverflow Carousel integrated into the light themed parchment background */}
        <div className="relative py-2 sm:py-4">
          <CoverflowCarousel
            slides={slides}
            showCaption={true}
            showNavigation={true}
            showPagination={true}
            cardWidth="clamp(180px, 58vw, 300px)"
            rotate={38}
            depth={0.55}
            perspective={3}
            gap={0.05}
            loop={true}
            autoPlayInterval={4000}
            pauseOnHover={true}
            onCardClick={(index) => onSelectArtwork && onSelectArtwork(ARTWORKS[index])}
            cardClassName="border border-[#E7E0D2] shadow-2xl rounded-xl transition-shadow hover:shadow-[#C87A38]/10"
          />
        </div>

      </div>
    </section>
  );
}
