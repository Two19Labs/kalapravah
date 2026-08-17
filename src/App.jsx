import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ArtworkLightbox from './components/ArtworkLightbox';
import ArtistSection from './components/ArtistSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3] font-sans selection:bg-[#B94A2D] selection:text-white text-[#44403C]">
      
      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* Hero Section (Left: Lovable Copy, Right: 3D Art Sphere) */}
      <Hero
        onExploreGallery={() => scrollToSection('gallery')}
        onMeetArtist={() => scrollToSection('artist')}
      />

      {/* About Kalapravah Section */}
      <AboutSection />

      {/* Selected Works Gallery Section */}
      <GallerySection
        onSelectArtwork={(artwork) => setSelectedArtwork(artwork)}
      />

      {/* The Artist Section (Rashmi Dhar) */}
      <ArtistSection
        onContactStudio={() => scrollToSection('contact')}
      />

      {/* Contact & Call To Action Banner */}
      <ContactSection />

      {/* Footer */}
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
