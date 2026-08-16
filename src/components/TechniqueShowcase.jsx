import React, { useState } from 'react';
import { Feather, Layers, Compass, CheckCircle2 } from 'lucide-react';

export default function TechniqueShowcase() {
  const [activeTab, setActiveTab] = useState('kachni');

  const techniques = [
    {
      id: 'kachni',
      name: 'Kachni (Line Work)',
      subtitle: 'Precision of fine hatched lines',
      image: '/images/monsoon_court.jpg',
      description: 'Kachni relies entirely on fine, hatched black ink lines. Every shadow, texture, and leaf vein is constructed line by patient line without any solid color fills.',
      details: [
        'Drawn with fine nib ink pens and fine brushes',
        'Requires extreme concentration and steady rhythm',
        'Exclusively relies on cross-hatching and double contours',
        'Traditional to the Mithila region for sacred rituals'
      ],
      color: '#1E304B'
    },
    {
      id: 'bharni',
      name: 'Bharni (Color Fill)',
      subtitle: 'Vibrant natural pigment washes',
      image: '/images/vighnaharta.jpg',
      description: 'Bharni style features bold double-line black borders filled with vivid natural dyes and pigments derived from turmeric, indigo, madder red, and lampblack.',
      details: [
        'Rich color fills within bold black ink outlines',
        'Pigments sourced from organic plants, minerals, and ochre',
        'Depicts mythological narratives, deities, and court scenes',
        'High visual warmth and timeless vibrant presence'
      ],
      color: '#B94A2D'
    },
    {
      id: 'godna',
      name: 'Godna (Tattoo Mandalas)',
      subtitle: 'Ancestral tattoo line patterning',
      image: '/images/sonepur_wheel.jpg',
      description: 'Godna style preserves the ancient tattoo traditions of rural Bihar. It utilizes concentric mandala wheels, stippling, and symbolic wildlife motifs.',
      details: [
        'Inspired by traditional women’s protective body tattoos',
        'Rhythmic circular mandalas with geometric borders',
        'Monochrome or dual-tone natural pigment palettes',
        'Deeply symbolic of protection and ancestral memory'
      ],
      color: '#C87A38'
    }
  ];

  const current = techniques.find(t => t.id === activeTab);

  return (
    <section className="py-20 bg-[#FAF8F3] border-y border-[#E7E0D2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B94A2D] block mb-2">
            The Three Mithila Traditions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
            Crafted line by patient line
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5C5652]">
            In an age of mass production, every Kalapravah painting is created by hand on handmade paper using three distinct Madhubani disciplines.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10 flex-wrap">
          {techniques.map((tech) => (
            <button
              key={tech.id}
              onClick={() => setActiveTab(tech.id)}
              className={`px-5 py-3 rounded text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === tech.id
                  ? 'bg-[#1C1917] text-[#FAF8F3] shadow-md scale-105'
                  : 'bg-[#FFFDF9] text-[#44403C] hover:bg-[#E7E0D2]/50 border border-[#E7E0D2]'
              }`}
            >
              <Feather className={`w-4 h-4 ${activeTab === tech.id ? 'text-[#D99B26]' : 'text-[#78716C]'}`} />
              <span>{tech.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="deckled-frame bg-[#FFFDF9] p-6 sm:p-10 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded overflow-hidden shadow-inner bg-[#FAF8F3]">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#1C1917]/85 text-[#FAF8F3] text-xs px-3 py-1.5 rounded backdrop-blur-sm">
                  {current.name}
                </div>
              </div>
            </div>

            {/* Description Column */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C87A38]">
                  {current.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
                  {current.name}
                </h3>
              </div>

              <p className="text-base text-[#5C5652] leading-relaxed">
                {current.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {current.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B94A2D] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#44403C] font-medium">{detail}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
