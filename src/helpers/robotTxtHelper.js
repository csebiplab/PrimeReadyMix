import axios from "axios";
import { base, googleAnalytics, robotTxt, sitemap } from "../redux/api/apiEndpoints";

export const fetchAnalytics = async () => {
    try {
        // const { data } = await axios.get(base + "/api/v1" + googleAnalytics);
        const { data } = await axios.get(process.env.NEXT_PUBLIC_LIVE_API + "/api" + googleAnalytics);
        // console.log(data[0].google_analytics_key);
        return data;
    } catch (error) {
        console.log(error);
    }
};

fetchAnalytics();
