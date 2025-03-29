
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'javascript', 
  title,
  className 
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("rounded-lg overflow-hidden border border-border", className)}>
      {title && (
        <div className="flex items-center justify-between bg-secondary px-4 py-2">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-sm text-muted-foreground">{title}</div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={copyToClipboard}
            className="h-8 w-8"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto bg-black text-white text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
