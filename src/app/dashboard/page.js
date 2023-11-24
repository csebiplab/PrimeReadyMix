import React from "react";
import Dashboard from "./dashboard";
import axios from "axios";
export const metadata = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:3000/api/verificationOwnership",
      {
        cache: "no-store",
      }
    );
    const getOwnershipVerificationUrl = data?.verificationOwnershipUrl[0];
    const { url } = getOwnershipVerificationUrl || {};
    console.log("title and description from database", url);
    return {
      title: url || "shala",
      description: url,
      metaTags: url,
    };
  } catch (error) {
    console.log(error);
  }
};
const page = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default page;
