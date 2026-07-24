import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  Check,
  CloudCog,
  Cpu,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  LockKeyhole,
  Network,
  Radar,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

import "../styles/technology.css";

const technologyLayers = [
  {
    number: "01",
    eyebrow: "Experience layer",
    title: "Product workspaces and AI-assisted workflows",
    description:
      "Purpose-built interfaces turn complex AI, operational and enterprise capabilities into usable workflows for business and technical teams.",
    capabilities: [
      "Operational and enterprise workspaces",
      "AI assistants and AI co-workers",
      "Recommendations and approval journeys",
      "Dashboards, alerts and decision support",
    ],
    icon: Layers3,
  },
  {
    number: "02",
    eyebrow: "Intelligence layer",
    title: "Agents, models, retrieval and decision intelligence",
    description:
      "Specialised AI services analyse data, retrieve enterprise knowledge, identify root causes and produce contextual recommendations.",
    capabilities: [
      "AI agents and orchestration",
      "Retrieval-augmented generation",
      "Domain-specific intelligence",
      "Simulation and recommendation engines",
    ],
    icon: BrainCircuit,
  },
  {
    number: "03",
    eyebrow: "Integration layer",
    title: "Connected enterprise and operational data",
    description:
      "Integration services connect documents, APIs, telemetry, databases and operational systems into a governed intelligence foundation.",
    capabilities: [
      "API and enterprise integration",
      "Telemetry and IoT ingestion",
      "Data normalisation",
      "Event-driven workflows",
    ],
    icon: Network,
  },
  {
    number: "04",
    eyebrow: "Infrastructure layer",
    title: "Cloud, edge and private AI deployment",
    description:
      "Containerised architecture supports cloud, edge and private deployment patterns while preserving operational flexibility.",
    capabilities: [
      "Cloud-native and containerised services",
      "Edge-enabled processing",
      "Private AI deployment options",
      "Scalable model and data infrastructure",
    ],
    icon: CloudCog,
  },
];

const coreCapabilities = [
  {
    icon: BrainCircuit,
    title: "AI agents",
    description:
      "Specialised agents coordinate analysis, reasoning, recommendations and enterprise workflow execution.",
  },
  {
    icon: Layers3,
    title: "Digital twins",
    description:
      "Contextual models represent assets, environments and operational relationships for analysis and simulation.",
  },
  {
    icon: Database,
    title: "Enterprise knowledge and RAG",
    description:
      "Secure retrieval across enterprise documents, records, policies and knowledge repositories.",
  },
  {
    icon: Network,
    title: "Data and system integration",
    description:
      "Connect APIs, databases, telemetry, IoT, BMS, enterprise platforms and external data sources.",
  },
  {
    icon: Workflow,
    title: "Agentic workflows",
    description:
      "Structured workflows coordinate detection, analysis, approval, execution and outcome tracking.",
  },
  {
    icon: Cpu,
    title: "Domain-specific intelligence",
    description:
      "Models and agent logic are adapted to specific operational, enterprise and industry contexts.",
  },
  {
    icon: ShieldCheck,
    title: "Human-in-the-loop controls",
    description:
      "Critical recommendations remain reviewable, explainable and governed before action is taken.",
  },
  {
    icon: Activity,
    title: "Observability and auditability",
    description:
      "Logs, events, outcomes and system behaviour can be tracked for operational review and continuous improvement.",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Connect",
    description:
      "Ingest enterprise information, operational data, telemetry, APIs and contextual knowledge.",
    icon: Network,
  },
  {
    number: "02",
    title: "Understand",
    description:
      "Normalise data, establish context and create a reliable representation of the business environment.",
    icon: Database,
  },
  {
    number: "03",
    title: "Analyse",
    description:
      "Agents and models identify patterns, anomalies, root causes and potential business actions.",
    icon: Radar,
  },
  {
    number: "04",
    title: "Recommend",
    description:
      "Generate explainable recommendations, simulations, evidence and expected outcomes.",
    icon: BrainCircuit,
  },
  {
    number: "05",
    title: "Approve",
    description:
      "Decision-makers review recommendations and retain control over consequential actions.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Measure",
    description:
      "Track implementation, operational outcomes, savings, performance and future improvement opportunities.",
    icon: Gauge,
  },
];

