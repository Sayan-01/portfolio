import React from "react";
import SectionSvg from '../assets/svg/SectionSvg'
const Section = ({ children, className, id, customPadding, crosses, sectionLine }) => {
  return (
    <div id={id} className={`relative ${customPadding || "py-10 lg:py-16 xl:py-20"} ${crosses ? "lg:py-28" : ""} ${className || ""}`}>
      {children}
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 md:block lg:right-7.5 xl:right-10" />
      {crosses && (
        <>
          <div className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${sectionLine && sectionLine} pointer-events-none lg:block xl:left-10 right-10`}></div>
          <SectionSvg/>
        </>
      )}
    </div>
  );
};

export default Section;
