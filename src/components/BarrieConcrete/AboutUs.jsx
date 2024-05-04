import Image from "next/image";
import { smallHeadingText } from "../../constants/small-heading-text";
import SectionSmallHeading from "../ui/SectionSmallHeading";

const AboutUs = () => {
  return (
    <div>
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="">
          <Image
            alt="About Us"
            src="/barrie/images/about.png"
            width={650}
            height={472}
            className="w-auto h-auto lg:w-[650px] lg:h-[472px]"
          />
        </div>

        <div>
          <div className="">
            <SectionSmallHeading text={smallHeadingText.aboutUs__heading} />

            <h3 className="mb-[15px] md:mb-[25px] text-black !text-3xl !lg:text-4xl !font-semibold">
              About Our Ready Mix Barrie Supplier
            </h3>

            <p className="text-lg font-medium leading-[194%]">
              Prime Ready Mix is your trusted supplier of ready mix concrete in
              Barrie. With a commitment to excellence and customer satisfaction,
              we provide high-quality concrete products tailored to meet your
              specific project needs. At our company, we understand the
              importance of timely delivery and reliable service. Our
              state-of-the-art facilities and experienced team ensure that you
              receive consistent, top-notch concrete solutions for your
              construction projects. Whether you're working on residential,
              commercial, or industrial projects, we have the expertise and
              resources to deliver superior concrete products that meet the
              highest standards of durability and performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
