import HomeSections from "@/components/HomeSections/HomeSections";
import React from "react";
import "../home.css";

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
      </div>
    </>
  );
}
