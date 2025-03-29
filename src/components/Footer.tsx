
import React from 'react';
import { Code, Instagram, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-6 w-6" />
              <h2 className="text-xl font-semibold">AICodeHub</h2>
            </div>
            <p className="text-gray-400 max-w-md">
              Transforming development workflows with AI-powered tools designed for developers of all skill levels.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/abhishekmnhr/" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://github.com/abhishekmanhar" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/abhishek-manhar-developer/" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} AICodeHub. All rights reserved. Developed by Abhishek Manhar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
