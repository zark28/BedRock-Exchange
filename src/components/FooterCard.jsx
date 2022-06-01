import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const FooterCard = () => {
  const handleWindow = () => {
    window.scrollTo(0, 0);
  };
  const navLinks = [
    { item: 'About', link: '/about' },
    { item: 'contact', link: '/contact' },
    { item: 'Blog', link: '/blog' },
  ];
  return (
    <div className="flex flex-col items-center justify-center text-primaryColor-white">
      <h5 className="text-xl font-bold">Company</h5>
      {navLinks?.map((nav, index) => (
        <NavLink
          onClick={handleWindow}
          to={nav.link}
          key={index}
          className="cursor-pointer hover:text-textColor flex justify-center transform duration-300 rounded-tl-lg rounded-br-lg  p-2 "
        >
          <NavItem className="  md:text-center text-xl w-3/4 md:mr-2 md:p-0  ">
            {nav.item}
          </NavItem>
        </NavLink>
      ))}
    </div>
  );
};

export default FooterCard;
const NavItem = styled.li`
  list-style: none;
`;
