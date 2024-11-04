import { headingTexts } from '@/utils/heading-text';
import HeadingIcon from '@/utils/HeadingIcon';
import Image from 'next/image';
import React from 'react';

const Equipped = () => {
    return (
        <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[30px] 5xl:gap-[37px]'>
                <div className='order-2 md:col-span-1'>
                    <Image src="/homePage/equipped.png" alt='equipped image' width={905} height={675}/>
                </div>
                <div className='order-1 md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center'>
                        <HeadingIcon text={headingTexts.equipped__headingIconText}/>
                    </div>
                    <div>
                        <h2 className='text-[25px] md:text-[27px] lg:text-[29px] xl:text-[30px] 2xl:text-[32px] 3xl:text-[33px] 4xl:text-[34px] 5xl:text-[36px] font-bold leading-[30px] md:leading-[40px] text-dark text-center md:text-left mt-[5px]'>Well-Equipped Concrete Specialist in Toronto</h2>
                        <p className='text-lg text-dark-300 font-normal leading-[35px] text-center md:text-left mt-[10px]'>Prime Ready Mix is a trusted concrete specialist in Toronto, known for delivering top-quality ready-mix concrete solutions. Equipped with advanced machinery and an experienced team, we cater to residential, commercial, and industrial projects, ensuring timely and efficient service. Whether it's for foundation work, driveways, or large-scale construction, Prime Ready Mix provides the expertise and reliable materials needed to meet any concrete requirement. Our commitment to precision, durability, and customer satisfaction sets us apart as the go-to choice for concrete services in Toronto.
                        At Prime Ready Mix, we understand the importance of using the right concrete mix for each project. Our well-equipped fleet and state-of-the-art batching plant allow us to produce custom concrete mixes tailored to the specific needs of your construction. Our team of concrete specialists works closely with you to provide expert advice and solutions, ensuring that your project runs smoothly from start to finish. We take pride in our commitment to safety, environmental responsibility, and superior customer service, making us a leading concrete supplier in Toronto.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Equipped;