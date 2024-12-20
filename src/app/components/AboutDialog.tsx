"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import Image from "next/image";

export const AboutDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Info className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-purple-900/90 backdrop-blur-lg text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <div className="w-6 h-6 relative">
              <Image
                src="/assets/chatbot.svg"
                alt="HAI Chat"
                fill
                className="object-contain"
              />
            </div>
            About HAI Chat
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-sm text-gray-300">
            HAI Chat is a modern AI chat application built with Next.js and Tailwind CSS.
            It features a responsive design, dark mode support, and seamless AI interactions.
          </p>
          <div className="mt-4 text-sm text-gray-300">
            <h3 className="font-semibold text-white mb-2">Features:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Real-time AI chat interactions</li>
              <li>Dark/Light mode support</li>
              <li>Responsive design for all devices</li>
              <li>Modern UI with smooth animations</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
