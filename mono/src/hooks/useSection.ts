"use client";

import { useState, useCallback } from 'react';
import { SECTION_URL_MAP, VALID_SECTIONS, type SectionValue } from '@/config/navigation';
import { STORAGE_KEYS } from '@/config/storage';

/**
 * Get initial section from URL params or sessionStorage
 * Runs synchronously on initial render
 */
const getInitialSection = (): SectionValue | null => {
  if (typeof window === 'undefined') return null;

  // First check URL params (for direct navigation like /?section=projects)
  const params = new URLSearchParams(window.location.search);
  const urlSection = params.get('section');
  
  if (urlSection && SECTION_URL_MAP[urlSection]) {
    // Clean up URL immediately
    window.history.replaceState({}, '', '/');
    return SECTION_URL_MAP[urlSection];
  }

  // Then check sessionStorage (for back button navigation)
  const stored = sessionStorage.getItem(STORAGE_KEYS.CURRENT_SECTION);
  if (stored && VALID_SECTIONS.includes(stored as SectionValue)) {
    // Clear it so refreshing the page goes to landing
    sessionStorage.removeItem(STORAGE_KEYS.CURRENT_SECTION);
    return stored as SectionValue;
  }

  return null;
};

/**
 * Custom hook for managing section navigation state
 * Handles URL params, sessionStorage, and modal state
 */
export function useSection() {
  // Get initial section once (to avoid calling getInitialSection twice)
  const [initialSection] = useState<SectionValue | null>(() => getInitialSection());

  // Initialize state from the stored section - no useEffect delay
  const [menuAction, setMenuAction] = useState<string | null>(initialSection);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(initialSection !== null);

  const handleMenuClick = useCallback((action: string) => {
    // If a modal is already open and a different action is selected,
    // close the current modal first and then open the new one after a short delay.
    if (isModalOpen && menuAction !== action) {
      setIsModalOpen(false);
      setTimeout(() => {
        setMenuAction(action);
        if (VALID_SECTIONS.includes(action as SectionValue)) {
          setIsModalOpen(true);
          // Save to sessionStorage for back button navigation
          sessionStorage.setItem(STORAGE_KEYS.CURRENT_SECTION, action);
        }
      }, 0);
    } else {
      setMenuAction(action);
      if (VALID_SECTIONS.includes(action as SectionValue)) {
        setIsModalOpen(true);
        // Save to sessionStorage for back button navigation
        sessionStorage.setItem(STORAGE_KEYS.CURRENT_SECTION, action);
      }
    }
  }, [isModalOpen, menuAction]);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    setMenuAction(null);
    // Clear sessionStorage when closing modal (user explicitly closed it)
    sessionStorage.removeItem(STORAGE_KEYS.CURRENT_SECTION);
  }, []);

  return {
    menuAction,
    isModalOpen,
    handleMenuClick,
    handleModalClose,
  };
}

