import React, { useState } from 'react';
import NavItems from './NavItems';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [navMode, setNavMode] = useState(null);
  return (
    <Nav className="w-full flex items-end h-30 justify-between text-textColor bg-primaryColor-white  md:relative pb-10 static">
      <Span className="w-3/5 h-full flex  items-center">
        <NavLink to="/">
          <Icon
            className="md:h-full flex-1  contain cursor-pointer"
            src="https://bedrock.trade/wp-content/uploads/2022/04/Bedrock-exchange-06-e1651243404845.png"
            alt="logo"
          />
        </NavLink>
        {/* <MainTitle className="main-title md:flex md:w-3/4 md:text-xl hidden text-center">
          Bedrock Exchange
        </MainTitle> */}
      </Span>
      <Humberger
        className="z-20 cursor-pointer w-10 h-10 flex flex-col relative justify-evenly md:hidden"
        onClick={() => (navMode ? setNavMode('') : setNavMode(true))}
      >
        <HumSpan
          className={`flex bg-primaryColor  ${
            navMode ? 'transform absolute rotate-45 ' : ''
          }`}
        ></HumSpan>
        <HumSpan
          className={`flex bg-primaryColor ${navMode ? 'hidden' : 'delay-75'}`}
        ></HumSpan>
        <HumSpan
          className={`flex bg-primaryColor ${
            navMode ? 'transform absolute -rotate-45' : ''
          }`}
        ></HumSpan>
      </Humberger>
      <NavItems navLinksMode={navMode ? 'flex' : 'hidden'} />
    </Nav>
  );
};
const Nav = styled.nav``;
const Span = styled.span``;
const Icon = styled.img``;

const Humberger = styled.div``;
const HumSpan = styled.span`
  height: 0.25rem;
  width: 100%;
  transition: 500ms ease-in-out;
`;
export default NavBar;
