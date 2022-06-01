import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import  {} form 'react-icons/a'

const BenefitCard = ({ title, details, icon }) => {
  return (
    <Wrapper className="md:w-96 w-3/4 p-10 border-2 border-textColor rounded-lg shadow-xl  flex flex-col items-center justify-start gap-8 text-secondaryColor ">
      <span className="w-full flex items-center justify-start text-center gap-4">
        <FontAwesomeIcon icon={icon} className="w-20 h-20 " />
        <Titile className="text-2xl  py-5">{title}</Titile>
      </span>
      <Details className="font-semibold text-xl w-full leading-10">
        {details}
      </Details>
    </Wrapper>
  );
};

export default BenefitCard;
const Wrapper = styled.div`
  height: 500px;
`;
const Titile = styled.h3``;
const Details = styled.p``;
