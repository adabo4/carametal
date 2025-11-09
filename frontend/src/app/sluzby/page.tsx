import HomeSections from "@/components/HomeSections/HomeSections";
import React from "react";
import "../home.css";
import SectionText from "@/components/HomeSections/SectionText";
import styles from "./Services.module.css";
import img1 from "../../../public/img/svg/nater.svg";
import img2 from "../../../public/img/svg/nater2.svg";
import img3 from "../../../public/img/svg/nater9.svg";
import img4 from "../../../public/img/svg/nater10.svg";
import img5 from "../../../public/img/svg/nater4.svg";
import img6 from "../../../public/img/svg/nater5.svg";
import img7 from "../../../public/img/svg/nater6.svg";
import img8 from "../../../public/img/svg/nater11.svg";

export const metadata = {
  title: "Služby | Carametal",
  alternates: {
    canonical: "https://carametal.sk/sluzby",
  },
  description:
    "Úpravy povrchov, pieskovanie, metalizácia, revitalizácia povrchov, kontajnerov a priemyselných podláh, protipožiarne nátery.",
};

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
            subtitleWeight="light"
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

        <section className={`${styles["section-services"]} ${styles.reverse}`}>
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

        <section className={styles["section-services"]}>
          <div className={styles["text-container"]}>
            <SectionText
              logoImg={img3}
              className="section-title-services"
              title="Nátery priemyselných podláh"
              paragraphs={[
                "Naše služby v oblasti náterov priemyselných podláh poskytujú trvanlivé a odolné riešenia pre širokú škálu zariadení vrátane **skladov, výrobných závodov a náročných výrobných priestorov. Ponúkame pokročilé epoxidové a polyuretánové nátery, ktoré sú navrhnuté tak, aby odolali ťažkej premávke, chemikáliám a oderu**, čím zaisťujú dlhotrvajúcu ochranu.",
                "Tieto nátery nielen zlepšujú odolnosť a bezpečnosť vašich podláh, ale ponúkajú aj **protišmykové vlastnosti a jednoduchú údržbu.**",
              ]}
            ></SectionText>
          </div>
          <div
            className={styles["img-container"]}
            style={
              {
                "--bg-image": 'url("/img/services-img/img3.jpg")',
              } as React.CSSProperties
            }
          ></div>
        </section>

        <section className={`${styles["section-services"]} ${styles.reverse}`}>
          <div
            className={styles["img-container"]}
            style={
              {
                "--bg-image": 'url("/img/services-img/img4.jpg")',
              } as React.CSSProperties
            }
          ></div>
          <SectionText
            logoImg={img4}
            className="section-title-services"
            title="Protipožiarne nátery"
            paragraphs={[
              "**Naše protipožiarne riešenia, vrátane intumescentných a cementových náterov, ako je Pyrostop, sú navrhnuté tak, aby izolovali oceľové konštrukcie, steny a stropy pred extrémnym teplom, čím pomáhajú oddialiť zlyhanie konštrukcie v prípade požiaru.**",
              "Tieto nátery sú v súlade s priemyselnými normami a možno ich aplikovať v rôznych prostrediach, ako sú **továrne, sklady a verejné budovy.** Medzi výhody našich protipožiarnych náterov patrí **vynikajúca tepelná odolnosť, dlhodobá trvanlivosť a bezproblémová integrácia s existujúcimi povrchmi,** ktoré poskytujú ďalšiu vrstvu bezpečnosti bez kompromisov vo vzhľade.",
            ]}
          ></SectionText>
        </section>

        <section className={styles["section-services"]}>
          <div className={styles["text-container"]}>
            <SectionText
              logoImg={img5}
              className="section-title-services"
              title="Otryskávanie"
              paragraphs={[
                "Naše pieskovacie služby poskytujú efektívne a efektívne riešenie na **prípravu povrchu** v rôznych priemyselných odvetviach. Táto technika je ideálna na **odstraňovanie hrdze, starých náterov, nečistôt a nedokonalostí z ocele, betónu a iných materiálov. Otryskávanieje kritickým krokom pri zabezpečovaní optimálnej priľnavosti ochranných náterov a farieb,** vďaka čomu je vhodné pre aplikácie v lodeniciach, stavebníctve, potrubiach a priemyselných zariadeniach. Výhodami sú zvýšená životnosť povrchu a zlepšený výkon náteru.",
              ]}
            ></SectionText>
          </div>
          <div
            className={styles["img-container"]}
            style={
              {
                "--bg-image": 'url("/img/services-img/img5.jpg")',
              } as React.CSSProperties
            }
          ></div>
        </section>

        <section className={`${styles["section-services"]} ${styles.reverse}`}>
          <div
            className={styles["img-container"]}
            style={
              {
                "--bg-image": 'url("/img/services-img/img6.jpg")',
              } as React.CSSProperties
            }
          ></div>
          <SectionText
            logoImg={img6}
            className="section-title-services"
            title="Metalizácia"
            paragraphs={[
              "Metalizácia **poskytuje pokročilú ochranu kovových povrchov vystavených drsnému prostrediu.** Tento proces tepelného striekania zahŕňa nanášanie vrstvy roztaveného zinku, hliníka alebo ich zliatin na oceľové povrchy, aby sa zabránilo korózii a predĺžila životnosť materiálu.",
              "Metalizácia sa bežne používa v odvetviach, ako je **infraštruktúra, pobrežné plošiny, potrubia a mosty, kde je kritická dlhodobá životnosť a odolnosť proti korózii.** Naše odborne aplikované nátery spĺňajú prísne priemyselné normy a ponúkajú vynikajúcu priľnavosť a húževnatosť. Medzi **výhody metalizácie patrí vynikajúca odolnosť voči korózii, teplu a oderu, ako aj dlhší cyklus údržby v porovnaní s tradičnými nátermi.**",
            ]}
          ></SectionText>
        </section>

        <section className={styles["section-services"]}>
          <div className={styles["text-container"]}>
            <SectionText
              logoImg={img7}
              className="section-title-services"
              title="Výškové práce"
              paragraphs={[
                "Sme plne vybavení a certifikovaní na vykonávanie náterov, pieskovacích a lakovacích služieb vo výškach, čím zaisťujeme **bezpečné a efektívne operácie na vysokých konštrukciách, ako sú mosty, priemyselné komíny, skladovacie nádrže a výškové budovy.** Náš tím je vyškolený v pokročilých bezpečnostných protokoloch, využíva špecializované lešenie, lanový prístup a letecké výťahy, aby sa dostal do zložitých oblastí s presnosťou.",
                "Či už ide o ochranu proti korózii, povrchovú úpravu alebo nanášanie náterov, zaisťujeme, **že všetky projekty budú dokončené podľa najvyšších štandardov bez ohľadu na výšku. Medzi výhody našich služieb patrí minimalizácia prestojov, zvýšená bezpečnosť a možnosť prístupu do náročných lokalít** pri zachovaní prísneho dodržiavania bezpečnostných predpisov a priemyselných noriem.",
              ]}
            ></SectionText>
          </div>
          <div
            className={styles["img-container"]}
            style={
              {
                "--bg-image": 'url("/img/services-img/img7.jpg")',
              } as React.CSSProperties
            }
          ></div>
        </section>

        <section className={`${styles["section-services"]} ${styles.reverse}`}>
          <div
            className={styles["img-container"]}
            style={
              {
                "--bg-image": 'url("/img/services-img/img8.jpg")',
              } as React.CSSProperties
            }
          ></div>
          <SectionText
            logoImg={img8}
            className="section-title-services"
            title="Veľké outdoor plochy"
            paragraphs={[
              "​Špecializujeme sa na pieskovanie a lakovanie **veľkých vonkajších plôch**, ako sú štadióny, továrne a priemyselné zariadenia. Náš tím je vybavený na zvládnutie výziev **rozsiahlych exponovaných povrchov aplikovaním odolných náterov, ktoré chránia pred poveternostnými vplyvmi, koróziou a opotrebovaním.**",
              "Či už ide o prípravu povrchu alebo nanášanie špecializovaných náterov na oceľ, betón alebo iné materiály, zabezpečíme hladký a dlhotrvajúci povrch. Naše skúsenosti s rozsiahlymi projektmi nám umožňujú efektívne riadiť logistiku, minimalizovať prestoje a dodávať výsledky v krátkych termínoch.",
            ]}
          ></SectionText>
        </section>
      </div>
    </>
  );
}
