import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import SocialLinks from './SocialLinks';
import animateScroll from 'react-scroll/modules/mixins/animate-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
const Wrapper = (props) => {
  const backToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <Main className=" w-full h-full flex flex-col scroll-smooth  items-center justify-center md:p-10 p-2">
      <NavBar />
      <SocialLinks />
      <Span className="relative scroll-smooth w-full h-full flex flex-col items-center justify-center">
        {props.children}
      </Span>
      <button
        onClick={backToTop}
        className={`backToTop ${
          props.scrollDown ? '' : 'opacity-0'
        } cursor-pointer text-5xl z-50 shadow-inner  shadow-textColor rounded-full  text-secondaryColor p-1`}
      >
        <FontAwesomeIcon icon={faArrowAltCircleUp} />
      </button>
      <Footer />
    </Main>
  );
};

const Main = styled.section`
  position: relative;
  & > .backToTop {
    position: fixed;
    right: 0;
    top: 50%;
  }
`;
const Span = styled.main``;
export default Wrapper;
