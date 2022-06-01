import React from 'react';
import TestimonyCard from './TestimonyCard';

const Testimonies = () => {
  const testimonies = [
    {
      rating: 4.2,
      country: 'Russia',
      name: 'Tatiana Antonov',
      img: 'avatar.svg',
      detailText:
        'I find Bedrock Exchange super convenient. What especially draws me is the fact that funds are secured in an Escrow account; that surely backs my confidence in the platform. I bought a Bulgari necklace from a trusted merchant on the platform and it was truly authentic.',
    },

    {
      rating: 5,
      name: 'Chrles Cooper',
      img: 'avatar.svg',
      country: 'South Africa',
      detailText:
        'It was only recently that my cattle were able to penetrate the international commodities market because of Bedrock Exchange. I considered it too intricate to seek foreign markets. Formerly, I could only content myself with the South African market for selling my livestock until I broadened the scope for myself through this platform. Good stuff this Bedrock Exchange!',
    },
    {
      rating: 4.5,
      name: 'Rachid Z.',
      country: 'Mrocco',
      img: 'avatar.svg',
      detailText:
        'We are a small company producing Cannabidiol (CBD) oil in Morocco and we were struggling to find foreign markets outside of Africa, and the nature of our product still meets with some scepticism here. We recently got on this platform and have been able to penetrate and find willing buyers in European markets and are steadily growing our revenue.',
    },
  ];
  return (
    <div className="w-full grid grid-cols-1 md:flex md:flex-wrap justify-items-center items-start justify-center flex-wrap gap-10">
      {testimonies?.map((testimony, i) => (
        <TestimonyCard
          name={testimony.name}
          country={testimony.country}
          text={testimony.detailText}
          rating={testimony.rating}
          img={testimony.img}
          key={i}
        />
      ))}
    </div>
  );
};

export default Testimonies;
