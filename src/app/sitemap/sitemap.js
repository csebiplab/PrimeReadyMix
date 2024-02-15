'use client';
import React from "react";
import axios from "axios";
import { base, siteMap } from "../../redux/api/apiEndpoints";
import Link from "next/link";

const SitemapData = () => {
    const [sitemapData, setSitemapData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        async function fetchSitemap() {
            try {
                const response = await axios.get(`${base}/api${siteMap}`);
                return response.data?.sitemap ?? [];
            } catch (error) {
                console.error("Error fetching sitemap data:", error);
                return [];
            }
        }

        // Call fetchSitemap() and set the sitemap data in the state
        fetchSitemap().then(data => setSitemapData(data));
    }, []);

    // console.log(sitemapData);

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
