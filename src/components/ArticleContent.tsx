
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

interface ArticleContentProps {
  title: string;
  category: string;
  readingTime: string;
  content: React.ReactNode;
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  title,
  category,
  readingTime,
  content
}) => {
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto py-8 max-w-3xl animate-fade-in">
      <Button 
        variant="ghost" 
        onClick={() => navigate('/learn')}
        className="mb-6 flex items-center"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Learn
      </Button>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <span className="px-3 py-1 bg-blue-100 text-finance-blue rounded-full text-xs font-medium">
            {category}
          </span>
          <span className="text-xs text-gray-500">{readingTime}</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-6 text-finance-blue">{title}</h1>
        
        <div className="prose prose-slate max-w-none">
          {content}
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
