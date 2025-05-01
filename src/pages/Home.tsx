
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { TrendingUp, BookOpen, Calculator } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto animate-fade-in">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-finance-blue mb-4">Navigate the Stock Market with Confidence</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your beginner-friendly guide to understanding investments and making informed financial decisions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/learn">
              <Button size="lg" className="w-full sm:w-auto">
                Start Learning
              </Button>
            </Link>
            <Link to="/stocks">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore Stocks
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-finance-light-gray rounded-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose StockPathfinder</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md animate-slide-up">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-finance-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Simple Education</h3>
              <p className="text-gray-600">
                Comprehensive tutorials that break down complex stock market concepts into easy-to-understand guides.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-finance-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Market Insights</h3>
              <p className="text-gray-600">
                Visual charts and analysis of market trends to help you make data-driven investment decisions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-finance-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Investment Tools</h3>
              <p className="text-gray-600">
                Practical calculators to help you plan investments and understand potential returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Snippet */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Get Started with Stock Basics</h2>
              <p className="text-gray-600 mb-4">
                New to investing? Start with the fundamentals. Learn about stocks, how they work, and why they're an important part of building wealth.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-finance-green font-bold">✓</span>
                  </div>
                  <span>Understanding stock market terminology</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-finance-green font-bold">✓</span>
                  </div>
                  <span>How to analyze company performance</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-finance-green font-bold">✓</span>
                  </div>
                  <span>Learning risk management strategies</span>
                </li>
              </ul>
              <Link to="/learn">
                <Button>Explore Lessons</Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-finance-blue">What is a Stock?</h3>
                <p className="mb-4">
                  A stock represents ownership in a company. When you buy a share of stock, you're purchasing a small piece of that company and becoming a shareholder.
                </p>
                <p className="mb-4">
                  Companies issue stocks to raise capital for growth, operations, or paying off debt. As an investor, you can benefit in two ways:
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Appreciation in stock price (capital gains)</li>
                  <li>Dividend payments (a portion of company profits)</li>
                </ul>
                <div className="text-right">
                  <Link to="/learn/stocks-basics" className="text-finance-blue hover:underline text-sm">
                    Read full article →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-finance-blue text-white rounded-xl my-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Investment Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join StockPathfinder today to access all our educational resources, tools, and market insights.
          </p>
          <Link to="/sign-up">
            <Button variant="secondary" size="lg">
              Create Free Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
