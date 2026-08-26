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
                  {artwork.technique && (
                    <div className="flex justify-between py-1 border-b border-[#E7E0D2]/60">
                      <span className="text-[#78716C]">Technique</span>
                      <span className="font-semibold text-[#1C1917] text-right max-w-[60%]">{artwork.technique}</span>
                    </div>
                  )}
                  {artwork.pigments && (
                    <div className="flex justify-between py-1 border-b border-[#E7E0D2]/60">
                      <span className="text-[#78716C]">Pigments & Ink</span>
                      <span className="font-semibold text-[#1C1917] text-right max-w-[60%]">{artwork.pigments}</span>
                    </div>
                  )}
                  {artwork.motifs && artwork.motifs.length > 0 && (
                    <div className="flex justify-between py-1 border-b border-[#E7E0D2]/60">
                      <span className="text-[#78716C]">Motifs</span>
                      <span className="font-semibold text-[#1C1917] text-right max-w-[60%]">{artwork.motifs.join(', ')}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center pt-1 text-[11px]">
                    <span className="text-[#78716C]">Authenticity</span>
                    <span className="font-semibold text-[#3E5A47] flex items-center gap-1.5">
                      <img src="/images/logo-emblem.png" alt="Kalapravah Seal" className="w-3.5 h-3.5 object-contain" />
                      <CheckCircle className="w-3 h-3 text-[#3E5A47]" /> Kalapravah Original • Signed by Rashmi Dhar
                    </span>
                  </div>
                </div>

                {/* Story / Description */}
                <div className="space-y-2 border-t border-b border-[#E7E0D2] py-3.5 sm:py-4">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#1C1917] flex items-center gap-1.5">
                    <Feather className="w-3.5 h-3.5 text-[#B94A2D]" /> Cultural Story & Backstory
                  </span>
                  <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
                    {artwork.fullStory || artwork.description || artwork.medium}
                  </p>
                </div>
              </div>

              {/* Inquire & Commission Actions */}
              <div className="pt-3 space-y-2.5">
                <a
                  href={`mailto:kalapravah.art@gmail.com?subject=Inquiry about Painting: ${artwork.title}`}
                  className="w-full py-3 px-4 bg-[#1C1917] hover:bg-[#2D2A26] text-white rounded-sm font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-sm active:scale-[0.99]"
                >
                  <MessageSquare className="w-4 h-4 text-[#22C55E]" />
                  <span>Inquire / Reserve Painting</span>
                </a>
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
