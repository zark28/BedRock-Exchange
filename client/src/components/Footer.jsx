import React from 'react';
import styled from 'styled-components';
import FooterCard from './FooterCard';
import { Link } from 'react-router-dom';
import TakeAction from './TakeAction';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
const Footer = () => {
  return (
    <Wrapper className=" bg-primaryColor flex flex-col w-full items-center justify-center mt-20">
      <TakeAction />
      <div className="md:w-3/4 md:h-3/4 h-fit  flex flex-col md:flex-row py-5 justify-between items-center">
        <span className="flex md:flex-row flex-col md:justify-start justify-center mr-5  mb-5 h-fit md:h-full items-center gap-10">
          <Link to="/">
            <Icon
              className="md:h-1/2  contain cursor-pointer"
              src="https://bedrock.trade/wp-content/uploads/2022/04/Bedrock-exchange-06-e1651243404845.png"
              alt="logo"
            />
          </Link>
          <FooterCard />
          <div className="flex flex-col  items-center justify-start h-3/5 gap-5  text-primaryColor-white">
            <h5 className="text-xl font-bold">Help</h5>
            <p className="flex items-center justify-start text-xl ">
              <FiPhoneCall className="mr-2 text-primaryColor-whitess" />
              +380632799689
            </p>
            <p className="flex items-center justify-center text-xl ">
              <FiMail className="mr-2 text-primaryColor-white" />
              support@bedrock.trade
            </p>
          </div>
        </span>
        <Link to="/contact">
          <button
            className="text-2xl font-bold py-2 px-3 rounded-lg transition-all duration-75 bg-primaryColor-white text-primaryColor
       hover:text-textColor"
          >
            Get Started
          </button>
        </Link>
      </div>
      <div className="w-full border-t-2 p-5 border-primaryColor-white text-center text-primaryColor-white ">
        Copyright © 2022 BedRock Exchange. All rights reserved
      </div>
    </Wrapper>
  );
};

export default Footer;
const Wrapper = styled.footer`
  height: 70vh;
  @media screen and (max-width: 900px) {
    height: fit-content;
  }
`;
const Icon = styled.img``;
