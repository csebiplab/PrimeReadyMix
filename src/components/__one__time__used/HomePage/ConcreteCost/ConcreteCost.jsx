import React from "react";

import "./ConcreteCost.css";
import HeadingIcon from "@/utils/HeadingIcon";
import { headingTexts } from "@/utils/heading-text";

const howWeDesginData = [
    {
        id : 1, 
        title : "Project Size",
        desc : "Larger projects may qualify for volume discounts, while smaller projects might incur higher per-unit costs."
    },
    {
        id : 2, 
        title : "Concrete Strength & Mix Type",
        desc : "Specialty concrete mixes, such as high-strength or waterproof concrete, tend to be more expensive."
    },
    {
        id : 3, 
        title : "Delivery and Accessibility",
        desc : "Delivery fees may vary based on the distance from the batching plant to the construction site. Hard-to-reach locations or projects requiring extra handling, such as pumping services, may add to the overall cost."
    },
    {
        id : 4, 
        title : "Seasonal factors",
        desc : "Prices can also fluctuate with seasonal demand, with higher rates often seen during peak construction months."
    }
]

const ConcreteCost = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
        <HeadingIcon text={headingTexts.concreteCost__headingIconText}/>
          <h2 className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[30px] 2xl:text-[32px] 3xl:text-[33px] 4xl:text-[34px] 5xl:text-[36px] font-bold leading-[30px] md:leading-[40px] text-dark text-center md:text-left mt-[5px]">
          Ready Mix Concrete Cost in Toronto
          </h2>
          <p className="text-lg text-dark-300 font-normal leading-[35px] text-center md:text-left mt-[10px]">
          The cost of ready-mix concrete in Toronto can vary depending on several factors, such as the type of concrete, the amount required, delivery distance, and additional services like pumping. On average, the price for ready-mix concrete typically ranges between <strong>$150</strong> and <strong>$200</strong> per cubic meter. It's always a beneficial idea to request a detailed quote from a trusted supplier, such as Prime Ready Mix, to get an accurate estimate tailored to your specific project.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[15px] mt-[15px]">
            {
                howWeDesginData?.map((data)=>{
                    return <div key={data.id} className="how_we_cart___bg pt-[14px] pb-[21px] px-2">
                        <p className="text-[22px] 5xl:text-[25px] text-center font-bold text-dark-300 leading-normal">{data.title}</p>
                        <p className="text-lg font-normal text-dark-300 leading-[35px] text-center">{data.desc}</p>
                    </div>
                })
            }
        </div>
      </div>
    </div>
  );
};

export default ConcreteCost;
