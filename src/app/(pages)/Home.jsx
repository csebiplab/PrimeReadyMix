"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import ServicesSection from "../../components/common/ServicesSection";
import { contacts } from "../../site/info";
import ReviewSlider from "../../components/common/ReviewSlider";
import Banner from "../../components/HomeSections/Banner";

const services = [
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
];

export const reviews = [
  {
    id: 1,
    description:
      "Prime Ready Mix exceeded all my expectations! Their concrete delivery service was prompt, the quality of the mix was outstanding, and their team was incredibly professional. I highly recommend them to anyone in need of reliable concrete services.",
    name: "Grant S. Barrett",
    location: "City A",
    rating: 5,
  },
  {
    id: 2,
    description:
      "I've used Prime Ready Mix for several projects now, and they consistently deliver exceptional service. Their attention to detail, timely deliveries, and friendly staff make them my go-to choice for concrete. You won't be disappointed!",
    name: "George P. Ortiz",
    location: "City B",
    rating: 5,
  },
  {
    id: 3,
    description:
      "Outstanding service from Prime Ready Mix! Their team is reliable, their concrete is top-notch, and they always go the extra mile to ensure customer satisfaction. I highly recommend Prime Ready Mix for all your concrete needs.",
    name: "Kelly R. Garrett",
    location: "City C",
    rating: 5,
  },
  {
    id: 4,
    description:
      "Prime Ready Mix sets the standard for excellence in the concrete industry. Their attention to detail, professionalism, and commitment to quality are unmatched. I wouldn't hesitate to recommend them to anyone looking for reliable concrete services.",
    name: "Edward K. Wise",
    location: "City D",
    rating: 5,
  },
  {
    id: 5,
    description:
      "I've had the pleasure of working with Prime Ready Mix on multiple projects, and they never disappoint. Their dedication to customer service, along with their high-quality concrete mixes, make them stand out from the rest. Prime Ready Mix is the best in the business!",
    name: "Julie W. Lord",
    location: "City E",
    rating: 5,
  },
  {
    id: 6,
    description:
      "Prime Ready Mix has been instrumental in the success of my construction projects. Their consistent delivery of top-quality concrete, coupled with their professionalism and reliability, make them my preferred choice every time. Highly recommended!",
    name: "Donna C. Weis",
    location: "City F",
    rating: 5,
  },
  {
    id: 7,
    description:
      "Prime Ready Mix deserves every bit of praise they receive. Their attention to detail, reliability, and commitment to customer satisfaction are unmatched. If you're looking for a concrete supplier you can trust, look no further than Prime Ready Mix.",
    name: "Ann J. Chaffin",
    location: "City F",
    rating: 5,
  },
  {
    id: 8,
    description:
      "I can't say enough good things about Prime Ready Mix. Their team is efficient, their concrete is top-notch, and their customer service is exceptional. I've been consistently impressed with their professionalism and reliability. Prime Ready Mix is simply the best!",
    name: "Sarah W. Bowman",
    location: "City F",
    rating: 5,
  },
  {
    id: 9,
    description:
      "Prime Ready Mix is hands down the best in the business. Their attention to detail, prompt deliveries, and excellent customer service make them a pleasure to work with. If you want quality concrete and exceptional service, look no further than Prime Ready Mix.",
    name: "Donna C. Weis",
    location: "City F",
    rating: 5,
  },
  {
    id: 10,
    description:
      "I've been using Prime Ready Mix for all my concrete needs, and they never disappoint. Their team is reliable, their concrete is high-quality, and their customer service is exceptional. I highly recommend Prime Ready Mix to anyone in need of reliable concrete services.",
    name: "Patricia W. Cook",
    location: "City F",
    rating: 5,
  },
];

