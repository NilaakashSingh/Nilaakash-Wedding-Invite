import { weddingConfig } from '@/data/wedding';
import { useCountdown } from '@/hooks/useCountdown';

export function Footer() {
  const time = useCountdown(weddingConfig.weddingDate);

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Mins', value: time.minutes },
    { label: 'Secs', value: time.seconds },
  ];

  return (
    <footer className="w-full bg-ivory-base border-t border-royal-gold/30 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-cinzel text-3xl md:text-4xl text-charcoal-text mb-8">
          The Countdown Begins
        </h3>

        <div className="flex justify-center gap-4 md:gap-8 mb-12">
          {units.map((u) => (
            <div key={u.label} className="flex flex-col items-center">
              <span className="font-cinzel text-4xl md:text-5xl text-crimson-deep mb-2">
                {String(u.value).padStart(2, '0')}
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                {u.label}
              </span>
            </div>
          ))}
        </div>

        <div className="w-24 h-px bg-royal-gold/50 mx-auto mb-12"></div>

        <p className="font-serif text-xl md:text-2xl text-charcoal-text italic">
          We can't wait to celebrate with you.
        </p>
      </div>
    </footer>
  );
}
