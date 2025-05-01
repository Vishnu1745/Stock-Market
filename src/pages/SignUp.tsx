
import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';

const SignUpPage: React.FC = () => {
  // Check if Clerk is available
  const isClerkAvailable = typeof SignUp === 'function';

  return (
    <div className="flex items-center justify-center min-h-screen bg-finance-light-gray py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-finance-blue">Create an Account</h1>
          <p className="mt-2 text-gray-600">Join StockPathfinder to access all our features</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          {isClerkAvailable ? (
            <SignUp
              routing="path"
              path="/sign-up"
              signInUrl="/sign-in"
              redirectUrl="/"
            />
          ) : (
            <div className="flex flex-col items-center space-y-4">
              <p className="text-yellow-600 mb-4">
                Authentication is currently unavailable. Please add your Clerk publishable key to enable authentication.
              </p>
              <Button className="w-full">Demo Sign Up</Button>
              <div className="text-sm text-gray-500 mt-4 text-center">
                Already have an account?{" "}
                <a href="/sign-in" className="text-finance-blue hover:underline">
                  Sign in
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
