import React, { useState } from "react";
import  blogList from "../../../data/blog.json";
import BlogCard from "./BlogCard";

function Blog() {
  const [activeTab, setActiveTab] = useState("Health & Fitness");
  return (
    <div className="blog container">
      <div className="blog__nav pt-5">
        <h1 className="my-5">my blog</h1>
        <ul className="nav nav-tabs">
          {blogList.map((blog) => (
            <li className="nav-item" key={blog.id}>
              <button
                className={`nav-link ${
                  activeTab === blog.title ? "active" : ""
                }`}
                onClick={() => setActiveTab(blog.title)}
                href="#"
              >
                {blog.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="blog__content p-5">
        {blogList
          .filter((blog) => blog.title === activeTab)
          .map((blog) => (
            <div key={blog.id}>
              {blog.items.map((item) => (
                <BlogCard blog={item} key={item.id} />
              ))}
            </div>
          ))}        
      </div>
    </div>
  );
}

export default Blog;
