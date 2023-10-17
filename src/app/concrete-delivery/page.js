import axios from "axios";
import Services from "./RC";

export const generateMetadata = async () => {
    // const dynamicRootMetadata = rootMetadata();
    // console.log(dynamicRootMetadata);
    try {
        const { data } = await axios.get("http://localhost:5000/api/v1/metadata");

        const dynamicMetadata = await data.find((metadata) => {
            // console.log(metadata);
            return metadata.page === "concrete-delivery";
        });
        console.log(dynamicMetadata);
        return {
            title: dynamicMetadata.title,
            description: dynamicMetadata.description,
        };
    } catch (error) {
        console.log(error);
    }
};
// export const metadata = {
//     title: "Concrete Delivery Services in Toronto",
//     description:
//         " If you're in need of reliable concrete delivery services in Toronto, look no further. Our company is dedicated to providing top-notch concrete solutions",
// };
export default function () {
    // console.log(process.env.NEXT_PUBLIC_GOOGLE_ID);
    return <Services />;
}
