import { IoCaretDown } from "react-icons/io5";
import "./Faq.css";
import HeadingIcon from "@/utils/HeadingIcon";
import { headingTexts } from "@/utils/heading-text";


const QAPoolInstallationQuestionsNAns = [
  {
    id: 1,
    question: "What is ready-mix concrete?",
    answer:
      "Construction sites receive ready-mix concrete, a pre-mixed blend of cement, aggregates, water, and other additives. Upon delivery, it meets specific project requirements and is ready for immediate use.",
  },
  {
    id: 2,
    question: "What kinds of projects can you use ready-mix concrete for?",
    answer:
      "A variety of projects, including foundations, driveways, sidewalks, patios, parking lots, industrial floors, and large commercial or residential buildings, can use ready-mix concrete.",
  },
  {
    id: 3,
    question: "How do I know how much concrete I need?",
    answer:
      "Our team at Prime Ready Mix can assist you in calculating the amount of concrete needed for your project. Simply provide the dimensions (length, width, and depth) of the area, and we'll give you an accurate estimate.",
  },
  {
    id: 4,
    question: "What strength of concrete are you offering?",
    answer:
      "We offer a wide range of concrete strengths, from standard grades for residential use to high-strength concrete for commercial and industrial applications. Let us know the specific requirements of your project, and we will provide the right mix.",
  },
  {
    id: 5,
    question: "Can you provide concrete for smaller projects?",
    answer:
      "Yes! At Prime Ready Mix, we cater to both large and small projects. Whether you need concrete for a small patio or a large commercial project, we can customize our services to suit your needs.",
  },
  {
    id: 6,
    question: "How does Prime Ready Mix ensure the quality of your concrete?",
    answer:
      "Our company strictly adheres to industry standards and uses high-quality materials. We carefully mix each batch to ensure consistency and performance, and we conduct routine quality control tests to guarantee the strength and durability of the concrete.",
  },
  {
    id: 7,
    question: "Is there a minimum order size for delivery?",
    answer:
      "Yes, we do have a minimum order size for delivery. Please contact us for details, as the minimum can vary depending on your location and project requirements.",
  },
  {
    id: 8,
    question: "Is there any training available for contractors using your products?",
    answer:
      "Yes, we offer training and informational sessions for contractors to ensure they understand how to use our products effectively. This includes guidance on mixing, pouring, and finishing techniques.",
  },
  {
    id: 9,
    question: "Can you provide special concrete mixes?",
    answer:
      "Absolutely! We can create custom concrete mixes that include specific additives for special projects. Whether you need fibre reinforcement, waterproofing additives, or coloured concrete, we can accommodate your requests.",
  },
  {
    id: 10,
    question: "How long will the concrete stay workable after delivery?",
    answer:
      "Typically, ready-mix concrete remains workable for approximately 90 minutes after mixing, although this duration may vary depending on the specific mix and weather conditions. We recommend having your team ready to pour as soon as the delivery arrives.",
  },
  {
    id: 11,
    question: "How can I place an order with Prime Ready Mix?",
    answer:
      "You can place an order by calling our office, filling out a request form on our website, or contacting us directly via email. Our team will assist you in selecting the right mix and scheduling your delivery.",
  },
  {
    id: 12,
    question: "What payment methods do you accept?",
    answer:
      "Our company accepts various payment methods, including credit/debit cards, bank transfers, and cash. For larger projects, we can discuss financing options if needed.",
  },
  {
    id: 13,
    question: "Do you have a loyalty program for returning customers?",
    answer:
      "Yes, we value our returning customers and offer a loyalty program that provides discounts and perks for frequent orders. Contact us for more details on how you can benefit from our loyalty rewards.",
  },
  {
    id: 14,
    question: "Can you assist with kitchen layouts and flow?",
    answer:
      "Absolutely! Our design team is skilled in optimizing kitchen layouts for functionality and flow, ensuring that your new kitchen is beautiful and practical.",
  },
  {
    id: 15,
    question: "What is the curing time for ready-mix concrete?",
    answer:
      "The curing time for ready-mix concrete typically ranges from 7 to 28 days, depending on the mix design and environmental conditions. While the surface may appear dry after a few hours, it's essential to allow adequate time for the concrete to reach its full strength.",
  },
  {
    id: 16,
    question: "How should I maintain my concrete after pouring it?",
    answer:
      "Proper care is critical for your concrete's longevity. We recommend keeping the surface moist for at least 7 days, avoiding heavy traffic until fully cured, and applying a sealant if necessary. Our team can provide specific care instructions for your project.",
  },
  {
    id: 17,
    question: "What should I do if I experience issues with the concrete?",
    answer:
      "If you encounter any issues with the concrete, please contact us immediately. Our commitment to customer satisfaction means we will collaborate with you to resolve any issues, be they related to quality or installation.",
  },
  {
    id: 18,
    question: "Do you offer delivery outside of your local area?",
    answer:
      "We primarily serve the local area, but we can accommodate deliveries to nearby regions depending on the order size and logistics. ",
  },
  {
    id: 19,
    question: "What environmental practices does Prime Ready Mix follow?",
    answer:
      "At Prime Ready Mix, we are committed to sustainability. We utilize eco-friendly materials when possible, recycle excess concrete, and employ practices that minimize our carbon footprint during production and delivery.",
  },
  {
    id: 20,
    question: "How do temperature and weather affect concrete placement?",
    answer:
      "Temperature and weather can have a significant impact on concrete's curing and strength. High temperatures can cause rapid evaporation, leading to surface cracking, while cold temperatures can slow down the curing process. Our team can provide recommendations for optimal pouring conditions and how to mitigate weather-related issues.",
  },
  {
    id: 21,
    question: "Do you provide any concrete certifications or guarantees?",
    answer:
      "Yes, all our concrete mixes meet industry standards, and we provide certifications upon request. We stand behind the quality of our products and offer a satisfaction guarantee to ensure your project's success.",
  },
  {
    id: 22,
    question: "What happens if there's a problem with the delivery?",
    answer:
      "In the unlikely event of a delivery issue, such as delays or incorrect mixes, please contact us immediately. We strive to resolve any problems quickly and ensure your project remains on schedule.",
  },
  {
    id: 23,
    question: "What is the best time of year to pour concrete?",
    answer:
      "The best time to pour concrete is typically in mild weather, avoiding extreme temperatures. However, we can provide guidance on pouring in different seasons.",
  },
  {
    id: 24,
    question: "Can I modify the colour of my concrete?",
    answer:
      "Yes, we offer a variety of colour options for your concrete. You can choose from standard colours or request custom shades to match your design preferences. Speak to our team about your colour options when placing your order.",
  },
  {
    id: 25,
    question: "What is the lifespan of ready-mix concrete?",
    answer:
      "When properly mixed, placed, and cured, ready-mix concrete can last for decades, often 30 years or more, depending on the environmental conditions and use.",
  },
  {
    id: 26,
    question: "How does Prime Ready Mix compare to competitors?",
    answer:
      "At Prime Ready Mix, we pride ourselves on our commitment to quality, customer service, and competitive pricing. Our experienced team works closely with clients to ensure satisfaction, and our state-of-the-art mixing facility produces consistent, high-quality concrete.",
  }
];