const Home = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Banner content="home" />

        <div className="overflow-x-hidden">
          <section className="md:py-10 mt-10 md:mt-6">
            <div className=" flex flex-col-reverse md:flex-row gap-8 relative">
              <img
                priority="true"
                src="https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/blob-9397e44.png/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:600,h:451,cg:true/qt=q:46"
                alt=""
                className="object-cover object-center w-full h-full max-h-[320px] md:max-h-[600px]"
                width={300}
                height={300}
              />
              <div className="w-11/12 md:w-10/12 mx-auto md:mr-auto">
                <h2
                  className="font-bold text-2xl  md:text-3xl lg:text-4xl"
                  // data-aos="fade-right"
                >
                  About Prime Ready Mix Concrete Services
                </h2>
                <div className="h-1 w-40 bg-primary my-5" />
                <p className="text-dark-300 md:text-lg">
                  Prime Ready Mix is a renowned name in the construction
                  industry. We are delivering top-quality ready mix concrete
                  solutions tailored to meet the diverse needs of projects large
                  and small. With a commitment to excellence and a focus on
                  customer satisfaction, our company has established itself as a
                  trusted partner for builders, contractors, and developers
                  alike. Our state-of-the-art facilities and advanced mixing
                  technology ensure that every batch of concrete is precisely
                  formulated and consistently reliable. Whether for towering
                  skyscrapers or intricate residential developments, we pride
                  ourselves on providing a product that meets industry standards
                  and exceeds them. With a team of experienced professionals and
                  a dedication to innovation, we continue to play a pivotal role
                  in shaping the infrastructure of communities. When it comes to
                  reliable and high-performance concrete solutions, Prime Ready
                  Mix stands as a beacon of quality and reliability in the
                  Toronto Concrete industry.
                </p>
              </div>
            </div>
          </section>
          <section className="py-10 relative">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 md:w-10/12 mx-auto">
              <div className="">
                <h2
                  className="font-bold  text-2xl md:text-3xl lg:text-4xl"
                  // data-aos="fade-right"
                >
                  Trusted Mixed Concrete Services in Toronto
                </h2>
                <div className="h-1 w-40 bg-primary my-5" />
                <p className="text-dark-300 md:text-lg mb-10 ">
                  With a proven track record of delivering high-quality concrete
                  mixes tailored to meet the specific needs of each project, we
                  have established ourselves as a go-to provider in the Toronto
                  Ready Mix Concrete industry. Our team of skilled technicians
                  and state-of-the-art batching plants ensure precise and
                  consistent mixes every time. Whether it's a small residential
                  project or a large-scale commercial venture, Prime Ready Mix
                  takes pride in our prompt and efficient service, ensuring that
                  projects stay on schedule. Additionally, our commitment to
                  quality control and adherence to industry standards guarantee
                  that the concrete supplied is not only durable but also
                  environmentally sustainable. When you choose Prime Ready Mix,
                  you're not just getting concrete; you're getting a partner
                  dedicated to the success of your project.
                </p>
              </div>
            </div>
            <img
              priority="true"
              src="https://media.istockphoto.com/id/997566504/photo/cement-mixer-on-the-road.webp?b=1&s=170667a&w=0&k=20&c=nkm-6Ih8q6L6_PaA-xqRV63nADGh7xQzb9f9oLY8ImU="
              alt=""
              width={300}
              height={300}
              className="relative md:!absolute mb-4 md:mb-0 top-0 right-0 h-full w-full md:w-[45%] max-h-64 md:max-h-full object-cover object-center"
            />
          </section>

          <section className="py-10 container">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
              <img
                priority="true"
                src="https://i.ibb.co/dWmBbcP/Ready-Mix-Concreteservice.jpg"
                alt=""
                width={300}
                height={300}
                className="w-full h-full max-h-[320px] md:max-h-[600px] object-cover object-bottom"
              />
              <div className="w-11/12 md:w-10/12 mx-auto">
                <h3
                  className="font-bold  text-2xl md:text-3xl lg:text-4xl"
                  // data-aos="fade-left"
                >
                  Our Ready Mix Concrete Services
                </h3>
                <div className="h-1 w-40 bg-primary my-5" />
                <p className="text-dark-300 md:text-lg">
                  Prime Ready Mix Concrete Services offers a seamless solution
                  for all your concrete needs and{" "}
                  <a
                    href="https://readymixnearme.ca/concrete-delivery"
                    target="_blank"
                    className=" underline"
                  >
                    concrete delivery
                  </a>
                  services in GTA. With a dedicated team of skilled
                  professionals and a fleet of state-of-the-art mixing trucks,
                  we ensure that you receive the highest-quality concrete
                  precisely when and where you need it. Whether it's a small
                  residential project or a large-scale commercial undertaking,
                  we design our Toronto Ready Mix services to save you time,
                  labor, and costs associated with on-site mixing. We take pride
                  in our commitment to delivering consistent, durable, and
                  reliable{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Ready-mix_concrete"
                    target="_blank"
                    className=" underline"
                  >
                    concrete mixes
                  </a>{" "}
                  tailored to meet the unique specifications of each project.
                  Trust in our expertise and experience to bring your
                  construction visions to life, backed by the convenience and
                  efficiency of our top-notch ready mix Toronto services.
                </p>
              </div>
            </div>
          </section>

          <section className="relative bg-dark-50/5 container">
            <img
              priority="true"
              src="https://i.ibb.co/VLqLMmt/Why-Choose.jpg"
              className="md:absolute mb-4 md:mb-0 top-0 right-0 h-full w-full md:w-[50%] object-cover object-center"
              width={300}
              height={300}
              alt=""
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:pr-24">
              <div className="py-10">
                <h3
                  className="tracking-2 mb-4  text-2xl md:text-3xl lg:text-4xl"
                  // data-aos="fade-right"
                >
                  Why Choose Us For Toronto Mixed Concrete Services
                </h3>
                <div className="bar my-4" />
                <p className="mb-3 text-dark-400 md:text-lg">
                  When it comes to Toronto Ready Mix Concrete Services, choosing
                  Prime Ready Mix is an assurance of unmatched quality and
                  reliability. With years of experience in the industry, we have
                  honed our expertise to deliver concrete solutions that exceed
                  expectations. Our state-of-the-art facilities and advanced
                  mixing technology ensure that every batch of ready mix is
                  precisely formulated to meet the unique demands of your
                  project. What sets us apart is our unwavering commitment to
                  timeliness, ensuring that your concrete arrives exactly when
                  you need it. Moreover, our team of skilled professionals is
                  dedicated to providing personalized service, offering guidance
                  and expertise throughout the process. When you choose us for
                  Toronto Ready Mix Services, you're not just getting concrete;
                  you're getting a partner in your project's success. Trust us
                  to lay the foundation for your vision with excellence and
                  precision.
                </p>
              </div>
            </div>
          </section>

          <section className="py-14 container">
            <ServicesSection />
          </section>

          <section className="bg-dark-50/5">
            <div className="text-center mb-3 w-11/12 md:w-10/12 mx-auto">
              <h3 className="tracking-2 mb-4  text-2xl md:text-3xl lg:text-4xl">
                Why is Prime Ready Mix Your Best Choice?
              </h3>
              <p className="mb-3 text-dark-400 mx-auto md:text-lg text-left md:text-center">
                Prime Ready Mix stands out as the best choice for your concrete
                needs due to its unwavering commitment to quality, expertise, a
                wide range of products, efficient delivery, environmentally
                conscious practices, cost-effectiveness, customization options,
                customer-centric approach, safety, and a proven track record.
                Choosing Prime Ready Mix means choosing excellence in concrete
                solutions.
              </p>
              <div className="bar my-4 mx-auto" />
            </div>
            <div className="relative">
              <img
                priority="true"
                src="https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/blob-b6db9aa.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true"
                className="md:absolute mb-4 md:mb-0 top-0 left-0 h-full w-full md:w-[45%] object-cover object-center"
                width={300}
                height={300}
                alt=""
              />
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="py-10 col-start-2">
                  {services?.map((item, key) => (
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

          <section className="relative container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 md:w-10/12 mx-auto mt-11 mb-10">
              <div className="">
                <h5 className="tracking-2 mb-4  text-2xl md:text-3xl lg:text-4xl">
                  Ready to start your home construction services?
                </h5>
                <div className="bar my-4" />
                <p className="md:text-lg mb-3 text-dark-400">
                  Embarking on the journey of building your dream home is an
                  exciting endeavor. Finding the right construction services is
                  a crucial step toward turning your vision into reality. Our
                  team is dedicated to bringing your dreams to life, combining
                  expertise, quality craftsmanship, and a commitment to client
                  satisfaction. With years of experience in the Toronto Ready
                  Mix Concrete industry, we understand that every project is
                  unique, and we tailor our services to suit your specific
                  needs. From the initial design phase to the final finishing
                  touches, we prioritize open communication and transparency,
                  ensuring you're involved in every decision along the way.
                  Whether it's a cozy family home or a sprawling architectural
                  masterpiece, we have the skills, resources, and passion to
                  bring your vision to fruition. Get ready to embark on this
                  exciting journey with us. And let's start building your
                  future, one brick at a time.
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
                  <img
                    priority="true"
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

          <section className="py-10">
            <div className="">
              <h2 className="text-5xl font-semibold mb-4">Reviews</h2>
              <p className="text-xl font-medium mb-3 ml-1">
                Here’s what to expect when you hire us as your Ready Mix
                contractor in Toronto.
              </p>
              <div className="mb-4 h-1 w-40 bg-primary" />
              <ReviewSlider reviews={reviews} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
