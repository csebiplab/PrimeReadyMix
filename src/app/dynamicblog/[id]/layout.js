import React from "react";

const layout = async ({ children, params }) => {
  const res = await fetch(
    `https://readymix-server.vercel.app/api/posts/${params.id}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const metadata = {
    title: `${data.name}`,
    description: `${data.description}`,
  };
  console.log("params for id", params, metadata);
  return <div>{children}</div>;
};

export default layout;
