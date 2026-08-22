import { useWeddingSide } from '@/context/WeddingSideContext';
import { VideoScene } from './VideoScene';

export function Blessings() {
  const { side } = useWeddingSide();

  return (
    <section id="blessings" className="w-full h-screen">
      <VideoScene src={`${import.meta.env.BASE_URL}videos/blessings.mp4`}>
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
          <div className="text-center text-white p-8 max-w-3xl">
            <h2 className="font-cinzel text-3xl md:text-5xl mb-6 drop-shadow-lg transition-opacity duration-500">
              {side === 'groom'
                ? "With the Blessings of the Groom's Family"
                : side === 'bride'
                  ? "With the Blessings of the Bride's Family"
                  : "With the Blessings of Our Families"}
            </h2>
            <p className="font-serif text-lg md:text-2xl drop-shadow-md transition-opacity duration-500">
              {side === 'groom'
                ? "Joyfully inviting you to share in our happiness as we unite our families and celebrate the beginning of our new life together."
                : side === 'bride'
                  ? "With great joy, we invite you to celebrate the union of our daughter. Please join us in blessing the couple."
                  : "Join us in celebrating this joyous union."}
            </p>
          </div>
        </div>
      </VideoScene>
    </section>
  );
}
