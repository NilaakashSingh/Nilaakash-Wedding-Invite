import { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { weddingConfig } from '@/data/wedding';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { VideoScene } from './VideoScene';
import { useWeddingSide } from '@/context/WeddingSideContext';

export function Hero() {
  const { setSide } = useWeddingSide();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [introEnded, setIntroEnded] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showInterstitial, setShowInterstitial] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleIntroEnded = () => {
    setIntroEnded(true);
    // Add a slight delay before showing the interstitial for a smoother transition
    setTimeout(() => {
      setShowInterstitial(true);
    }, 500);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <section id="home" className="px-4 md:px-8 pt-4 pb-8 flex flex-col items-center text-center">
    </section>
  );
}
