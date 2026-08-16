import { useState } from 'react';
import { weddingConfig } from '@/data/wedding';
import { PaisleyDivider, Mandala } from './Decorations';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-gradient-to-b from-cream-100 to-cream-50 overflow-hidden">
      <Mandala className="absolute top-10 right-10 w-48 h-48 text-saffron-400/8" color="#f59332" />

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-5xl text-saffron-800 mb-3">
            Frequently Asked Questions
          </h2>
          <PaisleyDivider className="w-64 h-10 mx-auto mb-4" color="#d97706" />
          <p className="font-serif italic text-lg text-charcoal-600">
            Everything you need to know before joining us.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {weddingConfig.faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-heading text-lg text-charcoal-800">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-saffron-600 flex-shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  open === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-5 pb-5 font-serif text-charcoal-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
