
import React from 'react';
import ArticleContent from '@/components/ArticleContent';

const WhatIsAStock: React.FC = () => {
  return (
    <ArticleContent
      title="What is a Stock?"
      category="Beginner"
      readingTime="5 min read"
      content={
        <>
          <p className="mb-4">
            A stock (also known as equity) represents a share in the ownership of a company.
            When you purchase a company's stock, you're buying a small piece of that company,
            called a share.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-3">Why Companies Issue Stocks</h2>
          <p className="mb-4">
            Companies issue stocks to raise capital for various purposes such as funding growth,
            paying off debt, or launching new products. Instead of taking loans from banks, 
            companies can sell shares to the public.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-3">Types of Stocks</h2>
          <p className="mb-4">
            There are two main types of stocks:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2"><strong>Common Stocks</strong>: These typically give shareholders voting rights but are lower in priority during liquidation.</li>
            <li className="mb-2"><strong>Preferred Stocks</strong>: These usually don't come with voting rights but have higher claim on assets and earnings.</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-6 mb-3">How Stock Prices Work</h2>
          <p className="mb-4">
            Stock prices fluctuate based on supply and demand in the market. Factors affecting 
            stock prices include company performance, industry trends, economic indicators, 
            and investor sentiment.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-3">Benefits of Owning Stocks</h2>
          <p className="mb-4">
            Stocks offer several benefits to investors:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2"><strong>Potential for capital appreciation</strong> as the company grows</li>
            <li className="mb-2"><strong>Dividend payments</strong> that provide regular income</li>
            <li className="mb-2"><strong>Voting rights</strong> in company decisions</li>
            <li className="mb-2"><strong>Protection against inflation</strong> over the long term</li>
          </ul>
          
          <p className="mt-6 italic">
            Remember that while stocks can offer significant returns, they also come with risks.
            It's important to research thoroughly and consider diversification in your investment strategy.
          </p>
        </>
      }
    />
  );
};

export default WhatIsAStock;
