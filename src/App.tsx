
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AccidentPage from "./pages/Accident";
import CriticalIllness from "./pages/CriticalIllness";
import CancerDreadDisease from "./pages/CancerDreadDisease";
import LifeInsurance from "./pages/LifeInsurance";
import WhyQFB from "./pages/WhyQFB";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/why-qfb" element={<WhyQFB />} />
              <Route path="/accident" element={<AccidentPage />} />
              <Route path="/critical-illness" element={<CriticalIllness />} />
              <Route path="/cancer-dread-disease" element={<CancerDreadDisease />} />
              <Route path="/life-insurance" element={<LifeInsurance />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
