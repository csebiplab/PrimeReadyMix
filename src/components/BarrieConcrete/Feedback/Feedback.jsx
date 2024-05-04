import { IoIosMail } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaMapLocationDot, FaPhoneVolume, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

import "./Feedback.css";

const Feedback = () => {
  return (
    <div className="container mt-12 lg:mt[120px]">
      <div className="grid grid-cols-1 lg:grid-cols-6 items-center gap-x-10">
        <div className="order-2 lg:order-1 py-6 lg:py-16 px-6 lg:pl-[71px] lg:pr-2 lg:col-span-3 bg-primary text-white">
          <div className="">
            <h2 className="text-lg lg:text-3xl text-white pb-[37px] text-center lg:text-start">
              Contact Us
            </h2>
            <div className="flex gap-2 items-center lg:text-lg text-sm justify-center lg:justify-start pb-6">
              <FaMapLocationDot className="fill-white lg:w-5 lg:h-5 w-auto h-auto" />
              <p className="text-white">
                4 Cedar Ave, Thornhill, ON L3T 3W1, Canada
              </p>
            </div>
            <div className="">
              <a
                href="tel:+ 1 (647) 539-6755"
                className="my-3 flex gap-2 items-center lg:text-lg text-sm justify-center lg:justify-start pb-6"
              >
                <FaPhoneVolume className="fill-white lg:w-5 lg:h-5 w-auto h-auto" />
                <span className="text-white">+ 1 (647) 539-6755</span>
              </a>
            </div>
            <div className="">
              <a
                href="mailto:sampleit@gmail.com"
                className="lg:text-lg text-sm flex gap-2 items-center justify-center lg:justify-start pb-6"
              >
                <IoIosMail className="fill-white lg:w-5 lg:h-5 w-auto h-auto" />
                <span className="text-white">sampleit@gmail.com</span>
              </a>
            </div>
            <div className="flex lg:gap-8 gap-3 justify-center lg:justify-start mb-12">
              <FaFacebook className="fill-white lg:w-6 lg:h-6 w-auto h-auto" />
              <FaXTwitter className="fill-white lg:w-6  lg:h-6 w-auto h-auto" />
              <FaInstagram className="fill-white lg:w-6 lg:h-6 w-auto h-auto" />
              <FaLinkedin className="fill-white lg:w-6 lg:h-6 w-auto h-auto" />
            </div>

            <div className="flex justify-center lg:justify-start">
              <div>
                <h4 className="text-white text-xl lg:text-3xl">
                  Concrete Ready Mix
                </h4>
                <div className="py-8">
                  <Image
                    src="/barrie/images/brand.png"
                    height={280}
                    width={130}
                    alt="Prime Concrete Plumbing Logo"
                    className="w-[280px] h-[130px]"
                  />
                </div>
                <h4 className="text-white text-xl lg:text-3xl">
                  Barrie concrete Ready Mix
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 rounded-lg p-5 lg:col-span-3 lg:p-12 items-center">
          <h2 className="lg:mb-8 mb-5">Give Us Feedback </h2>
          <form action="#" className="space-y-4 ">
            <div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:mb-8 mb-4">
                <div>
                  {" "}
                  <h5 className="mb-2">Your name *</h5>
                  <label className="sr-only" htmlFor="email">
                    name
                  </label>
                  <input
                    className="w-full field__style shadow-sm p-3 text-sm"
                    placeholder="Robot Fox"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <h5 className="mb-2">Email *</h5>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full field__style shadow-sm p-3 text-sm"
                    placeholder="info.example@gmail.com"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:mb-8 mb-4">
              <div>
                <h5 className="mb-2">Subjects *</h5>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full field__style shadow-sm p-3 text-sm"
                  placeholder="Subjects "
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <h5 className="mb-2">Your Phone *</h5>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full field__style shadow-sm p-3 text-sm"
                  placeholder="+ 1 647 539-6755"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <h5 className="mb-2">Message *</h5>
              <textarea
                className="w-full field__style shadow-sm p-4 text-sm"
                placeholder="Write Message"
                rows="6"
                id="message"
              ></textarea>
            </div>

            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                className="w-[200px] lg:w-[274px] rounded-md bg-primary px-6 lg:px-10 py-4 font-semibold flex justify-center items-center mt-0 lg:mt-10"
              >
                <span className="mr-2 text-white">Submit</span>
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                  >
                    <path
                      d="M2.09344 2.35667L8.14595 4.86111L2.09344 4.08333V2.35667ZM8.14595 9.13889L2.09344 11.6433V9.91667L8.14595 9.13889ZM0.479431 0V5.44444L12.5845 7L0.479431 8.55556V14L17.4265 7L0.479431 0Z"
                      fill="white"
                    />
                  </svg>
                </>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
