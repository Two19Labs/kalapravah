import React, { useState } from 'react';
import { BookOpen, Sparkles, Feather } from 'lucide-react';

export default function MotifDictionary() {
  const [selectedMotif, setSelectedMotif] = useState(0);

  const motifs = [
    {
      name: "Peacock (Mayur)",
      hindiName: "मयूर",
      symbolism: "Grace, Love & Celestial Joy",
      description: "In Madhubani folklore, peacocks represent divine romance and monsoon renewal. Double peacocks facing each other signify marital harmony and eternal friendship.",
      colorPalette: "Indigo Blue & Natural Ochre",
      icon: "🦚"
    },
    {
      name: "Lotus (Kamal)",
      hindiName: "कमल",
      symbolism: "Purity, Divine Wisdom & Rebirth",
      description: "The lotus blooms unblemished from muddy waters, symbolizing spiritual enlightenment, purity of heart, and cosmic creation across traditional Mithila homes.",
      colorPalette: "Terracotta Red & Rice White",
      icon: "🪷"
    },
    {
      name: "Fish (Matsya)",
      hindiName: "मत्स्य",
      symbolism: "Fertility, Abundance & Good Luck",
      description: "Paired fishes represent life force, water abundance, and continuous prosperity. Traditionally painted on Kohbar marriage chamber walls.",
      colorPalette: "Ochre Yellow & Natural Ink",
      icon: "🐟"
    },
    {
      name: "Elephant (Gaja)",
      hindiName: "गज",
      symbolism: "Royal Dignity, Strength & Protection",
      description: "Associated with Lord Ganesha and Goddess Lakshmi, the elephant brings royal grace, stability, and protection against negative energies.",
      colorPalette: "Charcoal Black & Turmeric",
      icon: "🐘"
    },
    {
      name: "Sun (Surya)",
      hindiName: "सूर्य",
      symbolism: "Cosmic Vitality, Truth & Illumination",
      description: "The central solar deity whose rays sustain all life. Drawn with intricate facial expressions and radiate geometric sunbeams.",
      colorPalette: "Bright Ochre & Terracotta",
      icon: "☀️"
    }
  ];

  return (
    <section id="motifs" className="py-20 md:py-28 bg-[#FAF8F3] relative overflow-hidden border-t border-[#E7E0D2]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7E0D2]/70 border border-[#C4B9A3]/60 text-xs font-semibold text-[#1C1917]">
            <BookOpen className="w-3.5 h-3.5 text-[#B94A2D]" />
            <span>Visual Vocabulary & Memory</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] tracking-tight">
            Motif Dictionary
          </h2>

          <p className="text-base sm:text-lg text-[#5C5652] leading-relaxed">
            Every stroke and symbol in Madhubani art carries centuries of cultural memory and spiritual symbolism.
          </p>
        </div>

        {/* Motif Selector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
          {motifs.map((motif, index) => (
            <button
              key={index}
              onClick={() => setSelectedMotif(index)}
              className={`p-5 rounded-sm border text-left transition-all flex flex-col justify-between space-y-3 ${
                selectedMotif === index
                  ? 'bg-[#1C1917] text-[#FAF8F3] border-[#1C1917] shadow-xl -translate-y-1'
                  : 'bg-[#FFFDF9] text-[#1C1917] border-[#E7E0D2] hover:border-[#C4B9A3] hover:bg-[#F8F5EE]'
              }`}
            >
              <div className="text-3xl">{motif.icon}</div>
              <div>
                <span className="text-[10px] font-semibold tracking-wider uppercase opacity-75 block">
                  {motif.hindiName}
                </span>
                <h3 className="font-serif text-lg font-bold">
                  {motif.name}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {/* Active Motif Detailed Card */}
        <div className="deckled-frame p-8 md:p-12 rounded-sm bg-[#FFFDF9] border border-[#E7E0D2] shadow-xl max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            <div className="text-7xl p-8 bg-[#FAF8F3] rounded-full border border-[#E7E0D2] shrink-0">
              {motifs[selectedMotif].icon}
            </div>

            <div className="space-y-4 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C87A38]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{motifs[selectedMotif].symbolism}</span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-[#1C1917]">
                {motifs[selectedMotif].name} ({motifs[selectedMotif].hindiName})
              </h3>

              <p className="text-base text-[#5C5652] leading-relaxed">
                {motifs[selectedMotif].description}
              </p>

              <div className="pt-3 border-t border-[#E7E0D2]/60 flex items-center justify-between text-xs text-[#78716C]">
                <span className="font-semibold text-[#1C1917]">
                  Traditional Color Palette: {motifs[selectedMotif].colorPalette}
                </span>
                <span className="font-serif italic text-[#B94A2D]">
                  Hand-painted Line Motif
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
