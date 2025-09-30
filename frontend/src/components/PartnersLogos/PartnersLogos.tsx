import React from "react";
import styles from "./PartnersLogos.module.css";
import Image from "next/image";
import { ImageProps } from "@/lib/helpers";

const dataLogos: ImageProps[] = [
  {
    src: "/img/logos/img1.png",
    width: 120,
    height: 120,
  },
  {
    src: "/img/logos/img2.png",
    width: 200,
    height: 200,
  },
  {
    src: "/img/logos/img3.png",
    width: 80,
    height: 80,
  },
  {
    src: "/img/logos/img4.png",
    width: 100,
    height: 100,
  },
  {
    src: "/img/logos/img5.png",
    width: 180,
    height: 180,
  },
  {
    src: "/img/logos/img6.jpg",
    width: 200,
    height: 200,
  },
  {
    src: "/img/logos/img7.png",
    width: 180,
    height: 180,
  },
  {
    src: "/img/logos/img8.png",
    width: 180,
    height: 180,
  },
  {
    src: "/img/logos/img9.jpg",
    width: 150,
    height: 150,
  },
  {
    src: "/img/logos/img10.png",
    width: 150,
    height: 150,
  },
];

export default function PartnersLogos() {
  return (
    <>
      <h4 className={styles.title}>Naši partneri</h4>
      <h5 className={styles.subtitle}>Klientske portfólio</h5>
      <div className={styles.logo}>
        {dataLogos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            width={logo.width || 120}
            height={logo.height || 120}
            alt={logo.alt || `Partner logo ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
