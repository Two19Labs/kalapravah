import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function JournalSection() {
  const articles = [
    {
      id: 1,
      title: "Inside the Studio of Contemporary Artist Rashmi Dhar",
      date: "JUNE 8, 2026",
      image: "/images/rashmi_dhar.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "How Landscapes & Nature Motifs Influence Indian Folk Art",
      date: "MAY 24, 2026",
      image: "/images/monsoon_court.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "The Timeless Beauty of Natural Mineral Pigments & Line Work",
      date: "MAY 12, 2026",
      image: "/images/still_mind.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="journal" className="py-20 md:py-28 bg-[#FAF8F3] relative overflow-hidden border-t border-[#E7E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Title Column */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C87A38]">
              FROM THE JOURNAL
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#1C1917] leading-[1.08]">
              Stories <br />
              Behind the Art
            </h2>

            <p className="text-sm text-[#5C5652] leading-relaxed max-w-sm">
              Insights, inspiration, and in-depth stories from the world of art.
            </p>

            <div className="pt-2">
              <a
                href="#journal-articles"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-[#1C1917] hover:text-[#C87A38] transition-colors"
              >
                <span>READ JOURNAL</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right 3 Article Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="art-card-frame p-4 rounded-sm group cursor-pointer text-left flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#FAF8F3] mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      onError={(e) => {
                        e.currentTarget.src = article.fallbackImage;
                      }}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <h3 className="font-serif text-base font-bold text-[#1C1917] leading-snug group-hover:text-[#C87A38] transition-colors mb-3">
                    {article.title}
                  </h3>
                </div>

                <span className="text-[10px] font-semibold tracking-widest text-[#78716C] uppercase pt-2 border-t border-[#E7E0D2]/50">
                  {article.date}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