const deploymentModels = [
  {
    icon: CloudCog,
    title: "Cloud deployment",
    description:
      "Deploy scalable applications and AI services using managed cloud infrastructure and containerised workloads.",
    tags: ["Scalable", "Managed", "Multi-site"],
  },
  {
    icon: ServerCog,
    title: "Private enterprise deployment",
    description:
      "Support private data, controlled model access and enterprise-specific security requirements.",
    tags: ["Private", "Controlled", "Enterprise"],
  },
  {
    icon: Cpu,
    title: "Edge-enabled deployment",
    description:
      "Process selected operational data closer to physical assets where latency, resilience or connectivity matters.",
    tags: ["Low latency", "Resilient", "Operational"],
  },
  {
    icon: GitBranch,
    title: "Hybrid architecture",
    description:
      "Combine enterprise, cloud and edge systems according to data, security and operational requirements.",
    tags: ["Flexible", "Integrated", "Progressive"],
  },
];

const governanceItems = [
  {
    icon: ShieldCheck,
    title: "Human approval",
    description:
      "Critical actions can require explicit user review before execution.",
  },
  {
    icon: LockKeyhole,
    title: "Access control",
    description:
      "Users, services and data sources can be governed according to enterprise responsibilities.",
  },
  {
    icon: Activity,
    title: "Audit trails",
    description:
      "Recommendations, approvals, system events and outcomes can be recorded for later review.",
  },
  {
    icon: Database,
    title: "Data governance",
    description:
      "Data handling can be aligned with privacy, retention and deployment requirements.",
  },
];

const sharedFoundation = [
  "Python and FastAPI service architecture",
  "React-based product workspaces",
  "Containerised microservices",
  "PostgreSQL and enterprise data stores",
  "Vector retrieval and knowledge systems",
  "LLM and agent orchestration",
  "Cloud and edge deployment patterns",
  "CI/CD, testing and observability",
];

