import { weddingConfig } from '@/data/wedding';
import { PaisleyDivider, GaneshaIcon } from './Decorations';
import { Heart, MapPin } from 'lucide-react';

export function OurStory() {
  return (
    <section id="story" className="relative py-24 md:py-32 bg-cream-50 overflow-hidden">
      {/* Subtle dotted background */}
      <div className="absolute inset-0 dotted-bg opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <GaneshaIcon className="w-14 h-14 mx-auto text-saffron-500 mb-4" color="#e35d0c" />
          <h2 className="font-cinzel text-3xl md:text-5xl text-saffron-800 mb-3">
            Our Story
          </h2>
          <PaisleyDivider className="w-64 h-10 mx-auto mb-4" color="#d97706" />
          <p className="font-serif italic text-lg md:text-xl text-charcoal-600 max-w-2xl mx-auto">
            Two souls, two families, one beautiful journey that began with a chance meeting
            by the lakes of Udaipur.
          </p>
        </div>

        {/* Couple cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Groom */}
          <div className="group relative rounded-2xl overflow-hidden bg-white shadow-xl shadow-saffron-900/10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div className="relative h-80 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/16632447/pexels-photo-16632447.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt={weddingConfig.groom.fullName}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="font-cinzel text-3xl text-cream-50">{weddingConfig.groom.name}</h3>
                <p className="font-body text-sm text-cream-200/80 mt-1">
                  {weddingConfig.groom.hometown}
                </p>
              </div>
            </div>
            <div className="p-6 text-center">
              <p className="font-body text-sm text-saffron-700 mb-3">
                {weddingConfig.groom.parents}
              </p>
              <p className="font-serif text-lg text-charcoal-600 leading-relaxed">
                {weddingConfig.groom.bio}
              </p>
            </div>
          </div>

          {/* Bride */}
          <div className="group relative rounded-2xl overflow-hidden bg-white shadow-xl shadow-saffron-900/10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div className="relative h-80 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/29311977/pexels-photo-29311977.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt={weddingConfig.bride.fullName}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="font-cinzel text-3xl text-cream-50">{weddingConfig.bride.name}</h3>
                <p className="font-body text-sm text-cream-200/80 mt-1">
                  {weddingConfig.bride.hometown}
                </p>
              </div>
            </div>
            <div className="p-6 text-center">
              <p className="font-body text-sm text-saffron-700 mb-3">
                {weddingConfig.bride.parents}
              </p>
              <p className="font-serif text-lg text-charcoal-600 leading-relaxed">
                {weddingConfig.bride.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-saffron-300 to-transparent -translate-x-1/2" />

            {[
              {
                date: 'Spring 2023',
                title: 'First Meeting',
                text: "Nilaakash and Anjali met at a mutual friend's destination wedding in Udaipur. A conversation by the lake turned into a night of laughter and dancing.",
              },
              {
                date: 'Summer 2023',
                title: 'First Date',
                text: "Nilaakash flew to Ahmedabad to take Anjali on a traditional Gujarati thali dinner, followed by a long walk through the old city.",
              },
              {
                date: 'Winter 2024',
                title: 'The Proposal',
                text: "On a starlit evening by Lake Pichola, Nilaakash got down on one knee. Anjali said yes before he could even finish the question.",
              },
              {
                date: 'December 2026',
                title: 'The Wedding',
                text: "Surrounded by family and friends, we begin our forever — in the same city where our story began.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative flex items-center mb-12 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                <div className="hidden md:block w-1/2" />
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-saffron-400 to-marigold-500 border-4 border-cream-50 shadow-md z-10" />
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-card rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
                    <p className="font-body text-xs text-saffron-600 uppercase tracking-widest mb-1">
                      {item.date}
                    </p>
                    <h4 className="font-heading text-xl text-charcoal-800 mb-2">{item.title}</h4>
                    <p className="font-serif text-charcoal-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Venue note */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-saffron-700">
            <Heart size={18} className="text-crimson-500" />
            <span className="font-heading text-lg">Getting married at</span>
            <MapPin size={18} />
            <span className="font-heading text-lg">{weddingConfig.venue}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
