import React from "react";

import Image from "next/image";
import HeadingIcon from "@/utils/HeadingIcon";
import { headingTexts } from "@/utils/heading-text";

const servicesData = [
  {
    id: 1,
    img: "/homePage/process/process1.png",
    title: "Initial consultation",
    desc: "Our process begins with an initial consultation, during which we discuss your specific concrete needs. It includes the type of project, required strength, volume of concrete, and any special requirements."
  },
  {
    id: 2,
    img: "/homePage/process/process2.png",
    title: "Site visit & assessment",
    desc: "After the consultation, our team conducts a thorough site visit to assess the project location. This step helps us understand any logistical challenges, access points, and environmental considerations."
  },
  {
    id: 3,
    img: "/homePage/process/process3.png",
    title: "Custom mix design",
    desc: "Based on the project requirements and site assessment, our experts create a custom mix design. That ensures that the concrete meets the specific needs of your project, including factors like durability, strength, and workability."
  },
  {
    id: 4,
    img: "/homePage/process/process4.png",
    title: "Order placement",
    desc: "Once we finally select the mix design, you can place an order for the ready-mix concrete. Our customer service team will assist you in determining the correct quantity for your project."
  },
  {
    id: 5,
    img: "/homePage/process/process5.png",
    title: "Batching and mixing",
    desc: "On the scheduled delivery date, our state-of-the-art batching plant precisely combines the raw materials according to the custom mix design. This process ensures the consistent quality and strength of the concrete."
  },
  {
    id: 6,
    img: "/homePage/process/process6.png",
    title: "Transportation",
    desc: "To prevent segregation during transport, our specialized transit mixers, equipped with rotating drums, load the freshly mixed concrete."
  },
  {
    id: 7,
    img: "/homePage/process/process7.png",
    title: "Prompt delivery",
    desc: "We prioritize punctuality and ensure that the ready-mix concrete is delivered on time to your project site. We train our drivers to safely handle various site conditions."
  },
  {
    id: 8,
    img: "/homePage/process/process8.png",
    title: "Pouring and Placement",
    desc: "Upon arrival, our experienced team coordinates with your construction crew to efficiently pour and place the concrete. We pay close attention to proper levelling and finishing."
  },
];

const Process = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
        <HeadingIcon text={headingTexts.benefits__headingIconText}/>
          <h2 className="font-family-secondary text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px] 5xl:text-[44px] font-bold text-secondary leading-normal text-center pt-[10px]">
          Process of Our Ready Mix Concrete Services
          </h2>
          <p className="font-family-secondary text-lg font-normal text-center text-secondary">
          We design our Toronto ready mix concrete services process to ensure a seamless and reliable experience for our customers, from initial consultation to project completion. We take pride in delivering high-quality concrete that meets the unique demands of your construction project.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[60px] 5xl:gap-[75px] mt-[25px]">
          {servicesData?.map((data) => {
            return (
              <div key={data.id} className="relative">
                <Image
                  src={data.img}
                  alt="working image"
                  width={129}
                  height={129}
                  className="w-[129px] h-[129px] mx-auto"
                />
                <p className="font-family-secondary text-[22px] 5xl:text-[25px] font-bold text-secondary text-center leading-9 pt-[12px] pb-[5px]">
                  {data.title}
                </p>
                <p className="font-family-secondary text-lg font-light text-black text-center pb-[25px]">
                  {data.desc}
                </p>
                <div className="absolute bottom-0 w-full h-[2px] bg-secondary-300" />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Process;
