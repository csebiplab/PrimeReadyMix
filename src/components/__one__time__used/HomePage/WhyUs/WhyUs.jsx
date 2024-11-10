
import React from "react";
import Image from "next/image";
import "./WhyUs.css";
import HeadingIcon from "@/utils/HeadingIcon";
import { headingTexts } from "@/utils/heading-text";

const considerationAndLimitingData = [
  {
    id: 1,
    img: "/homePage/whyUs/whyUs1.png",
    title: "Quality Assurance",
    desc: "Our ready mix company prioritizes quality in every batch of concrete we produce. The state-of-the-art facilities and stringent quality control measures of our company ensure that you receive a consistent and reliable product every time.",
  },
  {
    id: 2,
    img: "/homePage/whyUs/whyUs2.png",
    title: "Expertise and Experience",
    desc: "With years of experience in the industry, we boast a team of experts with years of industry experience. We understand the nuances of concrete production. Our expertise in ready-mix concrete allows us to tailor mixes to specific project requirements, ensuring",
  },
  {
    id: 3,
    img: "/homePage/whyUs/whyUs3.png",
    title: "Wide Range of Products",
    desc: "We offer a diverse range of concrete mixes designed for various applications. Whether it's for a residential, commercial, or industrial project, we have a suitable solution to meet your specific needs.",
  },
  {
    id: 4,
    img: "/homePage/whyUs/whyUs4.png",
    title: "Efficient Delivery Service",
    desc: "In construction projects, time is crucial. Everyone knows our company for its punctual and efficient delivery service. Our well-maintained fleet of vehicles at Prime Ready Mix ensures that your concrete arrives on-site promptly.",
  },
  {
    id: 5,
    img: "/homePage/whyUs/whyUs5.png",
    title: "Environmentally conscious",
    desc: "We are committed to sustainability. Our Toronto Ready Mix Concrete team employs eco-friendly technologies and methods in our production process, minimizing our environmental footprint.",
  },
  {
    id: 6,
    img: "/homePage/whyUs/whyUs6.png",
    title: "Cost-effective Solutions",
    desc: "We recognize the importance of staying within budget for every ready-mix concrete project. We offer competitive pricing without compromising on quality, resulting in cost-effective solutions for your projects."
  },
  {
    id: 7,
    img: "/homePage/whyUs/whyUs7.png",
    title: "Customizable Mix Designs",
    desc: "We are committed to sustainability. Our Toronto Ready Mix Concrete team employs eco-friendly technologies and methods in our production process, minimizing our environmental footprint."
  },
];


const WhyUs = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
        <HeadingIcon text={headingTexts.whyUs__headingIconText}/>
          <h2 className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[30px] 2xl:text-[32px] 3xl:text-[33px] 4xl:text-[34px] 5xl:text-[36px] font-bold leading-[30px] md:leading-[40px] text-dark text-center md:text-left mt-[5px]">
          Why is Prime Ready Mix Your Best Choice?
          </h2>
          <p className="text-lg text-dark-300 font-normal leading-[35px] text-center mt-[10px]">
          Prime Ready Mix stands out as the best choice for your concrete needs due to its unwavering commitment to quality, expertise, a wide range of products, efficient delivery, environmentally conscious practices, cost-effectiveness, customization options, customer-centric approach, safety, and a proven track record. Choosing our company means choosing excellence in concrete solutions.
          </p>
        </div>
        {/* cart part  */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-[16px] pt-[80px]">
          {considerationAndLimitingData?.map((data) => {
            return (
              <div
                key={data.id}
                className="cart_bg relative px-[10px] 5xl:px-[15px] pb-[15px] mb-[55px]"
              >
                <Image
                  src={data.img}
                  alt="flooring image"
                  width={104}
                  height={104}
                  className="absolute left-0 right-0 -top-14 w-[104px] h-[104px] mx-auto border-[2px] border-primary p-[5px] rounded-full bg-white"
                />
                <p className="font-family-secondary text-[25px] font-bold text-center text-dark-300 pt-[65px]">
                  {data.title}
                </p>
                <p className="font-family-secondary text-lg text-dark-300 font-normal text-center pt-[5px]">
                  {data.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyUs ;
