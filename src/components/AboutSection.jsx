import React from 'react';

export default function AboutSection() {
  const pillars = [
    {
      title: "Original paintings",
      description: "Every work is painted by hand on handmade paper with traditional motifs, natural pigments and no shortcuts."
    },
    {
      title: "Workshops & teaching",
      description: "Sessions for schools, institutions and enthusiasts: learning kachni line, bharni fill and the stories behind them."
    },
    {
      title: "Commissions",
      description: "Bespoke Madhubani pieces for homes, gifts and corporate spaces, composed around your own narrative."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8F3] relative overflow-hidden border-t border-[#E7E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-6 text-left">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#C87A38]">
            About Kalapravah
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] leading-[1.15] tracking-tight">
            In an age of mass production and infinite screens, the handmade has quietly taken a back seat. We are here to change that.
          </h2>

          <p className="text-base sm:text-lg text-[#5C5652] font-normal leading-relaxed">
            Kalapravah is more than an art initiative, it is a bridge between the past and the present. In a world thriving on the digital and the disposable, there is something profoundly enriching about engaging with art crafted by hand. Each piece holds a story, the collective memory and tradition of our ancestors. Our work is to keep those stories alive, and to make them reachable by everyone.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, index) => (
            <div 
              key={index}
              className="deckled-frame p-8 rounded-sm bg-[#FFFDF9] border border-[#E7E0D2] shadow-sm text-left space-y-4"
            >
              <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                {item.title}
              </h3>
              <p className="text-sm text-[#5C5652] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
