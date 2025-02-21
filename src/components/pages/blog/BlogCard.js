import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export default function BlogCard({ blog }) {
    const { t } = useTranslation("blog");
  return (
    <div className="blog-card card mb-5 p-3 ">
      <img className="card-img" src={t(blog.img)} alt={t(blog.title)} />
      <div>
        <div className="mb-1">{t(blog.date)}</div>
        <h3 className="card-title mb-4">{t(blog.title)}</h3>
        <p className="card-text">{t(blog.description)}</p>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  blog: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
