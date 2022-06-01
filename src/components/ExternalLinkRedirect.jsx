import React from 'react';

const ExternalLinkRedirect = ({ url }) => {
  window.location.replace(url);
  return (
    <div
      style={{
        height: '50vh',
      }}
      className="text-5xl flex items-center justify-center"
    >
      <p>Redirecting..............</p>
    </div>
  );
};

export default ExternalLinkRedirect;
