// ChatHeader.tsx
import React from "react";
import { motion } from "framer-motion";
import { Bot, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutDialog } from './AboutDialog';

interface ChatHeaderProps {
  onToggleSidebar: () => void;
}

export const ChatHeader = ({ onToggleSidebar }: ChatHeaderProps) => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="p-4 border-b border-gray-800/20 backdrop-blur-lg bg-gray-800/30"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            className="hover:bg-gray-700/50"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold">New Chat</h1>
              <p className="text-xs text-gray-400">AI Assistant</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <AboutDialog />
        </div>
      </div>
    </motion.header>
  );
};
