import Image from "next/image";
import React from "react";
import { smallHeadingText } from "../../../constants/small-heading-text";
import SectionSmallHeading from "../../ui/SectionSmallHeading";

const PowerOfReadyMixInnovation = () => {
  return <div className="py-10 relative custom-container">
  <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 md:w-10/12 mx-auto">
    <div className="">
      <SectionSmallHeading text={smallHeadingText.power__heading} />

      <h3 className="mb-[15px] md:mb-[25px] text-base md:text-xl lg:text-4xl  text-dark">
      Elevating Construction Standards with Ready Mix Technology
      </h3>

      <p className="text-lg font-medium leading-[194%] text-[#50708F] mb-2 md:mb-[15px]">
      When it comes to your concrete needs, trust is paramount. Our professional concrete ready mix service offers reliability and expertise you can count on. With years of experience in the industry, we prioritize quality materials and efficient delivery to ensure your project is completed to the highest standards.
      </p>
      <p className="text-lg font-medium leading-[194%] text-[#50708F]">
      Our commitment to excellence extends beyond just delivering concrete; it encompasses dedication to customer satisfaction and building lasting relationships. We understand the importance of timelines and budgets, which is why we strive for punctuality and cost-effectiveness in every job. With a focus on safety and professionalism, you can have peace of mind knowing that your project is in capable hands. When reliability and quality matter, choose our concrete ready-mix service for unparalleled results that you can trust.
      </p>
      
    </div>
  </div>
  <Image
    priority="true"
    src="/barrie/images/power.png"
    alt=""
    width={1052}
    height={662}
    className="relative md:!absolute mb-4 md:mb-0 top-0 right-0 h-full w-full md:w-[45%] max-h-64 md:max-h-full object-cover object-center"
  />
</div>;
};

export default PowerOfReadyMixInnovation;
