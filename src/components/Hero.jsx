import React, { useState, useEffect } from 'react';
import { 
  ArrowDownRight, 
  Sparkles, 
  Feather, 
  Layers, 
  ShieldCheck, 
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import LunarGravityCard from './ui/lunar-gravity-card';

export default function Hero({ onExploreArtworks, onExploreArtist }) {
  // 3 Featured Banner Artworks
  const spotlightArtworks = [
    {
      id: 'pic1',
      title: 'Dashavatara: 10 Avatars of Vishnu',
      style: 'Classic Bharni & Mineral Pigment',
      image: '/images/artwork_dashavatara.jpg',
      caption: 'Original Hand-Painted Canvas on Handmade Paper',
      tag: 'FEATURED MASTERPIECE'
    },
    {
      id: 'pic2',
      title: 'Gaja Leela: Krishna & The Royal Elephant',
      style: 'Bharni & Kachni Shading with Organic Dyes',
      image: '/images/artwork_gaja_leela.jpg',
      caption: 'Heritage Mithila Folklore Painting',
      tag: 'POPULAR CANVAS'
    },
    {
      id: 'pic3',
      title: 'Radha Krishna: Pure Kachni Mandala',
      style: 'Monochrome Kachni Fine Line Hatching',
      image: '/images/artwork_kachni_mandala.jpg',
      caption: 'Handmade Cotton Fiber Masterpiece',
      tag: 'KACHNI SPECIAL'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-fading slideshow every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % spotlightArtworks.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [spotlightArtworks.length]);

  return (
    <section id="home" className="pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-10 lg:pb-12 bg-transparent relative overflow-hidden border-b border-[#E7E0D2]">
      
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C87A38]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#B94A2D]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-14 lg:space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. ASYMMETRIC EDITORIAL FINE ART HERO (TYPOGRAPHY + FLOATING SHOWCASE)    */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY & CTAS */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">

            {/* High-Impact Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] leading-[1.12]">
                Traditional Elegance <br className="hidden sm:inline" />
                For <span className="text-[#C87A38]">Contemporary</span> Spaces
              </h1>
              <div className="w-20 h-[3px] bg-[#C87A38] rounded-full" />
            </div>

            {/* Concise Mission & Value Narrative */}
            <p className="text-sm sm:text-base lg:text-lg text-[#5C5652] leading-relaxed font-light max-w-xl">
              Bringing the ancient storytelling, rich pigments, and meditative line work of traditional <strong>Madhubani & Mithila fine art</strong> directly into modern living spaces and curated art collections.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={onExploreArtworks}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#1C1917] hover:bg-[#C87A38] text-white text-xs font-bold tracking-widest uppercase transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer w-full sm:w-auto"
              >
                <span>EXPLORE 30+ ARTWORKS</span>
                <ArrowDownRight className="w-4 h-4 text-[#F59E0B]" />
              </button>

              <button
                onClick={onExploreArtist}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFFDF9] hover:bg-[#F3EFE6] text-[#1C1917] border border-[#E7E0D2] text-xs font-bold tracking-widest uppercase transition-all shadow-sm active:scale-95 cursor-pointer w-full sm:w-auto"
              >
                <span>ABOUT THE ARTIST</span>
              </button>
            </div>

            {/* Trust & Craft Stats Counter */}
            <div className="pt-6 border-t border-[#E7E0D2]/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] block">30+</span>
                <span className="text-[10px] sm:text-xs text-[#78716C] uppercase font-medium tracking-wider">Curated Canvases</span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] block">100%</span>
                <span className="text-[10px] sm:text-xs text-[#78716C] uppercase font-medium tracking-wider">Hand Painted</span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] block">Natural</span>
                <span className="text-[10px] sm:text-xs text-[#78716C] uppercase font-medium tracking-wider">Archival Dyes</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: FLOATING ARTWORK SHOWCASE FRAME */}
          <div className="lg:col-span-6 relative">
            
            {/* Outer Deckled-Edge Art Card Frame */}
            <div className="deckled-frame bg-[#FFFDF9] border-2 border-[#C87A38]/30 rounded-2xl p-3 sm:p-4 shadow-2xl relative overflow-hidden group">
              
              {/* Image Frame Container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-xl overflow-hidden bg-[#0F0D0C]">
                {spotlightArtworks.map((banner, index) => (
                  <div
                    key={banner.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Soft Vignette Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0C]/90 via-[#0F0D0C]/20 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white" />
                  </div>
                ))}

                {/* Floating Gold Authenticity Emblem Badge */}
                <div className="absolute top-3 left-3 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1C1917]/90 text-[#F59E0B] border border-[#F59E0B]/40 text-[10px] font-bold tracking-widest uppercase shadow-lg backdrop-blur-md">
                  <Award className="w-3 h-3" />
                  <span>{spotlightArtworks[currentSlide].tag}</span>
                </div>

                {/* Arrow Controls inside image frame */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + spotlightArtworks.length) % spotlightArtworks.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#0F0D0C]/75 hover:bg-[#C87A38] text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                  aria-label="Previous artwork"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % spotlightArtworks.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#0F0D0C]/75 hover:bg-[#C87A38] text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                  aria-label="Next artwork"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Title & Caption Info Footer */}
              <div className="pt-3 px-1 text-left flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#1C1917]">
                    {spotlightArtworks[currentSlide].title}
                  </h3>
                  <p className="text-xs text-[#78716C] font-medium">
                    {spotlightArtworks[currentSlide].style}
                  </p>
                </div>

                {/* Thumbnail Selector Pills */}
                <div className="flex items-center gap-1.5 shrink-0">
                  {spotlightArtworks.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === currentSlide ? 'w-6 bg-[#C87A38]' : 'w-2 bg-[#E7E0D2] hover:bg-[#C4B9A3]'
                      }`}
                      aria-label={`Select artwork ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. WELCOME NARRATIVE & HERITAGE PILLARS                                  */}
        {/* ========================================================================= */}
        <div className="space-y-12 pt-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] font-bold tracking-[0.24em] text-[#C87A38] uppercase block">
              WELCOME TO KALAPRAVAH
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] tracking-tight">
              Where Heritage Meets Contemporary Calm
            </h2>
            <p className="text-sm sm:text-base text-[#5C5652] font-light leading-relaxed">
              In a fast-paced world, art offers a much-needed sanctuary: a moment of pause and peace. Drawing inspiration from pristine nature, ancient rituals, customs, and deep-rooted spirituality, every brushstroke is designed to soothe the soul.
            </p>
            <div className="w-16 h-[2px] bg-[#C87A38] mx-auto rounded-full mt-2" />
          </div>

          {/* 3 Non-Boxy Editorial Craft Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-5xl mx-auto text-left pt-2">
            
            {/* Pillar 1 */}
            <div className="space-y-3.5 border-t-2 border-[#C87A38]/30 pt-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C87A38]/10 flex items-center justify-center text-[#C87A38] shrink-0">
                  <Feather className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#C87A38] uppercase">
                  PIGMENTS & PAPER
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                Archival Materials
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5652] leading-relaxed font-light">
                Painted on handmade cotton fiber paper using natural organic pigments, indigo, turmeric washes, and charcoal soot ink for generations of longevity.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="space-y-3.5 border-t-2 border-[#B94A2D]/30 pt-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#B94A2D]/10 flex items-center justify-center text-[#B94A2D] shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#B94A2D] uppercase">
                  TRADITIONAL STYLES
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                Authentic Lineage
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5652] leading-relaxed font-light">
                Mastery across traditional Mithila categories including vibrant <strong>Bharni</strong> color fills, fine line <strong>Kachni</strong> hatching, and sacred <strong>Godna</strong> motifs.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="space-y-3.5 border-t-2 border-[#D97706]/30 pt-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D97706]/10 flex items-center justify-center text-[#D97706] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#D97706] uppercase">
                  DIRECT CREATOR
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                Artist Studio
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5652] leading-relaxed font-light">
                Created directly by artist Rashmi Dhar in New Delhi. Each artwork includes a hand-signed certificate of authenticity and story document.
              </p>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. ABOUT KALAPRAVAH (BRAND MISSION & CELESTIAL SPHERE)                   */}
        {/* ========================================================================= */}
        <div id="about" className="pt-8 sm:pt-10 lg:pt-12 mt-8 sm:mt-10 lg:mt-12 border-t border-[#E7E0D2]/60 space-y-6 sm:space-y-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-1.5">
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#C87A38] block">
              THE KALAPRAVAH PHILOSOPHY
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
              About KALAPRAVAH
            </h2>
            <div className="w-16 h-[2.5px] bg-[#C87A38] mx-auto rounded-full" />
          </div>

          {/* Narrative Flow with 3D Sphere Highlight */}
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Elegant Un-Boxed Editorial Introduction */}
            <div className="max-w-3xl mx-auto text-center space-y-4 px-4">
              <p className="font-serif text-base sm:text-lg text-[#292524] leading-relaxed font-normal">
                In an age where mass production and digital art dominate the landscape, the intrinsic value of handmade art seems to take a backseat. Kalapravah as an art venture is on a mission to change that narrative. By promoting handmade art, Kalapravah connects individuals to their cultural roots.
              </p>
              <p className="font-serif text-base sm:text-lg text-[#292524] leading-relaxed font-normal">
                At its core, Kalapravah is more than just an art initiative; it serves as a bridge between the past and the present. In a world thriving on the digital and the disposable, there is something profoundly enriching about engaging with art that has been crafted by hand. Each piece tells a story, holding within it the collective memories and traditions of our ancestors. The initiative aims to keep these stories alive, making them accessible to everyone.
              </p>
            </div>

            {/* 3D CELESTIAL GLOBE SPHERE IN CENTER CONTAINER */}
            <div className="flex flex-col items-center justify-center p-2 space-y-5 text-center">
              
              {/* Circular Background Container with floating "Click" tag */}
              <div className="relative">
                <div className="w-[260px] h-[260px] sm:w-[330px] sm:h-[330px] lg:w-[360px] lg:h-[360px] rounded-full bg-[#FFFDF9] border-2 border-[#C87A38]/40 shadow-2xl relative overflow-hidden flex items-center justify-center">
                  <LunarGravityCard
                    className="w-full h-full"
                    artTextureUrl="/images/sphere_madhubani.jpg"
                    ringColor="#C87A38"
                    hintText=""
                  />
                </div>

                {/* Short floating "Click" tag near the sphere */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none bg-[#1C1917]/95 text-[#F59E0B] px-3.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-[#F59E0B]/50 shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse shrink-0" />
                  <span>Click</span>
                </div>
              </div>

              {/* Attractive High-Contrast Editorial Caption Card */}
              <div className="bg-[#FFFDF9] border border-[#E7E0D2] shadow-lg rounded-2xl px-5 sm:px-8 py-3.5 sm:py-4 max-w-xl mx-auto flex items-center justify-center gap-3 backdrop-blur-md transition-all hover:border-[#C87A38]">
                <Sparkles className="w-5 h-5 text-[#C87A38] shrink-0" />
                <p className="text-xs sm:text-sm lg:text-[15px] text-[#1C1917] font-serif italic leading-relaxed text-center font-normal">
                  In Madhubani folklore, celestial bodies like the <strong className="text-[#C87A38] not-italic font-bold">Sun, Moon, and Stars</strong> represent timeless cosmic balance and spiritual harmony.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
