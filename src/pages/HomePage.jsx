import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building2,
  Check,
  Database,
  Factory,
  Gauge,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

import "../styles/home.css";

const products = [
  {
    eyebrow: "Energy & Operational Intelligence",
    name: "EnergIQ",
    description:
      "An AI-powered energy and operational intelligence platform helping energy-intensive organisations reduce costs, improve asset performance and make better operational decisions.",
    capabilities: [
      "AI decision agents",
      "Operational digital twins",
      "Energy and demand optimisation",
      "Human-approved control workflows",
    ],
    internalPath: "/products/energiq",
    externalUrl: "https://energiqtech.com",
    icon: Zap,
    theme: "energy",
  },
  {
    eyebrow: "Enterprise AI & Intelligent Automation",
    name: "AIChatshoppie",
    description:
      "A secure enterprise AI platform for intelligent assistants, private knowledge systems, agentic workflows and domain-specific automation.",
    capabilities: [
      "Enterprise AI assistants",
      "Knowledge systems and RAG",
      "Multi-agent orchestration",
      "Private and domain-specific AI",
    ],
    internalPath: "/products/aichatshoppie",
    externalUrl: "https://aichatshoppie.com",
    icon: BrainCircuit,
    theme: "enterprise",
  },
];

const outcomes = [
  {
    icon: Gauge,
    title: "Reduce operational costs",
    description:
      "Identify avoidable energy use, operational inefficiencies and opportunities for measurable cost reduction.",
  },
  {
    icon: Workflow,
    title: "Automate complex workflows",
    description:
      "Coordinate data, analysis, recommendations and approvals through intelligent, auditable workflows.",
  },
  {
    icon: BarChart3,
    title: "Improve decision-making",
    description:
      "Turn fragmented operational and enterprise data into timely, actionable intelligence.",
  },
  {
    icon: ShieldCheck,
    title: "Maintain human control",
    description:
      "Keep critical decisions reviewable, explainable and governed through human-in-the-loop controls.",
  },
];

const capabilities = [
  {
    icon: BrainCircuit,
    title: "AI agents",
    description:
      "Specialised agents that analyse events, identify root causes and recommend appropriate actions.",
  },
  {
    icon: Layers3,
    title: "Digital twins",
    description:
      "Contextual operational models that help teams understand, simulate and improve real-world systems.",
  },
  {
    icon: Database,
    title: "Enterprise knowledge",
    description:
      "Secure retrieval and reasoning across internal documents, systems and operational data.",
  },
  {
    icon: Network,
    title: "System integration",
    description:
      "Connect existing APIs, telemetry, BMS, IoT, enterprise platforms and data infrastructure.",
  },
];

const priorityMarkets = [
  {
    icon: Factory,
    title: "Cold and food storage",
    description:
      "Refrigeration, compressors, defrost cycles, peak demand and temperature-sensitive operations.",
  },
  {
    icon: Building2,
    title: "Buildings and infrastructure",
    description:
      "Commercial buildings, hotels, airports, healthcare, universities and local government assets.",
  },
  {
    icon: Network,
    title: "Warehousing and logistics",
    description:
      "Energy-intensive facilities, distributed operations, equipment performance and workflow intelligence.",
  },
];

const pilotSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Define the operational problem, available data, target assets and measurable business outcomes.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Integrate existing data, systems, documents, telemetry or operational workflows with minimal disruption.",
  },
  {
    number: "03",
    title: "Demonstrate",
    description:
      "Run a focused pilot that produces evidence, recommendations and measurable operational insights.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Expand successful capabilities across sites, assets, teams or enterprise workflows.",
  },
];

