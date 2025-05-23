
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ChatBot from "./components/ChatBot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Placeholder routes for other pages */}
          <Route path="/admissions" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-blue-900">Admissions</h1><p className="text-gray-600 mt-4">Coming Soon</p></div></div>} />
          <Route path="/departments" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-blue-900">Departments</h1><p className="text-gray-600 mt-4">Coming Soon</p></div></div>} />
          <Route path="/facilities" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-blue-900">Facilities</h1><p className="text-gray-600 mt-4">Coming Soon</p></div></div>} />
          <Route path="/college-cells" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-blue-900">College Cells</h1><p className="text-gray-600 mt-4">Coming Soon</p></div></div>} />
          <Route path="/naac" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-blue-900">NAAC</h1><p className="text-gray-600 mt-4">Coming Soon</p></div></div>} />
          <Route path="/gallery" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-blue-900">Gallery</h1><p className="text-gray-600 mt-4">Coming Soon</p></div></div>} />
          <Route path="/placement" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-blue-900">Training & Placement</h1><p className="text-gray-600 mt-4">Coming Soon</p></div></div>} />
          <Route path="/downloads" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-blue-900">Downloads</h1><p className="text-gray-600 mt-4">Coming Soon</p></div></div>} />
          <Route path="/nirf" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-blue-900">NIRF</h1><p className="text-gray-600 mt-4">Coming Soon</p></div></div>} />
          <Route path="/alumni" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-blue-900">Alumni</h1><p className="text-gray-600 mt-4">Coming Soon</p></div></div>} />
          <Route path="/login" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-blue-900">Login Portal</h1><p className="text-gray-600 mt-4">Coming Soon</p></div></div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatBot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
