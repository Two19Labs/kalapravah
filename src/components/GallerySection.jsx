import React, { useState } from 'react';
import { ARTWORKS } from '../data/artworks';
import { Eye, Sparkles, Filter, Check, ArrowUpRight } from 'lucide-react';

export default function GallerySection({ onSelectArtwork, onOpenCommission }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Bharni Wash', 'Pure Kachni', 'Kachni & Ochre Wash', 'Godna Tattoo Line'];

  const filteredArtworks = filter === 'All'
    ? ARTWORKS
    : ARTWORKS.filter(item => item.styleCategory === filter);

  return (
    <section id="gallery" className="py-24 bg-[#F8F5EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B94A2D] block mb-2">
              Selected Works
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917]">
              Paintings, each one a story held in line
            </h2>
            <p className="mt-3 text-base text-[#5C5652] max-w-2xl">
              Every work below is painted entirely by hand on handmade paper. Sizes and availability on request — most pieces can also be commissioned afresh in your own colours and narrative.
            </p>
          </div>

          <button
            onClick={onOpenCommission}
            className="btn-outline !py-2.5 !px-5 text-sm self-start md:self-auto shrink-0 flex items-center gap-2 border-[#C87A38]/60 text-[#1C1917]"
          >
            <Sparkles className="w-4 h-4 text-[#C87A38]" />
            Request Custom Narrative
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <span className="text-xs font-bold uppercase tracking-wider text-[#78716C] mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Style:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                filter === cat
                  ? 'bg-[#1C1917] text-[#FAF8F3] shadow-sm'
                  : 'bg-[#FFFDF9] text-[#44403C] hover:bg-[#E7E0D2] border border-[#E7E0D2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Artworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              onClick={() => onSelectArtwork(artwork)}
              className="deckled-frame bg-[#FFFDF9] rounded-sm p-4 cursor-pointer group flex flex-col justify-between"
            >
              
              {/* Artwork Image Box */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#FAF8F3] mb-4">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Status Pill */}
                <div className="absolute top-3 left-3">
                  {artwork.inStock ? (
                    <span className="bg-[#3E5A47] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded shadow-sm">
                      Available in Studio
                    </span>
                  ) : (
                    <span className="bg-[#C87A38] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded shadow-sm">
                      Commission on Request
                    </span>
                  )}
                </div>

                {/* Quick View Hover Overlay */}
                <div className="absolute inset-0 bg-[#1C1917]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="btn-primary !py-2 !px-4 text-xs font-semibold shadow-lg flex items-center gap-2">
                    <Eye className="w-4 h-4" /> Inspect Details & Story
                  </span>
                </div>
              </div>

              {/* Info Area */}
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C87A38]">
                    {artwork.styleCategory}
                  </span>
                  <span className="text-xs text-[#78716C] font-mono">{artwork.dimensions}</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1C1917] group-hover:text-[#B94A2D] transition-colors flex items-center justify-between">
                  <span>{artwork.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#B94A2D]" />
                </h3>

                <p className="text-xs text-[#5C5652] line-clamp-2 leading-relaxed">
                  {artwork.description}
                </p>

                {/* Motifs Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {artwork.motifs.map((motif, i) => (
                    <span key={i} className="text-[10px] bg-[#E7E0D2]/50 text-[#44403C] px-2 py-0.5 rounded font-medium">
                      #{motif}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
