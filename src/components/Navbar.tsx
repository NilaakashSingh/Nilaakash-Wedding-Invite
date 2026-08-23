import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

export function Navbar() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

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
          onClick={() => setShowModal(true)}
          className="font-label-caps text-label-caps bg-crimson-deep text-white px-5 py-2 rounded-full hover:bg-crimson-deep/90 transition-colors shadow-sm"
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
            className="bg-ivory-base rounded-xl w-full max-w-4xl h-[85vh] flex flex-col shadow-2xl transform scale-100 transition-transform duration-300 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-royal-gold/20 bg-cream-50">
              <h2 className="font-cinzel text-xl text-charcoal-text">Wedding Invitation</h2>
              <div className="flex items-center gap-4">
                <a
                  href={`${import.meta.env.BASE_URL}invitation.pdf`}
                  download
                  className="flex items-center gap-2 text-crimson-deep hover:text-crimson-deep/80 transition-colors font-body-md"
                >
                  <Download size={20} />
                  <span className="hidden md:inline">Download</span>
                </a>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-charcoal-text hover:text-crimson-deep transition-colors"
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
