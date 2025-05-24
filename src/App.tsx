import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <LanguageProvider>
                    <Toaster />
                    <Sonner />
                    <BrowserRouter>
                        <div className="min-h-screen bg-white">
                            <Navbar />
                            <Routes>
                                <Route path="/" element={<Index />} />
                                <Route path="/about" element={<About />} />
                                <Route
                                    path="/services"
                                    element={<Services />}
                                />
                                <Route
                                    path="/portfolio"
                                    element={<Portfolio />}
                                />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </div>
                    </BrowserRouter>
                </LanguageProvider>
            </TooltipProvider>
        </QueryClientProvider>
    );
};

export default App;
