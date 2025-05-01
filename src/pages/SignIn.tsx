
import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';

const SignInPage: React.FC = () => {
  // Check if Clerk is available
  const isClerkAvailable = typeof SignIn === 'function';

  return (
    <div className="flex items-center justify-center min-h-screen bg-finance-light-gray py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-finance-blue">Welcome Back</h1>
          <p className="mt-2 text-gray-600">Sign in to access your StockPathfinder account</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          {isClerkAvailable ? (
            <SignIn
              routing="path"
              path="/sign-in"
              signUpUrl="/sign-up"
              redirectUrl="/"
            />
          ) : (
            <div className="flex flex-col items-center space-y-4">
              <p className="text-yellow-600 mb-4">
                Authentication is currently unavailable. Please add your Clerk publishable key to enable authentication.
              </p>
              <Button className="w-full">Demo Sign In</Button>
              <div className="text-sm text-gray-500 mt-4 text-center">
                Don't have an account?{" "}
                <a href="/sign-up" className="text-finance-blue hover:underline">
                  Sign up
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
