import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, Check, HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Are all paintings completely hand-drawn?",
      a: "Yes. Every piece from Kalapravah is rendered entirely by hand on handmade paper using organic pigments and permanent ink. No digital prints or reproduction press shortcuts are used."
    },
    {
      q: "Can I commission a painting in custom dimensions or themes?",
      a: "Absolutely. Artist Rashmi Dhar works closely with collectors to compose Madhubani pieces around your specific family history, preferred color palettes, and wall dimensions."
    },
    {
      q: "Do you ship artworks internationally?",
      a: "Yes. All artworks are carefully rolled in acid-free paper and shipped in heavy-duty protective wooden/PVC tubes with full insurance and tracking worldwide."
    },
    {
      q: "How can schools or corporate spaces host a workshop?",
      a: "You can send us an inquiry with your preferred dates and participant numbers. We provide customized curriculum modules and complete art kits for institutional groups."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#F8F5EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B94A2D] block mb-2">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917]">
            Let's make something by hand
          </h2>
          <p className="mt-3 text-base text-[#5C5652]">
            Enquire about available paintings, commission a piece, or invite Kalapravah to host a Madhubani workshop.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Studio Contact Cards Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="deckled-frame bg-[#FFFDF9] p-6 rounded-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#FAF8F3] border border-[#E7E0D2] flex items-center justify-center text-[#B94A2D] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#78716C]">Direct Email</span>
                  <a
                    href="mailto:hello@kalapravah.art"
                    className="font-serif text-xl font-bold text-[#1C1917] block hover:text-[#B94A2D] transition-colors"
                  >
                    hello@kalapravah.art
                  </a>
                  <p className="text-xs text-[#78716C] mt-1">Direct studio inbox for commissions & inquiries</p>
                </div>
              </div>
            </div>

            <div className="deckled-frame bg-[#FFFDF9] p-6 rounded-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#FAF8F3] border border-[#E7E0D2] flex items-center justify-center text-[#C87A38] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#78716C]">Studio Location</span>
                  <h4 className="font-serif text-xl font-bold text-[#1C1917]">
                    Delhi NCR, India
                  </h4>
                  <p className="text-xs text-[#78716C] mt-1">Studio visits strictly by prior appointment</p>
                </div>
              </div>
            </div>

            <div className="deckled-frame bg-[#FFFDF9] p-6 rounded-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#FAF8F3] border border-[#E7E0D2] flex items-center justify-center text-[#1E304B] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#78716C]">Response Time</span>
                  <h4 className="font-serif text-xl font-bold text-[#1C1917]">
                    Within 2 Working Days
                  </h4>
                  <p className="text-xs text-[#78716C] mt-1">Rashmi personally reads and responds to every note</p>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="pt-4 space-y-3">
              <h4 className="font-serif text-xl font-bold text-[#1C1917]">Frequently Asked Questions</h4>
              <div className="space-y-2">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-[#FFFDF9] border border-[#E7E0D2] rounded">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-3.5 text-left text-xs font-bold text-[#1C1917] flex items-center justify-between"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-[#78716C] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="px-3.5 pb-3 text-xs text-[#5C5652] border-t border-[#E7E0D2]/50 pt-2 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 deckled-frame bg-[#FFFDF9] p-8 sm:p-10 rounded-sm text-left">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B94A2D]">
                    Start A Conversation
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1917] mt-1">
                    Send a note to the studio
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1C1917] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F3] border border-[#C4B9A3] rounded focus:outline-none focus:border-[#B94A2D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1C1917] mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F3] border border-[#C4B9A3] rounded focus:outline-none focus:border-[#B94A2D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1C1917] mb-1">Subject / Inquiry Type</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F3] border border-[#C4B9A3] rounded focus:outline-none focus:border-[#B94A2D]"
                  >
                    <option value="General Inquiry">General Studio Inquiry</option>
                    <option value="Available Painting Purchase">Inquire About Available Painting</option>
                    <option value="Bespoke Commission">Commission Artwork</option>
                    <option value="Host Workshop">Host a Workshop (School/Institution)</option>
                    <option value="Exhibition Press">Exhibition & Media Press</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1C1917] mb-1">Your Message</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about the painting, custom narrative, or workshop details..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F3] border border-[#C4B9A3] rounded focus:outline-none focus:border-[#B94A2D]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-sm font-semibold !py-3.5"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-[#3E5A47] text-white rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#1C1917]">
                  Thank You for Reaching Out
                </h3>
                <p className="text-sm text-[#5C5652] max-w-md mx-auto">
                  Your message has been sent to <strong>hello@kalapravah.art</strong>. Rashmi Dhar will reply to <em>{form.email}</em> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline !py-2 !px-4 text-xs"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
