import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Bot,
  Workflow,
  Code2,
  ReceiptText, FilePenLine, MessagesSquare, CalendarClock, Files, ChartNoAxesCombined,
  ChevronDown,
  Menu,
  X,
  Zap,
} from "lucide-react";


import "../styles/navbar.css";

const primaryLinks = [
  { label: "Partners", path: "/partners" },
  { label: "Company", path: "/company" },
];

const serviceLinks = [
  { name: "AI Consulting & Strategy", path: "/services/ai-consulting", description: "Identify practical AI opportunities", icon: BriefcaseBusiness },
  { name: "Generative AI & Agents", path: "/services/generative-ai", description: "Assistants, RAG and agent workflows", icon: Bot },
  { name: "Business Automation", path: "/services/business-automation", description: "Improve workflows and productivity", icon: Workflow },
  { name: "Custom Software Engineering", path: "/services/software-engineering", description: "Build and integrate business systems", icon: Code2 },
  { name: "Technology", path: "/technology", description: "Explore our technical capabilities", icon: BrainCircuit },
  { name: "Pilot Programs", path: "/pilot-programs", description: "Validate solutions before scaling", icon: Zap },
];

const solutionLinks = [
  { name: "Invoices & Payments", path: "/solutions/invoices-payments", description: "Invoice processing, receipts and payment follow-ups", icon: ReceiptText },
  { name: "Quotes & Proposals", path: "/solutions/quotes-proposals", description: "Prepare quotes and proposals faster", icon: FilePenLine },
  { name: "Customer Service & Sales", path: "/solutions/customer-service-sales", description: "Customer enquiries, CRM and sales follow-ups", icon: MessagesSquare },
  { name: "Scheduling & Operations", path: "/solutions/scheduling-operations", description: "Jobs, appointments, rostering and workflows", icon: CalendarClock },
  { name: "Documents & Contracts", path: "/solutions/documents-contracts", description: "Document search, reviews and contract intelligence", icon: Files },
  { name: "Business Intelligence", path: "/solutions/business-intelligence", description: "Reporting, forecasting and supplier analysis", icon: ChartNoAxesCombined },
];

const productLinks = [
  {
    name: "EnerG IQ Tech",
    path: "/products/energiqtech",
    description: "Energy and operational intelligence",
    icon: Zap,
    theme: "energy",
  },
  {
    name: "AIChatshoppie",
    path: "/products/aichatshoppie",
    description: "Enterprise AI and intelligent automation",
    icon: BrainCircuit,
    theme: "enterprise",
  },
];

