/**
 * Storage Configuration
 * Centralized configuration for localStorage/sessionStorage keys
 */

export const STORAGE_KEYS = {
  CURRENT_SECTION: 'currentSection',
} as const;

export type StorageKey = keyof typeof STORAGE_KEYS;

