"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./SwipeCarousel.module.css";

// Minimal, dependency‑free carousel.
// - Click arrows to slide
// - Drag/swipe on touch
// - Keyboard ← → support when focused
// - Responsive, keeps 16:9 by default (change via aspect-*)
// Usage:
// <SwipeCarousel
//   images=[
//     { src: "/img/certificates-img/img1.jpg", alt: "Hempel" },
//     { src: "/img/certificates-img/img2.jpg", alt: "Jotun" },
//     ...
//   ]
// />

export type CarouselImage = { src: string; alt?: string };

type Props = {
  images: CarouselImage[];
  className?: string;
  startIndex?: number;
  rounded?: boolean;
  autoPlayMs?: number | null; // set e.g. 5000 to auto-advance
  maxWidth?: string; // e.g. "800px", "60%"
  aspectRatio?: string; // e.g. "16/9", "4/3", "3/2"
  slidesToShow?: number; // Number of slides visible at once
  gap?: string; // Gap between slides e.g. "1rem"
};

export default function SwipeCarousel({
  images,
  className = "",
  startIndex = 0,
  rounded = true,
  autoPlayMs = null,
  maxWidth = "800px",
  aspectRatio = "16/9",
  slidesToShow = 1,
  gap = "1rem",
}: Props) {
  const [index, setIndex] = useState(
    (startIndex + 1) % Math.max(images.length, 1)
  ); // Start with 2nd image (index 1)
  const maxIndex = Math.max(0, images.length - 2); // Stop at second-to-last image
  const wrap = (i: number) => Math.max(0, Math.min(i, maxIndex));
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Auto play
  useEffect(() => {
    if (!autoPlayMs) return;
    const id = setInterval(() => setIndex(i => wrap(i + 1)), autoPlayMs);
    return () => clearInterval(id);
  }, [autoPlayMs, images.length]);

  // Keyboard support when container is focused
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIndex(i => wrap(i + 1));
      if (e.key === "ArrowLeft") setIndex(i => wrap(i - 1));
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [images.length]);

  // Drag / swipe
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let startX = 0;
    let currentX = 0;
    let dragging = false;
    let startTime = 0;

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      startX = e.clientX;
      currentX = e.clientX;
      startTime = Date.now();
      track.style.transition = "none"; // Disable transitions during drag
      track.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      currentX = e.clientX;
      const dx = currentX - startX;
      const slideWidth = 442 + 20; // slide width + gap
      const offset = slideWidth; // Same centering offset
      track.style.transform = `translateX(${-index * slideWidth + offset + dx}px)`;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      track.releasePointerCapture(e.pointerId);
      const dx = currentX - startX;
      const dt = Date.now() - startTime;
      const threshold = track.clientWidth * 0.15; // 15% swipe

      // Snap
      let next = index;
      if (dx < -threshold || (dx < -30 && dt < 250)) next = wrap(index + 1);
      else if (dx > threshold || (dx > 30 && dt < 250)) next = wrap(index - 1);

      setIndex(next);
      // Re-enable transition for snap
      requestAnimationFrame(() => {
        const slideWidth = 442 + 20;
        const offset = slideWidth; // Same centering offset
        track.style.transition =
          "transform 450ms cubic-bezier(0.22, 1, 0.36, 1)";
        track.style.transform = `translateX(-${next * slideWidth - offset}px)`;
      });
    };

    track.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      track.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [index, images.length]);

  // Sync transforms when index changes (for arrow navigation)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = 442 + 20; // slide width + gap
    // Always center the selected image (put it in the middle position)
    const offset = slideWidth; // Offset to put selected image in center
    track.style.transition = "transform 450ms cubic-bezier(0.22, 1, 0.36, 1)";
    track.style.transform = `translateX(-${index * slideWidth - offset}px)`;
  }, [index]);

  const bulletLabel = (i: number) => images[i]?.alt || `Slide ${i + 1}`;

  if (!images?.length) return null;

  return (
    <div
      ref={rootRef}
      tabIndex={0}
      className={`${styles.carousel} ${className}`}
      style={
        {
          "--carousel-max-width": maxWidth,
          "--carousel-aspect-ratio": aspectRatio,
          "--slides-to-show": slidesToShow,
          "--slide-gap": gap,
        } as React.CSSProperties
      }
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
    >
      {/* Viewport */}
      <div className={`${styles.viewport} ${rounded ? styles.rounded : ""}`}>
        <div
          ref={trackRef}
          className={styles.track}
          style={{
            transform: `translateX(-${index * (442 + 20) - (442 + 20)}px)`,
          }}
        >
          {/* Show all images side by side */}
          {images.map((img, i) => (
            <div key={i} className={styles.slide}>
              <div className={styles.imageContainer}>
                <img
                  src={img.src}
                  alt={img.alt || `Slide ${i + 1}`}
                  className={styles.image}
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => setIndex(i => wrap(i - 1))}
        aria-label="Previous slide"
        className={`${styles.arrow} ${styles.leftArrow}`}
      >
        ←
      </button>
      <button
        onClick={() => setIndex(i => wrap(i + 1))}
        aria-label="Next slide"
        className={`${styles.arrow} ${styles.rightArrow}`}
      >
        →
      </button>

      {/* Dots */}
      <div className={styles.dotsContainer}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to ${bulletLabel(i)}`}
            className={`${styles.dot} ${i === index ? styles.activeDot : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
