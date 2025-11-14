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
import ShowerHead from "./pages/services/installation/ShowerHead";
import Dishwasher from "./pages/services/installation/Dishwasher";
import KitchenSink from "./pages/services/installation/KitchenSink";
import WaterFiltration from "./pages/services/installation/WaterFiltration";
import WaterSoftener from "./pages/services/installation/WaterSoftener";
import GasLine from "./pages/services/installation/GasLine";
import Repiping from "./pages/services/installation/Repiping";
import Repair from "./pages/services/Repair";
import FaucetRepair from "./pages/services/repair/Faucet";
import ToiletRepair from "./pages/services/repair/Toilet";
import PipeRepair from "./pages/services/repair/Pipe";
import WaterHeaterRepair from "./pages/services/repair/WaterHeater";
import GarbageDisposalRepair from "./pages/services/repair/GarbageDisposal";
import ShowerHeadRepair from "./pages/services/repair/ShowerHead";
import OutdoorFaucetRepair from "./pages/services/repair/OutdoorFaucet";
import SewerLineRepair from "./pages/services/repair/SewerLine";
import DrainRepair from "./pages/services/repair/Drain";
import WaterLineRepair from "./pages/services/repair/WaterLine";
import GasLineRepair from "./pages/services/repair/GasLine";

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
          <Route path="/services/installation/shower-head" element={<ShowerHead />} />
          <Route path="/services/installation/dishwasher" element={<Dishwasher />} />
          <Route path="/services/installation/kitchen-sink" element={<KitchenSink />} />
          <Route path="/services/installation/water-filtration-system" element={<WaterFiltration />} />
          <Route path="/services/installation/water-softener" element={<WaterSoftener />} />
          <Route path="/services/installation/gas-line" element={<GasLine />} />
          <Route path="/services/installation/pipes-repiping" element={<Repiping />} />
          <Route path="/services/repair" element={<Repair />} />
          <Route path="/services/repair/faucet" element={<FaucetRepair />} />
          <Route path="/services/repair/toilet" element={<ToiletRepair />} />
          <Route path="/services/repair/pipe" element={<PipeRepair />} />
          <Route path="/services/repair/water-heater" element={<WaterHeaterRepair />} />
          <Route path="/services/repair/garbage-disposal" element={<GarbageDisposalRepair />} />
          <Route path="/services/repair/shower-head" element={<ShowerHeadRepair />} />
          <Route path="/services/repair/outdoor-faucet" element={<OutdoorFaucetRepair />} />
          <Route path="/services/repair/sewer-line" element={<SewerLineRepair />} />
          <Route path="/services/repair/drain" element={<DrainRepair />} />
          <Route path="/services/repair/water-line" element={<WaterLineRepair />} />
          <Route path="/services/repair/gas-line" element={<GasLineRepair />} />
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
