import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

interface UserMessageProps {
  message: {
    content: string;
    role: string;
    timestamp?: number;
  };
}

export const UserMessage = ({ message }: UserMessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-start space-x-2 flex-row-reverse group"
    >
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/90 flex items-center justify-center shrink-0">
        <User className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="bg-white/90 backdrop-blur-sm text-gray-800 rounded-2xl p-3 md:p-4 shadow-lg ml-auto">
          <p className="whitespace-pre-wrap break-words">{message.content}</p>
          
          <div className="mt-2 flex items-center justify-end text-xs text-gray-500">
            <span className="hidden sm:inline">
              {message.timestamp
                ? new Date(message.timestamp).toLocaleTimeString()
                : new Date().toLocaleTimeString()}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
