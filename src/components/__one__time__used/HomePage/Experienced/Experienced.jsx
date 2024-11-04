import { headingTexts } from '@/utils/heading-text';
import HeadingIcon from '@/utils/HeadingIcon';
import Image from 'next/image';
import React from 'react';

const Experienced = () => {
    return (
        <div className='container padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[30px] 5xl:gap-[37px]'>
                <div className='md:col-span-1'>
                    <Image src="/homePage/experienced.png" alt='about us image' width={763} height={815}/>
                </div>
                <div className='md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center'>
                        <HeadingIcon text={headingTexts.experienced__headingIconText}/>
                    </div>
                    <div>
                        <h2 className='text-[25px] md:text-[27px] lg:text-[29px] xl:text-[30px] 2xl:text-[32px] 3xl:text-[33px] 4xl:text-[34px] 5xl:text-[36px] font-bold leading-[30px] md:leading-[40px] text-dark text-center md:text-left mt-[5px]'>Experienced Ready Mix Concrete Contractors</h2>
                        <p className='text-lg text-dark-300 font-normal leading-[35px] text-center md:text-left mt-[10px]'>Prime Ready Mix's concrete services offer a seamless solution for all your concrete needs and concrete delivery services in GTA. With a fleet of state-of-the-art mixing trucks, we ensure that you receive the highest-quality concrete precisely when and where you need it. Whether it's a small residential project or a large commercial undertaking, we design our Toronto-ready mix services to save you time, labour, and the costs associated with on-site mixing. We take pride in our commitment to delivering consistent, durable, and reliable concrete mixes tailored to meet the unique specifications of each project.
                        At Prime Ready Mix, we pride ourselves on being experienced and reliable ready mix concrete contractors. With years of expertise, we provide top-quality concrete solutions tailored to meet the specific needs of every project. Our professional team ensures precise mixing, timely delivery, and efficient pouring to guarantee superior results. Trust Prime Ready Mix for durable, consistent, and expertly handled concrete that stands the test of time. Join us to strengthen and secure your construction projects from the ground up.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experienced;