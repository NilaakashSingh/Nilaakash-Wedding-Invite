import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Blessings } from '@/components/Blessings';
import { NamesReveal } from '@/components/NamesReveal';
import { VenueIntro } from '@/components/VenueIntro';
import { Events } from '@/components/Events';
import { Footer } from '@/components/Footer';
import { WeddingSideProvider } from '@/context/WeddingSideContext';

function App() {
  return (
    <WeddingSideProvider>
      <div className="min-h-screen bg-ivory-base font-body-md text-charcoal-text antialiased flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Blessings />
          <NamesReveal />
          <VenueIntro />
          <Events />
        </main>
        <Footer />
      </div>
    </WeddingSideProvider>
  );
}

export default App;
