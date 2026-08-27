import React, { createContext, useContext, useState } from 'react';

type Side = 'groom' | 'bride' | null;

interface WeddingSideContextType {
  side: Side;
  setSide: (side: Side) => void;
}

const WeddingSideContext = createContext<WeddingSideContextType | undefined>(undefined);

export function WeddingSideProvider({ children }: { children: React.ReactNode }) {
  const [side, setSideState] = useState<Side>(() => {
    const saved = sessionStorage.getItem('wedding-side');
    return (saved as Side) || null;
  });

  const setSide = (newSide: Side) => {
    setSideState(newSide);
    if (newSide) {
      sessionStorage.setItem('wedding-side', newSide);
    } else {
      sessionStorage.removeItem('wedding-side');
    }
  };

  return (
    <WeddingSideContext.Provider value={{ side, setSide }}>
      {children}
    </WeddingSideContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useWeddingSide() {
  const context = useContext(WeddingSideContext);
  if (context === undefined) {
    throw new Error('useWeddingSide must be used within a WeddingSideProvider');
  }
  return context;
}
