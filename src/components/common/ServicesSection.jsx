const ServicesSection = () => {
    return (
        <section className="py-14">
            <div className="w-11/12 md:w-10/12 mx-auto">
                <div className="max-w-4xl text-center mx-auto">
                    <h4 className="mb-4  text-3xl md:text-4xl lg:text-5xl">
                        Our Ready Mix Concrete Services Process
                    </h4>
                    <p className="md:text-lg lg:text-xl font-medium mb-3">
                        Our Toronto Ready Mix Concrete Services Process is designed to ensure a
                        seamless and reliable experience for our customers, from initial
                        consultation to project completion. We take pride in delivering high-quality
                        concrete that meets the unique demands of your construction project.
                    </p>
                    <div className="mx-auto mb-4 h-1 w-40 bg-primary" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
                    {[
                        {
                            title: "Initial consultation",
                            desc: "Our process begins with an initial consultation where we discuss your specific concrete needs. This includes the type of project, required strength, and volume of concrete, as well as any special requirements.",
                        },
                        {
                            title: "Site visit and assessment",
                            desc: "After the consultation, our team conducts a thorough site visit to assess the project location. This step helps us understand any logistical challenges, access points, and environmental considerations.",
                        },
                        {
                            title: "Custom Mix Design",
                            desc: "Based on the project requirements and site assessment, our experts create a custom mix design. This ensures that the concrete meets the specific needs of your project, including factors like durability, strength, and workability.",
                        },
                        {
                            title: "Order placement",
                            desc: "Once the mix design is finalized, you can place an order for the ready mix concrete. Our customer service team will assist you in determining the right quantity for your project.",
                        },
                        {
                            title: "Batching and Mixing",
                            desc: "On the scheduled delivery date, our state-of-the-art batching plant precisely combines the raw materials according to the custom mix design. This process ensures the consistent quality and strength of the concrete.",
                        },
                        {
                            title: "Transportation",
                            desc: "The freshly mixed concrete is loaded onto our specialized transit mixers equipped with rotating drums to prevent segregation during transportation.",
                        },
                        {
                            title: "Prompt delivery",
                            desc: "We prioritize punctuality and ensure that the ready mix concrete is delivered to your project site on time. Our drivers are trained to handle various site conditions safely.",
                        },
                        {
                            title: "Pouring and Placement",
                            desc: "Upon arrival, our experienced team coordinates with your construction crew to efficiently pour and place the concrete. We pay close attention to proper leveling and finishing.",
                        },
                        // {
                        //     title: "Curing and Quality Assurance",
                        //     desc: "After placement, we oversee the curing process to ensure optimal strength development. Our quality control team conducts tests to verify that the concrete meets specified standards.",
                        // },
                        // {
                        //     title: "Post-Delivery Support",
                        //     desc: "We believe in providing excellent customer service even after delivery. If you have any questions or require additional support, our Toronto Ready Mix team is always available to assist you.",
                        // },
                        // {
                        //     title: "Feedback and Follow-Up",
                        //     desc: "We value your feedback on our services. After the project is completed, we may follow up to gather your input, which will help us continuously improve our processes.",
                        // },
                        // {
                        //     title: "Documentation and Invoicing",
                        //     desc: "We provide detailed documentation of the delivered concrete, including batch records and quality test results. Our billing process is transparent and ensures accuracy.",
                        // },
                        // {
                        //     title: "Environmental Considerations",
                        //     desc: "Throughout our process, we adhere to environmentally responsible practices, including recycling excess concrete and minimizing waste.",
                        // },
                        // {
                        //     title: "Project Completion",
                        //     desc: "Once the concrete is in place and the project is finished, we ensure that the site is cleaned up and any leftover materials are properly disposed of.",
                        // },
                    ].map((item, key) => (
                        <figure className="group p-3 md:aspect-square border-b-2 border-b-gray-400 hover:border-b-primary duration-150 md:text-center flex flex-col md:justify-center md:items-center">
                            {/* <img src={item.icon} alt="" className="w-20 mb-8 mx-auto" /> */}
                            <p className="text-dark group-hover:text-primary mb-2 md:mb-4  text-xl md:text-2xl lg:text-3xl">
                                {item.title}
                            </p>
                            <p className="text-gray-700 md:text-xl">{item.desc}</p>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
