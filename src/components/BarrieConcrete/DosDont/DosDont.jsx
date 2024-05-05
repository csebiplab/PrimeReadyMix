"use client";

import Image from "next/image";
import { useState } from "react";
import { smallHeadingText } from "../../../constants/small-heading-text";
import SectionSmallHeading from "../../ui/SectionSmallHeading";

const services = [
  {
    title: "Properly Prepare the Site",
    img: "/barrie/icons/do1.png",
  },
  {
    title: "Communicate Clearly with the Contractor",
    img: "/barrie/icons/do2.png",
  },
  {
    title: "Follow Safety Guidelines",
    img: "/barrie/icons/do3.png",
  },
  {
    title: "Verify the Quality of Materials",
    img: "/barrie/icons/do4.png",
  },
  {
    title: "Regularly Monitor the Pouring Process",
    img: "/barrie/icons/do5.png",
  },
];

const services2 = [
  {
    title: "Properly Prepare the Site",
    img: "/barrie/icons/do1.png",
  },
  {
    title: "Communicate Clearly with the Contractor",
    img: "/barrie/icons/do2.png",
  },
  {
    title: "Follow Safety Guidelines",
    img: "/barrie/icons/do3.png",
  },
  {
    title: "Verify the Quality of Materials",
    img: "/barrie/icons/do4.png",
  },
  {
    title: "Regularly Monitor the Pouring Process",
    img: "/barrie/icons/do5.png",
  },
];

const DosDont = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="custom-container">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-40">
        <div className="">
          <div className="flex justify-center lg:justify-normal">
            <SectionSmallHeading text={smallHeadingText.DosDont__heading} />
          </div>
          <h2 className="text-dark text-2xl lg:text-3xl 2xl:text-4xl font-semibold leading-[111%]">
            Our Barrie Ready-Mixed Concrete Contractor <br /> Do’s And Don’t
          </h2>
        </div>

        <div className="hidden lg:block ">
          <p className="text-base lg:text-lg leading-[155%]">
            When embarking on a concrete project in Barrie, choosing the right
            ready-mixed concrete contractor is crucial. Our team offers
            essential guidance with a list of do's and don'ts to ensure your
            project's success. From selecting the appropriate mix to avoiding
            common pitfalls, we provide expert advice tailored to Barrie's
            specific requirements.
          </p>
        </div>
      </div>

      {/* taggle button */}
      <div className="flex justify-center items-center py-5 mb-12 mx-2 ">
        <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-3xl bg-white border border-primary">
          <input
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span
            className={`flex items-center border  space-x-[6px] rounded-3xl px-4 lg:px-16 py-2 lg:py-3  text-sm lg:text-xl font-medium ${
              !isChecked ? "text-white bg-primary" : ""
            }`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="mr-[6px] fill-current"
            >
              <g clipPath="url(#clip0_3122_652)"></g>
              <defs>
                <clipPath id="clip0_3122_652">
                  <rect width="16" height="16" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            Our Contractors Do's
          </span>
          <span
            className={`flex items-center space-x-[6px] rounded-3xl px-4 lg:px-16 py-2 lg:py-3  text-sm lg:text-xl  font-medium ${
              isChecked ? "text-white bg-primary " : ""
            }`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="mr-[6px] fill-current"
            ></svg>
            Our Contractors Don'ts
          </span>
        </label>
      </div>

      <div className="lg:my-10 my-5">
        {!isChecked && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 gap-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-span-1 border-4 rounded border-primary h-full bg-white"
              >
                <div className="mx-auto rounded-lg shadow-lg h-full relative bg-white">
                  <div className=" py-7 ">
                    <p className="mt-4 py-5  mx-auto text-center lg:text-[16px]  text-xs">
                      {service.title}{" "}
                    </p>
                  </div>
                  <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                      src={service.img}
                      alt="Profile"
                      height={90}
                      width={90}
                      className=" w-14 h-14 lg:w-20 lg:h-20 bg-white rounded-full border-black"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {isChecked && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 gap-y-8">
            {services2.map((service, index) => (
              <div
                key={index}
                className="col-span-1 border-4 rounded border-primary bg-white"
              >
                <div className="mx-auto rounded-lg   relative">
                  <div className=" py-7 ">
                    <p className="mt-4 py-5 mx-auto text-center lg:text-[16px]  text-xs">
                      {service.title}{" "}
                    </p>
                  </div>
                  <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img
                      src={service.img}
                      alt="Profile"
                      height={90}
                      width={90}
                      className="w-14 h-14 lg:w-[90px] lg:h-[90px]  bg-white rounded-full  border-black"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DosDont;
