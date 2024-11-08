
import React from "react";
import Image from "next/image";
import "./Benefits.css";
import HeadingIcon from "@/utils/HeadingIcon";
import { headingTexts } from "@/utils/heading-text";

const considerationAndLimitingData = [
  {
    id: 1,
    img: "/homePage/benefit/benefit1.png",
    title: "Premium Quality Concrete",
    desc: "We use advanced mixing techniques and top-grade materials to ensure our concrete meets the highest industry standards.",
  },
  {
    id: 2,
    img: "/homePage/benefit/benefit2.png",
    title: "Customized Solutions",
    desc: "Whether it's a small residential project or a large-scale commercial development, we offer customized concrete mixes tailored to your specific needs.",
  },
  {
    id: 3,
    img: "/homePage/benefit/benefit3.png",
    title: "On-Time Delivery",
    desc: "Equipped with the latest technology, our fleet ensures the timely and efficient delivery of ready-mix concrete to your site. It will minimize delays and maximize productivity.",
  },
  {
    id: 4,
    img: "/homePage/benefit/benefit4.png",
    title: "Expert Support",
    desc: "Our experienced team provides expert advice and support, ensuring you get the right mix and volume for your project.",
  },
  {
    id: 5,
    img: "/homePage/benefit/benefit5.png",
    title: "Eco-Friendly Practices",
    desc: "We implement sustainable practices in our production and delivery processes. It reduces our environmental impact without compromising on quality.",
  },
  {
    id: 6,
    img: "/homePage/benefit/benefit6.png",
    title: "Cost-Effective Solutions",
    desc: "With competitive pricing and efficient service, we help you stay within budget without sacrificing quality or performance."
  },
];


const Benefits = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
        <HeadingIcon text={headingTexts.benefits__headingIconText}/>
          <h2 className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[30px] 2xl:text-[32px] 3xl:text-[33px] 4xl:text-[34px] 5xl:text-[36px] font-bold leading-[30px] md:leading-[40px] text-dark text-center md:text-left mt-[5px]">
          Benefits of Working With US
          </h2>
          <p className="text-lg text-dark-300 font-normal leading-[35px] text-center md:text-left mt-[10px]">
          When it comes to Toronto ready mix concrete services, choosing Prime Ready Mix is an assurance of unmatched quality and reliability. With years of experience in the industry, we have honed our expertise to deliver concrete solutions. With our advanced mixing technology, we precisely formulate every batch of ready mix to meet your project's unique demands. Our unwavering commitment to timeliness sets us apart, ensuring that your concrete arrives exactly when you need it. When you choose us for Toronto ready mix services, you're not just getting concrete; you're getting a partner in your project's success. Trust Prime Ready Mix for all your concrete needs, and experience the difference that expert service and quality make.
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

export default Benefits ;
