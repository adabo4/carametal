import React from "react";
import Image from "next/image";
import styles from "./ServicesSection.module.css";

const servicesData = [
  {
    img: "/img/svg/nater.svg", // Correct: starts with / (no public)
    alt: "Pieskovanie a nátery kontajnerov",
    title: "Pieskovanie a nátery kontajnerov",
    width: 100,
    height: 100,
  },
  {
    img: "/img/svg/nater2.svg", // Correct: starts with / (no public)
    alt: "Priemyselné a potravinárske nátery",
    title: "Priemyselné a potravinárske nátery",
  },
  {
    img: "/img/svg/nater3.svg", // Correct: starts with / (no public)
    alt: "Expresné kalkulácie cenových ponúk",
    title: "Expresné kalkulácie cenových ponúk",
  },
  {
    img: "/img/svg/nater4.svg", // Correct: starts with / (no public)
    alt: "Profesionálny tím",
    title: "Profesionálny tím",
  },
  {
    img: "/img/svg/nater5.svg", // Correct: starts with / (no public)
    alt: "Bezpečná manipulácia modernou technikou",
    title: "Bezpečná manipulácia modernou technikou",
  },
  {
    img: "/img/svg/nater6.svg", // Correct: starts with / (no public)
    alt: "Kontrola kvality",
    title: "Kontrola kvality",
  },
  {
    img: "/img/svg/nater7.svg", // Correct: starts with / (no public)
    alt: "Výškové práce",
    title: "Výškové práce",
  },
  {
    img: "/img/svg/nater8.svg", // Correct: starts with / (no public)
    alt: "Práca v teréne",
    title: "Práca v teréne",
  },
];

export default function ServicesSection() {
  return (
    <div className={styles.container}>
      {servicesData.map(({ img, alt, title, width, height }, index) => (
        <div className={styles.box} key={index}>
          <div className={styles.imageContainer}>
            <Image
              src={img}
              width={width || 60} // Some images smaller
              height={height || 60}
              alt={alt}
            />
          </div>
          <h5 className={styles.title}>{title}</h5>
        </div>
      ))}
    </div>
  );
}
