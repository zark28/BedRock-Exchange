import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const TakeAction = () => {
  return (
    <Wrapper className="w-full flex border-b-2 p-5 border-primaryColor-white flex-col justify-center items-center gap-12 overlay">
      <h3 className="flex flex-col items-center justify-center text-3xl z-10 text-primaryColor-white">
        Subscribe <span>Get Notified of all the Updates.</span>
      </h3>
      <div className=" w-3/4 flex flex-col items-center gap-3 z-10">
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          className="w-full md:w-1/2 p-3 text-xl border-2 border-textColor outline-none text-textColor"
        />
        <Link to="/">
          <button
            className="text-xl font-bold py-2 px-3 rounded-lg transition-all duration-75 text-primaryColor-white bg-primaryColor
       hover:text-textColor"
          >
            Subscribe
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 50vh;
  background-image: url('images/banner-image2.jpg');
  background-position: center;
  background-size: cover;
  position: relative;
`;
export default TakeAction;
