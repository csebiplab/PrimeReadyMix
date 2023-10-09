"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import ServicesSection from "../components/common/ServicesSection";
import { contacts } from "../site/info";
import DialogComponent from "../components/common/DialogComponent";
import Image from "next/image";

const Home = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <main className="">
            <section className="relative md:h-[40rem] flex flex-col md:flex-row items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 md:w-10/12 mx-auto">
                    <div className="mt-11">
                        <h1 className="font-bold text-4xl mb-1 leading-tight text-center md:text-left">
                            Ready Mix & <br />
                            Concrete Delivery, <br />
                            Toronto Ready Mix
                        </h1>
                        <h2 className="text-dark-500 mt-7 md:text-2xl text-[18px] font-semibold md:font-semibold leading-6 text-center md:text-left">
                            When it comes to reliable and trusted ready mix services in Toronto,
                            there is no better choice than Prime Ready Mix.
                        </h2>
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
                            <DialogComponent open={open} handler={handleOpen} setOpen={setOpen} />
                        </div>

                        <br />
                    </div>
                </div>
                <section className="md:hidden">
                    <Image
                        priority
                        src={"/prime-readymix-banner.png"}
                        alt="prime-ready-mix-banner"
                        width={500}
                        height={500}
                        className="w-full h-full"
                    />
                </section>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    modules={[Autoplay]}
                    className="relative md:!absolute mb-4 md:mb-0 top-0 right-0 h-full w-full md:w-[45%] max-h-64 md:max-h-full object-cover object-center"
                >
                    {[
                        "https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/blob-5fe5952.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true",
                        "https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/blob-b6db9aa.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true",
                        "https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/blob-dce5594.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true",
                    ].map((item, key) => (
                        <SwiperSlide key={key} className="h-60 md:h-full">
                            <Image
                                priority
                                src={item}
                                className="object-cover object-center h-full w-full"
                                alt=""
                                width={300}
                                height={300}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="md:py-10">
                <div className=" flex flex-col-reverse md:flex-row gap-8 relative">
                    <Image
                        priority
                        src="https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/blob-9397e44.png/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:600,h:451,cg:true/qt=q:46"
                        alt=""
                        className="object-cover object-center w-full h-full max-h-[320px] md:max-h-[600px]"
                        width={300}
                        height={300}
                    />
                    <div className="w-11/12 md:w-10/12 mx-auto md:mr-auto">
                        <h2 className="font-bold text-2xl  md:text-3xl lg:text-4xl">
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
                    </div>
                </div>
            </section>
            <section className="py-10 relative">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 md:w-10/12 mx-auto">
                    <div className="">
                        <h2 className="font-bold  text-2xl md:text-3xl lg:text-4xl">
                            Trusted Ready Mix Services in Toronto
                        </h2>
                        <div className="h-1 w-40 bg-primary my-5" />
                        <p className="text-dark-300 md:text-lg mb-10 ">
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
                </div>
                <Image
                    priority
                    src="https://media.istockphoto.com/id/997566504/photo/cement-mixer-on-the-road.webp?b=1&s=170667a&w=0&k=20&c=nkm-6Ih8q6L6_PaA-xqRV63nADGh7xQzb9f9oLY8ImU="
                    alt=""
                    width={300}
                    height={300}
                    className="relative md:!absolute mb-4 md:mb-0 top-0 right-0 h-full w-full md:w-[45%] max-h-64 md:max-h-full object-cover object-center"
                />
            </section>
            <section className="py-10">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Image
                        priority
                        src="https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/blob-9397e44.png/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:600,h:451,cg:true/qt=q:46"
                        alt=""
                        width={300}
                        height={300}
                        className="w-full h-full max-h-[320px] md:max-h-[600px] object-cover object-bottom"
                    />
                    <div className="w-11/12 md:w-10/12 mx-auto">
                        <h3 className="font-bold  text-2xl md:text-3xl lg:text-4xl">
                            Our Ready Mix Services
                        </h3>
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
                <Image
                    priority
                    src="https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/IMG_1524-scaled.webp/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true"
                    className="md:absolute mb-4 md:mb-0 top-0 right-0 h-full w-full md:w-[45%] object-cover object-center"
                    width={300}
                    height={300}
                    alt=""
                />
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 md:w-10/12 mx-auto">
                    <div className="py-10">
                        <h3 className="tracking-2 mb-4  text-2xl md:text-3xl lg:text-4xl ">
                            Why Choose Us For Toronto Mixed Concrete Services?
                        </h3>
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

            <ServicesSection />

            <section className="bg-dark-50/5">
                <div className="text-center mb-3 w-11/12 md:w-10/12 mx-auto">
                    <h3 className="tracking-2 mb-4  text-2xl md:text-3xl lg:text-4xl">
                        Why is Prime Ready Mix Your Best Choice?
                    </h3>
                    <p className="mb-3 text-dark-400 mx-auto md:text-lg text-left md:text-center">
                        Prime Ready Mix stands out as the best choice for your concrete needs due to
                        its unwavering commitment to quality, expertise, a wide range of products,
                        efficient delivery, environmentally conscious practices, cost-effectiveness,
                        customization options, customer-centric approach, safety, and a proven track
                        record. Choosing Prime Ready Mix means choosing excellence in concrete
                        solutions. 01 - Quality Assurance: Prime Ready Mix prioritizes quality in
                        every batch of concrete we produce. Our state-of-the-art facilities and
                        stringent quality control measures ensure that you receive a consistent and
                        reliable product every time. 02 - Expertise and Experience: With years of
                        experience in the industry, Prime Ready Mix boasts a team of experts. They
                        understand the nuances of concrete production. Our knowledge enables us to
                        tailor mixes to specific project requirements, ensuring optimal performance.
                        03 - Wide Range of Products: Prime Ready Mix offers a diverse range of
                        concrete mixes designed for various applications. Whether it's for a
                        residential, commercial, or industrial project, we have a solution to meet
                        your specific needs. 04 - Efficient Delivery Service: Time is of the essence
                        in construction projects. Everyone knows Prime Ready Mix for its punctual
                        and efficient delivery service. Our well-maintained fleet of vehicles
                        ensures that your concrete arrives on-site promptly. 05 - Environmentally
                        Conscious Practices: Prime Ready Mix is committed to sustainable practices.
                        Our Toronto Ready Mix Concrete team employs eco-friendly technologies and
                        methods in our production process, minimizing our environmental footprint.
                        06 - Cost-Effective Solutions: Prime Ready Mix understands the importance of
                        staying within budget. We offer competitive pricing without compromising on
                        quality, providing cost-effective solutions for your projects. 07 -
                        Customizable Mix Designs: Every construction project is unique, and Prime
                        Ready Mix recognizes this. We offer customizable mix designs, allowing you
                        to fine-tune the concrete to meet specific project requirements. Ready to
                        start your home construction services? Embarking on the journey of building
                        your dream home is an exciting endeavor. Finding the right construction
                        services is a crucial step toward turning your vision into reality. Our team
                        is dedicated to bringing your dreams to life, combining expertise, quality
                        craftsmanship, and a commitment to client satisfaction. With years of
                        experience in the Toronto Ready Mix Concrete industry, we understand that
                        every project is unique, and we tailor our services to suit your specific
                        needs. From the initial design phase to the final finishing touches, we
                        prioritize open communication and transparency, ensuring you're involved in
                        every decision along the way. Whether it's a cozy family home or a sprawling
                        architectural masterpiece, we have the skills, resources, and passion to
                        bring your vision to fruition. Get ready to embark on this exciting journey
                        with us. And let's start building your future, one brick at a time.
                    </p>
                    <div className="bar my-4 mx-auto" />
                </div>
                <div className="relative">
                    <Image
                        priority
                        src="https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/blob-b6db9aa.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true"
                        className="md:absolute mb-4 md:mb-0 top-0 left-0 h-full w-full md:w-[45%] object-cover object-center"
                        width={300}
                        height={300}
                        alt=""
                    />
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="py-10 col-start-2">
                            {[
                                {
                                    title: "Quality Assurance",
                                    desc: "Prime Ready Mix prioritizes quality in every batch of concrete we produce. Our state-of-the-art facilities and stringent quality control measures ensure that you receive a consistent and reliable product every time",
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

            <section className="relative ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 md:w-10/12 mx-auto mt-11 mb-10">
                    <div className="">
                        <h5 className="tracking-2 mb-4  text-2xl md:text-3xl lg:text-4xl">
                            Ready to start your home construction services?
                        </h5>
                        <div className="bar my-4" />
                        <p className="md:text-lg mb-3 text-dark-400">
                            Embarking on the journey of building your dream home is an exciting
                            endeavor. Finding the right construction services is a crucial step
                            toward turning your vision into reality. Our team is dedicated to
                            bringing your dreams to life, combining expertise, quality
                            craftsmanship, and a commitment to client satisfaction. With years of
                            experience in the Toronto Ready Mix Concrete industry, we understand
                            that every project is unique, and we tailor our services to suit your
                            specific needs. From the initial design phase to the final finishing
                            touches, we prioritize open communication and transparency, ensuring
                            you're involved in every decision along the way. Whether it's a cozy
                            family home or a sprawling architectural masterpiece, we have the
                            skills, resources, and passion to bring your vision to fruition. Get
                            ready to embark on this exciting journey with us. And let's start
                            building your future, one brick at a time.
                        </p>
                        <br />
                        <p>
                            <a className="btn" href={`tel:${contacts.phone}`}>
                                CALL NOW
                            </a>{" "}
                        </p>
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
                    className="relative md:!absolute mb-4 md:mb-0 top-0 right-0 h-full w-full md:w-[45%] max-h-64 md:max-h-full object-cover object-center"
                >
                    {[
                        "https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/c3-2-1.jpeg/:/cr=t:0%25,l:31.57%25,w:68.43%25,h:100%25/rs=w:365,h:365,cg:true",
                        "https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/Burlington-Concrete-Mixer.jpeg/:/cr=t:0%25,l:1.09%25,w:75%25,h:100%25/rs=w:365,h:365,cg:true",
                        "https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/Burlington-Concrete-Mixer.jpeg/:/cr=t:0%25,l:1.09%25,w:75%25,h:100%25/rs=w:365,h:365,cg:true",
                    ].map((item, key) => (
                        <SwiperSlide key={key} className="h-60 md:h-full">
                            <Image
                                priority
                                src={item}
                                className="object-cover object-center h-full w-full"
                                alt=""
                                width={300}
                                height={300}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </main>
    );
};

export default Home;
