import React, { useState, useEffect } from 'react';
import { ARTWORKS } from '../data/artworks';
import { GalleryVertical, Calendar, Landmark, MapPin, Users, Sparkles, Eye, ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play, HeartHandshake } from 'lucide-react';

export default function ArtGallerySection({ onSelectArtwork }) {
  const [filterStyle, setFilterStyle] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const categories = ['All', 'Bharni', 'Kachni', 'Godna', 'Traditional'];

  const filteredArtworks = ARTWORKS.filter(item => {
    if (filterStyle === 'All') return true;
    return item.styleCategory.toLowerCase().includes(filterStyle.toLowerCase());
  });

  // Seamless cloned track: append first 3 items to end for infinite loop
  const displayArtworks = filteredArtworks.length > 0 
    ? [...filteredArtworks, ...filteredArtworks.slice(0, 3)] 
    : [];

  // Reset seamless loop when reaching cloned end items
  useEffect(() => {
    if (currentIndex >= filteredArtworks.length && filteredArtworks.length > 0) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, filteredArtworks.length]);

  // Auto-swipe every 3 seconds (3000ms) unless hovered
  useEffect(() => {
    if (isHovered || filteredArtworks.length === 0) return;
    
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [isHovered, filteredArtworks.length]);

  const [cardsPerView, setCardsPerView] = useState(3);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerView(1); // Mobile Phones: 1 card
      } else if (width < 1024) {
        setCardsPerView(2); // Tablets & iPads: 2 cards
      } else {
        setCardsPerView(3); // Laptops & Desktop: 3 cards
      }
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const handleTouchStart = (e) => {
    setIsHovered(true);
    if (e.touches && e.touches[0]) {
      setTouchStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e) => {
    setIsHovered(false);
    if (!touchStartX || !e.changedTouches || !e.changedTouches[0]) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    setTouchStartX(0);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(filteredArtworks.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(filteredArtworks.length - 1);
      }, 50);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAF8F3] relative overflow-hidden border-b border-[#E7E0D2]">
      
      {/* Ambient Lights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C87A38]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#9A3412]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Watermarked Mithila Art Motif Overlay */}
      <div className="absolute top-10 left-6 w-[400px] h-[400px] opacity-[0.14] pointer-events-none text-[#C87A38]">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polygon points="100,15 125,75 185,100 125,125 100,185 75,125 15,100 75,75" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="45" />
          <circle cx="100" cy="100" r="25" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-28">
        
        {/* Gallery Section Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7E0D2]/60 border border-[#C4B9A3]/60 text-xs font-bold text-[#C87A38] uppercase tracking-widest">
            <GalleryVertical className="w-4 h-4" />
            <span>STUDIO COLLECTION & EVENTS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1917] tracking-tight">
            GALLERY
          </h2>
          <p className="text-sm sm:text-base text-[#5C5652] leading-relaxed max-w-2xl mx-auto font-light">
            Explore 30+ curated original artworks, upcoming gallery exhibitions at IHC, traditional outdoor workshops, and international youth events.
          </p>
          <div className="w-20 h-[2px] bg-[#C87A38] mx-auto rounded-full mt-2" />
        </div>

        {/* ========================================================================= */}
        {/* SUBSECTION 1: 30+ ART WORKS PERFECT SMOOTH SEAMLESS CAROUSEL              */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          
          {/* Header & Controls Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#E7E0D2] pb-4">
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[10px] font-bold tracking-[0.24em] text-[#C87A38] uppercase block">
                  ORIGINAL FINE ARTWORKS
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1917] mt-1">
                30+ Featured Artworks
              </h3>
            </div>

            {/* Prev / Next Arrows positioned in Controls Bar */}
            <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full bg-[#FFFDF9] hover:bg-[#1C1917] text-[#1C1917] hover:text-white flex items-center justify-center border border-[#E7E0D2] shadow-sm transition-all active:scale-95 cursor-pointer"
                  aria-label="Previous Artwork"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-[#FFFDF9] hover:bg-[#1C1917] text-[#1C1917] hover:text-white flex items-center justify-center border border-[#E7E0D2] shadow-sm transition-all active:scale-95 cursor-pointer"
                aria-label="Next Artwork"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* 📍 SMOOTH SLIDING TRACK CAROUSEL (SEAMLESS INFINITE LOOP) */}
          <div 
            className="relative overflow-hidden py-2 px-1 rounded-xl touch-pan-y"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            
            {/* Sliding Track with exact calc() translation & seamless transition toggle */}
            <div 
              className="flex gap-4 sm:gap-6"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% + ${cardsPerView === 1 ? '1rem' : '1.5rem'}) / ${cardsPerView}))`,
                transition: isTransitioning ? 'transform 700ms ease-in-out' : 'none'
              }}
            >
              {displayArtworks.map((artwork, index) => (
                <div
                  key={`${artwork.id}-${index}`}
                  onClick={() => onSelectArtwork && onSelectArtwork(artwork)}
                  style={{ width: `calc((100% - ${cardsPerView === 1 ? '0rem' : cardsPerView === 2 ? '1.5rem' : '3rem'}) / ${cardsPerView})` }}
                  className="w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] min-w-full sm:min-w-[calc((100%-1.5rem)/2)] lg:min-w-[calc((100%-3rem)/3)] shrink-0 deckled-frame bg-[#FFFDF9] border-2 border-[#E7E0D2] hover:border-[#C87A38] rounded-xl p-4 sm:p-5 shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    
                    {/* Artwork Image Frame */}
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#E7E0D2] bg-[#FAF8F3]">
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 bg-[#1C1917]/85 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#F59E0B] tracking-wider uppercase border border-[#F59E0B]/30">
                        {artwork.styleCategory}
                      </div>

                      <div className="absolute inset-0 bg-[#1C1917]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#1C1917] text-xs font-bold shadow-md">
                          <Eye className="w-4 h-4 text-[#C87A38]" />
                          <span>INSPECT DETAILS</span>
                        </div>
                      </div>
                    </div>

                    {/* Artwork Titles & Details */}
                    <div className="space-y-2 text-left">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-xl font-bold text-[#1C1917] group-hover:text-[#C87A38] transition-colors">
                          {artwork.title}
                        </h4>
                        <span className="text-[11px] font-semibold text-[#78716C] bg-[#FAF8F3] px-2 py-0.5 rounded border border-[#E7E0D2] shrink-0">
                          {artwork.dimensions}
                        </span>
                      </div>

                      <p className="text-xs text-[#78716C] italic font-serif">
                        {artwork.medium}
                      </p>

                      {/* 📍 BRIEF 15-20 WORDS ABOUT EACH ART WORK */}
                      <div className="pt-2 border-t border-[#E7E0D2]/60">
                        <span className="text-[9.5px] font-bold tracking-widest text-[#C87A38] uppercase block mb-1">
                          ARTWORK BRIEF:
                        </span>
                        <p className="text-xs sm:text-[13px] text-[#292524] font-medium leading-relaxed bg-[#FAF8F3] p-2.5 rounded border border-[#E7E0D2]/80">
                          {artwork.brief}
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 mt-4 border-t border-[#E7E0D2] flex items-center justify-between text-xs">
                    <span className="font-bold text-[#C87A38]">
                      {artwork.price}
                    </span>
                    <div className="inline-flex items-center gap-1 text-[#1C1917] group-hover:text-[#C87A38] font-bold tracking-wider uppercase text-[11px]">
                      <span>VIEW STORY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {filteredArtworks.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex ? 'w-8 bg-[#C87A38]' : 'w-2.5 bg-[#E7E0D2] hover:bg-[#C4B9A3]'
                }`}
                aria-label={`Go to artwork ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SUBSECTION 2: EXHIBITIONS (UPCOMING GALLERY AT IHC)                       */}
        {/* ========================================================================= */}
        <div id="exhibitions" className="pt-12 border-t border-[#E7E0D2] space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#E7E0D2] pb-4">
            <div>
              <span className="text-[10px] font-bold tracking-[0.24em] text-[#C87A38] uppercase block">
                GALLERY EXHIBITIONS & SHOWS
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#1C1917]">
                Exhibitions
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#E7E0D2] text-xs text-[#78716C]">
              <Landmark className="w-3.5 h-3.5 text-[#C87A38]" />
              <span>India Habitat Centre (IHC) Feature</span>
            </div>
          </div>

          {/* IHC Exhibition Spotlight Card */}
          <div className="deckled-frame bg-[#FFFDF9] border border-[#E7E0D2] rounded-xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* 📍 PIC OF IHC EXHIBITION */}
            <div className="lg:col-span-5 relative h-[260px] sm:h-[300px] lg:h-[340px] overflow-hidden bg-[#1C1917]">
              <img
                src="/images/monsoon_court.jpg"
                alt="Upcoming Gallery Exhibition at India Habitat Centre (IHC) New Delhi"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/90 via-[#1C1917]/30 to-transparent flex flex-col justify-end p-5 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C87A38] text-white text-[10px] font-bold uppercase tracking-widest w-fit mb-1.5">
                  <span>EXHIBITION PREVIEW</span>
                </div>
                <span className="font-serif text-base sm:text-lg font-bold">India Habitat Centre (IHC)</span>
                <span className="text-[11px] text-[#EAD5BE]">Visual Arts Gallery • Lodhi Road, New Delhi</span>
              </div>
            </div>

            {/* IHC Exhibition Details */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C87A38]/10 text-[#C87A38] text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                <span>UPCOMING GALLERY FEATURE</span>
              </div>

              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] leading-tight">
                Upcoming Fine Art Gallery Exhibition at India Habitat Centre (IHC)
              </h4>

              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                Kalapravah is proud to announce an exclusive upcoming exhibition at the prestigious <strong>India Habitat Centre (IHC), New Delhi</strong>. Featuring original large-scale Madhubani canvases, intricate Kachni line series, and live pigment mixing demonstrations by artist Rashmi Dhar.
              </p>

              <div className="space-y-2 text-xs text-[#5C5652] pt-2 border-t border-[#E7E0D2]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C87A38]" />
                  <span><strong>Venue:</strong> Visual Arts Gallery, India Habitat Centre (IHC), New Delhi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C87A38]" />
                  <span><strong>Highlights:</strong> Original Mithila Paintings, Private Viewing & Artist Talk</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* SUBSECTION 3: WORKSHOPS & EVENT                                           */}
        {/* ========================================================================= */}
        <div className="pt-12 border-t border-[#E7E0D2] space-y-12">
          
          {/* Workshops Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#E7E0D2] pb-4">
              <div>
                <span className="text-[10px] font-bold tracking-[0.24em] text-[#C87A38] uppercase block">
                  HERITAGE LEARNING & MINDFULNESS
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#1C1917]">
                  Workshops
                </h3>
              </div>
            </div>

            {/* Client's Workshop Philosophy Card */}
            <div className="bg-[#FFFDF9] border border-[#E7E0D2] rounded-xl p-6 sm:p-8 shadow-sm space-y-4 text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2.5 h-full bg-[#C87A38]" />
              <div className="flex items-center gap-2 text-xs font-bold text-[#C87A38] uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4 text-[#C87A38]" />
                <span>ART IS MEANT TO BE SHARED & LIVED</span>
              </div>
              <p className="text-base sm:text-lg text-[#1C1917] font-serif leading-relaxed">
                Art is meant to be shared and lived. Beyond my studio practice, I regularly conduct immersive Madhubani Art Workshops for students and corporate groups. These sessions are designed to slow down racing minds, spark creativity, and introduce participants to the meditative rhythm of Mithila storytelling.
              </p>
            </div>

            {/* Main Featured Workshop: @ Sunder Nursery */}
            <div className="bg-[#FFFDF9] border border-[#E7E0D2] rounded-xl p-6 sm:p-8 shadow-sm space-y-4 text-left">
              <div className="flex items-center gap-2 text-xs font-bold text-[#C87A38] uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#9A3412]" />
                <span>@ SUNDER NURSERY, NEW DELHI</span>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
                Meditative Madhubani Art Workshops Amidst Nature
              </h4>

              {/* Exact Client Text Copy for Sunder Nursery */}
              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                Artist Rashmi Dhar has conducted several meditative Madhubani art workshops in last 2 years amidst nature for all ages. Participants experienced an stress-busting journey into this 3,000-year-old heritage art, dating back to Ramayana times, and proudly carried home their own handcrafted traditional masterpieces.
              </p>

              {/* Other Workshops Badges */}
              <div className="pt-4 border-t border-[#E7E0D2] flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-[#1C1917] uppercase tracking-wider">Other Workshops:</span>
                <span className="px-3 py-1 rounded-full bg-[#FAF8F3] border border-[#E7E0D2] text-xs font-semibold text-[#78716C]">
                  @ Lalit Kala Academy
                </span>
                <span className="px-3 py-1 rounded-full bg-[#FAF8F3] border border-[#E7E0D2] text-xs font-semibold text-[#78716C]">
                  @ Bikaner House
                </span>
              </div>
            </div>

          </div>

          {/* Event Section */}
          <div className="space-y-6">
            <div className="border-b border-[#E7E0D2] pb-4">
              <span className="text-[10px] font-bold tracking-[0.24em] text-[#C87A38] uppercase block">
                INTERNATIONAL YOUTH & COMMUNITY HIGHLIGHT
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#1C1917]">
                Special Event
              </h3>
            </div>

            {/* Event Card: Aga Khan Foundation Summer Camp */}
            <div className="bg-[#FFFDF9] border border-[#E7E0D2] rounded-xl p-6 sm:p-8 shadow-sm space-y-4 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C87A38]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2 text-xs font-bold text-[#C87A38] uppercase tracking-wider">
                <Users className="w-4 h-4 text-[#C87A38]" />
                <span>AGA KHAN FOUNDATION SUMMER CAMP</span>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
                Global Youth Meditative Art Workshop
              </h4>

              {/* Exact Client Text Copy for Event */}
              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                At the Aga Khan Foundation’s summer camp, Rashmi Dhar led a meditative Madhubani art workshop. Forty teens aged 15-20 across globe & from India, the USA, Canada, and the UAE gathered for two days of skill-building. Beyond mastering traditional techniques, they found deep mindfulness, stress relief, and brought home 3,000-year-old art masterpieces.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-[#78716C]">
                <span className="px-2.5 py-1 rounded bg-[#FAF8F3] border border-[#E7E0D2]">40 Global Teen Participants</span>
                <span className="px-2.5 py-1 rounded bg-[#FAF8F3] border border-[#E7E0D2]">India, USA, Canada, UAE</span>
                <span className="px-2.5 py-1 rounded bg-[#FAF8F3] border border-[#E7E0D2]">2-Day Skill Intensive</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
