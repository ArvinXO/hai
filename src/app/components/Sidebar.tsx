import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

export const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="relative flex items-center">
      <div
        className={`transform transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <aside className="w-64 bg-white bg-opacity-25 backdrop-blur-md p-4 rounded-r-xl overflow-auto flex-grow">
          <h2 className="text-lg font-bold mb-2 pr-20 text-white text-center">
            History
          </h2>
          <ul>
            {
              //Provide a list of messages
              [
                "Hello",
                "How are you?",
                "I am fine, thank you",
                "How can I help you today?",
              ].map((message, index) => (
                <li
                  key={index}
                  className="p-2 bg-gray-100 rounded-xl mb-2 hover:bg-gray-400 transition-colors duration-200"
                >
                  {message}
                </li>
              ))
            }
          </ul>
        </aside>
        {isVisible && (
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="text-2xl rounded-r-xl hover:bg-orange-600 absolute top-1/2 right-[-10%] transform -translate-y-1/2 p-6 py-20 translate-x-1/2 bg-orange-500"
          >
            <MdClose color="white" />
          </button>
        )}
        {!isVisible && (
          <button
            onClick={() => setIsVisible(!isVisible)}
            className={`text-2xl rounded-r-xl hover:bg-orange-600 absolute top-1/2 right-[-10%] transform -translate-y-1/2 p-6 py-20 translate-x-1/2  bg-orange-500`}
          >
            <MdMenu color="purple" />
          </button>
        )}
      </div>
    </div>
  );
};