const Faq = () => {
  return (
    <div className="container padding__top">
      <div>
        <div className="flex flex-col items-center justify-center">
        <HeadingIcon text={headingTexts.faq__headingIconText}/>

          <div>
            <h2 className="ext-[25px] md:text-[27px] lg:text-[29px] xl:text-[30px] 2xl:text-[32px] 3xl:text-[33px] 4xl:text-[34px] 5xl:text-[36px] font-bold leading-[30px] md:leading-[40px] text-dark text-center mt-[5px]">
            Frequently Asked Questions (FAQ)
            </h2>
          </div>
        </div>
      </div>
      <div className="pt-[15px]">
        {QAPoolInstallationQuestionsNAns.map((ques, idx) => (
          <div key={idx}>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-primary  py-3 px-5 5xl:py-[14px] 5xl:px-8 border-2">
                <p className="font-family-secondary text-white text-sm lg:text-sm xl:text-base 5xl:text-lg 5xl:leading-[22px] font-bold">
                  {ques.question}
                </p>

                <div className="white-icon">
                  <IoCaretDown className="white-icon" fill="white" />
                </div>
              </summary>

              <p className="font-family-secondary py-3 pl-4 pr-8 lg:py-4 lg:px-6 5xl:py-5 5xl:px-7  border-2 text-black text-sm lg:text-sm 5xl:text-base font-normal 5xl:leading-[30px]">
                {ques.answer}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
