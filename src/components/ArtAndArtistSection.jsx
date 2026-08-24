import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, UserCheck, Sparkles, HeartHandshake, ShieldCheck, Quote, Mountain, GraduationCap, Award, Compass, MessageSquare, ArrowRight, BookOpen, Layers, Feather, Sun, Fish, Flower2, Bird, Scroll } from 'lucide-react';
import { ARTIST_FEATURE } from '../data/articles';

export default function ArtAndArtistSection({ onContactArtist }) {
  return (
    <>
      {/* 📌 SECTION 2A: ART */}
      <section id="art" className="pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 bg-transparent relative overflow-hidden border-b border-[#E7E0D2] scroll-mt-20 sm:scroll-mt-24">
        {/* Soft Decorative Ambient Spotlights */}
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#C87A38]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
          
          {/* Main Section Banner Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1917] tracking-tight">
              ART
            </h2>
            <p className="text-sm sm:text-base text-[#5C5652] leading-relaxed max-w-2xl mx-auto font-light">
              Discover the 3,000-year civilizational heritage of Madhubani art, defined by sacred motifs, double-line hatching, and organic mineral pigments.
            </p>
            <div className="w-20 h-[2px] bg-[#C87A38] mx-auto rounded-full mt-2" />
          </div>

          {/* Seamless Un-boxed Editorial Spread */}
          <div className="space-y-6 text-left">
            
            {/* Sub-Header Bar */}
            <div className="border-b border-[#E7E0D2] pb-4">
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#1C1917]">
                About Madhubani Art
              </h3>
            </div>

            {/* 2-Column Open Editorial Grid (Equal 50/50 Split) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Narrative (Height-Matched) */}
              <div className="space-y-4 border-b lg:border-b-0 lg:border-r border-[#E7E0D2]/70 pb-8 lg:pb-0 lg:pr-10">
                <span className="text-[10px] font-bold tracking-[0.24em] text-[#C87A38] uppercase block">
                  ANCIENT CIVILIZATIONAL HERITAGE
                </span>
                <p className="text-sm sm:text-base text-[#332F2C] leading-relaxed font-light">
                  Originating in northern Bihar's Mithila region, <strong className="font-semibold text-[#1C1917]">Madhubani folk art</strong> is a 3,000-year-old sacred tradition historically painted by women on domestic mud courtyard walls (<em>Bhitti Chitra</em>) during auspicious festivals, marriages, and harvest celebrations.
                </p>
                <p className="text-sm sm:text-base text-[#332F2C] leading-relaxed font-light">
                  Celebrated worldwide for bold double-line contours, fine bamboo nib penmanship, and natural mineral dyes, every motif preserves ancient Vedic symbolism, ecological harmony, and living civilizational memory.
                </p>
                <p className="text-sm sm:text-base text-[#332F2C] leading-relaxed font-light">
                  Each canvas acts as a sacred visual bridge, translating timeless folklore and civilizational narratives into living art for modern residential and gallery spaces.
                </p>
              </div>

              {/* Right Column: 3 Master Styles Stack (Perfectly Height-Matched) */}
              <div className="space-y-4 lg:pl-2">
                <span className="text-[10px] font-bold tracking-[0.24em] text-[#C87A38] uppercase block">
                  3 MASTER STYLE CATEGORIES
                </span>
                
                <div className="space-y-4">
                  <div className="pl-4 border-l-2 border-[#C87A38] space-y-1">
                    <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C1917]">
                      Bharni Style <span className="font-sans text-xs font-medium text-[#C87A38] uppercase tracking-wider ml-1">(Color Fill)</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5C5652] leading-relaxed font-light">
                      Saturated organic color fill using vibrant earth dyes extracted from turmeric and indigo, paired with bold black double outlines.
                    </p>
                  </div>

                  <div className="pl-4 border-l-2 border-[#B94A2D] space-y-1">
                    <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C1917]">
                      Kachni Style <span className="font-sans text-xs font-medium text-[#B94A2D] uppercase tracking-wider ml-1">(Line Hatching)</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5C5652] leading-relaxed font-light">
                      Fine monochrome pen line hatching, delicate cross-hatching, and intricate geometric patterns drawn strictly without solid color fills.
                    </p>
                  </div>

                  <div className="pl-4 border-l-2 border-[#D97706] space-y-1">
                    <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C1917]">
                      Godna & Kohbar <span className="font-sans text-xs font-medium text-[#D97706] uppercase tracking-wider ml-1">(Sacred Motifs)</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5C5652] leading-relaxed font-light">
                      Tattoo stippling techniques & sacred bridal chamber mandalas celebrating cosmic fertility, life force, and prosperity.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 📌 SECTION 2B: ARTIST */}
      <section id="artist" className="pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 bg-transparent relative overflow-hidden border-b border-[#E7E0D2] scroll-mt-20 sm:scroll-mt-24">
        {/* Soft Decorative Ambient Spotlights */}
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#9A3412]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
          
          {/* Main Section Banner Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1917] tracking-tight">
              ARTIST
            </h2>
            <p className="text-sm sm:text-base text-[#5C5652] leading-relaxed max-w-2xl mx-auto font-light">
              Meet Rashmi Dhar - Engineering graduate, traditional folk practitioner, and founder of Kalapravah, dedicated to preserving Mithila heritage for modern spaces.
            </p>
            <div className="w-20 h-[2px] bg-[#C87A38] mx-auto rounded-full mt-2" />
          </div>

          <div className="border-b border-[#E7E0D2] pb-4">
            <div>
              <span className="text-[10px] font-bold tracking-[0.24em] text-[#C87A38] uppercase block">
                MEET THE CREATOR & FOUNDER
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#1C1917]">
                From the Mountains to the Canvas
              </h3>
            </div>
          </div>

          {/* Artist Details & Photo Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* 📍 ARTIST PHOTO */}
            <div className="lg:col-span-5 relative flex flex-col">
              <div className="bg-[#FFFDF9] border border-[#E7E0D2] p-4 rounded-2xl shadow-md space-y-4 h-full flex flex-col justify-between">

                <div className="relative flex-1 min-h-[380px] sm:min-h-[440px] rounded-xl overflow-hidden border border-[#E7E0D2] bg-[#FAF8F3] shadow-inner group">
                  <img
                    src="/images/rashmi_dhar.jpg"
                    alt="Rashmi Dhar: Artist & Founder of Kalapravah"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/80 via-transparent to-transparent opacity-90 flex flex-col justify-end p-5 text-white">
                    <span className="font-serif text-xl sm:text-2xl font-bold">Rashmi Dhar</span>
                    <span className="text-xs text-[#EAD5BE] font-light">Engineering Graduate (Nagpur University) & Folk Artist</span>
                    <span className="text-[10px] text-[#A89F95] mt-1">Delhi NCR • Nurtured in Srinagar, J&K</span>
                  </div>
                </div>

                {/* WhatsApp Direct Chat Button */}
                <div className="pt-2 border-t border-[#E7E0D2]">
                  <a
                    href="https://wa.me/919971399395?text=Hello%20Rashmi%2C%20I%20would%20like%20to%20chat%20and%20inquire%20about%20your%20artworks."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[11px] sm:text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg active:scale-95 text-center leading-snug"
                  >
                    <MessageSquare className="w-4 h-4 fill-current shrink-0" />
                    <span>Chat or inquiries about art? Let's talk!</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Artist Journey Copy (Un-boxed Seamless Narrative) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Open Detailed Narrative */}
              <div className="space-y-4 py-1">
                <p className="text-base sm:text-lg text-[#332F2C] leading-relaxed font-light">
                  In a world brimming with fast-paced, digital art trends, it's refreshing to come across artists who dive deep into the roots of creativity, drawing inspiration from traditional forms of expression. Among these creators is Rashmi Dhar, an Engineering graduate turned artist who since the past 5 years has dedicated her passion to exploring Indian folk art, with a special focus on Mithila art.
                </p>

                <p className="text-base sm:text-lg text-[#332F2C] leading-relaxed font-light">
                  Living presently in Delhi NCR, Rashmi was born and brought up in Srinagar (Jammu and Kashmir). She comes from a community of Kashmiri Hindu scholars.
                </p>

                <p className="text-base sm:text-lg text-[#332F2C] leading-relaxed font-light">
                  She has learned this art form under eminent national awardees, local master artists, and immersive traditional workshops. This hands-on guidance has helped her gain deep insight into the precise nib techniques, natural pigment preparations, and civilizational narratives that define Mithila folk art.
                </p>

                <p className="text-base sm:text-lg text-[#1C1917] font-semibold leading-relaxed">
                  Each piece of her artwork resonates with emotion, telling tales of love, struggle, and community spirit that transcend generations.
                </p>
              </div>

              {/* 🌟 UN-BOXED EDITORIAL PULL-QUOTE JOURNEY STATEMENT */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#C87A38] space-y-4 py-2 my-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C87A38] uppercase tracking-widest">
                  <Quote className="w-4 h-4 fill-current shrink-0" />
                  <span>RASHMI DHAR: HER ARTISTIC JOURNEY</span>
                </div>

                <blockquote className="space-y-4 text-base sm:text-lg lg:text-xl text-[#1C1917] font-serif leading-relaxed font-normal">
                  <p className="italic">
                    "Kalapravah translates to the continuous flow of art. For me, this venture is more than a collection of paintings, it is a sacred bridge connecting our rich civilizational roots with the modern world."
                  </p>
                  <p className="italic">
                    "Though I did not grow up in the traditional households of Mithila inheriting these brushstrokes from ancestors, I found myself drawn to Madhubani not by lineage, but by a profound sense of belonging. Every motif, the vibrant flora, the sacred fauna, and the eternal narratives of our epics, speaks a language of its own. When I hold the fine nib and fill the canvas with natural pigments and bright hues, I am not just painting; I am listening to the whispers of ancient history and translating them for today."
                  </p>
                </blockquote>
              </div>

              {/* 📍 FEATURED STUDIO STORY CARD */}
              <div className="pt-2">
                <Link
                  to={`/blog/${ARTIST_FEATURE.id}`}
                  className="group cursor-pointer flex flex-col sm:flex-row items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#FFFDF9] border border-[#E7E0D2] shadow-sm hover:shadow-md transition-all gap-4 text-left block"
                >
                  <div className="relative w-full sm:w-40 aspect-[4/3] rounded-xl overflow-hidden bg-[#FAF8F3] shrink-0">
                    <img
                      src={ARTIST_FEATURE.image}
                      alt={ARTIST_FEATURE.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 bg-[#1C1917]/80 backdrop-blur-md text-white text-[9px] font-semibold px-2.5 py-0.5 rounded-full uppercase">
                      STUDIO STORY
                    </span>
                  </div>
                  <div className="space-y-1 flex-1">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#C87A38] uppercase block">
                      FEATURED ARTIST JOURNAL
                    </span>
                    <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C1917] group-hover:text-[#C87A38] transition-colors leading-snug">
                      {ARTIST_FEATURE.title}
                    </h4>
                    <p className="text-xs text-[#5C5652] line-clamp-2 font-light">
                      {ARTIST_FEATURE.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase text-[#1C1917] group-hover:text-[#C87A38] pt-1">
                      <span>Read Full Studio Story</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}



