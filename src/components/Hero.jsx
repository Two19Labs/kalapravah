import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Feather, 
  Layers, 
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import LunarGravityCard from './ui/lunar-gravity-card';

export default function Hero({ onExploreArtworks, onExploreArtist }) {
  // 3 AI Generated Full-Bleed Interior Decor Backgrounds featuring Rashmi Dhar's authentic artworks
  const decorHeroSlides = [
    {
      id: 'slide1',
      bgImage: '/images/hero_decor_1.jpg',
      title: 'Radha Krishna: Pure Kachni Mandala',
      artworkTag: 'FEATURED MANDALA'
    },
    {
      id: 'slide2',
      bgImage: '/images/hero_decor_2.jpg',
      title: 'Matsya Chakra: Sacred Fish Wheel',
      artworkTag: 'GALLERY EXHIBITION'
    },
    {
      id: 'slide3',
      bgImage: '/images/hero_decor_3.jpg',
      title: 'Vighnaharta: Seated Ganesha',
      artworkTag: 'CANVAS COLLECTION'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-changing slideshow every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % decorHeroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [decorHeroSlides.length]);

  return (
    <section id="home" className="w-full relative overflow-hidden border-b border-[#E7E0D2]">
      
      {/* ========================================================================= */}
      {/* 1. GHOOMAR-STYLE FULL-BLEED 100VW SLIDESHOW HERO BANNER                  */}
      {/* ========================================================================= */}
      <div className="relative w-full h-[88vh] sm:h-screen min-h-[580px] flex items-center justify-center text-center overflow-hidden">
        
        {/* Full-Bleed 100% Background Slideshow with Horizontal Swipe Left Animation */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="flex w-full h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {decorHeroSlides.map((slide) => (
              <div
                key={slide.id}
                className="w-full h-full shrink-0 relative"
              >
                <img
                  src={slide.bgImage}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          {/* Cinematic Dark Overlay for Ghoomarthali-style Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/45 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-black/20 z-10 backdrop-blur-[0.5px] pointer-events-none" />
        </div>

        {/* OVERLAID CENTERED HERO CONTENT (EXACT GHOOMAR STYLE) */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 pt-12">

          {/* Centered High-Impact Headline */}
          <div className="space-y-3">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-xl text-center">
              Traditional Elegance <br />
              For <span className="font-serif italic font-normal text-[#F59E0B] underline decoration-[#F59E0B]/50 decoration-wavy decoration-1 underline-offset-8">Contemporary</span> Spaces
            </h1>
          </div>

          {/* Centered Narrative Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-light max-w-2xl mx-auto text-center drop-shadow-md">
            Bringing ancient storytelling, rich mineral pigments, and meditative line work of traditional <strong>Madhubani/Mithila folk art</strong> directly into modern living spaces.
          </p>

          {/* Centered Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
            <button
              onClick={onExploreArtworks}
              className="px-6 sm:px-7 py-3.5 rounded-full bg-transparent hover:bg-white/15 text-white border-2 border-white/80 hover:border-white text-xs sm:text-sm font-bold tracking-widest uppercase transition-all backdrop-blur-md shadow-lg cursor-pointer hover:scale-105 active:scale-95"
            >
              EXPLORE ART GALLERY
            </button>

            <button
              onClick={onExploreArtist}
              className="px-7 sm:px-8 py-3.5 rounded-full bg-[#C87A38] hover:bg-[#b56929] text-white text-xs sm:text-sm font-bold tracking-widest uppercase transition-all shadow-2xl hover:scale-105 active:scale-95 cursor-pointer border border-[#C87A38]"
            >
              ABOUT THE ARTIST
            </button>
          </div>

          {/* Subtle Slide Indicator Bars at Bottom */}
          <div className="pt-4 flex justify-center">
            <div className="flex items-center gap-2">
              {decorHeroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentSlide ? 'w-6 bg-white/90 shadow-sm' : 'w-1.5 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. ABOUT KALAPRAVAH (SEAMLESS BRAND MISSION & CELESTIAL SPHERE)          */}
      {/* ========================================================================= */}
      <div id="welcome-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-14 lg:space-y-16 pt-10 sm:pt-14 pb-6 sm:pb-8">
        
        <div id="about" className="space-y-8">
          
          {/* 2-Column Grid Layout: Text on Left, 3D Sphere on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
            
            {/* LEFT COLUMN: TITLE & NARRATIVE (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#C87A38] block">
                  THE KALAPRAVAH PHILOSOPHY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
                  About KALAPRAVAH
                </h2>
                <div className="w-16 h-[2.5px] bg-[#C87A38] rounded-full mt-1.5" />
              </div>

              <p className="font-serif text-lg sm:text-xl text-[#1C1917] italic leading-relaxed font-normal pt-1">
                "Where Heritage Meets Contemporary Calm"
              </p>
              
              <p className="text-sm sm:text-base text-[#5C5652] leading-relaxed font-light">
                In a fast-paced world, art offers a much-needed sanctuary: a moment of pause and peace. Drawing inspiration from pristine nature, ancient rituals, customs, and deep-rooted spirituality, every brushstroke is designed to soothe the soul.
              </p>
              
              <p className="text-sm sm:text-base text-[#5C5652] leading-relaxed font-light">
                In an age where mass production and digital art dominate the landscape, the intrinsic value of handmade art seems to take a backseat. Kalapravah as an art venture is on a mission to change that narrative. By promoting handmade art, Kalapravah connects individuals to their cultural roots.
              </p>
              
              <p className="text-sm sm:text-base text-[#5C5652] leading-relaxed font-light">
                At its core, Kalapravah is more than just an art initiative; it serves as a bridge between the past and the present. In a world thriving on the digital and the disposable, there is something profoundly enriching about engaging with art that has been crafted by hand. Each piece tells a story, holding within it the collective memories and traditions of our ancestors, making them accessible to everyone.
              </p>
            </div>

            {/* RIGHT COLUMN: 3D CELESTIAL GLOBE SPHERE (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-5 text-center">
              
              {/* Circular Background Container with floating "Click" tag */}
              <div className="relative">
                <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[340px] lg:h-[340px] rounded-full bg-[#FFFDF9] border-2 border-[#C87A38]/40 shadow-2xl relative overflow-hidden flex items-center justify-center">
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

              {/* High-Contrast Editorial Caption Card */}
              <div className="bg-[#FFFDF9] border border-[#E7E0D2] shadow-lg rounded-2xl px-4 sm:px-6 py-3.5 max-w-sm mx-auto flex items-center justify-center gap-3 backdrop-blur-md transition-all hover:border-[#C87A38]">
                <Sparkles className="w-5 h-5 text-[#C87A38] shrink-0" />
                <p className="text-xs sm:text-sm text-[#1C1917] font-serif italic leading-relaxed text-center font-normal">
                  In Madhubani folklore, celestial bodies like the <strong className="text-[#C87A38] not-italic font-bold">Sun, Moon, & Stars</strong> represent cosmic balance.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
