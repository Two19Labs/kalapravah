import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ARTWORKS } from '../data/artworks';

export default function GallerySection({ onSelectArtwork }) {
  const galleryArtworks = ARTWORKS.slice(0, 3);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#F8F5EE] relative overflow-hidden border-t border-[#E7E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-row items-end justify-between mb-12">
          <div className="space-y-2 text-left">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#C87A38]">
              Selected works
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] tracking-tight">
              From the studio
            </h2>
          </div>

          <a
            href="#gallery-all"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1C1917] hover:text-[#B94A2D] transition-colors"
          >
            <span>See all</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryArtworks.map((artwork) => (
            <div
              key={artwork.id}
              onClick={() => onSelectArtwork && onSelectArtwork(artwork)}
              className="deckled-frame p-4 rounded-sm bg-[#FFFDF9] group flex flex-col justify-between cursor-pointer border border-[#E7E0D2] shadow-sm hover:shadow-xl transition-all"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#FAF8F3] mb-4">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    onError={(e) => {
                      e.currentTarget.src = artwork.fallbackImage;
                    }}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="space-y-1 text-left">
                  <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                    {artwork.title}
                  </h3>
                  <p className="text-xs text-[#78716C]">
                    {artwork.medium}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
