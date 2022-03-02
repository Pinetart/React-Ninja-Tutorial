import { useState } from "react";

import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Welcome Here!", body: "lorem ipsum...", author: "mario", id: 3 },
  ]);

  return (
    <div className="home">
      <Bloglist blogs={blogs} title="All Blogs!" />
    </div>
  );
};

export default Home;
