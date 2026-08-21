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
    <div className="min-h-screen bg-transparent font-sans selection:bg-[#C87A38] selection:text-white text-[#44403C] relative">
      
      {/* 📌 FIXED BACKGROUND WATERMARKED MADHUBANI MOTIFS (FROZEN IN PLACE WHILE SCROLLING) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
        
        {/* Top-Left Mithila Mandala */}
        <div className="absolute -top-16 -left-16 w-[520px] h-[520px] opacity-[0.16] text-[#C87A38]">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="100" cy="100" r="85" strokeDasharray="5 5" />
            <circle cx="100" cy="100" r="65" />
            <circle cx="100" cy="100" r="45" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="25" />
            <path d="M100 15 L100 185 M15 100 L185 100 M40 40 L160 160 M160 40 L40 160" />
          </svg>
        </div>

        {/* Bottom-Right Sacred Sun & Lotus */}
        <div className="absolute -bottom-20 -right-20 w-[550px] h-[550px] opacity-[0.16] text-[#B94A2D]">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="100" cy="100" r="90" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="70" />
            <path d="M100 10 Q140 100 100 190 Q60 100 100 10" strokeWidth="2" />
            <path d="M10 100 Q100 140 190 100 Q100 60 10 100" strokeWidth="2" />
          </svg>
        </div>

        {/* Middle-Left Starburst Geometry */}
        <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-[420px] h-[420px] opacity-[0.12] text-[#D97706]">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.8">
            <polygon points="100,15 125,75 185,100 125,125 100,185 75,125 15,100 75,75" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="45" />
          </svg>
        </div>

      </div>
      
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
