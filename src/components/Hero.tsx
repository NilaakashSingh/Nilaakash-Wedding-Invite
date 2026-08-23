import { useState } from 'react';
import { weddingConfig } from '@/data/wedding';
import { VideoScene } from './VideoScene';
import { useWeddingSide } from '@/context/WeddingSideContext';

export function Hero() {
  const { setSide } = useWeddingSide();
  const [introEnded, setIntroEnded] = useState(false);
  const [showInterstitial, setShowInterstitial] = useState(false);

  const handleIntroEnded = () => {
    setIntroEnded(true);
    // Add a slight delay before showing the interstitial for a smoother transition
    setTimeout(() => {
      setShowInterstitial(true);
    }, 500);
  };

  const handleSideSelect = (side: 'groom' | 'bride') => {
    setSide(side);
    setShowInterstitial(false);

    // Scroll to Blessings section after selection
    const blessingsSection = document.getElementById('blessings');
    if (blessingsSection) {
      blessingsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="px-4 md:px-8 pt-4 pb-8 flex flex-col items-center text-center">
        <div
          className="w-full flex border-b border-royal-gold/30 mb-8 max-w-sm mx-auto"
          role="radiogroup"
          aria-label="Select Invite Type"
        >
          <button
            role="radio"
            aria-checked={inviteType === 'groom'}
            onClick={() => setInviteType('groom')}
            className={`flex-1 py-3 font-label-caps text-label-caps transition-all duration-300 border-b-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-deep ${
              inviteType === 'groom'
                ? 'text-crimson-deep border-crimson-deep'
                : 'text-charcoal-text border-transparent hover:text-crimson-deep'
            }`}
          >
            <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-blue-900/10 transition-colors duration-500"></div>
            <div className="relative z-10 text-center transform group-hover:scale-105 transition-transform duration-500">
              <h2 className="font-cinzel text-3xl md:text-5xl text-charcoal-text mb-4">Groom's Side</h2>
              <p className="font-serif text-xl text-on-surface-variant">Toronto</p>
            </div>
          </button>

          <button
            role="radio"
            aria-checked={inviteType === 'bride'}
            onClick={() => setInviteType('bride')}
            className={`flex-1 py-3 font-label-caps text-label-caps transition-all duration-300 border-b-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-deep ${
              inviteType === 'bride'
                ? 'text-crimson-deep border-crimson-deep'
                : 'text-charcoal-text border-transparent hover:text-crimson-deep'
            }`}
          >
            <div className="absolute inset-0 bg-rose-900/5 group-hover:bg-rose-900/10 transition-colors duration-500"></div>
            <div className="relative z-10 text-center transform group-hover:scale-105 transition-transform duration-500">
              <h2 className="font-cinzel text-3xl md:text-5xl text-charcoal-text mb-4">Bride's Side</h2>
              <p className="font-serif text-xl text-on-surface-variant">Mumbai</p>
            </div>
          </button>
        </div>
      )}
    </>
  );
}
