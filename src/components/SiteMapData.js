'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";

const SitemapData = () => {
    const [sitemapData, setSitemapData] = useState([]);

    useEffect(() => {
        async function fetchSitemap() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_LIVE_API}/api/siteMap`);
                const data = await response.json();
                const { sitemap } = data ?? {};
                setSitemapData(sitemap)

            } catch (error) {
                console.error("Error fetching sitemap data:", error);
                return [];
            }
            finally {
            }
        }

        fetchSitemap()
    }, []);




    return (
        <div className="min-h-screen container py-10">
            <div className="px-20">
                <h3 className="text-3xl">Pages</h3>
                {
                    sitemapData?.length > 0 ?
                        sitemapData.map((sitemap, index) => (
                            <ul key={index} className="list-disc list-inside">
                                <li className="my-4 text-xl">
                                    <Link href={sitemap.url} className="capitalize underline text-gray-900 font-semibold hover:text-primary-900 my-4"
                                    >
                                        {sitemap.title}
                                    </Link>
                                </li>
                            </ul>
                        ))
                        : 'No page found!'

                }
            </div>
        </div>
    );
};

export default SitemapData;
