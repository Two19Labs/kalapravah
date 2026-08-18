import React, { useState, useRef } from 'react';
import { X, ZoomIn, Sparkles, Feather, CheckCircle, MessageSquare } from 'lucide-react';

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
    <div className="fixed inset-0 bg-[#1C1917]/75 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FAF8F3] border border-[#C4B9A3] w-full max-w-4xl rounded-sm shadow-2xl overflow-hidden relative my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#1C1917]/80 text-[#FAF8F3] hover:bg-[#1C1917] flex items-center justify-center transition-colors shadow-md"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Visual Artwork Column with Magnifier */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-[#F4EFE6] flex flex-col justify-between items-center border-b lg:border-b-0 lg:border-r border-[#E7E0D2]">
            
            <div 
              className="relative w-full aspect-[3/4] rounded-sm overflow-hidden border border-[#E7E0D2] shadow-xl bg-white cursor-zoom-in"
              onMouseEnter={() => setShowMagnifier(true)}
              onMouseLeave={() => setShowMagnifier(false)}
              onMouseMove={handleMouseMove}
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
                  className="magnifier-lens"
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

              {/* Hover Badge */}
              <div className="absolute bottom-2 left-2 bg-[#1C1917]/70 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm pointer-events-none flex items-center gap-1">
                <ZoomIn className="w-3 h-3 text-[#C87A38]" /> Hover over art to inspect line work
              </div>
            </div>

            <div className="mt-4 text-xs text-[#78716C] italic font-serif text-center">
              Hand-painted on handmade unbleached fiber paper with organic mineral dyes.
            </div>

          </div>

          {/* Details & Backstory Column */}
          <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 text-left flex flex-col justify-between bg-[#FFFDF9]">
            
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B94A2D] block">
                  {artwork.style || "Madhubani Folk Art"}
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#1C1917] mt-1">
                  {artwork.title}
                </h2>
                <p className="text-xs text-[#78716C] font-mono mt-1">
                  Created {artwork.year || "2026"} • Artist: Rashmi Dhar
                </p>
              </div>

              {/* Story / Description */}
              <div className="space-y-2 border-t border-b border-[#E7E0D2] py-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1C1917] flex items-center gap-1.5">
                  <Feather className="w-3.5 h-3.5 text-[#B94A2D]" /> Cultural Story & Backstory
                </span>
                <p className="text-sm text-[#44403C] leading-relaxed">
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
            <div className="pt-4 space-y-3">
              <a
                href={`mailto:hello@kalapravah.art?subject=Inquiry about Painting: ${artwork.title}`}
                className="btn-primary w-full justify-center text-xs font-semibold uppercase py-3"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire / Reserve Painting</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  if (onOpenCommission) onOpenCommission();
                }}
                className="btn-outline w-full justify-center text-xs font-semibold uppercase py-2.5 border-[#C87A38]/50 text-[#C87A38]"
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
