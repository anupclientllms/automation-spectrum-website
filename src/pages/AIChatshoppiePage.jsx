import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Check,
  CheckCircle2,
  CloudCog,
  Cpu,
  Database,
  FileSearch,
  GitBranch,
  Globe2,
  Headphones,
  Layers3,
  LockKeyhole,
  Network,
  Search,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Ticket,
  Users,
  Workflow,
} from "lucide-react";

import "../styles/aichatshoppie.css";

const platformLayers = [
  {
    number: "01",
    eyebrow: "Infrastructure layer",
    title: "Sovereign and enterprise AI infrastructure",
    description:
      "A secure foundation for model deployment, retrieval, enterprise workloads and controlled AI operations.",
    icon: ServerCog,
    capabilities: [
      "Private and controlled model deployment",
      "Vector databases and retrieval infrastructure",
      "Multi-tenant application architecture",
      "Enterprise observability and workload isolation",
    ],
  },
  {
    number: "02",
    eyebrow: "Agentic automation layer",
    title: "Specialised agents for enterprise workflows",
    description:
      "Multiple AI agents coordinate research, analysis, recommendations and workflow execution across complex business processes.",
    icon: Workflow,
    capabilities: [
      "Multi-agent orchestration",
      "Workflow routing and automation",
      "Human-review and approval stages",
      "Event-driven enterprise integration",
    ],
  },
  {
    number: "03",
    eyebrow: "Knowledge and intelligence layer",
    title: "Private, domain-specific enterprise intelligence",
    description:
      "Retrieval, custom knowledge systems and domain-adapted AI provide context-aware assistance for specific organisations.",
    icon: BrainCircuit,
    capabilities: [
      "Retrieval-augmented generation",
      "Private enterprise knowledge bases",
      "Domain-specific model adaptation",
      "Context-aware AI assistants",
    ],
  },
];

const coreCapabilities = [
  {
    icon: BrainCircuit,
    title: "Enterprise AI assistants",
    description:
      "Secure assistants that help users retrieve, interpret and apply trusted organisational knowledge.",
  },
  {
    icon: Database,
    title: "Knowledge systems and RAG",
    description:
      "Connect documents, records and enterprise systems through governed retrieval and contextual generation.",
  },
  {
    icon: Workflow,
    title: "Agentic workflows",
    description:
      "Coordinate multi-step enterprise processes using specialised agents, business rules and human approval.",
  },
  {
    icon: Users,
    title: "Customer intelligence",
    description:
      "Analyse service, customer and commercial information to support better engagement and decision-making.",
  },
  {
    icon: Search,
    title: "Discovery and recommendations",
    description:
      "Improve content, service and product discovery using contextual matching and intelligent recommendations.",
  },
  {
    icon: BarChart3,
    title: "Enterprise analytics",
    description:
      "Convert fragmented information into operational, commercial and customer-facing intelligence.",
  },
  {
    icon: LockKeyhole,
    title: "Private AI deployment",
    description:
      "Support controlled access, organisation-specific data handling and enterprise deployment requirements.",
  },
  {
    icon: Network,
    title: "System integration",
    description:
      "Connect APIs, databases, SaaS applications, documents and event-driven enterprise systems.",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Connect",
    icon: Network,
    description:
      "Connect enterprise documents, APIs, databases, customer information and internal systems.",
  },
  {
    number: "02",
    title: "Retrieve",
    icon: FileSearch,
    description:
      "Identify relevant knowledge, records and contextual information for the requested task.",
  },
  {
    number: "03",
    title: "Reason",
    icon: BrainCircuit,
    description:
      "Use models and specialised agents to interpret information and prepare a grounded response or action.",
  },
  {
    number: "04",
    title: "Coordinate",
    icon: Workflow,
    description:
      "Route work across agents, enterprise systems and human participants according to the workflow.",
  },
  {
    number: "05",
    title: "Approve",
    icon: ShieldCheck,
    description:
      "Require human review where actions affect customers, commercial outcomes or regulated processes.",
  },
  {
    number: "06",
    title: "Improve",
    icon: Activity,
    description:
      "Monitor usage, outcomes and feedback to improve quality, reliability and product performance.",
  },
];

