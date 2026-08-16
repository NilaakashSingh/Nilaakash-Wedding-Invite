import { weddingConfig } from '@/data/wedding';
import { PaisleyDivider, LotusIcon } from './Decorations';
import { Hotel, Plane, MapPin } from 'lucide-react';

export function Travel() {
  return (
    <section id="travel" className="relative py-24 md:py-32 bg-cream-50 overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-20" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <LotusIcon className="w-12 h-12 mx-auto text-saffron-500 mb-4" color="#e35d0c" />
          <h2 className="font-cinzel text-3xl md:text-5xl text-saffron-800 mb-3">
            Travel & Accommodation
          </h2>
          <PaisleyDivider className="w-64 h-10 mx-auto mb-4" color="#d97706" />
          <p className="font-serif italic text-lg md:text-xl text-charcoal-600 max-w-2xl mx-auto">
            Udaipur — the City of Lakes — awaits. Here's everything you need to plan your stay.
          </p>
        </div>

        {/* Venue info */}
        <div className="glass-card rounded-2xl p-8 mb-10 text-center">
          <div className="w-14 h-14 rounded-full bg-saffron-100 flex items-center justify-center mx-auto mb-4">
            <MapPin size={28} className="text-saffron-600" />
          </div>
          <h3 className="font-cinzel text-2xl text-saffron-800 mb-2">{weddingConfig.venue}</h3>
          <p className="font-body text-charcoal-600">{weddingConfig.city}</p>
        </div>

        {/* Getting there */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center flex-shrink-0">
              <Plane size={24} className="text-saffron-600" />
            </div>
            <div>
              <h4 className="font-heading text-lg text-charcoal-800 mb-1">By Air</h4>
              <p className="font-body text-sm text-charcoal-600 leading-relaxed">
                Maharana Pratap Airport (UDR) is ~30 minutes from the venue. Direct flights
                available from Delhi, Mumbai, and Bangalore.
              </p>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#e35d0c" strokeWidth="1.5">
                <rect x="4" y="3" width="16" height="16" rx="2" />
                <path d="M4 11h16M8 3v8M16 3v8M8 19l-2 2M16 19l2 2" />
              </svg>
            </div>
            <div>
              <h4 className="font-heading text-lg text-charcoal-800 mb-1">By Rail</h4>
              <p className="font-body text-sm text-charcoal-600 leading-relaxed">
                Udaipur Railway Station is well-connected. The venue is a 20-minute taxi ride
                from the station.
              </p>
            </div>
          </div>
        </div>

        {/* Hotels */}
        <div>
          <h3 className="font-heading text-xl text-saffron-700 text-center mb-6">
            Recommended Accommodation
          </h3>
          <div className="space-y-4">
            {weddingConfig.hotels.map((hotel, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-5 flex items-center gap-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-marigold-100 flex items-center justify-center flex-shrink-0">
                  <Hotel size={24} className="text-marigold-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="font-heading text-lg text-charcoal-800">{hotel.name}</h4>
                    <span className="font-body text-xs text-saffron-600 bg-saffron-50 px-2 py-0.5 rounded-full">
                      {hotel.distance}
                    </span>
                  </div>
                  <p className="font-body text-sm text-charcoal-600 mt-1">{hotel.note}</p>
                </div>
                <div className="text-right">
                  <p className="font-cinzel text-lg text-saffron-700">{hotel.rate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
