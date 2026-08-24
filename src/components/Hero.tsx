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
    <section id="home" className="px-4 md:px-8 pt-4 pb-8 flex flex-col items-center text-center">
    </section>
  );
}
