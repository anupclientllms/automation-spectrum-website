import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building2,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Database,
  FileSearch,
  Gauge,
  Handshake,
  Layers3,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

import "../styles/pilotprograms.css";

const pilotBenefits = [
  {
    icon: Target,
    title: "Focused business problem",
    description:
      "The pilot begins with a clearly defined operational or enterprise problem and agreed success criteria.",
  },
  {
    icon: Database,
    title: "Use existing information",
    description:
      "Where possible, we work with available documents, APIs, telemetry, datasets and enterprise systems.",
  },
  {
    icon: ShieldCheck,
    title: "Controlled implementation",
    description:
      "Recommendations and workflows can remain human-reviewed before any operational action is taken.",
  },
  {
    icon: BarChart3,
    title: "Measurable outcomes",
    description:
      "The engagement produces evidence, findings and a clear view of technical and commercial value.",
  },
];

const pilotStages = [
  {
    number: "01",
    title: "Discovery",
    icon: FileSearch,
    duration: "1–2 weeks",
    description:
      "We define the business problem, available data, key stakeholders, operating constraints and measurable pilot outcomes.",
    outputs: [
      "Problem and scope definition",
      "Data and integration assessment",
      "Pilot success criteria",
      "Delivery and governance plan",
    ],
  },
  {
    number: "02",
    title: "Pilot design",
    icon: Layers3,
    duration: "1–2 weeks",
    description:
      "We design the pilot workflow, product configuration, AI components, user journey and evaluation approach.",
    outputs: [
      "Solution architecture",
      "Configured use-case workflow",
      "Data and system mapping",
      "User review and approval model",
    ],
  },
  {
    number: "03",
    title: "Implementation",
    icon: Workflow,
    duration: "4–10 weeks",
    description:
      "The selected product capability is connected, configured and demonstrated using representative customer information.",
    outputs: [
      "Working pilot environment",
      "AI recommendations or intelligence",
      "Operational or enterprise workspace",
      "Initial user testing",
    ],
  },
  {
    number: "04",
    title: "Evaluation",
    icon: ClipboardCheck,
    duration: "1–2 weeks",
    description:
      "Results are reviewed against the agreed technical, operational and commercial success measures.",
    outputs: [
      "Pilot findings",
      "Measured outcomes",
      "Limitations and assumptions",
      "Production-readiness assessment",
    ],
  },
  {
    number: "05",
    title: "Scale pathway",
    icon: Rocket,
    duration: "Planned after validation",
    description:
      "Successful capabilities are translated into a practical roadmap for deployment across additional users, sites or workflows.",
    outputs: [
      "Production roadmap",
      "Integration requirements",
      "Commercial deployment options",
      "Expansion and support plan",
    ],
  },
];

const pilotTypes = [
  {
    product: "EnergIQ",
    category: "Energy & Operational Intelligence Pilot",
    icon: Zap,
    theme: "energy",
    description:
      "A focused operational pilot designed to identify energy, demand, equipment or workflow improvement opportunities.",
    examples: [
      "Cold-storage refrigeration optimisation",
      "Peak-demand and load management",
      "After-hours equipment analysis",
      "Operational digital twin",
      "Root-cause and anomaly analysis",
      "Distributed energy and flexibility intelligence",
    ],
    path: "/products/energiq",
  },
  {
    product: "AIChatshoppie",
    category: "Enterprise AI & Automation Pilot",
    icon: BrainCircuit,
    theme: "enterprise",
    description:
      "A focused enterprise AI pilot for knowledge access, intelligent assistance, workflow automation or customer intelligence.",
    examples: [
      "Enterprise knowledge assistant",
      "Retrieval-augmented generation",
      "AI co-worker workflow",
      "Customer and market intelligence",
      "Multi-agent process automation",
      "Private or domain-specific AI assistant",
    ],
    path: "/products/aichatshoppie",
  },
];

const readinessItems = [
  {
    icon: Users,
    title: "Executive or operational sponsor",
    description:
      "A customer stakeholder who can support access, decisions and internal alignment.",
  },
  {
    icon: Target,
    title: "Defined business problem",
    description:
      "A meaningful use case with a clear operational, financial or user impact.",
  },
  {
    icon: Database,
    title: "Representative information",
    description:
      "Access to suitable documents, system exports, telemetry, APIs or sample data.",
  },
  {
    icon: Clock3,
    title: "Pilot participation",
    description:
      "Availability from relevant users, subject-matter experts and technical contacts.",
  },
];

