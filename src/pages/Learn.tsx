
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, BookOpen, Info, Calculator } from 'lucide-react';

const Learn: React.FC = () => {
  return (
    <div className="container mx-auto py-8 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-finance-blue mb-3">Stock Market Education</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn the essentials of investing with our beginner-friendly guides and tutorials.
        </p>
      </div>
      
      <Tabs defaultValue="basics" className="w-full">
        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
          <TabsTrigger value="basics" className="flex items-center justify-center">
            <BookOpen className="h-4 w-4 mr-2" /> Basics
          </TabsTrigger>
          <TabsTrigger value="analysis" className="flex items-center justify-center">
            <TrendingUp className="h-4 w-4 mr-2" /> Analysis
          </TabsTrigger>
          <TabsTrigger value="strategies" className="flex items-center justify-center">
            <Calculator className="h-4 w-4 mr-2" /> Strategies
          </TabsTrigger>
          <TabsTrigger value="terminology" className="flex items-center justify-center">
            <Info className="h-4 w-4 mr-2" /> Terminology
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="basics" className="mt-8">
          <div className="grid md:grid-cols-2 gap-6">
            {basicsArticles.map((article, index) => (
              <EducationalCard
                key={index}
                title={article.title}
                description={article.description}
                category={article.category}
                readingTime={article.readingTime}
                link={article.link}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="analysis" className="mt-8">
          <div className="grid md:grid-cols-2 gap-6">
            {analysisArticles.map((article, index) => (
              <EducationalCard
                key={index}
                title={article.title}
                description={article.description}
                category={article.category}
                readingTime={article.readingTime}
                link={article.link}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="strategies" className="mt-8">
          <div className="grid md:grid-cols-2 gap-6">
            {strategiesArticles.map((article, index) => (
              <EducationalCard
                key={index}
                title={article.title}
                description={article.description}
                category={article.category}
                readingTime={article.readingTime}
                link={article.link}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="terminology" className="mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Stock Market Glossary</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {glossaryTerms.map((term, index) => (
                <div key={index} className="border-b pb-4">
                  <h3 className="text-lg font-bold text-finance-blue">{term.term}</h3>
                  <p className="text-gray-600">{term.definition}</p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface EducationalCardProps {
  title: string;
  description: string;
  category: string;
  readingTime: string;
  link: string;
}

const EducationalCard: React.FC<EducationalCardProps> = ({ 
  title,
  description,
  category,
  readingTime,
  link 
}) => {
  return (
    <Card className="educational-card">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 bg-blue-100 text-finance-blue rounded-full text-xs font-medium">
            {category}
          </span>
          <span className="text-xs text-gray-500">{readingTime}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={link} className="text-finance-blue hover:underline text-sm font-medium">
          Read full article →
        </a>
      </CardContent>
    </Card>
  );
};

// Mock data for educational content
const basicsArticles = [
  {
    title: "What is a Stock?",
    description: "Learn about stocks, shares, and what it means to own a piece of a company.",
    category: "Beginner",
    readingTime: "5 min read",
    link: "/learn/what-is-a-stock"
  },
  {
    title: "How the Stock Market Works",
    description: "Understand the basics of how stock exchanges function and how trades are executed.",
    category: "Beginner",
    readingTime: "7 min read",
    link: "/learn/how-stock-market-works"
  },
  {
    title: "Types of Investment Accounts",
    description: "Learn about different account types for investing and their tax implications.",
    category: "Beginner",
    readingTime: "6 min read",
    link: "/learn/investment-accounts"
  },
  {
    title: "Understanding Risk and Return",
    description: "Explore the relationship between risk and potential returns in the stock market.",
    category: "Beginner",
    readingTime: "8 min read",
    link: "/learn/risk-and-return"
  }
];

const analysisArticles = [
  {
    title: "Fundamental Analysis Basics",
    description: "Learn how to analyze a company's financial health and business model.",
    category: "Intermediate",
    readingTime: "10 min read",
    link: "/learn/fundamental-analysis"
  },
  {
    title: "Technical Analysis for Beginners",
    description: "Understand charts, patterns, and indicators to analyze stock price movements.",
    category: "Intermediate",
    readingTime: "12 min read",
    link: "/learn/technical-analysis"
  },
  {
    title: "Reading Financial Statements",
    description: "How to interpret income statements, balance sheets, and cash flow statements.",
    category: "Intermediate",
    readingTime: "15 min read",
    link: "/learn/financial-statements"
  },
  {
    title: "Key Financial Ratios Explained",
    description: "Learn about important metrics like P/E ratio, EPS, and dividend yield.",
    category: "Intermediate",
    readingTime: "9 min read",
    link: "/learn/financial-ratios"
  }
];

const strategiesArticles = [
  {
    title: "Dollar-Cost Averaging",
    description: "Learn about investing a fixed amount regularly regardless of market conditions.",
    category: "Strategy",
    readingTime: "6 min read",
    link: "/learn/dollar-cost-averaging"
  },
  {
    title: "Value Investing for Beginners",
    description: "Understand how to identify undervalued stocks with strong fundamentals.",
    category: "Strategy",
    readingTime: "11 min read",
    link: "/learn/value-investing"
  },
  {
    title: "Building a Diversified Portfolio",
    description: "Learn how to reduce risk by spreading investments across different assets.",
    category: "Strategy",
    readingTime: "8 min read",
    link: "/learn/diversification"
  },
  {
    title: "Long-Term vs. Short-Term Investing",
    description: "Compare different investment timeframes and their appropriate strategies.",
    category: "Strategy",
    readingTime: "7 min read",
    link: "/learn/investment-timeframes"
  }
];

const glossaryTerms = [
  {
    term: "Bear Market",
    definition: "A market condition where prices are falling and investor confidence is low."
  },
  {
    term: "Bull Market",
    definition: "A market condition where prices are rising and investor confidence is high."
  },
  {
    term: "Dividend",
    definition: "A portion of company earnings paid to shareholders, usually on a quarterly basis."
  },
  {
    term: "ETF (Exchange-Traded Fund)",
    definition: "A collection of securities that tracks an index and trades like a stock."
  },
  {
    term: "Market Capitalization",
    definition: "The total value of a company's outstanding shares, calculated by multiplying share price by shares outstanding."
  },
  {
    term: "P/E Ratio (Price-to-Earnings)",
    definition: "A valuation ratio calculated by dividing a company's current share price by its earnings per share."
  },
  {
    term: "Volatility",
    definition: "A statistical measure of the dispersion of returns for a security or market index."
  },
  {
    term: "Yield",
    definition: "The income return on an investment, such as interest or dividends received."
  }
];

export default Learn;
