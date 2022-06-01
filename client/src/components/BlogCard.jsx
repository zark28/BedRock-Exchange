import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog, img }) => {
  return (
    <Link to={`/blog/${blog.title}`}>
      <div className="flex w-full h-fit flex-col items-center justify-center gap-5 text-secondaryColor ">
        <img
          className="w-full h-80 object-contain object-center"
          src={blog.image}
          alt={blog.title}
          img={img}
        />
        <h3 className="w-full text-xl font-bold">{blog.title}</h3>
        <p className="text-lg">{blog.description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
