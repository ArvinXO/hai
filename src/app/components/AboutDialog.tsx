import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

export const AboutDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Info size={20} />
          About
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-purple-900/90 backdrop-blur-lg text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <img src="/assets/chatbot.svg" alt="HAI Chat" className="w-6 h-6" />
            About HAI Chat
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>
            HAI Chat is an experimental chat interface built for testing and educational purposes.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Technology Stack:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Next.js 13+ with App Router</li>
              <li>TypeScript for type safety</li>
              <li>Tailwind CSS for styling</li>
              <li>Vercel AI SDK for chat functionality</li>
              <li>Framer Motion for animations</li>
              <li>Shadcn/ui for UI components</li>
            </ul>
          </div>
          <p className="text-sm text-purple-200">
            This project is intended for demonstration and learning purposes. It showcases modern web development practices and UI/UX patterns.
          </p>
          <p className="text-xs text-purple-300">
            Version 1.0.0 • Created {new Date().getFullYear()}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
