'use client';
import { AiFillFacebook, AiFillGoogleCircle, AiOutlineCopyrightCircle, AiOutlineInstagram } from "react-icons/ai";
import { site_info } from "../../site/info";

const Footer = () => {
  return (
    <footer className="py-14 bg-dark text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          <div className="col-span-2">
            <img src="/logo.png" className="w-full max-w-[180px] bg-white mb-3 rounded-md" alt="" />
            <p className="text-lg leading-relexed">
              {site_info.name} simplifies the process and costs of renovation by
              bringing design, sourcing and management under one roof.
            </p>
          </div>
          <div className="text-lg">
            <h4 className="font-medium tracking-wider mb-2">Company</h4>
            <ul className="tracking-wide">
                <li><a href="http://" className="mb-1 text-white/70 hover:text-primary">FAQ</a></li>
                <li><a href="http://" className="mb-1 text-white/70 hover:text-primary">Contact Us</a></li>
                <li><a href="http://" className="mb-1 text-white/70 hover:text-primary">Testimonial</a></li>
            </ul>
          </div>
          <div className="text-lg">
          <h4 className="font-medium tracking-wider mb-2">Services</h4>
            <ul className="tracking-wide">
                {/* <li><a href="http://" className="mb-1 text-white/70 hover:text-primary">Bathroom Remodeling</a></li>
                <li><a href="http://" className="mb-1 text-white/70 hover:text-primary">Kitchen Remodeling</a></li> */}
            </ul>
          </div>
          <div className="text-lg">
          <h4 className="font-medium tracking-wider mb-2">Contacts</h4>
            <div className="flex gap-2 justify-between items-center">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <AiFillFacebook  className="h-10 w-10"/>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <AiFillGoogleCircle className="h-10 w-10" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <AiOutlineInstagram className="h-10 w-10" />
                </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr className="border-white/50 my-6" />
        <br />
            <p className="text-center text-lg flex items-center gap-2"><AiOutlineCopyrightCircle className="inline-block" />Copyright 2021 | All rights Reserved</p>
        <br />
      </div>
    </footer>
  );
};

export default Footer;
