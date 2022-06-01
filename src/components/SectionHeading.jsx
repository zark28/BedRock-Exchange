import React from 'react';
import tw from 'styled-components';
const SectionHeading = ({ heading, subHeading }) => {
  return (
    <Wrapper className="w-full text-secondaryColor px-4 flex flex-col items-center mt-10  md:insert-x-1 md:bottom-1/4">
      <h1 className="text-6xl w-full font-bold text-center">{heading}</h1>
      <p className="text-2xl font-bold w-full text-center mt-4">{subHeading}</p>
    </Wrapper>
  );
};

export default SectionHeading;
const Wrapper = tw.div``;
