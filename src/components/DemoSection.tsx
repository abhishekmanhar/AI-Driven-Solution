
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from './CodeBlock';
import { codeExamples } from '@/utils/codeExamples';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DemoSection = () => {
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
  const currentExample = codeExamples[currentExampleIndex];

  const goToNextExample = () => {
    setCurrentExampleIndex((prev) => (prev + 1) % codeExamples.length);
  };

  const goToPrevExample = () => {
    setCurrentExampleIndex((prev) => (prev - 1 + codeExamples.length) % codeExamples.length);
  };

  return (
    <section id="demo" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            See AI in Action
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Explore how AI transforms and enhances code in real-time
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold">{currentExample.title}</h3>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={goToPrevExample}
                className="h-8 w-8"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={goToNextExample}
                className="h-8 w-8"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <p className="mb-6 text-muted-foreground">{currentExample.description}</p>
          
          <Tabs defaultValue="before" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="before">Before</TabsTrigger>
              <TabsTrigger value="after">After</TabsTrigger>
            </TabsList>
            <TabsContent value="before">
              <CodeBlock 
                code={currentExample.originalCode} 
                language={currentExample.language} 
                title="Original Code"
              />
            </TabsContent>
            <TabsContent value="after">
              <CodeBlock 
                code={currentExample.enhancedCode} 
                language={currentExample.language} 
                title="AI Enhanced Code"
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
