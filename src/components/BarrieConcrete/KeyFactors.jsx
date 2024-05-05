import Image from "next/image";
import React from "react";
import { smallHeadingText } from "../../constants/small-heading-text";
import SectionSmallHeading from "../ui/SectionSmallHeading";

const KeyFactors = () => {
  return (
    <div className=" custom-container">
      <div className="grid grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7 gap-[56px]">
        <div className="col-span-2 xl:col-span-3 2xl:col-span-4">
          <Image
            priority="true"
            src="/barrie/images/choosing.png"
            alt="choosing"
            width={1052}
            height={642}
            className="!h-dvh 2xl:h-[642px]"
            // className="relative md:!absolute mb-4 md:mb-0 top-0 left-0 h-full w-full md:w-[45%] max-h-64 md:max-h-full object-cover object-center"
          />
        </div>
        <div className="col-span-1  xl:col-span-2 2xl:col-span-3 w-11/12 md:w-10/12">
          <div className="">
            <SectionSmallHeading text={smallHeadingText.choosing__heading} />

            <h3 className="mb-[15px] md:mb-[25px] text-base md:text-xl lg:text-4xl  text-dark">
              What to Consider First to Hire the Best Ready Mix Company in
              Barrie
            </h3>

            <p className="text-lg font-medium leading-[194%] text-dark">
              When hiring the best concrete ready mix company in Barrie,
              prioritize factors such as reputation, reliability, quality of
              materials, pricing, and customer service. A company with a strong
              track record, positive reviews, and transparent communication will
              likely deliver the best results for your construction project.
            </p>
            <p className="text-lg font-medium leading-[194%] text-dark mt-3 lg:mt-5">
              1. Researching ready-mix companies in Barrie
              <br />
              2. Assessing reputation and reliability
              <br />
              3. Evaluating experience and expertise
              <br />
              4. Analyzing the quality of materials and equipment
              <br />
              5. Reviewing pricing and cost transparency
              <br />
              6. Checking certifications and compliance
              <br />
              7. Examining customer reviews and testimonials
              <br />
              8. Inquiring about customization and flexibility
              <br />
              9. Assessing delivery timeliness and efficiency
              <br />
              10. Ensuring customer service and support
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default KeyFactors;
