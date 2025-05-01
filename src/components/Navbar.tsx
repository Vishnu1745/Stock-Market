
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { UserButton, useUser } from '@clerk/clerk-react';
import { Home, BookOpen, TrendingUp, Calculator } from 'lucide-react';

const Navbar: React.FC = () => {
  // Check if Clerk is available by trying to use its hook within a try/catch
  let isClerkAvailable = true;
  let isSignedIn = false;
  
  try {
    // This will throw an error if Clerk provider is not available
    const { isSignedIn: clerkIsSignedIn } = useUser();
    isSignedIn = clerkIsSignedIn ?? false;
  } catch (error) {
    isClerkAvailable = false;
  }

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <TrendingUp className="h-8 w-8 text-finance-blue" />
              <span className="ml-2 text-xl font-bold text-finance-blue">StockPathfinder</span>
            </Link>
            <div className="hidden md:ml-8 md:flex md:space-x-8">
              <Link to="/" className="flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-finance-blue">
                <Home className="mr-1 h-4 w-4" />
                Home
              </Link>
              <Link to="/learn" className="flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-finance-blue">
                <BookOpen className="mr-1 h-4 w-4" />
                Learn
              </Link>
              <Link to="/stocks" className="flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-finance-blue">
                <TrendingUp className="mr-1 h-4 w-4" />
                Stocks
              </Link>
              <Link to="/tools" className="flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-finance-blue">
                <Calculator className="mr-1 h-4 w-4" />
                Tools
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {isClerkAvailable ? (
              isSignedIn ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <div className="flex space-x-4">
                  <Link to="/sign-in">
                    <Button variant="outline">Sign in</Button>
                  </Link>
                  <Link to="/sign-up">
                    <Button>Sign up</Button>
                  </Link>
                </div>
              )
            ) : (
              // Display a placeholder when Clerk is not available
              <div className="flex space-x-4">
                <Link to="/sign-in">
                  <Button variant="outline">Sign in</Button>
                </Link>
                <Link to="/sign-up">
                  <Button>Sign up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
