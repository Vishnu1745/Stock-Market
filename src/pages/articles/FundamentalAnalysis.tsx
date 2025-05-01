
import React from 'react';
import ArticleContent from '@/components/ArticleContent';

const FundamentalAnalysis: React.FC = () => {
  return (
    <ArticleContent
      title="Fundamental Analysis Basics"
      category="Intermediate"
      readingTime="10 min read"
      content={
        <>
          <p className="mb-4">
            Fundamental analysis is a method of evaluating securities by attempting to measure their
            intrinsic value. Analysts study everything from the overall economy and industry conditions
            to the financial condition and management of companies.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-3">Key Components of Fundamental Analysis</h2>
          <p className="mb-4">
            Fundamental analysis looks at several key aspects:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2"><strong>Economic analysis</strong>: Examining macroeconomic factors like GDP growth, inflation, and interest rates</li>
            <li className="mb-2"><strong>Industry analysis</strong>: Evaluating the competitive landscape and growth prospects of a specific industry</li>
            <li className="mb-2"><strong>Company analysis</strong>: Studying the company's business model, competitive advantages, management team, and financial health</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-6 mb-3">Financial Statement Analysis</h2>
          <p className="mb-4">
            At the heart of fundamental analysis is the review of financial statements:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2"><strong>Income Statement</strong>: Shows revenues, expenses, and profits over a specific period</li>
            <li className="mb-2"><strong>Balance Sheet</strong>: Provides a snapshot of assets, liabilities, and shareholders' equity</li>
            <li className="mb-2"><strong>Cash Flow Statement</strong>: Tracks the flow of cash in and out of the business</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-6 mb-3">Valuation Methods</h2>
          <p className="mb-4">
            Fundamental analysts use various models to determine a company's intrinsic value:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2"><strong>Discounted Cash Flow (DCF)</strong>: Estimates the value of an investment based on expected future cash flows</li>
            <li className="mb-2"><strong>Price-to-Earnings (P/E) Ratio</strong>: Compares share price to earnings per share</li>
            <li className="mb-2"><strong>Price-to-Book (P/B) Ratio</strong>: Compares market value to book value</li>
            <li className="mb-2"><strong>Enterprise Value to EBITDA</strong>: Compares total company value to earnings before interest, taxes, depreciation, and amortization</li>
          </ul>
          
          <p className="mt-6 italic">
            Remember that fundamental analysis is best used for long-term investment decisions, as it focuses on a company's underlying value rather than short-term market movements.
          </p>
        </>
      }
    />
  );
};

export default FundamentalAnalysis;
