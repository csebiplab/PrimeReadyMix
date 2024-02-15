import axios from "axios";
import { base, siteMap } from "../redux/api/apiEndpoints";

export default async function sitemap() {
    try {
        const { data } = await axios.get(`${base}/api${siteMap}`);
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
