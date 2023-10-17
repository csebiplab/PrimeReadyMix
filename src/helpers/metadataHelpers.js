import axios from "axios";
import { base } from "../redux/api/apiEndpoints";

export const rootMetadata = (data) => {
    console.log(data);
    return data;
};

export const allMetadata = async () => {
    try {
        const { data } = await axios.get("http://localhost:5000/api/v1/metadata");
        return rootMetadata(
            await data.find((metadata) => {
                return metadata.page === "root";
            })
        );
    } catch (error) {
        console.log(error);
    }
};
