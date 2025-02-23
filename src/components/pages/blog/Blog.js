import React, { useState, useEffect } from "react";
import blogList from "../../../data/blog.json";
import BlogCard from "./BlogCard";
import { useTranslation } from "react-i18next";
import Copyright from "../../sections/copyright";

function Blog() {
  const { t, i18n } = useTranslation("blog");
  const currentLanguage = i18n.language;

  const [activeTab, setActiveTab] = useState(t("myBlog.Health.title"));

  useEffect(() => {
    setActiveTab(t("myBlog.Health.title"));
  }, [currentLanguage, t]);

  return (
    <div>
      <div className="blog container">
        <div className="blog__nav pt-5">
          <h1 className="my-5">{t("myBlog.title")}</h1>

          <ul className="nav nav-tabs">
            {blogList.map((blog) => (
              <li className="nav-item" key={blog.id}>
                <button
                  className={`nav-link ${
                    activeTab === t(blog.title) ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(t(blog.title))}
                >
                  {t(blog.title)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="blog__content p-5">
          {blogList
            .filter((blog) => t(blog.title) === activeTab)
            .map((blog) => (
              <div key={blog.id}>
                {blog.items.map((item) => (
                  <BlogCard blog={item} key={item.id} />
                ))}
              </div>
            ))}
        </div>
        
      </div>
      <Copyright />
    </div>
  );
}

export default Blog;
