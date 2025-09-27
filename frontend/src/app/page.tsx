import React from "react";
import "./home.css";
import Image from "next/image";
import img1 from "./img/home_img/img1.jpg";

export default function Home() {
  return (
    <>
      <section className="section-header">
        <div className="titles">
          <h2>Expresné dodanie aj s manipuláciou</h2>
          <h3>CARAMETAL spol. s.r.o. sa venuje povrchovým úpravám</h3>
        </div>
        <button className="btn">Čítaj</button>
      </section>
      <section className="section-one">
        <div className="section-one-text-wrapper">
          <h4 className="section-one-title">
            Povrchové úpravy kontajnerov, priemyselné a potravinárske nátery
          </h4>
          <p className="section-one-text">
            Jednou z podstatných podmienok kvality výrobku je jeho povrchová
            úprava, ktorá dotvára design a zlepšuje jeho funkčné vlastnosti,
            zabezpečuje ochranu materiálu pred vonkajšími vplyvmi, zefektívni
            jeho technické riešenie a tým zlepší možnosti odbytu na domácom i
            zahraničnom trhu.
          </p>
          <p className="section-one-text">
            Naša firma má viac ako 30. ročné skúsenosti s najnovšími
            technológiami povrchových úprav, a to od poradenstva, až po
            realizáciu. Na základe Vašich požiadaviek sme pripravení:
          </p>
          <ul className="section-one-list">
            <li>vyriešiť predložené problémy</li>
            <li>vypracovať technologické postupy</li>
            <li>vybrať najefektívnejšie riešenia</li>
          </ul>
        </div>

        <div className="section-one-img">
          <Image src={img1} alt="Picture of the author"></Image>
        </div>
      </section>
    </>
  );
}
