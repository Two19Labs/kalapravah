import React, { useState, useRef } from 'react';
import { X, ZoomIn, Sparkles, Feather, Layers, Frame, CheckCircle, MessageSquare } from 'lucide-react';

export default function ArtworkLightbox({ artwork, onClose, onOpenCommission }) {
  if (!artwork) return null;

  const [frameStyle, setFrameStyle] = useState('natural'); // 'natural', 'teak', 'gold'
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

  const getFrameClasses = () => {
    switch (frameStyle) {
      case 'teak':
        return 'border-[16px] border-[#2E1F18] shadow-2xl';
      case 'gold':
        return 'border-[16px] border-[#C5A059] shadow-2xl';
      default:
        return 'border border-[#E7E0D2] shadow-xl';
    }
  };

  return (
    <div className="modal-backdrop animate-fade-in p-4 overflow-y-auto">
      <div className="bg-[#FAF8F3] border border-[#C4B9A3] w-full max-w-5xl rounded-sm shadow-2xl overflow-hidden relative my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#1C1917]/80 text-[#FAF8F3] hover:bg-[#1C1917] flex items-center justify-center transition-colors shadow-md"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Visual Column with Magnifier & Frame Toggle */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-[#F4EFE6] flex flex-col justify-between items-center border-b lg:border-b-0 lg:border-r border-[#E7E0D2]">
            
            {/* Frame Style Selector */}
            <div className="w-full flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#78716C] flex items-center gap-1.5">
                <Frame className="w-3.5 h-3.5" /> Virtual Framing Preview:
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setFrameStyle('natural')}
                  className={`text-xs px-2.5 py-1 rounded border transition-all ${
                    frameStyle === 'natural' ? 'bg-[#1C1917] text-white border-[#1C1917]' : 'bg-white text-[#44403C] border-[#E7E0D2]'
                  }`}
                >
                  Deckled Paper
                </button>
                <button
                  onClick={() => setFrameStyle('teak')}
                  className={`text-xs px-2.5 py-1 rounded border transition-all ${
                    frameStyle === 'teak' ? 'bg-[#2E1F18] text-white border-[#2E1F18]' : 'bg-white text-[#44403C] border-[#E7E0D2]'
                  }`}
                >
                  Dark Teak
                </button>
                <button
                  onClick={() => setFrameStyle('gold')}
                  className={`text-xs px-2.5 py-1 rounded border transition-all ${
                    frameStyle === 'gold' ? 'bg-[#C5A059] text-white border-[#C5A059]' : 'bg-white text-[#44403C] border-[#E7E0D2]'
                  }`}
                >
                  Gold Trim
                </button>
              </div>
            </div>

            {/* Artwork Canvas with Lens */}
            <div
              className={`relative w-full aspect-[4/3] max-h-[460px] rounded-sm overflow-hidden bg-white ${getFrameClasses()} transition-all duration-300`}
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
              {showMagnifier && (
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

              {/* Magnifier Tip Badge */}
              <div className="absolute bottom-2 left-2 bg-[#1C1917]/70 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm pointer-events-none flex items-center gap-1">
                <ZoomIn className="w-3 h-3 text-[#D99B26]" /> Hover over art to inspect line work
              </div>
            </div>

            <div className="mt-4 text-xs text-[#78716C] italic font-serif">
              Hand-painted on handmade unbleached fiber paper with organic dyes.
            </div>

          </div>

          {/* Details & Backstory Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 space-y-6 text-left flex flex-col justify-between bg-[#FFFDF9]">
            
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B94A2D] block">
                  {artwork.styleCategory}
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#1C1917] mt-1">
                  {artwork.title}
                </h2>
                <p className="text-xs text-[#78716C] font-mono mt-1">
                  {artwork.dimensions} • Created {artwork.year} • Artist: Rashmi Dhar
                </p>
              </div>

              {/* Story */}
              <div className="space-y-2 border-t border-b border-[#E7E0D2] py-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1C1917] flex items-center gap-1.5">
                  <Feather className="w-3.5 h-3.5 text-[#B94A2D]" /> Cultural Narrative & Backstory
                </span>
                <p className="text-sm text-[#44403C] leading-relaxed">
                  {artwork.fullStory}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[#E7E0D2]/50">
                  <span className="text-[#78716C]">Technique</span>
                  <span className="font-medium text-[#1C1917] text-right">{artwork.technique}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E7E0D2]/50">
                  <span className="text-[#78716C]">Pigment Dyes</span>
                  <span className="font-medium text-[#1C1917] text-right">{artwork.pigments}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E7E0D2]/50">
                  <span className="text-[#78716C]">Authenticity</span>
                  <span className="font-medium text-[#3E5A47] flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Signed & Authenticated
                  </span>
                </div>
              </div>
            </div>

            {/* Inquire Actions */}
            <div className="pt-4 space-y-3">
              <a
                href={`mailto:hello@kalapravah.art?subject=Inquiry about Painting: ${artwork.title}`}
                className="btn-primary w-full justify-center text-sm font-semibold !py-3"
              >
                <MessageSquare className="w-4 h-4" />
                Inquire / Reserve Painting
              </a>
              <button
                onClick={() => {
                  onClose();
                  onOpenCommission();
                }}
                className="btn-outline w-full justify-center text-sm font-semibold !py-2.5 border-[#C87A38]/50 text-[#C87A38]"
              >
                <Sparkles className="w-4 h-4" />
                Commission Similar Piece in Custom Size
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
