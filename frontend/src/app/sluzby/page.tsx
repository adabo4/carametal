import HomeSections from "@/components/HomeSections/HomeSections";
import React from "react";
import "../home.css";
import ServicesSection from "@/components/Services/ServicesSection";
import SectionText from "@/components/HomeSections/SectionText";
import Image from "next/image";
import styles from "./Services.module.css";
import img1 from "../../../public/img/svg/nater.svg";
import img2 from "../../../public/img/svg/nater2.svg";

export const metadata = { title: "Služby | Carametal" };

export default function Services() {
  return (
    <>
      <div className="main-container">
        <div className="section-header">
          <HomeSections
            title="Naše služby"
            subtitle="Poskytujeme komplexné riešenia povrchových úprav"
            paragraph="Poskytujeme rýchle, kvalitné a profesionáne služby."
            subtitleWidth="wide"
          ></HomeSections>
        </div>

        <section className={styles["section-services"]}>
          <div className={styles["text-container"]}>
            <SectionText
              logoImg={img1}
              className="section-title-services"
              title="Povrchové úpravy kontajnerov"
              paragraphs={[
                "Špecializujeme sa na komplexné riešenia povrchovej úpravy kontajnerov, navrhnutých tak, aby odolali tým najtvrdším podmienkam prostredia. Poskytujeme **komplexné úpravy**, ktoré zahŕňajú **dôkladnú prípravu povrchu, korózii odolné základné nátery a pokročilé nátery prispôsobené špecifickým požiadavkám.**",
                "Naše odolné ochranné nátery zaisťujú dlhodobú **odolnosť voči korózii, oderu a extrémnemu počasiu,** čím predlžujú životnosť. Ponúkame tiež špecializované protišmykové a protipožiarne  nátery.",
              ]}
            ></SectionText>
          </div>
          <div
            className={styles["img-container"]}
            style={
              {
                "--bg-image": 'url("/img/services-img/img1.jpg")',
              } as React.CSSProperties
            }
          ></div>
        </section>

        <section className={styles["section-services"]}>
          <div
            className={styles["img-container"]}
            style={
              {
                "--bg-image": 'url("/img/services-img/img2.jpg")',
              } as React.CSSProperties
            }
          ></div>
          <SectionText
            logoImg={img2}
            className="section-title-services"
            title="Priemyselné a potravinárske nátery"
            paragraphs={[
              "Poskytujeme špecializované náterové riešenia pre priemyselné povrchy v prostrediach spracovania potravín, ako sú výrobné haly, závody na spracovanie cukru, mliekarne a všeobecné oblasti výroby potravín.",
              "**Naše nátery bezpečné pre potraviny sú navrhnuté tak, aby spĺňali prísne hygienické a bezpečnostné normy, ponúkajú ochranu proti korózii, chemikáliám a opotrebovaniu a zároveň zabezpečujú jednoduché čistenie a údržbu. **",
            ]}
          ></SectionText>
        </section>
      </div>
    </>
  );
}
