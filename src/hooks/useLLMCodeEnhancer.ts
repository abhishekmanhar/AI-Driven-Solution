import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

// The API key for text.cortex
const TEXT_CORTEX_API_KEY = "gAAAAABn51Xnq1-tiyF-Q6FzybU2MsPNW09qMEOAvuh73Jk9jfQFz3NhBiBVg0gz7xrjp5NSel2JhtsrIoOHU3DUlp-bwu5gdT_nORnjW-T6mlAiv4Ijz1fTDwZDvVvErUwwPP5_24tuSF5CGbdqQCsjmcYZOTB3XYedR3rg-wqQz8YOZBGIFXs=";

export const useLLMCodeEnhancer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [enhancedCode, setEnhancedCode] = useState('');
  const { toast } = useToast();

  const enhanceCodeWithLLM = async (userCode: string) => {
    if (!userCode.trim()) {
      toast({
        title: "Empty Code",
        description: "Please enter some code to enhance.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Using the text.cortex API
      const response = await fetch('https://api.textcortex.com/v1/texts/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${TEXT_CORTEX_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'chat-sophos-1',
          messages: [
            {
              role: 'system',
              content: 'You are an expert code transformer. Enhance the given code by improving readability, performance, and using modern JavaScript/TypeScript practices. Provide clean, concise improvements with explanations.'
            },
            {
              role: 'user',
              content: `Please enhance the following code and explain the improvements:\n\n${userCode}`
            }
          ],
          temperature: 0.2,
          max_tokens: 1000,
        }),
      });

      const data = await response.json();
      
      // Extract the response from text.cortex (adjust this based on API response structure)
      const aiEnhancement = data.choices?.[0]?.message?.content || 
                           data.data?.[0]?.content ||
                           'Sorry, unable to enhance the code at this time.';
      
      setEnhancedCode(aiEnhancement);
      
      toast({
        title: "Code Enhanced",
        description: "AI has provided code improvements.",
      });
    } catch (error) {
      console.error('LLM Enhancement Error:', error);
      toast({
        title: "Enhancement Failed",
        description: "Unable to enhance code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { enhanceCodeWithLLM, enhancedCode, isLoading };
};
