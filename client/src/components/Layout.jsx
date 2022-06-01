import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';

const Layout = ({ title, children }) => {
  document.title = title ? `${title} - Bedrock Exchange` : `Bedrock Exchange`;
  const [scrollDown, setScrollDown] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      handleScroll();
    });
    return () => {};
  });

  const handleScroll = () => {
    let scrollY = window.pageYOffset;
    console.log(scrollY);
    if (scrollY > 800) {
      setScrollDown(true);
    } else if (scrollY < 800) {
      setScrollDown(false);
    }
  };
  return <Wrapper scrollDown={scrollDown}>{children}</Wrapper>;
};

export default Layout;
