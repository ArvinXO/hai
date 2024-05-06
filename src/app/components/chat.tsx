"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";
import { useRef, useEffect } from "react";
import { useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { AssistantMessage } from "./AssitantMessage";
import { UserMessage } from "./UserMessage";
import { Sidebar } from "./Sidebar";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const chatParent = useRef<HTMLUListElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const domNode = chatParent.current;
    if (domNode) {
      domNode.scrollTop = domNode.scrollHeight;
    }
  });

  return (
    <main className="flex flex-col w-full h-screen max-h-dvh bg-purple-950 transition-all duration-500 ease-in-out">
      <div className="flex flex-row h-full">
        <Sidebar />
        <div className="flex flex-col w-full">
          <ChatHeader />
          <section className="container px-0 pb-10 flex flex-col flex-grow gap-4 mx-auto max-w-3xl transition-all duration-500 ease-in-out">
            <ul
              ref={chatParent}
              className="h-1 p-4 flex-grow bg-muted/50 rounded-lg overflow-y-auto flex flex-col gap-4 transition-all duration-500 ease-in-out custom-scrollbar"
            >
              {!messages.length ? (
                <div className="text-center pt-4">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 inline-block"
                    viewBox="0 0 24 24"
                  ></svg>
                </div>
              ) : (
                messages.map((m, index) =>
                  m.role === "assistant" ? (
                    <AssistantMessage
                      key={index}
                      message={m}
                      copied={copied}
                      setCopied={setCopied}
                    />
                  ) : (
                    <UserMessage key={index} message={m} />
                  )
                )
              )}
            </ul>
          </section>
          <section className="p-4">
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-3xl mx-auto items-center transition-all duration-500 ease-in-out custom-scrollbar bg-purple-950 rounded-lg shadow-md"
            >
              <Input
                className="flex-1 min-h-[40px] bg-white transition-all duration-500 ease-in-out"
                placeholder="Type your question here..."
                type="text"
                value={input}
                onChange={handleInputChange}
              />
              <Button
                className="ml-2 transition-all duration-500 ease-in-out bg-orange-500 hover:bg-orange-600"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
