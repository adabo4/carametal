import React from "react";
import { SectionTextProps } from "@/lib/helpers";

export default function SectionText({
  title,
  paragraphs,
  listItems,
  className,
}: SectionTextProps) {
  return (
    <div className={className}>
      <h4 className="section-title">{title}</h4>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="section-text">
          {paragraph}
        </p>
      ))}
      {listItems && (
        <ul className="section-list">
          {listItems?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
