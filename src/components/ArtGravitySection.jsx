import React from 'react';
import LunarGravityCard from '@/components/ui/lunar-gravity-card';
import { Sparkles, Compass, Hand, Orbit } from 'lucide-react';

export default function ArtGravitySection() {
  return (
    <section id="art-gravity" className="py-20 bg-[#121110] relative overflow-hidden border-t border-b border-[#2A2725]">
      
      {/* Background Decorative Motifs */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-96 h-96 bg-[#B94A2D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#C87A38]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B94A2D]/20 border border-[#B94A2D]/40 text-xs font-semibold text-[#E7E0D2]">
            <Orbit className="w-3.5 h-3.5 text-[#C87A38] animate-spin-slow" />
            <span>Interactive 3D Art Installation</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FAF8F3] tracking-tight">
            Celestial Harmony & Art Gravity
          </h2>

          <p className="text-base sm:text-lg text-[#A8A29E] font-normal leading-relaxed">
            In Madhubani folklore, celestial bodies like the Sun, Moon, and Stars represent timeless cosmic balance. Click the central sphere to trigger gravitational particle rings.
          </p>
        </div>

        {/* 3D Lunar Art Gravity Card */}
        <div className="flex justify-center items-center">
          <LunarGravityCard
            title={
              <>
                <span className="text-[#FAF8F3] drop-shadow-sm font-serif italic">Cosmic</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF9] via-[#C87A38] to-[#B94A2D] drop-shadow-md font-serif font-bold">
                  Canvas.
                </span>
              </>
            }
            description="Experience traditional folk folklore in interactive 3D physics. Tap the celestial sphere to ignite orbiting golden particle dust and mineral rings."
          />
        </div>

        {/* Quick Instructions / Footnote */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#78716C]">
          <div className="flex items-center gap-2">
            <Hand className="w-4 h-4 text-[#C87A38]" />
            <span>Click Moon sphere to activate gravitational rings</span>
          </div>
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#B94A2D]" />
            <span>Drag around to rotate 3D viewport angle</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#E7E0D2]" />
            <span>60,000 real-time reactive canvas particles</span>
          </div>
        </div>

      </div>
    </section>
  );
}
