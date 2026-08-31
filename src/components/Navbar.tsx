import { useState, useEffect, useRef } from 'react';
import { Download, X } from 'lucide-react';

export function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!showModal) return;

    // Save previous focus
    const previousFocus = document.activeElement as HTMLElement;
    const currentTrigger = triggerRef.current;

    // Focus the modal or the first focusable element inside
    const focusableElements = modalRef.current?.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, iframe'
    );
    const firstElement = focusableElements?.[0] as HTMLElement;
    const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

    if (firstElement) {
      firstElement.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      } else if (e.key === 'Tab') {
        // Focus trap
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';

      // Restore focus when closed
      // Use setTimeout to ensure this happens after React renders and modal is gone
      setTimeout(() => {
        if (currentTrigger) {
          currentTrigger.focus();
        } else if (previousFocus) {
          previousFocus.focus();
        }
      }, 0);
    };
  }, [showModal]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-ivory-base/80 backdrop-blur-md border-b border-royal-gold/20 px-6 py-4 flex justify-between items-center transition-all duration-300">
        <h1
          onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          className="font-cinzel text-xl md:text-2xl text-crimson-deep font-bold tracking-widest cursor-pointer"
        >
          N &amp; A
        </h1>

        <button
          ref={triggerRef}
          onClick={() => setShowModal(true)}
          className="font-label-caps text-label-caps bg-crimson-deep text-white px-5 py-2 rounded-full hover:bg-crimson-deep/90 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-crimson-deep"
        >
          View Invitation
        </button>
      </header>

      {/* PDF Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in p-4 md:p-8"
          onClick={() => setShowModal(false)}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="bg-ivory-base rounded-xl w-full max-w-4xl h-[85vh] flex flex-col shadow-2xl transform scale-100 transition-transform duration-300 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-royal-gold/20 bg-cream-50">
              <h2 id="modal-title" className="font-cinzel text-xl text-charcoal-text">Wedding Invitation</h2>
              <div className="flex items-center gap-4">
                <a
                  href={`${import.meta.env.BASE_URL}invitation.pdf`}
                  download
                  className="flex items-center gap-2 text-crimson-deep hover:text-crimson-deep/80 transition-colors font-body-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-crimson-deep rounded-md p-1"
                >
                  <Download size={20} />
                  <span className="hidden md:inline">Download</span>
                </a>
                <button
                  onClick={() => setShowModal(false)}
                  aria-label="Close invitation"
                  className="text-charcoal-text hover:text-crimson-deep transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-crimson-deep rounded-full p-1"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            <div className="flex-1 w-full bg-gray-100">
              <iframe
                src={`${import.meta.env.BASE_URL}invitation.pdf`}
                className="w-full h-full border-none"
                title="Wedding Invitation PDF"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
