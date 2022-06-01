import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import SocialLinks from './SocialLinks';
// import useRequestResource from '../hooks/useRequestResource';

const BlogDetail = ({ allBlogs }) => {
  const params = useParams();
  let blogId = params.blogId;
  const activeBlog = allBlogs?.find((blog) => blog.title === blogId);
  const navigate = useNavigate();
  const backToBlogs = () => {
    navigate('/blog');
  };

  return (
    <div className="flex px-12 relative mt-20 flex-col gap-10 items-center justify-center text-secondaryColor">
      <SocialLinks />
      <span
        className="absolute text-5xl top-20 right-14 cursor-pointer hover:scale-90 duration-300 "
        onClick={backToBlogs}
      >
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </span>
      <h1 className="w-full text-3xl font-bold">{activeBlog.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <img src={activeBlog.image} alt={activeBlog.title} />
        <p className="text-2xl leading-10">{activeBlog.description}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
