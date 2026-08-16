import { ChevronDown } from 'lucide-react';
import { weddingConfig } from '@/data/wedding';
import { useCountdown } from '@/hooks/useCountdown';
import { Mandala } from './Decorations';

export function Hero() {
  const time = useCountdown(weddingConfig.weddingDate);

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ];

  const scrollToContent = () => {
    document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/38147801/pexels-photo-38147801.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Indian wedding couple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/60 via-charcoal-900/40 to-charcoal-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-saffron-900/30 to-marigold-900/20 mix-blend-multiply" />
      </div>

      {/* Decorative mandalas */}
      <Mandala
        className="absolute top-10 right-10 w-32 h-32 text-marigold-400/20 animate-pulse-slow"
        color="#fbbf24"
      />
      <Mandala
        className="absolute bottom-10 left-10 w-40 h-40 text-saffron-400/15 animate-pulse-slow"
        color="#f59332"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="font-body text-cream-200/80 text-sm md:text-base tracking-[0.3em] uppercase mb-6 animate-fade-in-down opacity-0-init animation-delay-100">
          We invite you to celebrate the wedding of
        </p>

        <div className="flex items-center justify-center gap-4 md:gap-8 mb-4 animate-fade-in opacity-0-init animation-delay-300">
          <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl text-cream-50 drop-shadow-2xl">
            {weddingConfig.groom.name}
          </h1>
          <span className="font-display text-3xl md:text-5xl text-marigold-400 italic">
            weds
          </span>
          <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl text-cream-50 drop-shadow-2xl">
            {weddingConfig.bride.name}
          </h1>
        </div>

        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in-up opacity-0-init animation-delay-500">
          <div className="h-px w-12 bg-marigold-400/50" />
          <p className="font-heading text-lg md:text-xl text-cream-100/90 tracking-wide">
            {weddingConfig.weddingDateDisplay} &middot; {weddingConfig.city}
          </p>
          <div className="h-px w-12 bg-marigold-400/50" />
        </div>

        {/* Countdown */}
        <div className="flex justify-center gap-3 md:gap-6 mb-10 animate-fade-in-up opacity-0-init animation-delay-700">
          {units.map((u) => (
            <div
              key={u.label}
              className="glass-dark rounded-xl px-4 py-4 md:px-6 md:py-5 min-w-[72px] md:min-w-[100px] text-center"
            >
              <div className="font-cinzel text-2xl md:text-4xl text-marigold-400 font-semibold tabular-nums">
                {String(u.value).padStart(2, '0')}
              </div>
              <div className="font-body text-[10px] md:text-xs text-cream-200/70 uppercase tracking-widest mt-1">
                {u.label}
              </div>
            </div>
          ))}
        </div>

        <p className="font-serif italic text-cream-100/80 text-lg md:text-xl mb-10 animate-fade-in opacity-0-init animation-delay-1000">
          {weddingConfig.hashtag}
        </p>

        <button
          onClick={scrollToContent}
          className="flex flex-col items-center gap-2 text-cream-200/60 hover:text-marigold-400 transition-colors duration-300 animate-fade-in opacity-0-init animation-delay-1000"
        >
          <span className="font-body text-xs uppercase tracking-widest">Scroll to explore</span>
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
