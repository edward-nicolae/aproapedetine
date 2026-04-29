"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Lightbox from "./lightbox";
import { GALLERY_IMAGES } from "@/lib/gallery-images";

interface GalleryCategory {
  id: string;
  label: string;
  description: string;
  color: string;
}

interface GallerySectionProps {
  categories: readonly GalleryCategory[];
}

export default function GallerySection({ categories }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  const images = GALLERY_IMAGES[activeCategory] || [];
  const previewImages = images.slice(0, 12);
  const category = categories.find(c => c.id === activeCategory);

  const focusGallerySection = () => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    section.focus({ preventScroll: true });
  };

  const openLightboxAt = (index: number) => {
    focusGallerySection();
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleImageClick = (index: number) => {
    openLightboxAt(index);
  };

  const handlePrevious = () => {
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleSurprise = () => {
    if (!images.length) {
      return;
    }

    if (images.length === 1) {
      openLightboxAt(0);
      return;
    }

    let nextIndex = Math.floor(Math.random() * images.length);
    if (nextIndex === lightboxIndex) {
      nextIndex = (nextIndex + 1) % images.length;
    }

    openLightboxAt(nextIndex);
  };

  if (!images.length) {
    return (
      <section className="section" id="galerie">
        <p style={{ textAlign: "center", color: "var(--muted)" }}>Fără imagini</p>
      </section>
    );
  }

  return (
    <section className="section" id="galerie" ref={sectionRef} tabIndex={-1}>
      {/* Header */}
      <div className="gallery-header">
        <p className="eyebrow">Portofoliu</p>
        <h2 className="gallery-title">Galeria noastră</h2>
        <p className="gallery-subtitle">
          {images.length} fotografii &mdash; <strong>{category?.label}</strong>
        </p>
      </div>

      {/* Categories */}
      <div className="gallery-categories">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              setLightboxIndex(0);
            }}
            className={`gallery-category-btn${activeCategory === cat.id ? " is-active" : ""}`}
          >
            {cat.label}
            <span className="gallery-category-count">
              {(GALLERY_IMAGES[cat.id] || []).length}
            </span>
          </button>
        ))}
      </div>

      {/* Images Grid */}
      <div className="gallery-grid">
        {previewImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => handleImageClick(idx)}
            className="gallery-thumb"
            style={{ position: "relative" }}
          >
            <Image
              src={img}
              alt={`Fotografie ${idx + 1}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="gallery-thumb-overlay" />
          </button>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="gallery-cta-row">
        <button
          className="gallery-btn-primary"
          onClick={() => {
            openLightboxAt(0);
          }}
        >
          Deschide galeria ({images.length} foto)
        </button>
        <button
          className="gallery-btn-secondary"
          onClick={handleSurprise}
        >
          Surprinde-mă
        </button>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        images={images}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrevious={handlePrevious}
        onNext={handleNext}
        title={`${category?.label} — ${lightboxIndex + 1} / ${images.length}`}
      />
    </section>
  );
}
