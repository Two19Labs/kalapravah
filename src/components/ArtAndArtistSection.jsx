import React from 'react';
import { Palette, UserCheck, Sparkles, HeartHandshake, ShieldCheck, Quote, Mountain, GraduationCap, Award, Compass, MessageSquare } from 'lucide-react';

export default function ArtAndArtistSection({ onContactArtist }) {
  return (
    <section id="art-artist" className="py-8 sm:py-10 lg:py-12 bg-transparent relative overflow-hidden border-b border-[#E7E0D2]">
      
      {/* Soft Decorative Ambient Spotlights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#C87A38]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#9A3412]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10 lg:space-y-12">
        
        {/* Main Section Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1917] tracking-tight">
            ART & ARTIST
          </h2>
          <p className="text-sm sm:text-base text-[#5C5652] leading-relaxed max-w-2xl mx-auto font-light">
            Discover the rich lineage of ancient Mithila art and the personal journey of artist Rashmi Dhar bridging ancestral roots with modern expression.
          </p>
          <div className="w-20 h-[2px] bg-[#C87A38] mx-auto rounded-full mt-2" />
        </div>

        {/* ========================================================================= */}
        {/* SUBSECTION 1: ABOUT MITHILA ART & 📍 ARTWORK UNDER KALAPRAVAH            */}
        {/* ========================================================================= */}
        <div className="space-y-5 sm:space-y-6">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#E7E0D2] pb-4">
            <div>
              <span className="text-[10px] font-bold tracking-[0.24em] text-[#C87A38] uppercase block">
                ANCIENT HERITAGE LINEAGE
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#1C1917]">
                About Mithila Art
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#E7E0D2] text-xs text-[#78716C]">
              <Sparkles className="w-3.5 h-3.5 text-[#C87A38]" />
              <span>3,000-Year Heritage from Bihar</span>
            </div>
          </div>

          {/* 3 Paragraph Copy Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="bg-[#FFFDF9] border border-[#E7E0D2] rounded-xl p-6 sm:p-8 shadow-sm space-y-4">
                <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                  Mithila art, with its intricate designs and vibrant colors, has evolved from the walls of rural Bihar in India to captivate audiences across the globe. This unique art form, steeped in cultural heritage, is now embraced by art lovers from diverse backgrounds, thanks to the larger global reach facilitated by technology and cultural exchanges.
                </p>
                <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                  Originating in the Mithila region, Mithila also known as Madhubani art dates back centuries and is traditionally created by women, who use natural pigments to depict themes from mythology, nature, and daily life.
                </p>
                <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                  The distinctive patterns, often created with the help of a brush made from twigs, are characterized by bold lines and intricate motifs, making each piece a visual feast. Historically, these works adorned the walls of homes during festivals and rituals, serving both decorative and spiritual purposes.
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#FAF8F3] border border-[#E7E0D2] flex items-center gap-3">
                  <HeartHandshake className="w-5 h-5 text-[#C87A38] shrink-0" />
                  <span className="text-xs font-semibold text-[#1C1917]">Twig Brushes & Organic Dyes</span>
                </div>
                <div className="p-4 rounded-lg bg-[#FAF8F3] border border-[#E7E0D2] flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#C87A38] shrink-0" />
                  <span className="text-xs font-semibold text-[#1C1917]">Double Outline Linework</span>
                </div>
              </div>
            </div>

            {/* 📍 MITHILA ART STYLES & TRADITIONAL TECHNIQUES CARD */}
            <div className="lg:col-span-5 relative">
              <div className="deckled-frame bg-[#FFFDF9] border border-[#E7E0D2] p-6 rounded-xl shadow-xl space-y-4 text-left">
                <div className="flex items-center justify-between border-b border-[#E7E0D2] pb-3">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#C87A38] uppercase block">
                    SACRED MITHILA STYLES
                  </span>
                  <span className="text-[10px] font-semibold text-[#78716C] bg-[#FAF8F3] px-2 py-0.5 rounded border border-[#E7E0D2]">
                    Heritage Crafts
                  </span>
                </div>

                <div className="space-y-3.5">
                  <div className="space-y-1">
                    <h5 className="font-serif text-sm font-bold text-[#1C1917] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C87A38]" />
                      Bharni (Vibrant Color Fill)
                    </h5>
                    <p className="text-xs text-[#5C5652] leading-relaxed font-light pl-4">
                      Vibrant color fills bounded by solid black double contour linework, historically depicting divine epics.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h5 className="font-serif text-sm font-bold text-[#1C1917] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#B94A2D]" />
                      Kachni (Fine Line Hatching)
                    </h5>
                    <p className="text-xs text-[#5C5652] leading-relaxed font-light pl-4">
                      Monochrome ink line hatching created with fine bamboo dip nibs without color fills.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h5 className="font-serif text-sm font-bold text-[#1C1917] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                      Godna & Kohbar (Ancestral Motifs)
                    </h5>
                    <p className="text-xs text-[#5C5652] leading-relaxed font-light pl-4">
                      Ancestral tattoo stippling and sacred bridal chamber mandalas invoking prosperity and protection.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E7E0D2] text-[11px] text-[#78716C] italic font-serif text-center">
                  "Each style preserves thousands of fine brushstrokes and sacred folk geometry."
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* SUBSECTION 2: ABOUT US (FROM THE MOUNTAINS TO THE CANVAS)                */}
        {/* ========================================================================= */}
        <div className="pt-8 sm:pt-10 lg:pt-12 mt-8 sm:mt-10 lg:mt-12 border-t border-[#E7E0D2] space-y-6 sm:space-y-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#E7E0D2] pb-4">
            <div>
              <span className="text-[10px] font-bold tracking-[0.24em] text-[#C87A38] uppercase block">
                MEET THE CREATOR & FOUNDER
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#1C1917]">
                From the Mountains to the Canvas
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#E7E0D2] text-xs text-[#78716C]">
              <UserCheck className="w-3.5 h-3.5 text-[#C87A38]" />
              <span>Rashmi Dhar: Professional Folk Artist</span>
            </div>
          </div>

          {/* Artist Details & Photo Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* 📍 ARTIST PHOTO */}
            <div className="lg:col-span-5 relative flex flex-col">
              <div className="deckled-frame bg-[#FFFDF9] border border-[#E7E0D2] p-5 rounded-xl shadow-xl space-y-4 h-full flex flex-col justify-between">


                <div className="relative flex-1 min-h-[380px] sm:min-h-[440px] rounded-lg overflow-hidden border border-[#E7E0D2] bg-[#FAF8F3] shadow-inner group">
                  <img
                    src="/images/rashmi_dhar.jpg"
                    alt="Rashmi Dhar: Artist & Founder of Kalapravah"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/80 via-transparent to-transparent opacity-90 flex flex-col justify-end p-5 text-white">
                    <span className="font-serif text-xl font-bold">Rashmi Dhar</span>
                    <span className="text-xs text-[#EAD5BE] font-light">Engineering Graduate (Nagpur University) & Fine Artist</span>
                    <span className="text-[10px] text-[#A89F95] mt-1">Delhi NCR • Nurtured in Srinagar, J&K</span>
                  </div>
                </div>

                {/* WhatsApp Direct Chat Button */}
                <div className="pt-3 border-t border-[#E7E0D2]">
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

            {/* Artist Journey Copy (New Client Text) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Detailed Narrative */}
              <div className="bg-[#FFFDF9] border border-[#E7E0D2] rounded-xl p-6 sm:p-8 shadow-sm space-y-4">
                
                <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                  In a world brimming with fast-paced, digital art trends, it's refreshing to come across artists who dive deep into the roots of creativity, drawing inspiration from traditional forms of expression. Among these creators is Rashmi Dhar, an Engineering graduate turned artist since past 5 years always had passion to explore the folk art from her early childhood and in particular, the Mithla art.
                </p>

                <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                  Living presently in Delhi NCR, Rashmi was born and brought up in Srinagar (Jammu and Kashmir). She comes from a community of Kashmiri hindu scholars(pandit).
                </p>

                <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                  She has learned this art from the eminent national awardees, local artists & several workshops. This has helped her gain insight into the techniques and narratives that define their fineness of this revered folk art work.
                </p>

                <p className="text-sm sm:text-base text-[#1C1917] font-semibold leading-relaxed">
                  Each piece of her art work resonates with emotion, telling tales of love, struggle, and community spirit that transcend generations.
                </p>

              </div>

              {/* 🌟 UN-BOXED EDITORIAL PULL-QUOTE JOURNEY STATEMENT */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#C87A38] space-y-4 py-2 my-2">
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



            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
