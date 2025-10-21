import HomeSections from "@/components/HomeSections/HomeSections";
import React from "react";
import styles from "./About.module.css";

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
    </div>
  );
}
