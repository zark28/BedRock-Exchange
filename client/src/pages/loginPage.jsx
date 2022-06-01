import React from 'react';

import LoginCard from '../components/LoginCard';
import NestedLayout from '../components/NestedLayout';
const LoginPage = () => {
  return (
    <NestedLayout title="admin login">
      <LoginCard />
    </NestedLayout>
  );
};

export default LoginPage;
