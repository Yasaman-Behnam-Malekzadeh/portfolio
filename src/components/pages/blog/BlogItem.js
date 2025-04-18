import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import blogData from "../../../data/blog.json";
import { ArrowLeftCircle } from "react-bootstrap-icons";

function BlogItem() {
  const { categoryId, blogId } = useParams();
  const { t } = useTranslation("blog");

  const category = blogData.find((cat) => cat.id === parseInt(categoryId));
  const item = category?.items.find((i) => i.id === parseInt(blogId));

  if (!item) return <div>Blog not found</div>;
  return (
    <div className="blog-item ">
      <div className="blog-item__container container p-4">
        <Link
          to="/myblog"
          className="blog-item__container__button btn btn-lg px-5"
        >
          <ArrowLeftCircle />
          <div className="ml-2">{t("back")}</div>
        </Link>
        <h1 className="blog-item__container__title">{t(item.title)}</h1>
        <p className="blog-item__container__date">{t(item.date)}</p>
        <img
          src={t(item.img)}
          alt={t(item.title)}
          className="blog-item__container__img"
        />

        <div className="blog-item__container__content">
          <Trans>{t(item.description)}</Trans>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
