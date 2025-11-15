"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

import { AnimatePresence } from "framer-motion";
import Loader from "./loader";

type PreloaderContextType = {
  isLoading: boolean;
  loadingPercent: number;
  bypassLoading: () => void;
};

const PreloaderContext = createContext<PreloaderContextType>({
  isLoading: false,
  loadingPercent: 0,
  bypassLoading: () => {},
});

export const usePreloader = () => {
  return useContext(PreloaderContext);
};

const LOADING_TIME = 2.5;

function Preloader({ 
  children, 
  disabled = false 
}: { 
  children: React.ReactNode; 
  disabled?: boolean;
}) {
  const [isLoading, setIsLoading] = useState(!disabled);
  const [loadingPercent, setLoadingPercent] = useState(0);
  const [mounted, setMounted] = useState(false);
  const loadingTween = useRef<any>(null);
  const loadingPercentRef = useRef({ value: 0 });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const bypassLoading = useCallback(() => {
    if (loadingTween.current) {
      if (typeof loadingTween.current.kill === "function") {
        loadingTween.current.kill();
      } else if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    setLoadingPercent(100);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Set mounted to true on client side only
    setMounted(true);
  }, []);

  useEffect(() => {
    // Only run on client side after mount
    if (!mounted || typeof window === "undefined") return;
    
    if (disabled) {
      setIsLoading(false);
      return;
    }

    // Use GSAP for smooth animation
    import("gsap").then((gsapModule) => {
      const gsap = gsapModule.default || gsapModule;
      
      if (gsap && typeof gsap.to === "function") {
        loadingTween.current = gsap.to(loadingPercentRef.current, {
          value: 100,
          duration: LOADING_TIME,
          ease: "power2.out",
          onUpdate: () => {
            setLoadingPercent(loadingPercentRef.current.value);
          },
          onComplete: () => {
            setIsLoading(false);
          },
        });
      } else {
        // Fallback to setInterval if GSAP fails
        const startTime = Date.now();
        intervalRef.current = setInterval(() => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min((elapsed / (LOADING_TIME * 1000)) * 100, 100);
          setLoadingPercent(progress);
          
          if (progress >= 100) {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            setIsLoading(false);
          }
        }, 16);
      }
    }).catch(() => {
      // Fallback to setInterval if GSAP import fails
      const startTime = Date.now();
      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / (LOADING_TIME * 1000)) * 100, 100);
        setLoadingPercent(progress);
        
        if (progress >= 100) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          setIsLoading(false);
        }
      }, 16);
    });

    // Add keyboard shortcut to bypass loading
    const handleKeyPress = () => {
      bypassLoading();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      if (loadingTween.current && typeof loadingTween.current.kill === "function") {
        loadingTween.current.kill();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [disabled, bypassLoading, mounted]);

  return (
    <PreloaderContext.Provider
      value={{ isLoading: mounted ? isLoading : false, bypassLoading, loadingPercent: mounted ? loadingPercent : 0 }}
    >
      {mounted && <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>}
      {children}
    </PreloaderContext.Provider>
  );
}

export default Preloader;
