import React from "react";

import "./ConcreteCost.css";
import HeadingIcon from "@/utils/HeadingIcon";
import { headingTexts } from "@/utils/heading-text";

const howWeDesginData = [
    {
        id : 1, 
        title : "Increased Home Value",
        desc : "A modern, updated bathroom can significantly boost your home's resale value, making it a smart investment."
    },
    {
        id : 2, 
        title : "Enhanced Functionality",
        desc : "Remodeling allows you to optimize space and improve layout, making the bathroom more functional for daily use."
    },
    {
        id : 3, 
        title : "Personalized Style",
        desc : "You can customize the design, materials, and fixtures to reflect your taste and lifestyle."
    },
    {
        id : 4, 
        title : "Improved Energy Efficiency",
        desc : "Upgrading to modern fixtures and appliances can reduce water and energy consumption, leading to lower utility bills."
    },
    {
        id : 5, 
        title : "Better Storage Solutions",
        desc : "A remodel can incorporate efficient storage options, helping to keep your bathroom organized and clutter-free."
    },
    {
        id : 6, 
        title : "Increased Comfort",
        desc : "Creating a spa-like environment with upgraded features such as heated floors or a soaking tub can enhance your overall comfort.",
    },
    {
        id : 7, 
        title : "Updated Safety Features",
        desc : "Remodeling allows for the inclusion of modern safety features, such as slip-resistant flooring and grab bars, making the space safer."
    },
    {
        id : 8, 
        title : "Enhanced Aesthetics",
        desc : "A fresh design can completely transform the look of your bathroom, making it more inviting and visually appealing.",
    },
    {
        id : 9, 
        title : "Modern Technology Integration",
        desc : "Incorporate smart home features, such as automated lighting and digital faucets, for added convenience and luxury."
    },
    {
        id : 10, 
        title : "Personal Enjoyment",
        desc : "Ultimately, a remodeled bathroom provides a more enjoyable and relaxing space for your daily routine, enhancing your overall quality."
    },
]

const ConcreteCost = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
        <HeadingIcon text={headingTexts.benefits__headingIconText}/>
          <h2 className="font-family-secondary text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px] 5xl:text-[44px] font-bold text-secondary leading-normal text-center pb-[5px]">
          Benefits of Bathroom Remodeling With Our Company
          </h2>
          <p className="font-family-secondary text-lg font-normal text-center text-secondary">
          Choosing Glitz Floors & More for your bathroom remodel comes with numerous benefits that ensure a smooth and satisfying experience:Experience the benefits of a bathroom remodel with Glitz Floors & More. Contact us today to schedule your free consultation and start your transformation journey!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px] mt-[15px]">
            {
                howWeDesginData?.map((data)=>{
                    return <div key={data.id} className="how_we_cart___bg pt-[14px] pb-[21px] px-2">
                        <p className="text-[22px] 5xl:text-[25px] text-center font-bold text-black leading-normal">{data.title}</p>
                        <p className="text-lg font-normal text-black leading-[35px] text-center">{data.desc}</p>
                    </div>
                })
            }
        </div>
      </div>
    </div>
  );
};

export default ConcreteCost;
