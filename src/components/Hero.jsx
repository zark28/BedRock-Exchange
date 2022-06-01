import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <Wrapper
      id="hero"
      className="  w-full flex flex-col  justify-center gap-10 items-center md:flex-row md:justify-between"
    >
      <HeroText className="h-full hero-text px-10 w-full text-center md:text-left md:w-1/2 flex flex-col justify-end gap-14 items-center">
        <h1 className=" text-secondaryColor text-2xl md:text-3xl font-bold">
          Transparent Exchange of Financial Assets for Individuals, Merchants,
          Corporate, Government & Institutional Investors.
        </h1>

        <p className="text-textColor text-lg md:text-xl">
          Buy or sell cryptocurrencies, fiat currencies, precious metals,
          agricultural commodities, precious energies, stocks, & bonds, through
          a secure & transparent platform.
        </p>
        <Link to="/contact" className="w-full">
          <button
            className="text-3xl w-full font-bold p-5 rounded-lg transition-all duration-75 text-primaryColor-white bg-primaryColor
       hover:text-textColor"
          >
            Start Exchange
          </button>
        </Link>
      </HeroText>
      <HeroImage className="hidden md:flex h-full w-full justify-center items-end  md:w-1/2 hero-img ">
        <img
          className="w-full h-full md:object-contain object-bottom"
          src="/images/banner-image1.png"
          alt="hero"
        />
      </HeroImage>
    </Wrapper>
  );
};

export default Hero;
const Wrapper = styled.div``;
const HeroText = styled.div`
  min-width: 430px;
`;
const HeroImage = styled.div``;
