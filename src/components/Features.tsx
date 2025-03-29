
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Terminal, PenTool, TerminalSquare, Sparkles, Brain } from 'lucide-react';

const featuresList = [
  {
    title: "Smart Code Completion",
    description: "Get intelligent code suggestions that understand the context of your project.",
    icon: Code
  },
  {
    title: "Code Explanation",
    description: "Complex code snippets explained in simple, human language.",
    icon: Terminal
  },
  {
    title: "Documentation Generator",
    description: "Automatically create documentation for your functions and classes.",
    icon: PenTool
  },
  {
    title: "Bug Detection",
    description: "Identify potential issues before they become problems.",
    icon: TerminalSquare
  },
  {
    title: "Refactoring Assistance",
    description: "Get suggestions to improve your code structure and readability.",
    icon: Sparkles
  },
  {
    title: "Language Translation",
    description: "Convert code between different programming languages seamlessly.",
    icon: Brain
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            AI-Powered Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Discover how our AI can transform your development workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuresList.map((feature, index) => (
            <Card key={index} className="border border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
