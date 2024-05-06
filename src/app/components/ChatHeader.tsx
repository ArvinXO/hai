// ChatHeader.tsx
import Image from "next/image";
import React from "react";

const chatboticon = "assets/chatbot.svg"; // Path to the chatbot icon image

export const ChatHeader = () => (
  <header className="p-4 py-10 border-b  max-w-3xl mx-auto flex items-center">
    <Image
      src={chatboticon}
      width={32}
      height={32}
      alt="Chatbot icon"
      className="w-8 h-8 mr-2"
    />
    <h1 className="text-2xl font-bold items-center text-white ">HAI</h1>
  </header>
);
