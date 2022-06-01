import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import AboutActivities from '../components/AboutActivities';
import Benefits from '../components/Benefits';
import Steps from '../components/Steps';
import MarketNumbers from '../components/MarketNumbers';
import Testimonies from '../components/Testimonies';

const index = () => {
  return (
    <Layout>
      <SectionWrapper>
        <Hero />
      </SectionWrapper>
      <SectionWrapper flow={'flex-col'}>
        <SectionHeading heading="WHO WE ARE" subHeading="what we are about" />
        <Content className="text-xl text-center w-full md:w-2/3 my-10 text-secondaryColor leading-loose tracking-wide">
          BedRock Exchange is a physically delivered contracts market Center
          wholly owned by Infinanze technologies and working to build the future
          of global trade.
          <br /> Bedrock Exchange and its systems only authenticate every
          product being offered as well as its source but do not own the
          financial products on offer.
        </Content>
      </SectionWrapper>
      <SectionWrapper flow={'flex-col'}>
        <SectionHeading heading="Our Key Features" />
        <SectionWrapper>
          <AboutActivities />
        </SectionWrapper>
      </SectionWrapper>
      <SectionWrapper flow={'flex-col'}>
        <SectionHeading
          heading="Benefits of BedRock Exchange"
          subHeading="BedRock Exchange is your No. 1 Trade Connector"
        />
        <SectionWrapper>
          <Benefits />
        </SectionWrapper>
      </SectionWrapper>
      <SectionWrapper flow={'flex-col'}>
        <SectionHeading
          heading="Get Started"
          subHeading="It takes only a few minutes to get started in these easy steps:"
        />
        <SectionWrapper>
          <Steps />
        </SectionWrapper>
      </SectionWrapper>
      <SectionWrapper flow={'flex-col'}>
        <SectionHeading
          heading="Our Market Center in Numbers"
          subHeading="Our statistics say a lot"
        />
        <SectionWrapper>
          <MarketNumbers />
        </SectionWrapper>
      </SectionWrapper>
      <SectionWrapper flow={'flex-col'}>
        <SectionHeading
          heading="Client testimonials"
          subHeading="We’re succeeding to deliver what we promised."
        />
        <SectionWrapper>
          <Testimonies />
        </SectionWrapper>
      </SectionWrapper>
    </Layout>
  );
};

export default index;
const Content = styled.div``;
