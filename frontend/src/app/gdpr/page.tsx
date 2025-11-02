import React from "react";
import styles from "./gdpr.module.css";
import Link from "next/link";

export default function GDPR() {
  return (
    <section className={styles["main-container"]}>
      <h1 className={styles.h1}>Podmienky spracúvania osobných údajov </h1>

      <div className={styles["list-container"]}>
        <ol className={styles["ordered-list"]}>
          {/*1. bod*/}
          <li>
            <h2 className={styles["list-headline"]}>
              Spracúvanie osobných údajov na www.carametal.sk
            </h2>
            <p>
              Prostredníctvom webovej stránky www.carametal.sk (ďalej len
              „webová stránka“) dochádza k spracúvaniu osobných údajov
              návštevníka webovej stránky nasledovne:
            </p>
            <ul className={styles["unordered-list"]}>
              <li className={styles.item}>
                <strong>
                  Spracúvanie osobných údajov v prípade použitia kontaktného
                  formulára:
                </strong>
                <p>
                  Prevádzkovateľ webovej stránky plne rešpektuje právo
                  návštevníkov webovej stránky na ochranu osobných údajov, ktoré
                  sa ich týkajú a prostredníctvom tohto dokumentu poskytuje
                  návštevníkovi webovej stránky ako dotknutej osobe informácie o
                  spracúvaní osobných údajov podľa čl. 13 Nariadenia Európskeho
                  parlamentu a Rady (EÚ) 2016/679 o ochrane fyzických osôb pri
                  spracúvaní osobných údajov a o voľnom pohybe takýchto údajov
                  (ďalej len „GDPR“). Tieto Podmienky spracúvania osobných
                  údajov sa vzťahujú výlučne na osobné údaje dotknutej osoby,
                  ktoré boli získané prostredníctvom webovej stránky.
                </p>
              </li>
            </ul>
          </li>
          {/* 2.  bod*/}
          <li>
            <h2 className={styles["list-headline"]}>Prevádzkovateľ</h2>
            <p>
              Osobné údaje získané prostredníctvom webovej stránky sú spracúvané
              obchodnou spoločnosťou{" "}
              <strong>
                CARAMETAL, spol. s r.o., so sídlom Nábrežie mládeže 61, Nitra
                949 01. IČO: 36 523 623, zapísaná v Obchodnom registri Okresného
                súdu Nitra oddiel: Sro, vložka č.: 10587/N,
              </strong>{" "}
              ktorá má pri spracúvaní osobných údajov postavenie prevádzkovateľa
              (ďalej len „prevádzkovateľ“). <br />
              Kontaktné údaje prevádzkovateľa:
            </p>
            <address>
              <ul className={styles["unordered-list"]}>
                <li>
                  e-mail:{" "}
                  <a href="mailto:info@carametal.sk">info@carametal.sk</a>
                </li>
                <li>telefón: +421 37 77 29065</li>
              </ul>
            </address>
          </li>
          {/*3. bod*/}
          <li>
            <h2 className={styles["list-headline"]}>
              Sprostredkovatelia spracúvania osobných údajov
            </h2>
            <p>
              Na zabezpečenie niektorých činností spojených so spracúvaním
              osobných údajov využívame služby tretích strán, ktoré sa podieľajú
              na spracovaní údajov. Tieto subjekty majú prístup k osobným údajom
              len v nevyhnutnom rozsahu a sú viazané povinnosťou mlčanlivosti a
              zmluvou o spracúvaní údajov podľa článku 28 GDPR. <br />
              Sprostredkovatelia, ktorých využívame:
            </p>
            <ul className={styles["unordered-list"]}>
              <li>
                <strong>Google Ireland Limited</strong> (prevádzkovateľ služby
                Gmail a Google Workspace) <br />
                Použitie: prijímanie a spracovanie e-mailov z kontaktného
                formulára. Miesto spracovania: EÚ / USA (v súlade so
                štandardnými zmluvnými doložkami EÚ). Zásady ochrany osobných
                údajov:{" "}
                <Link
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <u>https://policies.google.com/privacy</u>
                </Link>
                <p>
                  Prenos osobných údajov do USA prebieha výhradne na základe
                  platných záruk v súlade s rozhodnutím Európskej komisie o
                  primeranosti podľa rámca EU-US Data Privacy Framework.
                </p>
              </li>
              <li>
                <strong>WebHouse, s.r.o. </strong>(sídlo: Paulínska 20, 917 01
                Trnava, Slovenská republika) Použitie: hosting webovej stránky a
                e-mailových schránok (info@carametal.sk ). Zásady ochrany
                osobných údajov:{" "}
                <Link
                  href="https://www.webhouse.sk/ochrana-osobnych-udajov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <u>https://www.webhouse.sk/ochrana-osobnych-udajov</u>
                </Link>
              </li>
            </ul>
          </li>
          {/*4. bod*/}
          <li>
            <h2 className={styles["list-headline"]}>
              Poskytovanie osobných údajov tretím stranám a používanie externých
              služieb
            </h2>
            <p>
              Na webovej stránke môžu byť integrované služby tretích strán,
              ktoré z technických dôvodov spracúvajú osobné údaje návštevníkov
              (napr. IP adresa, typ zariadenia, prehliadač). Tieto služby sú
              prevádzkované nezávislými subjektmi, ktoré vystupujú vo vzťahu k
              návštevníkovi ako samostatní prevádzkovatelia.
            </p>
            <p className={styles["margin-top"]}>
              Konkrétne ide o službu <strong>Google Maps</strong>, ktorú
              poskytuje spoločnosť{" "}
              <strong>
                Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
                Írsko.
              </strong>{" "}
              Účelom tejto služby je zobrazenie mapy s umiestnením prevádzky
              spoločnosti <strong>CARAMETAL, spol. s r.o.</strong>
            </p>
            <p className={styles["margin-top"]}>
              Pri zobrazení mapy dochádza k spracovaniu osobných údajov (najmä
              IP adresa, technické údaje o zariadení), ktoré sú prenášané
              spoločnosti Google. Google môže tieto údaje spracúvať aj na
              svojich serveroch v tretích krajinách (napr. v USA) na základe
              štandardných zmluvných doložiek EÚ a v súlade s{" "}
              <strong>EU-US Data Privacy Framework.</strong> Podrobné informácie
              o spracúvaní osobných údajov spoločnosťou Google sú dostupné na:{" "}
              <Link
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <u> https://policies.google.com/privacy</u>
              </Link>
            </p>
          </li>
          {/* 5. bod */}
          <li>
            <h2 className={styles["list-headline"]}>Prenos osobných údajov</h2>
            <p>
              Prevádzkovateľ využíva softvérové riešenie poskytovateľa služieb
              na e-mailovanie, konkrétne www.gmail.com, na účely spracovania
              osobných údajov získaných prostredníctvom kontaktného formulára na
              webovej stránke. Poskytnuté osobné údaje, ako sú meno a e-mailová
              adresa, budú spracovávané za účelom zabezpečenia doručenia
              správnej odpovede alebo informácií na uvedený e-mailový kontakt
              carametal.contact@gmail.com. Prevádzkovateľ, s výnimkou vyššie
              uvedenej situácie, nerealizuje prenos osobných údajov do tretích
              krajín alebo medzinárodným organizáciám.
            </p>
            <p className={styles["margin-top"]}>
              {" "}
              Prevádzkovateľ, s výnimkou vyššie uvedených poskytovateľov služieb
              (napr. Google – Gmail a Google Maps), nerealizuje prenos osobných
              údajov do tretích krajín alebo medzinárodným organizáciám.
            </p>
            <p className={styles["margin-top"]}>
              V prípade, že nás kontaktujete prostredníctvom e-mailovej adresy
              info@carametal.sk, vaše osobné údaje (napr. meno, e-mail, telefón,
              obsah správy) budú spracované výlučne za účelom vybavenia vašej
              požiadavky. E-mailová komunikácia je prevádzkovaná prostredníctvom
              poskytovateľa hostingových služieb WebHouse, s.r.o.
            </p>
          </li>
          {/* 6. bod */}
          <li>
            <h2 className={styles["list-headline"]}>Práva dotknutej osoby</h2>
            <p>
              Dotknutá osoba má v súvislosti so spracúvaním svojich osobných
              údajov nasledovné práva, ktorých uplatnenie môže realizovať
              zaslaním žiadosti na e-mailovú adresu prevádzkovateľa alebo adresu
              sídla jeho spoločnosti, ktoré sú uvedené v týchto Podmienkach
              spracúvania osobných údajov, a to za podmienok vymedzených v GDPR:
            </p>
            <ul className={styles["unordered-list"]}>
              <li>
                <strong>
                  Právo na prístup k vlastným osobným údajom podľa článku 15
                  GDPR.
                </strong>
              </li>
              <li>
                <strong>
                  Právo na opravu osobných údajov podľa článku 16 GDPR (alebo
                  obmedzenie spracovania podľa článku 18 GDPR).
                </strong>
              </li>
              <li>
                <strong>Právo na vymazanie podľa článku 17 GDPR.</strong>
              </li>
              <li>
                <strong>
                  Právo na prenosnosť údajov podľa článku 20 GDPR.
                </strong>
              </li>
              <li>
                <strong>
                  Právo vzniesť námietku voči spracovaniu podľa článku 21 GDPR.
                </strong>
              </li>
              <li>
                <strong>
                  Právo odvolať súhlas so spracovaním osobných údajov.
                </strong>
              </li>
            </ul>
            <p className={styles["margin-top"]}>
              Subjekt údajov má ďalej právo podať sťažnosť Úradu pre ochranu
              osobných údajov v prípade, že má podozrenie, že bolo porušené jeho
              právo na ochranu údajov.
            </p>
          </li>
          {/* 7.  bod*/}
          <li>
            <h2 className={styles["list-headline"]}>
              Poskytovanie osobných údajov
            </h2>
            <p>
              Prevádzkovateľ informuje dotknutú osobu, že poskytovanie jej
              osobných údajov, ku ktorých získavaniu dochádza prostredníctvom
              webovej stránky, nie je zákonnou ani zmluvnou požiadavkou.
              Neposkytnutie osobných údajov nemá pre dotknutú osobu žiadne
              negatívne následky. Neposkytnutie osobných údajov môže mať za
              následok obmedzenie využívania niektorých doplnkových služieb
              prevádzkovateľa.
            </p>
          </li>
          {/* 8.  bod*/}
          <li>
            <h2 className={styles["list-headline"]}>
              Kontaktný formulár a spracúvanie osobných údajov
            </h2>
            <ul>
              <li className={styles.item}>
                <strong>Účel spracúvania osobných údajov</strong>
                <p>
                  V prípade, ak dochádza k získavaniu osobných údajov dotknutej
                  osoby prostredníctvom kontaktného formulára umiestneného na
                  webovej stránke, osobné údaje v rozsahu meno, e-mail, prípadne
                  v rozsahu osobných údajov zadaných do textu správy doručovanej
                  prostredníctvom kontaktného formulára sú spracúvané na účely
                  kontaktovania prevádzkovateľa a zabezpečenia vzájomnej
                  komunikácie medzi dotknutou osobou a prevádzkovateľom v
                  súvislosti s akýmikoľvek produktmi a službami prevádzkovateľa
                  a/alebo v súvislosti s vybavovaním podnetov a poskytovaním
                  potrebných informácií dotknutej osobe.
                </p>
              </li>
              <li className={styles.item}>
                <strong> Právny základ spracúvania</strong>
                <p>
                  Osobné údaje návštevníka webovej stránky, ktorého osobné údaje
                  boli získané prostredníctvom kontaktného formulára sú
                  spracúvané na základe súhlasu dotknutej osoby (čl. 6 ods. 1
                  písm. a) Nariadenia GDPR.). Dotknutá osoba poskytuje svoj
                  súhlas dobrovoľne, jeho neposkytnutie má za následok nemožnosť
                  odoslať formulár.
                </p>
              </li>
              <li className={styles.item}>
                <strong>Doba uchovávania osobných údajov</strong>
                <p>
                  Osobné údaje dotknutej osoby získané prostredníctvom
                  kontaktného formulára sú spracúvané po dobu 3 rokov odo dňa
                  získania osobných údajov dotknutej osoby.
                </p>
              </li>
            </ul>
          </li>
          {/* 9.  bod*/}
          <li>
            <h2 className={styles["list-headline"]}>
              Podmienky zabezpečenia osobných údajov
            </h2>
            <p>
              Prevádzkovateľ vyhlasuje, že prijal všetky vhodné technické a
              organizačné opatrenia na zabezpečenie osobných údajov.
              Prevádzkovateľ vyhlasuje, že k osobným údajom majú prístup iba
              osoby, ktoré sú ním poverené.
            </p>
          </li>
          {/* 10.  bod*/}
          <li>
            <h2 className={styles["list-headline"]}>Záverečné ustanovenia</h2>
            <p>
              S týmito podmienkami súhlasíte zaškrtnutím súhlasu prostredníctvom
              kontaktného formulára. Zaškrtnutím súhlasu potvrdzujete, že ste sa
              oboznámil(a) s podmienkami ochrany osobných údajov a že ich plne
              akceptujete. Prevádzkovateľ si vyhradzuje právo tieto podmienky
              kedykoľvek aktualizovať. Aktuálna verzia je vždy zverejnená na
              tejto stránke.
            </p>
          </li>
        </ol>
        <p className={styles.text}>V Nitre dňa 1.11.2024.</p>
      </div>
    </section>
  );
}
