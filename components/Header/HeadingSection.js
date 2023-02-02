import React from "react";

const HeadingSection = ({ title, tagline, classAppend, font, children }) => {
  return (
    <div
    className={
      "col-sm-8 section-heading " + (classAppend ? classAppend : "")
    }
  >
      <h2 className={ font ? font : ""}>{title}</h2>
    {
      tagline && 
      <h4 className={"text-uppercase " + (font ? font : "")}>{`- ${tagline} -`}</h4>
    }
    {children ? (
        <p className="mt-30">{children}</p>
    ) : null}
  </div>
  );
};

export default HeadingSection;