"use client"
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { smallHeadingText } from "../../../constants/small-heading-text";
import SectionSmallHeading from "../../ui/SectionSmallHeading";
import { SwipButton } from "./SwipButton";


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

const reviews = [
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door.",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door.",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door.",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door.",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door.",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door.",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door.",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door.",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door.",
    author: "Lisa Silva",
    location: "North York",
  }
 
  
 
  
];

const Reviews = () => {
  return (
    <div className="container 3xl:py-[50px] py-[30px]">
      <div>
        <div className=" flex flex-col justify-center items-center ">
        <SectionSmallHeading text={smallHeadingText.review__heading} />

        <h3 className="mb-[15px] md:mb-[25px] text-base md:text-xl lg:text-4xl text-center text-dark">
        Reviews  Barrie Concrete Ready Mix
            </h3>
        </div>
      </div>

      <div className="!px-10 md:px-0">
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
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#D9D9D980] rounded-lg shadow-md p-[13px] ">
                <div>
                  <Image
                    src="/barrie/icons/google.png"
                    width={90}
                    height={52}
                    alt="star"
                    className="w-[90px] h-[52px]"
                  />
                </div>
                <div className="lg:pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="121"
                    height="18"
                    viewBox="0 0 121 18"
                    fill="none"
                  >
                    <path
                      d="M8.61587 2.14822L10.3643 5.47241L10.5934 5.90801L11.0783 5.99217L14.7764 6.63403L12.1587 9.33583L11.8174 9.68808L11.887 10.1736L12.4211 13.899L9.05823 12.2403L8.61587 12.0221L8.17351 12.2403L4.81066 13.899L5.34475 10.1736L5.41435 9.68808L5.07306 9.33583L2.45537 6.63403L6.15344 5.99217L6.63836 5.90801L6.86747 5.47241L8.61587 2.14822Z"
                      fill="#FFB703"
                      stroke="#FFB703"
                      strokeWidth="2"
                    />
                    <path
                      d="M34.0103 2.14822L35.7587 5.47241L35.9878 5.90801L36.4727 5.99217L40.1708 6.63403L37.5531 9.33583L37.2118 9.68808L37.2814 10.1736L37.8155 13.899L34.4526 12.2403L34.0103 12.0221L33.5679 12.2403L30.2051 13.899L30.7392 10.1736L30.8088 9.68808L30.4675 9.33583L27.8498 6.63403L31.5478 5.99217L32.0328 5.90801L32.2619 5.47241L34.0103 2.14822Z"
                      fill="#FFB703"
                      stroke="#FFB703"
                      strokeWidth="2"
                    />
                    <path
                      d="M60.3122 2.14822L62.0606 5.47241L62.2897 5.90801L62.7746 5.99217L66.4727 6.63403L63.855 9.33583L63.5137 9.68808L63.5833 10.1736L64.1174 13.899L60.7545 12.2403L60.3122 12.0221L59.8698 12.2403L56.507 13.899L57.041 10.1736L57.1106 9.68808L56.7694 9.33583L54.1517 6.63403L57.8497 5.99217L58.3347 5.90801L58.5638 5.47241L60.3122 2.14822Z"
                      fill="#FFB703"
                      stroke="#FFB703"
                      strokeWidth="2"
                    />
                    <path
                      d="M85.7057 2.14822L87.4541 5.47241L87.6832 5.90801L88.1682 5.99217L91.8662 6.63403L89.2485 9.33583L88.9072 9.68808L88.9768 10.1736L89.5109 13.899L86.1481 12.2403L85.7057 12.0221L85.2634 12.2403L81.9005 13.899L82.4346 10.1736L82.5042 9.68808L82.1629 9.33583L79.5452 6.63403L83.2433 5.99217L83.7282 5.90801L83.9573 5.47241L85.7057 2.14822Z"
                      fill="#FFB703"
                      stroke="#FFB703"
                      strokeWidth="2"
                    />
                    <path
                      d="M112.006 2.14822L113.755 5.47241L113.984 5.90801L114.469 5.99217L118.167 6.63403L115.549 9.33583L115.208 9.68808L115.278 10.1736L115.812 13.899L112.449 12.2403L112.006 12.0221L111.564 12.2403L108.201 13.899L108.735 10.1736L108.805 9.68808L108.464 9.33583L105.846 6.63403L109.544 5.99217L110.029 5.90801L110.258 5.47241L112.006 2.14822Z"
                      fill="#FFB703"
                      stroke="#FFB703"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <p className="text-sm !text-black py-3 3xl:text-[16px] ">
                  {review?.text}
                </p>
                <h6 className="font-semibold text-black text-[15px]">
                  {review?.author}
                </h6>
                <p className="text-gray-600 text-xs">{review?.location}</p>
              </div>
            </SwiperSlide>
          ))}

          <div>
            <SwipButton />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
