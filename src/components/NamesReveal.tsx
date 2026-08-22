import { weddingConfig } from '@/data/wedding';
import { VideoScene } from './VideoScene';

export function NamesReveal() {
  return (
    <section id="names" className="w-full h-screen">
      <VideoScene src={`${import.meta.env.BASE_URL}videos/names.mp4`}>
        {/* The video itself often handles the text rendering.
            If not, we can overlay it here. We'll add a subtle overlay just in case. */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white p-8">
            <h2 className="font-display-lg-mobile md:font-display-lg text-royal-gold drop-shadow-xl opacity-90">
              {weddingConfig.groom.name} <br className="md:hidden" /> &amp; <br className="md:hidden" /> {weddingConfig.bride.name}
            </h2>
          </div>
        </div>
      </VideoScene>
    </section>
  );
}
