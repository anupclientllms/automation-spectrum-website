import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Code2,
  Lightbulb,
  Handshake,
  Bot,
  BrainCircuit,
  Building2,
  Check,
  Database,
  Factory,
  Gauge,
  Layers3,
  Network,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

import "../styles/home.css";

const services = [
  { icon: Lightbulb, title: "AI strategy & business discovery", description: "Identify valuable AI opportunities, assess feasibility and prioritise practical improvements across your business." },
  { icon: BrainCircuit, title: "Generative AI & knowledge systems", description: "Build secure AI assistants, document intelligence and retrieval-augmented knowledge experiences." },
  { icon: Bot, title: "AI agents & workflow automation", description: "Automate repetitive tasks and connect decisions, approvals and existing business processes." },
  { icon: Code2, title: "Custom software & integration", description: "Engineer enterprise applications, APIs and integrations that connect AI with the systems you already use." },
];

const products = [
  {
    eyebrow: "Energy & Operational Intelligence",
    name: "EnerG IQ Tech",
    description:
      "An industrial energy optimisation platform developed by the founder and advanced through the separately incorporated EnerG IQ Tech Pty Ltd. It combines edge AI, digital twins and human-approved decision workflows to help energy-intensive facilities reduce costs and emissions.",
    capabilities: [
      "AI decision agents",
      "Operational digital twins",
      "Energy and demand optimisation",
      "Human-approved control workflows",
    ],
    internalPath: "/products/energiqtech",
    externalUrl: "https://energiqtech.com",
    icon: Zap,
    theme: "energy",
  },
  {
    eyebrow: "Enterprise AI & Intelligent Automation",
    name: "AIChatshoppie",
    description:
      "An enterprise AI platform focused on intelligent assistants, private knowledge systems, retrieval-augmented generation and domain-specific automation.",
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
              Australian AI consulting & technology company
            </div>

            <h1 className="as-hero__title">
              AI solutions that{" "}
              <span>drive business growth.</span>
            </h1>

            <p className="as-hero__description">
              We help businesses increase productivity, reduce operating costs and
              unlock new opportunities through AI consulting, intelligent
              automation, Generative AI and custom software engineering.
            </p>

            <div className="as-hero__actions">
              <a className="as-button as-button--primary" href="#ai-services">
                Explore our AI services
                <ArrowRight size={18} />
              </a>

              <button
                type="button"
                className="as-button as-button--secondary"
                onClick={openContactModal}
              >
                Book a free 30-minute AI discovery call
              </button>
            </div>

            <div className="as-hero__assurance">
              <div>
                <Check size={16} />
                Business-outcome focused
              </div>

              <div>
                <Check size={16} />
                Strategy-to-delivery
              </div>

              <div>
                <Check size={16} />
                Practical, governed AI
              </div>
            </div>
          </div>

          <div className="as-hero-visual" aria-hidden="true">
            <div className="as-orbit as-orbit--outer" />
            <div className="as-orbit as-orbit--middle" />
            <div className="as-orbit as-orbit--inner" />

            <div className="as-hero-visual__core">
              <img
                src="/favicon.png"
                alt=""
                className="as-hero-visual__brand-logo"
                aria-hidden="true"
              />

              <span>Automation Spectrum</span>
              <small>AI Consulting & Technology</small>
            </div>

            <div className="as-floating-node as-floating-node--energy">
              <Zap size={18} />
              <div>
                <strong>AI consulting</strong>
                <span>Strategy & implementation</span>
              </div>
            </div>

            <div className="as-floating-node as-floating-node--ai">
              <BrainCircuit size={18} />
              <div>
                <strong>Generative AI</strong>
                <span>Agents & knowledge systems</span>
              </div>
            </div>

            <div className="as-floating-node as-floating-node--data">
              <Database size={18} />
              <div>
                <strong>Software engineering</strong>
                <span>Integration & automation</span>
              </div>
            </div>

            <div className="as-visual-line as-visual-line--one" />
            <div className="as-visual-line as-visual-line--two" />
            <div className="as-visual-line as-visual-line--three" />
          </div>
        </div>
      </section>

      {/* Business positioning strip — original layout retained */}
      <section className="as-identity-strip">
        <div className="as-container as-identity-strip__content">
          <p><strong>Automation Spectrum Pty Ltd</strong> helps organisations plan, build and integrate practical AI and software solutions.</p>
          <div className="as-identity-strip__divider" />
          <p>From an initial business assessment to pilot and production, we focus on measurable value and solutions that fit existing operations.</p>
        </div>
      </section>

      {/* AI services — uses existing capability card styling */}
      <section className="as-section as-technology-section" id="ai-services">
        <div className="as-container">
          <div className="as-section-heading as-section-heading--center">
            <span className="as-section-heading__eyebrow">Our AI & engineering services</span>
            <h2>Practical AI services built around your business</h2>
            <p>Whether you are exploring AI for the first time or integrating it into established operations, we help turn opportunities into working solutions.</p>
          </div>
          <div className="as-services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="as-capability-card" key={service.title}>
                  <Icon size={24} />
                  <div><h3>{service.title}</h3><p>{service.description}</p></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Introductory discovery consultation */}
      <section className="as-section as-discovery-section" id="ai-discovery">
        <div className="as-container as-discovery-layout">
          <div>
            <span className="as-section-heading__eyebrow">Start with a focused conversation</span>
            <h2>AI Business Discovery</h2>
            <p>Not sure where AI could make a meaningful difference? In a free 30-minute introductory consultation, we'll discuss your business challenges, explore potential AI and automation opportunities, and agree on practical next steps.</p>
            <div className="as-discovery-points">
              <span><Check size={17} /> Your business priorities and pain points</span>
              <span><Check size={17} /> Potential AI and automation opportunities</span>
              <span><Check size={17} /> A practical direction for next steps</span>
            </div>
          </div>
          <div className="as-discovery-offer">
            <span className="as-section-heading__eyebrow">Free 30-minute introductory consultation</span>
            <div className="as-discovery-price">FREE</div>
            <p>A complimentary 30-minute, one-to-one discovery call. No obligation or upfront payment. Detailed assessments and implementation services are quoted separately.</p>
            <button type="button" className="as-button as-button--primary" onClick={openContactModal}>
              Enquire about a Free AI Consultation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="as-section as-products-section">
        <div className="as-container">
          <div className="as-section-heading as-section-heading--center">
            <span className="as-section-heading__eyebrow">
              Our technology products
            </span>

            <h2>Purpose-built AI products alongside our consulting services</h2>

            <p>
              Explore the specialised platforms associated with our technology
              portfolio. Consulting engagements are tailored separately
              to each client’s business needs.
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
              Our consulting and technology work starts with measurable business
              problems, accountable decisions and practical adoption.
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
              Engineering capabilities
            </span>

            <h2>From connected data to governed AI decisions</h2>

            <p>
              We combine enterprise integration, applied AI, secure knowledge
              systems and human oversight to deliver solutions that
              work with real-world business processes.
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
              Industries we support
            </span>

            <h2>AI opportunities across operationally complex industries</h2>

            <p>
              We work across operational and enterprise challenges, including
              environments where connected assets, data and automation
              can unlock meaningful value.
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
              Our delivery approach
            </span>

            <h2>Discover, deliver and scale with confidence.</h2>

            <p>
              We start by understanding your business challenge, then connect
              the right systems, validate a focused solution and plan
              the next stage of delivery.
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
              <h3>Start with discovery, then define a practical implementation or pilot.</h3>
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

      {/* Partnerships — reuses existing CTA and button components */}
      <section className="as-section as-partners-section" id="partners">
        <div className="as-container as-partners-layout">
          <div className="as-partners-icon"><Handshake size={32} /></div>
          <div>
            <span className="as-section-heading__eyebrow">Work with us</span>
            <h2>Partners who help businesses move forward</h2>
            <p>We welcome conversations with business advisers, consultants and technology providers who want to help their clients discover and implement practical AI solutions. Collaboration arrangements are discussed individually.</p>
          </div>
          <button type="button" className="as-button as-button--secondary" onClick={openContactModal}>
            Discuss a partnership <ArrowRight size={18} />
          </button>
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
              Turn business challenges into practical AI solutions.
            </h2>

            <p>
              Talk to us about AI consulting, business automation, custom software
              or a technology partnership.
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
