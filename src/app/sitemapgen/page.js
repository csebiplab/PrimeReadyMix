import React from "react";
import SitemapGenerate from "./sitemapGenerate";
export const metadata = {
  title: "Sitemap Generative",
  description: "This is the sitemap generative area",
};
const page = () => {
  return (
    <div>
      <SitemapGenerate />
    </div>
  );
};

export default page;
