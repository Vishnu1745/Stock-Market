
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import StockCard from '@/components/StockCard';
import { Search } from 'lucide-react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Stocks: React.FC = () => {
  return (
    <div className="container mx-auto py-8 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-finance-blue mb-3">Stock Market Explorer</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover trending stocks and track market performance
        </p>
      </div>
      
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            className="pl-10" 
            placeholder="Search for stocks, e.g. AAPL, TSLA..."
            type="search"
          />
          <Button className="absolute right-0 top-0 rounded-l-none">
            Search
          </Button>
        </div>
      </div>

      <Tabs defaultValue="trending" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="indices">Market Indices</TabsTrigger>
          <TabsTrigger value="sectors">Sectors</TabsTrigger>
        </TabsList>
        
        <TabsContent value="trending" className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingStocks.map((stock) => (
              <StockCard
                key={stock.symbol}
                symbol={stock.symbol}
                name={stock.name}
                price={stock.price}
                change={stock.change}
                changePercent={stock.changePercent}
                chartData={stock.chartData}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="indices" className="mt-8">
          <div className="chart-container mb-8">
            <h2 className="text-xl font-bold mb-4">Major Indices Performance</h2>
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={indicesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sp500" stroke="#0066cc" name="S&P 500" />
                <Line type="monotone" dataKey="nasdaq" stroke="#00cc66" name="NASDAQ" />
                <Line type="monotone" dataKey="dow" stroke="#ff9933" name="Dow Jones" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketIndices.map((index) => (
              <div key={index.name} className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold">{index.name}</h3>
                  <span className={`${index.change >= 0 ? 'text-finance-green' : 'text-finance-red'} font-medium`}>
                    {index.change >= 0 ? '+' : ''}{index.change.toFixed(2)}%
                  </span>
                </div>
                <p className="text-2xl font-bold mb-4">{index.value.toLocaleString()}</p>
                <div className="h-[100px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={index.data}>
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke={index.change >= 0 ? '#00cc66' : '#cc0000'} 
                        dot={false} 
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="sectors" className="mt-8">
          <div className="chart-container mb-8">
            <h2 className="text-xl font-bold mb-4">Sector Performance (Last 30 Days)</h2>
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={sectorPerformance} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={150} />
                <Tooltip />
                <Bar 
                  dataKey="performance" 
                  barSize={20} 
                  fill={(entry: any) => entry.performance >= 0 ? '#00cc66' : '#cc0000'} 
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Mock data for trending stocks
const trendingStocks = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 172.58,
    change: 2.35,
    changePercent: 1.38,
    chartData: Array.from({ length: 15 }, (_, i) => ({
      date: `2023-06-${i + 1}`,
      price: 170 + Math.random() * 10 - Math.random() * 5
    }))
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corp.",
    price: 334.12,
    change: 4.23,
    changePercent: 1.28,
    chartData: Array.from({ length: 15 }, (_, i) => ({
      date: `2023-06-${i + 1}`,
      price: 330 + Math.random() * 15 - Math.random() * 5
    }))
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: 243.84,
    change: -5.62,
    changePercent: -2.25,
    chartData: Array.from({ length: 15 }, (_, i) => ({
      date: `2023-06-${i + 1}`,
      price: 250 - i * 0.5 + Math.random() * 10 - Math.random() * 5
    }))
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 128.73,
    change: 1.84,
    changePercent: 1.45,
    chartData: Array.from({ length: 15 }, (_, i) => ({
      date: `2023-06-${i + 1}`,
      price: 125 + Math.random() * 8 - Math.random() * 4
    }))
  },
  {
    symbol: "GOOG",
    name: "Alphabet Inc.",
    price: 124.95,
    change: -0.83,
    changePercent: -0.66,
    chartData: Array.from({ length: 15 }, (_, i) => ({
      date: `2023-06-${i + 1}`,
      price: 125 + Math.random() * 5 - Math.random() * 5
    }))
  },
  {
    symbol: "META",
    name: "Meta Platforms Inc.",
    price: 292.86,
    change: 3.45,
    changePercent: 1.19,
    chartData: Array.from({ length: 15 }, (_, i) => ({
      date: `2023-06-${i + 1}`,
      price: 285 + i * 0.6 + Math.random() * 7 - Math.random() * 3
    }))
  }
];

// Mock data for market indices
const indicesData = Array.from({ length: 30 }, (_, i) => {
  const baseDate = new Date();
  baseDate.setDate(baseDate.getDate() - (29 - i));
  
  return {
    date: baseDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    sp500: 4200 + i * 5 + Math.random() * 50 - Math.random() * 40,
    nasdaq: 13000 + i * 15 + Math.random() * 120 - Math.random() * 100,
    dow: 34000 + i * 10 + Math.random() * 100 - Math.random() * 80
  };
});

// Mock data for market indices
const marketIndices = [
  {
    name: "S&P 500",
    value: 4335.65,
    change: 0.74,
    data: Array.from({ length: 30 }, (_, i) => ({
      date: `2023-06-${i + 1}`,
      value: 4300 + Math.random() * 100 - Math.random() * 50
    }))
  },
  {
    name: "NASDAQ Composite",
    value: 13561.23,
    change: 1.15,
    data: Array.from({ length: 30 }, (_, i) => ({
      date: `2023-06-${i + 1}`,
      value: 13500 + i * 2 + Math.random() * 150 - Math.random() * 70
    }))
  },
  {
    name: "Dow Jones Industrial",
    value: 34268.73,
    change: -0.25,
    data: Array.from({ length: 30 }, (_, i) => ({
      date: `2023-06-${i + 1}`,
      value: 34300 - i * 1.5 + Math.random() * 100 - Math.random() * 120
    }))
  }
];

// Mock data for sector performance
const sectorPerformance = [
  { name: "Technology", performance: 3.2 },
  { name: "Healthcare", performance: 1.7 },
  { name: "Energy", performance: -2.1 },
  { name: "Financials", performance: 0.8 },
  { name: "Consumer Discretionary", performance: -1.4 },
  { name: "Communication Services", performance: 2.5 },
  { name: "Industrials", performance: 1.1 },
  { name: "Materials", performance: -0.9 },
  { name: "Utilities", performance: -0.3 },
  { name: "Real Estate", performance: -1.8 }
];

export default Stocks;
