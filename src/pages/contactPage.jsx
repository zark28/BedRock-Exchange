import React from 'react';
import Layout from '../components/Layout';
import SectionWrapper from '../components/SectionWrapper';
import styled from 'styled-components';
import Input from '../components/Input';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
const ContactPage = () => {
  return (
    <Layout title="contact us">
      <SectionWrapper>
        <ContactInfo className="flex items-center flex-col md:justify-around md:flex-row w-full h-full">
          <div className="text-primaryColor flex flex-col justify-evenly items-start md:gap-10 gap-2  h-full">
            <Titile className="md:text-4xl flex flex-wrap text-2xl font-bold md:tracking-wide w-full">
              CONTACT US
              <br /> BedRock Exchange
            </Titile>
            <ContactDetail className="p-2 text-xl h-full">
              <FiMail /> support@bedrock.trade
            </ContactDetail>
            <ContactDetail className="p-2 text-xl h-full">
              <FiPhoneCall /> +380 632 799 689
            </ContactDetail>
          </div>
          <form className="flex flex-col p-5 justify-between text-primaryColor">
            <div>
              <span className="grid grid-cols-2  w-full gap-5 mb-5">
                <Input
                  type="text"
                  label="Name *"
                  id="name"
                  placeholder="Enter your name"
                />
                <Input
                  type="email"
                  label="Email *"
                  id="email"
                  placeholder="Enter your email"
                />
              </span>
              <span className="flex flex-col w-3/4 items-centre justify-between border-b-2 py-2">
                <label htmlFor="message">Message</label>
                <textarea
                  className='"w-full bg-transparent border-0 outline-none text-lg p-2 text-secondaryColor font-light'
                  label="Message"
                  id="message"
                  placeholder="Type your messagge here...."
                />
              </span>
              <button className="w-full rounded-lg bg-primaryColor text-primaryColor-white text-2xl hover:text-textColor font-bold p-5 mt-10">
                Submit
              </button>
            </div>
          </form>
        </ContactInfo>
      </SectionWrapper>
    </Layout>
  );
};

const ContactInfo = styled.div``;
const ContactDetail = styled.p`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
const Titile = styled.h5``;
export default ContactPage;
