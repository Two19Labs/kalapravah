import React from 'react';
import { Feather, Award, Heart, BookOpen, MapPin, Sparkles, Compass } from 'lucide-react';

export default function ArtistSection({ onContactStudio }) {
  const milestones = [
    {
      icon: <Award className="w-5 h-5 text-[#B94A2D]" />,
      title: "Trained Under National Awardees",
      desc: "Mentored by eminent national awardee masters of the Mithila tradition in fine Kachni and Bharni disciplines."
    },
    {
      icon: <BookOpen className="w-5 h-5 text-[#C87A38]" />,
      title: "Educator & Workshop Host",
      desc: "Conducts institutional and private workshops for schools, cultural centers, and folk art enthusiasts across India."
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#1E304B]" />,
      title: "Exhibited Across Delhi NCR",
      desc: "Participated in prestigious cultural showcases, group exhibitions, and private collection commissions."
    },
    {
      icon: <Heart className="w-5 h-5 text-[#3E5A47]" />,
      title: "Folk Art Preservation Advocate",
      desc: "Passionate champion for organic pigments, hand-deckled paper, and preserving oral storytelling in art."
    }
  ];

  return (
    <section id="artist" className="py-24 bg-[#F8F5EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Artist Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="deckled-frame p-4 rounded-sm bg-[#FFFDF9] shadow-xl">
              <div className="relative aspect-[4/5] rounded overflow-hidden bg-[#FAF8F3]">
                <img
                  src="./images/rashmi_dhar.jpg"
                  alt="Rashmi Dhar Madhubani Artist in Studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F3]/95 backdrop-blur-sm p-4 border border-[#E7E0D2] rounded text-left">
                  <h4 className="font-serif text-xl font-bold text-[#1C1917]">Rashmi Dhar</h4>
                  <p className="text-xs text-[#78716C]">Madhubani Artist & Educator • Delhi NCR</p>
                </div>
              </div>
            </div>

            {/* Floating Quote Badge */}
            <div className="absolute -bottom-6 -right-4 bg-[#1C1917] text-[#FAF8F3] p-5 rounded shadow-2xl max-w-xs text-left hidden sm:block">
              <p className="font-serif italic text-sm leading-relaxed text-[#FAF8F3]/90">
                "In a world thriving on the digital and disposable, there is something profoundly enriching about art crafted line by patient line."
              </p>
            </div>
          </div>

          {/* Bio Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B94A2D] block mb-1">
                The Artist & Practitioner
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] leading-tight">
                Turning memory into enduring beauty and healing
              </h2>
            </div>

            <div className="space-y-4 text-base text-[#5C5652] leading-relaxed">
              <p>
                <strong className="text-[#1C1917]">Rashmi Dhar</strong> is a Kashmiri Pandit, an artist, and a professional. Born and raised in Kashmir — a society long associated with scholars, art, and rich cultural traditions — she now lives and works in the Delhi NCR.
              </p>
              <p>
                Her life and practice are shaped by the memories of home, the pain and upheaval her community endured, and the conscious choice to answer that pain with creativity, continuous line work, and healing.
              </p>
              <p>
                A lifelong admirer of traditional forms, Rashmi developed a deep passion for Madhubani painting in childhood. In a world increasingly dominated by fast-paced digital trends, her commitment to hand-painted folk traditions is a refreshing tribute to continuity and craft. Having trained under eminent national awardees, her works resonate with themes of love, struggle, survival, and communal solidarity.
              </p>
            </div>

            {/* Milestones Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {milestones.map((m, i) => (
                <div key={i} className="p-4 bg-[#FFFDF9] border border-[#E7E0D2] rounded flex items-start gap-3">
                  <div className="p-2 bg-[#FAF8F3] rounded border border-[#E7E0D2] shrink-0">
                    {m.icon}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#1C1917]">{m.title}</h4>
                    <p className="text-xs text-[#78716C] mt-0.5 leading-normal">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onContactStudio}
                className="btn-primary flex items-center gap-2"
              >
                <Feather className="w-4 h-4 text-[#D99B26]" />
                <span>Invite Rashmi to Teach / Exhibit</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
