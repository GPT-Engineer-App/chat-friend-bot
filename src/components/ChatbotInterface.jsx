import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";

const ChatbotInterface = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", isBot: true },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, isBot: false }]);
      setInputMessage("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Thank you for your message! We will get back to you soon.",
            isBot: true,
          },
        ]);
      }, 1000);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[400px] sm:w-[540px] flex flex-col">
        <SheetHeader>
          <SheetTitle>Chat with Us</SheetTitle>
          <SheetClose />
        </SheetHeader>
        <ScrollArea className="flex-grow my-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${
                message.isBot ? "text-left" : "text-right"
              }`}
            >
              <div
                className={`inline-block p-3 rounded-lg ${
                  message.isBot
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="flex items-center gap-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ChatbotInterface;