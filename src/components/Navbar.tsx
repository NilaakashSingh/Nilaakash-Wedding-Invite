import { useState } from 'react';
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
  const [open, setOpen] = useState(false);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-ivory-base dark:bg-surface font-headline-sm text-headline-sm docked full-width top-0 z-50 flat no shadows flex justify-between items-center w-full px-4 md:px-8 py-4 sticky">
      <button
        onClick={() => setOpen(!open)}
        className="hover:scale-105 transition-transform active:scale-95 duration-150 text-crimson-deep dark:text-primary-fixed-dim p-2 md:hidden"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Links (Left) */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.slice(0, 3).map((item) => (
          <button
            key={item.href}
            onClick={() => handleClick(item.href)}
            className="font-body-md text-charcoal-text hover:text-crimson-deep transition-colors"
          >
            {item.label}
          </button>
        ))}
      </div>

      <h1
        onClick={() => handleClick('#home')}
        className="font-display-lg-mobile text-display-lg-mobile text-crimson-deep font-extrabold tracking-tight cursor-pointer"
      >
        N &amp; A Wedding
      </h1>

      {/* Desktop Links (Right) */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.slice(3).map((item) => (
          <button
            key={item.href}
            onClick={() => handleClick(item.href)}
            className="font-body-md text-charcoal-text hover:text-crimson-deep transition-colors"
          >
            {item.label}
          </button>
        ))}
      </div>

      <button className="hover:scale-105 transition-transform active:scale-95 duration-150 text-crimson-deep dark:text-primary-fixed-dim p-2 md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      </button>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-ivory-base border-t border-royal-gold/30 shadow-md overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col gap-3 px-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="text-left font-body-md text-charcoal-text hover:text-crimson-deep transition-colors py-2"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
