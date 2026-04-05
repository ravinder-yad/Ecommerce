import React from 'react';
import AuthLayout from '../components/Auth/AuthLayout';
import LoginForm from '../components/Auth/LoginForm';

const Login = () => {
  return (
    <AuthLayout 
      title="Welcome Back." 
      subtitle="Enter your credentials to access your designer collections."
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
