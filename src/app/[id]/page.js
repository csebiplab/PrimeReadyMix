import React from 'react';
import DynamicBlogComponent from '../../components/blogs/DynamicBlog/DynamicBlog';

export async function generateMetadata(
    { params }
) {
    // read route params
    const id = params?.id

    // fetch data
    const { blogDetailsData } = await fetch(`${process.env.NEXT_PUBLIC_LIVE_API}/api/blogContent/${id}`)
        .then((res) => res.json())
        .catch(error => console.error(error))


    // console.log(blogDetailsData, "from generate metadata from dynamicblogpage")


    return {
        title: blogDetailsData?.metaTitle,
        description: blogDetailsData?.metaDescription,
        keywords: blogDetailsData?.metaKeywords
    }
}

const DynamicBlogPage = ({ params }) => {
    return (
        <div>
            <DynamicBlogComponent params={params} />
        </div>
    );
};

export default DynamicBlogPage;