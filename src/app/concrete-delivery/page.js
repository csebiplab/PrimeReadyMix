// import axios from "axios";
// import { base } from "../../redux/api/apiEndpoints";
import Services from "./RC";
// import { base } from "../../redux/api/apiEndpoints";

export async function generateMetadata() {
    const metaData = await fetch(`${process.env.NEXT_PUBLIC_LIVE_API}/api/concreteDelivery`).then((res) => res.json())

    return {
        title: metaData?.concreteDeliveryRouteAllMetaData[0]?.title,
        description: metaData?.concreteDeliveryRouteAllMetaData[0]?.description,
        keywords: metaData?.concreteDeliveryRouteAllMetaData[0]?.keywords,
        
    }
}

// export const generateMetadata = async () => {
//     // const dynamicRootMetadata = rootMetadata();
//     // console.log(dynamicRootMetadata);
//     try {
//         const { data } = await axios.get(base + "/api/v1/metadata");

//         const dynamicMetadata = await data.find((metadata) => {
//             return metadata.page === "concrete-delivery";
//         });
//         // console.log(dynamicMetadata);
//         const { title, description, google_console_key, yandex_console_key, yahoo_console_key } =
//             dynamicMetadata || {};
//         return {
//             title: title,
//             description: description,
//             verification: {
//                 google: google_console_key,
//                 yandex: yandex_console_key,
//                 yahoo: yahoo_console_key,
//             },
//         };
//     } catch (error) {
//         console.log(error);
//     }
// };
// export const metadata = {
//     title: "Concrete Delivery Services in Toronto",
//     description:
//         " If you're in need of reliable concrete delivery services in Toronto, look no further. Our company is dedicated to providing top-notch concrete solutions",
// };
export default function () {
    // console.log(process.env.NEXT_PUBLIC_GOOGLE_ID);
    return <Services />;
}
