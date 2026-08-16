import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { OurStory } from '@/components/OurStory';
import { Events } from '@/components/Events';
import { Gallery } from '@/components/Gallery';
import { Travel } from '@/components/Travel';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ivory-base font-body-md text-charcoal-text antialiased flex flex-col">
      <Navbar />
      <main className="flex-grow pb-12">
        <Hero />
        <OurStory />
        <Events />
        <Gallery />
        <Travel />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