function TechnologyPage({ openContactModal }) {
  const handleContactClick = () => {
    if (typeof openContactModal === "function") {
      openContactModal();
    }
  };

  return (
    <main className="as-technology-page">
      {/* Hero */}
      <section className="as-tech-hero">
        <div className="as-tech-hero__glow as-tech-hero__glow--one" />
        <div className="as-tech-hero__glow as-tech-hero__glow--two" />

        <div className="as-tech-container as-tech-hero__layout">
          <div className="as-tech-hero__content">
            <div className="as-tech-eyebrow">
              <Sparkles size={15} />
              Shared technology foundation
            </div>

            <h1>
              Applied AI architecture built for{" "}
              <span>enterprise and operational environments.</span>
            </h1>

            <p>
              Automation Spectrum combines AI agents, digital twins,
              enterprise knowledge, connected data and human-controlled
              workflows into specialised products that can move from pilot to
              production.
            </p>

            <div className="as-tech-hero__actions">
              <button
                type="button"
                className="as-tech-button as-tech-button--primary"
                onClick={handleContactClick}
              >
                Discuss a technology project
                <ArrowRight size={18} />
              </button>

              <Link
                to="/products"
                className="as-tech-button as-tech-button--secondary"
              >
                Explore our products
              </Link>
            </div>

            <div className="as-tech-hero__assurance">
              <div>
                <Check size={16} />
                Modular architecture
              </div>

              <div>
                <Check size={16} />
                Human-controlled AI
              </div>

              <div>
                <Check size={16} />
                Cloud, private and edge-ready
              </div>
            </div>
          </div>

          <div className="as-tech-hero__visual" aria-hidden="true">
            <div className="as-tech-core">
              <span className="as-tech-core__icon">
                <BrainCircuit size={29} />
              </span>

              <strong>Applied AI Core</strong>
              <small>Automation Spectrum</small>
            </div>

            <div className="as-tech-ring as-tech-ring--one" />
            <div className="as-tech-ring as-tech-ring--two" />
            <div className="as-tech-ring as-tech-ring--three" />

            <div className="as-tech-node as-tech-node--agents">
              <BrainCircuit size={18} />

              <span>
                <strong>AI agents</strong>
                <small>Reasoning and orchestration</small>
              </span>
            </div>

            <div className="as-tech-node as-tech-node--twin">
              <Layers3 size={18} />

              <span>
                <strong>Digital twins</strong>
                <small>Context and simulation</small>
              </span>
            </div>

            <div className="as-tech-node as-tech-node--knowledge">
              <Database size={18} />

              <span>
                <strong>Enterprise knowledge</strong>
                <small>Retrieval and intelligence</small>
              </span>
            </div>

            <div className="as-tech-node as-tech-node--integration">
              <Network size={18} />

              <span>
                <strong>Connected systems</strong>
                <small>Data and integration</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform statement */}
      <section className="as-tech-intro">
        <div className="as-tech-container as-tech-intro__layout">
          <div className="as-tech-section-heading">
            <span className="as-tech-section-heading__eyebrow">
              Product technology strategy
            </span>

            <h2>One reusable foundation supporting specialised products</h2>
          </div>

          <div className="as-tech-intro__content">
            <p>
              Energ IQ Tech and AIChatshoppie serve different customer problems, but
              both are supported by Automation Spectrum&apos;s shared
              engineering, AI, data and deployment capability.
            </p>

            <p>
              This approach enables product-specific experiences without
              rebuilding the entire technical foundation for every customer or
              industry.
            </p>

            <div className="as-tech-intro__products">
              <div className="as-tech-intro__product as-tech-intro__product--energy">
                <Zap size={20} />

                <span>
                  <strong>Energ IQ Tech</strong>
                  <small>Energy and operational intelligence</small>
                </span>
              </div>

              <div className="as-tech-intro__product as-tech-intro__product--enterprise">
                <BrainCircuit size={20} />

                <span>
                  <strong>AIChatshoppie</strong>
                  <small>Enterprise AI and intelligent automation</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology layers */}
      <section className="as-tech-section as-tech-layers">
        <div className="as-tech-container">
          <div className="as-tech-section-heading as-tech-section-heading--center">
            <span className="as-tech-section-heading__eyebrow">
              Technology architecture
            </span>

            <h2>Four connected layers from user experience to infrastructure</h2>

            <p>
              The architecture separates product experience, intelligence,
              integration and infrastructure so each area can evolve without
              compromising the whole platform.
            </p>
          </div>

          <div className="as-tech-layers__grid">
            {technologyLayers.map((layer) => {
              const Icon = layer.icon;

              return (
                <article className="as-tech-layer-card" key={layer.number}>
                  <div className="as-tech-layer-card__top">
                    <span className="as-tech-layer-card__number">
                      {layer.number}
                    </span>

                    <span className="as-tech-layer-card__icon">
                      <Icon size={23} />
                    </span>
                  </div>

                  <span className="as-tech-layer-card__eyebrow">
                    {layer.eyebrow}
                  </span>

                  <h3>{layer.title}</h3>
                  <p>{layer.description}</p>

                  <div className="as-tech-layer-card__capabilities">
                    {layer.capabilities.map((capability) => (
                      <div key={capability}>
                        <Check size={15} />
                        <span>{capability}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="as-tech-section as-tech-capabilities">
        <div className="as-tech-container">
          <div className="as-tech-section-heading">
            <span className="as-tech-section-heading__eyebrow">
              Core capabilities
            </span>

            <h2>Technology designed around practical enterprise problems</h2>

            <p>
              Individual technologies are combined into controlled workflows
              that solve operational and enterprise use cases.
            </p>
          </div>

          <div className="as-tech-capabilities__grid">
            {coreCapabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  className="as-tech-capability-card"
                  key={capability.title}
                >
                  <span className="as-tech-capability-card__icon">
                    <Icon size={22} />
                  </span>

                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="as-tech-section as-tech-workflow">
        <div className="as-tech-container">
          <div className="as-tech-section-heading as-tech-section-heading--center">
            <span className="as-tech-section-heading__eyebrow">
              Intelligence workflow
            </span>

            <h2>From connected information to governed outcomes</h2>

            <p>
              The platform supports a complete decision lifecycle rather than
              producing isolated AI responses.
            </p>
          </div>

          <div className="as-tech-workflow__grid">
            {workflowSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article className="as-tech-workflow-step" key={step.number}>
                  <div className="as-tech-workflow-step__header">
                    <span>{step.number}</span>
                    <Icon size={20} />
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>

          <div className="as-tech-workflow__summary">
            <Workflow size={22} />

            <p>
              Connect → Understand → Analyse → Recommend → Approve → Measure
            </p>
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section className="as-tech-section as-tech-deployment">
        <div className="as-tech-container">
          <div className="as-tech-section-heading">
            <span className="as-tech-section-heading__eyebrow">
              Deployment flexibility
            </span>

            <h2>Architecture that adapts to enterprise requirements</h2>

            <p>
              Deployment choices can be aligned with data sensitivity,
              operational resilience, latency and integration requirements.
            </p>
          </div>

          <div className="as-tech-deployment__grid">
            {deploymentModels.map((model) => {
              const Icon = model.icon;

              return (
                <article className="as-tech-deployment-card" key={model.title}>
                  <span className="as-tech-deployment-card__icon">
                    <Icon size={23} />
                  </span>

                  <h3>{model.title}</h3>
                  <p>{model.description}</p>

                  <div className="as-tech-deployment-card__tags">
                    {model.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="as-tech-section as-tech-governance">
        <div className="as-tech-container as-tech-governance__layout">
          <div className="as-tech-governance__intro">
            <span className="as-tech-section-heading__eyebrow">
              Responsible enterprise AI
            </span>

            <h2>Control and accountability remain part of the architecture</h2>

            <p>
              Automation Spectrum products are designed to support review,
              governance and human responsibility—particularly where
              recommendations may affect operations, cost, assets or customers.
            </p>

            <button
              type="button"
              className="as-tech-button as-tech-button--primary"
              onClick={handleContactClick}
            >
              Discuss governance requirements
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="as-tech-governance__grid">
            {governanceItems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="as-tech-governance-card" key={item.title}>
                  <Icon size={22} />

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shared foundation */}
      <section className="as-tech-section as-tech-foundation">
        <div className="as-tech-container as-tech-foundation__layout">
          <div className="as-tech-foundation__content">
            <span className="as-tech-section-heading__eyebrow">
              Engineering foundation
            </span>

            <h2>Modern product engineering behind the AI experience</h2>

            <p>
              Reliable AI products also require strong application
              architecture, APIs, data systems, deployment practices and
              production engineering.
            </p>

            <Link
              to="/company"
              className="as-tech-button as-tech-button--secondary"
            >
              About Automation Spectrum
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="as-tech-foundation__list">
            {sharedFoundation.map((item) => (
              <div key={item}>
                <Check size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="as-tech-cta">
        <div className="as-tech-cta__glow" />

        <div className="as-tech-container as-tech-cta__content">
          <div>
            <span className="as-tech-section-heading__eyebrow">
              Build with Automation Spectrum
            </span>

            <h2>
              Explore a practical AI architecture for your enterprise or
              operational environment.
            </h2>

            <p>
              Start with a focused pilot, validate technical and business
              value, and develop a clear pathway toward production.
            </p>
          </div>

          <div className="as-tech-cta__actions">
            <button
              type="button"
              className="as-tech-button as-tech-button--primary"
              onClick={handleContactClick}
            >
              Start a conversation
              <ArrowRight size={18} />
            </button>

            <Link
              to="/pilot-programs"
              className="as-tech-button as-tech-button--secondary"
            >
              View pilot programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TechnologyPage;