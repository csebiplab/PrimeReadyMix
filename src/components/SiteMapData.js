import Link from "next/link";

const SitemapData = () => {
  return (
    <div className="min-h-screen container py-10">
      <div className="px-20">
        <h3 className="text-3xl">Pages</h3>
        {[]?.length > 0
          ? [].map((sitemap, index) => (
              <ul key={index} className="list-disc list-inside">
                <li className="my-4 text-xl">
                  <Link
                    href={sitemap.url}
                    className="capitalize underline text-gray-900 font-semibold hover:text-primary-900 my-4"
                  >
                    {sitemap.title}
                  </Link>
                </li>
              </ul>
            ))
          : "No page found!"}
      </div>
    </div>
  );
};

export default SitemapData;
