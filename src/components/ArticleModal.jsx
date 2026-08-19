import React, { useEffect } from 'react';
import { X, Calendar, Clock, User, Share2, ArrowRight, Check } from 'lucide-react';

export default function ArticleModal({ article, onClose, onOpenCommission }) {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    if (!article) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [article, onClose]);

  if (!article) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#1C1917]/70 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-[#FAF8F3] border border-[#E7E0D2] rounded-md shadow-2xl max-w-4xl w-full my-auto overflow-hidden relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Close Controls */}
        <div className="sticky top-0 z-20 bg-[#FAF8F3]/95 backdrop-blur-sm border-b border-[#E7E0D2] px-6 py-4 flex items-center justify-between">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#C87A38]">
            {article.category || 'BLOG ARTICLE'}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-[#F3EFE6] text-[#5C5652] hover:text-[#1C1917] transition-colors flex items-center gap-1.5 text-xs font-medium"
              title="Share article link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Link Copied' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#F3EFE6] text-[#1C1917] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="px-6 sm:px-10 py-8 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Article Header */}
          <div className="space-y-4">
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C1917] leading-[1.2]">
              {article.title}
            </h1>

            {article.subtitle && (
              <p className="text-base sm:text-lg text-[#5C5652] font-normal leading-relaxed">
                {article.subtitle}
              </p>
            )}

            {/* Author & Publication Metadata */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 pb-4 text-xs font-medium text-[#78716C] border-b border-[#E7E0D2]">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#C87A38]" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C87A38]" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C87A38]" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Hero Image */}
          {article.image && (
            <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-sm border border-[#E7E0D2] bg-[#FFFDF9]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Formatted Article Body Content */}
          <div 
            className="prose prose-stone max-w-none text-[#44403C] text-sm sm:text-base leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* SEO Focus Keyword Badges */}
          {article.seoKeywords && article.seoKeywords.length > 0 && (
            <div className="pt-6 border-t border-[#E7E0D2] space-y-3">
              <span className="text-[10px] font-semibold tracking-widest text-[#78716C] uppercase block">
                EXPLORE TOPICS & KEYWORDS
              </span>
              <div className="flex flex-wrap gap-2">
                {article.seoKeywords.map((kw, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#FFFDF9] border border-[#E7E0D2] rounded-full text-xs text-[#5C5652]"
                  >
                    #{kw.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Contextual Call to Action */}
          <div className="p-6 bg-[#FFFDF9] border border-[#E7E0D2] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <div>
              <h4 className="font-serif text-base font-bold text-[#1C1917]">
                Interested in Authentic Madhubani Artworks?
              </h4>
              <p className="text-xs text-[#5C5652] mt-1">
                Explore Kalapravah's curated original collection or commission a bespoke painting for your space.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                if (onOpenCommission) onOpenCommission();
              }}
              className="btn-primary text-xs font-semibold px-5 py-2.5 whitespace-nowrap flex items-center gap-2"
            >
              <span>Inquire / Commission Art</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
