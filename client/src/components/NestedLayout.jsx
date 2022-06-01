import React from 'react';
import SocialLinks from './SocialLinks';

const NestedLayout = ({ title, children, addForm, updateForm }) => {
  document.title = title ? `${title} - Bedrock Exchange` : `Bedrock Exchange`;
  return (
    <div className="w-full flex relative flex-col justify-center items-center">
      {addForm || updateForm ? (
        <div className="absolute top-0 left-0 bottom-0 w-full  bg-textColor opacity-50 z-20"></div>
      ) : (
        ''
      )}
      <span className="flex p-5 w-full">
        <SocialLinks />
      </span>

      {children}
    </div>
  );
};

export default NestedLayout;
