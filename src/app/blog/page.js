import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from 'react-icons/fi';
import './blog.css'
const BlogPage = () => {
    return (
        <div className='container mx-auto'>
            <div class='flex justify-center mt-12'>
                <section class='grid sm:grid-cols-1 lg:grid-cols-2 place-items-center w-full sm:w-[80%]  p-4'>
                    <div className='text-4xl font-semibold'>
                        <p>Prime Ready</p>
                        <p>Mix</p>
                    </div>
                    <div>
                        <p>If you’re one of the many homeowners who are planning a home renovation, you have an important choice in front of you. Should you take the do-it-yourself route to try to cut your overall costs, or should you bring in a professional contractor to make sure your remodel is done right? In this blog, we’ll review some of the specific areas of your project that require the work of a professional, as well as some of the dangers of DIY bathroom and kitchen remodeling and what you need to know before getting started.</p>
                    </div>
                </section>
            </div>

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
                <div className='lg:w-[60%]'>


                    <h5>Contact Prime Ready Mix </h5>
                    <div className="sm:col-span-3">
                        <div className="mt-2">
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                placeholder='First Name *'
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <div className="mt-2">
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                placeholder='Last Name *'
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <div className="mt-2">
                            <input
                                type="email"
                                name="last-name"
                                id="last-name"
                                placeholder='Email*'
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <div className="mt-2">
                            <input
                                type="number"
                                name="last-name"
                                id="last-name"
                                placeholder='Phone'
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <div className="mt-2">
                            <select
                                name="phone"
                                id="phone"
                                className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                                <option value="">Your Budget</option>
                                <option value="tentotwenty">$10,000 - $20,000</option>
                                <option value="twentytothirty">$20,000 - $30,000</option>
                                <option value="thirtytofifty">$30,000 - $50,000</option>
                                <option value="fifty">$50,000</option>
                            </select>
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <div className="mt-2">
                            <textarea
                                name="phone"
                                id="phone"
                                placeholder="Project Description"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder-mr-4"
                            />
                        </div>
                    </div>
                    <button className="bg-orange-800 hover:bg-red-600 w-full mt-4 text-white font-bold py-4 px-4 rounded-tl-md rounded-tr-md">
                        Submit
                    </button>





                </div>
            </section>

        </div>
    );
};

export default BlogPage;