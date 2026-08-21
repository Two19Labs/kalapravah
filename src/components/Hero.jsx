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
    <section id="home" className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 bg-transparent relative overflow-hidden border-b border-[#E7E0D2]">
      
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C87A38]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#B94A2D]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-28">
        
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
        {/* 3. ABOUT KALAPRAVAH (MISSION & CENTERED ARTWORK)                         */}
        {/* ========================================================================= */}
        <div id="about" className="pt-10 border-t border-[#E7E0D2] space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] tracking-tight">
              About KALAPRAVAH
            </h2>
            <div className="w-20 h-[3px] bg-[#C87A38] mx-auto rounded-full mt-2" />
          </div>

          {/* Narrative Flow with Artwork in Center */}
          <div className="max-w-4xl mx-auto space-y-10">
            
            {/* Elegant Un-Boxed Editorial About Introduction */}
            <div className="max-w-3xl mx-auto text-center space-y-4 px-4 pt-2 pb-2">
              <p className="font-serif text-base sm:text-xl text-[#292524] leading-relaxed font-normal max-w-2xl mx-auto">
                In an age where mass production and digital art dominate the landscape, the intrinsic value of handmade art seems to take a backseat. Kalapravah is on a mission to change that narrative by connecting individuals back to their cultural roots through authentic handmade Mithila fine art.
              </p>
            </div>

            {/* 📍 DUAL FEATURED MEDIA IN STORY: HERITAGE ARTWORK (LEFT) + 3D CELESTIAL SPHERE (RIGHT) */}
            <div className="relative py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
                
                {/* LEFT COLUMN: FEATURED HERITAGE ARTWORK */}
                <div className="deckled-frame bg-[#FFFDF9] border-2 border-[#C87A38]/40 p-5 sm:p-7 rounded-2xl shadow-xl text-center space-y-4 flex flex-col justify-between">
                  <span className="text-[11px] font-bold tracking-[0.25em] text-[#C87A38] uppercase block">
                    FEATURED HERITAGE ARTWORK
                  </span>

                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#E7E0D2] bg-[#FAF8F3] group shadow-inner">
                    <img
                      src="/images/artwork_gaja_leela.jpg"
                      alt="Gaja Leela & Krishna: Kalapravah Fine Artwork by Rashmi Dhar"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                      <span className="text-xs font-serif text-white font-medium tracking-wide">
                        Gaja Leela & Krishna: Original Hand-Painted Canvas
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1 text-center">
                    <h4 className="font-serif text-xl font-bold text-[#1C1917]">
                      Gaja Leela & Krishna (Bharni & Kachni Shading)
                    </h4>
                    <p className="text-xs text-[#78716C] max-w-lg mx-auto font-medium">
                      Hand-painted by Rashmi Dhar using raw turmeric ochre, gold powder wash, and carbon soot ink on archival cotton fiber paper.
                    </p>
                  </div>
                </div>

                {/* RIGHT COLUMN: JUST THE 3D CELESTIAL GLOBE SPHERE IN WHITE CIRCULAR CONTAINER */}
                <div className="flex flex-col items-center justify-center p-2 sm:p-4 space-y-4 text-center">
                  
                  {/* Circular Background Container with floating "Click" tag */}
                  <div className="relative">
                    <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[360px] lg:h-[360px] rounded-full bg-[#FFFDF9] border-2 border-[#C87A38]/30 shadow-2xl relative overflow-hidden flex items-center justify-center">
                      <LunarGravityCard
                        className="w-full h-full"
                        artTextureUrl="/images/sphere_madhubani.jpg"
                        ringColor="#C87A38"
                        hintText=""
                      />
                    </div>

                    {/* Short floating "Click" tag near the sphere */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none bg-[#1C1917]/90 text-[#F59E0B] px-3.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-[#F59E0B]/40 shadow-lg flex items-center gap-1.5 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0" />
                      <span>CLICK</span>
                    </div>
                  </div>

                  {/* Caption line about celestial bodies in Madhubani art */}
                  <p className="text-xs sm:text-sm text-[#78716C] font-serif italic max-w-sm mx-auto leading-relaxed">
                    In Madhubani folklore, celestial bodies like the Sun, Moon, and Stars represent timeless cosmic balance and spiritual harmony.
                  </p>

                </div>

              </div>
            </div>

            {/* Elegant Un-Boxed Editorial Philosophy Statement */}
            <div className="max-w-3xl mx-auto text-center space-y-5 pt-8 pb-4 px-4">
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-[1px] bg-[#C87A38]/40" />
                <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#C87A38]">
                  THE KALAPRAVAH PHILOSOPHY
                </span>
                <div className="w-12 h-[1px] bg-[#C87A38]/40" />
              </div>

              <p className="font-serif text-base sm:text-xl text-[#292524] leading-relaxed font-normal max-w-2xl mx-auto">
                At its core, Kalapravah is more than just an art initiative; it serves as a bridge between the past and the present. In a world thriving on the digital and the disposable, there is something profoundly enriching about engaging with art crafted by hand, preserving the collective memories and traditions of our ancestors.
              </p>

              <div className="w-16 h-[2px] bg-[#C87A38] mx-auto rounded-full" />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
