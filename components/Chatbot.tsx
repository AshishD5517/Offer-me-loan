import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';

type Message = {
    id: number;
    type: 'user' | 'bot';
    text: string;
};

// --- ICONS ---
const ChatIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const CloseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const SendIcon: React.FC = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
    </svg>
);


const BotIcon: React.FC = () => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full p-1.5 text-white">
        <path d="M24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4Z" fill="currentColor" />
        <path d="M24 14L34 24L24 34L14 24L24 14Z" stroke="#1D2B4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 24V34" stroke="#1D2B4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 24H34" stroke="#1D2B4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const TypingIndicator: React.FC = () => (
    <div className="flex items-center space-x-1 p-2">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
    </div>
);
// --- END ICONS ---


const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [userInput, setUserInput] = useState('');
    const chatRef = useRef<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Initialize Chat
    useEffect(() => {
        const initChat = async () => {
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
                
                const systemInstruction = `You are "LoanBot," a friendly and professional AI assistant for a loan marketplace website called "Offer Me Loan." Your primary goal is to help users by answering their questions about the loan process, available loan types (like personal, home, auto, business), and how the website works.
                - Guide users on how to apply for a loan (tell them to use the "Apply for a Loan" buttons).
                - Explain the benefits of the platform (connecting with multiple agents, getting competitive offers).
                - Be encouraging and clear in your responses.
                - You are an AI assistant, not a financial advisor. Do not provide financial advice, predict interest rates, or guarantee loan approval.
                - Keep your answers concise and easy to understand.`;

                chatRef.current = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                      systemInstruction,
                    },
                });

                setMessages([{
                    id: Date.now(),
                    type: 'bot',
                    text: "Hello! Welcome to Offer Me Loan. How can I help you today? Feel free to ask me anything about our loan services.",
                }]);
            } catch (error) {
                console.error("Failed to initialize AI Chat:", error);
                 setMessages([{
                    id: Date.now(),
                    type: 'bot',
                    text: "Sorry, I'm having trouble connecting right now. Please try again later.",
                }]);
            }
        };

        initChat();
    }, []);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || !chatRef.current) return;

        const userMessageText = userInput;
        const newUserMessage: Message = { id: Date.now(), type: 'user', text: userMessageText };
        
        setMessages(prev => [...prev, newUserMessage]);
        setUserInput('');
        setIsTyping(true);

        try {
            const stream = await chatRef.current.sendMessageStream({ message: userMessageText });
            
            let botResponseText = '';
            const botMessageId = Date.now() + 1;
            
            // Add a placeholder for the bot's message to start
            setMessages(prev => [...prev, { id: botMessageId, type: 'bot', text: '' }]);

            for await (const chunk of stream) {
                botResponseText += chunk.text;
                // Update the bot message in the stream
                setMessages(prev => prev.map(msg => 
                    msg.id === botMessageId ? { ...msg, text: botResponseText } : msg
                ));
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages(prev => [...prev, { id: Date.now(), type: 'bot', text: "I'm sorry, something went wrong. Please try your question again." }]);
        } finally {
            setIsTyping(false);
        }
    };

    const toggleOpen = () => setIsOpen(!isOpen);
    
    const isComingSoonPage = window.location.pathname === '/coming-soon';
    if (isComingSoonPage) return null;

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <div className={`
                absolute bottom-24 right-0
                ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
                transition-all duration-300 ease-in-out
                w-[calc(100vw-40px)] sm:w-80 md:w-96
                h-[60vh] md:h-[70vh] max-h-[600px]
                bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200
            `}>
                <div className="flex items-center justify-between p-4 bg-secondary text-white rounded-t-2xl shadow-md">
                    <div className="flex items-center space-x-3">
                        <div className="relative h-10 w-10">
                            <BotIcon />
                            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-secondary"></span>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">LoanBot</h3>
                            <p className="text-xs text-gray-300">Online</p>
                        </div>
                    </div>
                    <button onClick={toggleOpen} className="p-1 rounded-full hover:bg-white/20 transition-colors">
                        <CloseIcon />
                    </button>
                </div>

                <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    <div className="space-y-4">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex items-start gap-2.5 animate-fade-in-up ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                {msg.type === 'bot' && <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0"><BotIcon /></div>}
                                <div className={`max-w-[80%] p-3 rounded-2xl ${msg.type === 'user' ? 'bg-primary text-white rounded-br-lg' : 'bg-gray-200 text-secondary rounded-bl-lg'}`}>
                                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex items-start gap-2.5 justify-start animate-fade-in-up">
                                 <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0"><BotIcon /></div>
                                 <div className="max-w-[80%] p-3 rounded-2xl bg-gray-200 text-secondary rounded-bl-lg">
                                    <TypingIndicator />
                                 </div>
                            </div>
                        )}
                    </div>
                    <div ref={messagesEndRef} />
                </div>
                
                <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
                     <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Ask a question..."
                            disabled={isTyping}
                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition disabled:bg-gray-100"
                        />
                        <button
                            type="submit"
                            disabled={isTyping || !userInput.trim()}
                            className="w-10 h-10 flex-shrink-0 bg-primary text-white rounded-full flex items-center justify-center transition-colors hover:bg-primary-dark disabled:bg-gray-400 disabled:cursor-not-allowed"
                            aria-label="Send message"
                        >
                            <SendIcon />
                        </button>
                     </form>
                </div>
            </div>

            <button 
                onClick={toggleOpen} 
                className="
                    absolute bottom-0 right-0
                    w-16 h-16 bg-primary text-white rounded-full
                    flex items-center justify-center shadow-xl 
                    transform transition-all duration-300 ease-in-out
                    hover:bg-primary-dark hover:scale-110
                    focus:outline-none focus:ring-4 focus:ring-primary-light
                "
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                {isOpen ? <CloseIcon /> : <ChatIcon />}
            </button>
        </div>
    );
};

export default Chatbot;