'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { base, siteMap } from "../redux/api/apiEndpoints";

const SitemapData = () => {
    const [sitemapData, setSitemapData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        async function fetchSitemap() {
            try {
                const response = await fetch(`${base}/api${siteMap}`);
                return response.data?.sitemap ?? [];
            } catch (error) {
                console.error("Error fetching sitemap data:", error);
                return [];
            }
            finally {
                setIsLoading(false)
            }
        }

        // Call fetchSitemap() and set the sitemap data in the state
        fetchSitemap().then(data => setSitemapData(data));
    }, []);

    // console.log(sitemapData);

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className="min-h-screen container py-10">
            <div className="px-20">
                <h3 className="text-3xl">Pages</h3>
                {sitemapData.map((sitemap, index) => (
                    <ul key={index} className="list-disc list-inside">
                        <li className="my-4 text-xl">
                            <Link href={sitemap.url} className="capitalize underline text-gray-900 font-semibold hover:text-primary-900 my-4"
                            >
                                {sitemap.title}
                            </Link>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default SitemapData;
