
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-lg font-bold text-finance-blue mb-4">StockPathfinder</h2>
            <p className="text-gray-600 max-w-md">
              Empowering beginners to navigate the stock market with confidence through education, 
              insights, and practical tools.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/learn" className="text-gray-600 hover:text-finance-blue">Educational Content</Link></li>
              <li><Link to="/tools" className="text-gray-600 hover:text-finance-blue">Investment Calculators</Link></li>
              <li><Link to="/stocks" className="text-gray-600 hover:text-finance-blue">Stock Information</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-finance-blue">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-finance-blue">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-finance-blue">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-gray-500 text-center">© {new Date().getFullYear()} StockPathfinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
