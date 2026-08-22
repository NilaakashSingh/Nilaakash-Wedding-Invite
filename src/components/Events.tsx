import { weddingConfig } from '@/data/wedding';
import { VideoScene } from './VideoScene';

// Use the specific event IDs from the config to match video files
const eventVideos = ['sangeet', 'haldi', 'mehndi'];

export function Events() {
  // Filter events to only those we have specific videos for in the requirements
  const eventsToDisplay = weddingConfig.events.filter(e => eventVideos.includes(e.id));

  return (
    <section id="events" className="w-full relative h-[100vh] overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {eventsToDisplay.map((event) => (
        <div key={event.id} className="w-full h-screen snap-start relative">
          <VideoScene src={`${import.meta.env.BASE_URL}videos/${event.id}.mp4`}>
             <div className="absolute inset-0 flex flex-col justify-end items-start p-8 md:p-16 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none">
                <div className="max-w-2xl text-white">
                  <h3 className="font-cinzel text-3xl md:text-5xl mb-4 text-royal-gold drop-shadow-lg">
                    {event.name}
                  </h3>
                  <div className="space-y-2 font-serif text-lg md:text-xl drop-shadow-md">
                    <p>{event.date} • {event.time}</p>
                    <p>{event.venue}</p>
                    <p className="text-royal-gold/90 mt-2">Dress Code: {event.dressCode}</p>
                  </div>
                </div>
             </div>
          </VideoScene>
        </div>
      ))}
    </section>
  );
}
