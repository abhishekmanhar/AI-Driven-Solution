import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from '@/components/CodeBlock';
import { ArrowRight, Wand2, Loader2, CheckCircle2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLLMCodeEnhancer } from '@/hooks/useLLMCodeEnhancer';

const codeExamples = {
  optimization: {
    before: `function calculateFactorial(n) {
  // Calculate factorial
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result = result * i;
    }
    return result;
  }
}`,
    after: `function calculateFactorial(n) {
  // Base case - early return for 0 and 1
  if (n <= 1) return 1;
  
  // Using a more efficient algorithm with memoization
  return n * calculateFactorial(n - 1);
}`,
  },
  readability: {
    before: `function f(x,y) {
  var z = 0;
  for(var i=0;i<x.length;i++) {
    if(x[i]>10){z+=y*x[i];}
  }
  return z;
}`,
    after: `function calculateWeightedSum(numbers, multiplier) {
  let sum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    
    if (currentNumber > 10) {
      sum += multiplier * currentNumber;
    }
  }
  
  return sum;
}`,
  },
  modernization: {
    before: `var users = [];
function addUser(name, age) {
  users.push({
    name: name,
    age: age
  });
}

function getAdults() {
  var results = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
      results.push(users[i]);
    }
  }
  return results;
}`,
    after: `// Using modern JavaScript features
const users = [];

const addUser = (name, age) => {
  users.push({ name, age });
};

const getAdults = () => users.filter(user => user.age >= 18);`,
  }
};

const CodeEnhancer = () => {
  const [userCode, setUserCode] = useState('');
  const [activeTab, setActiveTab] = useState('editor');
  const [selectedExample, setSelectedExample] = useState('');
  const { enhanceCodeWithLLM, enhancedCode, isLoading } = useLLMCodeEnhancer();
  const { toast } = useToast();

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserCode(e.target.value);
  };

  const enhanceCode = () => {
    enhanceCodeWithLLM(userCode);
    setActiveTab('result');
  };

  const loadExample = (type: string) => {
    setSelectedExample(type);
    setUserCode(codeExamples[type as keyof typeof codeExamples].before);
    setActiveTab('editor');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
              AI Code Enhancer
            </h1>
            <p className="text-xl text-muted-foreground">
              Transform your code with AI-powered improvements
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Select an example to try:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button 
                variant={selectedExample === 'optimization' ? 'default' : 'outline'}
                className="justify-start" 
                onClick={() => loadExample('optimization')}
              >
                Performance Optimization
              </Button>
              <Button 
                variant={selectedExample === 'readability' ? 'default' : 'outline'}
                className="justify-start" 
                onClick={() => loadExample('readability')}
              >
                Improve Readability
              </Button>
              <Button 
                variant={selectedExample === 'modernization' ? 'default' : 'outline'}
                className="justify-start" 
                onClick={() => loadExample('modernization')}
              >
                Modernize Code
              </Button>
            </div>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Code</CardTitle>
              <CardDescription>
                Paste your code below or select an example, then let our AI enhance it
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="editor">Code Editor</TabsTrigger>
                  <TabsTrigger value="result" disabled={!enhancedCode}>Enhanced Result</TabsTrigger>
                </TabsList>
                <TabsContent value="editor" className="pt-4">
                  <textarea
                    value={userCode}
                    onChange={handleCodeChange}
                    placeholder="Paste your code here or select an example above"
                    className="w-full min-h-[300px] p-4 font-mono text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black text-white"
                  />
                </TabsContent>
                <TabsContent value="result" className="pt-4">
                  {enhancedCode && (
                    <CodeBlock 
                      code={enhancedCode} 
                      language="javascript" 
                      title="AI Enhanced Code"
                    />
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setUserCode('')}>
                Clear
              </Button>
              <Button 
                onClick={enhanceCode}
                className="bg-gradient-to-r from-blue-600 to-indigo-600"
                disabled={isLoading || !userCode}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enhancing...
                  </>
                ) : enhancedCode ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Enhanced
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Enhance Code
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
              <CardDescription>
                Our AI analyzes your code and applies best practices to improve it
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal ml-5 space-y-2">
                <li>Paste your code or select an example from above</li>
                <li>Click "Enhance Code" to start the AI analysis</li>
                <li>Review the AI-enhanced version with improvements</li>
                <li>Copy the enhanced code for use in your projects</li>
              </ol>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                The AI can optimize for performance, readability, and modern coding practices.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CodeEnhancer;
