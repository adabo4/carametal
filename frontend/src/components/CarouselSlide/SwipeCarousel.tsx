"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./SwipeCarousel.module.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

interface ImageData {
  src: string;
  alt: string;
}

interface SwipeCarouselProps {
  images: string[] | ImageData[];
  maxWidth?: string;
  aspectRatio?: string;
  slidesToShow?: number;
  gap?: string;
}

export default function SwipeCarousel({ images }: SwipeCarouselProps) {
  const startIndex = 0;

  // Set initial index based on device type
  const getInitialIndex = () => {
    if (typeof window === "undefined") return 0;
    const isMobile = window.innerWidth <= 768;
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

  // Simple touch/swipe functionality (like CarouselHorizontalNew)
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  // Custom navigation functions for desktop vs mobile behavior
  const goToPrev = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    const minIndex = isMobile ? 0 : 1; // Desktop stops at index 1, mobile at index 0
    setIndex(i => Math.max(minIndex, i - 1));
  };

  const goToNext = () => {
    setIndex(i => wrap(i + 1));
  };

  // Helper functions to determine arrow visibility
  const shouldShowLeftArrow = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    const minIndex = isMobile ? 0 : 1;
    return index > minIndex;
  };

  const shouldShowRightArrow = () => {
    return index < maxIndex;
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

  // Keyboard navigation
  useEffect(() => {
    const el = document.body;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrev();
      else if (e.key === "ArrowRight") goToNext();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [images.length]);

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
        // Last image: ensure it's completely visible with small buffer
        // Available width = window.innerWidth - track padding (10px each side) = window.innerWidth - 20
        // Add small buffer to ensure 100% visibility
        offset = window.innerWidth - 20 - slideWidth - 5;
      } else {
        offset = slideWidth * 0.5; // Center the selected image with half-peeks
      }
    } else if (isMobile) {
      // Mobile: 2 images side by side
      slideWidth = (window.innerWidth - 45) / 2;
      gap = 15;
      // Special mobile logic
      if (index === 0) {
        offset = 0; // Show first 2 images whole
      } else if (index === images.length - 1) {
        // Last image: ensure it's completely visible with small buffer
        // Available width = window.innerWidth - track padding (15px each side) = window.innerWidth - 30
        // Add small buffer to ensure 100% visibility
        offset = window.innerWidth - 30 - slideWidth - 5;
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

    // Apply transform
    if (isMobile || isSmallMobile) {
      // Mobile: include gaps in the calculation
      const mobileGap = gap || 15; // Fallback to 15 if gap is undefined
      track.style.transform = `translateX(${-index * (slideWidth + mobileGap) + offset}px)`;
    } else {
      // Desktop/Tablet: use original calculation
      track.style.transform = `translateX(${-index * slideWidth + offset}px)`;
    }
  }, [index, images.length]);

  return (
    <div className={styles.carousel}>
      <div className={styles.viewport}>
        <div
          ref={trackRef}
          className={styles.track}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {images.map((image, i) => {
            const src = typeof image === "string" ? image : image.src;
            const alt =
              typeof image === "string" ? `Slide ${i + 1}` : image.alt;

            return (
              <div key={i} className={styles.slide}>
                <div className={styles.imageContainer}>
                  <Image
                    className={styles.image}
                    src={src}
                    width={442}
                    height={589}
                    alt={alt}
                    priority={i < 3}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Arrows */}
      {shouldShowLeftArrow() && (
        <button
          onClick={goToPrev}
          aria-label="Previous slide"
          className={`${styles.arrow} ${styles.leftArrow}`}
        >
          {/* ← */}
          <HiOutlineArrowNarrowLeft className={styles.icon} />
        </button>
      )}
      {shouldShowRightArrow() && (
        <button
          onClick={goToNext}
          aria-label="Next slide"
          className={`${styles.arrow} ${styles.rightArrow}`}
        >
          {/* → */}
          <HiOutlineArrowNarrowRight className={styles.icon} />
        </button>
      )}

      {/* Dots
      <div className={styles.dotsContainer}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`${styles.dot} ${index === i ? styles.activeDot : ""}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
}
