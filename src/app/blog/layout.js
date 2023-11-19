import React from "react";
export const metadata = {
  title: {
    absolute: "Blog Page",
  },
  description: "This is the Blog page",
};
const layout = ({ children }) => {
  return <div>{children}</div>;
};

export default layout;
