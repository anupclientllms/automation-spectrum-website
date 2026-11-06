import { Routes, Route } from "react-router-dom";
import { useCallback, useState } from "react";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import EnergIQPage from "./pages/EnergIQPage";
import AIChatshoppiePage from "./pages/AIChatshoppiePage";
import TechnologyPage from "./pages/TechnologyPage";
import CompanyPage from "./pages/CompanyPage";
import PilotProgramsPage from "./pages/PilotProgramsPage";
//import ContactPage from "./pages/ContactPage";
//import NotFound from "./pages/NotFound";

import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import IntellectualPropertyPage from "./pages/IntellectualPropertyPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import ScrollToTop from "./components/ScrollToTop";

import Partners from "./pages/Partners";
import AIConsulting from "./pages/AIConsulting";
import GenerativeAI from "./pages/GenerativeAI";
import BusinessAutomation from "./pages/BusinessAutomation";
import SoftwareEngineering from "./pages/SoftwareEngineering";
import InvoicesPayments from "./pages/InvoicePayments";
import QuotesProposals from "./pages/QuotesProposals";
import CustomerServiceSales from "./pages/CustomerServiceSales";
import SchedulingOperations from "./pages/SchedulingOperations";
import DocumentsContracts from "./pages/DocumentsContracts";
import BusinessIntelligence from "./pages/BusinessIntelligence";

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  const openContactModal = useCallback(() => {
    setContactOpen(true);
  }, []);

  const closeContactModal = useCallback(() => {
    setContactOpen(false);
  }, []);

  return (
    <>
      <ScrollToTop />

      <Navbar openContactModal={openContactModal} />

      <Routes>
        <Route
          path="/"
          element={<HomePage openContactModal={openContactModal} />}
        />

        <Route
          path="/company"
          element={<CompanyPage openContactModal={openContactModal} />}
        />

        <Route
          path="/technology"
          element={<TechnologyPage openContactModal={openContactModal} />}
        />

        <Route
          path="/pilot-programs"
          element={
            <PilotProgramsPage openContactModal={openContactModal} />
          }
        />

        <Route
          path="/products"
          element={<ProductsPage openContactModal={openContactModal} />}
        />

        <Route
          path="/partners"
          element={<Partners openContactModal={openContactModal} />}
        />

        <Route
          path="/products/energiqtech"
          element={<EnergIQPage openContactModal={openContactModal} />}
        />

        <Route
          path="/products/aichatshoppie"
          element={
            <AIChatshoppiePage openContactModal={openContactModal} />
          }
        />

        <Route
          path="/services/ai-consulting"
          element={
            <AIConsulting openContactModal={openContactModal} />
          }
        />

        <Route
          path="/services/generative-ai"
          element={
            <GenerativeAI openContactModal={openContactModal} />
          }
        />

        <Route
          path="/services/business-automation"
          element={
            <BusinessAutomation openContactModal={openContactModal} />
          }
        />

        <Route
          path="/services/software-engineering"
          element={
            <SoftwareEngineering openContactModal={openContactModal} />
          }
        />

        <Route
          path="/solutions/invoices-payments"
          element={
            <InvoicesPayments openContactModal={openContactModal} />
          }
        />

        <Route
          path="/solutions/quotes-proposals"
          element={
            <QuotesProposals openContactModal={openContactModal} />
          }
        />

        <Route
          path="/solutions/customer-service-sales"
          element={
            <CustomerServiceSales openContactModal={openContactModal} />
          }
        />

        <Route
          path="/solutions/scheduling-operations"
          element={
            <SchedulingOperations openContactModal={openContactModal} />
          }
        />

        <Route
          path="/solutions/documents-contracts"
          element={
            <DocumentsContracts openContactModal={openContactModal} />
          }
        />
        <Route
          path="/solutions/business-intelligence"
          element={
            <BusinessIntelligence openContactModal={openContactModal} />
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        
        <Route
          path="/intellectual-property"
          element={<IntellectualPropertyPage />}
        />
        
      </Routes>

      <Footer />

      <ContactModal
        isOpen={contactOpen}
        onClose={closeContactModal}
      />
    </>
  );
}

export default App;