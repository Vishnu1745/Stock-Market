
import React from 'react';
import ArticleContent from '@/components/ArticleContent';

const HowStockMarketWorks: React.FC = () => {
  return (
    <ArticleContent
      title="How the Stock Market Works"
      category="Beginner"
      readingTime="7 min read"
      content={
        <>
          <p className="mb-4">
            The stock market is a complex system where shares of publicly held companies are issued,
            bought, and sold. It's a meeting point for buyers and sellers to trade financial securities.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-3">Stock Exchanges</h2>
          <p className="mb-4">
            Stock exchanges are organized marketplaces where stocks are traded. Major exchanges include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2"><strong>New York Stock Exchange (NYSE)</strong>: The world's largest stock exchange by market capitalization</li>
            <li className="mb-2"><strong>NASDAQ</strong>: Known for technology stocks and electronic trading</li>
            <li className="mb-2"><strong>London Stock Exchange (LSE)</strong>: One of Europe's oldest stock exchanges</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-6 mb-3">The Trading Process</h2>
          <p className="mb-4">
            When you place an order to buy or sell stocks, it follows these steps:
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li className="mb-2">You place an order through a brokerage platform</li>
            <li className="mb-2">The broker sends your order to the exchange</li>
            <li className="mb-2">The order is matched with a corresponding sell/buy order</li>
            <li className="mb-2">The trade is executed and confirmed</li>
            <li className="mb-2">Settlement occurs within a standard timeframe (typically T+2, meaning two business days after the transaction)</li>
          </ol>
          
          <h2 className="text-2xl font-bold mt-6 mb-3">Market Participants</h2>
          <p className="mb-4">
            Several key players make the market function:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2"><strong>Individual investors</strong>: People investing their own money</li>
            <li className="mb-2"><strong>Institutional investors</strong>: Organizations like pension funds, mutual funds, and insurance companies</li>
            <li className="mb-2"><strong>Market makers</strong>: Firms that provide liquidity by always being ready to buy or sell</li>
            <li className="mb-2"><strong>Brokers</strong>: Intermediaries that execute trades on behalf of investors</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-6 mb-3">Market Indexes</h2>
          <p className="mb-6">
            Market indexes track the performance of a specific group of stocks, giving investors a 
            general idea of market direction. Famous examples include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2"><strong>S&P 500</strong>: Tracks 500 large U.S. companies</li>
            <li className="mb-2"><strong>Dow Jones Industrial Average</strong>: Follows 30 large U.S. companies</li>
            <li className="mb-2"><strong>NASDAQ Composite</strong>: Includes all NASDAQ-listed stocks</li>
          </ul>
        </>
      }
    />
  );
};

export default HowStockMarketWorks;