function Navbar({ openContactModal }) {
  const location = useLocation();
  const productsRef = useRef(null);
  const servicesRef = useRef(null);
  const solutionsRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const isServicesRoute = location.pathname.startsWith("/services/") || ["/technology", "/pilot-programs"].includes(location.pathname);
  const isSolutionsRoute = location.pathname.startsWith("/solutions/");
  const isProductsRoute = location.pathname.startsWith("/products");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
    setServicesOpen(false);
    setSolutionsOpen(false);
    setMobileServicesOpen(false);
    setMobileSolutionsOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        (productsRef.current && !productsRef.current.contains(event.target))
      ) {
        setProductsOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      if (solutionsRef.current && !solutionsRef.current.contains(event.target)) {
        setSolutionsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
        setServicesOpen(false);
        setSolutionsOpen(false);
        setMobileSolutionsOpen(false);
        setMobileServicesOpen(false);
        setMobileOpen(false);
        setMobileProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const node = document.getElementById(id);
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleContactClick = () => {
    setMobileOpen(false);
    setProductsOpen(false);
    setServicesOpen(false);
    setSolutionsOpen(false);
    setMobileSolutionsOpen(false);
    setMobileServicesOpen(false);
    setMobileProductsOpen(false);

    if (typeof openContactModal === "function") {
      openContactModal();
    }
  };

  const toggleServices = () => {
    setServicesOpen((current) => !current);
    setProductsOpen(false);
    setSolutionsOpen(false);
  };

  const toggleSolutions = () => {
    setSolutionsOpen((current) => !current);
    setServicesOpen(false);
    setProductsOpen(false);
  };

  const toggleProducts = () => {
    setServicesOpen(false);
    setSolutionsOpen(false);
    setProductsOpen((current) => !current);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((current) => !current);
    setProductsOpen(false);
    setServicesOpen(false);
    setSolutionsOpen(false);
  };

  return (
    <header
      className={[
        "as-navbar",
        isScrolled ? "as-navbar--scrolled" : "",
        mobileOpen ? "as-navbar--mobile-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="as-navbar__container">
        <Link
          to="/"
          className="as-navbar__brand"
          aria-label="Automation Spectrum home"
        >
          <span className="as-navbar__brand-mark" aria-hidden="true">
            <img
              src="/favicon.png"
              alt=""
              className="as-navbar__brand-logo"
            />
          </span>

          <span className="as-navbar__brand-copy">
            <strong>
              Automation <span>Spectrum</span>
            </strong>
            <small>AI Solutions & Automation</small>
          </span>
        </Link>

        <nav className="as-navbar__desktop" aria-label="Primary navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `as-navbar__link ${isActive ? "is-active" : ""}`
            }
          >
            Home
          </NavLink>

          <div
            className="as-navbar__products as-navbar__services"
            ref={servicesRef}
            onMouseEnter={() => { setServicesOpen(true); setProductsOpen(false); setSolutionsOpen(false); }}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button type="button"
              className={`as-navbar__link as-navbar__dropdown-trigger ${isServicesRoute ? "is-active" : ""}`}
              aria-expanded={servicesOpen} aria-haspopup="true"
              onClick={toggleServices}>
              Services <ChevronDown size={15} className={servicesOpen ? "is-rotated" : ""} />
            </button>
            <div className={`as-navbar__dropdown as-navbar__services-dropdown ${servicesOpen ? "is-open" : ""}`}>
              <div className="as-navbar__dropdown-header">
                <span>AI services & delivery</span>
                <p>Practical AI consulting, implementation and software engineering.</p>
              </div>
              <div className="as-navbar__dropdown-products as-navbar__services-grid">
                {serviceLinks.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link key={service.name} to={service.path}
                      className="as-navbar__product-link as-navbar__service-link"
                      onClick={() => setServicesOpen(false)}>
                      <span className="as-navbar__product-icon"><Icon size={20} /></span>
                      <span className="as-navbar__product-copy"><strong>{service.name}</strong><small>{service.description}</small></span>
                      <ArrowRight className="as-navbar__product-arrow" size={16} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className="as-navbar__products as-navbar__solutions"
            ref={solutionsRef}
            onMouseEnter={() => { setSolutionsOpen(true); setServicesOpen(false); setProductsOpen(false); }}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button type="button"
              className={`as-navbar__link as-navbar__dropdown-trigger ${isSolutionsRoute ? "is-active" : ""}`}
              aria-expanded={solutionsOpen} aria-haspopup="true"
              aria-controls="as-navbar-solutions-menu"
              onClick={toggleSolutions}>
              Solutions <ChevronDown size={15} className={solutionsOpen ? "is-rotated" : ""} />
            </button>
            <div id="as-navbar-solutions-menu" className={`as-navbar__dropdown as-navbar__solutions-dropdown ${solutionsOpen ? "is-open" : ""}`}>
              <div className="as-navbar__dropdown-header">
                <span>AI solutions for business</span>
                <p>Practical solutions to reduce manual work, improve efficiency and support growth.</p>
              </div>
              <div className="as-navbar__dropdown-products as-navbar__solutions-grid">
                {solutionLinks.map((solution) => {
                  const Icon = solution.icon;
                  return (
                    <Link key={solution.name} to={solution.path}
                      className="as-navbar__product-link as-navbar__solution-link"
                      onClick={() => setSolutionsOpen(false)}>
                      <span className="as-navbar__product-icon"><Icon size={20} /></span>
                      <span className="as-navbar__product-copy"><strong>{solution.name}</strong><small>{solution.description}</small></span>
                      <ArrowRight className="as-navbar__product-arrow" size={16} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className="as-navbar__products"
            ref={productsRef}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              className={[
                "as-navbar__link",
                "as-navbar__dropdown-trigger",
                isProductsRoute ? "is-active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              aria-expanded={productsOpen}
              aria-haspopup="true"
              onClick={toggleProducts}
            >
              Products
              <ChevronDown
                size={15}
                className={productsOpen ? "is-rotated" : ""}
              />
            </button>

            <div
              className={[
                "as-navbar__dropdown",
                productsOpen ? "is-open" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="as-navbar__dropdown-header">
                <span>Product portfolio</span>
                <p>
                  Distinct AI product initiatives, including EnerG IQ Tech as a separately incorporated company.
                </p>
              </div>

              <div className="as-navbar__dropdown-products">
                {productLinks.map((product) => {
                  const Icon = product.icon;

                  return (
                    <Link
                      to={product.path}
                      className={`as-navbar__product-link as-navbar__product-link--${product.theme}`}
                      key={product.name}
                    >
                      <span className="as-navbar__product-icon">
                        <Icon size={21} />
                      </span>

                      <span className="as-navbar__product-copy">
                        <strong>{product.name}</strong>
                        <small>{product.description}</small>
                      </span>

                      <ArrowRight
                        className="as-navbar__product-arrow"
                        size={17}
                      />
                    </Link>
                  );
                })}
              </div>

              <Link
                to="/products"
                className="as-navbar__all-products"
              >
                View product portfolio
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {primaryLinks.map((link) => (
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `as-navbar__link ${isActive ? "is-active" : ""}`
              }
              key={link.path}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="as-navbar__actions">
          <button
            type="button"
            className="as-navbar__contact"
            onClick={handleContactClick}
          >
            Book AI Discovery
            <ArrowRight size={17} />
          </button>

          <button
            type="button"
            className="as-navbar__menu-button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            onClick={toggleMobileMenu}
          >
            {mobileOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      <div
        className={[
          "as-navbar__mobile-panel",
          mobileOpen ? "is-open" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <nav
          className="as-navbar__mobile-nav"
          aria-label="Mobile navigation"
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `as-navbar__mobile-link ${isActive ? "is-active" : ""}`
            }
          >
            Home
            <ArrowRight size={17} />
          </NavLink>

          <button type="button"
            className={`as-navbar__mobile-link as-navbar__mobile-products-trigger ${isServicesRoute ? "is-active" : ""}`}
            aria-expanded={mobileServicesOpen}
            onClick={() => { setMobileServicesOpen((current) => !current); setMobileProductsOpen(false); setMobileSolutionsOpen(false); }}>
            Services <ChevronDown size={17} className={mobileServicesOpen ? "is-rotated" : ""} />
          </button>
          <div className={`as-navbar__mobile-products as-navbar__mobile-services ${mobileServicesOpen ? "is-open" : ""}`}>
            {serviceLinks.map((service) => {
              const Icon = service.icon;
              return (
                <Link to={service.path} key={service.name} className="as-navbar__mobile-product">
                  <span className="as-navbar__mobile-product-icon"><Icon size={20} /></span>
                  <span><strong>{service.name}</strong><small>{service.description}</small></span>
                </Link>
              );
            })}
          </div>

          <button type="button"
            className={`as-navbar__mobile-link as-navbar__mobile-products-trigger ${isSolutionsRoute ? "is-active" : ""}`}
            aria-expanded={mobileSolutionsOpen}
            aria-controls="as-navbar-mobile-solutions"
            onClick={() => { setMobileSolutionsOpen((current) => !current); setMobileServicesOpen(false); setMobileProductsOpen(false); }}>
            Solutions <ChevronDown size={17} className={mobileSolutionsOpen ? "is-rotated" : ""} />
          </button>
          <div id="as-navbar-mobile-solutions" className={`as-navbar__mobile-products as-navbar__mobile-solutions ${mobileSolutionsOpen ? "is-open" : ""}`}>
            {solutionLinks.map((solution) => {
              const Icon = solution.icon;
              return (
                <Link to={solution.path} key={solution.name} className="as-navbar__mobile-product"
                  onClick={() => setMobileOpen(false)}>
                  <span className="as-navbar__mobile-product-icon"><Icon size={20} /></span>
                  <span><strong>{solution.name}</strong><small>{solution.description}</small></span>
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className={[
              "as-navbar__mobile-link",
              "as-navbar__mobile-products-trigger",
              isProductsRoute ? "is-active" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-expanded={mobileProductsOpen}
            onClick={() => { setMobileProductsOpen((current) => !current); setMobileServicesOpen(false); setMobileSolutionsOpen(false); }}
          >
            Products
            <ChevronDown
              size={17}
              className={mobileProductsOpen ? "is-rotated" : ""}
            />
          </button>

          <div
            className={[
              "as-navbar__mobile-products",
              mobileProductsOpen ? "is-open" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <NavLink
              to="/products"
              className="as-navbar__mobile-product-overview"
            >
              Product portfolio
              <ArrowRight size={16} />
            </NavLink>

            {productLinks.map((product) => {
              const Icon = product.icon;

              return (
                <NavLink
                  to={product.path}
                  className={({ isActive }) =>
                    [
                      "as-navbar__mobile-product",
                      `as-navbar__mobile-product--${product.theme}`,
                      isActive ? "is-active" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                  key={product.name}
                >
                  <span className="as-navbar__mobile-product-icon">
                    <Icon size={20} />
                  </span>

                  <span>
                    <strong>{product.name}</strong>
                    <small>{product.description}</small>
                  </span>
                </NavLink>
              );
            })}
          </div>

          {primaryLinks.map((link) => (
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `as-navbar__mobile-link ${
                  isActive ? "is-active" : ""
                }`
              }
              key={link.path}
            >
              {link.label}
              <ArrowRight size={17} />
            </NavLink>
          ))}

          <button
            type="button"
            className="as-navbar__mobile-contact"
            onClick={handleContactClick}
          >
            Book AI Discovery
            <ArrowRight size={18} />
          </button>

          <p className="as-navbar__mobile-company">
            Automation Spectrum Pty Ltd
            <span>Melbourne, Australia</span>
          </p>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;