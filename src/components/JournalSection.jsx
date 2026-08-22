import React, { useState } from 'react';
import { ArrowRight, Clock, Sparkles, BookOpen, User } from 'lucide-react';
import { ARTIST_FEATURE, BLOG_ARTICLES } from '../data/articles';
import ArticleModal from './ArticleModal';

export default function JournalSection({ onOpenCommission, onOpenArticlePage }) {
  const [activeArticle, setActiveArticle] = useState(null);

  const handleArticleClick = (article) => {
    if (onOpenArticlePage) {
      onOpenArticlePage(article.id);
    } else {
      setActiveArticle(article);
    }
  };

  return (
    <section id="blog" className="py-8 sm:py-10 lg:py-12 bg-transparent relative overflow-hidden border-b border-[#E7E0D2] scroll-mt-20 sm:scroll-mt-24">
      
      {/* Soft Decorative Ambient Spotlights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#C87A38]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#9A3412]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10 lg:space-y-12">
        
        {/* Main Section Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1917] tracking-tight">
            BLOG
          </h2>
          <p className="text-sm sm:text-base text-[#5C5652] leading-relaxed max-w-2xl mx-auto font-light">
            Discover the stories behind Kalapravah, artist Rashmi Dhar, and in-depth guides on Madhubani painting techniques, natural mineral pigments, and sacred motifs.
          </p>
          <div className="w-20 h-[2px] bg-[#C87A38] mx-auto rounded-full mt-2" />
        </div>

        {/* 2-Part Grid Division */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Part: Pinned "About The Artist" Spotlight */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 border-b border-[#E7E0D2] pb-3">
              <Sparkles className="w-4 h-4 text-[#C87A38]" />
              <span className="text-[10px] font-bold tracking-[0.24em] uppercase text-[#C87A38]">
                ARTIST SPOTLIGHT
              </span>
            </div>

            {/* Un-boxed Editorial Feature Card */}
            <a
              href={`/blog/${ARTIST_FEATURE.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleArticleClick(ARTIST_FEATURE);
              }}
              className="group cursor-pointer text-left flex flex-col justify-between transition-all p-3 sm:p-4 rounded-2xl hover:bg-[#FFFDF9]/60 border border-transparent hover:border-[#E7E0D2]/60 block"
            >
              <div>
                {/* Smooth Borderless Image Frame */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-500 bg-[#FAF8F3]">
                  <img
                    src={ARTIST_FEATURE.image}
                    alt={ARTIST_FEATURE.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#1C1917]/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[9px] font-semibold tracking-widest uppercase flex items-center gap-1.5 shadow-sm">
                    <User className="w-3 h-3 text-[#C87A38]" />
                    <span>ARTIST FEATURE</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1917] leading-snug group-hover:text-[#C87A38] transition-colors mb-2">
                  {ARTIST_FEATURE.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5C5652] leading-relaxed mb-4 line-clamp-3 font-light">
                  {ARTIST_FEATURE.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E7E0D2]/50 flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-widest text-[#78716C] uppercase flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#C87A38]" />
                  {ARTIST_FEATURE.readTime}
                </span>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#1C1917] group-hover:text-[#C87A38] transition-colors">
                  <span>READ ARTIST STORY</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </div>

          {/* Right Part: Articles Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between border-b border-[#E7E0D2] pb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#C87A38]" />
                <span className="text-[10px] font-bold tracking-[0.24em] uppercase text-[#C87A38]">
                  HERITAGE GUIDES ({BLOG_ARTICLES.length})
                </span>
              </div>
            </div>

            {/* Un-boxed Editorial Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {BLOG_ARTICLES.map((article) => (
                <a
                  key={article.id}
                  href={`/blog/${article.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleArticleClick(article);
                  }}
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
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Reader Modal */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        onOpenCommission={onOpenCommission}
      />

    </section>
  );
}
