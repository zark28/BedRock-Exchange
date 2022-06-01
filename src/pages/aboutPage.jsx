import React from 'react';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import SectionWrapper from '../components/SectionWrapper';
import styled from 'styled-components';
import AboutActivities from '../components/AboutActivities';
import Benefits from '../components/Benefits';

const AboutPage = ({ heading, img, text }) => {
  return (
    <Layout title="about us">
      <SectionWrapper flow={'flex-col'}>
        <SectionHeading
          heading="BedRock Exchange"
          subHeading="what we are about"
        />
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
    </Layout>
  );
};

export default AboutPage;

const Content = styled.div``;
