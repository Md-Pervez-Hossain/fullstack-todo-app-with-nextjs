"use client";
import React from "react";
const page = async ({ params }) => {
  const id = params.id;
  const singleGet = async () => {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`);

    if (!res.ok) {
      throw new Error("Failed To Get");
    }
    return res.json();
  };

  const { topic } = await singleGet();
  console.log(topic);

  return (
    <div className="w-9/12 mx-auto">
      <h2>{topic?.title}</h2>
      <h2>{topic?.description}</h2>
    </div>
  );
};

export default page;
