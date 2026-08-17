import React from 'react';
import { Palette, GraduationCap, Feather, ArrowUpRight, Sparkles } from 'lucide-react';

export default function AboutSection({ onExploreGallery, onOpenCommission }) {
  const pillars = [
    {
      icon: Palette,
      tag: "Traditional Folk Practice",
      title: "Original Paintings",
      description: "Every work is painted line by patient line on handmade paper using natural pigments, organic mineral dyes, and traditional folk motifs. Zero shortcuts.",
      actionText: "View Gallery Works",
      action: onExploreGallery
    },
    {
      icon: GraduationCap,
      tag: "Learning & Preservation",
      title: "Workshops & Teaching",
      description: "Immersive masterclasses for schools, cultural institutions, and art enthusiasts — learning Kachni fine lines, Bharni solid fills, and the sacred stories behind them.",
      actionText: "Explore Workshops",
      action: () => {
        const elem = document.getElementById('workshops');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: Feather,
      tag: "Personal Storytelling",
      title: "Bespoke Commissions",
      description: "Custom hand-painted Madhubani artworks composed around your family heritage, personal narrative, corporate identity, or heirloom gifts.",
      actionText: "Commission Art",
      action: onOpenCommission
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8F3] relative overflow-hidden border-t border-[#E7E0D2]">
      
      {/* Background Watermark Motifs */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 opacity-5 text-9xl font-serif pointer-events-none select-none text-[#1C1917]">
        🪷
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill & Manifesto Headline */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7E0D2]/60 border border-[#C4B9A3]/50 text-xs font-semibold text-[#1C1917]">
            <Sparkles className="w-3.5 h-3.5 text-[#B94A2D]" />
            <span>About Kalapravah</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] leading-[1.12] tracking-tight">
            In an age of mass production and infinite screens, the handmade has quietly taken a back seat. <br />
            <span className="italic font-normal text-[#B94A2D]">We are here to change that.</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#5C5652] font-normal leading-relaxed">
            Kalapravah is more than an art initiative — it is a bridge between the past and the present. In a world thriving on the digital and the disposable, there is something profoundly enriching about engaging with art crafted by hand. Each piece holds a story, the collective memory and tradition of our ancestors. Our work is to keep those stories alive, and to make them reachable by everyone.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="deckled-frame p-8 rounded-sm bg-[#FFFDF9] flex flex-col justify-between space-y-6 group hover:-translate-y-1.5 transition-all duration-300 border border-[#E7E0D2] shadow-sm hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#F8F5EE] border border-[#C4B9A3]/50 flex items-center justify-center text-[#B94A2D] group-hover:bg-[#B94A2D] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-xs font-semibold tracking-wider uppercase text-[#C87A38]">
                    {item.tag}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#5C5652] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <button 
                  onClick={item.action}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#1C1917] group-hover:text-[#B94A2D] transition-colors pt-4 border-t border-[#E7E0D2]/60"
                >
                  <span>{item.actionText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
