import React from 'react';
import { MessageSquare, Quote } from 'lucide-react';

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
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
              ABOUT MADHUBANI ART
            </h2>
            <p className="text-sm sm:text-base text-[#5C5652] leading-relaxed max-w-2xl mx-auto font-light">
              Discover the centuries-old civilizational heritage of Madhubani art, defined by sacred motifs, double-line hatching, and organic pigments.
            </p>
            <div className="w-20 h-[2px] bg-[#C87A38] mx-auto rounded-full mt-2" />
          </div>

          {/* Seamless Un-boxed Editorial Spread */}
          <div className="space-y-6 text-left pt-2">
            
            {/* 2-Column Open Editorial Grid (Equal 50/50 Split) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Narrative */}
              <div className="space-y-4 border-b lg:border-b-0 lg:border-r border-[#E7E0D2]/70 pb-8 lg:pb-0 lg:pr-10">
                <span className="text-[10px] font-bold tracking-[0.24em] text-[#C87A38] uppercase block">
                  ANCIENT CIVILIZATIONAL HERITAGE ART
                </span>
                <p className="text-sm sm:text-base text-[#332F2C] leading-relaxed font-light">
                  Originating in northern Bihar's Madhubani region, <strong className="font-semibold text-[#1C1917]">Madhubani folk art</strong> is a centuries-old sacred tradition historically painted by women on domestic mud courtyard walls (<em>Bhitti Chitra</em>) during auspicious festivals, marriages, and harvest celebrations.
                </p>
                <p className="text-sm sm:text-base text-[#332F2C] leading-relaxed font-light">
                  Celebrated worldwide for bold double-line contours, fine bamboo nib penmanship, and natural pigments, every motif preserves ancient Vedic symbolism, ecological harmony, and living civilizational memory.
                </p>
                <p className="text-sm sm:text-base text-[#332F2C] leading-relaxed font-light">
                  Each canvas acts as a sacred visual bridge, translating timeless folklore and civilizational narratives into living art for modern residential and gallery spaces.
                </p>
              </div>

              {/* Right Column: Curated Masterwork Showcase */}
              <div className="lg:pl-2 flex flex-col justify-center">
                <div className="bg-[#FFFDF9] border border-[#E7E0D2] p-3.5 sm:p-4 rounded-2xl shadow-md space-y-3 group">
                  <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-[#FAF8F3] border border-[#E7E0D2]/80 shadow-inner">
                    <img
                      src="/images/janak_phulwari.jpg"
                      alt="Janak Phulwari: Traditional Madhubani Folk Artwork"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center justify-between px-1">
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C1917]">
                        Janak Phulwari
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#78716C] font-light">
                        Natural pigments and acrylic on handmade cotton rag paper
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-[#C87A38] uppercase tracking-wider bg-[#C87A38]/10 px-2.5 py-1 rounded-full border border-[#C87A38]/20">
                      BHARNI & KACHNI
                    </span>
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
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
              ARTIST
            </h2>
            <p className="text-sm sm:text-base text-[#5C5652] leading-relaxed max-w-2xl mx-auto font-light">
              Rashmi Dhar — Traditional Madhubani practitioner, workshop facilitator, and founder of Kalapravah, dedicated to keeping Madhubani heritage vibrant.
            </p>
            <div className="w-20 h-[2px] bg-[#C87A38] mx-auto rounded-full mt-2" />
          </div>

          {/* Artist Details & Photo Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
            
            {/* 📍 ARTIST PHOTO */}
            <div className="lg:col-span-5 relative flex flex-col">
              <div className="bg-[#FFFDF9] border border-[#E7E0D2] p-3.5 sm:p-4 rounded-2xl shadow-md space-y-4 h-full flex flex-col justify-between">

                <div className="relative flex-1 min-h-[280px] xs:min-h-[320px] sm:min-h-[360px] rounded-xl overflow-hidden border border-[#E7E0D2] bg-[#FAF8F3] shadow-inner group">
                  <img
                    src="/images/rashmi_dhar.jpg"
                    alt="Rashmi Dhar at 'Vaidehi - Beyond Body' Exhibition, IGNCA, New Delhi"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/85 via-transparent to-transparent opacity-95 flex flex-col justify-end p-4 sm:p-5 text-white">
                    <span className="font-serif text-lg sm:text-2xl font-bold">Rashmi Dhar</span>
                    <span className="text-xs text-[#EAD5BE] font-light">Madhubani Folk Artist & Founder of Kalapravah</span>
                    <span className="text-[10px] text-[#E0D7CD] mt-1 font-medium">"Vaidehi - Beyond Body" Exhibition • IGNCA, New Delhi</span>
                  </div>
                </div>

                {/* WhatsApp Direct Chat Button */}
                <div className="pt-2 border-t border-[#E7E0D2]">
                  <a
                    href="https://wa.me/919971399395?text=Hello%20Rashmi%2C%20I%20would%20like%20to%20chat%20and%20inquire%20about%20your%20artworks."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 min-h-[44px] py-3 px-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[11px] sm:text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg active:scale-95 text-center leading-snug cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-current shrink-0" />
                    <span>Have questions about an artwork? Let's chat</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Artist Journey Copy (Un-boxed Seamless Narrative) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              
              {/* Open Detailed Narrative */}
              <div className="space-y-3.5 sm:space-y-4 py-1">
                <p className="text-sm sm:text-base lg:text-lg text-[#332F2C] leading-relaxed font-light">
                  Drawing and painting have been her lifelong passion. As she pursued her academics, creative pursuits temporarily took a backseat to the demands of everyday life. However, a deep longing to create and express never truly left her. When she returned to art, she found profound solace in Madhubani art.
                </p>

                <p className="text-sm sm:text-base lg:text-lg text-[#332F2C] leading-relaxed font-light">
                  Madhubani art is a sacred tradition that draws its narratives from ancient civilization, mythology, and nature. Over the past 6 years, she has dedicated herself to learning and practicing this timeless art form directly under master artists who inherited these techniques through generations of family tradition.
                </p>

                <p className="text-sm sm:text-base lg:text-lg text-[#332F2C] leading-relaxed font-light">
                  Her primary mediums are acrylics and natural pigments on handmade paper and canvas. Through her creative space, she founded the art initiative—<strong>Kalapravah</strong>—where she strives to keep this living heritage vibrant and thriving.
                </p>
              </div>

              {/* 🌟 UN-BOXED EDITORIAL PULL-QUOTE JOURNEY STATEMENT */}
              <div className="relative pl-4 sm:pl-8 border-l-2 border-[#C87A38] space-y-3 py-2 my-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C87A38] uppercase tracking-widest">
                  <Quote className="w-4 h-4 fill-current shrink-0" />
                  <span>HERITAGE & MINDFUL WORKSHOPS</span>
                </div>

                <div className="space-y-3 text-sm sm:text-base lg:text-lg text-[#44403C] font-serif leading-relaxed font-normal">
                  <p className="not-italic">
                    Art is meant to be shared, which is why a vital part of her journey involves conducting hands-on Madhubani workshops. She designs these sessions especially for the younger generation and busy modern minds—providing a peaceful sanctuary away from screens and offering a calming, therapeutic space to unwind, reset, and find joy.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}



