import React, { useEffect } from 'react';
import { 
  X, Sparkles, Feather, CheckCircle, MessageSquare 
} from 'lucide-react';

export default function ArtworkLightbox({ artwork, onClose, onOpenCommission }) {
  // Keyboard navigation & close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!artwork) return null;

  const isSimplePhoto = artwork.isWorkshop || artwork.styleCategory === 'Workshop Photo' || artwork.isPhotoOnly;

  if (isSimplePhoto) {
    return (
      <div 
        className="fixed inset-0 bg-[#1C1917]/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <div 
          className="relative max-w-5xl max-h-[92vh] flex flex-col items-center justify-center select-none"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Floating Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 sm:-right-10 w-9 h-9 rounded-full bg-[#1C1917]/80 text-white hover:bg-[#B94A2D] flex items-center justify-center transition-colors shadow-lg cursor-pointer z-50 border border-white/20"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Full Clean Image */}
          <div className="relative rounded-lg overflow-hidden border border-[#C4B9A3]/30 shadow-2xl bg-black/40">
            <img
              src={artwork.originalImage || artwork.image}
              alt={artwork.title || "Workshop photo"}
              className="max-h-[85vh] max-w-[90vw] sm:max-w-[85vw] w-auto h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#1C1917]/85 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      <div className="bg-[#FAF8F3] border border-[#C4B9A3] w-full max-w-5xl max-h-[94vh] rounded-lg shadow-2xl overflow-y-auto relative my-auto flex flex-col">
        
        {/* Top Header Bar */}
        <div className="sticky top-0 z-40 bg-[#FAF8F3]/95 backdrop-blur-sm border-b border-[#E7E0D2] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#B94A2D] bg-[#B94A2D]/10 px-2.5 py-1 rounded">
              Artwork Details
            </span>
            <span className="hidden sm:inline text-xs text-[#78716C] font-mono">
              • {artwork.title}
            </span>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#1C1917] text-white hover:bg-[#B94A2D] flex items-center justify-center transition-colors shadow cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow overflow-hidden">
          
          {/* Left Column: Artwork Canvas */}
          <div className="lg:col-span-6 p-4 sm:p-6 bg-[#F4EFE6] flex flex-col justify-center items-center border-b lg:border-b-0 lg:border-r border-[#E7E0D2] relative select-none">
            
            {/* Artwork Container */}
            <div className="relative w-full aspect-[3/4] rounded border border-[#C4B9A3] shadow-lg bg-white overflow-hidden">
              <img
                src={artwork.originalImage || artwork.image}
                alt={artwork.title}
                className="w-full h-full object-cover scale-[1.04] select-none pointer-events-none"
              />
            </div>

          </div>

          {/* Right Column: Specifications & Story Details */}
          <div className="lg:col-span-6 p-4 sm:p-6 lg:p-8 space-y-5 text-left flex flex-col justify-between bg-[#FFFDF9] relative min-h-[400px]">
            
            <div className="space-y-5 flex-grow flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#B94A2D] block">
                    {artwork.styleCategory || artwork.style || "Madhubani Folk Art"}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
                    {artwork.title}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-[#78716C] font-mono mt-1">
                    Created {artwork.year || "2026"} • Artist: Rashmi Dhar
                  </p>
                </div>

                {/* Artwork Specifications Box */}
                <div className="bg-[#FAF8F3] border border-[#E7E0D2] rounded-md p-3 sm:p-4 text-xs space-y-2 shadow-sm">
                  <div className="flex justify-between py-1 border-b border-[#E7E0D2]/60">
                    <span className="text-[#78716C]">Year</span>
                    <span className="font-semibold text-[#1C1917]">{artwork.year || "2026"}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E7E0D2]/60">
                    <span className="text-[#78716C]">Style</span>
                    <span className="font-semibold text-[#1C1917]">{artwork.styleCategory || artwork.style || "Madhubani Folk Art"}</span>
                  </div>
                  {artwork.dimensions && (
                    <div className="flex justify-between py-1 border-b border-[#E7E0D2]/60">
                      <span className="text-[#78716C]">Dimensions</span>
                      <span className="font-semibold text-[#1C1917]">{artwork.dimensions}</span>
                    </div>
                  )}
                  {artwork.medium && (
                    <div className="flex justify-between py-1 border-b border-[#E7E0D2]/60">
                      <span className="text-[#78716C]">Medium</span>
                      <span className="font-semibold text-[#1C1917] text-right max-w-[60%]">{artwork.medium}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-1 pt-1.5">
                    <span className="text-[#78716C]">Authenticity</span>
                    <span className="font-semibold text-[#1C1917] flex items-center gap-1">
                      <Feather className="w-3 h-3 text-[#B94A2D]" />
                      <span>Kalapravah Original • Signed by Rashmi Dhar</span>
                    </span>
                  </div>
                </div>

                {/* Story Paragraph */}
                {artwork.story && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1C1917] flex items-center gap-1.5">
                      <Feather className="w-3.5 h-3.5 text-[#B94A2D]" />
                      <span>Cultural Story & Backstory</span>
                    </span>
                    <p className="text-xs sm:text-sm text-[#5C5652] leading-relaxed italic bg-[#FDFBF7] p-3 rounded border border-[#E7E0D2]/60">
                      {artwork.story}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons Container */}
              <div className="pt-6 space-y-2 border-t border-[#E7E0D2]">
                <button
                  onClick={() => {
                    onClose();
                    if (onOpenCommission) onOpenCommission();
                  }}
                  className="w-full py-3 px-4 bg-[#1C1917] hover:bg-[#B94A2D] text-white rounded-sm font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99] cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#C87A38]" />
                  <span>Inquire / Reserve Painting</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    if (onOpenCommission) onOpenCommission();
                  }}
                  className="w-full py-2.5 px-4 bg-transparent border border-[#C87A38] text-[#C87A38] hover:bg-[#C87A38]/10 rounded-sm font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Commission Similar Custom Artwork</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
