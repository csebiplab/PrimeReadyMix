import { headingTexts } from '@/utils/heading-text';
import HeadingIcon from '@/utils/HeadingIcon';
import Image from 'next/image';
import React from 'react';

const AdditionalServices = () => {
    return (
        <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[30px] 5xl:gap-[37px]'>
                <div className='order-2 md:col-span-1'>
                    <Image src="/homePage/additionalService.png" alt='additional services image' width={885} height={708}/>
                </div>
                <div className='order-1 md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center'>
                        <HeadingIcon text={headingTexts.additionalServices__headingIconText}/>
                    </div>
                    <div>
                        <h2 className='text-[25px] md:text-[27px] lg:text-[29px] xl:text-[30px] 2xl:text-[32px] 3xl:text-[33px] 4xl:text-[34px] 5xl:text-[36px] font-bold leading-[30px] md:leading-[40px] text-dark text-center md:text-left mt-[5px]'>Additional Services for Construction Excellence</h2>
                        <p className='text-lg text-dark-300 font-normal leading-[35px] text-center md:text-left mt-[10px]'>Prime Ready Mix offers high-quality ready mix concrete combined with additional services like professional concrete pumping to ensure construction excellence. With our concrete pumping services, you can achieve precise and efficient placement, even in hard-to-reach areas, minimizing labour and maximizing productivity. Our team is committed to delivering dependable service and on-time delivery, providing a complete solution from start to finish.
                        At Prime Ready Mix, we offer more than just high-quality ready mix concrete; we also provide additional services for construction excellence. Our team meets every aspect of your concrete needs with precision, whether you're working on a commercial, residential, or industrial project. In addition to our top-tier concrete products, we offer on-site assistance, flexible delivery schedules, and expert support to ensure your project runs smoothly from start to finish. Our additional services include concrete pumping, specialized mix designs, and customized solutions tailored to meet your specific project requirements. With Prime Ready Mix, you get not only durable, reliable concrete but also the comprehensive support needed for successful and efficient construction. Trust our ready-mix specialist to deliver exceptional quality and service every time.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionalServices;