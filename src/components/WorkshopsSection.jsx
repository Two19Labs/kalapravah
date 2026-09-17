import React, { useState, useEffect, useRef } from 'react';
import { WORKSHOP_PHOTOS } from '../data/workshops';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

export default function WorkshopsSection({ onSelectArtwork, onBookWorkshop }) {
  // Workshop marquee state & refs
  const [wsScrollPos, setWsScrollPos] = useState(0);
  const [isWsHoldingLeft, setIsWsHoldingLeft] = useState(false);
  const [isWsHoldingRight, setIsWsHoldingRight] = useState(false);
  const [hasWsDraggedFar, setHasWsDraggedFar] = useState(false);

  const wsTrackRef = useRef(null);
  const wsAnimRef = useRef(null);
  const wsScrollPosRef = useRef(0);
  const wsTargetScrollPosRef = useRef(null);
  const lastWsMouseXRef = useRef(0);
  const isWsDraggingRef = useRef(false);
  const isWsHoveredRef = useRef(false);
  const wsTouchStartXRef = useRef(0);
  const wsTouchStartYRef = useRef(0);
  const wsTouchDirectionRef = useRef(null);

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


  return (
    <section id="workshops" className="pt-5 sm:pt-7 lg:pt-8 pb-7 sm:pb-9 lg:pb-10 bg-transparent relative overflow-hidden border-b border-[#E7E0D2] scroll-mt-20 sm:scroll-mt-24">
      {/* Decorative Spotlights */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#C87A38]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5 sm:space-y-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            WORKSHOPS
          </h2>
          <div className="w-16 h-[2.5px] bg-[#C87A38] mx-auto rounded-full mt-1.5" />
          <p className="text-sm sm:text-base text-[#5C5652] leading-relaxed max-w-2xl mx-auto font-light pt-1">
            Learn Kachni fine lines, Bharni fill traditions, and the cultural memory behind Madhubani art directly from master practitioner Rashmi Dhar.
          </p>
        </div>

        {/* 1. FEATURED OUTDOOR NATURE WORKSHOP & PHOTO CAROUSEL */}
        <div className="bg-[#FFFDF9] border border-[#E7E0D2] rounded-2xl p-5 sm:p-6 lg:p-7 shadow-sm space-y-4 text-left relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2.5 h-full bg-[#C87A38]" />
          
          <div className="space-y-2.5 max-w-4xl">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#C87A38] uppercase block">
              MINDFUL OUTDOOR SESSIONS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
              Meditative Art Amidst Nature
            </h3>
            <p className="text-sm sm:text-base text-[#44403C] leading-relaxed font-light">
              Over the past two years, artist Rashmi Dhar has conducted meditative Madhubani art workshops amidst nature (e.g. Sunder Nursery, New Delhi) and institutional spaces for participants of all ages. Attendees embark on a calming journey into traditional folk art, creating and taking home their own handcrafted heritage pieces.
            </p>

            <div className="pt-1">
              <a
                href="#contact"
                onClick={(e) => {
                  if (onBookWorkshop) {
                    e.preventDefault();
                    onBookWorkshop('Madhubani Art Workshop');
                  }
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C1917] hover:bg-[#C87A38] text-white text-xs font-bold tracking-widest uppercase transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                <span>Inquire About Workshops</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Continuous Workshop Moments Track */}
          <div className="space-y-2 pt-2 border-t border-[#E7E0D2]/60">
            <div className="flex items-center justify-between text-xs font-semibold text-[#78716C]">
              <span className="uppercase tracking-wider text-[#C87A38] font-bold">
                Workshop Moments & Participant Masterpieces
              </span>
            </div>

            <div 
              className="relative overflow-hidden py-2 px-1 rounded-xl select-none group/ws-carousel"
              onTouchStart={handleWsTouchStart}
              onTouchMove={handleWsTouchMove}
              onTouchEnd={handleWsTouchEnd}
              onMouseEnter={() => { isWsHoveredRef.current = true; }}
              onMouseLeave={() => { isWsHoveredRef.current = false; }}
            >
              {/* Left Button */}
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
                aria-label="Previous workshop photo"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Right Button */}
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
                aria-label="Next workshop photo"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Photos Track */}
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
                    className="w-52 xs:w-60 sm:w-68 md:w-72 aspect-[4/3] shrink-0 bg-[#FAF8F3] border border-[#E7E0D2] hover:border-[#C87A38] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group relative cursor-pointer"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className={`w-full h-full object-cover ${item.objectPosition || 'object-center'} group-hover:scale-105 transition-transform duration-500`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
