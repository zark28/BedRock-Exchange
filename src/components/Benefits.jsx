import React from 'react';
import BenefitCard from './BenefitCard';

import {
  faShieldHalved,
  faHandSparkles,
  faHeadset,
  faVault,
  faBusinessTime,
} from '@fortawesome/free-solid-svg-icons';

const Benefits = () => {
  const benefits = [
    {
      icon: faHandSparkles,

      title: 'Transparent',
      link: '/about/buyers',
      detailText:
        'We use an Escrow account to lock payment by a customer until he confirms the receipt of a financial asset as ordered before payment is released to the assets merchant.',
    },

    {
      icon: faHeadset,

      title: 'Full client support',
      link: '/about/sellers',
      detailText:
        'Always ready, round the clock, is a robust, multilingual & friendly customer support team to render fast & reliable help should you encounter any hitches while buying or selling.',
    },
    {
      icon: faVault,

      title: 'Vault option',
      link: '/about/sellers',
      detailText:
        'If you don’t want to take physical delivery of your purchased financial asset yet, you can put it in our charge by locking it in our Vault for storage; or if you like, we’ll liquidate it for you & give you the cash.',
    },
    {
      icon: faShieldHalved,

      title: 'Secure',
      link: '/about/sellers',
      detailText:
        'Our system is secure as we adhere to strict KYC protocols & other tight authentication measures to eliminate any fraudulent offers by fake merchants on Bedrock Exchange.',
    },
    {
      icon: faBusinessTime,

      title: 'Deep liquidity',
      link: '/about/sellers',
      detailText:
        'Always ready, round the clock, is a robust, multilingual & friendly customer support team to render fast & reliable help should you encounter any hitches while buying or selling.',
    },
  ];
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center flex-wrap gap-10">
      {benefits?.map((benefit, i) => (
        <BenefitCard
          title={benefit.title}
          details={benefit.detailText}
          icon={benefit.icon}
          key={i}
        />
      ))}
    </div>
  );
};

export default Benefits;
