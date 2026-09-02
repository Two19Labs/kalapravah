import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ArrowLeft, Send, Feather } from 'lucide-react';

export default function CommissionBuilder({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    theme: 'Tree of Life & Ancestral Memory',
    size: 'Medium (20 × 28 inches)',
    palette: 'Classic Natural & Ochre',
    framing: 'Deckled Edge Handmade Paper (Unframed)',
    name: '',
    email: '',
    notes: ''
  });

  if (!isOpen) return null;

  const themes = [
    { name: 'Vighnaharta / Deities', desc: 'Sacred iconography (Ganesha, Lakshmi, Krishna)' },
    { name: 'Tree of Life & Ancestral Memory', desc: 'Branching tree with songbirds and fauna' },
    { name: 'Monsoon Peacock Court', desc: 'Elaborate peacocks in dense kachni foliage' },
    { name: 'Godna Tattoo Mandala', desc: 'Ancestral tattoo concentric circles & symbolism' },
    { name: 'Bespoke Family Narrative', desc: 'Custom story composed around your own history' },
  ];

  const sizes = [
    { name: 'Intimate (14 × 18 inches)', desc: 'Ideal for study nooks and personal desks' },
    { name: 'Medium (20 × 28 inches)', desc: 'Balanced statement piece for living spaces' },
    { name: 'Grand Canvas (26 × 36 inches)', desc: 'Museum-scale focal artwork for major walls' },
    { name: 'Custom Architecture Dimensions', desc: 'Bespoke sizes for murals and corporate halls' },
  ];

  const palettes = [
    { name: 'Classic Natural & Ochre', desc: 'Terracotta red, turmeric yellow & soot black' },
    { name: 'Pure Monochrome Kachni', desc: 'Crisp black Indian ink line work on cream paper' },
    { name: 'Indigo & Gold Wash', desc: 'Deep cobalt blue with golden turmeric highlights' },
    { name: 'Vivid Garden Colors', desc: 'Full spectrum of natural botanical pigments' },
  ];

  const framings = [
    { name: 'Deckled Edge Handmade Paper (Unframed)', desc: 'Preserves the raw organic paper edges' },
    { name: 'Dark Teak Wood Frame', desc: 'Deep warm wood border with UV protective glass' },
    { name: 'Classic Gold Trim Frame', desc: 'Subtle antique gold foil frame' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop animate-fade-in p-4 overflow-y-auto">
      <div className="bg-[#FAF8F3] border border-[#C4B9A3] w-full max-w-3xl rounded-sm shadow-2xl overflow-hidden relative my-auto">
        
        {/* Header */}
        <div className="p-6 bg-[#FAF8F3] border-b border-[#E7E0D2] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#B94A2D] text-white flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                Bespoke Commission Builder
              </h3>
              <p className="text-xs text-[#78716C]">
                Compose your own Madhubani artwork with artist Rashmi Dhar
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#E7E0D2] hover:bg-[#1C1917] hover:text-white text-[#1C1917] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        {!submitted ? (
          <div className="p-6 sm:p-8 space-y-6 text-left">
            
            {/* Step Progress Bar */}
            <div className="flex items-center justify-between text-xs font-semibold text-[#78716C] border-b border-[#E7E0D2] pb-4">
              <span className={step >= 1 ? 'text-[#B94A2D]' : ''}>1. Theme</span>
              <span className={step >= 2 ? 'text-[#B94A2D]' : ''}>2. Size</span>
              <span className={step >= 3 ? 'text-[#B94A2D]' : ''}>3. Palette & Frame</span>
              <span className={step >= 4 ? 'text-[#B94A2D]' : ''}>4. Submit</span>
            </div>

            {/* Step 1: Theme */}
            {step === 1 && (
              <div className="space-y-4">
                <h4 className="font-serif text-xl font-bold text-[#1C1917]">
                  Select Narrative Theme:
                </h4>
                <div className="space-y-2.5">
                  {themes.map((t) => (
                    <button
                      key={t.name}
                      onClick={() => setFormData({ ...formData, theme: t.name })}
                      className={`w-full p-4 rounded text-left border transition-all flex items-center justify-between ${
                        formData.theme === t.name
                          ? 'border-[#B94A2D] bg-[#FFFDF9] ring-1 ring-[#B94A2D]'
                          : 'border-[#E7E0D2] bg-[#FAF8F3] hover:bg-[#FFFDF9]'
                      }`}
                    >
                      <div>
                        <span className="font-serif font-bold text-base text-[#1C1917] block">{t.name}</span>
                        <span className="text-xs text-[#78716C]">{t.desc}</span>
                      </div>
                      {formData.theme === t.name && <Check className="w-5 h-5 text-[#B94A2D]" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Size */}
            {step === 2 && (
              <div className="space-y-4">
                <h4 className="font-serif text-xl font-bold text-[#1C1917]">
                  Select Canvas Dimensions:
                </h4>
                <div className="space-y-2.5">
                  {sizes.map((s) => (
                    <button
                      key={s.name}
                      onClick={() => setFormData({ ...formData, size: s.name })}
                      className={`w-full p-4 rounded text-left border transition-all flex items-center justify-between ${
                        formData.size === s.name
                          ? 'border-[#B94A2D] bg-[#FFFDF9] ring-1 ring-[#B94A2D]'
                          : 'border-[#E7E0D2] bg-[#FAF8F3] hover:bg-[#FFFDF9]'
                      }`}
                    >
                      <div>
                        <span className="font-serif font-bold text-base text-[#1C1917] block">{s.name}</span>
                        <span className="text-xs text-[#78716C]">{s.desc}</span>
                      </div>
                      {formData.size === s.name && <Check className="w-5 h-5 text-[#B94A2D]" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Palette & Framing */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-serif text-lg font-bold text-[#1C1917]">
                    Color Palette Preference:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {palettes.map((p) => (
                      <button
                        key={p.name}
                        onClick={() => setFormData({ ...formData, palette: p.name })}
                        className={`p-3 rounded text-left border transition-all ${
                          formData.palette === p.name
                            ? 'border-[#B94A2D] bg-[#FFFDF9] ring-1 ring-[#B94A2D]'
                            : 'border-[#E7E0D2] bg-[#FAF8F3]'
                        }`}
                      >
                        <span className="font-bold text-xs text-[#1C1917] block">{p.name}</span>
                        <span className="text-[11px] text-[#78716C]">{p.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-serif text-lg font-bold text-[#1C1917]">
                    Framing Preference:
                  </h4>
                  <div className="space-y-2">
                    {framings.map((f) => (
                      <button
                        key={f.name}
                        onClick={() => setFormData({ ...formData, framing: f.name })}
                        className={`w-full p-3 rounded text-left border transition-all flex items-center justify-between ${
                          formData.framing === f.name
                            ? 'border-[#B94A2D] bg-[#FFFDF9] ring-1 ring-[#B94A2D]'
                            : 'border-[#E7E0D2] bg-[#FAF8F3]'
                        }`}
                      >
                        <div>
                          <span className="font-bold text-xs text-[#1C1917] block">{f.name}</span>
                          <span className="text-[11px] text-[#78716C]">{f.desc}</span>
                        </div>
                        {formData.framing === f.name && <Check className="w-4 h-4 text-[#B94A2D]" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact Details & Submit */}
            {step === 4 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="font-serif text-xl font-bold text-[#1C1917]">
                  Your Contact & Story Notes:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1C1917] mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-[#C4B9A3] rounded focus:outline-none focus:border-[#B94A2D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#1C1917] mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ananya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-[#C4B9A3] rounded focus:outline-none focus:border-[#B94A2D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1C1917] mb-1">
                    Special Story Notes / Custom Elements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe any personal family motifs, favorite elements, or room placement details..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#C4B9A3] rounded focus:outline-none focus:border-[#B94A2D]"
                  />
                </div>

                {/* Configuration Summary Pill */}
                <div className="p-3 bg-[#E7E0D2]/50 rounded text-xs space-y-1 text-[#44403C]">
                  <div><strong>Theme:</strong> {formData.theme}</div>
                  <div><strong>Size:</strong> {formData.size}</div>
                  <div><strong>Palette:</strong> {formData.palette}</div>
                  <div><strong>Framing:</strong> {formData.framing}</div>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-sm font-semibold !py-3"
                >
                  <Send className="w-4 h-4" /> Send Commission Proposal to Rashmi
                </button>
              </form>
            )}

            {/* Step Navigation Bar */}
            <div className="pt-4 border-t border-[#E7E0D2] flex items-center justify-between">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="btn-outline !py-2 !px-4 text-xs flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
              ) : <div />}

              {step < 4 && (
                <button
                  onClick={() => setStep(step + 1)}
                  className="btn-primary !py-2 !px-5 text-xs flex items-center gap-1.5"
                >
                  Continue <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>
        ) : (
          /* Confirmation State */
          <div className="p-8 sm:p-12 text-center space-y-4">
            <div className="w-14 h-14 bg-[#3E5A47] text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-[#1C1917]">
              Commission Request Received!
            </h3>
            <p className="text-sm text-[#5C5652] max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Artist Rashmi Dhar has received your custom brief for <em>"{formData.theme}"</em>. She will review your requirements and respond via email within two working days with composition sketches and pricing.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="btn-primary !py-2.5 !px-6 text-sm"
              >
                Return to Gallery
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
