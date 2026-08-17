import React from 'react';
import { Image as ImageIcon, Frame } from 'lucide-react';

export default function ImagePlaceholder({ title = "Artwork Frame", subtitle = "Handmade Paper", className = "" }) {
  return (
    <div 
      className={`w-full h-full bg-[#F3EFE6] border-2 border-dashed border-[#C4B9A3]/70 rounded-sm flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden group ${className}`}
    >
      {/* Background Subtle Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none text-8xl font-serif text-[#1C1917]">
        🪷
      </div>

      <div className="relative z-10 space-y-2 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-[#FAF8F3] border border-[#C4B9A3]/50 flex items-center justify-center text-[#C87A38] shadow-sm">
          <Frame className="w-5 h-5" />
        </div>

        <span className="font-serif text-sm font-bold text-[#1C1917] tracking-wider uppercase block pt-1">
          {title}
        </span>

        {subtitle && (
          <span className="text-[11px] text-[#78716C] italic block">
            {subtitle}
          </span>
        )}

        <div className="pt-2">
          <span className="inline-block px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest bg-[#FAF8F3]/90 text-[#B94A2D] rounded border border-[#C4B9A3]/40 shadow-2xl">
            Image Placeholder
          </span>
        </div>
      </div>
    </div>
  );
}
