import { Link } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Check,
  Database,
  Globe2,
  Handshake,
  Layers3,
  Lightbulb,
  MapPin,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

import "../styles/company.css";

const companyPrinciples = [
  {
    icon: Target,
    title: "Outcome-focused",
    description:
      "We begin with a measurable operational or enterprise problem, not with technology for its own sake.",
  },
  {
    icon: ShieldCheck,
    title: "Human-controlled",
    description:
      "Critical recommendations remain reviewable, explainable and governed through human approval controls.",
  },
  {
    icon: Network,
    title: "Designed to integrate",
    description:
      "Our products work with existing data, telemetry, APIs, documents and enterprise systems.",
  },
  {
    icon: Rocket,
    title: "Built to scale",
    description:
      "Focused pilots establish evidence before successful capabilities are expanded across sites, teams or workflows.",
  },
];

const technologyCapabilities = [
  "Applied generative AI and language models",
  "AI agents and multi-agent orchestration",
  "Retrieval-augmented generation and enterprise knowledge",
  "Digital twins and operational intelligence",
  "Data normalisation and system integration",
  "Human-in-the-loop decision workflows",
  "Private and domain-specific AI deployment",
  "Cloud, edge and containerised architecture",
];

const companyStructure = [
  {
    product: "EnergIQ",
    category: "Energy & Operational Intelligence",
    description:
      "AI-powered energy optimisation, digital twins and operational decision agents for energy-intensive environments.",
    path: "/products/energiq",
    externalUrl: "https://energiqtech.com",
    icon: Zap,
    theme: "energy",
  },
  {
    product: "AIChatshoppie",
    category: "Enterprise AI & Intelligent Automation",
    description:
      "Private AI assistants, enterprise knowledge systems, agentic workflows and domain-specific intelligence.",
    path: "/products/aichatshoppie",
    externalUrl: "https://aichatshoppie.com",
    icon: BrainCircuit,
    theme: "enterprise",
  },
];

const engagementSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Clarify the business problem, available information, operational constraints and desired outcomes.",
  },
  {
    number: "02",
    title: "Demonstrate",
    description:
      "Develop a focused pilot or proof of value using representative enterprise or operational data.",
  },
  {
    number: "03",
    title: "Validate",
    description:
      "Measure technical performance, operational value, user confidence and deployment requirements.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Expand validated capabilities into secure, integrated and production-ready product deployments.",
  },
];

function SpectrumMark() {
  return (
    <span className="as-company-spectrum" aria-hidden="true">
      <span className="as-company-spectrum__centre" />

      <span className="as-company-spectrum__node as-company-spectrum__node--top">
        ✦
      </span>

      <span className="as-company-spectrum__node as-company-spectrum__node--left">
        ✦
      </span>

      <span className="as-company-spectrum__node as-company-spectrum__node--right">
        ✦
      </span>

      <span className="as-company-spectrum__node as-company-spectrum__node--bottom">
        ✦
      </span>
    </span>
  );
}

