
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Code, BrainCircuit } from 'lucide-react';
import CodeBlock from './CodeBlock';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [showDemo, setShowDemo] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDemoClick = () => {
    toast({
      title: "Demo Activated",
      description: "Redirecting you to our interactive code enhancement tool",
    });
    navigate('/code-enhancer');
  };

  const demoCode = `// Example of AI generating React code
import React, { useState } from 'react';

const AIComponent = () => {
  const [data, setData] = useState([]);
  
  const fetchRecommendations = async () => {
    // AI would analyze your codebase and suggest improvements
    const recommendations = await analyzeCode();
    setData(recommendations);
  };

  return (
    <div className="recommendations">
      <button onClick={fetchRecommendations}>
        Get Smart Suggestions
      </button>
      {data.map(item => (
        <div key={item.id} className="suggestion">
          {item.description}
        </div>
      ))}
    </div>
  );
};`;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-sky-100 py-16 sm:py-24">
      <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
      
      {/* Animated elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-blue-500/10 rounded-full animate-pulse delay-700"></div>
      
      <div className="container relative mx-auto px-4 py-16 md:flex md:items-center md:justify-between md:gap-12 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center md:text-left md:max-w-lg">
          <div className="flex items-center justify-center md:justify-start mb-6">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              <BrainCircuit className="mr-1 h-4 w-4" />
              AI-Powered Development
            </span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Code Smarter
            <span className="block text-blue-600 mt-2">Not Harder</span>
          </h1>
          
          <p className="mx-auto md:mx-0 mt-6 max-w-lg text-xl text-muted-foreground">
            Unlock the power of AI to write better code, solve problems faster, and accelerate your development workflow.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="group px-6 py-6 text-lg flex items-center gap-2" onClick={handleDemoClick}>
              Try Demo
              <Play className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="group px-6 py-6 text-lg flex items-center gap-2">
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        {showDemo ? (
          <div className="mt-12 md:mt-0 max-w-xl mx-auto md:mx-0 transition-all duration-500 ease-in-out animate-fade-in">
            <CodeBlock 
              code={demoCode} 
              language="javascript" 
              title="AI Generated Component"
              className="shadow-xl"
            />
          </div>
        ) : (
          <div className="hidden md:flex items-center justify-center mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-white dark:bg-black rounded-lg overflow-hidden border border-blue-100 shadow-xl p-6 flex items-center justify-center">
                <Code className="h-20 w-20 text-blue-500" />
                <div className="ml-6">
                  <h3 className="text-xl font-bold">Smart Code Generation</h3>
                  <p className="text-muted-foreground">Click "Try Demo" to see it in action</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
