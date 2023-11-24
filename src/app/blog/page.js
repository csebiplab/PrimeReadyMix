import React from "react";
import BlogPage from "./blogMain";
import axios from "axios";
export const metadata = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/metadata", {
      cache: "no-store",
    });
    const getHomePageMetaData = data?.RouteAllMetaData[0];
    const { title, description, keywords } = getHomePageMetaData?.blog || {};
    return {
      title: title,
      description: description,
      keywords: keywords,
    };
  } catch (error) {
    console.log(error);
  }
};

const page = () => {
  return (
    <div>
      <BlogPage />
    </div>
  );
};

export default page;
