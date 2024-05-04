"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/virtual";

import { smallHeadingText } from "../../../constants/small-heading-text";
import SectionSmallHeading from "../../ui/SectionSmallHeading";
import { SwiperButton } from "./SwiperButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1280: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
};

const maps = [
  {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369104.4793833133!2d-79.70773178910238!3d43.71826384376133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1711192683290!5m2!1sen!2sbd",
    location: "Toronto",
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182566.4045222721!2d-79.8305378187556!3d44.35926624980187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882aa3371ad7206d%3A0x1d2e0f00a84b535a!2sBarrie%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1711192803692!5m2!1sen!2sbd",
    location: "Barrie",
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92145.91175852313!2d-79.66673983224095!3d43.80274774858379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b257a9ad0b911%3A0xecea3dfb3abd0ac2!2sWoodbridge%2C%20Vaughan%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1711192847430!5m2!1sen!2sbd",
    location: "Woodbridge",
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183980.1257805948!2d-79.5931173754818!3d43.90369790797781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2a4936291733%3A0x5201760ad6b142ed!2sRichmond%20Hill%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1711192914194!5m2!1sen!2sbd",
    location: "Richmond Hill",
  },
];

const ServicesArea = () => {
  return (
    <div className="custom-container mt-10">
      <div className="mx-[30px] md:mx-0">
        <div className="mx-auto flex flex-col items-center justify-center">
          <SectionSmallHeading text={smallHeadingText.servicesArea__heading} />

          <h3 className="mb-[15px] md:mb-[25px] text-base md:text-xl lg:text-4xl text-center text-dark">
            Services Area in Barrie concrete Ready Mix
          </h3>
        </div>

        <>
          <div className="">
            <Swiper
              modules={[Navigation, Autoplay]}
              loop={true}
              autoplay={{
                delay: 2000,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
                stopOnLastSlide: false,
              }}
              speed={4000}
              allowTouchMove={false}
              breakpoints={breakpoints}
            >
              {maps.map((loc, i) => (
                <SwiperSlide key={i} className={`px-0 mx-6`}>
                  <div
                    className={`${
                      (i + 2) % 2 === 0 ? "lg:-mt-10 md:-mt-5" : ""
                    }`}
                  >
                    <div className="w-full shadow-md p-0 mt-[45px] lg:mt-[65px] ">
                      <iframe
                        src={loc?.src}
                        height="325"
                        style={{ border: 0, width: "100%" }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-xl"
                      />
                      <div className="absolute rounded-xl inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <button className="bg-white py-2 px-4 rounded-lg shadow-md text-gray-800 hover:bg-gray-200 transition duration-300">
                          Visit Map
                        </button>
                      </div>
                      <p className="text-base py-4 bg-primary text-center lg:text-[18px] absolute bottom-0 left-0 right-0 text-white rounded-b-2xl ">
                        {loc?.location}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="block lg:hidden">
                <SwiperButton />
              </div>
            </Swiper>
          </div>
        </>
      </div>
    </div>
  );
};

export default ServicesArea;
