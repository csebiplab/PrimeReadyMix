"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { smallHeadingText } from "../../constants/small-heading-text";
import SectionSmallHeading from "../ui/SectionSmallHeading";
const Workflow = () => {
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 55,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  };

  const works = [
    {
      src: "/barrie/icons/customer.png",
      title: "Customer Consultation",
      text: "We begin by understanding the unique requirements and specifications of our clients' projects. This involves discussing project timelines, quantities needed, and any special mix requirements.",
    },
    {
      src: "/barrie/icons/material.png",
      title: "Material Procurement",
      text: "We source high-quality raw materials from trusted suppliers to ensure the reliability and consistency of our concrete mixes. This includes aggregates, cement, admixtures, and water.",
    },
    {
      src: "/barrie/icons/mixing.png",
      title: "Mixing",
      text: "The materials are thoroughly mixed to achieve a homogenous blend, ensuring that each batch meets the desired quality standards. Our modern mixing equipment ensures efficient and uniform mixing.",
    },
    {
      src: "/barrie/icons/transport.png",
      title: "Transportation",
      text: "Once mixed, the concrete is promptly loaded onto our fleet of specialized vehicles equipped with rotating drums to prevent segregation and maintain the workability of the mix during transit.",
    },
    {
      src: "/barrie/icons/customer.png",
      title: "Customer Consultation",
      text: "We begin by understanding the unique requirements and specifications of our clients' projects. This involves discussing project timelines, quantities needed, and any special mix requirements.",
    },
    {
      src: "/barrie/icons/material.png",
      title: "Material Procurement",
      text: "We source high-quality raw materials from trusted suppliers to ensure the reliability and consistency of our concrete mixes. This includes aggregates, cement, admixtures, and water.",
    },
    {
      src: "/barrie/icons/mixing.png",
      title: "Mixing",
      text: "The materials are thoroughly mixed to achieve a homogenous blend, ensuring that each batch meets the desired quality standards. Our modern mixing equipment ensures efficient and uniform mixing.",
    },
    {
      src: "/barrie/icons/transport.png",
      title: "Transportation",
      text: "Once mixed, the concrete is promptly loaded onto our fleet of specialized vehicles equipped with rotating drums to prevent segregation and maintain the workability of the mix during transit.",
    },
  ];

  return (
    <div>
      <div className="flex flex-col">
        <div className="text-center mx-auto">
          <SectionSmallHeading text={smallHeadingText.working__heading} />
        </div>

        <h3 className="mb-[15px] md:mb-[25px] text-base md:text-xl lg:text-4xl text-center text-dark">
          Working Process of Our Concrete Ready Mix Services
        </h3>
      </div>

      {/* =============== Swiper slider =================== */}
      <div>
        <Swiper
          modules={[Autoplay]}
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
          {works.map((work, i) => (
            <SwiperSlide key={i}>
              <div className="py-4">
                <div className="relative">
                  <Image
                    src={work.src}
                    width={126}
                    height={129}
                    alt="star"
                    className="w-[126px] h-[129px] mx-auto"
                  />
                <div className="absolute right-0 top-[55%]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="113"
                    height="116"
                    viewBox="0 0 113 116"
                    fill="none"
                  >
                    <path
                      d="M86.9599 43.1928L91.511 43.1472C94.3009 43.0507 96.6597 43.2109 98.6276 43.2166L101.319 43.2469L103.484 43.3472C104.757 43.3878 105.732 43.3911 106.471 43.3627C109.426 43.2666 108.585 42.6385 108.64 42.0088C108.696 41.3792 109.589 40.96 106.585 40.2662C105.837 40.1035 104.844 39.9183 103.536 39.7141L101.325 39.3723L98.5717 39.1536C96.5703 39.0015 94.1129 38.7853 91.2327 38.8167L86.5482 38.8081C84.8526 38.8497 83.0745 38.9824 81.1374 39.071C72.0845 39.6488 63.1075 41.0906 54.329 43.3768C44.822 45.8694 35.6084 49.3702 26.8449 53.8197C19.8624 57.3172 13.2476 61.5051 7.09951 66.3206C5.24898 67.7396 3.47961 69.2614 1.79977 70.8789C0.594138 72.0103 -0.0162491 72.6852 0.0758257 72.785C0.568796 73.4133 11.711 64.0083 28.36 56.5993C37.1011 52.6344 46.2052 49.5241 55.5452 47.312C64.1412 45.2914 72.8922 43.9988 81.7053 43.4479L86.916 43.1863"
                      fill="#9C7066"
                    />
                    <path
                      d="M103.371 46.8632C101.252 48.7108 99.3963 50.4147 97.8928 51.857C94.8191 54.7974 93.0921 56.8169 93.4248 57.2007C93.7575 57.5844 96.0778 56.2839 99.5854 53.8355C101.335 52.6158 103.367 51.1208 105.606 49.4152C106.729 48.5404 107.836 47.7013 109.115 46.6532C109.949 46.003 110.589 45.1368 110.966 44.1487C111.202 43.4351 111.221 42.6676 111.021 41.9432C110.82 41.2514 110.47 40.6122 109.995 40.0706C109.319 39.3657 108.593 38.7097 107.824 38.1074C107.186 37.53 106.49 37.0165 105.828 36.5012C104.497 35.4797 103.204 34.5086 101.941 33.6317C99.414 31.8605 97.0602 30.4116 95.0356 29.2769C90.9781 27.0166 88.2823 26.0375 88.0674 26.4401C87.8525 26.8427 90.1261 28.6004 93.7719 31.3341C95.5994 32.705 97.7253 34.296 100.11 36.1875C101.288 37.1035 102.513 38.0954 103.766 39.1295L105.656 40.7063C106.248 41.1754 106.809 41.6824 107.335 42.224C107.661 42.6517 107.595 42.5592 107.555 42.805C107.355 43.2641 107.047 43.668 106.657 43.9819C105.522 44.9617 104.412 45.9142 103.377 46.8194"
                      fill="#9C7066"
                    />
                  </svg>
                </div>
                </div>
                <h6 className="font-semibold text-black text-[15px] mt-4 mb-1 text-center">
                  {work?.title}
                </h6>

                <p className="text-sm !text-black py-1 3xl:text-[16px] ">
                  {work?.text}
                </p>
              </div>
            </SwiperSlide>
          ))}

          <div></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Workflow;
