import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  ChevronDown,
  Menu,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

import "../styles/navbar.css";

const primaryLinks = [
  {
    label: "Technology",
    path: "/technology",
  },
  {
    label: "Pilot Programs",
    path: "/pilot-programs",
  },
  {
    label: "Company",
    path: "/company",
  },
];

const productLinks = [
  {
    name: "Energ IQ Tech",
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

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

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
    setMobileProductsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        productsRef.current &&
        !productsRef.current.contains(event.target)
      ) {
        setProductsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
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
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleContactClick = () => {
    setMobileOpen(false);
    setProductsOpen(false);
    setMobileProductsOpen(false);

    if (typeof openContactModal === "function") {
      openContactModal();
    }
  };

  const toggleProducts = () => {
    setProductsOpen((current) => !current);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((current) => !current);
    setProductsOpen(false);
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
            <span className="as-spectrum-logo">
                <span className="as-spectrum-center" />

                <span className="as-spectrum-node as-spectrum-node--top">
                ✦
                </span>

                <span className="as-spectrum-node as-spectrum-node--left">
                ✦
                </span>

                <span className="as-spectrum-node as-spectrum-node--right">
                ✦
                </span>

                <span className="as-spectrum-node as-spectrum-node--bottom">
                ✦
                </span>
            </span>
          </span>

          <span className="as-navbar__brand-copy">
            <strong>
              Automation <span>Spectrum</span>
            </strong>
            <small>Applied AI Platforms</small>
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
                  Two specialised AI platforms developed by Automation
                  Spectrum.
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
            Discuss a project
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
            onClick={() =>
              setMobileProductsOpen((current) => !current)
            }
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
            Discuss a project
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