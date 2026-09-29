
import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
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
import EnterpriseServices from "./pages/EnterpriseServices";
import Enterprise from "./pages/Enterprise";

import ClaudeCode from "./pages/ClaudeCode";
import Trainers from "./pages/Trainers";
import KeynotesWorkshops from "./pages/KeynotesWorkshops";
import FreeUpskillingMA from "./pages/FreeUpskillingMA";
import Industries from "./pages/Industries";
import Dashboard from "./pages/Dashboard";
import CompanyBrain from "./pages/CompanyBrain";
import CaseStudyEngine from "./pages/CaseStudyEngine";
import CaseStudyProverb from "./pages/CaseStudyProverb";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import BullhornCallback from "./pages/BullhornCallback";

const queryClient = new QueryClient(); // Trigger GitHub sync

// OAuth callback routes (e.g. /oauth/bullhorn/callback) render completely bare:
// no navigation, footer, analytics, or chat widgets should load on any /oauth/* path.
const ChromeGate = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  if (location.pathname.startsWith("/oauth/")) return null;
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ChromeGate>
            <ScrollToTop />
            <Navigation />
          </ChromeGate>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Pricing />} />
            <Route path="/pricing" element={<Navigate to="/services" replace />} />
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
            <Route path="/enterprise-services" element={<EnterpriseServices />} />
            <Route path="/enterprise" element={<Enterprise />} />
            
            <Route path="/claude-code" element={<ClaudeCode />} />
            <Route path="/trainer-application" element={<Trainers />} />
            <Route path="/trainers" element={<Navigate to="/trainer-application" replace />} />
            <Route path="/keynotes-workshops" element={<KeynotesWorkshops />} />
            <Route path="/comm-corp-express-ai-training-in-ma" element={<FreeUpskillingMA />} />
            <Route path="/free-upskilling-ma" element={<Navigate to="/comm-corp-express-ai-training-in-ma" replace />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/company-brain" element={<CompanyBrain />} />
            <Route path="/case-studies/engine" element={<CaseStudyEngine />} />
            <Route path="/case-studies/proverb" element={<CaseStudyProverb />} />
            <Route path="/oauth/bullhorn/callback" element={<BullhornCallback />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
