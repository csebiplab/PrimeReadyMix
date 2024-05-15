"use client";

import { FaStar, FaUserAlt } from "react-icons/fa";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiperjs responsive breakpoints for small devices
const breakpoints = {
  640: {
    width: 640,
    slidesPerView: 1,
  },
  768: {
    width: 768,
    slidesPerView: 2,
  },
};

const ReviewSlider = ({ reviews = [] }) => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={"auto"}
      autoplay={{
        disableOnInteraction: true,
        pauseOnMouseEnter: false,
      }}
      breakpoints={breakpoints}
      className="py-6"
    >
      {reviews?.map((review, idx) => (
        <SwiperSlide key={idx} style={{ maxWidth: 360 }} className="p-3">
          <div className="p-6 border-2 border-primary bg-primary-50 rounded-md">
            {Array.from({ length: review.rating })?.map((__, i) => (
              <FaStar className="w-4 h-4 fill-secondary-600 inline-block mr-1" />
            ))}
            <p className="text-lg text-dark-500 mb-3">{review.description}</p>
            <p className="text-small flex gap-2 items-center">
              {" "}
              <FaUserAlt className="inline-block" /> {review.name}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSlider;