const successMeasures = [
  "Technical feasibility",
  "Data quality and integration viability",
  "Recommendation relevance",
  "User confidence and adoption",
  "Operational or workflow improvement",
  "Potential cost or time reduction",
  "Governance and security fit",
  "Production scalability",
];

const engagementOptions = [
  {
    title: "Focused proof of value",
    duration: "Typically 4–8 weeks",
    description:
      "Suitable for a tightly scoped use case using representative data and a limited number of users or assets.",
    icon: Gauge,
  },
  {
    title: "Operational pilot",
    duration: "Typically 8–12 weeks",
    description:
      "Suitable for live operational analysis, multiple data sources, digital twins or human-approved recommendations.",
    icon: Activity,
  },
  {
    title: "Strategic product pilot",
    duration: "Typically 3–6 months",
    description:
      "Suitable for broader enterprise adoption, multiple workflows, sites, stakeholders or commercial validation.",
    icon: Building2,
  },
];

function PilotJourneyVisual() {
  return (
    <div className="as-pilot-hero__visual" aria-hidden="true">
      <div className="as-pilot-orbit as-pilot-orbit--outer" />
      <div className="as-pilot-orbit as-pilot-orbit--middle" />
      <div className="as-pilot-orbit as-pilot-orbit--inner" />

      <div className="as-pilot-visual__centre">
        <span className="as-pilot-spectrum">
          <span className="as-pilot-spectrum__centre" />
          <span className="as-pilot-spectrum__node as-pilot-spectrum__node--top">
            ✦
          </span>
          <span className="as-pilot-spectrum__node as-pilot-spectrum__node--left">
            ✦
          </span>
          <span className="as-pilot-spectrum__node as-pilot-spectrum__node--right">
            ✦
          </span>
          <span className="as-pilot-spectrum__node as-pilot-spectrum__node--bottom">
            ✦
          </span>
        </span>

        <strong>Pilot Program</strong>
        <small>Evidence before scale</small>
      </div>

      <div className="as-pilot-visual__node as-pilot-visual__node--discover">
        <FileSearch size={18} />
        <span>
          <strong>Discover</strong>
          <small>Problem and opportunity</small>
        </span>
      </div>

      <div className="as-pilot-visual__node as-pilot-visual__node--demonstrate">
        <Workflow size={18} />
        <span>
          <strong>Demonstrate</strong>
          <small>Working product capability</small>
        </span>
      </div>

      <div className="as-pilot-visual__node as-pilot-visual__node--measure">
        <BarChart3 size={18} />
        <span>
          <strong>Measure</strong>
          <small>Technical and business value</small>
        </span>
      </div>

      <div className="as-pilot-visual__node as-pilot-visual__node--scale">
        <Rocket size={18} />
        <span>
          <strong>Scale</strong>
          <small>Production pathway</small>
        </span>
      </div>
    </div>
  );
}

