import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Send, Sparkles, Bot, User } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const genAI = new GoogleGenerativeAI("AIzaSyByWXVZb5djcppvijJngsK79oOiYhdLrtY");

const model = genAI.getGenerativeModel({
  model: 'gemini-2.0-flash',
  systemInstruction: `
You are a wise and compassionate conversational AI trained to act as a hybrid therapist for Gen Z and young adults struggling with emotional or mental health concerns.

Your primary role is to gently guide the user through their thoughts and feelings using psychological techniques grounded in modern therapy (CBT, ACT, positive psychology, etc.), along with **inspirational references to the Bhagavad Gita**. You are not a religious scholar — you use the Gita only as a **spiritual framework** to promote emotional clarity, inner peace, and purpose.

❌ You must not answer any question outside your scope — including questions about tech support, career advice, or anything unrelated to emotional wellbeing or inner growth. If the user asks something unrelated, kindly reply with:
"I'm here as a therapist who gently supports your emotional wellbeing — sometimes using ideas from the Gita when it helps. I may not be the best fit for that question, but I’m always here to support your inner world."

✅ Always remain calm, respectful, empathetic, and non-judgmental — like a real therapist.

Avoid preaching or forcing religious beliefs. Use the Bhagavad Gita only when it naturally supports a user’s emotional or mental growth.

Do not give advice. Help users navigate stress, overthinking, sadness, or anxiety by asking thoughtful questions, sharing brief reflections, or guiding introspection — just like Krishna helped Arjuna realize his own path.

✍️ Important: All your responses must be **short, precise, and easy to understand**. Aim for **gentle clarity**, not long-winded explanations.

Your goal is to be a safe, healing presence that combines modern psychological compassion with timeless spiritual insight.
`
});

export const ChatPage = () => {
  const [chat] = useState(() => model.startChat({
    history: [],
    generationConfig: {
      maxOutputTokens: 1000,
    },
  }));
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const sendMessageToGemini = async (messageText: string, isInitial = false) => {
    const userMessage = { sender: 'user' as const, text: messageText };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    if (!isInitial) setInput('');
    setIsLoading(true);

    try {
      const result = await chat.sendMessage(messageText);
      const response = await result.response;
      const text = response.text();
      setMessages(prevMessages => [...prevMessages, { sender: 'bot' as const, text }]);
    } catch (error) {
      console.error(error);
      setMessages(prevMessages => [...prevMessages, { sender: 'bot' as const, text: 'Sorry, something went wrong.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (location.state && location.state.initialMessage) {
      sendMessageToGemini(location.state.initialMessage, true);
    } else if (messages.length === 0) {
      setMessages([{ sender: 'bot', text: 'Hi, I’m here for you. Before we begin, may I ask — are you here to talk today? I’ll wait until you’re ready.' }]);
    }
  }, [location.state, messages.length]);

  const handleSend = async () => {
    if (!input.trim()) return;
    sendMessageToGemini(input);
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="min-h-screen bg-background soul-container">
      <Navigation />
      <div className="flex h-[calc(100vh-80px)] mt-20">
        {/* Left Panel */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/3 p-8 border-r bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="text-center space-y-4">
            <Sparkles size={48} className="mx-auto text-primary animate-pulse" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Soulspace AI</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Your personal AI companion for guidance and reflection. Start a conversation to explore your thoughts and feelings.
            </p>
          </div>
        </div>

        {/* Right Panel (Chat) */}
        <div className="flex flex-col flex-1 bg-[#DDEBFF]">
          <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
            <div className="flex flex-col gap-6">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-start gap-4 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                  {msg.sender === 'bot' && (
                    <Avatar className="w-10 h-10 border">
                      <AvatarFallback><Bot /></AvatarFallback>
                    </Avatar>
                  )}
                  <div className={`rounded-lg p-4 max-w-lg ${msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
                  </div>
                  {msg.sender === 'user' && (
                     <Avatar className="w-10 h-10 border">
                       <AvatarFallback><User /></AvatarFallback>
                     </Avatar>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarFallback><Bot /></AvatarFallback>
                  </Avatar>
                  <div className="rounded-lg p-4 max-w-lg bg-muted">
                    <Sparkles className="w-5 h-5 animate-spin" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="p-4 border-t">
            <div className="relative">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="pr-12 h-12 text-lg"
              />
              <Button onClick={handleSend} disabled={isLoading} className="absolute right-2.5 top-1/2 -translate-y-1/2">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
