import React, { useState } from 'react';
import { MapPin, Mail, Clock, Award, Sparkles, ArrowRight, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [selectedTopic, setSelectedTopic] = useState('Artwork Inquiry');
  const [note, setNote] = useState('');

  const topics = [
    'Artwork Inquiry',
    'Custom Commission',
    'Workshops & Teaching',
    'Exhibition / Gallery Feature',
    'General Enquiry'
  ];

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Rashmi,\n\nI would like to make an enquiry regarding: *${selectedTopic}*\n${note ? `Details: ${note}` : ''}`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-28 bg-[#FAF8F3] relative overflow-hidden border-t border-[#E7E0D2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Pill & Titles */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#F3ECE0] border border-[#E7E0D2] text-[10px] sm:text-xs font-semibold tracking-wider text-[#A16207] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C87A38]" />
            <span>STUDIO DIRECT CONNECTIONS</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] tracking-tight leading-[1.15]">
            Bring Timeless Madhubani Heritage into Your Space
          </h2>

          <p className="text-xs sm:text-base text-[#5C5652] leading-relaxed max-w-2xl mx-auto">
            Enquire about original paintings, request bespoke custom commissions, or invite artist Rashmi Dhar to host a Madhubani masterclass workshop.
          </p>
        </div>

        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Box: Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-[#FFFDF9] border border-[#E7E0D2] rounded-lg p-5 sm:p-8 shadow-sm text-left space-y-5 sm:space-y-6">
            
            {/* Form Top Title Bar */}
            <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 pb-2 border-b border-[#E7E0D2]/50">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#C87A38] uppercase block">
                  QUICK INQUIRY FORM
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1C1917]">
                  Send Direct Inquiry to Artist
                </h3>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#15803D] text-[10px] sm:text-[11px] font-semibold tracking-wide shrink-0">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                <span>WHATSAPP ACTIVE</span>
              </div>
            </div>

            {/* Step 1: Select Inquiry Topic */}
            <div className="space-y-2.5 pt-1">
              <label className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#78716C] uppercase block">
                1. SELECT INQUIRY TOPIC
              </label>

              <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-2.5">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-3.5 py-2.5 rounded-sm text-xs font-semibold transition-all min-h-[42px] flex items-center justify-center text-center ${
                      selectedTopic === topic
                        ? 'bg-[#1C1917] text-white border border-[#1C1917] shadow-sm'
                        : 'bg-[#FAF8F3] text-[#44403C] border border-[#E7E0D2] hover:border-[#C4B9A3] active:bg-[#F3EFE6]'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Personal Note or Dimensions */}
            <div className="space-y-2.5 pt-1">
              <label className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#78716C] uppercase block">
                2. PERSONAL NOTE OR DIMENSIONS (OPTIONAL)
              </label>

              <textarea
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Share details like preferred painting size, color palette, wall space, or event dates..."
                className="w-full px-3.5 py-3 bg-[#FAF8F3] border border-[#E7E0D2] rounded-sm text-xs text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:border-[#C87A38] transition-colors"
              />
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full py-3.5 sm:py-4 px-5 sm:px-6 bg-[#1C1917] hover:bg-[#2D2A26] active:scale-[0.99] text-white rounded-sm font-semibold text-xs tracking-widest uppercase flex items-center justify-between transition-all shadow-md group"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#22C55E]" />
                  <span className="text-[11px] sm:text-xs">SEND INQUIRY VIA WHATSAPP</span>
                </div>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Box: Artisan Studio Details */}
          <div className="lg:col-span-5 bg-[#FFFDF9] border border-[#E7E0D2] rounded-lg p-6 sm:p-8 shadow-sm text-left space-y-6 flex flex-col justify-between">
            
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#C87A38] uppercase block mb-3">
                  ARTISAN STUDIO DETAILS
                </span>
                <div className="h-[1px] bg-[#E7E0D2] w-full" />
              </div>

              {/* Studio Info List */}
              <div className="space-y-5 text-xs text-[#44403C]">
                
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-[#C87A38] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] block">Studio Location</span>
                    <span className="text-[#5C5652]">New Delhi / NCR, India • Shipping Worldwide</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-[#C87A38] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] block">Direct Email</span>
                    <a href="mailto:kalapravah.art@gmail.com" className="text-[#5C5652] hover:text-[#C87A38] transition-colors underline">
                      kalapravah.art@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <Clock className="w-4 h-4 text-[#C87A38] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] block">Studio Hours</span>
                    <span className="text-[#5C5652]">Monday to Saturday, 10:00 AM to 7:00 PM IST</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Guarantee Box */}
            <div className="pt-6 border-t border-[#E7E0D2]">
              <div className="p-4 rounded-sm bg-[#FAF8F3] border border-[#E7E0D2] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1C1917] uppercase tracking-wide">
                  <Award className="w-4 h-4 text-[#C87A38]" />
                  <span>100% ORIGINAL MITHILA ART GUARANTEE</span>
                </div>
                <p className="text-[11px] text-[#78716C] leading-relaxed">
                  Each artwork created by Rashmi Dhar is hand-drawn and painted using traditional natural pigments or fine acrylics, complete with an official physical Certificate of Authenticity.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
