import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, ThumbsUp, ThumbsDown } from "lucide-react";

interface AssistantMessageProps {
  message: {
    content: string;
    role: string;
    timestamp?: number;
  };
}

export const AssistantMessage = ({ message }: AssistantMessageProps) => {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-start space-x-2 group"
    >
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-600 flex items-center justify-center shrink-0">
        <span className="text-white text-sm">AI</span>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="bg-purple-900/90 backdrop-blur-sm text-white rounded-2xl p-3 md:p-4 shadow-lg">
          <p className="whitespace-pre-wrap break-words">{message.content}</p>
          
          <div className="mt-2 flex items-center justify-between text-xs text-purple-300">
            <span className="hidden sm:inline">
              {message.timestamp
                ? new Date(message.timestamp).toLocaleTimeString()
                : new Date().toLocaleTimeString()}
            </span>
            
            <div className="flex items-center space-x-1 sm:space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={handleLike}
                className={`p-1 rounded hover:bg-purple-800 transition-colors ${
                  liked ? "text-green-400" : ""
                }`}
              >
                <ThumbsUp size={14} className="sm:w-4 sm:h-4" />
              </button>
              
              <button
                onClick={handleDislike}
                className={`p-1 rounded hover:bg-purple-800 transition-colors ${
                  disliked ? "text-red-400" : ""
                }`}
              >
                <ThumbsDown size={14} className="sm:w-4 sm:h-4" />
              </button>
              
              <button
                onClick={handleCopy}
                className="p-1 rounded hover:bg-purple-800 transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <Check size={14} className="sm:w-4 sm:h-4" /> : <Copy size={14} className="sm:w-4 sm:h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
