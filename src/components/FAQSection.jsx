import React, { useState, useMemo } from 'react';
import { 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  Palette, 
  Compass, 
  Package,
} from 'lucide-react';
import { FAQS, getFaqSchemaJsonLd } from '../data/faqs';

const CATEGORY_ICONS = {
  "Buying & Authenticity": ShieldCheck,
  "Styles & Heritage": Palette,
  "Custom Commissions": Compass,
  "Shipping & Care": Package,
};



export default function FAQSection() {
  const [expandedId, setExpandedId] = useState(FAQS[0]?.id || null);

  const toggleAccordion = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const jsonLdSchema = useMemo(() => {
    return JSON.stringify(getFaqSchemaJsonLd());
  }, []);

  return (
    <section 
      id="faq" 
      className="w-full pt-6 sm:pt-8 pb-12 sm:pb-16 bg-transparent relative overflow-hidden border-b border-[#E7E0D2] scroll-mt-20 sm:scroll-mt-24 z-10"
      aria-label="Frequently Asked Questions & Collector Guide"
    >
      {/* Soft Decorative Ambient Spotlights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#C87A38]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#9A3412]/5 rounded-full blur-3xl pointer-events-none" />

      {/* 🚀 AI SEO & Structured Data Injection: Google FAQPage Schema JSON-LD */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSchema }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 pt-2">
          {FAQS.map((faq) => {
            const isExpanded = expandedId === faq.id;
            const IconComp = CATEGORY_ICONS[faq.category] || Sparkles;

              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isExpanded 
                      ? 'bg-[#FFFDF9]/90 backdrop-blur-md border-[#C87A38] shadow-md ring-1 ring-[#C87A38]/20' 
                      : 'bg-[#FFFDF9]/75 backdrop-blur-md border-[#E7E0D2] hover:border-[#C87A38]/60 hover:bg-[#FFFDF9]/90 shadow-xs'
                  }`}
                >
                  {/* Question Button Header */}
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isExpanded}
                    className="w-full text-left px-5 sm:px-6 py-4.5 sm:py-5 flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-3.5 flex-1">
                      <div className={`p-2 rounded-lg shrink-0 transition-colors ${
                        isExpanded ? 'bg-[#C87A38]/10 text-[#C87A38]' : 'bg-[#FAF8F3] text-[#8C827A]'
                      }`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-base sm:text-lg font-medium text-[#1C1917] leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    
                    <div className={`p-1.5 rounded-full shrink-0 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 bg-[#C87A38] text-white' : 'bg-[#FAF8F3] text-[#5C5652]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Body Content */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1">
                      <div className="p-4 sm:p-5 rounded-lg bg-[#FAF8F3]/85 backdrop-blur-xs border-l-3 border-[#C87A38] text-sm text-[#1C1917] font-normal leading-relaxed">
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
