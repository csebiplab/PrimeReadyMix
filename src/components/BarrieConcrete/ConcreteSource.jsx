import Image from "next/image";
import React from "react";
import { smallHeadingText } from "../../constants/small-heading-text";
import SectionSmallHeading from "../ui/SectionSmallHeading";

const ConcreteSource = () => {
  return (
    <div className="custom-container lg:pl-28">
      <div className="border border-red-500 grid grid-cols-1 lg:grid-cols-10 px-20 lg:px-0 gap-x-14">
        <div className="w-full border border-red-500 col-span-4">
          <div>
            <SectionSmallHeading
              text={smallHeadingText.concreteSource__heading}
            />

            <h3 className="mb-[15px] md:mb-[25px] text-black !text-3xl !lg:text-4xl !font-semibold">
              Dependable Barrie Ready Mix Suppliers
            </h3>
            <p className="text-lg font-medium leading-[155%] ">
              Prime Ready Mix is your dependable source for top-quality
              ready-mix concrete in Barrie. As leading ready mix suppliers, we
              pride ourselves on delivering reliable and efficient service,
              ensuring your construction projects receive the highest quality
              materials exactly when you need them. With our expert team and
              state-of-the-art facilities, we guarantee consistency and
              precision in every batch, helping you build with confidence and
              convenience. Trust Prime Ready Mix for all your Barrie concrete
              ready mix needs, and experience excellence from start to finish.
            </p>
          </div>
        </div>
        <div className="col-span-6">
          <Image
            alt="About Us"
            src="/barrie/images/source.png"
            width={650}
            height={472}
            className="w-auto h-auto  lg:h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ConcreteSource;
