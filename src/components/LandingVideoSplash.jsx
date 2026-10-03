import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LandingVideoSplash.css';

export default function LandingVideoSplash({ onComplete }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    const hasSeen = sessionStorage.getItem('samyak_landing_intro_seen');
    if (!hasSeen) {
      setIsVisible(true);
    }
  }, []);

  const dismissIntro = () => {
    sessionStorage.setItem('samyak_landing_intro_seen', 'true');
    setIsVisible(false);
    if (onComplete) onComplete();
  };

  useEffect(() => {
    if (!isVisible) return;

    // Failsafe timeout so slow network or video stall doesn't block the user
    const timer = setTimeout(() => {
      dismissIntro();
    }, 5500);

    return () => clearTimeout(timer);
  }, [isVisible]);

  if (!isMounted) return null;

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="landing-video-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)',
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
          className="landing-video-overlay"
        >
          {/* Skip Intro Button */}
          <button
            onClick={dismissIntro}
            aria-label="Skip Introduction"
            className="landing-video-skip-btn"
          >
            <span>Skip Intro</span>
            <span className="landing-video-arrow">&rarr;</span>
          </button>

          {/* Intro Video Element */}
          <video
            ref={videoRef}
            src="/videos/samyak_intro.mp4"
            autoPlay
            muted
            playsInline
            onEnded={dismissIntro}
            className="landing-video-element"
          />

          {/* Subtle vignette */}
          <div className="landing-video-vignette" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
