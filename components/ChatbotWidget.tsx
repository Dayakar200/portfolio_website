"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, KeyRound } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Message = {
  role: "user" | "model";
  content: string;
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [isKeySet, setIsKeySet] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", content: "Hi! I'm John's AI assistant. Ask me anything about his skills, experience, or projects." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSetKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim().length > 0) {
      setIsKeySet(true);
      setError(null);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setError(null);
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    const systemInstruction = "You are John Doe's portfolio assistant. You know everything about their background as a Data Scientist and AI/ML engineer — their skills, projects, experience, and publications. Answer visitor questions helpfully and professionally in 2-4 sentences. Redirect off-topic questions politely.";

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemInstruction }]
          },
          contents: [
            ...messages.filter(m => m.role === "user" || m.role === "model").map(m => ({
              role: m.role,
              parts: [{ text: m.content }]
            })),
            { role: "user", parts: [{ text: userMessage }] }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 200,
          }
        })
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with Gemini API. Please check your API key.");
      }

      const data = await response.json();
      const modelReply = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (modelReply) {
        setMessages((prev) => [...prev, { role: "model", content: modelReply }]);
      } else {
        throw new Error("Invalid response format.");
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-xl z-40 transition-transform hover:scale-110 ${isOpen ? "scale-0" : "scale-100"}`}
        aria-label="Open AI Assistant"
      >
        <MessageCircle size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[320px] h-[480px] z-50 flex flex-col shadow-2xl"
          >
            <Card className="flex flex-col h-full bg-card border-border overflow-hidden">
              <CardHeader className="p-4 bg-background border-b border-border flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Bot size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">Ask me anything 👋</h3>
                    <p className="text-[10px] text-muted-foreground">Powered by Gemini 2.0</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </CardHeader>

              <CardContent className="flex-1 p-0 flex flex-col overflow-hidden">
                {!isKeySet ? (
                  <div className="flex-1 p-6 flex flex-col justify-center items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                      <KeyRound size={24} />
                    </div>
                    <h4 className="font-bold text-white mb-2">API Key Required</h4>
                    <p className="text-xs text-muted-foreground mb-6">
                      Enter your Google Gemini API key to chat. The key is only stored in browser memory.
                    </p>
                    <form onSubmit={handleSetKey} className="w-full space-y-3">
                      <Input 
                        type="password" 
                        placeholder="AIzaSy..." 
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        className="bg-background border-border text-sm"
                      />
                      <Button type="submit" className="w-full bg-primary text-primary-foreground h-9 text-sm">
                        Start Chat
                      </Button>
                    </form>
                  </div>
                ) : (
                  <>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {messages.map((msg, i) => (
                        <div key={i} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                            msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-background border border-border text-primary"
                          }`}>
                            {msg.role === "user" ? <User size={12} /> : <Bot size={12} />}
                          </div>
                          <div className={`p-3 rounded-2xl max-w-[85%] text-sm ${
                            msg.role === "user" 
                              ? "bg-primary text-primary-foreground rounded-tr-sm" 
                              : "bg-background border border-border text-white rounded-tl-sm"
                          }`}>
                            {msg.content}
                          </div>
                        </div>
                      ))}
                      
                      {isLoading && (
                        <div className="flex gap-2">
                          <div className="w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center flex-shrink-0 mt-1 text-primary">
                            <Bot size={12} />
                          </div>
                          <div className="p-3 rounded-2xl bg-background border border-border rounded-tl-sm flex items-center gap-1 w-16">
                            <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                          </div>
                        </div>
                      )}
                      
                      {error && (
                        <div className="text-center text-xs text-destructive bg-destructive/10 p-2 rounded border border-destructive/20">
                          {error}
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>

                    <div className="p-3 bg-background border-t border-border">
                      <form onSubmit={handleSend} className="relative">
                        <Input
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Type a message..."
                          className="pr-10 bg-card border-border text-sm"
                          disabled={isLoading}
                        />
                        <button 
                          type="submit" 
                          disabled={!input.trim() || isLoading}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 disabled:opacity-50 transition-colors"
                        >
                          <Send size={18} />
                        </button>
                      </form>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
