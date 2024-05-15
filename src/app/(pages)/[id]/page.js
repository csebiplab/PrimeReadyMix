import React from 'react';
import DynamicBlogComponent from '../../../components/blogs/DynamicBlog/DynamicBlog';


export async function generateMetadata(
    { params }
) {
    const id = params?.id

    const { blogDetailsData } = await fetch(`${process.env.NEXT_PUBLIC_LIVE_API}/api/blogContent/${id}`)
        .then((res) => res.json())
        .catch(error => console.error(error))

    return {
        title: blogDetailsData?.metaTitle,
        description: blogDetailsData?.metaDescription,
        keywords: blogDetailsData?.metaKeywords
    }
}



const DynamicBlogPage = ({ params }) => {
    return (
        <div className='custom-container px-5 md:px-0'>
            <DynamicBlogComponent params={params} />
        </div>
    );
};

export default DynamicBlogPage;