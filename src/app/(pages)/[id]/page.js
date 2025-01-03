import React from 'react';
import DynamicBlogComponent from '../../../components/blogs/DynamicBlog/DynamicBlog';



const DynamicBlogPage = ({ params }) => {
    return (
        <div className='custom-container px-5 md:px-0'>
            <DynamicBlogComponent params={params} />
        </div>
    );
};

export default DynamicBlogPage;