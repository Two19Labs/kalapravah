import React, { useState } from 'react';
import { MOTIFS } from '../data/motifs';
import { BookOpen, Sparkles, Heart, Compass } from 'lucide-react';

export default function MotifDictionary() {
  const [selectedMotif, setSelectedMotif] = useState(MOTIFS[0]);

  return (
    <section id="motifs" className="py-24 bg-[#FAF8F3] border-b border-[#E7E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C87A38] block mb-2">
            Mithila Symbolism & Lore
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917]">
            The Language of Motifs
          </h2>
          <p className="mt-3 text-base text-[#5C5652]">
            In traditional Madhubani art, no line or icon is arbitrary. Every creature, flower, and geometric border carries generations of cultural memory, blessings, and spiritual intent.
          </p>
        </div>

        {/* Motif Grid & Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Motifs Grid Selector */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {MOTIFS.map((motif) => (
              <button
                key={motif.id}
                onClick={() => setSelectedMotif(motif)}
                className={`deckled-frame p-5 text-left rounded-sm transition-all ${
                  selectedMotif.id === motif.id
                    ? 'ring-2 ring-[#B94A2D] bg-[#FFFDF9] scale-105 shadow-md'
                    : 'bg-[#FFFDF9] hover:bg-[#F8F5EE]'
                }`}
              >
                <div className="text-4xl mb-3">{motif.icon}</div>
                <h4 className="font-serif text-lg font-bold text-[#1C1917] leading-tight">
                  {motif.name}
                </h4>
                <p className="text-xs text-[#78716C] mt-1 line-clamp-1">
                  {motif.meaning}
                </p>
              </button>
            ))}
          </div>

          {/* Selected Motif Spotlight Box */}
          <div className="lg:col-span-5 deckled-frame bg-[#FFFDF9] p-8 rounded-sm text-left space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-6xl p-4 bg-[#FAF8F3] rounded-full border border-[#E7E0D2] shadow-inner">
                {selectedMotif.icon}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B94A2D]">
                  Symbol Spotlight
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                  {selectedMotif.name}
                </h3>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="inline-block px-3 py-1 bg-[#E7E0D2]/60 text-[#1C1917] text-xs font-bold uppercase tracking-wide rounded">
                Representation: {selectedMotif.meaning}
              </div>

              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed pt-2">
                {selectedMotif.symbolism}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E7E0D2] flex items-center justify-between text-xs text-[#78716C]">
              <span className="flex items-center gap-1 font-medium text-[#1C1917]">
                <BookOpen className="w-3.5 h-3.5 text-[#B94A2D]" /> Mithila Heritage lore
              </span>
              <span>Available in custom commissions</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
