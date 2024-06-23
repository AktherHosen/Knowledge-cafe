import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmark = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };
  const handleMarkAsRead = (time) => {
    // console.log("marking as read", time);
    setReadingTime(time + readingTime);
  };
  return (
    <div className="container max-w-[1240px] mx-auto px-2">
      <Header />
      <main className="md:flex gap-5">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        />
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </main>
    </div>
  );
}

export default App;
