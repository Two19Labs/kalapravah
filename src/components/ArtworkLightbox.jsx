import React, { useState, useRef } from 'react';
import { X, Sparkles, Feather, CheckCircle, MessageSquare } from 'lucide-react';

export default function ArtworkLightbox({ artwork, onClose, onOpenCommission }) {
  if (!artwork) return null;

  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0, imgX: 0, imgY: 0 });

  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const imgX = (x / width) * 100;
    const imgY = (y / height) * 100;

    setMagnifierPos({ x, y, imgX, imgY });
  };

  return (
    <div className="fixed inset-0 bg-[#1C1917]/80 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#FAF8F3] border border-[#C4B9A3] w-full max-w-4xl max-h-[92vh] rounded-sm shadow-2xl overflow-y-auto relative my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-3 float-right mr-3 z-30 w-9 h-9 rounded-full bg-[#1C1917]/85 text-[#FAF8F3] hover:bg-[#1C1917] flex items-center justify-center transition-all shadow-md active:scale-95"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 clear-both">
          
          {/* Visual Artwork Column with Touch/Mouse Magnifier */}
          <div className="lg:col-span-6 p-4 sm:p-8 bg-[#F4EFE6] flex flex-col justify-between items-center border-b lg:border-b-0 lg:border-r border-[#E7E0D2]">
            
            <div 
              className="relative w-full aspect-[3/4] rounded-sm overflow-hidden border border-[#E7E0D2] shadow-xl bg-white cursor-zoom-in"
              onMouseEnter={() => setShowMagnifier(true)}
              onMouseLeave={() => setShowMagnifier(false)}
              onMouseMove={handleMouseMove}
              onClick={() => setShowMagnifier(!showMagnifier)}
            >
              <img
                ref={imgRef}
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-full object-cover select-none"
              />

              {/* Magnifying Glass Lens */}
              {showMagnifier && artwork.image && (
                <div
                  className="magnifier-lens pointer-events-none"
                  style={{
                    left: `${magnifierPos.x - 75}px`,
                    top: `${magnifierPos.y - 75}px`,
                    width: '150px',
                    height: '150px',
                    backgroundImage: `url(${artwork.image})`,
                    backgroundPosition: `${magnifierPos.imgX}% ${magnifierPos.imgY}%`,
                    backgroundSize: '300%',
                  }}
                />
              )}

            </div>

            <div className="mt-3 sm:mt-4 text-[11px] sm:text-xs text-[#78716C] italic font-serif text-center">
              Hand-painted on handmade unbleached fiber paper with organic mineral dyes.
            </div>

          </div>

          {/* Details & Backstory Column */}
          <div className="lg:col-span-6 p-5 sm:p-8 space-y-5 sm:space-y-6 text-left flex flex-col justify-between bg-[#FFFDF9]">
            
            <div className="space-y-4">
              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#B94A2D] block">
                  {artwork.style || "Madhubani Folk Art"}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
                  {artwork.title}
                </h2>
                <p className="text-[11px] sm:text-xs text-[#78716C] font-mono mt-1">
                  Created {artwork.year || "2026"} • Artist: Rashmi Dhar
                </p>
              </div>

              {/* Story / Description */}
              <div className="space-y-2 border-t border-b border-[#E7E0D2] py-3.5 sm:py-4">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#1C1917] flex items-center gap-1.5">
                  <Feather className="w-3.5 h-3.5 text-[#B94A2D]" /> Cultural Story & Backstory
                </span>
                <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
                  {artwork.description || artwork.medium}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[#E7E0D2]/50">
                  <span className="text-[#78716C]">Medium</span>
                  <span className="font-medium text-[#1C1917] text-right">{artwork.medium}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E7E0D2]/50">
                  <span className="text-[#78716C]">Authenticity</span>
                  <span className="font-medium text-[#3E5A47] flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Signed by Rashmi Dhar
                  </span>
                </div>
              </div>
            </div>

            {/* Inquire Actions */}
            <div className="pt-3 sm:pt-4 space-y-2.5 sm:space-y-3">
              <a
                href={`mailto:kalapravah.art@gmail.com?subject=Inquiry about Painting: ${artwork.title}`}
                className="w-full py-3 sm:py-3.5 px-4 bg-[#1C1917] hover:bg-[#2D2A26] text-white rounded-sm font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-sm active:scale-[0.99]"
              >
                <MessageSquare className="w-4 h-4 text-[#22C55E]" />
                <span>Inquire / Reserve Painting</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  if (onOpenCommission) onOpenCommission();
                }}
                className="w-full py-2.5 sm:py-3 px-4 bg-transparent border border-[#C87A38] text-[#C87A38] hover:bg-[#C87A38]/10 rounded-sm font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Commission Similar Custom Artwork</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
