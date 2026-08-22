import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArtAndArtistSection from './components/ArtAndArtistSection';
import ArtGallerySection from './components/ArtGallerySection';
import JournalSection from './components/JournalSection';
import Footer from './components/Footer';
import ArtworkLightbox from './components/ArtworkLightbox';
import MadhubaniFolkBackground from './components/MadhubaniFolkBackground';
import ArticlePage from './components/ArticlePage';
import BlogIndexPage from './components/BlogIndexPage';

function MainPage() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const location = useLocation();

  // Scroll to section if state contains scrollTo
  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          const navOffset = 84;
          const elementPosition = elem.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'art-artist', 'gallery', 'blog', 'contact'];
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      // Bottom of page -> contact section
      if (viewportHeight + scrollY >= documentHeight - 100) {
        setActiveSection('contact');
        return;
      }

      let active = 'home';
      for (const id of sections) {
        const elem = document.getElementById(id);
        if (elem) {
          const rect = elem.getBoundingClientRect();
          if (rect.top <= 120) {
            active = id;
          }
        }
      }
      setActiveSection(active);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const elem = document.getElementById(id);
    if (elem) {
      const navOffset = 84;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-transparent font-sans selection:bg-[#C87A38] selection:text-white text-[#44403C] relative">
      
      {/* 📌 AUTHENTIC MADHUBANI FOLKLORE FIXED BACKGROUND */}
      <MadhubaniFolkBackground />
      
      {/* Index Navigation Bar Header */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={(id) => scrollToSection(id)}
      />

      {/* Main Client Index Sections Flow */}
      <main className="w-full">
        
        {/* 📌 SECTION 1: HOME */}
        <Hero
          onExploreArtworks={() => scrollToSection('gallery')}
          onExploreArtist={() => scrollToSection('art-artist')}
        />

        {/* 📌 SECTION 2: ART & ARTIST */}
        <ArtAndArtistSection
          onContactArtist={() => scrollToSection('contact')}
        />

        {/* 📌 SECTION 3: ART GALLERY */}
        <ArtGallerySection
          onSelectArtwork={(artwork) => setSelectedArtwork(artwork)}
        />

        {/* 📌 SECTION 4: BLOG */}
        <JournalSection
          onOpenCommission={() => scrollToSection('contact')}
        />

      </main>

      {/* Footer Section */}
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/blog" element={<BlogIndexPage />} />
      <Route path="/blog/:articleId" element={<ArticlePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
