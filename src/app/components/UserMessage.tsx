import React from "react";

interface UserMessageProps {
  message: {
    content: string;
    role: string;
  };
}

export const UserMessage = ({ message }: UserMessageProps) => (
  <div
    className={`rounded-xl p-4 shadow-md flex backdrop-filter-blur ${
      message.role === "user"
        ? "bg-orange-400 text-white"
        : "bg-secondary text-primary"
    }`}
  >
    <p>{message.content}</p>
  </div>
);
