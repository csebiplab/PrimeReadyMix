/*

import axios from "axios";
import {  siteMap } from "../redux/api/apiEndpoints";

export default async function sitemap() {
    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_LIVE_API}/api${siteMap}`);
        // console.log("object", data)
        const sitemapData = data?.sitemap?.map((singleData) => ({
            url: singleData.url,
            // priority: singleData.priority,

            // Just Set Default Static Priority
            priority: 1,
            changeFrequency: "yearly",
            lastModified: singleData.updatedAt,
        }));
        // console.log(sitemapData);
        return sitemapData;
    } catch (error) {
        console.error("Error fetching sitemap data:", error);
        return []; // Return empty array in case of error
    }
}
*/
export default function sitemap() {
    return [
        {
            url: 'https://primereadymix.ca/blogs',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
    ]
}