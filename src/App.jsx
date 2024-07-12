import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // available: clean, navbar, sidebar
import { navItems } from "./nav-items";
import { useState } from "react";
import ChatbotButton from "./components/ChatbotButton";
import ChatbotInterface from "./components/ChatbotInterface";

const queryClient = new QueryClient();

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              {navItems.map((item) => (
                <Route key={item.to} path={item.to} element={item.page} />
              ))}
            </Route>
          </Routes>
          <ChatbotButton onClick={() => setIsChatOpen(true)} />
          <ChatbotInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;