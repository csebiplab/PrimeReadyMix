import { headingTexts } from "@/utils/heading-text";
import HeadingIcon from "@/utils/HeadingIcon";
import React from "react";
import "./ConsiderationsAndLimitations.css";

const considerationsData = [
    {
        id : 1, 
        title : "Concrete Mix Design:",
        desc : "The composition of the concrete mix must match the project's requirements. We design different mixes for strength, durability, and specific environmental conditions. It's crucial to choose the right mix for the job."
    },
    {
        id : 2, 
        title : "Delivery Timing:",
        desc : "Ready-mix concrete must be delivered and poured within a specific timeframe (usually 90 minutes) to maintain its quality. Proper scheduling and coordination are essential to avoid delays or spoilage."
    },
    {
        id : 3, 
        title : "Jobsite preparation:",
        desc : "Before delivery, ensure that the site is fully prepared. This includes formwork, access for trucks, and any required reinforcements. A well-prepared site ensures a smooth pour and prevents wastage."
    },
    {
        id : 4, 
        title : "Weather Conditions:",
        desc : "Weather plays a significant role in the success of a concrete project. Extreme heat, cold, or rain can affect concrete curing, leading to potential cracks or a weakened structure."
    },
    {
        id : 5, 
        title : "Accessibility and Equipment Needs:",
        desc : "Depending on the project's location, additional equipment, such as concrete pumps, may be required for hard-to-reach areas. Organize the concrete's transportation from the truck to the pour site."
    },
]
const limitationsData = [
    {
        id : 1, 
        title : "Limited Work Time:",
        desc : "Concrete begins to harden after mixing, so there is a limited window for placing and finishing it. Delays in pouring can result in reduced workability and quality."
    },
    {
        id : 2, 
        title : "Distance from the Plant:",
        desc : "The farther the jobsite is from the batching plant, the greater the risk of concrete losing its properties during transport. In some cases, additional admixtures may be required to increase workability."
    },
    {
        id : 3, 
        title : "Order accuracy:",
        desc : "Ordering the exact amount of concrete is important. Overestimating leads to waste, while underestimating can cause project delays and additional costs."
    },
    {
        id : 4, 
        title : "Site Conditions:",
        desc : "Poor site conditions, such as soft ground or steep slopes, can complicate the pouring process and may require additional measures like grading or reinforcement."
    },
    {
        id : 5, 
        title : "Environmental Impact:",
        desc : "Ready-mix concrete production and transportation contribute to carbon emissions. While the industry is becoming more sustainable, it's important to consider environmental factors when planning large-scale projects."
    },
]

const ConsiderationsAndLimitations = () => {
  return (
    <div className="container padding__top">
      <div className="flex flex-col items-center justify-center">
        <HeadingIcon
          text={headingTexts.considerationsAndLimitations__headingIconText}
        />
        <h2 className="font-family-secondary text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px] 5xl:text-[44px] font-bold text-secondary leading-normal text-center pt-[10px] pb-[5px]">
        Considerations and Limitations Factors for Ready Mix Concrete Service
        </h2>
        <p className="font-family-secondary text-lg font-normal text-center text-secondary">
        When using ready-mix concrete services, it's important to be aware of several considerations and limitations that can impact your project's success. By carefully managing these considerations and understanding the limitations, you can ensure a smoother and more successful ready-mix concrete project.
        </p>
      </div>
      {/* second part  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[26px]">
        <div className="md:col-span-1">
            <p className="title__bg1">Considerations</p>
            <div className="cart__bg1">
            {
                considerationsData.map((data)=>{
                    return <div key={data.id} className={` ${data.id === 5 ? "border-0" : "border-b-[1px] border-dark-300"}`}>
                        <p>{data.title}</p>
                        <p>{data.desc}</p>
                    </div>
                })
            }
            </div>
        </div>
        <div className="md:col-span-1">

        </div>
      </div>
    </div>
  );
};

export default ConsiderationsAndLimitations;