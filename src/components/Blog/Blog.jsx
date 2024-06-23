import React from "react";
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  //   console.log(blog);
  const {
    id,
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-8">
      <div className="w-full px-3 border-2 shadow-sm rounded-xl">
        <img
          src={cover}
          className="w-full h-80 object-cover  mt-4 rounded-lg"
          alt=""
        />
        <div className="flex justify-between items-center ">
          <div className="my-5 flex items-center">
            <img src={author_img} className="w-16 h-16 rounded-[50%] " alt="" />
            <div className="ml-5">
              <h1 className="text-lg">{author}</h1>
              <p className="text-sm">{posted_date}</p>
            </div>
          </div>
          <div className="flex gap-x-3 items-center">
            <p>{reading_time} min read</p>
            <button onClick={() => handleAddToBookmark(blog)}>
              <FaRegBookmark className="text-lg" />
            </button>
          </div>
        </div>
        <div className="mb-3">
          <h1 className="text-2xl">{title}</h1>
          {hashtags.map((hash, idx) => (
            <span key={idx} className="mr-2 font-semibold text-gray-800">
              {hash}
            </span>
          ))}
        </div>
        <div className="mb-3">
          <a
            href="#"
            onClick={() => handleMarkAsRead(id, reading_time)}
            className="hover:underline"
          >
            Mark as read
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
