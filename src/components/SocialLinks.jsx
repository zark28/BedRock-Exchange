import { Link } from 'react-router-dom';
import React from 'react';
import tw from 'styled-components';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
const SocialLinks = () => {
  const socialList = [
    {
      icon: 'twitter',
      link: '/twitter',
    },
    {
      icon: 'instagram',
      link: '/instagam',
    },

    {
      icon: 'telegram',
      link: '/telegram',
    },
  ];
  return (
    <Socials className="w-full flex items-center justify-evenly   md:justify-end">
      {socialList?.map((item, i) => (
        <Link
          to={item.link}
          key={i}
          target="_blank"
          className="mx-5 ease-in-out transform duration-300 hover:scale-90"
        >
          {item.icon === 'instagram' ? (
            <FaInstagram className="social-icon" />
          ) : (
            ''
          )}
          {item.icon === 'twitter' ? <FaTwitter className="social-icon" /> : ''}

          {item.icon === 'telegram' ? (
            <FaTelegramPlane className="social-icon" />
          ) : (
            ''
          )}
        </Link>
      ))}
    </Socials>
  );
};
const Socials = tw.div``;

export default SocialLinks;
