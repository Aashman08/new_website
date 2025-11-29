"use client";

import { useState, useEffect } from 'react';

/**
 * Custom hook for tracking viewport height
 * Useful for full-screen layouts and responsive components
 */
export function useViewportHeight() {
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    // Set initial height
    setViewportHeight(window.innerHeight);

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewportHeight;
}

