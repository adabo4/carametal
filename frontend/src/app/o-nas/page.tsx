import HomeSections from "@/components/HomeSections/HomeSections";
import React from "react";

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
    </div>
  );
}
