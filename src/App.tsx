
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Accelerators from "./pages/Accelerators";
import About from "./pages/About";
import MembersOnly from "./pages/MembersOnly";
import Community from "./pages/Community";
import OfficeHours from "./pages/OfficeHours";
import TearDown from "./pages/TearDown";
import Contact from "./pages/Contact";
import WomenInCommunity from "./pages/WomenInCommunity";
import CommunityPartnerships from "./pages/CommunityPartnerships";
import AIPowerHour from "./pages/AIPowerHour";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient(); // Trigger GitHub sync

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/accelerators" element={<Accelerators />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<MembersOnly />} />
            <Route path="/community" element={<Community />} />
            <Route path="/office-hours" element={<OfficeHours />} />
            <Route path="/teardown" element={<TearDown />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/women-in-community" element={<WomenInCommunity />} />
            <Route path="/community-partnerships" element={<CommunityPartnerships />} />
            <Route path="/ai-power-hour" element={<AIPowerHour />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
