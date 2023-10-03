"use client";
import { Drawer, IconButton, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaPhone } from "react-icons/fa";
import { contacts, site_info } from "../../site/info";

const menu = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "Service",
        url: "/services",
    },
];

const Header = () => {
    const [open, setOpen] = useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    return (
        <>
            <header className=" sticky top-0 bg-white z-[1000] shadow shadow-dark-50/10">
                <div className="w-full mx-auto bg-black py-3">
                    <h6 className="w-11/12 mx-auto bg-black text-buttonColor text-sm text-center md:text-left">
                        {" "}
                        <span className="bg-black">
                            <i className="fa-solid fa-trowel-bricks mr-2 text-buttonColor bg-black"></i>
                        </span>
                        TORONTO READY MIX
                    </h6>
                </div>
                <div className="w-11/12 md:w-10/12 mx-auto gap-2 py-2 flex flex-wrap items-center justify-between bg-white sticky top-0">
                    <a href="/">
                        <img src="/logo.png" alt="" className="max-w-[120px] w-full" />
                    </a>
                    <nav className="flex-grow hidden md:block">
                        {menu.map((item, key) => (
                            <Link
                                href={item.url}
                                key={key}
                                className="text-lg text-dark hover:text-primary py-2 px-3 duration-200"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <nav className="gap-2 items-center hidden md:flex">
                        <a href="tel:+" className="flex items-center gap-2 py-2 px-3 group">
                            <span className="h-9 w-9 rounded-full justify-center items-center bg-dark-50/10 inline-block group-hover:bg-dark">
                                <FaPhone className="inline-block h-4 w-4 fill-dark group-hover:fill-white" />
                            </span>
                            <span className="text-xl font-semibold text-primary">
                                {contacts.phone}
                            </span>
                        </a>
                        <Link href="/contact-us" className="btn">
                            Contact Us
                        </Link>
                    </nav>
                    <IconButton
                        variant="text"
                        className="block p-4 bg-[#33475B] !text-white rounded-none  md:hidden"
                        onClick={openDrawer}
                    >
                        <i class="fa-solid fa-bars text-xl bg-none text-white " />
                    </IconButton>
                </div>
            </header>
            <Drawer open={open} onClose={closeDrawer} className="p-4">
                <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                        {site_info.name}
                    </Typography>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <nav className="gap-2 flex flex-col">
                    {menu.map((item) => (
                        <Link
                            href={item.url}
                            className="flex items-center gap-2 py-2 px-3 group"
                            onClick={closeDrawer}
                        >
                            <span className="text-xl font-semibold text-primary">{item.name}</span>
                        </Link>
                    ))}
                </nav>
                <nav className="gap-2 flex flex-col">
                    <a
                        href="tel:+"
                        className="flex items-center gap-2 py-2 px-3 group"
                        onClick={closeDrawer}
                    >
                        <span className="h-9 w-9 rounded-full justify-center items-center bg-dark-50/10 flex  group-hover:bg-dark">
                            <FaPhone className="inline-block h-4 w-4 fill-dark group-hover:fill-white" />
                        </span>
                        <span className="text-xl font-semibold text-primary">{contacts.phone}</span>
                    </a>
                    <Link href="/contact-us" className="btn">
                        Contact Us
                    </Link>
                </nav>
            </Drawer>
        </>
    );
};

export default Header;
