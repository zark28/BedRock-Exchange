import React, { useEffect } from 'react';
import useRequestResource from '../hooks/useRequestResource';
import BlogCard from './BlogCard';
const Blogs = () => {
  const { resources, getResources } = useRequestResource({ endpoint: 'blogs' });
  useEffect(() => {
    getResources();
  }, [getResources]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-10 gap-x-8  gap-y-20">
      {resources.blogs?.map((blog, i) => (
        <BlogCard key={i} blog={blog} img={blog.image} />
      ))}
    </div>
  );
};

export default Blogs;
