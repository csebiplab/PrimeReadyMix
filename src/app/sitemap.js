import axios from "axios";

export default async function sitemap() {
  const data = await getData();
  console.log("response from blog posts data1", data);

  const baseURL = "http://localhost:3000/";
  const routes = [
    "",
    "/concrete-delivery",
    "/blog",
    "/testimonials",
    "/contact-us",
  ].map((route) => ({
    url: `${baseURL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const posts = data?.map((item) => ({
    url: `${baseURL}dynamicblog/${item?._id}`,
    lastModified: item?.description,
  }));
  console.log("response from blog posts data2", posts);
  return [...routes, ...posts];
}

async function getData() {
  try {
    const res = await axios.get("https://readymix-server.vercel.app/api/posts");
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
