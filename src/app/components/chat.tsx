"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";
import { useRef, useEffect, useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { AssistantMessage } from "./AssitantMessage";
import { UserMessage } from "./UserMessage";
import { Sidebar } from "./Sidebar";
import { Send } from "lucide-react";
import Image from "next/image";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const chatParent = useRef<HTMLUListElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const domNode = chatParent.current;
    if (domNode) {
      domNode.scrollTop = domNode.scrollHeight;
    }
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`;
    }
  };

  return (
    <main className={`flex flex-col w-full h-screen max-h-dvh transition-all duration-500 ease-in-out ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
    }`}>
      <div className="flex flex-row h-full relative">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          isDarkMode={isDarkMode}
          onThemeToggle={() => setIsDarkMode(!isDarkMode)}
        />
        <div className="flex flex-col w-full min-w-0">
          <ChatHeader onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <section className="flex-1 overflow-hidden">
            <div className="container h-full px-2 md:px-4 pb-6 flex flex-col mx-auto max-w-4xl">
              <ul
                ref={chatParent}
                className={`flex-1 p-2 md:p-4 rounded-lg overflow-y-auto flex flex-col gap-6 transition-all duration-500 ease-in-out custom-scrollbar ${
                  isDarkMode ? 'bg-gray-800/30' : 'bg-white/80'
                }`}
              >
                {!messages.length ? (
                  <div className="flex flex-col items-center justify-center h-full text-center opacity-60">
                    <div className="w-12 h-12 md:w-16 md:h-16 mb-4 relative">
                      <Image
                        src="/assets/chatbot.svg"
                        alt="Chat Bot"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className={`text-lg md:text-xl font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                      Welcome to HAI Chat!
                    </h3>
                    <p className={`text-sm max-w-md ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Start a conversation by typing a message below. I&apos;m here to help!
                    </p>
                  </div>
                ) : (
                  <>
                    {messages.map((m, index) =>
                      m.role === "assistant" ? (
                        <AssistantMessage
                          key={index}
                          message={{ ...m, timestamp: Date.now() }}
                        />
                      ) : (
                        <UserMessage 
                          key={index}
                          message={{ ...m, timestamp: Date.now() }}
                        />
                      )
                    )}
                    {isTyping && (
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                          <span className="text-white text-sm">AI</span>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    )}
                  </>
                )}
              </ul>
              
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsTyping(true);
                  handleSubmit(e).finally(() => setIsTyping(false));
                }}
                className={`mt-4 flex w-full max-w-4xl mx-auto items-end gap-2 p-2 rounded-xl transition-all duration-500 ease-in-out ${
                  isDarkMode ? 'bg-gray-800/50' : 'bg-white/80'
                }`}
              >
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => {
                    handleInputChange(e);
                    adjustTextareaHeight();
                  }}
                  onKeyDown={handleKeyDown}
                  rows={1}
                  className={`flex-1 min-h-[40px] max-h-[150px] p-2 rounded-lg resize-none transition-all duration-500 ease-in-out ${
                    isDarkMode ? 'bg-gray-700/50 text-white' : 'bg-white text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  placeholder="Type your message here... (Shift + Enter for new line)"
                />
                <Button 
                  type="submit" 
                  size="icon"
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