const useCases = [
  {
    icon: Database,
    title: "Enterprise knowledge assistant",
    description:
      "Help employees retrieve policies, procedures, product information and internal knowledge through a conversational interface.",
  },
  {
    icon: Headphones,
    title: "Service and support automation",
    description:
      "Assist with customer enquiries, workflow routing, response preparation and escalation to human teams.",
  },
  {
    icon: ShoppingBag,
    title: "Product and service discovery",
    description:
      "Use contextual search, recommendations and personalisation to improve customer discovery experiences.",
  },
  {
    icon: Ticket,
    title: "Ticketing and live-event intelligence",
    description:
      "Support event discovery, venue intelligence, customer assistance, analytics and commercial workflows.",
  },
  {
    icon: BarChart3,
    title: "Customer and commercial intelligence",
    description:
      "Analyse customer, campaign, transaction and service information to produce actionable insights.",
  },
  {
    icon: Globe2,
    title: "Regulated and domain-specific AI",
    description:
      "Configure private AI systems for industries that require specific knowledge, controls or deployment approaches.",
  },
];

const deploymentOptions = [
  {
    icon: CloudCog,
    title: "Cloud deployment",
    description:
      "Scalable AI applications, retrieval services and agent workflows using managed cloud infrastructure.",
  },
  {
    icon: ServerCog,
    title: "Private enterprise deployment",
    description:
      "Controlled deployment for organisations with stronger privacy, isolation or data-residency requirements.",
  },
  {
    icon: Cpu,
    title: "Sovereign infrastructure pathway",
    description:
      "Architecture designed to support locally controlled compute, model hosting and enterprise AI workloads.",
  },
  {
    icon: GitBranch,
    title: "Hybrid architecture",
    description:
      "Combine private data systems, cloud applications and organisation-specific AI services.",
  },
];

const governanceCapabilities = [
  {
    icon: ShieldCheck,
    title: "Human approval",
    description:
      "Consequential actions can require review before information is sent, changed or executed.",
  },
  {
    icon: LockKeyhole,
    title: "Access control",
    description:
      "Restrict data, knowledge, tools and agent functions according to user responsibility.",
  },
  {
    icon: Database,
    title: "Grounded responses",
    description:
      "Use approved enterprise knowledge and retrieval sources to improve traceability and relevance.",
  },
  {
    icon: Activity,
    title: "Audit and observability",
    description:
      "Record prompts, retrieval, workflow events, approvals and outcomes for review and improvement.",
  },
];

const pilotOutputs = [
  "Defined enterprise AI use case",
  "Data and knowledge-source assessment",
  "Configured retrieval or agent workflow",
  "Working product experience",
  "Human-review and governance model",
  "User evaluation and findings",
  "Technical integration requirements",
  "Production and commercial roadmap",
];

const exampleMarkets = [
  {
    icon: Ticket,
    title: "Ticketing and live events",
    description:
      "Discovery, customer assistance, venue intelligence, analytics and event-related enterprise workflows.",
  },
  {
    icon: ShoppingBag,
    title: "Retail and e-commerce",
    description:
      "Product discovery, recommendations, customer assistance and commercial intelligence.",
  },
  {
    icon: Headphones,
    title: "Enterprise service operations",
    description:
      "Knowledge access, support workflows, case assistance and internal service automation.",
  },
];

function AIChatshoppieHeroVisual() {
  return (
    <div className="as-aichat-hero__visual" aria-hidden="true">
      <div className="as-aichat-orbit as-aichat-orbit--outer" />
      <div className="as-aichat-orbit as-aichat-orbit--middle" />
      <div className="as-aichat-orbit as-aichat-orbit--inner" />

      <div className="as-aichat-visual__centre">
        <span className="as-aichat-visual__icon">
          <BrainCircuit size={31} />
        </span>

        <strong>AIChatshoppie</strong>
        <small>Enterprise AI & Intelligent Automation</small>
      </div>

      <div className="as-aichat-visual__node as-aichat-visual__node--infrastructure">
        <ServerCog size={18} />

        <span>
          <strong>AI infrastructure</strong>
          <small>Private and controlled</small>
        </span>
      </div>

      <div className="as-aichat-visual__node as-aichat-visual__node--agents">
        <Workflow size={18} />

        <span>
          <strong>Agentic systems</strong>
          <small>Workflow orchestration</small>
        </span>
      </div>

      <div className="as-aichat-visual__node as-aichat-visual__node--knowledge">
        <Database size={18} />

        <span>
          <strong>Enterprise knowledge</strong>
          <small>RAG and private context</small>
        </span>
      </div>

      <div className="as-aichat-visual__node as-aichat-visual__node--outcomes">
        <BarChart3 size={18} />

        <span>
          <strong>Business outcomes</strong>
          <small>Automation and intelligence</small>
        </span>
      </div>
    </div>
  );
}

