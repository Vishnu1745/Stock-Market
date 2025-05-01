
import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-finance-light-gray py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-finance-blue">Welcome Back</h1>
          <p className="mt-2 text-gray-600">Sign in to access your StockPathfinder account</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <SignIn 
            routing="path" 
            path="/sign-in" 
            signUpUrl="/sign-up"
            afterSignInUrl="/"
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
