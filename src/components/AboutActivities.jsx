import React from 'react';
import ActivityCard from './ActivitiyCard';

const AboutActivities = () => {
  const activities = [
    {
      img: 'features1.svg',

      title: 'Find buyers',
      link: '/about/buyers',
      detailText:
        'Easily find verified & willing buyers of cryptocurrencies, precious metals, precious energies, agric commodities, bonds or stocks.',
    },

    {
      img: 'features2.svg',

      title: 'Find sellers',
      link: '/about/sellers',
      detailText:
        'Whether it is cryptocurrencies, precious metals, precious energies, agric commodities, bonds or stocks, find verified sellers of any financial asset. Have crypto delivered directly to your wallet; have your precious metal, or stock certificate shipped to you anywhere in the world.',
    },
  ];
  return (
    <div className="w-full grid grid-cols-1 h-fit justify-items-center align-middle gap-20">
      {activities?.map((activity, i) => (
        <ActivityCard
          heading={activity.title}
          text={activity.detailText}
          img={activity.img}
          link={activity.link}
          key={i}
        />
      ))}
    </div>
  );
};

export default AboutActivities;
