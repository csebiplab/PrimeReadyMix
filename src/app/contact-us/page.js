import { BsCheck2Square } from "react-icons/bs";
import BottomServiceArea from "../../components/common/BottomServiceArea";
import ReviewSlider from "../../components/common/ReviewSlider";
import ServicesSection from "../../components/common/ServicesSection";
import { site_info } from "../../site/info";
import ProjectFrom from "./ProjectFrom";

export default function contact_us() {
  return (
    <main>
      <section className="py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h1 className="capitalize mb-5">Contact {site_info.name}</h1>
            <p className="text-xl">
              You’re on the way to the easiest renovation ever.
            </p>
            <div className="my-6 mb-14 h-[2px] w-40 bg-primary" />
            {[
              "All fixtures, materials, and labor included",
              "Built by a local, vetted contractor",
              "4 weeks average build",
            ].map((item, key) => (
              <figure
                key={key}
                className="flex gap-4 items-center mb-4 text-xl font-medium"
              >
                <BsCheck2Square className="h-8 w-8 fill-primary" />
                <p className="flex-grow">{item}</p>
              </figure>
            ))}
          </div>
          <div>
            <ProjectFrom />
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container">
          <h1 className="mb-4">Reviews</h1>
          <p className="text-xl font-medium mb-3">
            Here’s what to expect when you hire us as your bathroom contractor
            in Toronto.
          </p>
          <div className="mb-4 h-1 w-40 bg-primary" />
          <ReviewSlider />
        </div>
      </section>
      <ServicesSection />
      
      <BottomServiceArea />
    </main>
  );
}
