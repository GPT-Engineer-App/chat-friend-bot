import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const ChatbotButton = ({ onClick }) => {
  return (
    <Button
      className="fixed bottom-4 right-4 rounded-full p-3"
      onClick={onClick}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">Open chat</span>
    </Button>
  );
};

export default ChatbotButton;