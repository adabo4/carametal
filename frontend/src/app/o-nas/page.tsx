import HomeSections from "@/components/HomeSections/HomeSections";
import React from "react";
import styles from "./About.module.css";
import "../home.css";
import Image from "next/image";
import Gallery from "@/components/Gallery/Gallery";
import { GalleryImage } from "@/lib/helpers";
import SwipeCarousel from "@/components/CarouselSlide/SwipeCarousel";

const galleryImages: GalleryImage[] = [
  {
    src: "/img/certificates-img/img1.jpg",
    alt: "Hempel",
  },
  {
    src: "/img/certificates-img/img2.jpg",
    alt: "Jotun",
  },
  {
    src: "/img/certificates-img/img3.jpg",
    alt: "Sigma Coatings",
  },
  {
    src: "/img/certificates-img/img4.jpg",
    alt: "Perge International",
  },
  {
    src: "/img/certificates-img/img5.jpg",
    alt: "Pregna",
  },
  {
    src: "/img/certificates-img/img6.jpg",
    alt: "Dunamenti",
  },
  {
    src: "/img/certificates-img/img7.jpg",
    alt: "Lankwitzer Lackfabrik",
  },
  {
    src: "/img/certificates-img/img8.jpg",
    alt: "Geholit+wiemer",
  },
  {
    src: "/img/certificates-img/img9.jpg",
    alt: "Dualcom",
  },
];

export const metadata = {
  title: "O nás | Carametal",
  description:
    "Sme firma s viac ako 30. ročnou tradíciou v oblasti povrchových úprav a pieskovania veľkých i malých konštrukcií, kontajnerov, nádrží, priemyselných podláh, vonkajších plôch a stavieb. ",
};

export default function AboutUs() {
  return (
    <div className="main-container">
      <section className="section-header">
        <HomeSections
          paragraphWidth="500px"
          subtitleWeight="bold"
          subtitleWidth="wide"
          title="O nás"
          subtitle="Povrchové nátery, pieskovanie, otryskávanie"
        ></HomeSections>
      </section>

      <SwipeCarousel
        images={[
          { src: "/img/slider/img1.jpg", alt: "Hempel" },
          { src: "/img/slider/img2.jpg", alt: "Jotun" },
          { src: "/img/slider/img3.jpg", alt: "Sigma Coatings" },
          { src: "/img/slider/img4.jpg", alt: "Fourth image" },
          { src: "/img/slider/img5.jpg", alt: "Fifth image" },
          { src: "/img/slider/img6.jpg", alt: "Sixth image" },
        ]}
        maxWidth="1000px"
        aspectRatio="3/2"
        slidesToShow={3}
        gap="1rem"
      />
      <div className={styles["about-container"]}>
        <div className={styles.left}>
          <h3>O spoločnosti CARAMETAL spol. s.r.o.</h3>
          <p>
            História firmy CARAMETAL sa začala písať v roku 1997, kedy sme
            začali ponúkať otryskávacie služby a povrchové úpravy na mieru.{" "}
          </p>
          <p>
            K našim začiatkom neodmysliteľne patria spoločnosti Slovnaft, Duslo
            Šaľa a mnoho iných klientov, ktorí nám prejavili dôveru a umožnili
            náš rast. Venovali sme sa i mobilnému pieskovaniu v teréne a od roku
            2002 sme získali vlastné priestory v Nitre.
          </p>
          <p>
            Zákazky našich klientov prerástli v dlhoročné obchodné partnerstvá,
            ktoré kultivujeme na domácom i zahraničnom trhu. Toho času je pre
            nás kľúčová realizácia novej tryskárne, ktorá bude spustená do
            prevádzky koncom roka 2024.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.paragraph}>
            <h4>Tradícia od roku 1997</h4>
            <p>
              Firma vznikla v roku 1997 a odvtedy sme vystriedali viacero
              prevádzok v Bratislave a okolí. Venovali sme sa mobilnému
              pieskovaniu, ako i úpravám na prevádzkach.
            </p>
          </div>
          <div className={styles.paragraph}>
            <h4>Moderné a veľkokapacitné priestory</h4>
            <p>
              Tradícia od roku 1997 Firma vznikla v roku 1997 a odvtedy sme
              vystriedali viacero prevádzok v Bratislave a okolí. Venovali sme
              sa mobilnému pieskovaniu, ako i úpravám na prevádzkach. Moderné a
              veľkokapacitné priestory V roku 2002 sme sa pre potrebu rozšírenia
              priestorov presťahovali do vlastného areálu na Jarockej ceste v
              Nitre. Táto prevádzka spĺňala nielen kapacitný dopyt, ale nám i
              umožnila rozšírenie biznisu od logistiky a manipulácie až po
              sušenie a koncové úpravy aj nadrozmernej techniky a dielcov.
            </p>
          </div>
          <div className={styles.paragraph}>
            <h4>Vyškolený personál</h4>
            <p>
              Naši lakýrnici, vozíčkari, maliari a manipulanti sú odborne
              vyškolení, s dlhoročnou praxou. Personál s nami rástol roky a
              naším cieľom je obojstranná spokojnosť pri bezpečnom a odbornom
              výkone činnosti.
            </p>
          </div>
        </div>
      </div>
      <section className={styles["section-services"]}>
        <div className={styles["services-text-wrapper"]}>
          <div>
            <h2 className={styles.title}>Naše ciele</h2>
            <h3 className={styles.subtitle}>
              Neustále inovácie a nová tryskáreň
            </h3>
          </div>
          <p className={styles["services-text"]}>
            V roku 2019 sme začali budovať novú tryskáreň, ktorá je vybavená
            koľajnicami pre praktickú manipuláciu s kontajnermi.
          </p>
          <p className={styles["services-text"]}>
            Naša tryskáreň je schopná prevádzky i za nepriaznivých
            poveternostných podmienok, uľahčuje manipuláciu, ako i nakladanie
            kontajnerov na kamión a umožňuje nám vybaviť klientsku objednávku v
            rekordne krátkom čase. Takmer nepretržitá prevádzka, prísne dodržané
            normy a ochrana povrchov za každého počasia z nás robia toho
            správneho partnera pre Váš biznis.
          </p>
        </div>
        <div className={styles["services-img"]}>
          <Image
            fill
            className={styles.img}
            src="/img/building.jpg"
            alt="Areál Carametal"
            quality={60}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjNmNGY2Ii8+Cjwvc3ZnPgo="
            sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 90vw,
         1200px"
          ></Image>
        </div>
      </section>
      <div className={styles["certificates-text"]}>
        <h3>Certifikáty</h3>
        <p>
          Certifikáty a oprávnenia na používanie špeializovaných i
          protipožiarych náterov
        </p>
      </div>
      <Gallery images={galleryImages} enableSlideAnimation={true}></Gallery>
    </div>
  );
}
