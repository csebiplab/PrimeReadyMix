import BlogPage from "./blogPage";

export async function generateMetadata() {

    // fetch data
    const metaData = await fetch(`http://localhost:8080/api/blogs`).then((res) => res.json())
    // console.log("meta ---", metaData)

    return {
        title: metaData?.blogRouteAllMetaData[0]?.title,
        description: metaData?.blogRouteAllMetaData[0]?.description,
        keywords: metaData?.blogRouteAllMetaData[0]?.keywords

    }
}

const AllBlogsPage = () => {
    return (
        <div>
            <BlogPage />
        </div>
    );
};

export default AllBlogsPage;