function AIChatshoppiePage({ openContactModal }) {
  const handleContactClick = () => {
    if (typeof openContactModal === "function") {
      openContactModal();
    }
  };

  return (
    <main className="as-aichat-page">
      {/* Hero */}
      <section className="as-aichat-hero">
        <div className="as-aichat-hero__ambient as-aichat-hero__ambient--one" />
        <div className="as-aichat-hero__ambient as-aichat-hero__ambient--two" />

        <div className="as-aichat-container as-aichat-hero__layout">
          <div className="as-aichat-hero__content">
            <div className="as-aichat-eyebrow">
              <BrainCircuit size={15} />
              A product of Automation Spectrum Pty Ltd
            </div>

            <h1>
              Enterprise AI and{" "}
              <span>intelligent automation.</span>
            </h1>

            <p>
              AIChatshoppie helps organisations build secure AI assistants,
              enterprise knowledge systems and agentic workflows that turn
              fragmented information into practical business intelligence and
              controlled automation.
            </p>

            <div className="as-aichat-hero__actions">
              <button
                type="button"
                className="as-aichat-button as-aichat-button--primary"
                onClick={handleContactClick}
              >
                Discuss an AIChatshoppie pilot
                <ArrowRight size={18} />
              </button>

              <a
                href="https://aichatshoppie.com"
                target="_blank"
                rel="noreferrer"
                className="as-aichat-button as-aichat-button--secondary"
              >
                Visit AIChatshoppie website
              </a>
            </div>

            <div className="as-aichat-hero__assurance">
              <div>
                <Check size={16} />
                Private enterprise knowledge
              </div>

              <div>
                <Check size={16} />
                Human-controlled automation
              </div>

              <div>
                <Check size={16} />
                Pilot-to-production pathway
              </div>
            </div>
          </div>

          <AIChatshoppieHeroVisual />
        </div>
      </section>

      {/* Company relationship */}
      <section className="as-aichat-intro">
        <div className="as-aichat-container as-aichat-intro__layout">
          <div className="as-aichat-section-heading">
            <span className="as-aichat-section-heading__eyebrow">
              Product and company relationship
            </span>

            <h2>
              AIChatshoppie is developed and commercialised by Automation
              Spectrum
            </h2>
          </div>

          <div className="as-aichat-intro__content">
            <p>
              AIChatshoppie is Automation Spectrum&apos;s enterprise AI and
              intelligent automation platform. It combines AI infrastructure,
              agentic orchestration and domain-specific knowledge capability
              within a single product structure.
            </p>

            <p>
              Customers engage with Automation Spectrum Pty Ltd for pilots,
              commercial agreements, product implementation and long-term
              enterprise deployment.
            </p>

            <div className="as-aichat-intro__statement">
              <Layers3 size={19} />

              <p>
                <strong>Contracting entity:</strong> Automation Spectrum Pty Ltd
                <br />
                <strong>Product:</strong> AIChatshoppie
                <br />
                <strong>Solution:</strong> The relevant enterprise AI,
                knowledge or workflow configuration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture layers */}
      <section className="as-aichat-section as-aichat-layers">
        <div className="as-aichat-container">
          <div className="as-aichat-section-heading as-aichat-section-heading--center">
            <span className="as-aichat-section-heading__eyebrow">
              Multi-layer product architecture
            </span>

            <h2>Infrastructure, agents and enterprise intelligence</h2>

            <p>
              AIChatshoppie separates infrastructure, orchestration and
              knowledge so each layer can be adapted to the customer&apos;s
              technical and commercial requirements.
            </p>
          </div>

          <div className="as-aichat-layers__grid">
            {platformLayers.map((layer) => {
              const Icon = layer.icon;

              return (
                <article className="as-aichat-layer-card" key={layer.number}>
                  <div className="as-aichat-layer-card__top">
                    <span>{layer.number}</span>

                    <span className="as-aichat-layer-card__icon">
                      <Icon size={23} />
                    </span>
                  </div>

                  <span className="as-aichat-layer-card__eyebrow">
                    {layer.eyebrow}
                  </span>

                  <h3>{layer.title}</h3>
                  <p>{layer.description}</p>

                  <div className="as-aichat-layer-card__capabilities">
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
      <section className="as-aichat-section as-aichat-capabilities">
        <div className="as-aichat-container">
          <div className="as-aichat-section-heading">
            <span className="as-aichat-section-heading__eyebrow">
              Platform capabilities
            </span>

            <h2>AI capabilities designed for enterprise use</h2>

            <p>
              Individual models, retrieval systems and agents are combined into
              product workflows that support real organisational requirements.
            </p>
          </div>

          <div className="as-aichat-capabilities__grid">
            {coreCapabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  className="as-aichat-capability-card"
                  key={capability.title}
                >
                  <span className="as-aichat-capability-card__icon">
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
      <section className="as-aichat-section as-aichat-workflow">
        <div className="as-aichat-container">
          <div className="as-aichat-section-heading as-aichat-section-heading--center">
            <span className="as-aichat-section-heading__eyebrow">
              Agentic workflow
            </span>

            <h2>From enterprise information to governed action</h2>

            <p>
              AIChatshoppie supports an end-to-end workflow rather than
              producing isolated, ungoverned AI responses.
            </p>
          </div>

          <div className="as-aichat-workflow__grid">
            {workflowSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article className="as-aichat-workflow-step" key={step.number}>
                  <div className="as-aichat-workflow-step__header">
                    <span>{step.number}</span>
                    <Icon size={21} />
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>

          <div className="as-aichat-workflow__summary">
            <Workflow size={21} />

            <p>Connect → Retrieve → Reason → Coordinate → Approve → Improve</p>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="as-aichat-section as-aichat-use-cases">
        <div className="as-aichat-container">
          <div className="as-aichat-section-heading">
            <span className="as-aichat-section-heading__eyebrow">
              Enterprise use cases
            </span>

            <h2>Configured around knowledge, service and workflow problems</h2>

            <p>
              Each implementation is adapted to the customer&apos;s systems,
              users, knowledge sources, governance requirements and desired
              business outcomes.
            </p>
          </div>

          <div className="as-aichat-use-cases__grid">
            {useCases.map((useCase) => {
              const Icon = useCase.icon;

              return (
                <article className="as-aichat-use-case" key={useCase.title}>
                  <span className="as-aichat-use-case__icon">
                    <Icon size={22} />
                  </span>

                  <h3>{useCase.title}</h3>
                  <p>{useCase.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="as-aichat-section as-aichat-markets">
        <div className="as-aichat-container">
          <div className="as-aichat-section-heading as-aichat-section-heading--center">
            <span className="as-aichat-section-heading__eyebrow">
              Initial application areas
            </span>

            <h2>Enterprise environments where contextual AI creates value</h2>

            <p>
              AIChatshoppie can be adapted across industries, while commercial
              implementations remain focused on defined enterprise problems.
            </p>
          </div>

          <div className="as-aichat-markets__grid">
            {exampleMarkets.map((market) => {
              const Icon = market.icon;

              return (
                <article className="as-aichat-market-card" key={market.title}>
                  <span className="as-aichat-market-card__icon">
                    <Icon size={25} />
                  </span>

                  <h3>{market.title}</h3>
                  <p>{market.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="as-aichat-section as-aichat-infrastructure">
        <div className="as-aichat-container as-aichat-infrastructure__layout">
          <div className="as-aichat-infrastructure__content">
            <span className="as-aichat-section-heading__eyebrow">
              Enterprise and sovereign AI infrastructure
            </span>

            <h2>Flexible architecture for controlled AI deployment</h2>

            <p>
              AIChatshoppie is designed to support cloud, private, sovereign and
              hybrid deployment pathways according to customer data,
              infrastructure and governance requirements.
            </p>

            <p>
              The appropriate infrastructure model is determined during
              discovery rather than treating every customer environment in the
              same way.
            </p>

            <button
              type="button"
              className="as-aichat-button as-aichat-button--primary"
              onClick={handleContactClick}
            >
              Discuss infrastructure requirements
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="as-aichat-infrastructure__grid">
            {deploymentOptions.map((option) => {
              const Icon = option.icon;

              return (
                <article
                  className="as-aichat-deployment-card"
                  key={option.title}
                >
                  <Icon size={22} />

                  <div>
                    <h3>{option.title}</h3>
                    <p>{option.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="as-aichat-section as-aichat-governance">
        <div className="as-aichat-container as-aichat-governance__layout">
          <div className="as-aichat-governance__content">
            <span className="as-aichat-section-heading__eyebrow">
              Responsible enterprise AI
            </span>

            <h2>Control, grounding and accountability remain built in</h2>

            <p>
              Enterprise AI systems must respect user permissions, approved
              knowledge, organisational controls and human responsibility.
            </p>

            <p>
              AIChatshoppie can incorporate approval workflows, retrieval
              grounding, access controls, observability and audit records as
              part of the product architecture.
            </p>
          </div>

          <div className="as-aichat-governance__grid">
            {governanceCapabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article className="as-aichat-governance-card" key={item.title}>
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

      {/* Pilot */}
      <section className="as-aichat-section as-aichat-pilot">
        <div className="as-aichat-container as-aichat-pilot__layout">
          <div className="as-aichat-pilot__content">
            <span className="as-aichat-section-heading__eyebrow">
              AIChatshoppie pilot model
            </span>

            <h2>Start with one enterprise workflow or knowledge problem</h2>

            <p>
              A pilot can begin with a defined user group, representative
              documents, selected systems and one measurable enterprise use
              case.
            </p>

            <p>
              The pilot validates knowledge quality, retrieval, agent behaviour,
              workflow design, governance and user confidence before broader
              production deployment.
            </p>

            <div className="as-aichat-pilot__actions">
              <button
                type="button"
                className="as-aichat-button as-aichat-button--primary"
                onClick={handleContactClick}
              >
                Discuss pilot suitability
                <ArrowRight size={18} />
              </button>

              <Link
                to="/pilot-programs"
                className="as-aichat-button as-aichat-button--secondary"
              >
                View pilot process
              </Link>
            </div>
          </div>

          <div className="as-aichat-pilot__outputs">
            <span>Typical pilot outputs</span>

            {pilotOutputs.map((output) => (
              <div key={output}>
                <CheckCircle2 size={17} />
                <span>{output}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product relationship */}
      <section className="as-aichat-section as-aichat-relationship">
        <div className="as-aichat-container as-aichat-relationship__layout">
          <div className="as-aichat-relationship__diagram">
            <div className="as-aichat-relationship__company">
              <span className="as-aichat-company-spectrum">
                <span className="as-aichat-company-spectrum__centre" />
                <span className="as-aichat-company-spectrum__node as-aichat-company-spectrum__node--top">
                  ✦
                </span>
                <span className="as-aichat-company-spectrum__node as-aichat-company-spectrum__node--left">
                  ✦
                </span>
                <span className="as-aichat-company-spectrum__node as-aichat-company-spectrum__node--right">
                  ✦
                </span>
                <span className="as-aichat-company-spectrum__node as-aichat-company-spectrum__node--bottom">
                  ✦
                </span>
              </span>

              <strong>Automation Spectrum</strong>
              <small>Product company and contracting entity</small>
            </div>

            <ArrowRight size={23} />

            <div className="as-aichat-relationship__product">
              <BrainCircuit size={30} />
              <strong>AIChatshoppie</strong>
              <small>Enterprise AI product</small>
            </div>
          </div>

          <div className="as-aichat-relationship__content">
            <span className="as-aichat-section-heading__eyebrow">
              One clear commercial structure
            </span>

            <h2>A specialised product within Automation Spectrum</h2>

            <p>
              AIChatshoppie has its own product identity and product website,
              while Automation Spectrum remains responsible for contracts,
              delivery, intellectual property and commercial relationships.
            </p>

            <Link
              to="/company"
              className="as-aichat-button as-aichat-button--secondary"
            >
              About Automation Spectrum
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="as-aichat-cta">
        <div className="as-aichat-cta__glow" />

        <div className="as-aichat-container as-aichat-cta__content">
          <div>
            <span className="as-aichat-section-heading__eyebrow">
              Explore AIChatshoppie
            </span>

            <h2>
              Bring us an enterprise knowledge or workflow problem worth
              solving.
            </h2>

            <p>
              Automation Spectrum will help assess the available knowledge,
              required integrations and an appropriate AIChatshoppie pilot
              pathway.
            </p>
          </div>

          <div className="as-aichat-cta__actions">
            <button
              type="button"
              className="as-aichat-button as-aichat-button--primary"
              onClick={handleContactClick}
            >
              Start an AI discussion
              <ArrowRight size={18} />
            </button>

            <a
              href="https://aichatshoppie.com"
              target="_blank"
              rel="noreferrer"
              className="as-aichat-button as-aichat-button--secondary"
            >
              Explore AIChatshoppie
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AIChatshoppiePage;