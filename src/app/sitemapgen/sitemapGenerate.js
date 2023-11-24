"use client";
import { useState } from "react";

const SitemapGenerate = () => {
  const [url, setUrl] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/sitemapUrl");
      if (res.ok) {
        const data = await res.json();
        setUrl(data?.sitemapUrls[0]?.url);
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="w-11/12 md:w-10/12 ps-28 mt-3">
        <h3>Create Sitemap</h3>
        <div className="verify__ownershipArea h-56 mx-auto py-3 flex justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              onChange={(e) => setUrl(e.target.value)}
              disabled={url ? false : true}
              style={
                url
                  ? { width: "400px", border: "1px solid #000" }
                  : { width: "400px" }
              }
              value={url}
              className="border border-slate-500 px-8 py-2"
              type="text"
              placeholder="Topic Url"
            />

            <button
              type="submit"
              className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
            >
              Generate Map
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SitemapGenerate;
