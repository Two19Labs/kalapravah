import React, { useState } from 'react';
import { Calendar, Users, MapPin, Sparkles, Check, ArrowRight, X, Clock } from 'lucide-react';

export default function WorkshopsSection() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [booked, setBooked] = useState(false);
  const [bookingForm, setBookingForm] = useState({ name: '', email: '', seats: 1 });

  const workshops = [
    {
      id: 'kachni-masterclass',
      title: 'Kachni Precision Lines Masterclass',
      type: 'Studio Weekend Session',
      location: 'Delhi NCR Studio',
      duration: '4 Hours (Single Day)',
      audience: 'Adults & Enthusiasts (Beginner to Intermediate)',
      description: 'Learn the meditative art of fine hatched ink work. Understand double contours, peacock feather geometry, and traditional motif compositions.',
      materials: 'Handmade fiber paper, dip pens, and ink included.',
      nextDate: 'Saturday, Aug 29, 2026'
    },
    {
      id: 'natural-pigments',
      title: 'Natural Pigments & Mithila Storytelling',
      type: 'Virtual Live Workshop',
      location: 'Online via Zoom',
      duration: '3 Hours',
      audience: 'Global Art Collectors & Enthusiasts',
      description: 'Discover how organic dyes are prepared from turmeric, indigo, madder root, and clay. Paint your own sacred lotus under Rashmi’s live guidance.',
      materials: 'Digital guide & pigment mixing kit shipped in advance.',
      nextDate: 'Sunday, Sept 06, 2026'
    },
    {
      id: 'school-institutional',
      title: 'Institutional & School Folk Immersion',
      type: 'On-Site Group Program',
      location: 'Schools / Universities / Cultural Hubs',
      duration: 'Half Day / Full Day Modules',
      audience: 'Students, Faculty & Corporate Groups',
      description: 'Customized folk art appreciation workshops introducing younger generations to the rich intangible heritage of Mithila Madhubani art.',
      materials: 'Full group art kits provided.',
      nextDate: 'Flexible Schedule on Request'
    }
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <section id="workshops" className="py-24 bg-[#FAF8F3] border-b border-[#E7E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B94A2D] block mb-2">
            Learning & Heritage
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917]">
            Workshops & Teaching
          </h2>
          <p className="mt-3 text-base text-[#5C5652]">
            Sessions for schools, institutions and enthusiasts — learning kachni line, bharni fill and the stories behind them.
          </p>
        </div>

        {/* Workshop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((w) => (
            <div
              key={w.id}
              className="deckled-frame bg-[#FFFDF9] p-6 rounded-sm text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C87A38] bg-[#E7E0D2]/50 px-2.5 py-1 rounded">
                    {w.type}
                  </span>
                  <span className="text-xs text-[#78716C] font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {w.duration}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                  {w.title}
                </h3>

                <p className="text-xs text-[#5C5652] leading-relaxed">
                  {w.description}
                </p>

                <div className="pt-2 space-y-1.5 text-xs text-[#44403C]">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#B94A2D] shrink-0" />
                    <span>{w.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#1E304B] shrink-0" />
                    <span className="font-semibold text-[#1C1917]">{w.nextDate}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E7E0D2]">
                <button
                  onClick={() => {
                    setSelectedWorkshop(w);
                    setBooked(false);
                  }}
                  className="btn-primary w-full justify-center text-xs font-semibold"
                >
                  Reserve Workshop Seat
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Booking Drawer Modal */}
      {selectedWorkshop && (
        <div className="modal-backdrop animate-fade-in p-4 overflow-y-auto">
          <div className="bg-[#FAF8F3] border border-[#C4B9A3] w-full max-w-lg rounded-sm shadow-2xl p-6 sm:p-8 text-left my-auto relative">
            <button
              onClick={() => setSelectedWorkshop(null)}
              className="absolute top-4 right-4 text-[#1C1917] hover:text-[#B94A2D]"
            >
              <X className="w-5 h-5" />
            </button>

            {!booked ? (
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B94A2D]">
                    Workshop Reservation
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                    {selectedWorkshop.title}
                  </h3>
                  <p className="text-xs text-[#78716C] mt-1">
                    {selectedWorkshop.nextDate} • {selectedWorkshop.location}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1C1917] mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#C4B9A3] rounded focus:outline-none focus:border-[#B94A2D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1C1917] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#C4B9A3] rounded focus:outline-none focus:border-[#B94A2D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1C1917] mb-1">Number of Participants</label>
                  <select
                    value={bookingForm.seats}
                    onChange={(e) => setBookingForm({ ...bookingForm, seats: Number(e.target.value) })}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#C4B9A3] rounded focus:outline-none focus:border-[#B94A2D]"
                  >
                    <option value={1}>1 Seat</option>
                    <option value={2}>2 Seats</option>
                    <option value={3}>3 Seats</option>
                    <option value={5}>Group Booking (5+ Seats)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-sm font-semibold !py-3"
                >
                  Confirm Reservation Request
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 bg-[#3E5A47] text-white rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                  Reservation Confirmed!
                </h3>
                <p className="text-xs text-[#5C5652]">
                  We have saved {bookingForm.seats} seat(s) for <strong>{bookingForm.name}</strong> for the <em>{selectedWorkshop.title}</em>. Confirmation details sent to <em>{bookingForm.email}</em>.
                </p>
                <button
                  onClick={() => setSelectedWorkshop(null)}
                  className="btn-primary !py-2 !px-4 text-xs"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
