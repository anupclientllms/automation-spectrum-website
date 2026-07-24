import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building2,
  Check,
  CloudCog,
  Database,
  Factory,
  Gauge,
  GitBranch,
  Layers3,
  Network,
  Package,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

import "../styles/products.css";

const products = [
  {
    name: "Energ IQ Tech",
    category: "Energy & Operational Intelligence",
    theme: "energy",
    icon: Zap,
    description:
      "An applied AI platform helping energy-intensive organisations understand operations, reduce avoidable costs and improve asset and energy performance.",
    capabilities: [
      "Operational energy intelligence",
      "AI decision agents",
      "Digital twins",
      "Peak-demand optimisation",
      "Equipment and anomaly analysis",
      "Human-approved operational workflows",
    ],
    markets: [
      "Cold and food storage",
      "Warehousing and logistics",
      "Buildings and infrastructure",
      "Distributed energy resources",
    ],
    internalPath: "/products/energiqtech",
    externalUrl: "https://energiqtech.com",
  },
  {
    name: "AIChatshoppie",
    category: "Enterprise AI & Intelligent Automation",
    theme: "enterprise",
    icon: BrainCircuit,
    description:
      "An enterprise AI platform for secure assistants, knowledge systems, intelligent workflows and domain-specific automation.",
    capabilities: [
      "Enterprise AI assistants",
      "Retrieval-augmented generation",
      "Multi-agent orchestration",
      "Customer intelligence",
      "Knowledge and workflow automation",
      "Private and domain-specific AI",
    ],
    markets: [
      "Enterprise operations",
      "Customer support",
      "Knowledge-intensive teams",
      "Regulated and data-sensitive environments",
    ],
    internalPath: "/products/aichatshoppie",
    externalUrl: "https://aichatshoppie.com",
  },
];

const sharedCapabilities = [
  {
    icon: BrainCircuit,
    title: "AI agents",
    description:
      "Specialised agents for reasoning, analysis, recommendations and workflow coordination.",
  },
  {
    icon: Database,
    title: "Knowledge and data",
    description:
      "Connected operational data, enterprise knowledge, telemetry, documents and APIs.",
  },
  {
    icon: Layers3,
    title: "Product workspaces",
    description:
      "Purpose-built experiences for operational users, enterprise teams and decision-makers.",
  },
  {
    icon: ShieldCheck,
    title: "Human control",
    description:
      "Reviewable recommendations, approval stages, auditability and accountable execution.",
  },
  {
    icon: CloudCog,
    title: "Flexible deployment",
    description:
      "Cloud, private, edge-enabled and hybrid deployment approaches.",
  },
  {
    icon: Network,
    title: "Enterprise integration",
    description:
      "Integration with existing APIs, databases, enterprise systems and operational platforms.",
  },
];

const productDifferences = [
  {
    label: "Primary problem",
    energiq: "Energy, assets and operational efficiency",
    aichatshoppie: "Knowledge, workflows and enterprise intelligence",
  },
  {
    label: "Primary users",
    energiq: "Operations, facilities, energy and asset teams",
    aichatshoppie: "Enterprise, service, knowledge and customer teams",
  },
  {
    label: "Typical information",
    energiq: "Telemetry, meters, equipment and operational context",
    aichatshoppie: "Documents, systems, customer and enterprise knowledge",
  },
  {
    label: "Typical output",
    energiq: "Operational insight, simulation and recommendations",
    aichatshoppie: "Answers, workflow actions and intelligent assistance",
  },
  {
    label: "Commercial model",
    energiq: "Pilot, platform subscription and deployment",
    aichatshoppie: "Pilot, licensing, integration and enterprise deployment",
  },
];

const productUseCases = [
  {
    product: "Energ IQ Tech",
    theme: "energy",
    icon: Gauge,
    title: "Operational cost reduction",
    description:
      "Identify inefficient energy use, avoidable demand and equipment-related operating issues.",
  },
  {
    product: "Energ IQ Tech",
    theme: "energy",
    icon: Activity,
    title: "Operational decision support",
    description:
      "Analyse events, identify likely causes and support accountable operational action.",
  },
  {
    product: "Energ IQ Tech",
    theme: "energy",
    icon: BarChart3,
    title: "Portfolio intelligence",
    description:
      "Compare assets, sites and operating patterns across distributed environments.",
  },
  {
    product: "AIChatshoppie",
    theme: "enterprise",
    icon: Database,
    title: "Enterprise knowledge assistant",
    description:
      "Help users retrieve and interpret trusted information across internal knowledge sources.",
  },
  {
    product: "AIChatshoppie",
    theme: "enterprise",
    icon: Workflow,
    title: "Intelligent workflow automation",
    description:
      "Coordinate multi-step processes using AI assistance, business rules and human approval.",
  },
  {
    product: "AIChatshoppie",
    theme: "enterprise",
    icon: Users,
    title: "Customer intelligence",
    description:
      "Convert customer, service and commercial information into usable business intelligence.",
  },
];

