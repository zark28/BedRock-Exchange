import React from 'react';
import tw from 'styled-components';
import { NavLink } from 'react-router-dom';
const NavItems = ({ navLinksMode }) => {
  const navLinks = [
    { item: 'About', link: '/about' },
    { item: 'contact', link: '/contact' },
    { item: 'Blog', link: '/blog' },
  ];
  return (
    <NavLinks
      className={`w-full md:w-1/2 h-fit md:h-full md:flex absolute top-20 md:top-0 bg-secondaryColor z-10 md:bg-transparent list-none flex-col justify-around items-center md:flex-row  md:justify-end gap-9 md:relative ${navLinksMode}`}
    >
      {navLinks?.map((nav, index) => (
        <NavLink
          to={nav.link && nav.link}
          key={index}
          className="cursor-pointer hover:bg-primaryColor flex justify-center transform duration-300 rounded-tl-lg rounded-br-lg  p-2 "
        >
          <NavItem className="  md:text-center text-xl w-3/4 md:mr-2 md:p-0  ">
            {nav.item}
          </NavItem>
        </NavLink>
      ))}
    </NavLinks>
  );
};

const NavLinks = tw.ul`
& > .active{
  border:2px;
  transition:ease-in-out;
  color: rgb(165, 165, 165);

}`;
const NavItem = tw.li` `;
export default NavItems;
