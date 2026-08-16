import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechniqueShowcase from './components/TechniqueShowcase';
import GallerySection from './components/GallerySection';
import ArtworkLightbox from './components/ArtworkLightbox';
import MotifDictionary from './components/MotifDictionary';
import ArtistSection from './components/ArtistSection';
import CommissionBuilder from './components/CommissionBuilder';
import WorkshopsSection from './components/WorkshopsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [commissionOpen, setCommissionOpen] = useState(false);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EE] font-sans selection:bg-[#B94A2D] selection:text-white">
      
      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenCommission={() => setCommissionOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onExploreGallery={() => scrollToSection('gallery')}
        onMeetArtist={() => scrollToSection('artist')}
        onOpenCommission={() => setCommissionOpen(true)}
      />

      {/* Interactive Technique Comparison Slider */}
      <TechniqueShowcase />

      {/* Selected Gallery Works */}
      <GallerySection
        onSelectArtwork={(artwork) => setSelectedArtwork(artwork)}
        onOpenCommission={() => setCommissionOpen(true)}
      />

      {/* Motif Dictionary */}
      <MotifDictionary />

      {/* Artist Biography & Heritage (Rashmi Dhar) */}
      <ArtistSection
        onContactStudio={() => scrollToSection('contact')}
      />

      {/* Workshops & Teaching Masterclasses */}
      <WorkshopsSection />

      {/* Studio Contact & FAQs */}
      <ContactSection />

      {/* Footer */}
      <Footer
        onNavigate={(id) => scrollToSection(id)}
      />

      {/* Artwork Magnifier Lightbox Modal */}
      <ArtworkLightbox
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
        onOpenCommission={() => setCommissionOpen(true)}
      />

      {/* Bespoke Commission Builder Modal */}
      <CommissionBuilder
        isOpen={commissionOpen}
        onClose={() => setCommissionOpen(false)}
      />

    </div>
  );
}
