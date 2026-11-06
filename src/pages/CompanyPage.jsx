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
    product: "EnerG IQ Tech",
    category: "Energy & Operational Intelligence",
    description:
      "AI-powered energy optimisation, digital twins and operational decision agents for energy-intensive environments.",
    path: "/products/energiqtech",
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
      "Design and build a focused proof of value, prototype or initial solution using suitable data.",
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
      "Develop validated capabilities into secure, integrated and maintainable production solutions.",
  },
];

function SpectrumMark() {
  return (
    <img
      src="/favicon.png"
      alt=""
      className="as-company-logo"
      aria-hidden="true"
    />
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
              An Australian AI engineering company helping businesses{" "}
              <span>turn AI opportunities into measurable outcomes.</span>
            </h1>

            <p>
              Based in Melbourne, Automation Spectrum provides AI consulting,
              intelligent automation, generative AI solutions and custom
              software engineering. We help organisations identify practical
              opportunities, integrate technology and deliver useful systems.
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
                to="/technology"
                className="as-company-button as-company-button--secondary"
              >
                Explore our capabilities
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
                  <small>Melbourne-based AI engineering</small>
                </span>
              </div>

              <div>
                <Globe2 size={17} />
                <span>
                  <strong>Practical delivery</strong>
                  <small>Consulting to implementation</small>
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
              <small>AI Solutions &amp; Automation</small>
            </div>

            <div className="as-company-visual__node as-company-visual__node--energiq">
              <Zap size={18} />

              <span>
                <strong>EnerG IQ Tech</strong>
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
                <strong>Engineering services</strong>
                <small>AI, software and integration</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Company positioning */}
      <section className="as-company-section as-company-identity">
        <div className="as-company-container as-company-identity__layout">
          <div className="as-company-section-heading">
            <span className="as-company-section-heading__eyebrow">Who we are</span>
            <h2>Experienced engineering. Practical AI adoption.</h2>
          </div>
          <div className="as-company-identity__content">
            <p>
              Automation Spectrum Pty Ltd is a Melbourne-based technology company
              combining software engineering, systems integration and applied AI
              to solve business problems.
            </p>
            <p>
              Our work spans AI discovery and advisory, enterprise knowledge
              systems, intelligent workflows, bespoke applications and technical
              implementation. We aim to make AI useful within the systems and
              processes organisations already rely on.
            </p>
            <div className="as-company-identity__statement">
              <Check size={18} />
              <p><strong>Our approach:</strong> understand the problem, build the right
              solution, validate its value and support responsible adoption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service capabilities */}
      <section className="as-company-section as-company-services">
        <div className="as-company-container">
          <div className="as-company-section-heading as-company-section-heading--center">
            <span className="as-company-section-heading__eyebrow">What we do</span>
            <h2>AI expertise and software delivery, from idea to implementation</h2>
            <p>Engage us for a focused discovery conversation or for the engineering
            work needed to bring a solution into production.</p>
          </div>
          <div className="as-company-services__grid">
            {[
              { icon: Lightbulb, title: "AI consulting & discovery", description: "Identify worthwhile AI use cases, assess feasibility and define a practical delivery roadmap." },
              { icon: BrainCircuit, title: "Generative AI & knowledge systems", description: "Build assistants, retrieval-based applications and domain-aware AI workflows." },
              { icon: Workflow, title: "Intelligent automation", description: "Connect AI agents, human approvals and existing business processes to reduce manual effort." },
              { icon: Layers3, title: "Custom software & integration", description: "Engineer applications, APIs, data pipelines and cloud systems that fit your organisation." },
            ].map((service) => {
              const Icon = service.icon;
              return (
                <article className="as-company-service" key={service.title}>
                  <span className="as-company-service__icon"><Icon size={24} /></span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
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

            <h2>Product initiatives alongside our consulting services</h2>

            <p>
              Our product experience informs our engineering work. These initiatives
              address distinct markets and operate separately from general
              Automation Spectrum consulting engagements.
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
            <div className="as-company-example__icon"><Handshake size={25} /></div>
            <div>
              <span>Distinct company identities</span>
              <p>
                EnerG IQ Tech Pty Ltd was separately incorporated in October 2026
                to advance the EnerG IQ platform. Automation Spectrum Pty Ltd
                continues to offer its own AI consulting and engineering services.
                The relevant entity is identified for each engagement.
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
              We combine discovery, AI engineering, enterprise integration and human
              oversight to deliver solutions that can be tested, trusted and
              progressively improved.
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
              Our solutions are designed for real organisations, established
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
              Our engineering work combines software architecture, data platforms,
              model integration and agentic systems to address practical
              enterprise and operational challenges.
            </p>

            <p>
              We apply reusable engineering patterns where appropriate, while tailoring
              each solution to its security, operational and integration needs.
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

            <h2>Where our experience creates value</h2>

            <p>
              We work across enterprise software, information-intensive workflows
              and operational environments where better systems can deliver
              measurable value.
            </p>
          </div>

          <div className="as-company-strategy__grid">
            <article className="as-company-strategy__card">
              <span>Operational solutions</span>

              <h3>Operationally complex businesses</h3>

              <ul>
                <li>Cold and food storage</li>
                <li>Warehousing and logistics</li>
                <li>Buildings and infrastructure</li>
              </ul>
            </article>

            <article className="as-company-strategy__card">
              <span>Data and integration</span>

              <h3>Connected systems and data</h3>

              <ul>
                <li>System and API integration</li>
                <li>Data engineering and analytics</li>
                <li>Cloud and edge architecture</li>
              </ul>
            </article>

            <article className="as-company-strategy__card">
              <span>Enterprise intelligence</span>

              <h3>AI knowledge and automation</h3>

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

            <h2>Melbourne-based. Built for practical business outcomes.</h2>

            <p>
              Automation Spectrum operates from Melbourne, delivering AI and software
              engineering services while developing selected technology initiatives.
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
              <span>Core services</span>
              <strong>AI consulting, automation and software engineering</strong>
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
              Discuss an AI opportunity, software project or strategic
              collaboration.
            </h2>

            <p>
              Tell us about the business challenge you want to solve. We can explore
              discovery, implementation or collaboration opportunities.
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
              to="/partners"
              className="as-company-button as-company-button--secondary"
            >
              Explore partnerships
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CompanyPage;