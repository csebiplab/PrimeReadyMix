'use client'
import React, { Suspense } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from 'react-icons/fi';
import './blog.css'
import Blogs from './Blogs';
import Contact from '../../../components/common/Contact';
import { usePostDataFetching } from '../../../hooks/usePostDataFetching';
import LoadingSpinner from '../../../components/common/LoadingSpinner';



const BlogPage = () => {
    // const { data: categories, isLoading, error } = usePostDataFetching();
    return (
        <>

            <div className='container mx-auto'>
                <div className='flex justify-center mt-12'>
                    <section className='grid sm:grid-cols-1 lg:grid-cols-2 place-items-center w-full sm:w-[80%]  p-4'>
                        <div className='text-4xl font-semibold'>
                            <p>Prime Ready</p>
                            <p>Mix</p>
                        </div>
                        <div>
                            <p>If you’re one of the many homeowners who are planning a home renovation, you have an important choice in front of you. Should you take the do-it-yourself route to try to cut your overall costs, or should you bring in a professional contractor to make sure your remodel is done right? In this blog, we’ll review some of the specific areas of your project that require the work of a professional, as well as some of the dangers of DIY bathroom and kitchen remodeling and what you need to know before getting started.</p>
                        </div>
                    </section>
                </div>

                {/* <section>
                    {
                        isLoading ?
                            <LoadingSpinner />
                            :
                            <>
                                <Suspense>
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16 py-6 bg-white'>

                                        {
                                            []?.map(item => <Blogs key={item._id} item={item} />)
                                        }
                                    </div>
                                </Suspense>
                            </>
                    }


                </section> */}

                {/* this section make contact us page */}
                <section className='mb-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 mt-8'>
                    <div className='background px-12 py-16 flex flex-col justify-start items-start'>
                        <h3 className='text-white'>Turn Key Renovation Process Like No Other</h3>
                        <p className='text-white'>Planning, Design, Materials, and Construction Under One Roof</p>
                        <div className='flex gap-4 items-center mt-4'>
                            <h4 className='text-white'><AiOutlineMail /></h4>
                            <div>
                                <p className='text-white'>Email Us</p>
                                <p className='text-white'>sales@easyrenovation.com</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <h4 className='text-white'><FiPhoneCall /></h4>
                            <div>
                                <p className='text-white'>Call Us</p>
                                <p className='text-white'>647-496-0826</p>
                            </div>
                        </div>
                    </div>
                    {/* here start the form table */}
                    <Contact />
                </section>

            </div >
        </>
    );
};

export default BlogPage;

// export function generateMetadata({ params }) {
//     return {
//         title: "this is blog route"
//     }
// }