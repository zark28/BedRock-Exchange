import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import  {} form 'react-icons/a'

const Step = ({ title, details, img, index }) => {
  return (
    <Wrapper
      img={img}
      className="md:w-96 w-3/4 p-10 relative border-2 border-textColor rounded-lg shadow-xl  flex flex-col items-center overlay justify-start gap-8 text-primaryColor-white "
    >
      <span className="w-full flex items-end z-10 justify-start gap-8 text-center">
        <Number className="number">
          <span></span>
          <span>{index + 1}</span>
        </Number>
        <Titile className="text-2xl  py-5">{title}</Titile>
      </span>
      <Details className="font-semibold text-lg z-10 w-full leading-10">
        {details}
      </Details>
      <Link to="/contact">
        <button
          className="text-xl z-10 absolute bottom-2 left-1/2 -translate-x-1/2 font-bold py-2 px-3 rounded-lg transition-all duration-75 text-primaryColor-white bg-primaryColor
       hover:text-textColor"
        >
          Get Started
        </button>
      </Link>
    </Wrapper>
  );
};

export default Step;
const Wrapper = styled.div`
  height: 432px;
  background-image: url(images/${(props) => props.img});
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
`;
const Number = styled.div`
  width: 56px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & span:first-child {
    width: 2px;
    height: 30px;
    background-color: #87879d;
  }

  & span:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 56px;
    border: 1px solid #87879d;
    border-radius: 100%;
  }
`;
const Titile = styled.h3``;
const Details = styled.p``;
