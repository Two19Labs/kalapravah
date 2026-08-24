import React, { useState, useRef, useEffect } from 'react';
import { 
  X, Sparkles, Feather, CheckCircle, MessageSquare, Eye
} from 'lucide-react';

export default function ArtworkLightbox({ artwork, onClose, onOpenCommission }) {
  // Fixed 5.0x Zoom State
  const zoomScale = 5.0; 
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, percentX: 50, percentY: 50 });

  const imgContainerRef = useRef(null);

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

  // Calculate mouse or touch coordinates relative to image container
  const updatePosition = (clientX, clientY) => {
    if (!imgContainerRef.current) return;
    const rect = imgContainerRef.current.getBoundingClientRect();

    // Calculate position within element boundaries
    const relativeX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const relativeY = Math.max(0, Math.min(clientY - rect.top, rect.height));

    const percentX = (relativeX / rect.width) * 100;
    const percentY = (relativeY / rect.height) * 100;

    setCursorPos({
      x: relativeX,
      y: relativeY,
      percentX,
      percentY,
      width: rect.width,
      height: rect.height,
    });
  };

  const handleMouseMove = (e) => {
    updatePosition(e.clientX, e.clientY);
  };

  const handleTouchMove = (e) => {
    if (!e.touches || !e.touches[0]) return;
    updatePosition(e.touches[0].clientX, e.touches[0].clientY);
  };

  // Calculate Lens Box dimensions (proportional to 5x zoom scale)
  const lensWidthPercent = 100 / zoomScale; // 20%
  const lensHeightPercent = 100 / zoomScale; // 20%

  // Lens position centered on cursor
  const lensLeftPercent = Math.max(0, Math.min(cursorPos.percentX - lensWidthPercent / 2, 100 - lensWidthPercent));
  const lensTopPercent = Math.max(0, Math.min(cursorPos.percentY - lensHeightPercent / 2, 100 - lensHeightPercent));

  return (
    <div className="fixed inset-0 bg-[#1C1917]/85 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      <div className="bg-[#FAF8F3] border border-[#C4B9A3] w-full max-w-5xl max-h-[94vh] rounded-lg shadow-2xl overflow-y-auto relative my-auto flex flex-col">
        
        {/* Top Header Bar */}
        <div className="sticky top-0 z-40 bg-[#FAF8F3]/95 backdrop-blur-sm border-b border-[#E7E0D2] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#B94A2D] bg-[#B94A2D]/10 px-2.5 py-1 rounded">
              Artwork Inspector
            </span>
            <span className="hidden sm:inline text-xs text-[#78716C] font-mono">
              • {artwork.title}
            </span>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#1C1917] text-white hover:bg-[#B94A2D] flex items-center justify-center transition-colors shadow"
            aria-label="Close Lightbox"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow overflow-hidden">
          
          {/* Left Column: Interactive Artwork Canvas */}
          <div className="lg:col-span-6 p-4 sm:p-6 bg-[#F4EFE6] flex flex-col justify-between items-center border-b lg:border-b-0 lg:border-r border-[#E7E0D2] relative select-none">
            
            {/* Top Bar over Image */}
            <div className="w-full flex items-center justify-between mb-3 text-xs bg-[#FAF8F3] border border-[#E7E0D2] px-3 py-1.5 rounded-md shadow-sm z-20">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-[#1C1917] uppercase tracking-wider">
                  5.0x HD View
                </span>
              </div>
              <span className="text-[10px] text-[#78716C] italic font-serif">
                Hover canvas to inspect
              </span>
            </div>

            {/* Artwork Container */}
            <div 
              ref={imgContainerRef}
              className="relative w-full aspect-[3/4] rounded border border-[#C4B9A3] shadow-lg bg-white overflow-hidden cursor-crosshair"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsHovering(true)}
              onTouchMove={handleTouchMove}
            >
              {/* Primary Artwork Image with Uniform Red Border */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover scale-[1.12] select-none pointer-events-none"
                />
              </div>

              {/* Uniform Symmetric Madhubani Red Frame Overlay */}
              <div className="absolute inset-0 border-[7px] sm:border-[8px] border-[#B83224] pointer-events-none rounded z-10 shadow-inner" />
              <div className="absolute inset-[7px] sm:inset-[8px] border border-[#1C1917]/50 pointer-events-none z-10" />

              {/* Target Highlight Lens Rectangle */}
              {isHovering && (
                <div
                  className="absolute border-2 border-[#C87A38] bg-[#C87A38]/20 backdrop-blur-[1px] shadow-md pointer-events-none transition-all duration-75 ease-out rounded-sm"
                  style={{
                    width: `${lensWidthPercent}%`,
                    height: `${lensHeightPercent}%`,
                    left: `${lensLeftPercent}%`,
                    top: `${lensTopPercent}%`,
                  }}
                >
                  {/* Center Reticle crosshair */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-60">
                    <div className="w-2 h-0.5 bg-[#C87A38]"></div>
                    <div className="h-2 w-0.5 bg-[#C87A38] absolute"></div>
                  </div>
                </div>
              )}

              {/* Hover Instruction Overlay Hint */}
              {!isHovering && (
                <div className="absolute inset-0 bg-[#1C1917]/10 flex items-center justify-center pointer-events-none">
                  <div className="bg-[#1C1917]/90 text-white text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-md shadow-xl flex items-center gap-2 border border-[#C87A38]/40">
                    <Eye className="w-4 h-4 text-[#C87A38]" />
                    <span>Hover over artwork to inspect fine details</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Guidance Text */}
            <div className="mt-3 text-[11px] text-[#78716C] text-center font-serif italic">
              <span className="font-semibold text-[#1C1917]">Tip:</span> Move cursor over artwork to inspect fine details
            </div>

          </div>

          {/* Right Column: High-Definition Side Zoom Viewport or Standard Details */}
          <div className="lg:col-span-6 p-5 sm:p-8 space-y-5 text-left flex flex-col justify-between bg-[#FFFDF9] relative min-h-[420px]">
            
            {/* Dynamic View: High-Definition Macro Zoom Pane when hovering */}
            {isHovering ? (
              <div className="h-full flex flex-col justify-between animate-in fade-in duration-200">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#E7E0D2] pb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C87A38]"></span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#B94A2D]">
                        High-Definition Macro View
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#C87A38] bg-[#C87A38]/10 px-2 py-0.5 rounded">
                      5.0x Magnification
                    </span>
                  </div>

                  {/* High-Resolution Zoom Window Viewport */}
                  <div 
                    className="w-full aspect-[4/3] sm:aspect-[16/11] rounded border-2 border-[#C87A38] shadow-2xl bg-[#1C1917] overflow-hidden relative"
                    style={{
                      backgroundImage: `url(${artwork.image})`,
                      backgroundPosition: `${cursorPos.percentX}% ${cursorPos.percentY}%`,
                      backgroundSize: '500%',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    {/* Viewport Crosshair & Scale Grid */}
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
                      <div className="w-full h-[1px] bg-[#C87A38]"></div>
                      <div className="h-full w-[1px] bg-[#C87A38] absolute"></div>
                    </div>

                    <div className="absolute top-2 left-2 bg-[#1C1917]/85 text-[#FAF8F3] text-[10px] font-mono px-2 py-0.5 rounded border border-[#E7E0D2]/30 backdrop-blur-sm">
                      X: {Math.round(cursorPos.percentX)}% | Y: {Math.round(cursorPos.percentY)}%
                    </div>

                    <div className="absolute bottom-2 right-2 bg-[#1C1917]/85 text-[#C87A38] text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-[#C87A38]/40 backdrop-blur-sm">
                      Kalapravah 5x Macro Lens
                    </div>
                  </div>

                  <p className="text-xs text-[#5C5652] italic leading-relaxed pt-1">
                    Examining fine lines, hand-pulled mineral pigments, gold leaf work, and fiber texture of <span className="font-semibold text-[#1C1917]">{artwork.title}</span>.
                  </p>
                </div>

                {/* Switch back note */}
                <div className="bg-[#FAF8F3] border border-[#E7E0D2] p-3 rounded text-xs space-y-1.5 mt-auto">
                  <div className="font-semibold text-[#1C1917] flex items-center justify-between">
                    <span>Pigment & Texture Inspection</span>
                    <button 
                      onClick={() => setIsHovering(false)} 
                      className="text-[11px] text-[#B94A2D] hover:underline font-medium"
                    >
                      View Artwork Story
                    </button>
                  </div>
                  <p className="text-[11px] text-[#78716C]">
                    Hand-painted using fine organic brushes (kachni line style) on handmade unbleached fiber paper.
                  </p>
                </div>
              </div>
            ) : (
              /* Standard Artwork Specifications & Backstory Column */
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
                    className="w-full py-2.5 px-4 bg-transparent border border-[#C87A38] text-[#C87A38] hover:bg-[#C87A38]/10 rounded-sm font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Commission Similar Custom Artwork</span>
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
