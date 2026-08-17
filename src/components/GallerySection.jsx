import React, { useState } from 'react';
import { Eye, Sparkles, ArrowRight, Filter } from 'lucide-react';

export default function GallerySection({ onSelectArtwork, onOpenCommission }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'kachni', label: 'Kachni (Line Work)' },
    { id: 'bharni', label: 'Bharni (Color Fill)' },
    { id: 'sacred', label: 'Sacred Motifs' },
    { id: 'nature', label: 'Nature & Flora' },
  ];

  const galleryArtworks = [
    {
      id: 1,
      title: "The Still Mind",
      category: "kachni",
      technique: "Kachni Fine Line & Gold Wash",
      medium: "Natural Ochre & Ink on Handmade Paper",
      dimensions: "18\" x 24\"",
      year: "2026",
      status: "Available in Studio",
      image: "/images/still_mind.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
      description: "Meditative line work depicting inner stillness, executed line by patient line using organic mineral dyes."
    },
    {
      id: 2,
      title: "Monsoon Court",
      category: "nature",
      technique: "Kachni Peacock Motif",
      medium: "Kachni Line Work on Handmade Paper",
      dimensions: "22\" x 30\"",
      year: "2025",
      status: "Featured Piece",
      image: "/images/monsoon_court.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      description: "Traditional celebration of monsoon rains, peacocks dancing amidst lotus blossoms and dense border line detail."
    },
    {
      id: 3,
      title: "Raas",
      category: "sacred",
      technique: "Sacred Geometric Motifs",
      medium: "Natural Organic Pigment on Handmade Paper",
      dimensions: "20\" x 20\"",
      year: "2026",
      status: "Available",
      image: "/images/raas.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80",
      description: "Cosmic dance of divine harmony rendered with natural mineral pigments and intricate double-line borders."
    },
    {
      id: 4,
      title: "Vighnaharta",
      category: "bharni",
      technique: "Bharni Vibrant Fill",
      medium: "Bharni Style • Natural Mineral Pigments",
      dimensions: "24\" x 36\"",
      year: "2025",
      status: "Studio Masterpiece",
      image: "/images/vighnaharta.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
      description: "Richly saturated Ganesha painting carrying traditional symbols of wisdom, protection, and auspicious beginnings."
    },
    {
      id: 5,
      title: "Sonepur Wheel",
      category: "sacred",
      technique: "Folk Festival Motif",
      medium: "Mineral Dyes & Ink on Khadi Paper",
      dimensions: "16\" x 20\"",
      year: "2025",
      status: "Private Collection",
      image: "/images/sonepur_wheel.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
      description: "Inspired by traditional village mela memory and sacred sun wheels carrying ancestral blessings."
    },
    {
      id: 6,
      title: "Cosmic Canvas",
      category: "bharni",
      technique: "Bharni & Kachni Fusion",
      medium: "Madhubani Mineral Pigments & Gold Leaf",
      dimensions: "30\" x 40\"",
      year: "2026",
      status: "Open for Commission",
      image: "/images/madhubani_art_texture.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
      description: "Celestial folk art canvas incorporating twin peacocks, lotus pond, and intricate sacred border geometric patterns."
    }
  ];

  const filteredArtworks = activeCategory === 'all' 
    ? galleryArtworks 
    : galleryArtworks.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#F8F5EE] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C87A38]">
              Selected Works
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] tracking-tight">
              From the studio.
            </h2>
            <p className="text-base text-[#5C5652]">
              Explore handmade Madhubani originals painted line by patient line on textured handmade paper.
            </p>
          </div>

          <button
            onClick={onOpenCommission}
            className="btn-outline flex items-center gap-2 text-xs uppercase font-semibold tracking-wider !border-[#B94A2D] text-[#B94A2D] hover:bg-[#B94A2D] hover:text-white"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commission Custom Piece</span>
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-[#E7E0D2]">
          <Filter className="w-4 h-4 text-[#78716C] mr-2 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded-full transition-all shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-[#1C1917] text-[#FAF8F3] shadow-md'
                  : 'bg-[#FAF8F3] text-[#5C5652] hover:bg-[#E7E0D2] border border-[#C4B9A3]/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="deckled-frame p-4 rounded-sm bg-[#FFFDF9] group flex flex-col justify-between"
            >
              <div>
                {/* Artwork Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#FAF8F3] mb-4">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    onError={(e) => {
                      // Fallback image if local path has placeholder
                      e.currentTarget.src = artwork.fallbackImage;
                    }}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Top Status Tag */}
                  <div className="absolute top-3 left-3 bg-[#FAF8F3]/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold text-[#1C1917] rounded-sm border border-[#E7E0D2]">
                    {artwork.status}
                  </div>

                  {/* Quick Magnify Hover Action */}
                  <div className="absolute inset-0 bg-[#1C1917]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                    <button
                      onClick={() => onSelectArtwork(artwork)}
                      className="w-10 h-10 rounded-full bg-[#FAF8F3] text-[#1C1917] flex items-center justify-center hover:bg-[#B94A2D] hover:text-white transition-colors shadow-lg"
                      title="Inspect Fine Line Work"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                      {artwork.title}
                    </h3>
                    <span className="text-xs font-serif italic text-[#78716C]">
                      {artwork.dimensions}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-[#B94A2D]">
                    {artwork.technique}
                  </p>

                  <p className="text-xs text-[#78716C]">
                    {artwork.medium}
                  </p>

                  <p className="text-xs text-[#5C5652] pt-2 line-clamp-2 leading-relaxed">
                    {artwork.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-[#E7E0D2]/60 flex items-center justify-between">
                <button
                  onClick={() => onSelectArtwork(artwork)}
                  className="text-xs font-semibold text-[#1C1917] hover:text-[#B94A2D] flex items-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-[#B94A2D]" />
                  <span>Inspect Details</span>
                </button>

                <button
                  onClick={onOpenCommission}
                  className="text-xs font-semibold text-[#C87A38] hover:text-[#B94A2D] flex items-center gap-1 transition-colors"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
