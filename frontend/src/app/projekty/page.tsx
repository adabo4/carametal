import Gallery from "@/components/Gallery/Gallery";
import HomeSections from "@/components/HomeSections/HomeSections";
import { GalleryImage } from "@/lib/helpers";
import React from "react";

const galleryImages: GalleryImage[] = [
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

export const metadata = {
  title: "Projekty | Carametal",
  description: "Tu nájdete k dispozícii prehľad našich dokončených projektov.",
};

export default function Projects() {
  return (
    <>
      <div className="main-container">
        <div className="section-header">
          <HomeSections
            subtitleWeight="bold"
            title="Naše projekty"
            subtitle="Portfólio realizovaných projektov"
            paragraph="Od roku 1997 sme pre našich dlhoročných zákazníkov realizovali tisícky menších i veľkých projektov priamo v našich priestoroch v Nitre, ako i v teréne. "
            subtitleWidth="wide"
            paragraphWidth="93%"
          ></HomeSections>
        </div>

        <Gallery name={true} images={galleryImages}></Gallery>
      </div>
    </>
  );
}
