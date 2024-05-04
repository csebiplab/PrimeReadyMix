"use client";

import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

import "./Advantages.css";

const usualConcrete = [
  {
    title: "Inconsistent quality of work.",
  },
  {
    title: "Lack of communication and responsiveness.",
  },
  {
    title: "Delayed project completion",
  },
  {
    title: "Equipment maintenance issues",
  },
  {
    title: "Poor safety record",
  },
  {
    title: "Overcharging for services",
  },
  {
    title: "Unreliable scheduling",
  },
  {
    title: "Inadequate site cleanup",
  },
  {
    title: "Limited expertise in specialized concrete pumping techniques.",
  },
  {
    title: "Difficulty in resolving disputes or issues.",
  },
];
const primeConcrete = [
  {
    title: "Efficient project completion",
  },
  {
    title: "Precise concrete placement",
  },
  {
    title: "Skilled and experienced operators",
  },
  {
    title: "Versatile equipment capabilities",
  },
  {
    title: "Enhanced site safety",
  },
  {
    title: "Cost-effective solutions",
  },
  {
    title: "Reduced labor requirements",
  },
  {
    title: "Minimized material waste",
  },
  {
    title: "Reliable delivery schedules",
  },
  {
    title: "Support for various project scales",
  },
];

const Advantages = () => {
  return (
    <div>
      <div className="shadow-sm mx-[35px] md:mx-0">
        <div className="mx-auto  flex flex-col items-center justify-center">
          <div>
            <HeadingIcon text={headingIconText.whoIsBest__IconText} />
          </div>

          <h3 className="mb-[15px] md:mb-[25px] !mt-[10px] md:mt-4  text-black text-lg md:text-3xl lg:text-4xl text-center">
            Choose the{" "}
            <span className="text-primary">
              Best Concrete Pumping Contractors
            </span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 2xl:gap-12">
          <div className=" border-2 shadow">
            <h4 className="title-bg text-center 2xl:py-[15px] py-[10px] text-white text-base 2xl:text-2xl">
              Usual concrete pumping contractors
            </h4>
            <div className="3xl:py-[35px] py-[25px] 3xl:px-[25px] px-5 text-base ">
              {usualConcrete.map((usual, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 items-center mb-3 lg:mb-5 3xl:mb-6"
                >
                  <Image
                    src="/assets/exPool/x.png"
                    alt="x"
                    width={23}
                    height={23}
                    className="2xl:h-[23px] 2xl:w-[23px] h-[15px] w-[15px]"
                  />
                  <p className="text-base">{usual.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className=" border-2 shadow">
            <h4 className="title-bg text-center 2xl:py-[15px] py-[10px] text-white text-base 2xl:text-2xl">
              Prime Concrete Pumping’s contractors
            </h4>
            <div className="3xl:py-[35px] py-[25px] 3xl:px-[25px] px-5 text-base">
              {primeConcrete.map((usual, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 mb-3 lg:mb-5 3xl:mb-6"
                >
                  <Image
                    src="/assets/exPool/r.png"
                    alt="r"
                    width={23}
                    height={23}
                    className="h-[15px] w-[15px] 2xl:h-[23px] 2xl:w-[23px]"
                  />
                  <p className="">{usual.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
