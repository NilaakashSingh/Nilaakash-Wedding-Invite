import { useState } from 'react';
import { weddingConfig } from '@/data/wedding';
import { useCountdown } from '@/hooks/useCountdown';

export function Hero() {
  const [inviteType, setInviteType] = useState<'groom' | 'bride'>('groom');
  const time = useCountdown(weddingConfig.weddingDate);

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Mins', value: time.minutes },
  ];

  return (
    <>
      <section id="home" className="px-4 md:px-8 pt-4 pb-8 flex flex-col items-center text-center">
        <div className="w-full flex border-b border-royal-gold/30 mb-8 max-w-sm mx-auto">
          <button
            onClick={() => setInviteType('groom')}
            className={`flex-1 py-3 font-label-caps text-label-caps transition-all duration-300 border-b-2 ${
              inviteType === 'groom'
                ? 'text-crimson-deep border-crimson-deep'
                : 'text-charcoal-text border-transparent hover:text-crimson-deep'
            }`}
          >
            Groom Invite
          </button>
          <button
            onClick={() => setInviteType('bride')}
            className={`flex-1 py-3 font-label-caps text-label-caps transition-all duration-300 border-b-2 ${
              inviteType === 'bride'
                ? 'text-crimson-deep border-crimson-deep'
                : 'text-charcoal-text border-transparent hover:text-crimson-deep'
            }`}
          >
            Bride Invite
          </button>
        </div>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto">
          {inviteType === 'groom'
            ? "Joyfully inviting you to share in our happiness as we unite our families and celebrate the beginning of our new life together. - The Groom's Family"
            : "With great joy, we invite you to celebrate the union of our daughter. Please join us in blessing the couple. - The Bride's Family"}
        </p>
      </section>

      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden border-y border-royal-gold/20">
        <img
          alt="Wedding Ceremony Hero"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.pexels.com/photos/38147801/pexels-photo-38147801.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white p-6">
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-2 text-royal-gold drop-shadow-md">
            {weddingConfig.groom.name} &amp; {weddingConfig.bride.name}
          </h2>
          <p className="font-headline-sm text-headline-sm tracking-widest uppercase drop-shadow-md">
            {new Date(weddingConfig.weddingDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      <div className="py-12 flex justify-center">
        <svg className="text-royal-gold" fill="none" height="24" viewBox="0 0 120 24" width="120" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 2L72 12L60 22L48 12L60 2Z" fill="currentColor" fillOpacity="0.2"></path>
          <line stroke="currentColor" strokeWidth="1" x1="0" x2="40" y1="12" y2="12"></line>
          <line stroke="currentColor" strokeWidth="1" x1="80" x2="120" y1="12" y2="12"></line>
        </svg>
      </div>

      <section className="px-4 md:px-8 pb-16 text-center">
        <h3 className="font-headline-md text-headline-md text-crimson-deep mb-8">The Countdown Begins</h3>
        <div className="flex justify-center gap-4 md:gap-8 max-w-md mx-auto">
          {units.map((u) => (
            <div key={u.label} className="flex flex-col items-center bg-ivory-base border border-royal-gold/30 rounded-lg p-4 w-20 md:w-24 shadow-sm">
              <span className="font-headline-md text-headline-md text-charcoal-text">{String(u.value).padStart(2, '0')}</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant mt-1">{u.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 py-8 mandala-pattern">
        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
          <a className="col-span-2 md:col-span-1 bg-ivory-base border border-royal-gold/30 rounded-xl p-6 flex flex-col items-center text-center hover:scale-[1.02] transition-transform shadow-sm" href="#events">
            <svg className="w-8 h-8 text-crimson-deep mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="font-headline-sm text-headline-sm text-charcoal-text mb-2">Events</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Discover the schedule for our celebrations.</p>
          </a>
          <a className="col-span-2 md:col-span-1 bg-ivory-base border border-royal-gold/30 rounded-xl p-6 flex flex-col items-center text-center hover:scale-[1.02] transition-transform shadow-sm" href="#travel">
            <svg className="w-8 h-8 text-crimson-deep mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="font-headline-sm text-headline-sm text-charcoal-text mb-2">Venue</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Directions &amp; Map.</p>
          </a>
        </div>
      </section>
    </>
  );
}
