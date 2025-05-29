import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
import CivilDept from "./pages/departments/civil-dept";
import MechanicalDept from "./pages/departments/mechanical-dept";
import CseDept from "./pages/departments/cse-dept";
import AimlDept from "./pages/departments/aiml-dept";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";


const queryClient = new QueryClient();

const App = () => {
  // State to store admin info when logged in
  const [admin, setAdmin] = useState<any>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Admin login route */}
            <Route
              path="/admin/login"
              element={
                !admin ? (
                  <AdminLogin onLoginSuccess={setAdmin} />
                ) : (
                  <Navigate to="/admin-dashboard" replace />
                )
              }
            />

            {/* Admin dashboard route - protected */}
            <Route
              path="/admin-dashboard"
              element={
                admin ? (
                  <AdminDashboard admin={admin} onLogout={() => setAdmin(null)} />
                ) : (
                  <Navigate to="/admin/login" replace />
                )
              }
            />

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
            <Route path="/departments/civil" element={<CivilDept />} />
            <Route path="/departments/mechanical" element={<MechanicalDept />} />
            <Route path="/departments/cse" element={<CseDept />} />
            <Route path="/departments/aiml" element={<AimlDept />} />

            {/* Catch all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatBot />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
