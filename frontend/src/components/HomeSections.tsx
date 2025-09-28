import React from "react";
import { HomeSectionProps } from "@/lib/helpers";

export default function HomeSections({
  title,
  subtitle,
  btnText,
  paragraph,
}: HomeSectionProps): React.JSX.Element {
  return (
    <>
      <div className="titles">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        {paragraph && <p>{paragraph}</p>}
      </div>
      <button className="btn">{btnText}</button>
    </>
  );
}
