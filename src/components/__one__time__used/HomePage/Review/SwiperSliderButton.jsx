"use client";

import { useSwiper } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div>
      <>
        <div className="flex lg:gap-8 gap-3 items-center justify-center lg:py-6 py-5">
          {/* ========= first line ======== */}
          <div className="lg:w-[330px] w-[154px] h-0.5 bg-primary"></div>

          <div className="flex lg:gap-5 gap-3">
            <button
              onClick={() => swiper.slidePrev()}
              className="p-3 rounded-full border-2 hover:text-white hover:bg-primary border-primary"
              aria-label="Previous slide"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => swiper.slideNext()}
              className="hover:bg-white border-2 p-3 bg-primary rounded-full border-primary"
              aria-label="Next slide"
            >
              <FaChevronRight className="text-white hover:text-primary"/>
            </button>
          </div>

          {/* =============== second line ============= */}
          <div className="lg:w-[330px] w-[154px] h-0.5 bg-primary"></div>
        </div>
      </>
    </div>
  );
};
