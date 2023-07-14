"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const TopicList = ({ topics }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    console.log(id);
    const agree = confirm("Are You Sure . You want To Delete ?");
    if (agree) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <div className="w-9/12 mx-auto grid grid-cols-3 gap-10 my-16">
      {topics?.map((t) => {
        return (
          <>
            <div>
              <h2>{t.title}</h2>
              <p>{t.description}</p>
              <Link href={`/single-topic/${t._id}`}>
                {" "}
                <button>Details</button>
              </Link>
              <button onClick={() => handleDelete(t._id)}>Delete</button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default TopicList;
