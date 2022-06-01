import React from 'react';
import styled from 'styled-components';
const NotFoundPage = () => {
  return (
    <div className="w-full h-fll flex flex-col items-center justify-center">
      <Icon src="/images/pagenotfound.svg" alt="erroe404" /> Page Not Found
      error 404
    </div>
  );
};
const Icon = styled.img``;
export default NotFoundPage;
