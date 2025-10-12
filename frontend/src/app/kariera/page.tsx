import HomeSections from "@/components/HomeSections/HomeSections";
import React from "react";

export default function Career() {
  return (
    <div className="main-container">
      <section className="section-header">
        <HomeSections
          title="Kariéra u nás"
          subtitle="Voľné pracovné pozície"
          subtitleWidth="wide"
          paragraphWidth="50%"
          paragraph="Momentálne máme voľné nasledujúce pracovné pozície. Ak máte záujem, zavolajte nám na 0905 601 300, vyplňte doleuvedený formulár, prípadne zašlite Váš životopis na info@carametal.sk a my sa Vám obratom ozveme. "
        ></HomeSections>
      </section>
    </div>
  );
}