function CompanyPage({ openContactModal }) {
  const handleContactClick = () => {
    if (typeof openContactModal === "function") {
      openContactModal();
    }
  };

  return (
    <main className="as-company-page">
      {/* Hero */}
      <section className="as-company-hero">
        <div className="as-company-hero__ambient as-company-hero__ambient--one" />
        <div className="as-company-hero__ambient as-company-hero__ambient--two" />

        <div className="as-company-container as-company-hero__layout">
          <div className="as-company-hero__content">
            <div className="as-company-eyebrow">
              <Building2 size={15} />
              Automation Spectrum Pty Ltd
            </div>

            <h1>
              An Australian AI product company building{" "}
              <span>specialised applied AI platforms.</span>
            </h1>

            <p>
              Automation Spectrum develops enterprise AI products that help
              organisations improve operational performance, reduce costs,
              automate complex workflows and make better-informed decisions.
            </p>

            <div className="as-company-hero__actions">
              <button
                type="button"
                className="as-company-button as-company-button--primary"
                onClick={handleContactClick}
              >
                Discuss a project
                <ArrowRight size={18} />
              </button>

              <Link
                to="/products"
                className="as-company-button as-company-button--secondary"
              >
                Explore our products
              </Link>
            </div>

            <div className="as-company-hero__facts">
              <div>
                <MapPin size={17} />
                <span>
                  <strong>Melbourne</strong>
                  <small>Victoria, Australia</small>
                </span>
              </div>

              <div>
                <Building2 size={17} />
                <span>
                  <strong>Australian company</strong>
                  <small>ABN 80 636 637 904</small>
                </span>
              </div>

              <div>
                <Globe2 size={17} />
                <span>
                  <strong>Global ambition</strong>
                  <small>Australian foundation</small>
                </span>
              </div>
            </div>
          </div>

          <div className="as-company-hero__visual" aria-hidden="true">
            <div className="as-company-visual__orbit as-company-visual__orbit--outer" />
            <div className="as-company-visual__orbit as-company-visual__orbit--middle" />
            <div className="as-company-visual__orbit as-company-visual__orbit--inner" />

            <div className="as-company-visual__centre">
              <SpectrumMark />

              <strong>Automation Spectrum</strong>
              <small>Applied AI Platforms</small>
            </div>

            <div className="as-company-visual__node as-company-visual__node--energiq">
              <Zap size={18} />

              <span>
                <strong>EnergIQ</strong>
                <small>Operational intelligence</small>
              </span>
            </div>

            <div className="as-company-visual__node as-company-visual__node--aichat">
              <BrainCircuit size={18} />

              <span>
                <strong>AIChatshoppie</strong>
                <small>Enterprise intelligence</small>
              </span>
            </div>

            <div className="as-company-visual__node as-company-visual__node--foundation">
              <Database size={18} />

              <span>
                <strong>Shared foundation</strong>
                <small>AI, data and integration</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate role */}
      <section className="as-company-section as-company-identity">
        <div className="as-company-container as-company-identity__layout">
          <div className="as-company-section-heading">
            <span className="as-company-section-heading__eyebrow">
              The company behind the products
            </span>

            <h2>One company identity. Two specialised AI platforms.</h2>
          </div>

          <div className="as-company-identity__content">
            <p>
              Automation Spectrum Pty Ltd is the parent company, technology
              developer, intellectual-property owner and commercial entity
              behind EnergIQ and AIChatshoppie.
            </p>

            <p>
              Customers engage with Automation Spectrum for product pilots,
              commercial agreements, implementation, technology partnerships
              and long-term platform deployment.
            </p>

            <div className="as-company-identity__statement">
              <Check size={18} />

              <p>
                Contracts, proposals and invoices are issued by{" "}
                <strong>Automation Spectrum Pty Ltd</strong>, with EnergIQ or
                AIChatshoppie identified as the relevant product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product structure */}
      <section className="as-company-section as-company-products">
        <div className="as-company-container">
          <div className="as-company-section-heading as-company-section-heading--center">
            <span className="as-company-section-heading__eyebrow">
              Product portfolio
            </span>

            <h2>Distinct products supported by one technology company</h2>

            <p>
              Each platform serves a focused business need while drawing on
              Automation Spectrum&apos;s shared AI, data, product engineering
              and commercialisation capabilities.
            </p>
          </div>

          <div className="as-company-products__grid">
            {companyStructure.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className={`as-company-product as-company-product--${item.theme}`}
                  key={item.product}
                >
                  <div className="as-company-product__accent" />

                  <div className="as-company-product__header">
                    <span className="as-company-product__icon">
                      <Icon size={26} />
                    </span>

                    <span>{item.category}</span>
                  </div>

                  <h3>{item.product}</h3>
                  <p>{item.description}</p>

                  <div className="as-company-product__actions">
                    <Link to={item.path}>
                      Product overview
                      <ArrowRight size={17} />
                    </Link>

                    <a
                      href={item.externalUrl}
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

          <div className="as-company-example">
            <div className="as-company-example__icon">
              <Handshake size={25} />
            </div>

            <div>
              <span>Example customer relationship</span>

              <div className="as-company-example__flow">
                <strong>Customer organisation</strong>
                <ArrowRight size={17} />
                <strong>EnergIQ industry solution</strong>
                <ArrowRight size={17} />
                <strong>Automation Spectrum Pty Ltd</strong>
              </div>

              <p>
                The product defines the solution. Automation Spectrum remains
                the accountable contracting and delivery entity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="as-company-section as-company-purpose">
        <div className="as-company-container as-company-purpose__layout">
          <div className="as-company-purpose__content">
            <span className="as-company-section-heading__eyebrow">
              Why we exist
            </span>

            <h2>
              Closing the gap between AI potential and operational reality
            </h2>

            <p>
              Many organisations have valuable operational data, enterprise
              knowledge and automation opportunities, but struggle to turn them
              into secure, usable and measurable AI capabilities.
            </p>

            <p>
              Automation Spectrum develops focused products that combine AI,
              enterprise integration and human oversight into workflows that
              can be tested, trusted and progressively scaled.
            </p>
          </div>

          <div className="as-company-purpose__panel">
            <div>
              <Lightbulb size={23} />
              <span>From fragmented information</span>
            </div>

            <ArrowRight size={22} />

            <div>
              <Workflow size={23} />
              <span>Through intelligent workflows</span>
            </div>

            <ArrowRight size={22} />

            <div>
              <Target size={23} />
              <span>To measurable outcomes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="as-company-section as-company-principles">
        <div className="as-company-container">
          <div className="as-company-section-heading">
            <span className="as-company-section-heading__eyebrow">
              How we build
            </span>

            <h2>Enterprise AI guided by practical operating principles</h2>

            <p>
              Our products are designed for real organisations, established
              systems, accountable decision-makers and measurable business
              outcomes.
            </p>
          </div>

          <div className="as-company-principles__grid">
            {companyPrinciples.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  className="as-company-principle"
                  key={principle.title}
                >
                  <span className="as-company-principle__icon">
                    <Icon size={22} />
                  </span>

                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* R&D and technology */}
      <section className="as-company-section as-company-research">
        <div className="as-company-container as-company-research__layout">
          <div className="as-company-research__intro">
            <span className="as-company-section-heading__eyebrow">
              Applied research and product engineering
            </span>

            <h2>Building reusable AI capability through focused R&amp;D</h2>

            <p>
              Automation Spectrum&apos;s product development combines
              infrastructure, model and agentic-system engineering to address
              practical enterprise and operational challenges.
            </p>

            <p>
              This shared foundation enables the company to develop specialised
              products while reusing validated components across different
              customer environments.
            </p>

            <Link
              to="/technology"
              className="as-company-button as-company-button--secondary"
            >
              Explore our technology
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="as-company-research__capabilities">
            {technologyCapabilities.map((capability) => (
              <div key={capability}>
                <Check size={16} />
                <span>{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus and vision */}
      <section className="as-company-section as-company-strategy">
        <div className="as-company-container">
          <div className="as-company-section-heading as-company-section-heading--center">
            <span className="as-company-section-heading__eyebrow">
              Commercial strategy
            </span>

            <h2>Focused market entry with a scalable platform vision</h2>

            <p>
              We prioritise markets where operational complexity, energy
              intensity and enterprise data create a clear path to measurable
              customer value.
            </p>
          </div>

          <div className="as-company-strategy__grid">
            <article className="as-company-strategy__card">
              <span>Near-term commercial focus</span>

              <h3>Operationally intensive environments</h3>

              <ul>
                <li>Cold and food storage</li>
                <li>Warehousing and logistics</li>
                <li>Buildings and infrastructure</li>
              </ul>
            </article>

            <article className="as-company-strategy__card">
              <span>Strategic platform opportunity</span>

              <h3>Energy and distributed intelligence</h3>

              <ul>
                <li>Distributed energy resources</li>
                <li>Demand flexibility and optimisation</li>
                <li>Connected energy and portfolio intelligence</li>
              </ul>
            </article>

            <article className="as-company-strategy__card">
              <span>Enterprise AI expansion</span>

              <h3>Knowledge and workflow automation</h3>

              <ul>
                <li>Enterprise AI assistants</li>
                <li>Customer and operational intelligence</li>
                <li>Private agentic systems</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Engagement model */}
      <section className="as-company-section as-company-engagement">
        <div className="as-company-container">
          <div className="as-company-section-heading">
            <span className="as-company-section-heading__eyebrow">
              How organisations engage with us
            </span>

            <h2>Start with a focused problem and build toward production</h2>
          </div>

          <div className="as-company-engagement__grid">
            {engagementSteps.map((step) => (
              <article className="as-company-engagement__step" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Company details */}
      <section className="as-company-section as-company-details">
        <div className="as-company-container as-company-details__layout">
          <div className="as-company-details__intro">
            <span className="as-company-section-heading__eyebrow">
              Company information
            </span>

            <h2>Australian foundation. Product-led global ambition.</h2>

            <p>
              Automation Spectrum is based in Melbourne and develops its
              products for Australian and international enterprise markets.
            </p>
          </div>

          <div className="as-company-details__panel">
            <div>
              <span>Legal entity</span>
              <strong>Automation Spectrum Pty Ltd</strong>
            </div>

            <div>
              <span>Australian Business Number</span>
              <strong>80 636 637 904</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>Melbourne, Victoria, Australia</strong>
            </div>

            <div>
              <span>Products</span>
              <strong>EnergIQ and AIChatshoppie</strong>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="as-company-cta">
        <div className="as-company-cta__glow" />

        <div className="as-company-container as-company-cta__content">
          <div>
            <span className="as-company-section-heading__eyebrow">
              Work with Automation Spectrum
            </span>

            <h2>
              Explore an AI pilot, product collaboration or strategic
              partnership.
            </h2>

            <p>
              Speak with us about operational intelligence, enterprise AI,
              research collaboration, technology partnerships or investment.
            </p>
          </div>

          <div className="as-company-cta__actions">
            <button
              type="button"
              className="as-company-button as-company-button--primary"
              onClick={handleContactClick}
            >
              Start a conversation
              <ArrowRight size={18} />
            </button>

            <Link
              to="/pilot-programs"
              className="as-company-button as-company-button--secondary"
            >
              View pilot programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CompanyPage;