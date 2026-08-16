import { weddingConfig } from '@/data/wedding';
import { PaisleyDivider, LotusIcon } from './Decorations';
import { Clock, MapPin, Shirt, Calendar } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  flower: <LotusIcon className="w-6 h-6" color="#f59332" />,
  sun: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#f59332" strokeWidth="1.5">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  ),
  music: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#f59332" strokeWidth="1.5">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#f59332" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  sparkles: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#f59332" strokeWidth="1.5">
      <path d="M12 3l1.9 5.8L19.7 10.7l-5.8 1.9L12 18.4l-1.9-5.8L4.3 10.7l5.8-1.9L12 3z" />
      <path d="M19 14l.8 2.4L22 17.2l-2.2.8L19 20l-.8-2L16 17.2l2.2-.8L19 14z" />
    </svg>
  ),
};

export function Events() {
  return (
    <section id="events" className="relative py-24 md:py-32 bg-gradient-to-b from-cream-100 to-cream-50 overflow-hidden">
      <div className="absolute inset-0 mandala-bg" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <LotusIcon className="w-12 h-12 mx-auto text-saffron-500 mb-4" color="#e35d0c" />
          <h2 className="font-cinzel text-3xl md:text-5xl text-saffron-800 mb-3">
            Wedding Celebrations
          </h2>
          <PaisleyDivider className="w-64 h-10 mx-auto mb-4" color="#d97706" />
          <p className="font-serif italic text-lg md:text-xl text-charcoal-600 max-w-2xl mx-auto">
            Five days of joy, rituals, and festivities. We would be honored to have you join us
            for any or all of these celebrations.
          </p>
        </div>

        {/* Events grid */}
        <div className="space-y-8">
          {weddingConfig.events.map((event, i) => (
            <div
              key={event.id}
              className={`group relative flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-saffron-900/10 transition-all duration-500 group-hover:shadow-2xl">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent" />
                  {/* Event number badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-saffron-500 to-marigold-600 flex items-center justify-center text-white font-cinzel text-lg shadow-lg">
                    {i + 1}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="glass-card rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-saffron-50 flex items-center justify-center border border-saffron-200">
                      {iconMap[event.icon]}
                    </div>
                    <h3 className="font-cinzel text-2xl md:text-3xl text-saffron-800">
                      {event.name}
                    </h3>
                  </div>

                  <p className="font-serif text-lg text-charcoal-600 leading-relaxed mb-5">
                    {event.description}
                  </p>

                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3 text-charcoal-700">
                      <Calendar size={16} className="text-saffron-600" />
                      <span className="font-body text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-charcoal-700">
                      <Clock size={16} className="text-saffron-600" />
                      <span className="font-body text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-charcoal-700">
                      <MapPin size={16} className="text-saffron-600" />
                      <span className="font-body text-sm">{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-3 text-charcoal-700">
                      <Shirt size={16} className="text-saffron-600" />
                      <span className="font-body text-sm">{event.dressCode}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
