import Image from "next/image";
import React from "react";
import { smallHeadingText } from "../../constants/small-heading-text";
import SectionSmallHeading from "../ui/SectionSmallHeading";
const QualityEveryProject = () => {
  return <div>
    <div>
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="">
          <Image
            alt="About Us"
            src="/barrie/images/quality.png"
            width={650}
            height={586}
            className="w-auto h-auto lg:w-[650px] lg:h-[586px]"
          />
        </div>

        <div>
          <div className="">
            <SectionSmallHeading text={smallHeadingText.quality__heading} />

            <h3 className="mb-[15px] md:mb-[25px] text-base md:text-xl lg:text-4xl  text-dark">
            Your Leading Choice for Concrete Ready Mix in Barrie
            </h3>

            <p className="text-lg font-medium leading-[194%] text-[#50708F]">
            Looking for a top-quality concrete ready mix in Barrie? Look no further than our leading choice. With a commitment to excellence and reliability, we provide the finest concrete mixes tailored to your specific project needs. Whether you're undertaking a small residential project or a large-scale commercial development, our ready mix solutions ensure durability, strength, and consistency, backed by our team of skilled professionals dedicated to delivering exceptional results. Our state-of-the-art facilities and advanced mixing technology guarantee precise proportions and uniformity, ensuring the highest quality standards are met with every batch.
            </p>
          </div>
          {/* ============== Button ============== */}
          <div className="flex justify-center md:justify-start">
                <button
                  aria-label="learn-more"
                  className="btn !text-sm !py-3 !px-10 my-6 !bg-primary"
                  
                >
                  Learn More
                </button>
              </div>
        </div>
      </div>
    </div>
  </div>;
};

export default QualityEveryProject;
