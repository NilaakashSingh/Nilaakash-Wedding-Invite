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
      <section id="home" className="relative w-full h-screen">
        <VideoScene
          src={`${import.meta.env.BASE_URL}videos/intro.mp4`}
          loop={false}
          onEnded={handleIntroEnded}
          className="h-screen"
        >
          {/* We keep this relatively empty as the video plays the monogram/reveal */}
          {introEnded && !showInterstitial && (
            <div className="absolute inset-0 flex items-end justify-center pb-24 z-10 animate-fade-in">
              <button
                onClick={() => setShowInterstitial(true)}
                className="text-white bg-black/40 hover:bg-black/60 px-6 py-3 rounded-full backdrop-blur-sm transition-all border border-white/30"
              >
                Continue
              </button>
            </div>
          )}
        </VideoScene>
      </section>

      {/* Full-screen Choose Your Side Interstitial */}
      {showInterstitial && (
        <div className="fixed inset-0 z-[100] bg-ivory-base animate-fade-in flex flex-col md:flex-row">
          <button
            onClick={() => handleSideSelect('groom')}
            className="flex-1 relative group overflow-hidden border-b md:border-b-0 md:border-r border-royal-gold/30 h-1/2 md:h-full flex items-center justify-center bg-cream-50"
          >
            <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-blue-900/10 transition-colors duration-500"></div>
            <div className="relative z-10 text-center transform group-hover:scale-105 transition-transform duration-500">
              <h2 className="font-cinzel text-3xl md:text-5xl text-charcoal-text mb-4">Groom's Side</h2>
              <p className="font-serif text-xl text-on-surface-variant">Toronto</p>
            </div>
          </button>

          <button
            onClick={() => handleSideSelect('bride')}
            className="flex-1 relative group overflow-hidden h-1/2 md:h-full flex items-center justify-center bg-cream-50"
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
