import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Testimonials from "./pages/Testimonials";
import Orders from "./pages/Orders";
import Gallery from "./pages/Gallery";
import Album from "./pages/Album";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import Preloader from "./components/Preloader";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading including assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds for a nice luxurious feel

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader key="preloader" />}
        </AnimatePresence>
        
        {!isLoading && (
          <>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/gallery/:albumId" element={<Album />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<ContactUs />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
