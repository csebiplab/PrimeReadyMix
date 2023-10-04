"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import BottomServiceArea from "../components/common/BottomServiceArea";
import ServicesSection from "../components/common/ServicesSection";
import { contacts } from "../site/info";
import { BsCheck2Square } from "react-icons/bs";
import { FaRegWindowClose } from "react-icons/fa";
import DialogComponent from "../components/common/DialogComponent";

const Home = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <main className="w-11/12 md:w-10/12 mx-auto">
            <section className="py-10 relative">
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
                        <div className="text-center md:text-left">
                            <h1 className="font-bold text-4xl mb-1 leading-tight">
                                Ready Mix & <br />
                                Concrete Delivery, <br />
                                Toronto Ready Mix
                            </h1>
                            <h4 className="text-dark-500 mt-7 md:text-2xl text-[18px] font-semibold md:font-semibold leading-6">
                                When it comes to reliable and trusted ready mix services in Toronto,
                                there is no better choice than Prime Ready Mix.
                            </h4>
                            <button
                                className="btn !text-sm !py-3 !px-10 my-6 !bg-primary "
                                onClick={handleOpen}
                            >
                                Get Your Estimate
                            </button>
                            <div className="h-screen py-10 overflow-y-scroll">
                                <DialogComponent
                                    open={open}
                                    handler={handleOpen}
                                    setOpen={setOpen}
                                />
                            </div>
                            {/* <img
                                className="mx-auto w-3/4 md:w-full mt-4"
                                style={{ transform: "rotateY(180deg) rotateZ(5deg)" }}
                                src="https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/P85-side-e1663291233852.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1352,h:500,cg:true"
                                alt=""
                            /> */}
                            <br />
                            {/* <div className="flex justify-center md:justify-between items-end gap-2 flex-wrap ">
                <p className="font-bold text-primary text-lg">
                  Limited Time Offer
                </p>
                <p className="text-dark-400">Exp. Sep 30th 2023</p>
              </div>
              <div className="flex items-center flex-wrap relative flex-col md:flex-row my-4 text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full text-lg border-2 font-semibold border-dark-400 bg-dark text-white flex justify-center items-center">
                  OR
                </div>
                <figure className="flex-grow py-3 bg-dark-50/10 rounded-sm w-full md:w-auto border-b-[1px] border-b-dark md:border-b-0">
                  <h4 className="px-5 font-semibold">
                    Get Cashback{" "}
                    <span className="text-primary font-bold">$3,000</span>
                  </h4>
                  <hr className="border-px my-3 border-dark-300 hidden md:block" />
                  <p className="px-5 mb-2">
                    For eligible <b>bathroom</b> customers.
                  </p>
                </figure>
                <figure className="flex-grow py-3  rounded-sm bg-white w-full  md:w-auto border-t-[1px] border-t-dark md:border-t-0">
                  <h4 className="px-5  font-semibold">
                    Get Cashback{" "}
                    <span className="text-primary font-bold">$3,000</span>
                  </h4>
                  <hr className="border-px my-3 border-dark-300  hidden md:block" />
                  <p className="px-5 mb-2">
                    For eligible <b>kitchen</b> customers
                  </p>
                </figure>
              </div> */}
                        </div>
                    </div>
                </div>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    modules={[Autoplay]}
                    className="relative md:!absolute mb-4 md:mb-0 top-0 right-0 w-full md:w-[45%] h-56 md:h-full object-cover object-center"
                >
                    {[
                        "https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/blob-5fe5952.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true",
                        "https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/blob-b6db9aa.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true",
                        "https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/blob-dce5594.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true",
                    ].map((item, key) => (
                        <SwiperSlide key={key} className="h-60 md:h-full">
                            <img
                                src={item}
                                className="object-cover object-center h-full w-full"
                                alt=""
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="py-10">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                    <img
                        src="https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/blob-9397e44.png/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:600,h:451,cg:true/qt=q:46"
                        alt=""
                        className="w-full h-full max-h-[320px] md:max-h-[600px] object-cover object-bottom"
                    />
                    <div>
                        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                            About Prime Ready Mix
                        </h2>
                        <div className="h-1 w-40 bg-primary my-5" />
                        <p className="text-dark-300 md:text-lg">
                            Prime Ready Mix is a renowned name in the construction industry, known
                            for delivering top-quality concrete solutions tailored to meet the
                            diverse needs of projects large and small. With a commitment to
                            excellence and a focus on customer satisfaction, Prime Ready Mix has
                            established itself as a trusted partner for builders, contractors, and
                            developers alike. Their state-of-the-art facilities and advanced mixing
                            technology ensure that every batch of concrete is precisely formulated
                            and consistently reliable. Whether for towering skyscrapers or intricate
                            residential developments, Prime Ready Mix prides itself on providing a
                            product that meets industry standards and exceeds them. With a team of
                            experienced professionals and a dedication to innovation, we continue to
                            play a pivotal role in shaping the infrastructure of communities. When
                            it comes to reliable and high-performance concrete solutions, Prime
                            Ready Mix stands as a beacon of quality and reliability in the Toronto
                            Ready Mix industry.
                        </p>
                        {/* <div>
                            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl my-5 text-center">
                                Why Choose Prime Ready Mix?
                            </h2>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center items-center">
                            <div>
                                <h5 className="text-sm font-bold mt-5 mb-3">
                                    Easy Renovation Experience
                                </h5>
                                {[
                                    "All fixtures, materials, and labor included",
                                    "Built by a local, vetted contractor",
                                    "4 weeks average build",
                                ].map((item, key) => (
                                    <figure
                                        key={key}
                                        className=" mx-auto flex items-center justify-start mb-2 text-lg font-medium"
                                    >
                                        <FaRegWindowClose className="h-6 w-6 fill-primary mr-1" />
                                        <p className=" text-sm">{item}</p>
                                    </figure>
                                ))}
                            </div>
                            <div>
                                <h5 className="text-sm font-bold mt-5 mb-3">
                                    Usual Renovation Experience
                                </h5>
                                {[
                                    "All fixtures, materials, and labor included",
                                    "Built by a local, vetted contractor",
                                    "4 weeks average build",
                                ].map((item, key) => (
                                    <figure
                                        key={key}
                                        className=" mx-auto flex items-center justify-start mb-2 text-lg font-medium"
                                    >
                                        <BsCheck2Square className="h-6 w-6 fill-buttonColor mr-1" />
                                        <p className=" text-sm">{item}</p>
                                    </figure>
                                ))}
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className="py-10">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="font-bold  text-2xl md:text-3xl lg:text-4xl">
                            Trusted Ready Mix Services in Toronto
                        </h2>
                        <div className="h-1 w-40 bg-primary my-5" />
                        <p className="text-dark-300 md:text-lg">
                            When it comes to reliable and trusted ready mix services in Toronto,
                            there is no better choice than Prime Ready Mix. With a proven track
                            record of delivering high-quality concrete mixes tailored to meet the
                            specific needs of each project, we have established ourselves as a go-to
                            provider in the Toronto Ready Mix industry. Our team of skilled
                            technicians and state-of-the-art batching plants ensure precise and
                            consistent mixes every time. Whether it's a small residential project or
                            a large-scale commercial venture, Prime Ready Mix takes pride in our
                            prompt and efficient service, ensuring that projects stay on schedule.
                            Additionally, our commitment to quality control and adherence to
                            industry standards guarantee that the concrete supplied is not only
                            durable but also environmentally sustainable. When you choose Prime
                            Ready Mix, you're not just getting concrete; you're getting a partner
                            dedicated to the success of your project.
                        </p>
                    </div>
                    <img
                        src="https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/P85-side-e1663291233852.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1352,h:500,cg:true"
                        alt=""
                        className="w-full h-full max-h-[320px] md:max-h-[600px] object-contain object-bottom"
                    />
                </div>
            </section>
            <section className="py-10">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                    <img
                        src="https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/blob-9397e44.png/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:600,h:451,cg:true/qt=q:46"
                        alt=""
                        className="w-full h-full max-h-[320px] md:max-h-[600px] object-cover object-bottom"
                    />
                    <div>
                        <h2 className="font-bold  text-2xl md:text-3xl lg:text-4xl">
                            Our Ready Mix Services
                        </h2>
                        <div className="h-1 w-40 bg-primary my-5" />
                        <p className="text-dark-300 md:text-lg">
                            Our Ready Mix Services offer a seamless solution for all your concrete
                            needs and concrete delivery services in GTA. With a dedicated team of
                            skilled professionals and a fleet of state-of-the-art mixing trucks, we
                            ensure that you receive the highest-quality concrete precisely when and
                            where you need it. Whether it's a small residential project or a
                            large-scale commercial undertaking, our Toronto Ready Mix services are
                            designed to save you time, labor, and costs associated with on-site
                            mixing. We take pride in our commitment to delivering consistent,
                            durable, and reliable concrete mixes tailored to meet the unique
                            specifications of each project. Trust in our expertise and experience to
                            bring your construction visions to life, backed by the convenience and
                            efficiency of our top-notch ready mix Toronto services.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative bg-dark-50/5">
                <img
                    src="https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/IMG_1524-scaled.webp/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true"
                    className="md:absolute mb-4 md:mb-0 top-0 right-0 h-full w-full md:w-[45%] object-cover object-center"
                    alt=""
                />
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="py-10">
                        <h2 className="tracking-2 mb-4  text-2xl md:text-3xl lg:text-4xl">
                            Why Choose Us For Toronto Ready Mix?
                        </h2>
                        <div className="bar my-4" />
                        <p className="mb-3 text-dark-400 md:text-lg">
                            When it comes to Toronto Ready Mix, choosing Prime Ready Mix is an
                            assurance of unmatched quality and reliability. With years of experience
                            in the industry, we have honed our expertise to deliver concrete
                            solutions that exceed expectations. Our state-of-the-art facilities and
                            advanced mixing technology ensure that every batch of ready mix is
                            precisely formulated to meet the unique demands of your project. What
                            sets us apart is our unwavering commitment to timeliness, ensuring that
                            your concrete arrives exactly when you need it. Moreover, our team of
                            skilled professionals is dedicated to providing personalized service,
                            offering guidance and expertise throughout the process. When you choose
                            us for Toronto Ready Mix, you're not just getting concrete; you're
                            getting a partner in your project's success. Trust us to lay the
                            foundation for your vision with excellence and precision.
                        </p>
                    </div>
                </div>
            </section>

            {/* <section className="py-12 bg-indigo-50/10">
        <div className="">
          <div className="text-center mb-8">
            <h1 className="mb-6">Our Home Renovation Services In Toronto</h1>
            <p className="mb-6">Enjoy a stress-free renovation with our unique build process.</p>
            <div className="h-1 mx-auto w-40 bg-primary my-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Kitchen Renovations", features: ["Modern Makeovers", "Timeless Upgrades", "Heart of Your Home"], banner: 'https://media-content.angi.com/0c1a252a-f64f-42e4-9166-ef9870838671.jpeg?imwidth=900' },
              { name: "Bathroom Renovations", features: ["Spa-Inspired Retreats", "Family Bathrooms", "Dreams into Reality"], banner: 'https://media-content.angi.com/98dc0283-20e2-4a4f-8505-ea1f9ba93766.jpg?imwidth=260' },
              { name: "Basement Renovations", features: ["Maximize Living Space", "Add Value", "Functional & Stylish"], banner: 'https://media-content.angi.com/6db2bbc1-3be4-45ed-808d-579c7925d1f7.jpg?imwidth=260' },
              { name: "Brownstone & Townhome Renovations", features: ["Preserve Historic Charm", "Enhance Character", "Unique Expertise"], banner: 'https://media-content.angi.com/6db2bbc1-3be4-45ed-808d-579c7925d1f7.jpg?imwidth=260' },
            ].map((item, key) => {
              return (
                <Link key={key} href="/" className="block hover:no-underline group border border-dark-50/80">
                  <img src={item.banner} alt={item.banner} className="w-full max-h-52 h-full object-cover object-center grayscale group-hover:grayscale-0 duration-150" />
                  <div className="p-2 min-h-[190px] flex flex-col gap-2 justify-between">
                    <div>
                      <h6 className="mb-1">{item?.name}</h6>
                      <ul>
                        {item.features.map((e, key) => <li key={e + key} className="mb-1 text-dark-400"> <BsArrowRight className="fill-primary inline-block" /> {e}</li>)}
                      </ul>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="font-semibold group-hover:text-primary">Learn more</span> <div className="flex-grow h-[2px] bg-dark group-hover:bg-primary" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section> */}

            <ServicesSection />

            <section className="bg-dark-50/5">
                <div className="text-center mb-3 ">
                    <h2 className="tracking-2 mb-4  text-2xl md:text-3xl lg:text-4xl">
                        Why Prime Ready Mix is Your Best Choice?
                    </h2>
                    <p className="mb-3 text-dark-400 max-w-3xl mx-auto md:text-lg ">
                        Prime Ready Mix stands out as the best choice for your concrete needs due to
                        its unwavering commitment to quality, expertise, wide range of products,
                        efficient delivery, environmentally conscious practices, cost-effectiveness,
                        customization options, customer-centric approach, safety, and a proven track
                        record. Choosing Prime Ready Mix means choosing excellence in concrete
                        solutions.
                    </p>
                    <div className="bar my-4 mx-auto" />
                </div>
                <div className="relative">
                    <img
                        src="https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/blob-b6db9aa.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true"
                        className="md:absolute mb-4 md:mb-0 top-0 left-0 h-full w-full md:w-[45%] object-cover object-center"
                        alt=""
                    />
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="py-10 col-start-2">
                            {[
                                {
                                    title: "Quality Assurance",
                                    desc: "Prime Ready Mix prioritizes quality in every batch of concrete we produce. Our state-of-the-art facilities and stringent quality control measures ensure that you receive a consistent and reliable product every time.",
                                },
                                {
                                    title: "Expertise and Experience",
                                    desc: "With years of experience in the industry, Prime Ready Mix boasts a team of experts who understand the nuances of concrete production. Our knowledge enables us to tailor mixes to specific project requirements, ensuring optimal performance.",
                                },
                                {
                                    title: "Wide Range of Products",
                                    desc: "Prime Ready Mix offers a diverse range of concrete mixes designed for various applications. Whether it's for a residential, commercial, or industrial project, we have a solution to meet your specific needs.",
                                },
                                {
                                    title: "Efficient Delivery Service",
                                    desc: "Time is of the essence in construction projects. Prime Ready Mix is known for its punctual and efficient delivery service. Our well-maintained fleet of vehicles ensures that your concrete arrives on-site promptly.",
                                },
                                {
                                    title: "Environmentally Conscious Practices",
                                    desc: "Prime Ready Mix is committed to sustainable practices. Our Toronto Ready Mix team employs eco-friendly technologies and methods in our production process, minimizing our environmental footprint.",
                                },
                                {
                                    title: "Cost-Effective Solutions",
                                    desc: "Prime Ready Mix understands the importance of staying within budget. We offer competitive pricing without compromising on quality, providing cost-effective solutions for your projects.",
                                },

                                {
                                    title: "Customizable Mix Designs",
                                    desc: "Every construction project is unique, and Prime Ready Mix recognizes this. We offer customizable mix designs, allowing you to fine-tune the concrete to meet specific project requirements.",
                                },
                                {
                                    title: "Customer-Centric Approach",
                                    desc: "Customer satisfaction is a top priority for Prime Ready Mix. Our team is responsive, attentive, and always willing to go the extra mile to meet your needs and address any concerns.",
                                },
                                {
                                    title: "Safety First",
                                    desc: "Safety is paramount in construction. Prime Ready Mix adheres to strict safety standards in our operations, ensuring that both our employees and your project site remain secure.",
                                },
                                {
                                    title: "Proven Track Record",
                                    desc: "Prime Ready Mix has a solid track record of successful projects across various industries. Our satisfied clientele serves as a testament to the quality and reliability of our products and services.",
                                },
                            ].map((item, key) => (
                                <p className="mb-3 text-dark-400" key={key}>
                                    <span className="font-bold text-primary">
                                        {String(key + 1).padStart(2, 0)} -{" "}
                                    </span>{" "}
                                    <span className="font-semibold underline underline-offset-4 decoration-primary">
                                        {item?.title}
                                    </span>{" "}
                                    {item?.desc}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="py-10">
                        <h2 className="tracking-2 mb-4  text-2xl md:text-3xl lg:text-4xl">
                            Ready to start your home construction services?
                        </h2>
                        <div className="bar my-4" />
                        <p className="md:text-lg mb-3 text-dark-400">
                            Embarking on the journey of building your dream home is an exciting
                            endeavor, and finding the right construction services is a crucial step
                            toward turning your vision into reality. Our team is dedicated to
                            bringing your dreams to life, combining expertise, quality
                            craftsmanship, and a commitment to client satisfaction. With years of
                            experience in the Toronto Ready Mix industry, we understand that every
                            project is unique, and we tailor our services to suit your specific
                            needs. From the initial design phase to the final finishing touches, we
                            prioritize open communication and transparency, ensuring you're involved
                            in every decision along the way. Whether it's a cozy family home or a
                            sprawling architectural masterpiece, we have the skills, resources, and
                            passion to bring your vision to fruition. Get ready to embark on this
                            exciting journey with us, and let's start building your future, one
                            brick at a time.
                        </p>
                        <br />
                        <p>
                            <a className="btn" href={`tel:${contacts.phone}`}>
                                CALL NOW
                            </a>{" "}
                            <span>{contacts.phone}</span>
                        </p>
                    </div>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        // pagination={{
                        //     bulletActiveClass :' bg-primary opacity-100',
                        // }}
                        modules={[Autoplay, Pagination]}
                        className="w-full object-cover object-center max-h-[600px]"
                    >
                        {[
                            "https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/c3-2-1.jpeg/:/cr=t:0%25,l:31.57%25,w:68.43%25,h:100%25/rs=w:365,h:365,cg:true",
                            "https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/Burlington-Concrete-Mixer.jpeg/:/cr=t:0%25,l:1.09%25,w:75%25,h:100%25/rs=w:365,h:365,cg:true",
                            "https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/Burlington-Concrete-Mixer.jpeg/:/cr=t:0%25,l:1.09%25,w:75%25,h:100%25/rs=w:365,h:365,cg:true",
                        ].map((item, key) => (
                            <SwiperSlide key={key} className="h-60 md:h-full">
                                <img
                                    src={item}
                                    className="object-cover object-center h-full w-full"
                                    alt=""
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <BottomServiceArea />
        </main>
    );
};

export default Home;
