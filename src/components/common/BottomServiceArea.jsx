"use client";
import { BsHeadphones } from "react-icons/bs";
import { FaSearchLocation } from "react-icons/fa";
import ProjectFrom from "../../app/contact-us/ProjectFrom";
import { contacts, site_info } from "../../site/info";

const BottomServiceArea = () => {
    return (
        <>
            {/* <section
        className="pt-40 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url(https://easyrenovation.ca/wp-content/themes/easyrenovation/assets/images/offices/bg.jpg)",
        }}
      >
        <div className="pt-28">
          <div className="container">
            <div className="max-w-5xl text-center mx-auto text-white">
              <h1 className="mb-4 text-white">
                Servicing Locations Across The GTA
              </h1>
              <p className="text-xl font-medium mb-3 text-white">
                To Serve You Better
              </p>
              <div className="mx-auto mb-4 h-1 w-40 bg-primary" />
            </div>
            <div className="justify-center  grid py-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-8">
              <figure className="text-center bg-white">
                <div className="text-center py-4 bg-primary text-white">
                  <h3 className="text-white">Showroom 1</h3>
                  <p className="text-xl font-medium text-white">
                    (by appt. only)
                  </p>
                </div>
                <div className="py-6 bg-white">
                  <h4 className="mb-4">
                    <a
                      href="tel:+"
                      className="flex gap-3 items-center justify-center"
                    >
                      <AiTwotonePhone />{" "}
                      <span className="underline">{contacts.phone}</span>
                    </a>
                  </h4>
                  <p className="mb-4">
                    1460 The Queensway, Unit 103 Etobicoke, ON M8Z 1S7
                  </p>
                  <a href="#" className="text-xl font-medium underline">
                    VIEW MAP
                  </a>
                </div>
              </figure>
            </div>
          </div>
        </div>
        <img
          src="https://easyrenovation.ca/wp-content/themes/easyrenovation/assets/images/offices/homes.svg"
          className="hidden md:block w-full"
          alt=""
        />
      </section> */}
            <section className="py-8">
                <div className="container">
                    {/* <div className="max-w-2xl text-center mx-auto">
            <h1 className="mb-4">Our Service Areas</h1>
            <p className="text-xl font-medium mb-3">
              …serving the Greater Toronto Horseshoe Area for all your kitchen,
              basement, and bathroom renovation needs.
            </p>
            <div className="mx-auto mb-4 h-1 w-40 bg-primary" />
            <div className="flex gap-5 flex-wrap justify-center items-center">
              {[
                {
                  name: "Ajax",
                },
                {
                  name: "Aurora",
                },
                {
                  name: "Bolton",
                },
                {
                  name: "Bradford",
                },
                {
                  name: "Brampton",
                },
                {
                  name: "Burlington",
                },
                {
                  name: "Etobicoke",
                },
                {
                  name: "Hamilton",
                },
                {
                  name: "Innisfil",
                },
                {
                  name: "Markham",
                },
                {
                  name: "Milton",
                },
                {
                  name: "Mississauga",
                },
                {
                  name: "Newmarket",
                },
                {
                  name: "North York",
                },
                {
                  name: "Oakville",
                },
                {
                  name: "Oshawa",
                },
                {
                  name: "Pickering",
                },
                {
                  name: "Richmond Hill",
                },
                {
                  name: "Scarborough",
                },
                {
                  name: "Toronto",
                },
                {
                  name: "Vaughan",
                },
                {
                  name: "Whitby",
                },
              ].map((item, key) => (
                <Link
                  href="/"
                  className="text-xl font-semibold text-dark hover:text-primary"
                >
                  {item?.name}
                </Link>
              ))}
            </div>
          </div> */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-12">
            <div className="py-8">
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              Drop us a line! <br /> Request a quote.
              </h1>
              <p className="text-xl mb-3 font-medium">Better yet, give us a call, and we'll be on our way!
              </p>
              <div className="mb-6 h-1 w-40 bg-primary" />
              <figure className="flex gap-2 mb-10">
                <BsHeadphones className="h-14 w-14" />
                <div>
                  <p className="text-xl">Call Us</p>
                  <a href={`tel:${contacts.phone}`} className="text-lg font-medium">{contacts.phone}</a>
                </div>
              </figure>
              <figure className="flex gap-2">
                <FaSearchLocation className="h-14 w-14" />
                <div>
                  <p className="text-xl">Location</p>
                  <address className="text-lg font-medium">{contacts.address}</address>
                </div>
              </figure>
            </div>
            <div>
              <h3>Contact {site_info.name}</h3>
              <ProjectFrom />
            </div>
          </div> */}
                </div>
            </section>
        </>
    );
};

export default BottomServiceArea;
