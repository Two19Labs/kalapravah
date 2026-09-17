import React, { useState, useEffect } from 'react';
import { ARTWORKS } from '../data/artworks';
import { WORKSHOP_PHOTOS } from '../data/workshops';
import { GalleryVertical, Calendar, Landmark, MapPin, Users, Sparkles, ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play, HeartHandshake, Globe, Clock } from 'lucide-react';

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
  const targetScrollPosRef = React.useRef(null);
  const lastMouseXRef = React.useRef(0);
  const isDraggingRef = React.useRef(false);
  const isHoveredRef = React.useRef(false);
  const touchStartXRef = React.useRef(0);
  const touchStartYRef = React.useRef(0);
  const touchDirectionRef = React.useRef(null);

  // Workshop marquee state & refs
  const [wsScrollPos, setWsScrollPos] = useState(0);
  const [isWsHoldingLeft, setIsWsHoldingLeft] = useState(false);
  const [isWsHoldingRight, setIsWsHoldingRight] = useState(false);
  const [hasWsDraggedFar, setHasWsDraggedFar] = useState(false);

  const wsTrackRef = React.useRef(null);
  const wsAnimRef = React.useRef(null);
  const wsScrollPosRef = React.useRef(0);
  const wsTargetScrollPosRef = React.useRef(null);
  const lastWsMouseXRef = React.useRef(0);
  const isWsDraggingRef = React.useRef(false);
  const isWsHoveredRef = React.useRef(false);
  const wsTouchStartXRef = React.useRef(0);
  const wsTouchStartYRef = React.useRef(0);
  const wsTouchDirectionRef = React.useRef(null);

  const displayWorkshopPhotos = WORKSHOP_PHOTOS.length > 0 
    ? [...WORKSHOP_PHOTOS, ...WORKSHOP_PHOTOS, ...WORKSHOP_PHOTOS] 
    : [];

  const updateWsScrollPos = (newPos) => {
    let pos = newPos;
    if (wsTrackRef.current) {
      const oneSetWidth = wsTrackRef.current.scrollWidth / 3;
      if (oneSetWidth > 0) {
        while (pos < 0) {
          pos += oneSetWidth;
          if (wsTargetScrollPosRef.current !== null) wsTargetScrollPosRef.current += oneSetWidth;
        }
        while (pos >= oneSetWidth) {
          pos -= oneSetWidth;
          if (wsTargetScrollPosRef.current !== null) wsTargetScrollPosRef.current -= oneSetWidth;
        }
      }
    }
    wsScrollPosRef.current = pos;
    setWsScrollPos(pos);
  };

  const getWsCardPitch = () => {
    if (wsTrackRef.current && wsTrackRef.current.children[0]) {
      const firstCard = wsTrackRef.current.children[0];
      const style = window.getComputedStyle(wsTrackRef.current);
      const gap = parseFloat(style.gap || style.gridGap || '16') || 16;
      return firstCard.offsetWidth + gap;
    }
    return 300;
  };

  useEffect(() => {
    let lastTime = performance.now();
    const animateWs = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      if (wsTrackRef.current) {
        if (isWsHoldingLeft) {
          wsTargetScrollPosRef.current = null;
          updateWsScrollPos(wsScrollPosRef.current - 0.45 * delta);
        } else if (isWsHoldingRight) {
          wsTargetScrollPosRef.current = null;
          updateWsScrollPos(wsScrollPosRef.current + 0.45 * delta);
        } else if (wsTargetScrollPosRef.current !== null) {
          const diff = wsTargetScrollPosRef.current - wsScrollPosRef.current;
          if (Math.abs(diff) < 0.5) {
            updateWsScrollPos(wsTargetScrollPosRef.current);
            wsTargetScrollPosRef.current = null;
          } else {
            updateWsScrollPos(wsScrollPosRef.current + diff * 0.14);
          }
        } else if (!isWsDraggingRef.current && !isWsHoveredRef.current) {
          updateWsScrollPos(wsScrollPosRef.current + 0.03 * delta);
        }
      }
      wsAnimRef.current = requestAnimationFrame(animateWs);
    };

    wsAnimRef.current = requestAnimationFrame(animateWs);
    return () => {
      if (wsAnimRef.current) cancelAnimationFrame(wsAnimRef.current);
    };
  }, [isWsHoldingLeft, isWsHoldingRight]);

  const handleWsTouchStart = (e) => {
    if (!e.touches || !e.touches[0]) return;
    wsTargetScrollPosRef.current = null;
    wsTouchStartXRef.current = e.touches[0].clientX;
    wsTouchStartYRef.current = e.touches[0].clientY;
    lastWsMouseXRef.current = e.touches[0].clientX;
    wsTouchDirectionRef.current = null;
    isWsDraggingRef.current = false;
    setHasWsDraggedFar(false);
  };

  const handleWsTouchMove = (e) => {
    if (!e.touches || !e.touches[0]) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    if (!wsTouchDirectionRef.current) {
      const diffX = Math.abs(currentX - wsTouchStartXRef.current);
      const diffY = Math.abs(currentY - wsTouchStartYRef.current);
      if (diffX > 8 || diffY > 8) {
        if (diffX > diffY) {
          wsTouchDirectionRef.current = 'horizontal';
          isWsDraggingRef.current = true;
          lastWsMouseXRef.current = currentX;
        } else {
          wsTouchDirectionRef.current = 'vertical';
          isWsDraggingRef.current = false;
          return;
        }
      } else {
        return;
      }
    }

    if (wsTouchDirectionRef.current === 'horizontal' && isWsDraggingRef.current) {
      const dx = lastWsMouseXRef.current - currentX;
      lastWsMouseXRef.current = currentX;

      if (Math.abs(dx) > 0.5) {
        setHasWsDraggedFar(true);
        updateWsScrollPos(wsScrollPosRef.current + dx);
      }
    }
  };

  const handleWsTouchEnd = () => {
    isWsDraggingRef.current = false;
    wsTouchDirectionRef.current = null;
  };

  const handleWsNext = () => {
    const pitch = getWsCardPitch();
    const current = wsTargetScrollPosRef.current !== null ? wsTargetScrollPosRef.current : wsScrollPosRef.current;
    const nextTarget = (Math.floor((current + 4) / pitch) + 1) * pitch;
    wsTargetScrollPosRef.current = nextTarget;
  };

  const handleWsPrev = () => {
    const pitch = getWsCardPitch();
    const current = wsTargetScrollPosRef.current !== null ? wsTargetScrollPosRef.current : wsScrollPosRef.current;
    const prevTarget = (Math.ceil((current - 4) / pitch) - 1) * pitch;
    wsTargetScrollPosRef.current = prevTarget;
  };

  const categories = ['All', 'Bharni', 'Kachni', 'Godna', 'Traditional'];

  const filteredArtworks = ARTWORKS.filter(item => {
    if (filterStyle === 'All') return true;
    return item.styleCategory.toLowerCase().includes(filterStyle.toLowerCase());
  });

  // Triple-cloned array for seamless infinite marquee scrolling in both directions
  const displayArtworks = filteredArtworks.length > 0 
    ? [...filteredArtworks, ...filteredArtworks, ...filteredArtworks] 
    : [];

  // Helper to calculate exact card width + gap dynamically
  const getCardPitch = () => {
    if (trackRef.current && trackRef.current.children[0]) {
      const firstCard = trackRef.current.children[0];
      const style = window.getComputedStyle(trackRef.current);
      const gap = parseFloat(style.gap || style.gridGap || '24') || 24;
      return firstCard.offsetWidth + gap;
    }
    return 340;
  };

  // Helper to normalize position continuously without cuts
  const updateScrollPos = (newPos) => {
    let pos = newPos;
    if (trackRef.current) {
      const oneSetWidth = trackRef.current.scrollWidth / 3;
      if (oneSetWidth > 0) {
        while (pos < 0) {
          pos += oneSetWidth;
          if (targetScrollPosRef.current !== null) targetScrollPosRef.current += oneSetWidth;
        }
        while (pos >= oneSetWidth) {
          pos -= oneSetWidth;
          if (targetScrollPosRef.current !== null) targetScrollPosRef.current -= oneSetWidth;
        }
      }
    }
    scrollPosRef.current = pos;
    setScrollPos(pos);
  };

  // Reset scrollPos if filter category changes
  useEffect(() => {
    targetScrollPosRef.current = null;
    updateScrollPos(0);
  }, [filterStyle]);

  // Continuous linear movement & smooth card-by-card navigation
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      if (trackRef.current) {
        if (isHoldingLeft) {
          targetScrollPosRef.current = null;
          updateScrollPos(scrollPosRef.current - 0.45 * delta);
        } else if (isHoldingRight) {
          targetScrollPosRef.current = null;
          updateScrollPos(scrollPosRef.current + 0.45 * delta);
        } else if (targetScrollPosRef.current !== null) {
          const diff = targetScrollPosRef.current - scrollPosRef.current;
          if (Math.abs(diff) < 0.5) {
            updateScrollPos(targetScrollPosRef.current);
            targetScrollPosRef.current = null;
          } else {
            // Smooth ease-out glide to target card without cuts
            updateScrollPos(scrollPosRef.current + diff * 0.14);
          }
        } else if (!isDraggingRef.current && !isHoveredRef.current) {
          updateScrollPos(scrollPosRef.current + 0.03 * delta);
        }
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isHoldingLeft, isHoldingRight, filteredArtworks.length]);

  // 1:1 Incremental Touch Drag Handlers with vertical scroll passthrough
  const handleTouchStart = (e) => {
    if (!e.touches || !e.touches[0]) return;
    targetScrollPosRef.current = null;
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    lastMouseXRef.current = e.touches[0].clientX;
    touchDirectionRef.current = null;
    isDraggingRef.current = false;
    setIsDragging(false);
    setHasDraggedFar(false);
  };

  const handleTouchMove = (e) => {
    if (!e.touches || !e.touches[0]) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    if (!touchDirectionRef.current) {
      const diffX = Math.abs(currentX - touchStartXRef.current);
      const diffY = Math.abs(currentY - touchStartYRef.current);
      if (diffX > 8 || diffY > 8) {
        if (diffX > diffY) {
          touchDirectionRef.current = 'horizontal';
          isDraggingRef.current = true;
          setIsDragging(true);
          lastMouseXRef.current = currentX;
        } else {
          touchDirectionRef.current = 'vertical';
          isDraggingRef.current = false;
          setIsDragging(false);
          return;
        }
      } else {
        return;
      }
    }

    if (touchDirectionRef.current === 'horizontal' && isDraggingRef.current) {
      const dx = lastMouseXRef.current - currentX;
      lastMouseXRef.current = currentX;

      if (Math.abs(dx) > 0.5) {
        setHasDraggedFar(true);
        updateScrollPos(scrollPosRef.current + dx);
      }
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
    touchDirectionRef.current = null;
  };

  const handleNext = () => {
    const pitch = getCardPitch();
    const current = targetScrollPosRef.current !== null ? targetScrollPosRef.current : scrollPosRef.current;
    const nextTarget = (Math.floor((current + 4) / pitch) + 1) * pitch;
    targetScrollPosRef.current = nextTarget;
  };

  const handlePrev = () => {
    const pitch = getCardPitch();
    const current = targetScrollPosRef.current !== null ? targetScrollPosRef.current : scrollPosRef.current;
    const prevTarget = (Math.ceil((current - 4) / pitch) - 1) * pitch;
    targetScrollPosRef.current = prevTarget;
  };

  return (
    <section id="gallery" className="pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 bg-transparent relative overflow-hidden border-b border-[#E7E0D2] scroll-mt-20 sm:scroll-mt-24">
      
      {/* Ambient Lights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C87A38]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#9A3412]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
        
        {/* Gallery Section Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            ART GALLERY
          </h2>
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
              className={`absolute left-1.5 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#1C1917]/85 hover:bg-[#C87A38] text-white flex items-center justify-center border border-white/30 shadow-2xl backdrop-blur-md transition-all active:scale-95 cursor-pointer ${
                isHoldingLeft ? 'bg-[#C87A38] scale-110 shadow-inner' : ''
              }`}
              aria-label="Move left / previous"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
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
              className={`absolute right-1.5 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#1C1917]/85 hover:bg-[#C87A38] text-white flex items-center justify-center border border-white/30 shadow-2xl backdrop-blur-md transition-all active:scale-95 cursor-pointer ${
                isHoldingRight ? 'bg-[#C87A38] scale-110 shadow-inner' : ''
              }`}
              aria-label="Move right / next"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
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
                  className="w-[260px] xs:w-[285px] sm:w-[315px] lg:w-[330px] min-w-[260px] xs:min-w-[285px] sm:min-w-[315px] lg:min-w-[330px] shrink-0 deckled-frame bg-[#FFFDF9] border-2 border-[#E7E0D2] hover:border-[#C87A38] rounded-xl p-3 sm:p-3.5 shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between h-[405px] xs:h-[415px] sm:h-[425px]"
                >
                  <div className="space-y-2">
                    
                    {/* Artwork Image Frame with Uniform Symmetric Red Border */}
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#E7E0D2] bg-[#FAF8F3]">
                      <div className="absolute inset-0 overflow-hidden">
                        <img
                          src={artwork.image}
                          alt={artwork.title}
                          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      <div className="absolute inset-0 bg-[#1C1917]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#1C1917] text-xs font-bold shadow-md">
                          <Sparkles className="w-3.5 h-3.5 text-[#C87A38]" />
                          <span>VIEW DETAILS</span>
                        </div>
                      </div>
                    </div>

                    {/* Artwork Titles & Details */}
                    <div className="space-y-1 text-left">
                      <div className="flex items-center justify-between gap-2 h-6 sm:h-6.5">
                        <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C1917] group-hover:text-[#C87A38] transition-colors truncate">
                          {artwork.title}
                        </h4>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-[#78716C] bg-[#FAF8F3] px-2 py-0.5 rounded border border-[#E7E0D2] shrink-0">
                          {artwork.dimensions}
                        </span>
                      </div>

                      <p className="text-[11px] sm:text-xs text-[#78716C] italic font-serif truncate h-4 sm:h-4.5 flex items-center">
                        {artwork.medium}
                      </p>

                      {/* 📍 BRIEF 2-3 LINES OF EQUAL LENGTH (UNIFORM COMPACT BOX) */}
                      <div className="pt-1.5 border-t border-[#E7E0D2]/60 space-y-1">
                        <span className="text-[9px] font-bold tracking-widest text-[#C87A38] uppercase block">
                          ARTWORK BRIEF:
                        </span>
                        <div className="h-[52px] sm:h-[56px] bg-[#FAF8F3] p-2 rounded border border-[#E7E0D2]/80 flex items-center overflow-hidden">
                          <p className="text-[11px] sm:text-xs text-[#292524] font-medium leading-relaxed line-clamp-3">
                            {artwork.brief}
                          </p>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Card Footer */}
                  <div className="pt-2 sm:pt-2.5 mt-auto border-t border-[#E7E0D2] flex items-center justify-between text-xs">
                    <span className="font-bold text-[#C87A38] text-[11px] sm:text-xs">
                      {artwork.price}
                    </span>
                    <div className="inline-flex items-center gap-1 text-[#1C1917] group-hover:text-[#C87A38] font-bold tracking-wider uppercase text-[10.5px] sm:text-[11px]">
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
          
          <div className="border-b border-[#E7E0D2] pb-4">
            <div>
              <span className="text-[10px] font-bold tracking-[0.24em] text-[#C87A38] uppercase block">
                GALLERY EXHIBITIONS & SHOWS
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#1C1917]">
                Exhibitions
              </h3>
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
                  <span><strong>Highlights:</strong> Original Madhubani Paintings, Private Viewing & Artist Talk</span>
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
            <div className="border-b border-[#E7E0D2] pb-4">
              <span className="text-[10px] font-bold tracking-[0.24em] text-[#C87A38] uppercase block">
                HERITAGE LEARNING & MINDFULNESS
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#1C1917]">
                Workshops
              </h3>
            </div>

            {/* Main Featured Workshop: @ Sunder Nursery & Institutional Venues */}
            <div className="bg-[#FFFDF9] border border-[#E7E0D2] rounded-xl p-6 sm:p-8 shadow-sm space-y-4 text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2.5 h-full bg-[#C87A38]" />
              
              <div className="space-y-2">
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
                  Mindful Outdoor Workshops Amidst Nature
                </h4>

                <p className="text-sm sm:text-base text-[#44403C] leading-snug">
                  Over the past two years, artist Rashmi Dhar has conducted meditative Madhubani art workshops amidst nature for participants of all ages. Attendees embark on a calming journey into traditional folk art, creating and taking home their own handcrafted heritage pieces.
                </p>
              </div>

              {/* 📸 CONTINUOUS SLOW MOVING WORKSHOP CAROUSEL */}
              <div className="space-y-2 pt-0">
                <div className="flex items-center justify-between text-xs font-semibold text-[#78716C]">
                  <span className="uppercase tracking-wider text-[#C87A38] font-bold">Workshop Moments & Participant Masterpieces</span>
                </div>

                <div 
                  className="relative overflow-hidden py-2 px-1 rounded-xl select-none group/ws-carousel"
                  onTouchStart={handleWsTouchStart}
                  onTouchMove={handleWsTouchMove}
                  onTouchEnd={handleWsTouchEnd}
                  onMouseEnter={() => { isWsHoveredRef.current = true; }}
                  onMouseLeave={() => { isWsHoveredRef.current = false; }}
                >
                  {/* Floating Left Side Button (<) */}
                  <button
                    onMouseDown={(e) => { e.stopPropagation(); setIsWsHoldingLeft(true); }}
                    onMouseUp={(e) => { e.stopPropagation(); setIsWsHoldingLeft(false); }}
                    onMouseLeave={() => setIsWsHoldingLeft(false)}
                    onTouchStart={(e) => { e.stopPropagation(); setIsWsHoldingLeft(true); }}
                    onTouchEnd={(e) => { e.stopPropagation(); setIsWsHoldingLeft(false); }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWsPrev();
                    }}
                    className={`absolute left-1.5 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#1C1917]/85 hover:bg-[#C87A38] text-white flex items-center justify-center border border-white/30 shadow-2xl backdrop-blur-md transition-all active:scale-95 cursor-pointer ${
                      isWsHoldingLeft ? 'bg-[#C87A38] scale-110 shadow-inner' : ''
                    }`}
                    aria-label="Move left / previous"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  {/* Floating Right Side Button (>) */}
                  <button
                    onMouseDown={(e) => { e.stopPropagation(); setIsWsHoldingRight(true); }}
                    onMouseUp={(e) => { e.stopPropagation(); setIsWsHoldingRight(false); }}
                    onMouseLeave={() => setIsWsHoldingRight(false)}
                    onTouchStart={(e) => { e.stopPropagation(); setIsWsHoldingRight(true); }}
                    onTouchEnd={(e) => { e.stopPropagation(); setIsWsHoldingRight(false); }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWsNext();
                    }}
                    className={`absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#1C1917]/85 hover:bg-[#C87A38] text-white flex items-center justify-center border border-white/30 shadow-2xl backdrop-blur-md transition-all active:scale-95 cursor-pointer ${
                      isWsHoldingRight ? 'bg-[#C87A38] scale-110 shadow-inner' : ''
                    }`}
                    aria-label="Move right / next"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  <div 
                    ref={wsTrackRef}
                    className="flex gap-4 w-max"
                    style={{
                      transform: `translate3d(-${wsScrollPos}px, 0, 0)`,
                      willChange: 'transform'
                    }}
                  >
                    {displayWorkshopPhotos.map((item, index) => (
                      <div
                        key={`${item.id}-${index}`}
                        onClick={() => {
                          if (!hasWsDraggedFar && onSelectArtwork) {
                            onSelectArtwork({
                              title: item.title,
                              image: item.image,
                              styleCategory: 'Workshop Photo',
                              medium: 'Madhubani Art Workshop',
                              story: item.caption,
                              year: '2026',
                              dimensions: item.location,
                              isWorkshop: true
                            });
                          }
                        }}
                        className="w-64 sm:w-72 shrink-0 bg-[#FAF8F3] border border-[#E7E0D2] hover:border-[#C87A38] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group relative cursor-pointer"
                      >
                        <div className="relative aspect-[4/3] bg-[#E7E0D2]/40 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className={`w-full h-full object-cover ${item.objectPosition || 'object-center'} group-hover:scale-105 transition-transform duration-500`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
