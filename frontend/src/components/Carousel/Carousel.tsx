"use client";
import React, { useState } from "react";
import styles from "./Carousel.module.css";
import Image from "next/image";

const servicesData = [
  {
    img: "/img/carousel-img/img1.jpg",
  },
  {
    img: "/img/carousel-img/img2.jpg",
  },
  {
    img: "/img/carousel-img/img3.jpg",
  },
  {
    img: "/img/carousel-img/img4.jpg",
  },
  {
    img: "/img/carousel-img/img5.jpg",
  },
  {
    img: "/img/carousel-img/img6.jpg",
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0); // Start with 2nd image centered

  const nextSlide = () => {
    if (currentSlide < servicesData.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  // Calculate transform to slide the entire track
  const getTransform = () => {
    const slideWidth = 332; // 300px + 32px gap
    // Move the track so currentSlide appears in the center
    // We want slide at index 'currentSlide' to be in the middle position
    const offset = -(currentSlide * slideWidth) + slideWidth; // +slideWidth centers it
    return `translateX(${offset}px)`;
  };

  // Get exactly 3 images to show: [prev, current, next]
  const getVisibleSlides = () => {
    const slides = [];

    // Previous image (left)
    if (currentSlide > 0) {
      slides.push({
        ...servicesData[currentSlide - 1],
        originalIndex: currentSlide - 1,
        position: "left",
      });
    }

    // Current image (center) - always present
    slides.push({
      ...servicesData[currentSlide],
      originalIndex: currentSlide,
      position: "center",
    });

    // Next image (right)
    if (currentSlide < servicesData.length - 1) {
      slides.push({
        ...servicesData[currentSlide + 1],
        originalIndex: currentSlide + 1,
        position: "right",
      });
    }

    return slides;
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prevBtn} onClick={prevSlide}>
        ‹
      </button>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack}>
          {getVisibleSlides().map(slide => (
            <div
              key={slide.originalIndex}
              className={`${styles.slide} ${
                slide.position === "center"
                  ? styles.active
                  : slide.position === "right"
                    ? styles.right
                    : styles.position === "left"
                      ? styles.left
                      : ""
              }`}
            >
              <Image
                src={slide.img}
                width={500}
                height={375}
                alt={`Slide ${slide.originalIndex + 1}`}
              />
            </div>
          ))}
        </div>
      </div>{" "}
      <button className={styles.nextBtn} onClick={nextSlide}>
        ›
      </button>
      <div className={styles.dots}>
        {servicesData.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.active : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
