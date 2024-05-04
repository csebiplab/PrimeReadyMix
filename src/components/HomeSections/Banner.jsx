"use client";

import { useState } from "react";
import DialogComponent from "../common/DialogComponent";
import Image from "next/image";

const homeContent = {
  home: {
    h1: "Ready Mix Concrete & Concrete Delivery, Toronto Ready Mix",
    p: "When it comes to reliable and trusted ready mix concrete services in Toronto, there is no better choice than Prime Ready Mix.",
  },
  barrie: {
    h1: "Barrie Concrete Ready Mix Company",
    p: "Prime Ready Mix is Barrie's premier concrete supplier, offering top-quality concrete ready mix in Barrie for all construction needs.",
  },
};

const Banner = ({ content = "home" }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  const { h1, p } = homeContent[content] ?? {};

  return (
    <div>
      {/* Banner For Mobile */}
      <section className="md:hidden">
        <div>
          <div className="relative container">
            <Image
              priority="true"
              src="/primeReadyMixMobileBanner.jpg"
              className="object-cover object-center h-[31rem] w-full"
              alt="Banner image"
              width={400}
              height={700}
            />
            <div className="pt-10 absolute top-0 left-0 bg-dark bg-opacity-60 h-full">
              <h1 className="font-bold text-[34px] mb-1 leading-tight text-center px-3 text-white">
                {h1}
              </h1>
              <p className="text-white mt-7 text-xl font-semibold leading-6 text-center px-14">
                {p}
              </p>
              <div className="flex justify-center md:justify-start">
                <button
                  aria-label="estimate-button"
                  className="btn !text-sm !py-3 !px-10 my-6 !bg-primary"
                  onClick={handleOpen}
                >
                  Get Your Estimate
                </button>
              </div>
              <div>
                <DialogComponent
                  open={open}
                  handler={handleOpen}
                  setOpen={setOpen}
                />
              </div>
              <br />
            </div>
          </div>
        </div>
      </section>

      {/* Banner For Large Screen */}
      <section className="hidden relative md:flex flex-col-reverse items-center md:flex-row custom-container gap-x-16">
        <div className="flex flex-col justify-center pl-heading md:py-20">
          <h1 className="font-bold text-3xl md:text-5xl mb-4 md:mb-6 leading-tight text-center md:text-left">
            {content === "barrie" ? h1.split(" ").slice(0, 2).join(" ") : h1}
            <br />
            {content === "barrie" && h1.split(" ").slice(2).join(" ")}
          </h1>
          {/* {content === "barrie" && (
            <>
              <h1 className="font-bold text-3xl md:text-5xl mb-4 md:mb-6 leading-tight text-center md:text-left">
                {h1.split(" ").slice(2).join(" ")}
              </h1>
            </>
          )} */}
          <p className="text-dark-500 text-xl font-semibold leading-6 text-center md:text-left mb-6">
            {p}
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              aria-label="estimate-button"
              className="btn !text-sm !py-3 !px-10 my-6 !bg-primary"
              onClick={handleOpen}
            >
              Get Your Estimate
            </button>
          </div>
          <div>
            <DialogComponent
              open={open}
              handler={handleOpen}
              setOpen={setOpen}
            />
          </div>
        </div>

        <div className="w-full">
          <div className="h-[300px] md:h-full">
            <div>
              <Image
                priority="true"
                src="/primeReadyMixHero.jpg"
                alt="Banner"
                width={400}
                height={700}
                className="object-cover object-center w-full banner-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
