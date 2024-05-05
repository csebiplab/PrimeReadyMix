"use client";
import React from "react";
import { smallHeadingText } from "../../constants/small-heading-text";
import SectionSmallHeading from "../ui/SectionSmallHeading";

const Workflow = () => {
  return <div>
      <div className="flex flex-col">
          <div className="text-center mx-auto">
          <SectionSmallHeading text={smallHeadingText.working__heading} />
          </div>

          <h3 className="mb-[15px] md:mb-[25px] text-base md:text-xl lg:text-4xl text-center text-dark">
          Working Process of Our Concrete Ready Mix Services
            </h3>
        </div>
    
  </div>;
};

export default Workflow;
