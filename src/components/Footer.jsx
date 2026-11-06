import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BrainCircuit,
  Building2,
  Mail,
  MapPin,
  Zap,
} from "lucide-react";

import footerLogo from "../assets/logos/logo-footer.png";
import "../styles/footer.css";

const serviceLinks = [
  { label: "AI Consulting & Strategy", path: "/#ai-services" },
  { label: "Generative AI & Agents", path: "/#ai-services" },
  { label: "Business Automation", path: "/#ai-services" },
  { label: "Custom Software Engineering", path: "/#ai-services" },
];

const productLinks = [
  { label: "EnerG IQ Tech", path: "/products/energiqtech" },
  { label: "AIChatshoppie", path: "/products/aichatshoppie" },
  { label: "Product Portfolio", path: "/products" },
];

const companyLinks = [
  { label: "Company", path: "/company" },
  { label: "Partners", path: "/partners" },
  { label: "Technology", path: "/technology" },
  { label: "Pilot Programs", path: "/pilot-programs" },
];

const legalLinks = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms of Use", path: "/terms-of-use" },
  { label: "Intellectual Property", path: "/intellectual-property" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="as-footer">
      <div className="as-footer__ambient as-footer__ambient--one" />
      <div className="as-footer__ambient as-footer__ambient--two" />

      <div className="as-footer__container">
        <div className="as-footer__top">
          <div className="as-footer__brand-column">
            <Link to="/" className="as-footer__brand" aria-label="Automation Spectrum home">
              <span className="as-footer__brand-mark" aria-hidden="true">
                <img src={footerLogo} alt="" className="as-footer__brand-logo" />
              </span>
              <span className="as-footer__brand-copy">
                <strong>Automation <span>Spectrum</span></strong>
                <small>AI Solutions &amp; Automation</small>
              </span>
            </Link>

            <p className="as-footer__description">
              Automation Spectrum Pty Ltd is a Melbourne-based AI consulting and
              software engineering company helping organisations apply generative
              AI, intelligent automation and custom technology to practical
              business challenges.
            </p>

            <div className="as-footer__product-badges">
              <Link to="/products/energiqtech" className="as-footer__product-badge as-footer__product-badge--energy">
                <Zap size={16} />
                <span><strong>EnerG IQ Tech</strong><small>Energy &amp; operational intelligence</small></span>
              </Link>
              <Link to="/products/aichatshoppie" className="as-footer__product-badge as-footer__product-badge--enterprise">
                <BrainCircuit size={16} />
                <span><strong>AIChatshoppie</strong><small>Enterprise AI &amp; automation</small></span>
              </Link>
            </div>
          </div>

          <div className="as-footer__links-column">
            <h3>Services</h3>
            <nav aria-label="Footer services navigation">
              {serviceLinks.map((link) => (
                <Link to={link.path} key={link.label}>{link.label}</Link>
              ))}
            </nav>
          </div>

          <div className="as-footer__links-column">
            <h3>Products</h3>
            <nav aria-label="Footer product navigation">
              {productLinks.map((link) => (
                <Link to={link.path} key={link.path}>{link.label}</Link>
              ))}
              <a href="https://energiqtech.com" target="_blank" rel="noopener noreferrer">
                EnerG IQ Tech website <ArrowUpRight size={14} />
              </a>
              <a href="https://aichatshoppie.com" target="_blank" rel="noopener noreferrer">
                AIChatshoppie website <ArrowUpRight size={14} />
              </a>
            </nav>
          </div>

          <div className="as-footer__links-column">
            <h3>Company</h3>
            <nav aria-label="Footer company navigation">
              {companyLinks.map((link) => (
                <Link to={link.path} key={link.path}>{link.label}</Link>
              ))}
            </nav>
          </div>

          <div className="as-footer__contact-column">
            <h3>Contact</h3>
            <div className="as-footer__contact-list">
              <div className="as-footer__contact-item">
                <MapPin size={17} />
                <span><strong>Melbourne, Australia</strong><small>Serving organisations across Australia and globally</small></span>
              </div>
              <a href="mailto:contact@automationspectrum.com.au" className="as-footer__contact-item">
                <Mail size={17} />
                <span><strong>contact@automationspectrum.com.au</strong><small>AI projects, consulting and partnerships</small></span>
              </a>
              <div className="as-footer__contact-item">
                <Building2 size={17} />
                <span><strong>Automation Spectrum Pty Ltd</strong><small>ABN 80 636 637 904</small></span>
              </div>
            </div>
            <div className="as-footer__social">
              <a href="https://www.linkedin.com/company/automation-spectrum-pty-ltd/" target="_blank" rel="noopener noreferrer" aria-label="Automation Spectrum on LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="as-footer__bottom">
          <p>
            © {currentYear} Automation Spectrum Pty Ltd. All rights reserved.
            <span className="as-footer__bottom-note">
              AIChatshoppie is an Automation Spectrum technology initiative.
              EnerG IQ Tech is advanced by the separately incorporated EnerG IQ Tech Pty Ltd.
            </span>
          </p>
          <nav className="as-footer__legal" aria-label="Footer legal navigation">
            {legalLinks.map((link) => (
              <Link to={link.path} key={link.path}>{link.label}</Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