const engagementSteps = [
  {
    number: "01",
    title: "Choose the problem",
    description:
      "Identify the operational or enterprise problem that creates meaningful customer value.",
  },
  {
    number: "02",
    title: "Select the product",
    description:
      "Determine whether Energ IQ Tech, AIChatshoppie or a combined capability best fits the requirement.",
  },
  {
    number: "03",
    title: "Run a pilot",
    description:
      "Validate data, workflows, users, governance and measurable outcomes through a focused engagement.",
  },
  {
    number: "04",
    title: "Scale the product",
    description:
      "Move successful functionality into a production, subscription or broader deployment model.",
  },
];

function ProductPortfolioVisual() {
  return (
    <div className="as-products-hero__visual" aria-hidden="true">
      <div className="as-products-orbit as-products-orbit--outer" />
      <div className="as-products-orbit as-products-orbit--middle" />
      <div className="as-products-orbit as-products-orbit--inner" />

      <div className="as-products-visual__centre">
        <span className="as-products-spectrum">
          <span className="as-products-spectrum__centre" />

          <span className="as-products-spectrum__node as-products-spectrum__node--top">
            ✦
          </span>

          <span className="as-products-spectrum__node as-products-spectrum__node--left">
            ✦
          </span>

          <span className="as-products-spectrum__node as-products-spectrum__node--right">
            ✦
          </span>

          <span className="as-products-spectrum__node as-products-spectrum__node--bottom">
            ✦
          </span>
        </span>

        <strong>Product Portfolio</strong>
        <small>Automation Spectrum</small>
      </div>

      <div className="as-products-visual__node as-products-visual__node--energiq">
        <Zap size={18} />

        <span>
          <strong>Energ IQ Tech</strong>
          <small>Operational intelligence</small>
        </span>
      </div>

      <div className="as-products-visual__node as-products-visual__node--aichat">
        <BrainCircuit size={18} />

        <span>
          <strong>AIChatshoppie</strong>
          <small>Enterprise intelligence</small>
        </span>
      </div>

      <div className="as-products-visual__node as-products-visual__node--foundation">
        <GitBranch size={18} />

        <span>
          <strong>Shared foundation</strong>
          <small>AI, data and product engineering</small>
        </span>
      </div>

      <div className="as-products-visual__node as-products-visual__node--future">
        <Package size={18} />

        <span>
          <strong>Future platforms</strong>
          <small>Built for product expansion</small>
        </span>
      </div>
    </div>
  );
}

