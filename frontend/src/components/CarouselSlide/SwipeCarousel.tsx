"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./SwipeCarousel.module.css";
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiArrowSmallLeft } from "react-icons/hi2";

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
  // Set initial index based on device type
  const getInitialIndex = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    if (isMobile) {
      return startIndex % Math.max(images.length, 1); // Mobile: start with 1st image (index 0)
    } else {
      return (startIndex + 1) % Math.max(images.length, 1); // Desktop & Tablet: start with 2nd image (index 1)
    }
  };

  // Set maxIndex based on device type
  const getMaxIndex = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    if (isMobile) {
      return Math.max(0, images.length - 1); // Mobile: allow going to the last image
    } else {
      return Math.max(0, images.length - 2); // Desktop & Tablet: stop at second-to-last image
    }
  };

  const [index, setIndex] = useState(getInitialIndex());
  const [maxIndex, setMaxIndex] = useState(getMaxIndex());
  const wrap = (i: number) => Math.max(0, Math.min(i, maxIndex));

  // Custom navigation functions for desktop vs mobile behavior
  const goToPrev = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    const minIndex = isMobile ? 0 : 1; // Desktop stops at index 1, mobile at index 0
    setIndex(i => Math.max(minIndex, i - 1));
  };

  const goToNext = () => {
    setIndex(i => wrap(i + 1));
  };

  // Device-specific wrapping for swipe navigation
  const wrapForSwipe = (i: number) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    const minIndex = isMobile ? 0 : 1;
    return Math.max(minIndex, Math.min(i, maxIndex));
  };

  // Update maxIndex when screen size changes
  useEffect(() => {
    const handleResize = () => {
      setMaxIndex(getMaxIndex());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images.length]);
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

      // Calculate responsive dimensions for swipe
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth > 768 && window.innerWidth <= 1100;
      const isSmallMobile = window.innerWidth <= 480;

      let slideWidth, gap, offset;

      if (isSmallMobile) {
        slideWidth = (window.innerWidth - 30) / 2;
        gap = 10;
        if (index === 0) {
          offset = 0;
        } else if (index === images.length - 1) {
          offset = slideWidth + gap;
        } else {
          offset = slideWidth * 0.5;
        }
      } else if (isMobile) {
        slideWidth = (window.innerWidth - 45) / 2;
        gap = 15;
        if (index === 0) {
          offset = 0;
        } else if (index === images.length - 1) {
          offset = slideWidth + gap;
        } else {
          offset = slideWidth * 0.5;
        }
      } else if (isTablet) {
        slideWidth = Math.min(360, (window.innerWidth - 75) / 3);
        gap = 15;
        offset = slideWidth + gap; // Use desktop-style centering
      } else {
        slideWidth = 442 + 20;
        offset = slideWidth;
      }

      track.style.transform = `translateX(${-index * (slideWidth + (gap || 20)) + offset + dx}px)`;
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
      const isMobile =
        typeof window !== "undefined" && window.innerWidth <= 768;
      const currentMaxIndex = isMobile ? images.length - 1 : images.length - 2;
      const currentMinIndex = isMobile ? 0 : 1;

      if (dx < -threshold || (dx < -30 && dt < 250)) {
        // Swipe left (go to next/forward)
        next = Math.min(index + 1, currentMaxIndex);
      } else if (dx > threshold || (dx > 30 && dt < 250)) {
        // Swipe right (go to prev/backward)
        next = Math.max(index - 1, currentMinIndex);
      }

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

    // Calculate responsive dimensions
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1100;
    const isSmallMobile = window.innerWidth <= 480;

    let slideWidth, gap, offset;

    if (isSmallMobile) {
      // Small mobile: 2 images side by side
      slideWidth = (window.innerWidth - 30) / 2;
      gap = 10;
      // Special mobile logic
      if (index === 0) {
        offset = 0; // Show first 2 images whole
      } else if (index === images.length - 1) {
        // Last image: show it whole by positioning it in the right slot
        offset = slideWidth + gap; // Position last image to show whole in right position
      } else {
        offset = slideWidth * 0.5; // Center the selected image with half-peeks
      }
    } else if (isMobile) {
      // Tablet/mobile: 2 images side by side
      slideWidth = (window.innerWidth - 45) / 2;
      gap = 15;
      // Special mobile logic
      if (index === 0) {
        offset = 0; // Show first 2 images whole
      } else if (index === images.length - 1) {
        // Last image: show it whole by positioning it in the right slot
        offset = slideWidth + gap; // Position last image to show whole in right position
      } else {
        offset = slideWidth * 0.5; // Center the selected image with half-peeks
      }
    } else if (isTablet) {
      // Tablet: 3 images visible with responsive sizing, desktop-style behavior
      slideWidth = Math.min(360, (window.innerWidth - 75) / 3);
      gap = 15;
      offset = slideWidth + gap; // Use desktop-style centering
    } else {
      // Desktop: 3 images visible
      slideWidth = 442 + 20;
      offset = slideWidth; // Desktop centering
    }

    track.style.transition = "transform 450ms cubic-bezier(0.22, 1, 0.36, 1)";
    track.style.transform = `translateX(-${index * (slideWidth + (gap || 20)) - offset}px)`;
  }, [index, images.length]);

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
        onClick={goToPrev}
        aria-label="Previous slide"
        className={`${styles.arrow} ${styles.leftArrow}`}
      >
        {/* ← */}
        <HiArrowSmallLeft className={styles.icon} />
      </button>
      <button
        onClick={goToNext}
        aria-label="Next slide"
        className={`${styles.arrow} ${styles.rightArrow}`}
      >
        {/* → */}
        <HiArrowSmallRight className={styles.icon} />
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
