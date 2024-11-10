import Image from "next/image";
import Link from "next/link";

import { PiMapPinLineFill } from "react-icons/pi";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import "./Footer.css";

const footerLinks1 = [
  {
    cat: "Company",
    links: [
      { label: "Blogs", url: "/" },
      { label: "Contact Us", url: "/" },
      { label: "Testimonial", url: "/" },
      { label: "Careers", url: "/" },
      { label: "Sitemap", url: "/" },
    ],
  },
];
const footerLinks2 = [
  {
    cat: "Ours Services",
    links: [
      { label: "Kitchen Remodeling", url: "/" },
      { label: "Bathroom Remodeling", url: "/" },
      { label: "Painting", url: "/" },
      { label: "Roofing", url: "/" },
      { label: "Brown Stone Repair", url: "/" },
      { label: "Brick Works", url: "/" },
    ],
  },
];

const footerImages = [
  "/homePage/footerIcon/google.png",
  "/homePage/footerIcon/threeBest.png",
  "/homePage/footerIcon/homeStar.png",
  "/homePage/footerIcon/rated.png",
  "/homePage/footerIcon/gaf.png",
];

const Footer = () => {
  return (
    <div className="custom-container">
      <div className="relative Footer__bg px-5 lg:px-[30px] !text-white">
        <footer className="container top-footer-content !z-50 py-[24px] md:py-[30px] text-white">
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-12 2xl:gap-x-[px] justify-center">
              <div className=" w-full lg:w-auto">
                <div className=" mx-auto flex justify-center">
                  <Image
                    src="/homePage/footerIcon/footer_logo.png"
                    height={311}
                    width={141}
                    alt="footer Logo"
                    className="w-full"
                  />
                </div>
                <p className="text-white pt-6 leading-[200%] text-center md:text-start">
                From foundations to finishing touches, rely on Prime Ready Mix for superior solutions of concrete ready mix in Barrie.
                </p>
              </div>

              {/* Mapping through footer links */}
              <div>
                {footerLinks1.map((category, index) => (
                  <div
                    key={index}
                    className="mt-5 md:mt-0 text-center md:text-start"
                  >
                    <p className="text-white !text-xl font-bold mb-5">
                      {category.cat}
                    </p>
                    <ul>
                      {category.links.map((link, idx) => (
                        <li key={idx} className="mb-6">
                          <Link href={link.url}>
                            <span className="text-white !text-base !font-normal">
                              {link.label}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div>
                {footerLinks2.map((category, index) => (
                  <div
                    key={index}
                    className="mt-5 md:mt-0 text-center md:text-start"
                  >
                    <p className="text-white !text-xl font-bold mb-5">
                      {category.cat}
                    </p>
                    <ul>
                      {category.links.map((link, idx) => (
                        <li key={idx} className="mb-6">
                          <Link href={link.url}>
                            <span className="text-white !text-base !font-normal">
                              {link.label}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="w-full lg:w-auto text-center md:text-start">
                <p className="text-white !text-xl font-bold pb-5">Contact Us</p>
                <ul className="text-center md:text-start mx-auto">
                  <li>
                    <Link
                      href="location:4 Cedar Ave, Thornhill, ON L3T 3W1, Canada"
                      className="flex items-center gap-2 footer-link items-start text-left justify-center md:justify-start md:items-center text-sm text-white"
                    >
                      <Image src="/homePage/icons/map.png" alt="map icon" width={21} height={21}/>
                      <span>4 Cedar Ave, Thornhill, <br/> ON L3T 3W1, Canada</span>
                    </Link>
                  </li>
                  <li className="lg:py-8 xs:py-[12px]">
                    <Link
                      href="tel:+1 (647) 539-6755"
                      className="flex items-center gap-2 footer-link items-center justify-center md:justify-start text-sm text-white"
                    >
                      <Image src="/homePage/icons/phone.png" alt="phone icon" width={21} height={21}/>
                      <span>+1 (647) 539-6755</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:sampleit@gmail.com"
                      className="flex items-center gap-2 footer-link items-center justify-center md:justify-start text-sm text-white"
                    >
                      <Image src="/homePage/icons/email.png" alt="email icon" width={21} height={21}/>
                      <span>sampleit@gmail.com</span>
                    </Link>
                  </li>
                  {/* footer image  */}
                  <div className="grid grid-cols-4 gap-5 5xl:gap-[42px] pt-[26px] md:pt-[36px]">
                    {footerImages?.map((img, index) => {
                      return (
                        <div key={index}>
                          <Image
                            src={img}
                            alt="footer image"
                            width={60}
                            height={51}
                            className="w-full"
                          />
                        </div>
                      );
                    })}
                  </div>

                  <div className="block md:hidden">
                    <div className="h-[1px] bg-[#8E8E8E] w-full mt-9 mb-4" />

                    <div className="text-center lg:text-left">
                      <p className="text-xs lg:text-sm text-white">
                      © All Copyright 2024 by Toronto Ready Mix
                      </p>
                      <ul className="text-sm lg:text-sm flex justify-evenly gap-2 mt-4">
                        <li className="text-white"> Terms & Condition</li>
                        <li className="text-white"> Privacy Policy </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* creater company credit */}
      <div className="footer-bottom-bg">
        <div className="container flex flex-col lg:flex-row justify-between items-center py-2">
          <div className="flex justify-center items-center mb-2 lg:mb-0">
            <p className="text-xs md:text-sm font-semibold text-white mr-[10px]">
              WEBSITE DESIGN AND SEO BY :-
            </p>
            <Image
              src="/homePage/footerIcon/gokundu_logo.png"
              alt="Gokundo"
              width={141}
              height={36}
              className="w-full"
            />
          </div>
          <div className="text-center lg:text-left hidden md:block">
            <p className="text-xs lg:text-sm text-white">
            © All Copyright 2024 by Toronto Ready Mix
            </p>
          </div>
          <div className="text-center lg:text-right hidden md:block">
            <ul className="text-xs lg:text-sm flex justify-evenly gap-2">
              <li className="text-white"> Terms & Condition</li>
              <li className="text-white"> Privacy Policy </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