function ProductsPage({ openContactModal }) {
  const handleContactClick = () => {
    if (typeof openContactModal === "function") {
      openContactModal();
    }
  };

  return (
    <main className="as-products-page">
      {/* Hero */}
      <section className="as-products-hero">
        <div className="as-products-hero__ambient as-products-hero__ambient--one" />
        <div className="as-products-hero__ambient as-products-hero__ambient--two" />

        <div className="as-products-container as-products-hero__layout">
          <div className="as-products-hero__content">
            <div className="as-products-eyebrow">
              <Sparkles size={15} />
              Automation Spectrum product portfolio
            </div>

            <h1>
              Specialised AI products built on{" "}
              <span>one shared company foundation.</span>
            </h1>

            <p>
              Automation Spectrum develops focused products for distinct
              enterprise and operational problems while sharing AI, data,
              integration and product-engineering capabilities across the
              portfolio.
            </p>

            <div className="as-products-hero__actions">
              <button
                type="button"
                className="as-products-button as-products-button--primary"
                onClick={handleContactClick}
              >
                Discuss a product opportunity
                <ArrowRight size={18} />
              </button>

              <a
                href="#product-portfolio"
                className="as-products-button as-products-button--secondary"
              >
                Explore the portfolio
              </a>
            </div>

            <div className="as-products-hero__assurance">
              <div>
                <Check size={16} />
                Clear product ownership
              </div>

              <div>
                <Check size={16} />
                Shared technology foundation
              </div>

              <div>
                <Check size={16} />
                Pilot-to-production delivery
              </div>
            </div>
          </div>

          <ProductPortfolioVisual />
        </div>
      </section>

      {/* Company relationship */}
      <section className="as-products-intro">
        <div className="as-products-container as-products-intro__layout">
          <div className="as-products-section-heading">
            <span className="as-products-section-heading__eyebrow">
              Product and company structure
            </span>

            <h2>Automation Spectrum is the company behind both products</h2>
          </div>

          <div className="as-products-intro__content">
            <p>
              Energ IQ Tech and AIChatshoppie are products developed, owned and
              commercialised by Automation Spectrum Pty Ltd.
            </p>

            <p>
              Each product has a clear customer purpose and market position,
              while contracts, product delivery, technology development and
              commercial relationships remain with Automation Spectrum.
            </p>

            <div className="as-products-intro__statement">
              <Building2 size={19} />

              <p>
                Customer agreements identify the relevant product while{" "}
                <strong>Automation Spectrum Pty Ltd</strong> remains the
                contracting and accountable delivery entity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main product cards */}
      <section
        id="product-portfolio"
        className="as-products-section as-products-portfolio"
      >
        <div className="as-products-container">
          <div className="as-products-section-heading as-products-section-heading--center">
            <span className="as-products-section-heading__eyebrow">
              Our products
            </span>

            <h2>Two platforms serving distinct business needs</h2>

            <p>
              The product selected depends on whether the primary challenge is
              operational and energy intelligence or enterprise knowledge and
              workflow automation.
            </p>
          </div>

          <div className="as-products-portfolio__grid">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <article
                  className={`as-products-card as-products-card--${product.theme}`}
                  key={product.name}
                >
                  <div className="as-products-card__glow" />

                  <div className="as-products-card__header">
                    <span className="as-products-card__icon">
                      <Icon size={27} />
                    </span>

                    <span>{product.category}</span>
                  </div>

                  <h3>{product.name}</h3>
                  <p className="as-products-card__description">
                    {product.description}
                  </p>

                  <div className="as-products-card__section">
                    <span className="as-products-card__section-title">
                      Core capabilities
                    </span>

                    <div className="as-products-card__capabilities">
                      {product.capabilities.map((capability) => (
                        <div key={capability}>
                          <Check size={15} />
                          <span>{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="as-products-card__section">
                    <span className="as-products-card__section-title">
                      Priority applications
                    </span>

                    <div className="as-products-card__markets">
                      {product.markets.map((market) => (
                        <span key={market}>{market}</span>
                      ))}
                    </div>
                  </div>

                  <div className="as-products-card__actions">
                    <Link
                      to={product.internalPath}
                      className="as-products-card__primary-link"
                    >
                      Explore {product.name}
                      <ArrowRight size={17} />
                    </Link>

                    <a
                      href={product.externalUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit product website
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="as-products-section as-products-comparison">
        <div className="as-products-container">
          <div className="as-products-section-heading">
            <span className="as-products-section-heading__eyebrow">
              Product distinction
            </span>

            <h2>How Energ IQ Tech and AIChatshoppie differ</h2>

            <p>
              The products share core engineering capability but address
              different customer problems, users and data environments.
            </p>
          </div>

          <div className="as-products-comparison__table">
            <div className="as-products-comparison__header">
              <div>Comparison area</div>

              <div>
                <Zap size={17} />
                Energ IQ Tech
              </div>

              <div>
                <BrainCircuit size={17} />
                AIChatshoppie
              </div>
            </div>

            {productDifferences.map((difference) => (
              <div
                className="as-products-comparison__row"
                key={difference.label}
              >
                <div>{difference.label}</div>
                <div>{difference.energiq}</div>
                <div>{difference.aichatshoppie}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared foundation */}
      <section className="as-products-section as-products-foundation">
        <div className="as-products-container">
          <div className="as-products-section-heading as-products-section-heading--center">
            <span className="as-products-section-heading__eyebrow">
              Shared technology foundation
            </span>

            <h2>Reusable capability strengthens every product</h2>

            <p>
              Automation Spectrum develops common AI, data, integration,
              governance and deployment capabilities that can be adapted to
              different product contexts.
            </p>
          </div>

          <div className="as-products-foundation__grid">
            {sharedCapabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  className="as-products-foundation-card"
                  key={capability.title}
                >
                  <span className="as-products-foundation-card__icon">
                    <Icon size={22} />
                  </span>

                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </article>
              );
            })}
          </div>

          <div className="as-products-foundation__link">
            <Link
              to="/technology"
              className="as-products-button as-products-button--secondary"
            >
              Explore the technology foundation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="as-products-section as-products-use-cases">
        <div className="as-products-container">
          <div className="as-products-section-heading">
            <span className="as-products-section-heading__eyebrow">
              Example product applications
            </span>

            <h2>Products designed around measurable business outcomes</h2>

            <p>
              Individual use cases are configured according to customer
              environment, available information, users and operational
              requirements.
            </p>
          </div>

          <div className="as-products-use-cases__grid">
            {productUseCases.map((useCase) => {
              const Icon = useCase.icon;

              return (
                <article
                  className={`as-products-use-case as-products-use-case--${useCase.theme}`}
                  key={`${useCase.product}-${useCase.title}`}
                >
                  <div className="as-products-use-case__top">
                    <span className="as-products-use-case__icon">
                      <Icon size={22} />
                    </span>

                    <span>{useCase.product}</span>
                  </div>

                  <h3>{useCase.title}</h3>
                  <p>{useCase.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Combined opportunities */}
      <section className="as-products-section as-products-combined">
        <div className="as-products-container as-products-combined__layout">
          <div className="as-products-combined__content">
            <span className="as-products-section-heading__eyebrow">
              Combined product opportunities
            </span>

            <h2>
              Some customer environments may benefit from both platforms
            </h2>

            <p>
              Energ IQ Tech may generate operational intelligence while
              AIChatshoppie supports enterprise knowledge, user assistance and
              related business workflows.
            </p>

            <p>
              These capabilities remain separate products but can be integrated
              where a customer requirement genuinely spans operational and
              enterprise intelligence.
            </p>

            <button
              type="button"
              className="as-products-button as-products-button--primary"
              onClick={handleContactClick}
            >
              Discuss a combined opportunity
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="as-products-combined__diagram">
            <div className="as-products-combined__product as-products-combined__product--energy">
              <Zap size={24} />

              <span>
                <strong>Energ IQ Tech</strong>
                <small>Operational intelligence</small>
              </span>
            </div>

            <div className="as-products-combined__connector">
              <Network size={23} />
              <span>Shared customer workflow</span>
            </div>

            <div className="as-products-combined__product as-products-combined__product--enterprise">
              <BrainCircuit size={24} />

              <span>
                <strong>AIChatshoppie</strong>
                <small>Enterprise intelligence</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Future product strategy */}
      <section className="as-products-section as-products-future">
        <div className="as-products-container as-products-future__layout">
          <div className="as-products-future__visual">
            <div className="as-products-future__core">
              <span className="as-products-spectrum">
                <span className="as-products-spectrum__centre" />

                <span className="as-products-spectrum__node as-products-spectrum__node--top">
                  ✦
                </span>

                <span className="as-products-spectrum__node as-products-spectrum__node--left">
                  ✦
                </span>

                <span className="as-products-spectrum__node as-products-spectrum__node--right">
                  ✦
                </span>

                <span className="as-products-spectrum__node as-products-spectrum__node--bottom">
                  ✦
                </span>
              </span>

              <strong>Automation Spectrum</strong>
            </div>

            <div className="as-products-future__orbit as-products-future__orbit--one" />
            <div className="as-products-future__orbit as-products-future__orbit--two" />

            <span className="as-products-future__dot as-products-future__dot--one" />
            <span className="as-products-future__dot as-products-future__dot--two" />
            <span className="as-products-future__dot as-products-future__dot--three" />
          </div>

          <div className="as-products-future__content">
            <span className="as-products-section-heading__eyebrow">
              Product expansion
            </span>

            <h2>A structure designed to support future products</h2>

            <p>
              Automation Spectrum can introduce additional products over time
              when a distinct customer problem, commercial opportunity and
              repeatable product proposition have been validated.
            </p>

            <p>
              This allows the company to expand without presenting every
              capability or industry use case as a separate business.
            </p>

            <div className="as-products-future__principles">
              <div>
                <Check size={16} />
                Distinct customer problem
              </div>

              <div>
                <Check size={16} />
                Repeatable commercial proposition
              </div>

              <div>
                <Check size={16} />
                Shared company technology foundation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="as-products-section as-products-engagement">
        <div className="as-products-container">
          <div className="as-products-section-heading as-products-section-heading--center">
            <span className="as-products-section-heading__eyebrow">
              Product engagement model
            </span>

            <h2>Start with the customer problem, not the product label</h2>

            <p>
              Automation Spectrum helps determine the appropriate platform and
              pilot structure after understanding the business requirement.
            </p>
          </div>

          <div className="as-products-engagement__grid">
            {engagementSteps.map((step) => (
              <article
                className="as-products-engagement-step"
                key={step.number}
              >
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="as-products-cta">
        <div className="as-products-cta__glow" />

        <div className="as-products-container as-products-cta__content">
          <div>
            <span className="as-products-section-heading__eyebrow">
              Explore the right product
            </span>

            <h2>
              Bring us the business problem. We will help identify the right
              platform and pilot approach.
            </h2>

            <p>
              Discuss Energ IQ Tech, AIChatshoppie, a combined opportunity or a
              strategic product collaboration with Automation Spectrum.
            </p>
          </div>

          <div className="as-products-cta__actions">
            <button
              type="button"
              className="as-products-button as-products-button--primary"
              onClick={handleContactClick}
            >
              Start a product discussion
              <ArrowRight size={18} />
            </button>

            <Link
              to="/pilot-programs"
              className="as-products-button as-products-button--secondary"
            >
              View pilot programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductsPage;