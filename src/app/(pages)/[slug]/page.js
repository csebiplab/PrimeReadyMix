import DynamicBlogComponent from "@/components/DynamicBlog/DynamicBlog";

async function getData({ params }) {
  const blogLink = params?.slug;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${blogLink}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.data;
}

export async function generateMetadata({ params }) {
  const data = await getData({ params });

  try {
    const {
      metaTitle: title,
      metaDescription: description,
      metaKeywords: keywords,
    } = data ?? {};

    return {
      title: title || "",
      description: description || "",
      keywords: keywords || "",
      openGraph: {
        title: title,
        description: description,
      },
    };
  } catch (error) {
    return {
      title: "Blog",
      keywords: "Blog",
      description: "Blog",
    };
  }
}

const page = async ({ params }) => {
  const data = await getData({ params });

  return (
    <div className="custom-container px-5 md:px-0">
      <DynamicBlogComponent blog={data} />
    </div>
  );
};

export default page;
