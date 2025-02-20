import React from "react";
import PropTypes from "prop-types";

export default function BlogCard({ blog }) {
  return (
    <div className="blog-card card mb-5 p-3 ">
      <img className="card-img" src={blog.img} alt={blog.title} />
      <div>
        <div className="mb-1">{blog.date}</div>
        <h3 className="card-title mb-4">{blog.title}</h3>
        <p className="card-text">{blog.description}</p>
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
