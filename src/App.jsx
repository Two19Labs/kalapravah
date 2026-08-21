import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArtAndArtistSection from './components/ArtAndArtistSection';
import ArtGallerySection from './components/ArtGallerySection';
import Footer from './components/Footer';
import ArtworkLightbox from './components/ArtworkLightbox';
import MadhubaniFolkBackground from './components/MadhubaniFolkBackground';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'art-artist', 'gallery', 'exhibitions', 'contact'];
      const scrollPosition = window.scrollY + 180;

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
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
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
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
