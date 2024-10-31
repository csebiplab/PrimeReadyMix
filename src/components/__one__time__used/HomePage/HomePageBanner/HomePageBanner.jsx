"use client";
import Image from "next/image";
import "./HomePageBanner.css";

const HomePageBanner = () => {
  return (
    <>
      <div className="custom-container">
        <div className="md:flex items-center relative">
          <div className="w-full md:w-[50%] pl-3 md:pl-5 lg:pl-10 xl:pl-20 2xl:pl-28 3xl:pl-40 4xl:pl-52 5xl:pl-[285px]">
            <div className="py-14 md:py-0 px-4 md:pl-0">
              <h1 className="text-[34px] md:text-[37px] lg:text-[40px] xl:text-[43px] 2xl:text-[46px] 3xl:text-[49px] 4xl:text-[52px] 5xl:text-[55px] leading-[48px] 5xl:leading-[60px] font-bold text-left text-dark">
              Ready Mix Concrete & Concrete Delivery, Toronto Ready Mix
              </h1>
              <p className="text-[20px] font-semibold leading-6 mt-[5px] text-dark">
              When you need reliable and trusted ready mix concrete services in Toronto, there is no better choice than Prime Ready Mix.
              </p>
              <div className="mt-[35px] md:mt-[40px] xl:mt-[45px] 3xl:mt-[50px] 5xl:mt-[55px]">
                <a
                  href={`tel:+1(647) 449 9512`}
                >
                  <button
                    aria-label="Get an estimate"
                    className="px-[17px] py-[12px] hero_btn text-white text-sm font-medium leading-[20px] capitalize"
                  >
                    <span className="text-white">Get Your Estimate</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="hero__right__markham relative hidden md:block">
            <Image
              width={858}
              height={832}
              src="/homePage/hero_bg.png"
              alt="hero small image"
              className="hero-main-image mb-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageBanner;
