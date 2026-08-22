import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Award, Sparkles, ArrowRight, MessageSquare } from 'lucide-react';

const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

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
    window.open(`https://wa.me/919971399395?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF8F3] relative overflow-hidden border-b border-[#E7E0D2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Header Pill & Titles */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#F3ECE0] border border-[#E7E0D2] text-[10px] sm:text-xs font-semibold tracking-wider text-[#A16207] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C87A38]" />
            <span>STUDIO DIRECT CONNECTIONS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] tracking-tight leading-[1.15]">
            CONTACT
          </h2>

          <p className="text-xs sm:text-base text-[#5C5652] leading-relaxed max-w-2xl mx-auto font-light">
            Enquire about original paintings, request bespoke custom commissions, or invite artist Rashmi Dhar to host a Madhubani masterclass workshop.
          </p>
          <div className="w-16 h-[2px] bg-[#C87A38] mx-auto rounded-full mt-2" />
        </div>

        {/* 4 HIGHLIGHTED CONTACT CARDS (Client Requirement: Email ID, Insta handle, WhatsApp / Contact number, Logo) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* 1. Logo Badge Card */}
          <div className="deckled-frame bg-[#FFFDF9] border border-[#E7E0D2] p-5 rounded-xl text-center space-y-3 flex flex-col items-center justify-center shadow-sm">
            <img 
              src="/images/logo-emblem.png" 
              alt="Kalapravah Logo" 
              className="w-14 h-14 object-contain mx-auto" 
            />
            <div>
              <span className="font-serif text-lg font-bold text-[#1C1917] block leading-none">KALAPRAVAH</span>
              <span className="text-[9px] font-bold text-[#C87A38] uppercase tracking-widest block mt-1">Mithila Art Studio</span>
            </div>
          </div>

          {/* 2. Email Card */}
          <a 
            href="mailto:kalapravah2025@gmail.com"
            className="deckled-frame bg-[#FFFDF9] border border-[#E7E0D2] hover:border-[#C87A38] p-5 rounded-xl text-left space-y-2 flex flex-col justify-between shadow-sm transition-all group"
          >
            <div className="flex items-center justify-between">
              <Mail className="w-6 h-6 text-[#C87A38]" />
              <ArrowRight className="w-4 h-4 text-[#78716C] group-hover:translate-x-1 transition-transform" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#78716C] uppercase block">EMAIL ID</span>
              <span className="text-xs sm:text-sm font-semibold text-[#1C1917] truncate block group-hover:text-[#C87A38] transition-colors">
                kalapravah2025@gmail.com
              </span>
            </div>
          </a>

          {/* 3. Instagram Card */}
          <a 
            href="https://www.instagram.com/kalapravah2025?igsh=MWJ4N3ZubzBzczBodg==" 
            target="_blank"
            rel="noopener noreferrer"
            className="deckled-frame bg-[#FFFDF9] border border-[#E7E0D2] hover:border-[#C87A38] p-5 rounded-xl text-left space-y-2 flex flex-col justify-between shadow-sm transition-all group"
          >
            <div className="flex items-center justify-between">
              <InstagramIcon className="w-6 h-6 text-[#E1306C]" />
              <ArrowRight className="w-4 h-4 text-[#78716C] group-hover:translate-x-1 transition-transform" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#78716C] uppercase block">INSTAGRAM HANDLE</span>
              <span className="text-xs sm:text-sm font-semibold text-[#1C1917] truncate block group-hover:text-[#C87A38] transition-colors">
                @kalapravah2025
              </span>
            </div>
          </a>

          {/* 4. WhatsApp / Contact Number Card */}
          <a 
            href="https://wa.me/919971399395" 
            target="_blank"
            rel="noopener noreferrer"
            className="deckled-frame bg-[#FFFDF9] border border-[#E7E0D2] hover:border-[#25D366] p-5 rounded-xl text-left space-y-2 flex flex-col justify-between shadow-sm transition-all group"
          >
            <div className="flex items-center justify-between">
              <Phone className="w-6 h-6 text-[#25D366]" />
              <ArrowRight className="w-4 h-4 text-[#78716C] group-hover:translate-x-1 transition-transform" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#78716C] uppercase block">WHATSAPP / CONTACT</span>
              <span className="text-xs sm:text-sm font-semibold text-[#1C1917] truncate block group-hover:text-[#25D366] transition-colors">
                +91 99713 99395
              </span>
            </div>
          </a>

        </div>

        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start pt-4">
          
          {/* Left Box: Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-[#FFFDF9] border border-[#E7E0D2] rounded-xl p-5 sm:p-8 shadow-sm text-left space-y-5 sm:space-y-6">
            
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
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
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
                  <span className="text-[11px] sm:text-xs">SEND INQUIRY VIA WHATSAPP (+91 99713 99395)</span>
                </div>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Box: Artisan Studio Details */}
          <div className="lg:col-span-5 bg-[#FFFDF9] border border-[#E7E0D2] rounded-xl p-6 sm:p-8 shadow-sm text-left space-y-6 flex flex-col justify-between">
            
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
                    <a href="mailto:kalapravah2025@gmail.com" className="text-[#5C5652] hover:text-[#C87A38] transition-colors font-medium">
                      kalapravah2025@gmail.com
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5">
                  <InstagramIcon className="w-4 h-4 text-[#E1306C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] block">Instagram</span>
                    <a 
                      href="https://www.instagram.com/kalapravah2025?igsh=MWJ4N3ZubzBzczBodg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5C5652] hover:text-[#C87A38] transition-colors font-medium"
                    >
                      @kalapravah2025
                    </a>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] block">WhatsApp / Contact</span>
                    <a 
                      href="https://wa.me/919971399395"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5C5652] hover:text-[#25D366] transition-colors font-medium"
                    >
                      +91 99713 99395
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
