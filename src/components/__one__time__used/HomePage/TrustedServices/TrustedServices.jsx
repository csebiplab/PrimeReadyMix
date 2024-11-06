import { headingTexts } from '@/utils/heading-text';
import HeadingIcon from '@/utils/HeadingIcon';
import Image from 'next/image';
import React from 'react';

const TrustedServices = () => {
    return (
        <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[30px] 5xl:gap-[37px]'>
                <div className='order-2 md:col-span-1'>
                    <Image src="/homePage/trustUs.png" alt='trusted services image' width={903} height={525}/>
                </div>
                <div className='order-1 md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center'>
                        <HeadingIcon text={headingTexts.trustedServices__headingIconText}/>
                    </div>
                    <div>
                        <h2 className='text-[25px] md:text-[27px] lg:text-[29px] xl:text-[30px] 2xl:text-[32px] 3xl:text-[33px] 4xl:text-[34px] 5xl:text-[36px] font-bold leading-[30px] md:leading-[40px] text-dark text-center md:text-left mt-[5px]'>Trusted Mixed Concrete Services 
                        in Toronto</h2>
                        <p className='text-lg text-dark-300 font-normal leading-[35px] text-center md:text-left mt-[10px]'>With a proven track record of delivering high-quality concrete mixes tailored to meet the specific needs of each project, we have established ourselves as a go-to provider in the Toronto ready mix concrete industry. Our team of skilled technicians and state-of-the-art batching plants ensure precise and consistent mixes every time. Whether it's a small residential project or a large-scale commercial venture, our ready-mix company takes pride in our prompt and efficient service. Additionally, our commitment to quality control and adherence to industry standards guarantees that the concrete supplied is not only durable but also environmentally sustainable. When you choose Prime Ready Mix, you're not just getting concrete; you're getting a partner dedicated to your project's success.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedServices;