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
            <div className="relative aspect-[3/2] overflow-hidden rounded-sm border border-[#E7E0D2] bg-[#FFFDF9]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover object-[center_28%]"
              />
            </div>
          )}

          {/* Formatted Article Body Content */}
          <div 
            className="prose prose-stone max-w-none text-[#44403C] text-sm sm:text-base leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Contextual Call to Action */}
          <div className="p-4 sm:p-5 bg-[#FFFDF9] border border-[#E7E0D2] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
            <div className="space-y-0.5">
              <h4 className="font-serif text-sm font-bold text-[#1C1917]">
                Interested in Authentic Madhubani Artworks?
              </h4>
              <p className="text-xs text-[#5C5652] font-light">
                Explore Kalapravah's curated original collection or commission a bespoke painting.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                if (onOpenCommission) onOpenCommission();
              }}
              className="px-4 py-2.5 rounded-lg bg-[#1C1917] hover:bg-[#C87A38] text-white text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer shadow-xs shrink-0"
            >
              <span>Inquire / Commission</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
