import Services from "./RC";

// export async function generateMetadata() {
//     const metaData = await fetch(`${process.env.NEXT_PUBLIC_LIVE_API}/api/concreteDelivery`).then((res) => res.json())

//     return {
//         title: metaData?.concreteDeliveryRouteAllMetaData[0]?.title,
//         description: metaData?.concreteDeliveryRouteAllMetaData[0]?.description,
//         keywords: metaData?.concreteDeliveryRouteAllMetaData[0]?.keywords,

//     }
// }


export default function () {
    return <Services />;
}
