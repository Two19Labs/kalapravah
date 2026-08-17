import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'commission',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "How are the original paintings prepared and framed?",
      a: "Every artwork is hand-painted on premium handmade khadi/paper with natural organic pigments. Works are signed by artist Rashmi Dhar and can be shipped unframed (rolled in protective wooden tubes) or mounted in acid-free museum-grade wooden glass frames."
    },
    {
      q: "How long does a bespoke commissioned artwork take?",
      a: "Bespoke commissions typically take 2 to 4 weeks depending on canvas dimensions and detail complexity (Kachni line density vs. Bharni fill layers)."
    },
    {
      q: "Are natural organic dyes and mineral pigments durable?",
      a: "Yes! Natural pigments (turmeric, indigo, organic black ink, and mineral ochres) bound with natural tree gum have lasted for centuries on traditional Mithila walls and handmade paper."
    },
    {
      q: "Can Kalapravah host workshops outside Delhi NCR?",
      a: "Yes! Rashmi Dhar conducts institutional, corporate, and private workshops across India as well as virtual online masterclasses."
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF8F3] relative overflow-hidden border-t border-[#E7E0D2]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Callout Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7E0D2]/70 border border-[#C4B9A3]/60 text-xs font-semibold text-[#1C1917]">
            <MessageSquare className="w-3.5 h-3.5 text-[#B94A2D]" />
            <span>Start a Conversation</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] tracking-tight">
            Bring a hand-painted story <br />
            <span className="italic font-normal text-[#B94A2D]">into your space.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5C5652] leading-relaxed">
            Enquire about available paintings, commission a bespoke narrative piece, or invite Kalapravah to host a Madhubani workshop.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="deckled-frame p-8 md:p-10 rounded-sm bg-[#FFFDF9] border border-[#E7E0D2] shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 bg-[#3E5A47]/10 text-[#3E5A47] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                    Message Sent to Studio
                  </h3>
                  <p className="text-sm text-[#5C5652] max-w-md mx-auto">
                    Thank you for reaching out to Kalapravah. Rashmi Dhar will respond to your enquiry within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline text-xs font-semibold uppercase"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2 text-left">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#1C1917] block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ananya Sharma"
                        className="w-full px-4 py-3 bg-[#FAF8F3] border border-[#C4B9A3]/60 rounded-sm text-sm text-[#1C1917] focus:outline-none focus:border-[#B94A2D]"
                      />
                    </div>

                    <div className="space-y-2 text-left">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#1C1917] block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-[#FAF8F3] border border-[#C4B9A3]/60 rounded-sm text-sm text-[#1C1917] focus:outline-none focus:border-[#B94A2D]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#1C1917] block">
                      Enquiry Purpose
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F3] border border-[#C4B9A3]/60 rounded-sm text-sm text-[#1C1917] focus:outline-none focus:border-[#B94A2D]"
                    >
                      <option value="commission">Commission a Bespoke Artwork</option>
                      <option value="purchase">Purchase an Available Painting</option>
                      <option value="workshop">Book a Madhubani Workshop / Masterclass</option>
                      <option value="general">General Studio Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#1C1917] block">
                      Your Message / Story Concept
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your desired artwork size, story theme, or workshop dates..."
                      className="w-full px-4 py-3 bg-[#FAF8F3] border border-[#C4B9A3]/60 rounded-sm text-sm text-[#1C1917] focus:outline-none focus:border-[#B94A2D]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center text-xs font-semibold uppercase tracking-wider py-3.5"
                  >
                    <span>Send Message to Studio</span>
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              )}
            </div>
          </div>

          {/* Right Column: Studio Info & Accordion FAQs */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Studio Info Card */}
            <div className="deckled-frame p-6 rounded-sm bg-[#FFFDF9] border border-[#E7E0D2] space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                Kalapravah Studio
              </h3>

              <div className="space-y-3 text-sm text-[#5C5652]">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#B94A2D]" />
                  <span>Delhi NCR, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#B94A2D]" />
                  <a href="mailto:hello@kalapravah.art" className="hover:text-[#B94A2D] transition-colors">
                    hello@kalapravah.art
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E7E0D2]/60 text-xs text-[#78716C]">
                <span>Studio visits welcomed by prior appointment</span>
              </div>
            </div>

            {/* Accordion FAQs */}
            <div className="space-y-3">
              <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                Frequently Asked Questions
              </h3>

              {faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="border border-[#E7E0D2] rounded-sm bg-[#FFFDF9] overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full px-4 py-3 text-left font-serif font-semibold text-sm text-[#1C1917] flex items-center justify-between hover:text-[#B94A2D]"
                  >
                    <span>{faq.q}</span>
                    {activeFaq === idx ? <ChevronUp className="w-4 h-4 text-[#B94A2D]" /> : <ChevronDown className="w-4 h-4 text-[#78716C]" />}
                  </button>
                  {activeFaq === idx && (
                    <div className="px-4 pb-3 text-xs text-[#5C5652] leading-relaxed border-t border-[#E7E0D2]/40 pt-2 bg-[#FAF8F3]">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
