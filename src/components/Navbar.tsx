import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Travel', href: '#travel' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-lg shadow-marigold-900/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleClick('#home')}
          className={`font-cinzel text-lg tracking-widest transition-colors duration-500 ${
            scrolled ? 'text-saffron-700' : 'text-cream-50'
          }`}
        >
          A<span className="text-marigold-400 mx-0.5">&amp;</span>D
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={`font-body text-sm tracking-wide transition-colors duration-300 hover:text-marigold-500 ${
                scrolled ? 'text-charcoal-700' : 'text-cream-100/90'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${scrolled ? 'text-charcoal-800' : 'text-cream-50'}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream-50/98 backdrop-blur-md px-6 py-4 flex flex-col gap-3 border-t border-marigold-200/50">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="text-left font-body text-sm text-charcoal-700 hover:text-saffron-600 transition-colors py-1.5"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
