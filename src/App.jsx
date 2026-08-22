import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArtAndArtistSection from './components/ArtAndArtistSection';
import ArtGallerySection from './components/ArtGallerySection';
import JournalSection from './components/JournalSection';
import Footer from './components/Footer';
import ArtworkLightbox from './components/ArtworkLightbox';
import MadhubaniFolkBackground from './components/MadhubaniFolkBackground';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedArtwork, setSelectedArtwork] = useState(null);

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
      
      {/* 📌 AUTHENTIC MADHUBANI FOLKLORE FIXED BACKGROUND (SURYA, PEACOCK, MATSYA, KALPAVRIKSHA) */}
      <MadhubaniFolkBackground />
      
      {/* Index Navigation Bar Header */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={(id) => scrollToSection(id)}
      />

      {/* Main Client Index Sections Flow */}
      <main className="w-full">
        
        {/* 📌 SECTION 1: HOME (Banner 3 Pics, Punchline & About Kalapravah with Center Artwork) */}
        <Hero
          onExploreArtworks={() => scrollToSection('gallery')}
          onExploreArtist={() => scrollToSection('art-artist')}
        />

        {/* 📌 SECTION 2: ART & ARTIST (About Mithila Art, About Artist Rashmi Dhar, Artwork & Profile Pic) */}
        <ArtAndArtistSection
          onContactArtist={() => scrollToSection('contact')}
        />

        {/* 📌 SECTION 3: ART GALLERY (30 Artworks + Briefs, IHC Exhibition, Workshops, Aga Khan Event) */}
        <ArtGallerySection
          onSelectArtwork={(artwork) => setSelectedArtwork(artwork)}
        />

        {/* 📌 SECTION 4: BLOG & ARTICLES (Artist Feature & Heritage Guides) */}
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
// Kalapravah Mithila Fine Art Portfolio
