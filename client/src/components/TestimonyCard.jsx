import React from 'react';
import styled from 'styled-components';
import { GrStar } from 'react-icons/gr';
const TestimonyCard = ({ img, country, name, rating, text }) => {
  return (
    <Wrapper className="w-full shadow-xl rounded-lg text-xl gap-6 bg-white p-5 flex-col">
      <div className="flex gap-10 mb-5 items-center">
        <span className="flex w-24 h-24 rounded-full overflow-hidden object-contain">
          <img className="w-full" src={`/images/${img}`} alt="" />
        </span>
        <span className="flex flex-col gap-5">
          <h5 className="font-bold">{name}</h5>
          <span className="flex items-center justify-center gap-5">
            <p>{country}</p>
            <p className="bg-primaryColor flex items-center justify-center gap-1 text-primaryColor-white px-2 py-1 text-sm  w-auto rounded-lg">
              {rating}
              <GrStar className="text-lg" />
            </p>
          </span>
        </span>
      </div>

      <p>{text}</p>
    </Wrapper>
  );
};

export default TestimonyCard;
const Wrapper = styled.div`
  max-width: 500px;
  min-width: 400px;
`;
