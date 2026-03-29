'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCookieConsent } from '@/hooks/useCookieConsent';

export const CookieConsent = () => {
  const { consent, isBannerVisible, isPanelOpen, acceptAll, rejectAll, savePreferences, openPanel, closePanel } = useCookieConsent();
  const [tempAnalytics, setTempAnalytics] = useState(consent?.analytics ?? false);
  const [bannerReady, setBannerReady] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem('mt_visited');
    if (!visited) {
      // Prima visita: aspetta che il loader finisca (~1.4s)
      const timer = setTimeout(() => setBannerReady(true), 1400);
      return () => clearTimeout(timer);
    } else {
      setBannerReady(true);
    }
  }, []);

  React.useEffect(() => {
    if (isPanelOpen) setTempAnalytics(consent?.analytics ?? false);
  }, [isPanelOpen, consent]);

  return (
    <>
      {/* Float Button */}
      <AnimatePresence>
        {!isBannerVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={openPanel}
            className="ck_float_btn"
            aria-label="Gestisci preferenze cookie"
            title="Privacy & Cookie"
          >
            [PRIVACY]
          </motion.button>
        )}
      </AnimatePresence>

      {/* Banner */}
      <AnimatePresence>
        {isBannerVisible && !isPanelOpen && bannerReady && (
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="ck_banner"
            role="dialog"
            aria-label="Cookie consent"
          >
            <div className="ck_banner_header">COOKIE_MANAGER.sh</div>
            <p className="ck_text">
              Utilizziamo cookie tecnici e analitici (GA4) per migliorare l&apos;esperienza.<br/>
              Scegli cosa attivare.
            </p>
            <div className="ck_actions">
              <button onClick={acceptAll} className="ck_btn ck_btn_primary">ACCEPT_ALL</button>
              <button onClick={openPanel} className="ck_btn ck_btn_settings_desktop">SETTINGS</button>
              <button onClick={rejectAll} className="ck_btn ck_btn_ghost">REJECT</button>
            </div>
            <div className="ck_banner_links">
              <button onClick={openPanel} className="ck_link ck_link_settings_mobile">Impostazioni</button>
              <a href="/privacy" className="ck_link">Privacy Policy</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {isPanelOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePanel}
              className="ck_overlay"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="ck_panel"
              role="dialog"
              aria-label="Preferenze privacy"
            >
              <div className="ck_panel_content">
                <h2 className="ck_title">PRIVACY_PREFERENCES</h2>
                <p className="ck_text">Personalizza l&apos;uso dei cookie. I necessari sono sempre attivi.</p>

                <div className="ck_setting_item">
                  <div className="ck_setting_info">
                    <span className="ck_setting_label">Necessari</span>
                    <span className="ck_setting_desc">Indispensabili per il funzionamento del sito e per memorizzare le tue scelte.</span>
                  </div>
                  <div className="ck_badge">ALWAYS_ON</div>
                </div>

                <div className="ck_setting_item">
                  <div className="ck_setting_info">
                    <span className="ck_setting_label">Analytics (GA4)</span>
                    <span className="ck_setting_desc">Statistiche di navigazione anonimizzate via Google Analytics 4.</span>
                  </div>
                  <label className="ck_switch">
                    <input
                      type="checkbox"
                      checked={tempAnalytics}
                      onChange={(e) => setTempAnalytics(e.target.checked)}
                    />
                    <span className="ck_slider" />
                  </label>
                </div>

                <div className="ck_panel_footer">
                  <button onClick={() => savePreferences({ analytics: tempAnalytics })} className="ck_btn ck_btn_primary ck_btn_full">
                    SAVE_AND_APPLY
                  </button>
                  <button onClick={acceptAll} className="ck_btn ck_btn_full" style={{marginTop:'0.5rem'}}>
                    ACCEPT_ALL
                  </button>
                  <button onClick={rejectAll} className="ck_btn ck_btn_ghost ck_btn_full" style={{marginTop:'0.5rem'}}>
                    REJECT_ALL
                  </button>
                  <div className="ck_panel_links">
                    <a href="/privacy" className="ck_link">Privacy Policy</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
