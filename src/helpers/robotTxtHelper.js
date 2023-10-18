import axios from "axios";
import { base, robotTxt, sitemap } from "../redux/api/apiEndpoints";

export const fetchRobotTxt = async () => {
    try {
        const { data } = await axios.get(base + "/api/v1" + sitemap);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

fetchRobotTxt();
