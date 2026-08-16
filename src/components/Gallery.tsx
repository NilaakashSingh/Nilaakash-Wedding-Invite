import { useState } from 'react';
import { weddingConfig } from '@/data/wedding';
import { PaisleyDivider, Mandala } from './Decorations';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((p) => (p === null ? null : (p - 1 + weddingConfig.gallery.length) % weddingConfig.gallery.length));
  const next = () => setLightbox((p) => (p === null ? null : (p + 1) % weddingConfig.gallery.length));

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-charcoal-900 overflow-hidden">
      <Mandala className="absolute top-10 right-10 w-48 h-48 text-marigold-400/10" color="#fbbf24" />
      <Mandala className="absolute bottom-10 left-10 w-56 h-56 text-saffron-400/10" color="#f59332" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-5xl text-marigold-400 mb-3">
            Moments in Time
          </h2>
          <PaisleyDivider className="w-64 h-10 mx-auto mb-4" color="#fbbf24" />
          <p className="font-serif italic text-lg md:text-xl text-cream-200/70 max-w-2xl mx-auto">
            A glimpse into the moments that brought us here — and a preview of the beauty of
            Indian wedding celebrations.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {weddingConfig.gallery.map((img, i) => (
            <div
              key={i}
              className="relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(i)}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full object-cover transition-all duration-500 group-hover:brightness-110"
                style={{ aspectRatio: i % 3 === 0 ? '3/4' : i % 3 === 1 ? '1/1' : '4/3' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 ring-2 ring-marigold-400/0 group-hover:ring-marigold-400/60 rounded-xl transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal-900/95 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-cream-50 hover:text-marigold-400 transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-6 text-cream-50 hover:text-marigold-400 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={weddingConfig.gallery[lightbox]}
            alt={`Gallery ${lightbox + 1}`}
            className="max-w-[85vw] max-h-[85vh] object-contain rounded-xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-6 text-cream-50 hover:text-marigold-400 transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={40} />
          </button>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-200/60 font-body text-sm">
            {lightbox + 1} / {weddingConfig.gallery.length}
          </div>
        </div>
      )}
    </section>
  );
}
