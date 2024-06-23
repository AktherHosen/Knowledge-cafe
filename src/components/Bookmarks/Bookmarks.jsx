import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  const { title } = bookmarks;
  return (
    <div className="md:w-1/3">
      <div className="p-4 bg-gray-50 mb-2 rounded-lg flex justify-between">
        <h1>Reading Time Spend</h1>
        <span className="text-green-500 font-semibold">{readingTime} min</span>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h1 className="text-center font-semibold text-lg my-4">
          Bookmarks : {bookmarks.length}
        </h1>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
