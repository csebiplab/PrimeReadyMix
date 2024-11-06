import { IoCaretDown } from "react-icons/io5";
import "./Faq.css";
import HeadingIcon from "@/utils/HeadingIcon";
import { headingTexts } from "@/utils/heading-text";


const QAPoolInstallationQuestionsNAns = [
  {
    id: 1,
    question: "Do I need a design plan before starting the remodel?",
    answer:
      "While a design plan is beneficial, it's not mandatory. Our experienced designers can work with you to create a plan that meets your needs, even if you're starting with just an idea.",
  },
  {
    id: 2,
    question: "What types of materials do you recommend for cabinets and countertops?",
    answer:
      "We offer a range of materials, including solid wood, laminate, granite, quartz, and more. Our team can guide you in selecting the best materials based on your style, durability needs, and budget.",
  },
  {
    id: 3,
    question: "Will you handle all the permits and inspections?",
    answer:
      "Yes, our team will manage all necessary permits and inspections required for your kitchen remodel, ensuring compliance with local regulations.",
  },
  {
    id: 4,
    question: "What should I expect during the remodeling process?",
    answer:
      "You can expect clear communication, regular updates, and a dedicated project manager overseeing every aspect of the remodel to ensure everything runs smoothly.",
  },
  {
    id: 5,
    question: "Can you help with design ideas and inspiration?",
    answer:
      "Absolutely! Our design team is here to provide inspiration and guidance, helping you explore various styles and layouts that will work best for your kitchen.",
  },
  {
    id: 6,
    question: "What styles of kitchens do you specialize in?",
    answer:
      "We specialize in various styles, including modern, traditional, farmhouse, contemporary, and transitional designs. Our team can help you choose a style that reflects your personality and complements your home.",
  },
  {
    id: 7,
    question: "How do you ensure quality craftsmanship?",
    answer:
      "We maintain high standards of quality by employing skilled craftsmen and using top-quality materials. Our project managers oversee every detail to ensure the work meets our rigorous quality criteria.",
  },
  {
    id: 8,
    question: "Can I make changes during the remodeling process?",
    answer:
      "While we encourage careful planning before starting, we understand that ideas can evolve. We'll do our best to accommodate changes, but it's important to discuss any modifications with us as soon as possible to avoid delays.",
  },
  {
    id: 9,
    question: "What payment options do you offer?",
    answer:
      "We provide various payment options to accommodate your needs, including financing solutions to help you manage your budget effectively.",
  },
  {
    id: 10,
    question: "How can I communicate with you during the project?",
    answer:
      "You'll have a dedicated project manager who will serve as your main point of contact throughout the remodel. We encourage open communication and will provide regular updates via your preferred method, whether it's phone, email, or in-person meetings.",
  },
  {
    id: 11,
    question: "What happens if I encounter issues after the remodel is complete?",
    answer:
      "Your satisfaction is our priority. If any issues arise after project completion, please reach out to us immediately. We're committed to addressing any concerns promptly and ensuring that you're completely happy with your new kitchen.",
  },
  {
    id: 12,
    question: "Do you offer eco-friendly options for kitchen remodels?",
    answer:
      "Yes! We can incorporate eco-friendly materials and energy-efficient appliances into your remodel. Our team can help you explore sustainable options that align with your environmental goals.",
  },
  {
    id: 13,
    question: "How do I prepare my kitchen for remodeling?",
    answer:
      "We'll provide you with a checklist to help you prepare your kitchen for remodeling. This may include clearing out cabinets, relocating small appliances, and ensuring access to work areas.",
  },
  {
    id: 14,
    question: "Can you assist with kitchen layouts and flow?",
    answer:
      "Absolutely! Our design team is skilled in optimizing kitchen layouts for functionality and flow, ensuring that your new kitchen is beautiful and practical.",
  },
  {
    id: 15,
    question: "What makes Glitz Floors & More different from other remodelers?",
    answer:
      "We prioritize customer satisfaction, quality craftsmanship, and personalized service. Our experienced team is dedicated to understanding your needs and delivering a kitchen remodel that exceeds your expectations.",
  },
  {
    id: 16,
    question: "Can you provide references or examples of past work?",
    answer:
      "Yes, we can provide references and a portfolio of our previous kitchen remodel projects. This will give you a better idea of our craftsmanship and design capabilities.",
  },
  {
    id: 17,
    question: "What is your process for selecting materials?",
    answer:
      "We guide you through the selection process by discussing your preferences, budget, and functionality needs. We can recommend materials that fit your vision while ensuring quality and durability.",
  },
  {
    id: 18,
    question: "Is it necessary to have a design consultation before starting?",
    answer:
      "While a design consultation is highly beneficial, it's not mandatory. We can work with you to create a design as part of the remodeling process if you prefer.",
  },
  {
    id: 19,
    question: "Do you assist with kitchen appliance selection?",
    answer:
      "Yes! We can help you choose the right appliances that fit your style, budget, and needs, ensuring they work well with the overall kitchen design.",
  },
  {
    id: 20,
    question: "How do you ensure my project stays within budget?",
    answer:
      "We work closely with you to establish a clear budget from the start. Our team keeps track of expenses throughout the project and communicates any potential changes to ensure you stay on budget.",
  },
  {
    id: 21,
    question: "Will I need to make decisions quickly during the remodel?",
    answer:
      "While some decisions may need to be made promptly, we'll provide you with a clear timeline of when choices are needed, allowing you to feel confident in your selections without feeling rushed.",
  },
  {
    id: 22,
    question: "What are the benefits of working with Glitz Floors & More?",
    answer:
      "Working with Glitz Floors & More means you receive personalized service from a team that understands the community. We are familiar with local styles, regulations, and suppliers, enhancing the overall remodeling experience.",
  },
  {
    id: 23,
    question: "How can I maintain my new kitchen after the remodel?",
    answer:
      "We provide maintenance tips and guidance on how to care for your new kitchen, including cleaning recommendations for various materials and appliances to keep your space looking great for years to come.",
  },
  {
    id: 24,
    question: "How do I get started with my kitchen remodel?",
    answer:
      "Getting started is easy! Simply contact us to schedule a consultation. We'll discuss your ideas, goals, and budget, laying the groundwork for your exciting kitchen transformation.",
  },
  {
    id: 25,
    question: "Can I see 3D renderings of my kitchen design?",
    answer:
      "Yes! We offer 3D renderings of your kitchen design, allowing you to visualize the layout and features before any work begins. This helps you feel confident in your choices.",
  },
  {
    id: 26,
    question: "What if I have specific design inspirations or styles in mind?",
    answer:
      "We encourage you to share any design inspirations or styles you love! Our team will work with you to incorporate those elements into your kitchen remodel.",
  },
  {
    id: 27,
    question: "Are you licensed and insured?",
    answer:
      "Absolutely! Glitz Floors & More is fully licensed and insured, giving you peace of mind that your project is in safe hands.",
  },
  {
    id: 28,
    question: "How do you handle waste and cleanup during the remodel?",
    answer:
      "We prioritize cleanliness throughout the project, implementing waste management strategies to keep your home tidy. Our team will handle cleanup at the end of each workday and the project's completion.",
  },
  {
    id: 29,
    question: "What if I have an unusual kitchen layout or small space?",
    answer:
      "No project is too challenging for us! Our team specializes in maximizing space and optimizing layouts, ensuring that even unusual or small kitchens can be functional and beautiful.",
  },
  {
    id: 30,
    question: "How do you ensure safety during the remodeling process?",
    answer:
      "Safety is a top priority for us. Our team follows strict safety protocols and regulations to protect our workers and your home throughout the renovation process.",
  },
  {
    id: 31,
    question: "What should I do if I have specific health or accessibility needs?",
    answer:
      "We're committed to creating kitchens that meet all your needs. If you have specific health or accessibility requirements, please share them with us so we can tailor the design accordingly.",
  }
];

const Faq = () => {
  return (
    <div className="container padding__top">
      <div>
        <div className="flex flex-col items-center justify-center">
        <HeadingIcon text={headingTexts.faq__headingIconText}/>

          <div>
            <h3 className="font-family-secondary text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px] 5xl:text-[44px] font-bold text-secondary leading-normal text-center">
            FAQ of Kitchen Remodeling Services
            </h3>
            <p className="text-lg font-normal text-secondary-50 text-center leading-[40px]">If you have any more questions or need further assistance, please don't hesitate to reach out. We look forward to helping you create the kitchen of your dreams!</p>
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
