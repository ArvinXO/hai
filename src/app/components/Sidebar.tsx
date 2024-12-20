"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare, Moon, Sun, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  isOpen: boolean;
  isDarkMode: boolean;
  onToggle: () => void;
  onThemeToggle: () => void;
}

export function Sidebar({ isOpen, isDarkMode, onToggle, onThemeToggle }: SidebarProps) {
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={onToggle}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`
              fixed inset-0 transition-opacity duration-300 md:hidden backdrop-blur-sm
              ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
              ${isDarkMode ? 'bg-black/50' : 'bg-gray-600/30'}
            `}
            onClick={() => onToggle()}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`
              fixed md:static inset-y-0 left-0 w-64 transform transition-transform duration-300 ease-in-out
              ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
              flex flex-col border-r
              ${isDarkMode 
                ? 'bg-gray-900 border-purple-800/20 text-white' 
                : 'bg-white border-gray-200 text-gray-900'
              }
            `}
          >
            <div className={`flex items-center justify-between p-4 border-b ${
              isDarkMode ? 'border-purple-800/20' : 'border-gray-200'
            }`}>
              <h2 className="text-xl font-semibold">HAI Chat</h2>
              <button
                onClick={onToggle}
                className={`p-2 rounded-lg md:hidden
                  ${isDarkMode 
                    ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                  }
                `}
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                <li>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start gap-2
                      ${isDarkMode
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                      }
                    `}
                  >
                    <MessageSquare size={20} />
                    New Chat
                  </Button>
                </li>
              </ul>
            </nav>

            <div className={`border-t p-4 space-y-2
              ${isDarkMode ? 'border-gray-700/20' : 'border-gray-200'}
            `}>
              <Button
                variant="ghost"
                className={`w-full justify-start gap-2
                  ${isDarkMode
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }
                `}
                onClick={onThemeToggle}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </Button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
