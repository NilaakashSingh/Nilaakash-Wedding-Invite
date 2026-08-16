import { weddingConfig } from '@/data/wedding';
import { Mandala, LotusIcon } from './Decorations';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-charcoal-900 text-cream-100 py-20 overflow-hidden">
      <Mandala className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-72 h-72 text-marigold-400/8" color="#fbbf24" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <LotusIcon className="w-14 h-14 mx-auto text-marigold-400 mb-6" color="#fbbf24" />

        <p className="font-body text-cream-200/60 text-sm tracking-[0.3em] uppercase mb-4">
          With love and gratitude
        </p>

        <h3 className="font-cinzel text-3xl md:text-4xl text-cream-50 mb-3">
          {weddingConfig.groom.name} &amp; {weddingConfig.bride.name}
        </h3>

        <p className="font-serif italic text-xl text-marigold-400 mb-8">
          {weddingConfig.hashtag}
        </p>

        <div className="flex items-center justify-center gap-3 text-cream-200/50 mb-12">
          <div className="h-px w-16 bg-marigold-400/30" />
          <Heart size={16} className="text-crimson-400" />
          <div className="h-px w-16 bg-marigold-400/30" />
        </div>

        <div className="space-y-1">
          <p className="font-heading text-lg text-cream-100/80">
            {weddingConfig.weddingDateDisplay}
          </p>
          <p className="font-body text-sm text-cream-200/50">
            {weddingConfig.venue} &middot; {weddingConfig.city}
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-marigold-400/10">
          <p className="font-body text-xs text-cream-200/40">
            Made with love for our family and friends
          </p>
        </div>
      </div>
    </footer>
  );
}
