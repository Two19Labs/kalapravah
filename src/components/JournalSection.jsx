import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/articles';

export default function JournalSection() {
  return (
    <section id="blog" className="pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 bg-transparent relative overflow-hidden border-b border-[#E7E0D2] scroll-mt-20 sm:scroll-mt-24">
      
      {/* Soft Decorative Ambient Spotlights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#C87A38]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#9A3412]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
        
        {/* Main Section Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1917] tracking-tight">
            BLOG
          </h2>
          <p className="text-sm sm:text-base text-[#5C5652] leading-relaxed max-w-2xl mx-auto font-light">
            Discover in-depth guides on Madhubani painting techniques, natural mineral pigments, and sacred motifs.
          </p>
          <div className="w-20 h-[2px] bg-[#C87A38] mx-auto rounded-full mt-2" />
        </div>

        {/* Heritage Guides 4-Card Responsive Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E7E0D2] pb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#C87A38]" />
              <span className="text-[10px] font-bold tracking-[0.24em] uppercase text-[#C87A38]">
                HERITAGE GUIDES & ARTICLES
              </span>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1C1917] hover:text-[#C87A38] transition-colors"
            >
              <span>Explore All Blogs ({BLOG_ARTICLES.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Un-boxed Editorial Grid (First 4 Featured Articles) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {BLOG_ARTICLES.slice(0, 4).map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.id}`}
                className="group cursor-pointer text-left flex flex-col justify-between transition-all p-3 sm:p-4 rounded-2xl hover:bg-[#FFFDF9]/60 border border-transparent hover:border-[#E7E0D2]/60 block"
              >
                <div>
                  {/* Smooth Borderless Image Frame with Glass Pill Badge */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-3 shadow-sm group-hover:shadow-md transition-shadow duration-500 bg-[#FAF8F3]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute bottom-2.5 left-2.5 bg-[#1C1917]/80 backdrop-blur-md text-white text-[9px] font-semibold px-2.5 py-1 rounded-full tracking-wider uppercase">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-base font-normal text-[#1C1917] leading-snug group-hover:text-[#C87A38] transition-colors mb-1.5 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#5C5652] leading-relaxed mb-3 line-clamp-2 font-light">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-[#E7E0D2]/50 flex items-center justify-between text-[10px] font-semibold text-[#78716C] tracking-wider uppercase">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1 group-hover:text-[#C87A38] transition-colors">
                    {article.readTime}
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Call to Action for /blog */}
          <div className="pt-4 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1C1917] hover:bg-[#C87A38] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              <span>Read More Blogs & Guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
}
