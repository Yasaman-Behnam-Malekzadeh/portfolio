import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import blogData from "../../../data/blog.json";

function BlogItem() {
  const { categoryId, blogId } = useParams();
  const { t } = useTranslation("blog");

  const category = blogData.find((cat) => cat.id === parseInt(categoryId));
  const item = category?.items.find((i) => i.id === parseInt(blogId));

  if (!item) return <div>Blog not found</div>;
  return (
    <div className="blog-item">
      <img src={t(item.img)} alt={t(item.title)} className="detail-img" />
      <h1>{t(item.title)}</h1>
      <p className="text-muted">{t(item.date)}</p>
      <p>{t(item.description)}</p>
    </div>
  );
}

export default BlogItem;
