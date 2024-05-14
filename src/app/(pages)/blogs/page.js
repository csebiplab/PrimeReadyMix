import BlogPage from "./BlogPage";


// export async function generateMetadata() {

//     // fetch data
//     const metaData = await fetch(`${process.env.NEXT_PUBLIC_LIVE_API}/api/blogs`).then((res) => res.json())
//     // console.log("meta ---", metaData)

//     return {
//         title: metaData?.blogRouteAllMetaData[0]?.title,
//         description: metaData?.blogRouteAllMetaData[0]?.description,
//         keywords: metaData?.blogRouteAllMetaData[0]?.keywords

//     }
// }

const AllBlogsPage = () => {
    return (
        <div>
            <BlogPage />
        </div>
    );
};

export default AllBlogsPage;