function PilotProgramsPage({ openContactModal }) {
  const handleContactClick = () => {
    if (typeof openContactModal === "function") {
      openContactModal();
    }
  };

  return (
    <main className="as-pilot-page">
      {/* Hero */}
      <section className="as-pilot-hero">
        <div className="as-pilot-hero__ambient as-pilot-hero__ambient--one" />
        <div className="as-pilot-hero__ambient as-pilot-hero__ambient--two" />

        <div className="as-pilot-container as-pilot-hero__layout">
          <div className="as-pilot-hero__content">
            <div className="as-pilot-eyebrow">
              <Sparkles size={15} />
              Pilot-to-production engagements
            </div>

            <h1>
              Start with evidence.{" "}
              <span>Scale with confidence.</span>
            </h1>

            <p>
              Automation Spectrum pilot programs help organisations validate
              applied AI against a focused business problem before committing
              to broader production deployment.
            </p>

            <div className="as-pilot-hero__actions">
              <button
                type="button"
                className="as-pilot-button as-pilot-button--primary"
                onClick={handleContactClick}
              >
                Discuss a pilot
                <ArrowRight size={18} />
              </button>

              <a
                href="#pilot-process"
                className="as-pilot-button as-pilot-button--secondary"
              >
                See how pilots work
              </a>
            </div>

            <div className="as-pilot-hero__assurance">
              <div>
                <Check size={16} />
                Defined scope
              </div>

              <div>
                <Check size={16} />
                Measurable outcomes
              </div>

              <div>
                <Check size={16} />
                Clear scale pathway
              </div>
            </div>
          </div>

          <PilotJourneyVisual />
        </div>
      </section>

      {/* Intro */}
      <section className="as-pilot-intro">
        <div className="as-pilot-container as-pilot-intro__layout">
          <div className="as-pilot-section-heading">
            <span className="as-pilot-section-heading__eyebrow">
              Why begin with a pilot
            </span>

            <h2>Reduce uncertainty before production investment</h2>
          </div>

          <div className="as-pilot-intro__content">
            <p>
              Enterprise and operational AI projects involve more than model
              selection. Data availability, integration, workflow design,
              governance, user trust and commercial value must all be tested.
            </p>

            <p>
              A focused pilot gives the organisation and Automation Spectrum a
              structured environment to validate those assumptions using a
              real business problem.
            </p>

            <div className="as-pilot-intro__statement">
              <CheckCircle2 size={19} />

              <p>
                A pilot is not simply a demonstration. It is a defined
                commercial engagement designed to produce evidence and an
                informed deployment decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="as-pilot-section as-pilot-benefits">
        <div className="as-pilot-container">
          <div className="as-pilot-section-heading as-pilot-section-heading--center">
            <span className="as-pilot-section-heading__eyebrow">
              Pilot principles
            </span>

            <h2>Structured around practical customer outcomes</h2>

            <p>
              Each pilot is scoped around an agreed problem, available
              information, responsible users and measurable success criteria.
            </p>
          </div>

          <div className="as-pilot-benefits__grid">
            {pilotBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article className="as-pilot-benefit-card" key={benefit.title}>
                  <span className="as-pilot-benefit-card__icon">
                    <Icon size={22} />
                  </span>

                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pilot types */}
      <section className="as-pilot-section as-pilot-types">
        <div className="as-pilot-container">
          <div className="as-pilot-section-heading">
            <span className="as-pilot-section-heading__eyebrow">
              Product pilot options
            </span>

            <h2>Choose the platform aligned with the business problem</h2>

            <p>
              Automation Spectrum pilots are delivered through EnergIQ or
              AIChatshoppie depending on the use case.
            </p>
          </div>

          <div className="as-pilot-types__grid">
            {pilotTypes.map((pilot) => {
              const Icon = pilot.icon;

              return (
                <article
                  className={`as-pilot-type-card as-pilot-type-card--${pilot.theme}`}
                  key={pilot.product}
                >
                  <div className="as-pilot-type-card__glow" />

                  <div className="as-pilot-type-card__header">
                    <span className="as-pilot-type-card__icon">
                      <Icon size={25} />
                    </span>

                    <span>{pilot.category}</span>
                  </div>

                  <h3>{pilot.product}</h3>
                  <p>{pilot.description}</p>

                  <div className="as-pilot-type-card__examples">
                    {pilot.examples.map((example) => (
                      <div key={example}>
                        <Check size={15} />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={pilot.path}>
                    Explore {pilot.product}
                    <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="pilot-process"
        className="as-pilot-section as-pilot-process"
      >
        <div className="as-pilot-container">
          <div className="as-pilot-section-heading as-pilot-section-heading--center">
            <span className="as-pilot-section-heading__eyebrow">
              Pilot delivery process
            </span>

            <h2>A clear pathway from discovery to scale</h2>

            <p>
              Timing varies according to scope, data availability, integration
              complexity and customer participation.
            </p>
          </div>

          <div className="as-pilot-process__grid">
            {pilotStages.map((stage) => {
              const Icon = stage.icon;

              return (
                <article className="as-pilot-stage" key={stage.number}>
                  <div className="as-pilot-stage__top">
                    <span className="as-pilot-stage__number">
                      {stage.number}
                    </span>

                    <span className="as-pilot-stage__icon">
                      <Icon size={22} />
                    </span>
                  </div>

                  <span className="as-pilot-stage__duration">
                    {stage.duration}
                  </span>

                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>

                  <div className="as-pilot-stage__outputs">
                    <span>Typical outputs</span>

                    {stage.outputs.map((output) => (
                      <div key={output}>
                        <Check size={14} />
                        <span>{output}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement formats */}
      <section className="as-pilot-section as-pilot-formats">
        <div className="as-pilot-container">
          <div className="as-pilot-section-heading">
            <span className="as-pilot-section-heading__eyebrow">
              Engagement formats
            </span>

            <h2>Pilot scope matched to the level of validation required</h2>

            <p>
              Final duration, pricing and deliverables are confirmed after
              discovery and depend on the selected product and customer
              environment.
            </p>
          </div>

          <div className="as-pilot-formats__grid">
            {engagementOptions.map((option) => {
              const Icon = option.icon;

              return (
                <article className="as-pilot-format-card" key={option.title}>
                  <span className="as-pilot-format-card__icon">
                    <Icon size={23} />
                  </span>

                  <span className="as-pilot-format-card__duration">
                    {option.duration}
                  </span>

                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                </article>
              );
            })}
          </div>

          <div className="as-pilot-formats__note">
            <Handshake size={20} />

            <p>
              Pilot engagements are scoped and priced individually. Any
              production subscription, licensing, integration or deployment
              agreement is discussed separately after pilot evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* Readiness */}
      <section className="as-pilot-section as-pilot-readiness">
        <div className="as-pilot-container as-pilot-readiness__layout">
          <div className="as-pilot-readiness__intro">
            <span className="as-pilot-section-heading__eyebrow">
              Pilot readiness
            </span>

            <h2>What helps a pilot succeed</h2>

            <p>
              Customers do not need perfect systems or perfectly prepared data,
              but successful pilots require access, ownership and timely
              participation.
            </p>

            <button
              type="button"
              className="as-pilot-button as-pilot-button--primary"
              onClick={handleContactClick}
            >
              Assess pilot suitability
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="as-pilot-readiness__grid">
            {readinessItems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="as-pilot-readiness-card" key={item.title}>
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

      {/* Measurement */}
      <section className="as-pilot-section as-pilot-measurement">
        <div className="as-pilot-container as-pilot-measurement__layout">
          <div className="as-pilot-measurement__content">
            <span className="as-pilot-section-heading__eyebrow">
              Pilot evaluation
            </span>

            <h2>Success is assessed across technology and business value</h2>

            <p>
              The exact evaluation criteria are agreed during discovery. Not
              every pilot will use every measure, and quantified financial
              outcomes depend on the quality and duration of available data.
            </p>
          </div>

          <div className="as-pilot-measurement__list">
            {successMeasures.map((measure) => (
              <div key={measure}>
                <CheckCircle2 size={17} />
                <span>{measure}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="as-pilot-section as-pilot-responsibilities">
        <div className="as-pilot-container">
          <div className="as-pilot-section-heading as-pilot-section-heading--center">
            <span className="as-pilot-section-heading__eyebrow">
              Working together
            </span>

            <h2>Clear responsibilities support faster delivery</h2>
          </div>

          <div className="as-pilot-responsibilities__grid">
            <article className="as-pilot-responsibility-card">
              <span>Automation Spectrum</span>

              <h3>Product, AI and pilot delivery</h3>

              <div>
                <Check size={15} />
                Pilot planning and solution design
              </div>

              <div>
                <Check size={15} />
                Product configuration and implementation
              </div>

              <div>
                <Check size={15} />
                AI workflow and integration support
              </div>

              <div>
                <Check size={15} />
                Evaluation and scale recommendations
              </div>
            </article>

            <article className="as-pilot-responsibility-card">
              <span>Customer organisation</span>

              <h3>Access, expertise and internal participation</h3>

              <div>
                <Check size={15} />
                Business and operational context
              </div>

              <div>
                <Check size={15} />
                Access to agreed information and stakeholders
              </div>

              <div>
                <Check size={15} />
                User feedback and validation
              </div>

              <div>
                <Check size={15} />
                Governance and internal decision-making
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="as-pilot-cta">
        <div className="as-pilot-cta__glow" />

        <div className="as-pilot-container as-pilot-cta__content">
          <div>
            <span className="as-pilot-section-heading__eyebrow">
              Start a pilot discussion
            </span>

            <h2>
              Bring us a meaningful operational or enterprise problem.
            </h2>

            <p>
              We will help assess whether the opportunity is suitable for an
              EnergIQ or AIChatshoppie pilot and define an appropriate next
              step.
            </p>
          </div>

          <div className="as-pilot-cta__actions">
            <button
              type="button"
              className="as-pilot-button as-pilot-button--primary"
              onClick={handleContactClick}
            >
              Discuss your use case
              <ArrowRight size={18} />
            </button>

            <Link
              to="/company"
              className="as-pilot-button as-pilot-button--secondary"
            >
              About Automation Spectrum
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PilotProgramsPage;