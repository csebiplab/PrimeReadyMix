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
    const contentMatch = url.match(/content="([^"]+)"/);
    const contentValue = contentMatch ? contentMatch[1] : null;
    return {
      title: "Dashboard page",
      verification: {
        //don't remove the dynamic varification meta tag
        google: contentValue,
      },
    };
  } catch (error) {
    console.log("axios Error", error);
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
