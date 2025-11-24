import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import InboundCallCenter from "./pages/services/InboundCallCenter";
import OutboundCallCenter from "./pages/services/OutboundCallCenter";
import TechnicalSupport from "./pages/services/TechnicalSupport";
import VirtualAssistant from "./pages/services/VirtualAssistant";
import OrderSalesSupport from "./pages/services/OrderSalesSupport";
import TermsPrivacyPage from "./pages/TermsPrivacyPage"; // <-- import your new page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/inbound-call-center" element={<InboundCallCenter />} />
          <Route path="/services/outbound-call-center" element={<OutboundCallCenter />} />
          <Route path="/services/technical-support" element={<TechnicalSupport />} />
          <Route path="/services/virtual-assistant" element={<VirtualAssistant />} />
          <Route path="/services/order-sales-support" element={<OrderSalesSupport />} />
          <Route path="/terms-privacy" element={<TermsPrivacyPage />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
