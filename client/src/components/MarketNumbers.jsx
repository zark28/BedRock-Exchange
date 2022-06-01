import React from 'react';
import styled from 'styled-components';
import { BiPlusMedical } from 'react-icons/bi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faK,
  faPeopleGroup,
  faPeopleRoof,
  faPercentage,
  faProjectDiagram,
  faTicketAlt,
} from '@fortawesome/free-solid-svg-icons';
const MarketNumbers = () => {
  const marketNumbers = [
    {
      numb: 60,
      text: 'Happy customers',
      icon: faPeopleGroup,
      icon2: faK,
    },
    {
      numb: 150,
      text: 'Team members',
      icon: faPeopleRoof,
    },
    {
      numb: 90,
      text: 'Projects completed',
      icon: faProjectDiagram,
      icon2: faPercentage,
    },
    {
      numb: 23,
      text: 'Tickets resolved',
      show: 'yes',
      icon: faTicketAlt,
      icon2: faK,
    },
  ];
  return (
    <div className="w-full text-secondaryColor grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-0 md:flex-wrap items-center justify-center">
      {marketNumbers?.map((marketNumber, i) => (
        <MarketCard
          className="w-full flex text-xl font-bold items-center justify-center gap-5"
          key={i}
        >
          <FontAwesomeIcon icon={marketNumber.icon} className="h-20" />
          <div>
            <span className="flex gap-1 items-center justify-center text-3xl">
              {!marketNumber.show ? <BiPlusMedical className="" /> : ''}

              <span>{marketNumber.numb}</span>
              <FontAwesomeIcon icon={marketNumber.icon2} className="text-lg" />
            </span>
            <p>{marketNumber.text}</p>
          </div>
        </MarketCard>
      ))}
    </div>
  );
};

export default MarketNumbers;
const MarketCard = styled.div``;
