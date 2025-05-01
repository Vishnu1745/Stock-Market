
import React from 'react';
import ArticleContent from '@/components/ArticleContent';

const DollarCostAveraging: React.FC = () => {
  return (
    <ArticleContent
      title="Dollar-Cost Averaging"
      category="Strategy"
      readingTime="6 min read"
      content={
        <>
          <p className="mb-4">
            Dollar-cost averaging (DCA) is an investment strategy where you invest a fixed amount of money
            at regular intervals, regardless of share price. This approach can help reduce the impact of
            volatility on your overall purchase.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-3">How Dollar-Cost Averaging Works</h2>
          <p className="mb-4">
            With DCA, you invest the same amount of money on a regular schedule (weekly, monthly, etc.)
            into the same investment. This means you buy:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">More shares when prices are low</li>
            <li className="mb-2">Fewer shares when prices are high</li>
          </ul>
          <p className="mb-4">
            Over time, this can lower your average cost per share compared to making a lump-sum investment.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-3">Benefits of Dollar-Cost Averaging</h2>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2"><strong>Reduces timing risk</strong>: You don't need to worry about buying at the "right time"</li>
            <li className="mb-2"><strong>Provides discipline</strong>: Helps establish a regular investing habit</li>
            <li className="mb-2"><strong>Minimizes emotional decisions</strong>: Removes the temptation to time the market based on emotions</li>
            <li className="mb-2"><strong>Works well for beginners</strong>: Simple strategy that doesn't require market expertise</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-6 mb-3">Example of Dollar-Cost Averaging</h2>
          <p className="mb-4">
            Let's say you invest $500 monthly in a stock over four months:
          </p>
          <ul className="list-none pl-6 mb-4">
            <li className="mb-2">Month 1: $500 at $50/share = 10 shares</li>
            <li className="mb-2">Month 2: $500 at $40/share = 12.5 shares</li>
            <li className="mb-2">Month 3: $500 at $60/share = 8.33 shares</li>
            <li className="mb-2">Month 4: $500 at $50/share = 10 shares</li>
          </ul>
          <p className="mb-4">
            Total investment: $2,000<br />
            Total shares: 40.83<br />
            Average cost per share: $49 ($2,000 ÷ 40.83)<br />
            <br />
            If you had invested $2,000 all at once in Month 1, you would have paid $50 per share.
            Through dollar-cost averaging, you paid an average of $49 per share.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-3">When to Use Dollar-Cost Averaging</h2>
          <p className="mb-4">
            DCA is particularly useful:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">For long-term investors with regular income</li>
            <li className="mb-2">In volatile markets where timing is difficult</li>
            <li className="mb-2">When you're unsure about market direction</li>
            <li className="mb-2">For retirement accounts like 401(k)s and IRAs</li>
          </ul>
        </>
      }
    />
  );
};

export default DollarCostAveraging;
