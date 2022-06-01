import React from 'react';

import styled from 'styled-components';

const NavBar = ({ onClick, addForm }) => {
  return (
    <Nav className="w-full flex h-40 items-center h-30 px-8 justify-between text-textColor bg-primaryColor-white  md:relative pb-10 static">
      <Span className="w-auto h-full flex  items-center">
        <Icon
          className="md:h-full flex-1  contain cursor-pointer"
          src="https://bedrock.trade/wp-content/uploads/2022/04/Bedrock-exchange-06-e1651243404845.png"
          alt="logo"
        />
      </Span>
      <button
        onClick={onClick}
        className="text-xl font-bold py-2 px-3 rounded-lg transition-all duration-75 text-primaryColor-white bg-primaryColor
       hover:text-textColor"
      >
        {!addForm ? 'Add Blog' : 'Close Form'}
      </button>
    </Nav>
  );
};
const Nav = styled.nav``;
const Span = styled.span``;
const Icon = styled.img``;

export default NavBar;