function HomePage({ openContactModal }) {
  return (
    <main className="as-home">
      {/* Hero */}
      <section className="as-hero">
        <div className="as-hero__ambient as-hero__ambient--one" />
        <div className="as-hero__ambient as-hero__ambient--two" />

        <div className="as-container as-hero__layout">
          <div className="as-hero__content">
            <div className="as-eyebrow">
              <span className="as-eyebrow__dot" />
              Australian enterprise AI product company
            </div>

            <h1 className="as-hero__title">
              Applied AI platforms for{" "}
              <span>energy, operations and enterprise intelligence.</span>
            </h1>

            <p className="as-hero__description">
              Automation Spectrum builds specialised AI products that help
              organisations reduce operational costs, improve decision-making
              and automate complex enterprise workflows.
            </p>

            <div className="as-hero__actions">
              <Link className="as-button as-button--primary" to="/products">
                Explore our products
                <ArrowRight size={18} />
              </Link>

              <button
                type="button"
                className="as-button as-button--secondary"
                onClick={openContactModal}
                >
                Discuss an AI pilot
                </button>
            </div>

            <div className="as-hero__assurance">
              <div>
                <Check size={16} />
                Enterprise-focused
              </div>

              <div>
                <Check size={16} />
                Pilot-to-production
              </div>

              <div>
                <Check size={16} />
                Human-controlled AI
              </div>
            </div>
          </div>

          <div className="as-hero-visual" aria-hidden="true">
            <div className="as-orbit as-orbit--outer" />
            <div className="as-orbit as-orbit--middle" />
            <div className="as-orbit as-orbit--inner" />

            <div className="as-hero-visual__core">
              <div className="hero-spectrum-logo">
                <span className="top">✦</span>
                <span className="left">✦</span>
                <span className="center">◉</span>
                <span className="right">✦</span>
                <span className="bottom">✦</span>
              </div>

              <span>Automation Spectrum</span>
              <small>Applied AI Platforms</small>
            </div>

            <div className="as-floating-node as-floating-node--energy">
              <Zap size={18} />
              <div>
                <strong>EnergIQ</strong>
                <span>Operational intelligence</span>
              </div>
            </div>

            <div className="as-floating-node as-floating-node--ai">
              <BrainCircuit size={18} />
              <div>
                <strong>AIChatshoppie</strong>
                <span>Enterprise intelligence</span>
              </div>
            </div>

            <div className="as-floating-node as-floating-node--data">
              <Database size={18} />
              <div>
                <strong>Connected data</strong>
                <span>Systems and telemetry</span>
              </div>
            </div>

            <div className="as-visual-line as-visual-line--one" />
            <div className="as-visual-line as-visual-line--two" />
            <div className="as-visual-line as-visual-line--three" />
          </div>
        </div>
      </section>

      {/* Corporate identity strip */}
      <section className="as-identity-strip">
        <div className="as-container as-identity-strip__content">
          <p>
            <strong>Automation Spectrum Pty Ltd</strong> is the company behind
            EnergIQ and AIChatshoppie.
          </p>

          <div className="as-identity-strip__divider" />

          <p>
            One Australian company. Two specialised AI platforms. One clear
            commercial and technology structure.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="as-section as-products-section">
        <div className="as-container">
          <div className="as-section-heading as-section-heading--center">
            <span className="as-section-heading__eyebrow">
              Our product portfolio
            </span>

            <h2>Specialised platforms for distinct enterprise problems</h2>

            <p>
              Each product has a focused commercial purpose while sharing the
              engineering, AI and delivery capabilities of Automation Spectrum.
            </p>
          </div>

          <div className="as-products-grid">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <article
                  className={`as-product-card as-product-card--${product.theme}`}
                  key={product.name}
                >
                  <div className="as-product-card__glow" />

                  <div className="as-product-card__top">
                    <div className="as-product-card__icon">
                      <Icon size={26} />
                    </div>

                    <span className="as-product-card__eyebrow">
                      {product.eyebrow}
                    </span>
                  </div>

                  <h3>{product.name}</h3>
                  <p className="as-product-card__description">
                    {product.description}
                  </p>

                  <div className="as-product-card__capabilities">
                    {product.capabilities.map((capability) => (
                      <div key={capability}>
                        <Check size={16} />
                        <span>{capability}</span>
                      </div>
                    ))}
                  </div>

                  <div className="as-product-card__actions">
                    <Link
                      className="as-text-link"
                      to={product.internalPath}
                    >
                      View product overview
                      <ArrowRight size={17} />
                    </Link>

                    <a
                      className="as-product-card__website"
                      href={product.externalUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Product website
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="as-section as-outcomes-section">
        <div className="as-container">
          <div className="as-section-heading">
            <span className="as-section-heading__eyebrow">
              Business outcomes
            </span>

            <h2>AI should create operational value, not additional complexity</h2>

            <p>
              Our platforms are designed around measurable problems,
              accountable decisions and practical enterprise adoption.
            </p>
          </div>

          <div className="as-outcomes-grid">
            {outcomes.map((outcome) => {
              const Icon = outcome.icon;

              return (
                <article className="as-outcome-card" key={outcome.title}>
                  <div className="as-outcome-card__icon">
                    <Icon size={22} />
                  </div>

                  <h3>{outcome.title}</h3>
                  <p>{outcome.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="as-section as-technology-section">
        <div className="as-container as-technology-layout">
          <div className="as-technology-intro">
            <span className="as-section-heading__eyebrow">
              Shared technology foundation
            </span>

            <h2>From connected data to governed AI decisions</h2>

            <p>
              Automation Spectrum combines enterprise integration, applied AI,
              operational intelligence and human oversight into deployable
              product experiences.
            </p>

            <Link className="as-button as-button--secondary" to="/technology">
              Explore our technology
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="as-capabilities-grid">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  className="as-capability-card"
                  key={capability.title}
                >
                  <Icon size={24} />

                  <div>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Priority markets */}
      <section className="as-section as-markets-section">
        <div className="as-container">
          <div className="as-section-heading as-section-heading--center">
            <span className="as-section-heading__eyebrow">
              Initial commercial focus
            </span>

            <h2>Focused market entry with a broader platform vision</h2>

            <p>
              Our near-term commercial focus is on operationally complex,
              energy-intensive environments where AI can produce measurable
              value.
            </p>
          </div>

          <div className="as-markets-grid">
            {priorityMarkets.map((market) => {
              const Icon = market.icon;

              return (
                <article className="as-market-card" key={market.title}>
                  <div className="as-market-card__number">
                    <Icon size={24} />
                  </div>

                  <h3>{market.title}</h3>
                  <p>{market.description}</p>
                </article>
              );
            })}
          </div>

          
        </div>
      </section>

      {/* Pilot model */}
      <section className="as-section as-pilot-section">
        <div className="as-container">
          <div className="as-section-heading">
            <span className="as-section-heading__eyebrow">
              Pilot-to-production model
            </span>

            <h2>Start with evidence. Scale with confidence.</h2>

            <p>
              We use focused pilot engagements to establish technical
              feasibility, demonstrate measurable outcomes and build a clear
              pathway to production.
            </p>
          </div>

          <div className="as-pilot-grid">
            {pilotSteps.map((step) => (
              <article className="as-pilot-step" key={step.number}>
                <span className="as-pilot-step__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <div className="as-pilot-cta">
            <div>
              <span>Have an operational or enterprise AI challenge?</span>
              <h3>Explore it through a focused Automation Spectrum pilot.</h3>
            </div>

            <Link
              className="as-button as-button--primary"
              to="/pilot-programs"
            >
              View pilot programs
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="as-final-cta">
        <div className="as-final-cta__glow" />

        <div className="as-container as-final-cta__content">
          <div>
            <span className="as-section-heading__eyebrow">
              Build with Automation Spectrum
            </span>

            <h2>
              Turn complex operational and enterprise problems into practical
              AI products.
            </h2>

            <p>
              Speak with us about an AI pilot, product collaboration,
              technology partnership or strategic investment opportunity.
            </p>
          </div>

          <div className="as-final-cta__actions">
            <button
                type="button"
                className="as-button as-button--primary"
                onClick={openContactModal}
            >
                Start a conversation
                <ArrowRight size={18} />
            </button>

            <Link className="as-button as-button--secondary" to="/company">
              About the company
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;