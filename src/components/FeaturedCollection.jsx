import React from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { CoverflowCarousel } from '@/components/ui/coverflow-carousel';

export default function FeaturedCollection({ onSelectArtwork }) {
  // Exact 5 original artwork frames from the Kalapravah collection
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

  // Convert exact collection items to CoverflowCarousel slides
  const slides = collectionItems.map((item) => ({
    src: item.image,
    alt: item.title,
    title: item.title,
    subtitle: `${item.style} • ${item.medium}`,
    meta: [
      { label: "Year", value: item.year },
      { label: "Style", value: item.style },
      { label: "Origin", value: "Handmade Paper" },
    ],
  }));

  return (
    <section id="collections" className="py-20 md:py-28 bg-[#FAF8F3] relative overflow-hidden border-t border-[#E7E0D2]">
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
            Drag or use arrow keys to navigate the 3D coverflow carousel of traditional art pieces, each hand-painted with natural pigments on handmade paper.
          </p>
        </div>

        {/* 3D Coverflow Carousel integrated into the light themed parchment background */}
        <div className="relative py-4">
          <CoverflowCarousel
            slides={slides}
            showCaption={true}
            showNavigation={true}
            showPagination={true}
            cardWidth="clamp(200px, 28vw, 320px)"
            rotate={42}
            depth={0.65}
            perspective={3}
            gap={0.06}
            loop={true}
            autoPlayInterval={4000}
            pauseOnHover={true}
            cardClassName="border border-[#E7E0D2] shadow-2xl rounded-xl transition-shadow hover:shadow-[#C87A38]/10"
          />
        </div>

        {/* Quick Inspect Button & Gallery Action */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onSelectArtwork && onSelectArtwork(collectionItems[0])}
            className="btn-artesia inline-flex items-center gap-2"
          >
            <Eye className="w-4 h-4 text-[#B94A2D]" />
            <span>INSPECT FEATURED ARTWORK</span>
          </button>
          
          <a
            href="#journal"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-[#1C1917] hover:text-[#C87A38] transition-colors py-3 px-6"
          >
            <span>READ ARTIST STORIES</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
