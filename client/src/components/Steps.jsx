import React from 'react';
import Step from './Step';

const Steps = () => {
  const steps = [
    {
      img: 'account.svg',
      title: 'Create account',
      link: '/about/buyers',
      detailText:
        'Get started by inputting all your required details as an individual, corporate, or government body & submit them for verification.',
    },

    {
      img: 'verify.svg',
      title: 'Get verified',
      link: '/about/sellers',
      detailText:
        'Your submitted credentials would then be subjected to verification before your account gets approved.',
    },
    {
      img: 'trade.svg',
      title: 'Start trading',
      link: '/about/sellers',
      detailText:
        'With your account approved, start selling, as a merchant, or buying, as a customer, your choice of financial products.',
    },
  ];
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center flex-wrap gap-10">
      {steps?.map((step, i) => (
        <Step
          title={step.title}
          details={step.detailText}
          img={step.img}
          key={i}
          index={i}
        />
      ))}
    </div>
  );
};

export default Steps;
