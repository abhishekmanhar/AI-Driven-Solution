
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DemoSection from '@/components/DemoSection';
import Footer from '@/components/Footer';
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Separator />
      <DemoSection />
      <section id="benefits" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Use AI for Development?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
              Discover how AI can transform your development workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col rounded-lg border border-border p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Increased Productivity</h3>
              <p className="text-muted-foreground mb-4">
                Developers using AI assistants report up to 55% faster coding speeds, allowing them to focus on solving complex problems instead of writing boilerplate code.
              </p>
              <div className="mt-auto">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '88%' }}></div>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>Productivity</span>
                  <span>88%</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col rounded-lg border border-border p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Reduced Errors</h3>
              <p className="text-muted-foreground mb-4">
                AI-assisted development can help identify bugs and potential issues before they make it to production, reducing debugging time by up to 70%.
              </p>
              <div className="mt-auto">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>Error Reduction</span>
                  <span>75%</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col rounded-lg border border-border p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Learning Acceleration</h3>
              <p className="text-muted-foreground mb-4">
                Developers can learn new languages and frameworks faster with AI explanations and examples, reducing the learning curve by up to 60%.
              </p>
              <div className="mt-auto">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>Learning Speed</span>
                  <span>92%</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col rounded-lg border border-border p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Code Quality</h3>
              <p className="text-muted-foreground mb-4">
                AI suggestions help maintain consistent coding standards and best practices, leading to more maintainable and readable codebases.
              </p>
              <div className="mt-auto">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '83%' }}></div>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>Quality Improvement</span>
                  <span>83%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
