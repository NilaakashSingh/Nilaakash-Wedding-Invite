import { weddingConfig } from '@/data/wedding';
import { VideoScene } from './VideoScene';

export function VenueIntro() {
  return (
    <section id="venue" className="w-full h-screen">
      <VideoScene src={`${import.meta.env.BASE_URL}videos/venue.mp4`}>
         <div className="absolute inset-0 flex flex-col justify-end items-center pb-24 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none">
          <div className="text-center text-white p-8">
            <h3 className="font-cinzel text-2xl md:text-4xl mb-2 drop-shadow-lg">
              {weddingConfig.venue}
            </h3>
            <p className="font-serif text-xl drop-shadow-md">
              {weddingConfig.city}
            </p>
            <p className="font-headline-sm tracking-widest uppercase mt-4 text-royal-gold drop-shadow-md">
              {new Date(weddingConfig.weddingDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </VideoScene>
    </section>
  );
}
