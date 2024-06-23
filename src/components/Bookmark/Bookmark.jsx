import React from "react";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div>
      <div className="bg-white p-5 mb-3 rounded-lg">
        <h3 className="text-md">{title}</h3>
      </div>
    </div>
  );
};

export default Bookmark;
