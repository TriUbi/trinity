
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface AnimationContextProps {
  isAnimating: boolean;
  startTransition: () => void;
  endTransition: () => void;
}

const AnimationContext = createContext<AnimationContextProps>({
  isAnimating: false,
  startTransition: () => {},
  endTransition: () => {},
});

export const useAnimation = () => useContext(AnimationContext);

interface AnimationProviderProps {
  children: ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const location = useLocation();

  const startTransition = () => {
    setIsAnimating(true);
  };

  const endTransition = () => {
    setIsAnimating(false);
  };

  React.useEffect(() => {
    startTransition();
    const timer = setTimeout(() => {
      endTransition();
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimationContext.Provider value={{ isAnimating, startTransition, endTransition }}>
      {children}
    </AnimationContext.Provider>
  );
};
