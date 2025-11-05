"use client";

import Image from "next/image";
import React from "react";
import styles from "./Gallery.module.css";
import { useState, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { GalleryImage, GalleryImagesProps } from "@/lib/helpers";

const galleryImages = [
  {
    src: "/img/gallery-img/img1.jpg",
    alt: "Horská dráha Tulireki",
  },
  {
    src: "/img/gallery-img/img2.jpg",
    alt: "Most Apollo",
  },
  {
    src: "/img/gallery-img/img3.jpg",
    alt: "FŠ Nitra",
  },
  {
    src: "/img/gallery-img/img4.jpg",
    alt: "Športová hala Nitra",
  },
  {
    src: "/img/gallery-img/img5.jpg",
    alt: "Kontajnery Strabag",
  },
  {
    src: "/img/gallery-img/img6.jpg",
    alt: "ČS Aral",
  },
  {
    src: "/img/gallery-img/img7.jpg",
    alt: "Nádrže Považský Cukor",
  },
  {
    src: "/img/gallery-img/img8.jpg",
    alt: "Most Nitra",
  },
  {
    src: "/img/gallery-img/img9.jpg",
    alt: "Bilboardy",
  },
  {
    src: "/img/gallery-img/img10.jpg",
    alt: "Nadrozmerné kontajnery 15m",
  },
  {
    src: "/img/gallery-img/img11.jpg",
    alt: "Poľná kuchyňa",
  },
  {
    src: "/img/gallery-img/img12.jpg",
    alt: "Poľnohospodárska technika",
  },
  {
    src: "/img/gallery-img/img13.jpg",
    alt: "Cyklotrasa Jaslovské Bohunice",
  },
  {
    src: "/img/gallery-img/img14.jpg",
    alt: "Nádrže",
  },
  {
    src: "/img/gallery-img/img15.jpg",
    alt: "Vodojemy",
  },
];

export default function Gallery({
  images,
  enableSlideAnimation = false,
  name = false,
}: GalleryImagesProps) {
  const [galleryImage, setGalleryImage] = useState(images[0].src);
  const [title, setTitle] = useState("");
  const [showImage, setShowImage] = useState("hidden");
  const [index, setIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  // Scroll direction tracking for directional animation
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  // Touch/swipe states
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Preload optimized images when gallery opens for instant navigation
  useEffect(() => {
    if (showImage !== "hidden") {
      // Preload next and previous images with Next.js optimization
      const currentIndex = index;
      const imagesToPreload = [];

      // Add next 2 images
      for (let i = 1; i <= 2; i++) {
        const nextIndex = (currentIndex + i) % images.length;
        imagesToPreload.push(images[nextIndex].src);
      }

      // Add previous 2 images
      for (let i = 1; i <= 2; i++) {
        const prevIndex = (currentIndex - i + images.length) % images.length;
        imagesToPreload.push(images[prevIndex].src);
      }

      // Create optimized image URLs that match Next.js format
      imagesToPreload.forEach(src => {
        const img = document.createElement("img");
        // Force Next.js to generate and cache the optimized version
        img.src = `/_next/image?url=${encodeURIComponent(src)}&w=800&q=75`;
        img.style.display = "none";
        document.body.appendChild(img);

        // Clean up after loading
        img.onload = () => {
          document.body.removeChild(img);
        };
        img.onerror = () => {
          document.body.removeChild(img);
        };
      });
    }
  }, [showImage, images, index]);

  // Track scroll direction for directional animation
  useEffect(() => {
    if (!enableSlideAnimation) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, enableSlideAnimation]);

  function nextImage() {
    setImageOpacity(0.7);

    setTimeout(() => {
      if (index + 1 === images.length) {
        setIndex(0);
        setGalleryImage(images[0].src);
        setTitle(images[0].alt || "");
      } else {
        setIndex(index + 1);
        setGalleryImage(images[index + 1].src);
        setTitle(images[index + 1].alt || "");
      }

      setTimeout(() => {
        setImageOpacity(1);
      }, 20);
    }, 80);
  }

  function prevImage() {
    setImageOpacity(0.7);

    setTimeout(() => {
      if (index === 0) {
        setIndex(images.length - 1);
        setGalleryImage(images[images.length - 1].src);
        setTitle(images[images.length - 1].alt || "");
      } else {
        setIndex(index - 1);
        setGalleryImage(images[index - 1].src);
        setTitle(images[index - 1].alt || "");
      }

      setTimeout(() => {
        setImageOpacity(1);
      }, 20);
    }, 80);
  }

  // Swipe detection constants
  const minSwipeDistance = 50;

  // Touch event handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Reset touch end
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
      nextImage(); // Swipe left = next image
    } else if (isRightSwipe) {
      prevImage(); // Swipe right = previous image
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Only work when gallery is open (not hidden)
      if (showImage !== "hidden") {
        if (event.key === "ArrowRight") {
          nextImage();
        } else if (event.key === "ArrowLeft") {
          prevImage();
        } else if (event.key === "Escape") {
          setShowImage("hidden");
        }
      }
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [showImage, index]); // Dependencies: re-run when showImage or index changes

  // Intersection Observer for slide-up animation (only when enabled)
  useEffect(() => {
    if (!enableSlideAnimation) return;

    // Observer for individual images
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const imageIndex = parseInt(
            entry.target.getAttribute("data-index") || "0"
          );

          if (entry.isIntersecting && scrollDirection === "down") {
            // Only animate when scrolling down (discovery mode)
            setTimeout(() => {
              setVisibleImages(prev => [...prev, imageIndex]);
            }, imageIndex * 100); // Stagger animation by 100ms per image
          }
          // Images stay visible when scrolling up!
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    // Observer for the entire gallery container to reset when far away
    const galleryResetObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting && scrollDirection === "up") {
            // Reset all images when gallery completely out of view while scrolling up
            setVisibleImages([]);
          }
        });
      },
      { threshold: 0, rootMargin: "100px 0px 100px 0px" } // Large margin for complete exit
    );

    // Observe all image containers
    const imageElements = document.querySelectorAll("[data-gallery-item]");
    imageElements.forEach(el => observer.observe(el));

    // Observe the gallery container
    const galleryContainer = document.querySelector("[data-gallery-container]");
    if (galleryContainer) {
      galleryResetObserver.observe(galleryContainer);
    }

    return () => {
      observer.disconnect();
      galleryResetObserver.disconnect();
    };
  }, [enableSlideAnimation, scrollDirection]);

  return (
    <div
      className={styles["grid-container"]}
      {...(enableSlideAnimation && { "data-gallery-container": "true" })}
    >
      {images.map((image, index) => (
        <div
          key={index}
          {...(enableSlideAnimation && {
            "data-gallery-item": "true",
            "data-index": index,
          })}
          className={
            enableSlideAnimation
              ? `${styles["gallery-item"]} ${
                  visibleImages.includes(index) ? styles["visible"] : ""
                }`
              : ""
          }
        >
          <div
            className={styles["img-container"]}
            onClick={() => {
              setShowImage("");
              setGalleryImage(image.src);
              setTitle(image.alt || "");
              setIndex(index);
            }}
          >
            <Image
              src={image.src}
              alt={image.alt || "Gallery image"}
              width={400}
              height={400}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              sizes="(max-width: 768px) 50vw, 300px"
              quality={40}
              loading="lazy"
            />
          </div>
          {name && <p className={styles["img-title"]}>{image.alt}</p>}
        </div>
      ))}

      <div
        className={`fixed h-screen w-full left-0 top-0 py-40 md:py-28 lg:py-10 px-5  bg-white flex max-[980px]:flex-col items-center z-10 ${styles.galleryPadding} ${showImage}`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className={styles["left-arrow"]} onClick={prevImage}>
          <FiChevronLeft className="w-10 h-10"></FiChevronLeft>
        </div>
        <Image
          src={galleryImage}
          width={800}
          height={600}
          alt="1st Image"
          className={styles["gallery-img"]}
          style={{
            opacity: imageOpacity,
            transition: "opacity 0.1s ease-in-out",
          }}
          sizes="(max-width: 400px) 300px, (max-width: 768px) 500px, 800px"
          quality={75}
          priority
        ></Image>

        {/* Preload adjacent images with Next.js Image component */}
        {showImage !== "hidden" && (
          <div className={styles["preload-container"]}>
            {/* Preload next image */}
            <Image
              src={images[(index + 1) % images.length].src}
              width={800}
              height={600}
              alt="preload next"
              quality={75}
              priority
            />
            {/* Preload previous image */}
            <Image
              src={images[(index - 1 + images.length) % images.length].src}
              width={800}
              height={600}
              alt="preload prev"
              quality={75}
              priority
            />
          </div>
        )}

        <div className={styles["left-arrow"]} onClick={nextImage}>
          <FiChevronRight className="w-10 h-10"></FiChevronRight>
        </div>
        <div
          className={`${styles["close-btn"]} ${showImage}`}
          onClick={() => {
            setShowImage("hidden");
          }}
        >
          <AiOutlineClose className="w-10 h-10"></AiOutlineClose>
        </div>
        <h5
          className={`text-4xl self-start my-10 max-[980px]:self-center ${styles.headline}`}
        >
          {title}
        </h5>
      </div>
    </div>
  );
}
