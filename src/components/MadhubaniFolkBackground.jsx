import React from 'react';

/**
 * Authentic Madhubani Twin Peacocks Canvas Fixed Background
 * Guaranteed 100% full screen coverage (scaled 108% to crop out image border framing for seamless wall-to-wall coverage)
 * Rendered at an ultra-subtle, elegant opacity level (14% opacity + 55% parchment veil overlay)
 */
export default function MadhubaniFolkBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none w-screen h-screen">
      
      {/* 1. SOFT TRANSLUCENT PARCHMENT VEIL OVERLAY FOR TEXT READABILITY */}
      <div className="absolute inset-0 bg-[#FAF8F3]/55 z-10" />

      {/* 2. AUTHENTIC TWIN PEACOCKS MADHUBANI CANVAS ARTWORK (100% WALL-TO-WALL COVERAGE) */}
      <img
        src="/images/madhubani_tapestry_bg.jpg"
        alt="Madhubani Twin Peacocks Canvas Background"
        className="absolute inset-0 w-full h-full object-cover object-center scale-108 sm:scale-110 opacity-[0.14] mix-blend-multiply z-0"
      />

    </div>
  );
}
