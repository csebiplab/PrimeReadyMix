import Image from "next/image";
import React from "react";
import { smallHeadingText } from "../../constants/small-heading-text";
import SectionSmallHeading from "../ui/SectionSmallHeading";
const BuildingStandards = () => {
  return <div className="custom-container">
  <div className="grid grid-cols-1 lg:grid-cols-10 px-20 lg:px-0 gap-x-14">
  <div className="col-span-6">
      <Image
        alt="buildingStandards"
        src="/barrie/images/standards.png"
        width={1052}
        height={500}
        className="w-auto  lg:h-[500px]"
      />
    </div>
    <div className="w-full col-span-4">
      <div>
        <SectionSmallHeading
          text={smallHeadingText.standards__heading}
        />

        <h3 className="mb-[15px] md:mb-[25px] text-black !text-3xl !lg:text-4xl !font-semibold">
        Supplying the Highest Quality Construction Materials in Barrie
        </h3>
        <p className="text-lg font-medium leading-[155%] ">
        We understand that every project is unique, which is why we offer a diverse range of concrete mixes tailored to suit your specific requirements. Our dedication to quality starts with our meticulous selection of raw materials. We source only the finest aggregates, cement, and additives, ensuring that every batch of concrete meets stringent quality standards. This meticulous attention to detail guarantees the durability, strength, and performance of our concrete ready mix.
        </p>
      </div>
    </div>
   
  </div>
</div>;
};

export default BuildingStandards;
