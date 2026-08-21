import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArtAndArtistSection from './components/ArtAndArtistSection';
import ArtGallerySection from './components/ArtGallerySection';
import Footer from './components/Footer';
import ArtworkLightbox from './components/ArtworkLightbox';

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
    <div className="min-h-screen bg-[#FAF8F3] font-sans selection:bg-[#C87A38] selection:text-white text-[#44403C]">
      
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
