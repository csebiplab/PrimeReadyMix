"use client";
import Image from "next/image";
import { smallHeadingText } from "../../../constants/small-heading-text";
import SectionSmallHeading from "../../ui/SectionSmallHeading";
import "./Advantages.css";

const usualConcrete = [
  {
    title: "Poor Quality Control Measures Resulting in Substandard Concrete",
  },
  {
    title: "Unreliable Delivery Schedule Leading to Project Delays",
  },
  {
    title: "Inconsistent Customer Service and Communication",
  },
  {
    title: "Environmental Concerns: Negligence in Waste Management",
  },
  {
    title: "Safety Hazards: Neglecting Workplace Safety Protocols",
  },
  {
    title: "Equipment Malfunctions Causing Production Delays",
  },
  {
    title: "Inadequate Training for Personnel Resulting in Errors",
  },
  {
    title: "Insufficient Testing Procedures Compromising Structural Integrity",
  },
  {
    title: "Ignoring Customer Feedback and Complaints",
  }
 
];
const primeConcrete = [
  {
    title: "Premium Quality Concrete Solutions",
  },
  {
    title: "Efficient and Reliable Ready Mix Services",
  },
  {
    title: "Tailored Concrete Mixes for Every Project",
  },
  {
    title: "Expertise in Ready Mix Concrete Delivery",
  },
  {
    title: "Innovating Construction with Ready Mix Solutions",
  },
  {
    title: "Seamless Integration of Ready Mix into Projects",
  },
  {
    title: "Enhancing Construction Efficiency with Ready Mix",
  },
  {
    title: "Trusted Partner for Ready Mix Supply",
  },
  {
    title: "Streamlined Construction Processes with Ready Mix",
  },
  {
    title: "Elevating Construction Standards with Ready Mix Technology",
  },
];

const Advantages = () => {
  return (
    <div>
      <div className="shadow-sm mx-[35px] md:mx-0">
        <div className="grid grid-cols-3 items-center">
        <div className="col-span-1 flex flex-col">
          <div className="text-center md:text-start ">
          <SectionSmallHeading text={smallHeadingText.advantages__heading} />
          </div>

          <h3 className="mb-2 md:mb-1 text-base md:text-xl lg:text-4xl text-dark ">
          The Benefits of Selecting Us for Barrie Concrete Ready Mix Supply
            </h3>
        </div>
          <div className="col-span-1 col-start-3">
          <p className="text-lg font-medium leading-[155%] text-[#50708F] mb-6">
          Our commitment to quality ensures that you receive a superior product every time. With our expertise and dedication, you can trust us to deliver concrete mixes that meet your specific requirements efficiently and reliably. We prioritize customer satisfaction, providing excellent service and timely deliveries to streamline your projects.
            </p>
          </div>
        </div>
        

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 2xl:gap-12">
          <div className=" border-2 shadow">
            <h6 className="title-bg text-center py-2 text-white text-base 2xl:text-xl leading-[127%]">
            Usual Ready Mix Company
            </h6>
            <div className="3xl:py-[35px] py-[25px] 3xl:px-[25px] px-5 text-base ">
              {usualConcrete.map((usual, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 items-center mb-3 lg:mb-5 3xl:mb-6"
                >
                  <Image
                    src="/barrie/icons/l.png"
                    alt="x"
                    width={23}
                    height={23}
                    className="2xl:h-[23px] 2xl:w-[23px] h-[15px] w-[15px]"
                  />
                  <p className="text-base">{usual.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className=" border-2 shadow">
            <h6 className="title-bg text-center py-2 text-white text-base 2xl:text-xl leading-[127%]">
            Prime Ready Mix
            </h6>
            <div className="3xl:py-[35px] py-[25px] 3xl:px-[25px] px-5 text-base">
              {primeConcrete.map((usual, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 mb-3 lg:mb-5 3xl:mb-6"
                >
                  <Image
                    src="/barrie/icons/r.png"
                    alt="r"
                    width={23}
                    height={23}
                    className="h-[15px] w-[15px] 2xl:h-[23px] 2xl:w-[23px]"
                  />
                  <p className="text-base">{usual.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
