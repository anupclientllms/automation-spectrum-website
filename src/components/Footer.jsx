import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BrainCircuit,
  Building2,
  Mail,
  MapPin,
  Sparkles,
  Zap,
} from "lucide-react";

import "../styles/footer.css";

const productLinks = [
  {
    label: "EnergIQ",
    path: "/products/energiq",
  },
  {
    label: "AIChatshoppie",
    path: "/products/aichatshoppie",
  },
  {
    label: "Product Portfolio",
    path: "/products",
  },
];

const companyLinks = [
  {
    label: "Company",
    path: "/company",
  },
  {
    label: "Technology",
    path: "/technology",
  },
  {
    label: "Pilot Programs",
    path: "/pilot-programs",
  },
  //{
   // label: "Contact",
  //  path: "/contact",
 // },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    label: "Terms of Use",
    path: "/terms-of-use",
  },
  {
    label: "Intellectual Property",
    path: "/intellectual-property",
  },
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
            <Link
              to="/"
              className="as-footer__brand"
              aria-label="Automation Spectrum home"
            >
              <span className="as-footer__brand-mark" aria-hidden="true">
                <span className="as-footer-spectrum-logo">
                  <span className="as-footer-spectrum-center" />

                  <span className="as-footer-spectrum-node as-footer-spectrum-node--top">
                    ✦
                  </span>

                  <span className="as-footer-spectrum-node as-footer-spectrum-node--left">
                    ✦
                  </span>

                  <span className="as-footer-spectrum-node as-footer-spectrum-node--right">
                    ✦
                  </span>

                  <span className="as-footer-spectrum-node as-footer-spectrum-node--bottom">
                    ✦
                  </span>
                </span>
              </span>

              <span className="as-footer__brand-copy">
                <strong>
                  Automation <span>Spectrum</span>
                </strong>
                <small>Applied AI Platforms</small>
              </span>
            </Link>

            <p className="as-footer__description">
              Automation Spectrum Pty Ltd is an Australian enterprise AI
              product company building specialised platforms for energy,
              operations and enterprise intelligence.
            </p>

            <div className="as-footer__product-badges">
              <Link
                to="/products/energiq"
                className="as-footer__product-badge as-footer__product-badge--energy"
              >
                <Zap size={16} />
                <span>
                  <strong>EnergIQ</strong>
                  <small>Energy & operational intelligence</small>
                </span>
              </Link>

              <Link
                to="/products/aichatshoppie"
                className="as-footer__product-badge as-footer__product-badge--enterprise"
              >
                <BrainCircuit size={16} />
                <span>
                  <strong>AIChatshoppie</strong>
                  <small>Enterprise AI & automation</small>
                </span>
              </Link>
            </div>
          </div>

          <div className="as-footer__links-column">
            <h3>Products</h3>

            <nav aria-label="Footer product navigation">
              {productLinks.map((link) => (
                <Link to={link.path} key={link.path}>
                  {link.label}
                </Link>
              ))}

              <a
                href="https://energiqtech.com"
                target="_blank"
                rel="noreferrer"
              >
                EnergIQ website
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://aichatshoppie.com"
                target="_blank"
                rel="noreferrer"
              >
                AIChatshoppie website
                <ArrowUpRight size={14} />
              </a>
            </nav>
          </div>

          <div className="as-footer__links-column">
            <h3>Company</h3>

            <nav aria-label="Footer company navigation">
              {companyLinks.map((link) => (
                <Link to={link.path} key={link.path}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="as-footer__contact-column">
            <h3>Contact</h3>

            <div className="as-footer__contact-list">
              <div className="as-footer__contact-item">
                <MapPin size={17} />

                <span>
                  <strong>Melbourne, Australia</strong>
                  <small>Serving organisations across Australia and globally</small>
                </span>
              </div>

              <a
                href="mailto:contact@automationspectrum.com.au"
                className="as-footer__contact-item"
              >
                <Mail size={17} />

                <span>
                  <strong>contact@automationspectrum.com.au</strong>
                  <small>Projects, pilots and partnerships</small>
                </span>
              </a>

              <div className="as-footer__contact-item">
                <Building2 size={17} />

                <span>
                  <strong>Automation Spectrum Pty Ltd</strong>
                  <small>ABN 80 636 637 904</small>
                </span>
              </div>
            </div>

            <div className="as-footer__social">
                <a
                    href="https://www.linkedin.com/company/automation-spectrum"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Automation Spectrum on LinkedIn"
                >
                    <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    >
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
            © {currentYear} Automation Spectrum Pty Ltd. All rights reserved.<br></br>

            <strong>EnergIQ</strong> and <strong>AIChatshoppie</strong> are
            products of Automation Spectrum Pty Ltd. 
          </p>


          <nav
            className="as-footer__legal"
            aria-label="Footer legal navigation"
          >
            {legalLinks.map((link) => (
              <Link to={link.path} key={link.path}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;