import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ActivityCard = ({ heading, text, img }) => {
  return (
    <Card
      className={`w-full md:w-3/4 flex flex-col-reverse md:grid md:grid-cols-3 gap-5 text-secondaryColor  p-10 rounded-xl overflow-hidden h-fit object-contain object-center relative  transform hover:scale-90 hover:z-40 transition duration-300`}
    >
      <img
        src={`/images/${img}`}
        alt={heading}
        className=" object-contain w-full h-full"
      />
      <Link to="/about" className="cursor-pointer md:col-span-2">
        <Title className="w-full top-5 left-0 flex flex-col justify-center gap-5 items-center h-fit text-2xl ">
          <h3 className=" text-center w-full md:text-left px-5  ">{heading}</h3>
          <p className=" flex flex-1 text-xl font-semibold leading-10 h-full justify-center items-start px-5">
            {text ? text : ''}
          </p>
        </Title>
      </Link>
    </Card>
  );
};
const Card = styled.div``;
const Title = styled.div`
  min-width: 395px;
`;
export default ActivityCard;
