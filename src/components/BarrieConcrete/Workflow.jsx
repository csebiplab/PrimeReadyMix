"use client";
import React from "react";
import { smallHeadingText } from "../../constants/small-heading-text";
import SectionSmallHeading from "../ui/SectionSmallHeading";
const Workflow = () => {
  const works=[
    {
      src:"/barrie/icons/customer.png",
      title:"Customer Consultation",
      text:"We begin by understanding the unique requirements and specifications of our clients' projects. This involves discussing project timelines, quantities needed, and any special mix requirements."
    },
    {
      src:"/barrie/icons/material.png",
      title:"Material Procurement",
      text:"We source high-quality raw materials from trusted suppliers to ensure the reliability and consistency of our concrete mixes. This includes aggregates, cement, admixtures, and water."
    },
    {
      src:"/barrie/icons/mixing.png",
      title:"Mixing",
      text:"The materials are thoroughly mixed to achieve a homogenous blend, ensuring that each batch meets the desired quality standards. Our modern mixing equipment ensures efficient and uniform mixing."
    },
    {
      src:"/barrie/icons/transport.png",
      title:"Transportation",
      text:"Once mixed, the concrete is promptly loaded onto our fleet of specialized vehicles equipped with rotating drums to prevent segregation and maintain the workability of the mix during transit."
    },

  ]
  return (
    <div>
      <div className="flex flex-col">
        <div className="text-center mx-auto">
          <SectionSmallHeading text={smallHeadingText.working__heading} />
        </div>

        <h3 className="mb-[15px] md:mb-[25px] text-base md:text-xl lg:text-4xl text-center text-dark">
          Working Process of Our Concrete Ready Mix Services
        </h3>
      </div>
    </div>
  );
};

export default Workflow;
