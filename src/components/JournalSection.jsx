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
    <section id="journal" className="pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-24 md:pb-28 bg-[#FAF8F3] relative overflow-hidden border-t border-[#E7E0D2]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center space-y-3 mb-12 md:mb-16 border-b border-[#E7E0D2] pb-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-[#C87A38]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#C87A38]">
              STORIES & JOURNAL
            </span>
            <span className="w-8 h-[1px] bg-[#C87A38]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] leading-[1.1]">
            About
          </h2>

          <p className="text-xs sm:text-sm text-[#5C5652] leading-relaxed max-w-xl mx-auto">
            Discover the stories behind Kalapravah, the artist Rashmi Dhar, and in-depth guides on Madhubani painting techniques, natural mineral pigments, and sacred motifs.
          </p>
        </div>

        {/* 2-Part Grid Division */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Part: Pinned "About The Artist" Spotlight */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#C87A38] text-left">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT THE ARTIST</span>
            </div>

            <a
              href={`/blog/${ARTIST_FEATURE.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleArticleClick(ARTIST_FEATURE);
              }}
              className="art-card-frame p-5 rounded-sm group cursor-pointer text-left flex flex-col justify-between active:scale-[0.99] transition-all bg-[#FFFDF9] border border-[#E7E0D2] shadow-md hover:shadow-xl relative overflow-hidden block"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-5 border border-[#E7E0D2] bg-[#FAF8F3]">
                  <img
                    src={ARTIST_FEATURE.image}
                    alt={ARTIST_FEATURE.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#1C1917]/90 backdrop-blur-sm text-white px-2.5 py-1 rounded-xs text-[10px] font-semibold tracking-widest uppercase flex items-center gap-1.5">
                    <User className="w-3 h-3 text-[#C87A38]" />
                    <span>ARTIST FEATURE</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] leading-snug group-hover:text-[#C87A38] transition-colors mb-3">
                  {ARTIST_FEATURE.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5C5652] leading-relaxed mb-4 line-clamp-3">
                  {ARTIST_FEATURE.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7E0D2] flex items-center justify-between">
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

          {/* Right Part: Articles Grid (No Category Filter) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#78716C] text-left">
              <BookOpen className="w-3.5 h-3.5 text-[#C87A38]" />
              <span>ARTICLES & RESEARCH ({BLOG_ARTICLES.length})</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {BLOG_ARTICLES.map((article) => (
                <a
                  key={article.id}
                  href={`/blog/${article.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleArticleClick(article);
                  }}
                  className="art-card-frame p-4 rounded-sm group cursor-pointer text-left flex flex-col justify-between active:scale-[0.99] transition-all bg-[#FFFDF9] border border-[#E7E0D2] hover:shadow-lg block"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-4 border border-[#E7E0D2] bg-[#FAF8F3]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <span className="absolute bottom-2 left-2 bg-[#FAF8F3]/95 backdrop-blur-sm text-[#1C1917] text-[9px] font-semibold px-2 py-0.5 rounded-xs border border-[#E7E0D2] tracking-wider uppercase">
                        {article.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-base font-bold text-[#1C1917] leading-snug group-hover:text-[#C87A38] transition-colors mb-2 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-xs text-[#5C5652] leading-relaxed mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E7E0D2]/60 flex items-center justify-between text-[10px] font-semibold text-[#78716C] tracking-wider uppercase">
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
