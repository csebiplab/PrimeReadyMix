import axios from "axios";
import { base, sitemap } from "../redux/api/apiEndpoints";

export default function Sitemap() {
    const fetchRobotTxt = async () => {
        try {
            const { data } = await axios.get(base + "/api" + sitemap);
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };
    const data = fetchRobotTxt();
    console.log(data);

    const sitemapData = [];
    data.map((singleData) => {
        sitemapData.push({
            url: singleData.url,
            priority: singleData.priority,
            changeFrequency: singleData.frequency_change,
            lastModified: singleData.updatedAt,
        });
    });

    return sitemapData;
}
