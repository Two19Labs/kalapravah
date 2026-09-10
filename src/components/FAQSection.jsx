import React, { useState, useMemo } from 'react';
import { 
  ChevronDown, 
  Sparkles, 
  Palette, 
  Home,
  BookOpen,
  Package,
  Users
} from 'lucide-react';
import { FAQS, getFaqSchemaJsonLd } from '../data/faqs';

const CATEGORY_ICONS = {
  "About Art & Brand": Sparkles,
  "Workshops & Learning": BookOpen,
  "Orders, Shipping & Care": Package,
  "Collaborations & Exhibitions": Users,
  "Home Decor & Styling": Home,
  "Madhubani & Indian Art": Palette,
};

export default function FAQSection() {
  // Support independent multi-expand in the 2-column matrix
  const [expandedIds, setExpandedIds] = useState(new Set([FAQS[0]?.id, FAQS[1]?.id]));

  const toggleAccordion = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const jsonLdSchema = useMemo(() => {
    return JSON.stringify(getFaqSchemaJsonLd());
  }, []);

  return (
    <section 
      id="faq" 
      className="w-full pt-4 sm:pt-6 pb-12 sm:pb-16 bg-transparent relative overflow-hidden border-b border-[#E7E0D2] scroll-mt-20 sm:scroll-mt-24 z-10"
      aria-label="Frequently Asked Questions: Art, Home Decor & Collector Guide"
    >
      {/* Soft Decorative Ambient Spotlights */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#C87A38]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#9A3412]/5 rounded-full blur-3xl pointer-events-none" />

      {/* 🚀 AI SEO & Structured Data Injection: Google FAQPage Schema JSON-LD */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSchema }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-5 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* 2-Column Responsive Matrix Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-start">
          {FAQS.map((faq) => {
            const isExpanded = expandedIds.has(faq.id);
            const IconComp = CATEGORY_ICONS[faq.category] || Sparkles;

            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden text-left ${
                  isExpanded 
                    ? 'bg-[#FFFDF9] border-[#C87A38] shadow-md ring-1 ring-[#C87A38]/20' 
                    : 'bg-[#FFFDF9]/80 backdrop-blur-md border-[#E7E0D2] hover:border-[#C87A38]/60 hover:bg-[#FFFDF9] shadow-xs'
                }`}
              >
                {/* Question Header Button */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3 sm:gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-3 sm:gap-3.5 flex-1">
                    <div className={`p-2 rounded-lg shrink-0 mt-0.5 transition-colors ${
                      isExpanded ? 'bg-[#C87A38]/10 text-[#C87A38]' : 'bg-[#FAF8F3] text-[#8C827A]'
                    }`}>
                      <IconComp className="w-4 h-4" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-serif text-sm sm:text-base font-semibold text-[#1C1917] leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  
                  <div className={`p-1.5 rounded-full shrink-0 mt-0.5 transition-transform duration-200 ${
                    isExpanded ? 'rotate-180 bg-[#C87A38] text-white shadow-xs' : 'bg-[#FAF8F3] text-[#5C5652]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Smooth Expansion Body Content */}
                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-5 pt-0">
                    <div className="p-3.5 sm:p-4 rounded-lg bg-[#FAF8F3]/90 border-l-2 border-[#C87A38] text-xs sm:text-sm text-[#3E3834] leading-relaxed font-light">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
