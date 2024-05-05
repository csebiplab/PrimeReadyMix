import Image from "next/image";
import React from "react";
import { smallHeadingText } from "../../../constants/small-heading-text";
import SectionSmallHeading from "../../ui/SectionSmallHeading";

const BuildingSuccessTogether = () => {
  return (
    <div className="py-10 relative custom-container">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 md:w-10/12 mx-auto">
        <div className="">
          <SectionSmallHeading text={smallHeadingText.building__heading} />

          <h3 className="mb-[15px] md:mb-[25px] text-base md:text-xl lg:text-4xl  text-dark">
            Barrie’s Trusted Construction Supplier Company
          </h3>

          <p className="text-lg font-medium leading-[194%] text-dark">
            Looking for a reliable concrete ready mix in Barrie? Look no
            further! Our company is Barrie's trusted supplier for all your
            concrete needs. With a commitment to quality and customer
            satisfaction, we provide top-notch ready-mix solutions tailored to
            your specific project requirements.
          </p>
          <h5 className="py-3 lg:py-5">Why we are trusted: </h5>
          <p className="text-lg font-medium leading-[194%] text-dark">
            1. Reliable Quality Products<br/>
            2. Exceptional Customer Service<br/>
            3. Timely Delivery<br/>
            4. Expertise in Concrete Solutions<br/>
            5. Proven Track Record<br/>
            6. Commitment to Customer Satisfaction<br/>
            7. Competitive Pricing<br/>
            8. Local Community Involvement<br/>
            9. Sustainable Practices<br/>
            10. Consistent Performance
          </p>
        </div>
      </div>
      <Image
        priority="true"
        src="/barrie/images/buildingSuccess.png"
        alt=""
        width={1052}
        height={662}
        className="relative md:!absolute mb-4 md:mb-0 top-0 right-0 h-full w-full md:w-[45%] max-h-64 md:max-h-full object-cover object-center"
      />
    </div>
  );
};

export default BuildingSuccessTogether;
