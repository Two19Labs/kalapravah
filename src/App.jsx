import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollection from './components/FeaturedCollection';
import JournalSection from './components/JournalSection';
import Footer from './components/Footer';
import ArtworkLightbox from './components/ArtworkLightbox';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  useEffect(() => {
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
      
      {/* Navbar Header */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* ARTESIA Hero Section (Where Art Inspires Life & 3D Sphere) */}
      <Hero
        onExploreArtworks={() => scrollToSection('collections')}
      />

      {/* Featured Collection Section (Timeless Expressions) */}
      <FeaturedCollection
        onSelectArtwork={(artwork) => setSelectedArtwork(artwork)}
      />

      {/* From the Journal Section (Stories Behind the Art) */}
      <JournalSection />

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
