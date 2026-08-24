import React, { useState, useEffect } from 'react';
import { ARTWORKS } from '../data/artworks';
import { GalleryVertical, Calendar, Landmark, MapPin, Users, Sparkles, Eye, ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play, HeartHandshake } from 'lucide-react';

export default function ArtGallerySection({ onSelectArtwork }) {
  const [filterStyle, setFilterStyle] = useState('All');
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const [hasDraggedFar, setHasDraggedFar] = useState(false);

  const [isHoldingLeft, setIsHoldingLeft] = useState(false);
  const [isHoldingRight, setIsHoldingRight] = useState(false);

  const trackRef = React.useRef(null);
  const animRef = React.useRef(null);
  const scrollPosRef = React.useRef(0);
  const lastMouseXRef = React.useRef(0);
  const isDraggingRef = React.useRef(false);
  const isHoveredRef = React.useRef(false);

  const categories = ['All', 'Bharni', 'Kachni', 'Godna', 'Traditional'];

  const filteredArtworks = ARTWORKS.filter(item => {
    if (filterStyle === 'All') return true;
    return item.styleCategory.toLowerCase().includes(filterStyle.toLowerCase());
  });

  // Triple-cloned array for seamless infinite marquee scrolling in both directions
  const displayArtworks = filteredArtworks.length > 0 
    ? [...filteredArtworks, ...filteredArtworks, ...filteredArtworks] 
    : [];

  // Helper to normalize position continuously without cuts
  const updateScrollPos = (newPos) => {
    let pos = newPos;
    if (trackRef.current) {
      const oneSetWidth = trackRef.current.scrollWidth / 3;
      if (oneSetWidth > 0) {
        while (pos < 0) pos += oneSetWidth;
        while (pos >= oneSetWidth) pos -= oneSetWidth;
      }
    }
    scrollPosRef.current = pos;
    setScrollPos(pos);
  };

  // Reset scrollPos if filter category changes
  useEffect(() => {
    updateScrollPos(0);
  }, [filterStyle]);

  // Continuous linear movement & continuous hold-to-scroll fast movement
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      if (trackRef.current) {
        let currentSpeed = 0;
        
        if (isHoldingLeft) {
          currentSpeed = -0.35; // Fast reverse when holding < button
        } else if (isHoldingRight) {
          currentSpeed = 0.35; // Fast forward when holding > button
        } else if (!isDraggingRef.current) {
          currentSpeed = 0.035; // Gentle continuous slow motion (~35px/sec)
        }

        if (currentSpeed !== 0) {
          updateScrollPos(scrollPosRef.current + currentSpeed * delta);
        }
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isHoldingLeft, isHoldingRight, filteredArtworks.length]);

  // 1:1 Incremental Touch Drag Handlers for Mobile/Tablet
  const handleTouchStart = (e) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    setHasDraggedFar(false);
    if (e.touches && e.touches[0]) {
      lastMouseXRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current || !e.touches || !e.touches[0]) return;
    const dx = lastMouseXRef.current - e.touches[0].clientX;
    lastMouseXRef.current = e.touches[0].clientX;

    if (Math.abs(dx) > 0.5) {
      setHasDraggedFar(true);
      updateScrollPos(scrollPosRef.current + dx);
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  const handleNext = () => {
    updateScrollPos(scrollPosRef.current + 360);
  };

  const handlePrev = () => {
    updateScrollPos(scrollPosRef.current - 360);
  };

  return (
    <section id="gallery" className="py-8 sm:py-10 lg:py-12 bg-transparent relative overflow-hidden border-b border-[#E7E0D2] scroll-mt-20 sm:scroll-mt-24">
      
      {/* Ambient Lights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C87A38]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#9A3412]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
        
        {/* Gallery Section Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1917] tracking-tight">
            ART GALLERY
          </h2>
          <p className="text-sm sm:text-base text-[#5C5652] leading-relaxed max-w-2xl mx-auto font-light">
            Explore 30+ curated original artworks, upcoming gallery exhibitions at IHC, traditional outdoor workshops, and international youth events.
          </p>
          <div className="w-20 h-[2px] bg-[#C87A38] mx-auto rounded-full mt-2" />
        </div>

        {/* 📍 CONTINUOUS SLOW MOVING TRACK (SIDE HOLDABLE < AND > BUTTONS FOR PC, TOUCH SWIPE FOR MOBILE) */}
        <div 
          className="relative overflow-hidden py-3 px-1 rounded-xl select-none group/carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
            {/* Holdable Left Side Button (<) */}
            <button
              onMouseDown={(e) => { e.stopPropagation(); setIsHoldingLeft(true); }}
              onMouseUp={(e) => { e.stopPropagation(); setIsHoldingLeft(false); }}
              onMouseLeave={() => setIsHoldingLeft(false)}
              onTouchStart={(e) => { e.stopPropagation(); setIsHoldingLeft(true); }}
              onTouchEnd={(e) => { e.stopPropagation(); setIsHoldingLeft(false); }}
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className={`absolute left-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1C1917]/85 hover:bg-[#C87A38] text-white flex items-center justify-center border border-white/30 shadow-2xl backdrop-blur-md transition-all active:scale-95 cursor-pointer ${
                isHoldingLeft ? 'bg-[#C87A38] scale-110 shadow-inner' : ''
              }`}
              aria-label="Move left / previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Holdable Right Side Button (>) */}
            <button
              onMouseDown={(e) => { e.stopPropagation(); setIsHoldingRight(true); }}
              onMouseUp={(e) => { e.stopPropagation(); setIsHoldingRight(false); }}
              onMouseLeave={() => setIsHoldingRight(false)}
              onTouchStart={(e) => { e.stopPropagation(); setIsHoldingRight(true); }}
              onTouchEnd={(e) => { e.stopPropagation(); setIsHoldingRight(false); }}
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className={`absolute right-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1C1917]/85 hover:bg-[#C87A38] text-white flex items-center justify-center border border-white/30 shadow-2xl backdrop-blur-md transition-all active:scale-95 cursor-pointer ${
                isHoldingRight ? 'bg-[#C87A38] scale-110 shadow-inner' : ''
              }`}
              aria-label="Move right / next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Sliding Track with continuous requestAnimationFrame translate3d */}
            <div 
              ref={trackRef}
              className="flex gap-4 sm:gap-6 w-max"
              style={{
                transform: `translate3d(-${scrollPos}px, 0, 0)`,
                willChange: 'transform'
              }}
            >
              {displayArtworks.map((artwork, index) => (
                <div
                  key={`${artwork.id}-${index}`}
                  onClick={() => {
                    if (!hasDraggedFar && onSelectArtwork) {
                      onSelectArtwork(artwork);
                    }
                  }}
                  className="w-[300px] sm:w-[360px] lg:w-[380px] min-w-[300px] sm:min-w-[360px] lg:min-w-[380px] shrink-0 deckled-frame bg-[#FFFDF9] border-2 border-[#E7E0D2] hover:border-[#C87A38] rounded-xl p-4 sm:p-5 shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between h-[480px] sm:h-[510px]"
                >
                  <div className="space-y-3">
                    
                    {/* Artwork Image Frame with Uniform Symmetric Red Border */}
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#E7E0D2] bg-[#FAF8F3]">
                      <div className="absolute inset-0 overflow-hidden">
                        <img
                          src={artwork.image}
                          alt={artwork.title}
                          className="w-full h-full object-cover scale-[1.12] transform group-hover:scale-[1.18] transition-transform duration-700"
                        />
                      </div>

                      {/* Uniform Symmetric Madhubani Red Frame Overlay */}
                      <div className="absolute inset-0 border-[7px] sm:border-[8px] border-[#B83224] pointer-events-none rounded-lg z-10 shadow-inner" />
                      <div className="absolute inset-[7px] sm:inset-[8px] border border-[#1C1917]/50 pointer-events-none z-10" />

                      <div className="absolute top-3 left-3 bg-[#1C1917]/85 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#F59E0B] tracking-wider uppercase border border-[#F59E0B]/30 z-20">
                        {artwork.styleCategory}
                      </div>

                      <div className="absolute inset-0 bg-[#1C1917]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                        <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#1C1917] text-xs font-bold shadow-md">
                          <Eye className="w-4 h-4 text-[#C87A38]" />
                          <span>INSPECT DETAILS</span>
                        </div>
                      </div>
                    </div>

                    {/* Artwork Titles & Details */}
                    <div className="space-y-1.5 text-left">
                      <div className="flex items-center justify-between gap-2 h-7">
                        <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1C1917] group-hover:text-[#C87A38] transition-colors truncate">
                          {artwork.title}
                        </h4>
                        <span className="text-[11px] font-semibold text-[#78716C] bg-[#FAF8F3] px-2 py-0.5 rounded border border-[#E7E0D2] shrink-0">
                          {artwork.dimensions}
                        </span>
                      </div>

                      <p className="text-xs text-[#78716C] italic font-serif truncate h-5 flex items-center">
                        {artwork.medium}
                      </p>

                      {/* 📍 BRIEF 15-20 WORDS ABOUT EACH ART WORK (FIXED UNIFORM BOX HEIGHT) */}
                      <div className="pt-2 border-t border-[#E7E0D2]/60 space-y-1">
                        <span className="text-[9.5px] font-bold tracking-widest text-[#C87A38] uppercase block">
                          ARTWORK BRIEF:
                        </span>
                        <div className="h-[60px] sm:h-[64px] bg-[#FAF8F3] p-2.5 rounded border border-[#E7E0D2]/80 flex items-center overflow-hidden">
                          <p className="text-xs sm:text-[13px] text-[#292524] font-medium leading-snug line-clamp-3">
                            {artwork.brief}
                          </p>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 mt-2 border-t border-[#E7E0D2] flex items-center justify-between text-xs">
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

        {/* ========================================================================= */}
        {/* SUBSECTION 2: EXHIBITIONS (UPCOMING GALLERY AT IHC)                       */}
        {/* ========================================================================= */}
        <div id="exhibitions" className="pt-8 sm:pt-10 lg:pt-12 mt-8 sm:mt-10 lg:mt-12 border-t border-[#E7E0D2] space-y-6 sm:space-y-8">
          
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
                Upcoming Folk Art Gallery Exhibition at India Habitat Centre (IHC)
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
        <div className="pt-8 sm:pt-10 lg:pt-12 mt-8 sm:mt-10 lg:mt-12 border-t border-[#E7E0D2] space-y-8 sm:space-y-10">
          
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

            {/* Main Featured Workshop: @ Sunder Nursery & Institutional Venues */}
            <div className="bg-[#FFFDF9] border border-[#E7E0D2] rounded-xl p-6 sm:p-8 shadow-sm space-y-4 text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2.5 h-full bg-[#C87A38]" />
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C87A38] uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-[#9A3412]" />
                  <span>@ SUNDER NURSERY, NEW DELHI</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-[#78716C] bg-[#FAF8F3] px-2.5 py-0.5 rounded border border-[#E7E0D2]">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#C87A38]" />
                  <span>Art Is Meant To Be Shared</span>
                </div>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
                Mindful Outdoor Workshops Amidst Nature
              </h4>

              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                Artist Rashmi Dhar has conducted several meditative Madhubani art workshops in last 2 years amidst nature for all ages. Participants experienced an stress-busting journey into this 3,000-year-old heritage art, dating back to Ramayana times, and proudly carried home their own handcrafted traditional masterpieces.
              </p>

              {/* Other Workshops Badges */}
              <div className="pt-4 border-t border-[#E7E0D2] flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-[#1C1917] uppercase tracking-wider">Other workshops:</span>
                <span className="px-3 py-1 rounded-full bg-[#FAF8F3] border border-[#E7E0D2] text-xs font-semibold text-[#78716C]">
                  @ Lalit Kala academy
                </span>
                <span className="px-3 py-1 rounded-full bg-[#FAF8F3] border border-[#E7E0D2] text-xs font-semibold text-[#78716C]">
                  @ Bikaner house
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
                Event
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

              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                At the Aga Khan Foundation’s summer camp, Rashmi Dhar led a meditative Madhubani art workshop. Forty teens aged 15-20 across globe & from India, the USA, Canada, and the UAE gathered for two days of skill-building. Beyond mastering traditional techniques, they found deep mindfulness, stress relief, and brought home 3,000-year-old art masterpieces.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-[#78716C]">
                <span className="px-2.5 py-1 rounded bg-[#FAF8F3] border border-[#E7E0D2]">40 Global Teen Participants</span>
                <span className="px-2.5 py-1 rounded bg-[#FAF8F3] border border-[#E7E0D2]">India, USA, Canada, UAE</span>
                <span className="px-2.5 py-1 rounded bg-[#FAF8F3] border border-[#E7E0D2]">2-Day Intensive</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
