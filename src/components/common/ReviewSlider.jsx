"use client";

import { Rating } from "@material-tailwind/react";
import { FaUserAlt } from "react-icons/fa";
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
      {reviews?.map((review) => (
        <SwiperSlide style={{ maxWidth: 360 }} className="p-3" key={review.id}>
          <figure className="p-6 border-2 border-primary bg-primary-50 rounded-md">
            <Rating
              value={review.rating}
              readonly
              className="mb-3"
              ratedColor="yellow"
              color="yellow"
              unratedColor="gray"
            />
            <p className="text-lg text-dark-500 mb-3">{review.description}</p>
            <p className="text-small flex gap-2 items-center">
              {" "}
              <FaUserAlt className="inline-block" /> {review.name}
            </p>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSlider;
