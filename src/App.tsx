import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Emergency from "./pages/Emergency";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import DrainCleaning from "./pages/services/DrainCleaning";
import WaterHeaters from "./pages/services/WaterHeaters";
import LeakDetection from "./pages/services/LeakDetection";
import Installation from "./pages/services/Installation";
import Faucet from "./pages/services/installation/Faucet";
import Toilet from "./pages/services/installation/Toilet";
import GarbageDisposal from "./pages/services/installation/GarbageDisposal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/drain-cleaning" element={<DrainCleaning />} />
          <Route path="/services/water-heaters" element={<WaterHeaters />} />
          <Route path="/services/leak-detection" element={<LeakDetection />} />
          <Route path="/services/installation" element={<Installation />} />
          <Route path="/services/installation/faucet" element={<Faucet />} />
          <Route path="/services/installation/toilet" element={<Toilet />} />
          <Route path="/services/installation/garbage-disposal" element={<GarbageDisposal />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
