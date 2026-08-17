import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF8F3] relative overflow-hidden border-t border-[#E7E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Callout */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] tracking-tight leading-[1.12]">
            Bring a hand-painted story into your space
          </h2>

          <p className="text-base sm:text-lg text-[#5C5652] leading-relaxed max-w-2xl mx-auto">
            Enquire about available paintings, commission a piece, or invite Kalapravah to host a Madhubani workshop.
          </p>

          <div className="pt-2">
            {!showForm ? (
              <button
                onClick={() => setShowForm(true)}
                className="btn-primary text-sm sm:text-base px-8 py-3.5"
              >
                <span>Start a conversation</span>
              </button>
            ) : null}
          </div>
        </div>

        {/* Contact Form Overlay / Card */}
        {showForm && (
          <div className="mt-12 max-w-2xl mx-auto animate-fade-in">
            <div className="deckled-frame p-8 md:p-10 rounded-sm bg-[#FFFDF9] border border-[#E7E0D2] shadow-xl text-left">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#3E5A47] mx-auto" />
                  <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                    Message Sent
                  </h3>
                  <p className="text-sm text-[#5C5652]">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setShowForm(false); }}
                    className="btn-outline text-xs uppercase"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="space-y-2">
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

                  <div className="space-y-2">
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

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#1C1917] block">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enquire about available paintings, custom commissions, or workshops..."
                      className="w-full px-4 py-3 bg-[#FAF8F3] border border-[#C4B9A3]/60 rounded-sm text-sm text-[#1C1917] focus:outline-none focus:border-[#B94A2D]"
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="btn-primary flex-1 justify-center text-xs font-semibold uppercase py-3"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="btn-outline text-xs uppercase px-6"
                    >
                      Cancel
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
