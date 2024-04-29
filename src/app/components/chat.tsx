"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";
import { useRef, useEffect } from "react";
import Image from "next/image";

const chatboticon = "assets/chatbot.svg";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const chatParent = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const domNode = chatParent.current;
    if (domNode) {
      domNode.scrollTop = domNode.scrollHeight;
    }
  });
  return (
    <main className="flex flex-col w-full h-screen max-h-dvh bg-purple-950">
      {" "}
      <header className="p-4 border-b  max-w-3xl mx-auto flex items-center">
        <Image
          src={chatboticon}
          width={32}
          height={32}
          alt="Chatbot icon"
          className="w-8 h-8 mr-2"
        />{" "}
        <h1 className="text-2xl font-bold items-center text-white">HAI </h1>{" "}
      </header>{" "}
      <section className="container px-0 pb-10 flex flex-col flex-grow gap-4 mx-auto max-w-3xl">
        <ul
          ref={chatParent}
          className="h-1 p-4  flex-grow bg-muted/50 rounded-lg overflow-y-auto flex flex-col gap-4"
        >
          {!messages.length ? (
            <div className="text-center pt-4 ">
              <svg
                className="animate-spin h-5 w-5 mr-3 inline-block"
                viewBox="0 0 24 24"
              ></svg>
            </div>
          ) : (
            messages.map((m, index) => (
              <li
                key={index}
                className={`flex ${
                  m.role === "user" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {m.role === "assistant" && (
                  <div className="flex items-center">
                    <Image
                      src={chatboticon}
                      width={32}
                      height={32}
                      alt="Chatbot icon"
                      className="w-6 h-6 mr-2"
                    />
                    <div
                      className={`rounded-xl p-4 shadow-md flex ${
                        m.role === "assistant"
                          ? "bg-primary text-white bg-purple-800"
                          : "bg-secondary text-primary"
                      }`}
                    >
                      <p>{m.content}</p>
                    </div>
                  </div>
                )}
                {m.role === "user" && (
                  <div
                    className={`rounded-xl p-4 shadow-md flex ${
                      m.role === "user"
                        ? "bg-primary text-white bg-orange-400"
                        : "bg-secondary text-primary"
                    }`}
                  >
                    <p>{m.content}</p>
                  </div>
                )}
              </li>
            ))
          )}
        </ul>
      </section>{" "}
      <section className="p-4">
        {" "}
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-3xl mx-auto items-center"
        >
          {" "}
          <Input
            className="flex-1 min-h-[40px] bg-white"
            placeholder="Type your question here..."
            type="text"
            value={input}
            onChange={handleInputChange}
          />{" "}
          <Button className="ml-2" type="submit">
            Submit
          </Button>{" "}
        </form>{" "}
      </section>{" "}
    </main>
  );
}
