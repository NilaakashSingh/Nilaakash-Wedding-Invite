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
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <Hero />
      <OurStory />
      <Events />
      <Gallery />
      <Travel />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
