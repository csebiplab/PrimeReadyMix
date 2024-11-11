"use client";
import { headingTexts } from "@/utils/heading-text";
import HeadingIcon from "@/utils/HeadingIcon";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 5,
  },
};

const locations = [
  {
    title: "Toronto",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.67411467596!2d-79.54286835206918!3d43.71812279997104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1731333598576!5m2!1sen!2sbd",
  },
  {
    title: "Barrie",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91283.44626604003!2d-79.7481233253357!3d44.359109630568966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882aa3371ad7206d%3A0x1d2e0f00a84b535a!2sBarrie%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1731333675764!5m2!1sen!2sbd",
  },
  {
    title: "Woodbridge",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92146.1028615084!2d-79.6667384123388!3d43.802623849002906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b257a9ad0b911%3A0xecea3dfb3abd0ac2!2sWoodbridge%2C%20Vaughan%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1731335202289!5m2!1sen!2sbd",
  },
  {
    title: "Richmond Hill",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91990.30790729084!2d-79.51070275565553!3d43.90353934483067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2a4936291733%3A0x5201760ad6b142ed!2sRichmond%20Hill%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1731335279989!5m2!1sen!2sbd",
  },
  {
    title: "Staten Island",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193981.64887657942!2d-74.31162963036931!3d40.56448849786039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245ef79f4d4e7%3A0x50271f8534babc78!2sStaten%20Island%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1731335339839!5m2!1sen!2sbd",
  },
  {
    title: "Toronto",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.67411467596!2d-79.54286835206918!3d43.71812279997104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1731333598576!5m2!1sen!2sbd",
  },
  {
    title: "Barrie",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91283.44626604003!2d-79.7481233253357!3d44.359109630568966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882aa3371ad7206d%3A0x1d2e0f00a84b535a!2sBarrie%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1731333675764!5m2!1sen!2sbd",
  },
  {
    title: "Woodbridge",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92146.1028615084!2d-79.6667384123388!3d43.802623849002906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b257a9ad0b911%3A0xecea3dfb3abd0ac2!2sWoodbridge%2C%20Vaughan%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1731335202289!5m2!1sen!2sbd",
  },
  {
    title: "Richmond Hill",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91990.30790729084!2d-79.51070275565553!3d43.90353934483067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2a4936291733%3A0x5201760ad6b142ed!2sRichmond%20Hill%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1731335279989!5m2!1sen!2sbd",
  },
  {
    title: "Staten Island",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193981.64887657942!2d-74.31162963036931!3d40.56448849786039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245ef79f4d4e7%3A0x50271f8534babc78!2sStaten%20Island%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1731335339839!5m2!1sen!2sbd",
  },
  
];

const LocationMap = ({ classNames }) => {
  return (
    <div className={`${classNames ? classNames.bg : "bg___color"}`}>
      <div className="custom-container">
        <div className="py-[30px] lg:py-[120px] 5xl:py-[168px]">
          <div className="mx-auto flex flex-col items-center justify-center ">
          <HeadingIcon text={headingTexts.servicesArea__headingIconText}/>

            <div>
              <h2 className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[30px] 2xl:text-[32px] 3xl:text-[33px] 4xl:text-[34px] 5xl:text-[36px] font-bold leading-[30px] md:leading-[40px] text-dark text-center md:text-left mt-[5px]">
              Services Area in Barrie concrete Ready Mix
              </h2>
            </div>
          </div>

          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            speed={3000}
            allowTouchMove={false}
            breakpoints={breakpoints}
            spaceBetween={74}
          >
            {locations.map((location, index) => (
              <SwiperSlide key={index} className={`px-[90px] md:px-0`}>
                <div
                  className={`${
                    (index + 2) % 2 === 0 ? "lg:-mt-10 md:-mt-5" : ""
                  }`}
                >
                  <div className="w-full shadow-md p-0 mt-[45px] lg:mt-[65px] ">
                    <iframe
                      src={location.iframeSrc}
                      title={`Map showing ${location.title}`}
                      height="325"
                      style={{ border: 0, width: "100%" }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />

                    <p className="lg:text-base text-center text-sm font-bold py-3 5xl:py-4 px-3 lg:px-10 bg-primary text-white">
                      {location?.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
