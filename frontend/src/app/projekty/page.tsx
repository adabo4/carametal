import Gallery from "@/components/Gallery/Gallery";
import HomeSections from "@/components/HomeSections/HomeSections";
import React from "react";

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

        <Gallery></Gallery>
      </div>
    </>
  );
}
