import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Clock, ArrowRight, BookOpen, Sparkles, User, Tag, ChevronRight } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/articles';
import Navbar from './Navbar';
import Footer from './Footer';
import MadhubaniFolkBackground from './MadhubaniFolkBackground';

export default function BlogIndexPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allArticles = BLOG_ARTICLES;

  const categories = [
    'All',
    'Art History & Styles',
    'Techniques',
    'Motifs & Symbolism'
  ];

  // Dynamic SEO Meta Tags & Schema Injection
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Kalapravah Blog | Mithila & Madhubani Art History, Techniques & Motif Guides';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = 'Explore the complete Kalapravah journal: in-depth articles on Madhubani art history, 5 core styles, natural mineral pigments, artist Rashmi Dhar, and sacred Mithila symbolism.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://kalapravah.art/blog';

    // Inject JSON-LD Schema for Blog Index
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://kalapravah.art/blog"
      },
      "name": "Kalapravah Fine Art Journal & Blog",
      "description": "Authentic research, guides, and stories on traditional Madhubani and Mithila art by Rashmi Dhar.",
      "publisher": {
        "@type": "Organization",
        "name": "Kalapravah Mithila Art Gallery",
        "logo": {
          "@type": "ImageObject",
          "url": "https://kalapravah.art/images/logo-emblem.png"
        }
      }
    };

    let scriptTag = document.getElementById('json-ld-blog-index-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-blog-index-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(schemaData);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = originalTitle;
      if (scriptTag) scriptTag.remove();
    };
  }, []);

  // Filtering Logic
  const filteredArticles = allArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      article.title.toLowerCase().includes(q) || 
      (article.subtitle && article.subtitle.toLowerCase().includes(q)) || 
      (article.excerpt && article.excerpt.toLowerCase().includes(q)) ||
      (article.seoKeywords && article.seoKeywords.some(k => k.toLowerCase().includes(q)));
    return matchesCategory && matchesSearch;
  });

  const handleNavClick = (sectionId) => {
    navigate('/', { state: { scrollTo: sectionId } });
  };

  return (
    <div className="min-h-screen bg-transparent font-sans selection:bg-[#C87A38] selection:text-white text-[#44403C] relative">
      
      {/* Background Canvas Texture */}
      <MadhubaniFolkBackground />

      {/* Header Navigation */}
      <Navbar
        activeSection="blog"
        setActiveSection={handleNavClick}
      />

      <main className="min-h-screen pt-24 sm:pt-28 pb-20 text-left relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          
          {/* Breadcrumb Trail */}
          <nav className="flex items-center gap-2 text-[11px] font-medium text-[#78716C] uppercase tracking-wider">
            <span className="hover:text-[#1C1917] cursor-pointer" onClick={() => handleNavClick('home')}>Home</span>
            <span>/</span>
            <span className="text-[#C87A38] font-semibold">Blog Archive</span>
          </nav>

          {/* Main Banner Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C1917]/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5 text-[#C87A38]" />
              <span>KALAPRAVAH JOURNAL & ARCHIVE</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1917] tracking-tight">
              THE BLOG
            </h1>

            <p className="text-sm sm:text-base text-[#5C5652] leading-relaxed max-w-2xl mx-auto font-light">
              Explore our complete collection of heritage articles, pigment guides, traditional line art styles, and artist Rashmi Dhar's studio journal.
            </p>

            <div className="w-20 h-[2px] bg-[#C87A38] mx-auto rounded-full mt-2" />
          </div>

          {/* Search & Category Filter Bar */}
          <div className="bg-[#FFFDF9]/80 backdrop-blur-md border border-[#E7E0D2] rounded-2xl p-4 sm:p-6 shadow-sm space-y-4 max-w-4xl mx-auto">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#78716C] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by keyword (e.g. Kachni, Turmeric, Ramayana, Rashmi Dhar)..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F3] border border-[#E7E0D2] focus:border-[#C87A38] rounded-xl text-xs sm:text-sm text-[#1C1917] placeholder:text-[#78716C] focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-[#E7E0D2]/60">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#1C1917] text-white shadow-sm'
                        : 'bg-[#FAF8F3] text-[#5C5652] hover:bg-[#F3EFE6] border border-[#E7E0D2]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <span className="text-[11px] font-semibold text-[#78716C] uppercase tracking-wider">
                {filteredArticles.length} {filteredArticles.length === 1 ? 'Article' : 'Articles'} Found
              </span>
            </div>

          </div>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/blog/${article.id}`}
                  className="group cursor-pointer text-left flex flex-col justify-between transition-all p-4 rounded-2xl bg-[#FFFDF9]/70 hover:bg-[#FFFDF9] border border-transparent hover:border-[#E7E0D2] shadow-xs hover:shadow-md block"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-500 bg-[#FAF8F3]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <span className="absolute bottom-2.5 left-2.5 bg-[#1C1917]/85 backdrop-blur-md text-white text-[9px] font-semibold px-2.5 py-1 rounded-full tracking-wider uppercase">
                        {article.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-normal text-[#1C1917] leading-snug group-hover:text-[#C87A38] transition-colors mb-2 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5C5652] leading-relaxed mb-4 line-clamp-3 font-light">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E7E0D2]/60 flex items-center justify-between text-[10px] font-semibold text-[#78716C] tracking-wider uppercase">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1 group-hover:text-[#C87A38] transition-colors">
                      {article.readTime}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#FFFDF9]/60 border border-[#E7E0D2] rounded-2xl space-y-3">
              <p className="text-base font-serif font-semibold text-[#1C1917]">No articles matched your search.</p>
              <p className="text-xs text-[#5C5652]">Try adjusting your search query or selecting a different category filter.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-2 text-xs font-bold text-[#C87A38] hover:underline uppercase tracking-wider cursor-pointer"
              >
                Clear Search Filters
              </button>
            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavClick} />

    </div>
  );
}
