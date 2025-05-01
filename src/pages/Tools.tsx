
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import InvestmentCalculator from '@/components/InvestmentCalculator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const Tools: React.FC = () => {
  const [riskScore, setRiskScore] = React.useState<number>(5);
  const [timeHorizon, setTimeHorizon] = React.useState<string>("medium");
  
  const getRiskProfile = () => {
    if (riskScore <= 3) {
      return {
        type: "Conservative",
        description: "Focus on preserving capital with minimal risk. Suitable for short-term goals or those close to retirement.",
        allocation: { stocks: 20, bonds: 70, cash: 10 },
        color: "blue"
      };
    } else if (riskScore <= 7) {
      return {
        type: "Moderate",
        description: "Balanced approach with moderate risk for long-term growth while maintaining some stability.",
        allocation: { stocks: 60, bonds: 35, cash: 5 },
        color: "green"
      };
    } else {
      return {
        type: "Aggressive",
        description: "Maximizing growth potential with higher volatility. Suitable for long-term investors who can tolerate market fluctuations.",
        allocation: { stocks: 80, bonds: 15, cash: 5 },
        color: "orange"
      };
    }
  };
  
  const riskProfile = getRiskProfile();

  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-bold text-finance-blue mb-3">Investment Tools</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Use our calculators and tools to plan your investments and understand potential returns.
        </p>
      </div>
      
      <Tabs defaultValue="calculators" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="calculators">Investment Calculators</TabsTrigger>
          <TabsTrigger value="risktool">Risk Assessment</TabsTrigger>
        </TabsList>
        
        <TabsContent value="calculators" className="mt-8 animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <InvestmentCalculator />
          </div>
        </TabsContent>
        
        <TabsContent value="risktool" className="mt-8 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Risk Tolerance Assessment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="mb-2 block">
                    How comfortable are you with investment risk? ({riskScore}/10)
                  </Label>
                  <Slider
                    value={[riskScore]}
                    min={1}
                    max={10}
                    step={1}
                    onValueChange={(value) => setRiskScore(value[0])}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>Low Risk</span>
                    <span>High Risk</span>
                  </div>
                </div>
                
                <div>
                  <Label className="mb-3 block">What is your investment time horizon?</Label>
                  <RadioGroup value={timeHorizon} onValueChange={setTimeHorizon}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="short" id="short" />
                      <Label htmlFor="short">Short-term (1-3 years)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medium" id="medium" />
                      <Label htmlFor="medium">Medium-term (3-7 years)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="long" id="long" />
                      <Label htmlFor="long">Long-term (7+ years)</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Your Risk Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 text-finance-${riskProfile.color}`}>
                    {riskProfile.type} Investor
                  </h3>
                  <p className="text-gray-600">{riskProfile.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Suggested Asset Allocation</h4>
                  <div className="h-10 bg-gray-200 rounded-lg overflow-hidden flex">
                    <div 
                      className="bg-finance-blue h-full" 
                      style={{ width: `${riskProfile.allocation.stocks}%` }}
                    >
                      <span className="text-xs text-white p-2 font-medium">
                        {riskProfile.allocation.stocks}% Stocks
                      </span>
                    </div>
                    <div 
                      className="bg-finance-green h-full" 
                      style={{ width: `${riskProfile.allocation.bonds}%` }}
                    >
                      <span className="text-xs text-white p-2 font-medium">
                        {riskProfile.allocation.bonds}% Bonds
                      </span>
                    </div>
                    <div 
                      className="bg-gray-400 h-full" 
                      style={{ width: `${riskProfile.allocation.cash}%` }}
                    >
                      <span className="text-xs text-white p-2 font-medium">
                        {riskProfile.allocation.cash}% Cash
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Recommendations</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-finance-blue text-xs font-bold">✓</span>
                      </div>
                      {riskProfile.type === "Conservative" 
                        ? "Focus on high-quality bonds and dividend stocks" 
                        : riskProfile.type === "Moderate" 
                          ? "Balance between growth stocks and income-generating investments"
                          : "Consider growth-oriented stocks and higher-risk investments"}
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-finance-blue text-xs font-bold">✓</span>
                      </div>
                      {timeHorizon === "short" 
                        ? "Keep a higher percentage in cash-equivalent investments" 
                        : timeHorizon === "medium" 
                          ? "Consider a mix of short and long-term investments"
                          : "You can afford to take more risk with a long time horizon"}
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-finance-blue text-xs font-bold">✓</span>
                      </div>
                      Always ensure your portfolio is well-diversified across multiple sectors
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tools;
