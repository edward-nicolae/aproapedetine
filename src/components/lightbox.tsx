"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface LightboxProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  title?: string;
}

export default function Lightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
  title,
}: LightboxProps) {
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrevious, onNext]);

  useEffect(() => {
    if (!isOpen) {
      document.body.classList.remove("has-lightbox-open");
      return;
    }

    document.body.classList.add("has-lightbox-open");

    return () => {
      document.body.classList.remove("has-lightbox-open");
    };
  }, [isOpen]);

  if (!isOpen || !images[currentIndex]) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    // Only trigger if horizontal swipe dominates (not a scroll)
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) onNext();
      else onPrevious();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div
      className="lb-overlay"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top bar */}
      <div className="lb-topbar">
        {title && <span className="lb-title">{title}</span>}
        <button className="lb-close" onClick={onClose} aria-label="Închide">✕</button>
      </div>

      {/* Image — fills all remaining space between top and bottom bars */}
      <div className="lb-stage">
        <div className="lb-frame" style={{ position: "relative" }}>
          <Image
            src={images[currentIndex]}
            alt={`Fotografie ${currentIndex + 1}`}
            fill
            style={{ objectFit: "contain" }}
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="lb-bottombar">
        <button className="lb-nav-btn" onClick={onPrevious}>← Anterior</button>
        <span className="lb-counter">{currentIndex + 1} / {images.length}</span>
        <button className="lb-nav-btn" onClick={onNext}>Următor →</button>
      </div>
    </div>
  );
}
