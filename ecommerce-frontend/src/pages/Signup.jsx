import React from 'react';
import AuthLayout from '../components/Auth/AuthLayout';
import SignupForm from '../components/Auth/SignupForm';

const Signup = () => {
  return (
    <AuthLayout 
      title="Join The Vibe." 
      subtitle="Start your journey with ShopVerse and unlock global luxury."
    >
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;
