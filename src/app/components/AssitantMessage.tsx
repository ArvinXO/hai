import React, { useState } from "react";

interface AssistantMessageProps {
  message: {
    content: string;
    role: string;
  };
  copied: boolean;
  setCopied: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AssistantMessage = ({ message }: AssistantMessageProps) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex justify-end items-center backdrop-filter-blur">
      <div
        className={`relative rounded-xl p-4 shadow-md flex flex-col max-w-md ${
          message.role === "assistant"
            ? "bg-purple-800 text-white"
            : "bg-secondary text-primary"
        }`}
      >
        <p>{message.content}</p>
        <div className="mt-2 p-2 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white shadow-lg flex items-center justify-end">
          <button
            onClick={() => {
              navigator.clipboard.writeText(message.content);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
            }}
            className="p-2 rounded-lg bg-white hover:bg-gray-100 transition-colors duration-200 text-black justify-end items-end flex"
            title="Copy to clipboard"
          >
            {copied ? "Copied!" : "📋"}
          </button>
        </div>
      </div>
    </div>
  );
};
