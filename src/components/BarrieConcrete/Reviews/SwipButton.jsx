"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

export const SwipButton = () => {
  const swiper = useSwiper();

  return (
    <div className="">
      <div className="flex gap-5 mt-5 items-center justify-center py-5">
        {/* ========= first line ======== */}
        <div className="w-[330px] h-0.5  bg-primary"></div>

        <div className="flex gap-5">
          <button
            onClick={() => swiper.slidePrev()}
            className="p-1 rounded-full border-2 border-primary hover:text-white hover:bg-primary  "
          >
            <FaChevronLeft className="fill-primary hover:fill-white" />
          </button>

          <button
            onClick={() => swiper.slideNext()}
            className=" hover:text-white bg-active hover:bg-primary border-2 p-1  rounded-full  border-primary  "
          >
            <FaChevronRight className="fill-primary hover:fill-white" />
          </button>
        </div>
        {/* =============== second line ============= */}
        <div className="w-[330px] h-0.5 bg-primary "></div>
      </div>
    </div>
  );
};
