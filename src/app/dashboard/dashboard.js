"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Dashboard = () => {
  const [url, setUrl] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) {
      alert("Url are required.");
      return;
    }
    try {
      const res = await fetch(
        "http://localhost:3000/api/verificationOwnership",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ url }),
        }
      );

      if (res.ok) {
        // router.push("/");
        console.log("resposnse for ownership tag", res);
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-11/12 md:w-10/12 ps-28 mt-3">
      <h3>Dashboard page</h3>
      <div className="verify__ownershipArea h-56 mx-auto py-3 flex justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setUrl(e.target.value)}
            style={{ width: "400px", border: "1px solid #000" }}
            value={url}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Topic Url"
          />

          <button
            type="submit"
            className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
          >
            Add Url
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
