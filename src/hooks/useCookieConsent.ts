'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'mt_cookie_consent';
const CONSENT_VERSION = 1;

export interface CookiePreferences {
  version: number;
  necessary: boolean;
  analytics: boolean;
  timestamp: number;
}

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookiePreferences | null>(null);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CookiePreferences;
        if (parsed.version === CONSENT_VERSION) {
          setConsent(parsed);
          return;
        }
      } catch (e) {
        console.error('Error parsing cookie consent', e);
      }
    }
    setIsBannerVisible(true);
  }, []);

  const savePreferences = useCallback((prefs: Partial<CookiePreferences>) => {
    const newConsent: CookiePreferences = {
      version: CONSENT_VERSION,
      necessary: true,
      analytics: prefs.analytics ?? false,
      timestamp: Date.now(),
    };
    const hadAnalytics = consent?.analytics;
    const nowHasAnalytics = newConsent.analytics;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newConsent));
    setConsent(newConsent);
    setIsBannerVisible(false);
    setIsPanelOpen(false);
    if (hadAnalytics && !nowHasAnalytics) {
      window.location.reload();
    }
  }, [consent]);

  const acceptAll = useCallback(() => savePreferences({ analytics: true }), [savePreferences]);
  const rejectAll = useCallback(() => savePreferences({ analytics: false }), [savePreferences]);
  const openPanel = useCallback(() => setIsPanelOpen(true), []);
  const closePanel = useCallback(() => setIsPanelOpen(false), []);

  return { consent, isBannerVisible, isPanelOpen, acceptAll, rejectAll, savePreferences, openPanel, closePanel };
};
