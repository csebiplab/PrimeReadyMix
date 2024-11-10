import { headingTexts } from '@/utils/heading-text';
import HeadingIcon from '@/utils/HeadingIcon';
import Image from 'next/image';
import React from 'react';

const BestDesign = () => {
    return (
        <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[30px] 5xl:gap-[37px]'>
                <div className='order-1 md:order-2 md:col-span-1'>
                    <Image src="/homePage/bestDesign.png" alt='best design' width={903} height={525}/>
                </div>
                <div className='order-2 md:order-1 md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center'>
                        <HeadingIcon text={headingTexts.bestDesign__headingIconText}/>
                    </div>
                    <div>
                        <h2 className='text-[25px] md:text-[27px] lg:text-[29px] xl:text-[30px] 2xl:text-[32px] 3xl:text-[33px] 4xl:text-[34px] 5xl:text-[36px] font-bold leading-[30px] md:leading-[40px] text-dark text-center md:text-left mt-[5px]'>Best Design for Ready Mix Concrete Service</h2>
                        <p className='text-lg text-dark-300 font-normal leading-[35px] text-center md:text-left mt-[10px]'>At Prime Ready Mix, we value quality and durability in every batch of ready mix concrete. Our advanced mixing technology ensures a perfect blend of aggregates, water, and cement. We customize our mix designs to provide the best balance of strength, workability, and longevity, whether you are building residential homes, commercial spaces, or large infrastructure projects.
                        We understand that each project is unique, which is why our expert team works closely with clients to tailor concrete mixes. From high-strength concrete for heavy-duty foundations to decorative mixes for sleek, polished finishes, Prime Ready Mix delivers every construction project solution. For the best concrete design, choose Prime Ready Mix—built to last and delivered with precision.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestDesign;