"use client";
import {
    AiFillFacebook,
    AiFillGoogleCircle,
    AiOutlineCopyrightCircle,
    AiOutlineInstagram,
} from "react-icons/ai";
import { site_info } from "../../site/info";

const Footer = () => {
    return (
        <footer className="pt-10 bg-dark text-white ">
            <div className="w-11/12 md:w-10/12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5 justify-center items-start mx-auto">
                    <div className="col-span-12 md:col-span-2 mx-auto">
                        <img
                            src="/logo.png"
                            className="w-full max-w-[120px] bg-white mb-3 rounded-md mx-auto md:mx-0"
                            alt=""
                        />
                        <p className="text-sm w-4/5 md:w-full mx-auto leading-relexed text-center md:text-left">
                            {site_info.name} simplifies the process and costs of renovation by
                            bringing design, sourcing and management under one roof.
                        </p>
                    </div>
                    <div className="text-lg col-span-12 md:col-span-1">
                        <h4 className="font-bold text-base tracking-wider mb-2 text-center md:text-start">
                            Company
                        </h4>
                        <ul className="tracking-wide text-center md:text-start text-base text-white">
                            <li>
                                <a href="http://" className="mb-1 text-white hover:text-primary">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="http://" className="mb-1 text-white hover:text-primary">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="http://" className="mb-1 text-white hover:text-primary">
                                    Testimonial
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-lg col-span-12 md:col-span-1">
                        <h4 className="font-bold text-base tracking-wider mb-2 text-center md:text-start">
                            Services
                        </h4>
                        <ul className="tracking-wide text-center md:text-start text-base">
                            <li>
                                <a href="http://" className="mb-1 text-white hover:text-primary">
                                    Bathroom Remodeling
                                </a>
                            </li>
                            <li>
                                <a href="http://" className="mb-1 text-white hover:text-primary">
                                    Kitchen Remodeling
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-lg col-span-12 md:col-span-1">
                        <h4 className="font-bold text-base tracking-wider mb-2 text-center md:text-start">
                            Contacts
                        </h4>
                        <div className="flex gap-2 justify-center md:justify-start items-center">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <AiFillFacebook className="h-5 md:h-8 w-5 md:w-8" />
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <AiFillGoogleCircle className="h-5 md:h-8 w-5 md:w-8" />
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <AiOutlineInstagram className="h-5 md:h-8 w-5 md:w-8" />
                            </a>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <hr className="border-white/50 " />
                <br />
                <p className="text-center text-sm font-extralight text-white/50 ">
                    <i className="fa-regular fa-copyright mr-2"></i>
                    Copyright 2021 | All rights Reserved
                </p>
                <br />
            </div>
        </footer>
    );
};

export default Footer;
