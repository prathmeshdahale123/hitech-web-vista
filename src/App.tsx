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
import Admissions from "./pages/Admissions";
import Departments from "./pages/Departments";
import Facilities from "./pages/Facilities";
import CollegeCells from "./pages/CollegeCells";
import Naac from "./pages/Naac";
import Gallery from "./pages/Gallery";
import Placement from "./pages/Placement";
import Downloads from "./pages/Downloads";
import Nirf from "./pages/Nirf";
import Alumni from "./pages/Alumni";

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
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/college-cells" element={<CollegeCells />} />
          <Route path="/naac" element={<Naac />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/nirf" element={<Nirf />} />
          <Route path="/alumni" element={<Alumni />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatBot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
