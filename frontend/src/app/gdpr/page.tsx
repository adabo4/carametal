import React from "react";
import styles from "./gdpr.module.css";
import Link from "next/link";

export default function GDPR() {
  return (
    <section className={styles["main-container"]}>
      <h1 className={styles.h1}>Podmienky spracúvania osobných údajov </h1>

      <div className={styles["list-container"]}>
        <ol className={styles["ordered-list"]}>
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
                <b>
                  Spracúvanie osobných údajov v prípade použitia kontaktného
                  formulára:
                </b>
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
          <li>
            <h2 className={styles["list-headline"]}>Prevádzkovateľ</h2>
            <p>
              Osobné údaje získané prostredníctvom webovej stránky sú spracúvané
              obchodnou spoločnosťou{" "}
              <b>
                CARAMETAL, spol. s r.o., so sídlom Nábrežie mládeže 61, Nitra
                949 01. IČO: 36 523 623, zapísaná v Obchodnom registri Okresného
                súdu Nitra oddiel: Sro, vložka č.: 10587/N,
              </b>{" "}
              ktorá má pri spracúvaní osobných údajov postavenie prevádzkovateľa
              (ďalej len „prevádzkovateľ“). <br />
              Kontaktné údaje prevádzkovateľa:
            </p>
            <ul className={styles["unordered-list"]}>
              <li>e-mail: info@carametal.sk</li>
              <li>telefón: +421 37 77 29065</li>
            </ul>
          </li>
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
                <b>Google Ireland Limited</b> (prevádzkovateľ služby Gmail a
                Google Workspace) <br />
                Použitie: prijímanie a spracovanie e-mailov z kontaktného
                formulára. Miesto spracovania: EÚ / USA (v súlade so
                štandardnými zmluvnými doložkami EÚ). Zásady ochrany osobných
                údajov:{" "}
                <Link href="https://policies.google.com/privacy">
                  https://policies.google.com/privacy
                </Link>
              </li>
            </ul>
          </li>
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
          </li>
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
                <b>
                  Právo na prístup k vlastným osobným údajom podľa článku 15
                  GDPR.
                </b>
              </li>
              <li>
                <b>
                  Právo na opravu osobných údajov podľa článku 16 GDPR (alebo
                  obmedzenie spracovania podľa článku 18 GDPR).
                </b>
              </li>
              <li>
                <b>Právo na vymazanie podľa článku 17 GDPR.</b>
              </li>
              <li>
                <b>Právo na prenosnosť údajov podľa článku 20 GDPR.</b>
              </li>
              <li>
                <b>
                  Právo vzniesť námietku voči spracovaniu podľa článku 21 GDPR.
                </b>
              </li>
              <li>
                <b>Právo odvolať súhlas so spracovaním osobných údajov.</b>
              </li>
            </ul>
          </li>
          <p>
            Subjekt údajov má ďalej právo podať sťažnosť Úradu pre ochranu
            osobných údajov v prípade, že má podozrenie, že bolo porušené jeho
            právo na ochranu údajov.
          </p>
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
          <li>
            <h2 className={styles["list-headline"]}>
              Kontaktný formulár a spracúvanie osobných údajov
            </h2>
            <ul>
              <li className={styles.item}>
                <b>Účel spracúvania osobných údajov</b>
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
                <b> Právny základ spracúvania</b>
                <p>
                  Osobné údaje návštevníka webovej stránky, ktorého osobného
                  údaje boli získané prostredníctvom kontaktného formulára sú
                  spracúvané na základe oprávneného záujmu prevádzkovateľa (čl.
                  6 ods. 1 písm. f) GDPR). Prevádzkovateľ pred vykonávaním
                  spracúvania osobných údajov na tomto právnom základe dôsledne
                  preskúmal, či výkon takejto spracovateľskej operácie
                  nepredstavuje neprimeraný zásah do práv a slobôd dotknutej
                  osoby, a za týmto účelom uskutočnil test proporcionality.
                  Oprávnený záujem prevádzkovateľa je daný snahou
                  prevádzkovateľa zaistiť vybavovanie podnetov dotknutej osoby
                  a/alebo poskytovanie iných informácií o prevádzkovateľom
                  poskytovaných službách.
                </p>
              </li>
              <li className={styles.item}>
                <b>Doba uchovávania osobných údajov</b>
                <p>
                  Osobné údaje dotknutej osoby získané prostredníctvom
                  kontaktného formulára sú spracúvané po dobu 3 rokov odo dňa
                  získania osobných údajov dotknutej osoby.
                </p>
              </li>
            </ul>
          </li>
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
          <li>
            <h2 className={styles["list-headline"]}>Záverečné ustanovenia</h2>
            <p>
              S týmito podmienkami súhlasíte zaškrtnutím súhlasu prostredníctvom
              kontaktného formulára. Zaškrtnutím súhlasu potvrdzujete, že ste sa
              oboznámil(a) s podmienkami ochrany osobných údajov a že ich plne
              akceptujete. Prevádzkovateľ má právo tieto podmienky zmeniť. Novú
              verziu podmienok ochrany osobných údajov zverejní na svojej
              internetovej stránke.
            </p>
          </li>
          <p className={styles.text}>V Nitre dňa 1.11.2024</p>
        </ol>
      </div>
    </section>
  );
}
