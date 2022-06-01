import React from 'react';
import Blogs from '../components/Blogs';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import SectionWrapper from '../components/SectionWrapper';

const BlogPage = () => {
  return (
    <Layout title="blog">
      <SectionWrapper>
        <SectionHeading subHeading="All posts" />
      </SectionWrapper>
      <SectionWrapper flow={'flex-col'}>
        <Blogs />
      </SectionWrapper>
    </Layout>
  );
};

export default BlogPage;
