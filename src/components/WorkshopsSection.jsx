import React from 'react';
import { GraduationCap, Calendar, Users, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function WorkshopsSection() {
  const workshops = [
    {
      title: "School & Institutional Workshops",
      target: "Schools, Colleges & Cultural Centers",
      duration: "2 to 4 Hours",
      groupSize: "15 to 40 Students",
      description: "Interactive learning sessions introducing students to folk storytelling, bamboo pen nib drawing, and basic Kachni line patterns.",
      features: ["All materials & handmade paper provided", "Folk motif storytelling session", "Personal framed artwork to take home"]
    },
    {
      title: "Corporate Folk Art Mindfulness",
      target: "Corporate Teams & Wellness Retreats",
      duration: "Half-Day Session",
      groupSize: "10 to 25 Professionals",
      description: "A restorative hands-on session focusing on slow, patient brushwork as a mindfulness practice for team bonding.",
      features: ["Guided line meditation", "Custom studio kit per participant", "Certificate of completion"]
    },
    {
      title: "Weekend Studio Masterclass",
      target: "Art Enthusiasts & Collectors",
      duration: "2-Day Weekend Intensive",
      groupSize: "Max 8 Apprentices",
      description: "Deep dive into natural dye preparation, Kohbar symbolism, advanced Bharni filling, and border composition.",
      features: ["Personal feedback by Rashmi Dhar", "Organic pigment mixing toolkit", "Completed masterpiece artwork"]
    }
  ];

  return (
    <section id="workshops" className="py-20 md:py-28 bg-[#F8F5EE] relative overflow-hidden border-t border-[#E7E0D2]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7E0D2]/70 border border-[#C4B9A3]/60 text-xs font-semibold text-[#1C1917]">
            <GraduationCap className="w-3.5 h-3.5 text-[#B94A2D]" />
            <span>Preserving Folk Knowledge</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] tracking-tight">
            Workshops & Teaching.
          </h2>

          <p className="text-base sm:text-lg text-[#5C5652] leading-relaxed">
            Learn Kachni fine lines, Bharni fill traditions, and the cultural memory behind Madhubani art directly from master practitioner Rashmi Dhar.
          </p>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((item, index) => (
            <div
              key={index}
              className="deckled-frame p-8 rounded-sm bg-[#FFFDF9] flex flex-col justify-between space-y-6 border border-[#E7E0D2] shadow-sm hover:shadow-xl transition-all"
            >
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C87A38]">
                  {item.target}
                </span>

                <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                  {item.title}
                </h3>

                <p className="text-sm text-[#5C5652] leading-relaxed">
                  {item.description}
                </p>

                {/* Specs */}
                <div className="pt-2 space-y-2 text-xs text-[#78716C]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#B94A2D]" />
                    <span>Duration: {item.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-[#B94A2D]" />
                    <span>Group Size: {item.groupSize}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="pt-4 border-t border-[#E7E0D2]/60 space-y-2">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[#44403C]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3E5A47] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Action */}
              <a
                href="#contact"
                className="btn-outline w-full justify-center text-xs uppercase font-semibold tracking-wider hover:bg-[#1C1917] hover:text-white"
              >
                <span>Book / Host Workshop</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
