import React, { useState } from 'react';
import { Layers, Sparkles, Feather, HelpCircle } from 'lucide-react';

export default function TechniqueShowcase() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeTab, setActiveTab] = useState('kachni');

  const techniques = {
    kachni: {
      name: "Kachni Style (Line Work)",
      subtitle: "Precision, Patience & Fine Hatching",
      description: "Kachni relies strictly on fine line drawing, hatching, and intricate geometric patterns. Artists draw double lines and fill the inner spaces with delicate parallel lines or cross-hatching without solid color blocks.",
      materials: ["Bamboo nib pens", "Kashmiri walnut ink", "Handmade organic paper", "Mineral black pigment"],
      symbolicMeaning: "Symbolizes clarity of thought, restraint, and patient spiritual meditation."
    },
    bharni: {
      name: "Bharni Style (Color Fill)",
      subtitle: "Vibrant Earth Dyes & Solid Color Saturated Fields",
      description: "Bharni brings Madhubani paintings to life through vivid, vibrant colors. Solid areas of deities, peacocks, and floral motifs are filled completely with organic vegetable and mineral dyes.",
      materials: ["Turmeric yellow", "Marigold ochre", "Indigo leaf dye", "Rice paste binder"],
      symbolicMeaning: "Symbolizes abundance, joy, fertility, and cosmic vitality."
    }
  };

  return (
    <section id="techniques" className="py-20 md:py-28 bg-[#FAF8F3] relative overflow-hidden border-t border-[#E7E0D2]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7E0D2]/70 border border-[#C4B9A3]/60 text-xs font-semibold text-[#1C1917]">
            <Layers className="w-3.5 h-3.5 text-[#B94A2D]" />
            <span>Folk Art Master Techniques</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] tracking-tight">
            Kachni line vs. Bharni color.
          </h2>

          <p className="text-base sm:text-lg text-[#5C5652] leading-relaxed">
            Madhubani art is categorized by distinct traditional line and color methodologies. Slide below to compare fine-line hatching against rich mineral color fill.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Slider Visual Column */}
          <div className="lg:col-span-7">
            <div className="deckled-frame p-4 rounded-sm bg-[#FFFDF9] shadow-xl relative">
              
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm select-none">
                
                {/* Right Image: Bharni Style */}
                <img 
                  src="/images/vighnaharta.jpg"
                  alt="Bharni Style Madhubani Fill"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80";
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#1C1917]/80 backdrop-blur-md text-[#FAF8F3] text-xs font-bold px-3 py-1.5 rounded-sm border border-white/20">
                  Bharni (Solid Color Fill)
                </div>

                {/* Left Image: Kachni Style (Clipped via Slider) */}
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img 
                    src="/images/madhubani_art_texture.jpg"
                    alt="Kachni Line Work Shading"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80";
                    }}
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%' }}
                  />
                  <div className="absolute top-4 left-4 bg-[#B94A2D]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-sm border border-white/20">
                    Kachni (Fine Line Hatching)
                  </div>
                </div>

                {/* Interactive Drag Handle */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-2xl flex items-center justify-center"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#1C1917] text-white flex items-center justify-center shadow-lg border-2 border-white text-xs font-bold">
                    ↔
                  </div>
                </div>

                {/* Range Input Overlay */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                />

              </div>

              {/* Slider Caption */}
              <div className="mt-3 pt-3 border-t border-[#E7E0D2]/60 flex items-center justify-between text-xs text-[#78716C]">
                <span className="flex items-center gap-1.5 font-serif italic text-[#1C1917]">
                  <Feather className="w-3.5 h-3.5 text-[#B94A2D]" />
                  Drag slider left/right to compare technique brushwork
                </span>
                <span>Authentic Organic Dyes</span>
              </div>

            </div>
          </div>

          {/* Technique Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Toggle Tabs */}
            <div className="flex gap-2 border-b border-[#E7E0D2] pb-3">
              <button
                onClick={() => setActiveTab('kachni')}
                className={`text-sm font-serif font-bold pb-2 border-b-2 transition-colors ${
                  activeTab === 'kachni'
                    ? 'border-[#B94A2D] text-[#B94A2D]'
                    : 'border-transparent text-[#78716C] hover:text-[#1C1917]'
                }`}
              >
                Kachni (Line Work)
              </button>

              <button
                onClick={() => setActiveTab('bharni')}
                className={`text-sm font-serif font-bold pb-2 border-b-2 transition-colors ${
                  activeTab === 'bharni'
                    ? 'border-[#B94A2D] text-[#B94A2D]'
                    : 'border-transparent text-[#78716C] hover:text-[#1C1917]'
                }`}
              >
                Bharni (Color Fill)
              </button>
            </div>

            {/* Active Content */}
            <div className="space-y-4 animate-fade-in">
              <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                {techniques[activeTab].name}
              </h3>

              <p className="text-xs font-semibold uppercase tracking-wider text-[#C87A38]">
                {techniques[activeTab].subtitle}
              </p>

              <p className="text-sm text-[#5C5652] leading-relaxed">
                {techniques[activeTab].description}
              </p>

              {/* Material Badges */}
              <div className="pt-3 space-y-2">
                <span className="text-xs font-semibold text-[#1C1917] block">
                  Traditional Materials & Pigments:
                </span>
                <div className="flex flex-wrap gap-2">
                  {techniques[activeTab].materials.map((mat, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 text-xs bg-[#F8F5EE] border border-[#C4B9A3]/50 text-[#44403C] rounded-sm"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cultural Meaning Callout Box */}
              <div className="p-4 bg-[#E7E0D2]/40 border-l-2 border-[#B94A2D] rounded-r-sm space-y-1">
                <span className="text-xs font-semibold text-[#1C1917] block flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B94A2D]" />
                  Symbolic Significance
                </span>
                <p className="text-xs text-[#5C5652] italic">
                  "{techniques[activeTab].symbolicMeaning}"
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
