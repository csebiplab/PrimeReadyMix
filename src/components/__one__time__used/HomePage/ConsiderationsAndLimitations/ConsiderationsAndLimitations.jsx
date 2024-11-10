import { headingTexts } from "@/utils/heading-text";
import HeadingIcon from "@/utils/HeadingIcon";
import React from "react";
import "./ConsiderationsAndLimitations.css";

const considerationsData = [
  {
    id: 1,
    title: "Concrete Mix Design:",
    desc: "The composition of the concrete mix must match the project's requirements. We design different mixes for strength, durability, and specific environmental conditions. It's crucial to choose the right mix for the job.",
  },
  {
    id: 2,
    title: "Delivery Timing:",
    desc: "Ready-mix concrete must be delivered and poured within a specific timeframe (usually 90 minutes) to maintain its quality. Proper scheduling and coordination are essential to avoid delays or spoilage.",
  },
  {
    id: 3,
    title: "Jobsite preparation:",
    desc: "Before delivery, ensure that the site is fully prepared. This includes formwork, access for trucks, and any required reinforcements. A well-prepared site ensures a smooth pour and prevents wastage.",
  },
  {
    id: 4,
    title: "Weather Conditions:",
    desc: "Weather plays a significant role in the success of a concrete project. Extreme heat, cold, or rain can affect concrete curing, leading to potential cracks or a weakened structure.",
  },
  {
    id: 5,
    title: "Accessibility and Equipment Needs:",
    desc: "Depending on the project's location, additional equipment, such as concrete pumps, may be required for hard-to-reach areas. Organize the concrete's transportation from the truck to the pour site.",
  },
];
const limitationsData = [
  {
    id: 1,
    title: "Limited Work Time:",
    desc: "Concrete begins to harden after mixing, so there is a limited window for placing and finishing it. Delays in pouring can result in reduced workability and quality.",
  },
  {
    id: 2,
    title: "Distance from the Plant:",
    desc: "The farther the jobsite is from the batching plant, the greater the risk of concrete losing its properties during transport. In some cases, additional admixtures may be required to increase workability.",
  },
  {
    id: 3,
    title: "Order accuracy:",
    desc: "Ordering the exact amount of concrete is important. Overestimating leads to waste, while underestimating can cause project delays and additional costs.",
  },
  {
    id: 4,
    title: "Site Conditions:",
    desc: "Poor site conditions, such as soft ground or steep slopes, can complicate the pouring process and may require additional measures like grading or reinforcement.",
  },
  {
    id: 5,
    title: "Environmental Impact:",
    desc: "Ready-mix concrete production and transportation contribute to carbon emissions. While the industry is becoming more sustainable, it's important to consider environmental factors when planning large-scale projects.",
  },
];

const ConsiderationsAndLimitations = () => {
  return (
    <div className="container padding__top">
      <div className="flex flex-col items-center justify-center">
        <HeadingIcon
          text={headingTexts.considerationsAndLimitations__headingIconText}
        />
        <h2 className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[30px] 2xl:text-[32px] 3xl:text-[33px] 4xl:text-[34px] 5xl:text-[36px] font-bold leading-[30px] md:leading-[40px] text-dark text-center md:text-left mt-[5px]">
          Considerations and Limitations Factors for Ready Mix Concrete Service
        </h2>
        <p className="text-lg text-dark-300 font-normal leading-[35px] text-center mt-[10px] mb-[25px]">
          When using ready-mix concrete services, it's important to be aware of
          several considerations and limitations that can impact your project's
          success. By carefully managing these considerations and understanding
          the limitations, you can ensure a smoother and more successful
          ready-mix concrete project.
        </p>
      </div>
      {/* second part  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[26px]">
        <div className="md:col-span-1">
          <h4 className="title__bg1 py-[14px] 5xl:py-[17px] text-center text-dark text-[22px] 5xl:text-[25px] font-bold leading-[35px] ">
            Considerations
          </h4>
          <div className="cart__bg1">
            {considerationsData.map((data) => {
              return (
                <div
                  key={data.id}
                  className={` ${
                    data.id === 5
                      ? "border-0"
                      : "border-b-[1px] border-dark-300"
                  } p-[8px]`}
                >
                  <p className="text-lg font-bold text-dark-300 leading-[35px]">
                    {data.title}
                  </p>
                  <p className="text-lg font-normal text-dark-300 leading-[35px]">
                    {data.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:col-span-1">
          <h4 className="title__bg1 py-[14px] 5xl:py-[17px] text-center text-dark text-[22px] 5xl:text-[25px] font-bold leading-[35px] ">
          Limitations
          </h4>
          <div className="cart__bg1">
            {limitationsData.map((data) => {
              return (
                <div
                  key={data.id}
                  className={` ${
                    data.id === 5
                      ? "border-0"
                      : "border-b-[1px] border-dark-300"
                  } p-[8px]`}
                >
                  <p className="text-lg font-bold text-dark-300 leading-[35px]">
                    {data.title}
                  </p>
                  <p className="text-lg font-normal text-dark-300 leading-[35px]">
                    {data.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsiderationsAndLimitations;
