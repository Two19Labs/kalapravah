export const FAQ_CATEGORIES = [
  "All",
  "Buying & Authenticity",
  "Styles & Heritage",
  "Custom Commissions",
  "Shipping & Care"
];

export const FAQS = [
  {
    id: "faq-buy-authentic",
    category: "Buying & Authenticity",
    question: "Where can I buy authentic, original Madhubani paintings online?",
    answer: "You can acquire 100% authentic, hand-painted Madhubani paintings directly from master artist Rashmi Dhar through the Kalapravah gallery. Every artwork is handcrafted on acid-free cotton rag paper using traditional dip pens and natural pigment washes—never machine-printed, stenciled, or mass-produced. Each original piece includes an artist-signed Certificate of Authenticity.",
    keywords: ["buy authentic Madhubani painting online", "original Mithila art for sale", "Rashmi Dhar paintings", "hand-painted Indian folk art"]
  },
  {
    id: "faq-identify-authentic",
    category: "Buying & Authenticity",
    question: "How can I distinguish an authentic handmade Madhubani painting from a digital print?",
    answer: "Authentic Madhubani art features signature double-line borders filled with hand-drawn hatching, subtle organic variations in pen pressure, and natural pigment absorption on textured cotton rag paper. In contrast, machine reproductions show unnatural geometric symmetry, flat glossy surfaces, and microscopic printer halftone dot grids under magnification.",
    keywords: ["how to identify authentic Madhubani", "real vs fake Mithila painting", "handmade paper art verification", "genuine Madhubani artwork"]
  },
  {
    id: "faq-certificate-provenance",
    category: "Buying & Authenticity",
    question: "Does each Kalapravah painting include a Certificate of Authenticity?",
    answer: "Yes. Every original artwork from Kalapravah is accompanied by a physical, artist-signed Certificate of Authenticity (CoA). It officially certifies the artwork's title, style category (Kachni, Bharni, or Godna), medium, dimensions, year of creation, and exclusive gallery provenance for collectors and appraisers.",
    keywords: ["Certificate of Authenticity Madhubani", "art provenance India", "collector grade Mithila art", "certified folk art"]
  },
  {
    id: "faq-styles-difference",
    category: "Styles & Heritage",
    question: "What is the difference between Kachni, Bharni, and Godna styles in Madhubani art?",
    answer: "Kachni relies on microscopic monochromatic line hatching executed with fine dip pens; Bharni features vibrant, solid color fills bounded by bold outlines celebrating nature and mythology; and Godna uses rhythmic tattoo-inspired stippling, concentric wheels, and ancient tribal symbols developed by indigenous Mithila communities.",
    keywords: ["difference between Kachni and Bharni", "Godna Madhubani painting", "Mithila art styles explained", "Kachni fine line art"]
  },
  {
    id: "faq-materials-pigments",
    category: "Styles & Heritage",
    question: "What materials, pigments, and surfaces are used in Kalapravah paintings?",
    answer: "Artworks are crafted on heavy 300+ GSM archival handmade cotton rag paper. Hand-carved bamboo twigs and fine metal dip pens are used for linework, combined with organic earth washes (turmeric ochre, lampblack soot, mineral pigments) and lightfast artist-grade acrylic inks to ensure vibrant, museum-grade longevity.",
    keywords: ["pigments used in Madhubani painting", "handmade paper Mithila art", "dip nib folk art ink", "traditional Indian art materials"]
  },
  {
    id: "faq-motifs-meaning",
    category: "Styles & Heritage",
    question: "What is the symbolic meaning of motifs like the Matsya Fish, Tree of Life, and Kohbar?",
    answer: "Mithila motifs are sacred auspicious emblems: the Matsya (Fish) represents Lord Vishnu's first avatar, cosmic water energy, and fertility; the Tree of Life symbolizes the rooted cosmic axis connecting heaven and earth; while the Kohbar represents divine nuptial harmony, prosperity, and auspicious blessings.",
    keywords: ["Madhubani motif symbolism", "Matsya fish meaning Mithila art", "Tree of Life Indian folk art", "Kohbar painting significance"]
  },
  {
    id: "faq-custom-commissions",
    category: "Custom Commissions",
    question: "How do I commission a custom Madhubani painting for home decor or interior design?",
    answer: "You can commission a bespoke painting by reaching out with your wall dimensions, preferred style (Kachni, Bharni, or Godna), and palette preferences. Artist Rashmi Dhar collaborates closely with you—from preliminary pencil concept sketches and palette approvals to studio progress previews and museum-grade packaged delivery.",
    keywords: ["custom Madhubani painting commission", "bespoke Mithila art interior design", "commission traditional Indian artist", "large scale Madhubani wall art"]
  },
  {
    id: "faq-pricing-cost",
    category: "Custom Commissions",
    question: "How much does an original Madhubani painting cost, and what determines its value?",
    answer: "Pricing reflects the immense time, paper scale, and microscopic detailing required—a single fine-line Kachni mandala often takes 40 to 80 hours of hand-hatching with zero room for error. Small collector studies start around ₹3,000–₹8,000, while large-scale exhibition masterpieces and bespoke installations range higher based on complexity and provenance.",
    keywords: ["Madhubani painting cost", "price of original Mithila art", "authentic Indian folk art pricing", "is Madhubani painting a good investment"]
  },
  {
    id: "faq-shipping-international",
    category: "Shipping & Care",
    question: "Do you ship original artworks internationally to the USA, UK, UAE, Europe, and worldwide?",
    answer: "Yes, Kalapravah ships worldwide with tracked express couriers (DHL, FedEx). Unframed paintings on handmade paper are wrapped in acid-free glassine sheets, padded, and safely sealed in heavy-duty crush-proof PVC tubes to protect against moisture and transit shock, with insurance included on every order.",
    keywords: ["international shipping Indian folk art", "buy Madhubani painting USA", "ship Mithila art UK Europe", "safe artwork packaging"]
  },
  {
    id: "faq-framing-care",
    category: "Shipping & Care",
    question: "How should I frame, clean, and preserve an original Madhubani painting on handmade paper?",
    answer: "Frame your artwork behind UV-protective glass with a 1.5 to 2-inch acid-free window mat board to prevent the glass from contacting the paper surface. Display in well-ventilated indoor living or office areas away from direct sunlight, damp exterior walls, or high-humidity zones to preserve pigment brilliance for generations.",
    keywords: ["how to preserve Madhubani painting", "framing handmade paper art", "care instructions folk painting", "UV glass framing for art"]
  },
  {
    id: "faq-workshops-classes",
    category: "Shipping & Care",
    question: "Does Kalapravah offer offline workshops, online masterclasses, or corporate sessions?",
    answer: "Yes. Master artist Rashmi Dhar conducts hands-on Madhubani masterclasses for private groups, universities, museums (including India Habitat Centre), and corporate wellness events. Both offline immersive studio workshops and live interactive virtual sessions are available.",
    keywords: ["Madhubani art workshop Delhi NCR", "learn Mithila painting online", "corporate Indian art workshop", "Rashmi Dhar art classes"]
  }
];

export function getFaqSchemaJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
