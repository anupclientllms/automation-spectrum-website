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
          path="/products/energiq"
          element={<EnergIQPage openContactModal={openContactModal} />}
        />

        <Route
          path="/products/aichatshoppie"
          element={
            <AIChatshoppiePage openContactModal={openContactModal} />
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        <Route
          path="/intellectual-property"
          element={<IntellectualPropertyPage />}
        />
        {/*

        
        

        

        

        

        

        

        <Route
          path="/contact"
          element={<ContactPage openContactModal={openContactModal} />}
        />

        

        

        

        <Route path="*" element={<NotFound />} />
        */}
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