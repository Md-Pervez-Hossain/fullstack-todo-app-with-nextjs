"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const AddProduct = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/topics", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <div className="w-9/12 mx-auto my-16">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-4 py-2 border-2 border-gray-200 rounded-lg w-full mb-5 "
        />
        <textarea
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="px-4 py-2 border-2 border-gray-200 rounded-lg w-full mb-5 "
        ></textarea>
        <button className="px-4 py-2  rounded-lg w-full mb-5 text-white bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
