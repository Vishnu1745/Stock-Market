
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const InvestmentCalculator: React.FC = () => {
  // Lump sum calculator state
  const [principal, setPrincipal] = useState<number>(10000);
  const [rate, setRate] = useState<number>(8);
  const [years, setYears] = useState<number>(10);
  
  // SIP calculator state
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(1000);
  const [sipRate, setSipRate] = useState<number>(8);
  const [sipYears, setSipYears] = useState<number>(10);

  // Calculate lump sum result
  const calculateLumpSum = () => {
    const r = rate / 100;
    return principal * Math.pow(1 + r, years);
  };

  // Calculate SIP result
  const calculateSIP = () => {
    const monthlyRate = sipRate / 12 / 100;
    const months = sipYears * 12;
    return monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  };

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const lumpSumResult = calculateLumpSum();
  const sipResult = calculateSIP();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">Investment Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="lumpsum">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="lumpsum">Lump Sum</TabsTrigger>
            <TabsTrigger value="sip">Monthly SIP</TabsTrigger>
          </TabsList>
          
          <TabsContent value="lumpsum" className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label>Initial Investment: {formatCurrency(principal)}</Label>
                <Slider
                  value={[principal]}
                  min={1000}
                  max={100000}
                  step={1000}
                  onValueChange={(value) => setPrincipal(value[0])}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label>Annual Return: {rate}%</Label>
                <Slider
                  value={[rate]}
                  min={1}
                  max={20}
                  step={0.5}
                  onValueChange={(value) => setRate(value[0])}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label>Time Period: {years} years</Label>
                <Slider
                  value={[years]}
                  min={1}
                  max={30}
                  step={1}
                  onValueChange={(value) => setYears(value[0])}
                  className="mt-2"
                />
              </div>
            </div>

            <div className="text-center p-6 bg-finance-light-gray rounded-lg">
              <h3 className="text-lg font-medium mb-2">Future Value</h3>
              <p className="text-3xl font-bold text-finance-blue">{formatCurrency(lumpSumResult)}</p>
              <p className="text-sm text-gray-500 mt-2">
                Investment: {formatCurrency(principal)} | Returns: {formatCurrency(lumpSumResult - principal)}
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="sip" className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label>Monthly Investment: {formatCurrency(monthlyInvestment)}</Label>
                <Slider
                  value={[monthlyInvestment]}
                  min={100}
                  max={10000}
                  step={100}
                  onValueChange={(value) => setMonthlyInvestment(value[0])}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label>Annual Return: {sipRate}%</Label>
                <Slider
                  value={[sipRate]}
                  min={1}
                  max={20}
                  step={0.5}
                  onValueChange={(value) => setSipRate(value[0])}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label>Time Period: {sipYears} years</Label>
                <Slider
                  value={[sipYears]}
                  min={1}
                  max={30}
                  step={1}
                  onValueChange={(value) => setSipYears(value[0])}
                  className="mt-2"
                />
              </div>
            </div>

            <div className="text-center p-6 bg-finance-light-gray rounded-lg">
              <h3 className="text-lg font-medium mb-2">Future Value</h3>
              <p className="text-3xl font-bold text-finance-blue">{formatCurrency(sipResult)}</p>
              <p className="text-sm text-gray-500 mt-2">
                Total Invested: {formatCurrency(monthlyInvestment * sipYears * 12)} | 
                Returns: {formatCurrency(sipResult - (monthlyInvestment * sipYears * 12))}
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default InvestmentCalculator;
