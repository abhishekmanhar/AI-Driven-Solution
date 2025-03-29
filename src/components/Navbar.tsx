
import React from 'react';
import { Button } from "@/components/ui/button";
import { Code, Menu, Wand2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="border-b py-3 px-4 md:px-6">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-semibold">AICodeHub</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {location.pathname === '/' ? (
            <>
              <a href="#features" className="text-sm text-muted-foreground hover:text-primary">Features</a>
              <a href="#demo" className="text-sm text-muted-foreground hover:text-primary">Demo</a>
              <a href="#benefits" className="text-sm text-muted-foreground hover:text-primary">Benefits</a>
            </>
          ) : (
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link>
          )}
          
          <Link to="/code-enhancer">
            <Button size="sm" className="flex items-center gap-2">
              <Wand2 className="h-4 w-4" />
              Code Enhancer
            </Button>
          </Link>
        </div>
        
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button size="icon" variant="ghost">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8">
              {location.pathname === '/' ? (
                <>
                  <a href="#features" className="text-sm text-muted-foreground hover:text-primary">Features</a>
                  <a href="#demo" className="text-sm text-muted-foreground hover:text-primary">Demo</a>
                  <a href="#benefits" className="text-sm text-muted-foreground hover:text-primary">Benefits</a>
                </>
              ) : (
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link>
              )}
              
              <Link to="/code-enhancer">
                <Button className="w-full flex items-center gap-2">
                  <Wand2 className="h-4 w-4" />
                  Code Enhancer
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
