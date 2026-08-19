import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollection from './components/FeaturedCollection';
import JournalSection from './components/JournalSection';
import Footer from './components/Footer';
import ArtworkLightbox from './components/ArtworkLightbox';
import ArticlePage from './components/ArticlePage';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [currentArticleId, setCurrentArticleId] = useState(null);

  // Helper to parse route from URL pathname or hash
  const parseRoute = () => {
    const path = window.location.pathname;
    const hash = window.location.hash;

    if (path.startsWith('/blog/')) {
      const id = path.replace('/blog/', '').trim();
      if (id) return id;
    } else if (hash.startsWith('#/blog/')) {
      const id = hash.replace('#/blog/', '').trim();
      if (id) return id;
    }
    return null;
  };

  useEffect(() => {
    const handleRouteChange = () => {
      const articleId = parseRoute();
      setCurrentArticleId(articleId);
    };

    handleRouteChange();
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (currentArticleId) return;

    const handleScroll = () => {
      const sections = ['hero', 'collections', 'journal', 'contact'];
      const scrollPosition = window.scrollY + 160;

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const elem = document.getElementById(sections[i]);
        if (elem) {
          const top = elem.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentArticleId]);

  const scrollToSection = (id) => {
    if (currentArticleId) {
      setCurrentArticleId(null);
      window.history.pushState(null, '', `/#${id}`);
      setTimeout(() => {
        const elem = document.getElementById(id);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }

    setActiveSection(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenArticlePage = (articleId) => {
    setCurrentArticleId(articleId);
    window.history.pushState(null, '', `/blog/${articleId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentArticleId(null);
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3] font-sans selection:bg-[#C87A38] selection:text-white text-[#44403C]">
      
      {/* Navbar Header */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={(id) => scrollToSection(id)}
      />

      {/* Render Dedicated Article Page when URL is /blog/:id */}
      {currentArticleId ? (
        <ArticlePage
          articleId={currentArticleId}
          onNavigateHome={handleNavigateHome}
          onOpenArticle={handleOpenArticlePage}
          onOpenCommission={() => scrollToSection('contact')}
        />
      ) : (
        <>
          {/* ARTESIA Hero Section (Where Art Inspires Life & 3D Sphere) */}
          <Hero
            onExploreArtworks={() => scrollToSection('collections')}
          />

          {/* Featured Collection Section (Timeless Expressions) */}
          <FeaturedCollection
            onSelectArtwork={(artwork) => setSelectedArtwork(artwork)}
          />

          {/* From the Blog Section (Stories & Knowledge Base) */}
          <JournalSection
            onOpenCommission={() => scrollToSection('contact')}
            onOpenArticlePage={handleOpenArticlePage}
          />
        </>
      )}

      {/* Footer & Integrated Compact WhatsApp Contact Section */}
      <Footer
        onNavigate={(id) => scrollToSection(id)}
      />

      {/* Artwork Magnifier Lightbox Modal */}
      <ArtworkLightbox
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
        onOpenCommission={() => scrollToSection('contact')}
      />

    </div>
  );
}
// Kalapravah Fine Art Portfolio
