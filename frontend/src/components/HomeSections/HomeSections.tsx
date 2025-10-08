import React from "react";
import { HomeSectionProps } from "@/lib/helpers";
import styles from "./Sections.module.css";

export default function HomeSections({
  title,
  subtitle,
  btnText,
  paragraph,
  subtitleWidth = "normal",
  subtitleWeight = "light",
  paragraphWidth,
}: HomeSectionProps): React.JSX.Element {
  const widthClass = subtitleWidth !== "normal" ? styles[subtitleWidth] : "";
  const weightClass = subtitleWeight !== "light" ? styles[subtitleWeight] : "";
  return (
    <>
      <div
        className={styles.titles}
        style={
          paragraphWidth
            ? ({ "--paragraph-width": paragraphWidth } as React.CSSProperties)
            : {}
        }
      >
        <h2>{title}</h2>
        <h3 className={`${styles.subtitle} ${widthClass} ${weightClass}`}>
          {subtitle}
        </h3>
        {paragraph && <p>{paragraph}</p>}
      </div>
      {btnText && <button className={styles.btn}>{btnText}</button>}
    </>
  );
}
