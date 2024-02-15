'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState, Suspense } from 'react';
import "./blog.css";

const
    Blogs = ({ item }) => {
        const [img, setImg] = useState("");
        const [imgAlt, setImgAlt] = useState("");
        const { blogTitle, metaTitle, customLink, shortDescription, content } = item ?? {};

        useEffect(() => {
            // Parse the HTML content to extract img src
            const parser = new DOMParser();
            const doc = parser.parseFromString(content, 'text/html');
            const imgElement = doc.querySelector('img');
            const imgSrc = imgElement ? imgElement.getAttribute('src') : null;
            const imgAltTxt = imgElement ? imgElement.getAttribute('alt') : null;
            setImg(imgSrc)
            setImgAlt(imgAltTxt)

        }, [])

        // console.log(description)

        return (
            // <Link href={`/dynamicblog/${metaTitle}`}>
            <Link href="/dynamicblog/[...customLink]" as={`/dynamicblog/${encodeURIComponent(customLink)}`}>
                <div className="overlay-pos">
                    <div className="blog-card">
                        <Suspense fallback={!img && <p>Loading...</p>}>
                            {img && <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" width={400} height={400} src={img} alt={imgAlt} />}
                        </Suspense>
                    </div>
                    <div className='overlay'>
                        <div>
                            <h1 className="font-dmserif text-3xl font-bold text-white px-4">{blogTitle}</h1>
                            <p className="mb-3 text-lg text-white px-4">{shortDescription}</p>
                            {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Show</button> */}
                        </div>
                    </div>
                </div>
            </Link>


        );
    };

export default Blogs;