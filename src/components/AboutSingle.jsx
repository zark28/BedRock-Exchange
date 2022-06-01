import React from 'react';
import NestedLayout from './NestedLayout';
import tw from 'styled-components';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';
import { useParams } from 'react-router-dom';
const AboutSingle = () => {
  const ways = [
    { link: 'buyers', title: 'Find Buyers', subHeading: 'subtitle' },
    { link: 'sellers', title: 'Find Sellers', subHeading: 'subtitle' },
  ];
  const params = useParams();
  const { feature } = params;
  const activeAbout = ways.find((way) => way.link === feature);
  console.log(activeAbout);
  console.log(activeAbout.way);
  return (
    <NestedLayout title={activeAbout.title}>
      <Container className="w-full h-full flex flex-col items-center justify-center">
        <SectionWrapper flow="flex-col md:grid md:grid-cols-2">
          <TextContent className="flex flex-col gap-5 p-10 h-full text-2xl leading-10 text-primaryColor">
            <SectionHeading subHeading={activeAbout.subHeading} />
            <Text className="flex flex-col w-full">{activeAbout.text}</Text>
          </TextContent>
        </SectionWrapper>
      </Container>
    </NestedLayout>
  );
};
const Container = tw.div`  `;
const TextContent = tw.article` `;
const Text = tw.p``;
const Images = tw.div``;
const ImgSpan = tw.div``;
const Img = tw.img` 
width:50%;
padding:4px;
`;

export default AboutSingle;
