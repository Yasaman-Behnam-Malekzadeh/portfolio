import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import blogData from "../../../data/blog.json";
import Copyright from "../../sections/copyright";

function BlogItem() {
  const { categoryId, blogId } = useParams();
  const { t } = useTranslation("blog");

  const category = blogData.find((cat) => cat.id === parseInt(categoryId));
  const item = category?.items.find((i) => i.id === parseInt(blogId));

  if (!item) return <div>Blog not found</div>;
  return (
    <div className="blog-item">
      <div className="blog-item__container container p-4">
        <h1 className="blog-item__container__title">{t(item.title)}</h1>
        <img
          src={t(item.img)}
          alt={t(item.title)}
          className="blog-item__container__img"
        />

        <p className="blog-item__container__date">{t(item.date)}</p>
        <p className="blog-item__container__content">{t(item.description)}</p>
      </div>
      <Copyright />
    </div>
  );
}

export default BlogItem;
