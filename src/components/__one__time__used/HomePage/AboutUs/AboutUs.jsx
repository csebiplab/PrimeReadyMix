import { headingTexts } from '@/utils/heading-text';
import HeadingIcon from '@/utils/HeadingIcon';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div className='container padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[30px] 5xl:gap-[37px]'>
                <div className='md:col-span-1'>
                    <Image src="/homePage/aboutUs.png" alt='about us image' width={615} height={565}/>
                </div>
                <div className='md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center'>
                        <HeadingIcon text={headingTexts.aboutUs__headingIconText}/>
                    </div>
                    <div>
                        <h2 className='text-[25px] md:text-[27px] lg:text-[29px] xl:text-[30px] 2xl:text-[32px] 3xl:text-[33px] 4xl:text-[34px] 5xl:text-[36px] font-bold leading-[30px] md:leading-[40px] text-dark text-center md:text-left mt-[5px]'>About Prime Ready Mix Concrete Services</h2>
                        <p className='text-lg text-dark-300 font-normal leading-[35px] text-center md:text-left mt-[10px]'>Prime Ready Mix is a well-known company in the construction industry. We are delivering top-quality ready-mix concrete solutions for your large and small projects. With a commitment to excellence and a focus on customer satisfaction, our company has established itself as a trusted partner for builders, contractors, and developers alike. Our state-of-the-art facilities and advanced mixing technology guarantee every batch of concrete services. With a team of experienced professionals and a dedication to innovation, we continue to play a pivotal role in every ready-mix concrete job. When it comes to reliable and high-performance concrete solutions, our company stands out as a beacon of quality and reliability in the Toronto concrete industry.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;