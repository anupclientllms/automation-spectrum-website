import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BatteryCharging,
  BrainCircuit,
  Building2,
  Check,
  CheckCircle2,
  CloudCog,
  Database,
  Factory,
  Gauge,
  GitBranch,
  Layers3,
  Network,
  Radar,
  Refrigerator,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Warehouse,
  Workflow,
  Zap,
} from "lucide-react";

import "../styles/energiq.css";

const platformCapabilities = [
  {
    icon: Radar,
    title: "Operational detection",
    description:
      "Identify unusual load, equipment behaviour, operating patterns and potential inefficiencies.",
  },
  {
    icon: Layers3,
    title: "Operational digital twins",
    description:
      "Represent assets, operating conditions and connected systems in a contextual digital environment.",
  },
  {
    icon: BrainCircuit,
    title: "AI decision agents",
    description:
      "Specialised agents analyse events, investigate likely causes and prepare operational recommendations.",
  },
  {
    icon: Gauge,
    title: "Demand optimisation",
    description:
      "Analyse peak demand, load profiles and operational flexibility to identify cost-reduction opportunities.",
  },
  {
    icon: Workflow,
    title: "Human-approved workflows",
    description:
      "Keep consequential recommendations reviewable and controlled before operational changes are applied.",
  },
  {
    icon: BarChart3,
    title: "Savings intelligence",
    description:
      "Measure baseline performance, expected improvement and realised operational outcomes.",
  },
  {
    icon: Network,
    title: "Connected energy assets",
    description:
      "Connect telemetry, meters, BMS, IoT, solar, batteries, EV infrastructure and enterprise systems.",
  },
  {
    icon: Activity,
    title: "Outcome monitoring",
    description:
      "Track actions, performance changes, alerts, savings and follow-up improvement opportunities.",
  },
];

const priorityIndustries = [
  {
    icon: Refrigerator,
    title: "Cold and food storage",
    description:
      "Refrigeration, compressors, defrost cycles, freezer rooms, peak demand and temperature-sensitive operations.",
    examples: [
      "Refrigeration performance",
      "Compressor optimisation",
      "Defrost-cycle intelligence",
      "Temperature anomalies",
    ],
  },
  {
    icon: Warehouse,
    title: "Warehousing and logistics",
    description:
      "Distributed facilities, equipment loads, refrigeration, lighting, charging infrastructure and operational workflows.",
    examples: [
      "Site energy comparison",
      "Peak-demand reduction",
      "Equipment scheduling",
      "Portfolio intelligence",
    ],
  },
  {
    icon: Building2,
    title: "Buildings and infrastructure",
    description:
      "Commercial buildings, hotels, healthcare, universities, airports and local-government facilities.",
    examples: [
      "After-hours HVAC",
      "Lighting optimisation",
      "Occupancy-based operation",
      "Chiller performance",
    ],
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Detect",
    icon: Radar,
    description:
      "Identify an operational event, abnormal pattern, demand spike or potential equipment issue.",
  },
  {
    number: "02",
    title: "Understand",
    icon: Layers3,
    description:
      "Use asset context, telemetry and the digital twin to understand the operating environment.",
  },
  {
    number: "03",
    title: "Analyse",
    icon: BrainCircuit,
    description:
      "Decision agents investigate likely root causes, constraints and available operational responses.",
  },
  {
    number: "04",
    title: "Simulate",
    icon: GitBranch,
    description:
      "Evaluate alternative actions and estimate potential energy, cost and operational effects.",
  },
  {
    number: "05",
    title: "Approve",
    icon: ShieldCheck,
    description:
      "Operational users review the recommendation before a consequential action is applied.",
  },
  {
    number: "06",
    title: "Measure",
    icon: BarChart3,
    description:
      "Track the outcome and compare performance against the baseline and expected benefit.",
  },
];

const connectedSources = [
  {
    icon: Gauge,
    title: "Meters and sub-meters",
    description:
      "Electricity, gas, water, demand and circuit-level operational measurements.",
  },
  {
    icon: ServerCog,
    title: "BMS and control systems",
    description:
      "Existing building-management, refrigeration and operational-control environments.",
  },
  {
    icon: Network,
    title: "IoT and telemetry",
    description:
      "Sensors, gateways, equipment data, temperature, occupancy and environmental signals.",
  },
  {
    icon: Database,
    title: "Enterprise systems",
    description:
      "Operational records, asset systems, maintenance information and external datasets.",
  },
  {
    icon: BatteryCharging,
    title: "Distributed energy assets",
    description:
      "Solar, battery storage, EV charging and flexible energy resources.",
  },
  {
    icon: CloudCog,
    title: "Cloud and external data",
    description:
      "Tariffs, weather, emissions factors, market signals and portfolio-level information.",
  },
];

const useCases = [
  {
    icon: Zap,
    title: "Peak-demand spike",
    description:
      "Identify the assets and operating conditions contributing to a demand event and recommend a controlled response.",
  },
  {
    icon: Thermometer,
    title: "Temperature-sensitive operations",
    description:
      "Analyse refrigeration, temperature, compressor and defrost behaviour while respecting operational constraints.",
  },
  {
    icon: Building2,
    title: "After-hours operation",
    description:
      "Detect HVAC, lighting and equipment loads operating outside expected schedules or occupancy patterns.",
  },
  {
    icon: Factory,
    title: "Equipment optimisation",
    description:
      "Identify inefficient operating combinations, cycling behaviour and avoidable equipment load.",
  },
  {
    icon: BatteryCharging,
    title: "DER and flexibility",
    description:
      "Support analysis of solar, storage, flexible load and portfolio-level energy opportunities.",
  },
  {
    icon: BarChart3,
    title: "Portfolio performance",
    description:
      "Compare facilities, assets and operating patterns to prioritise improvement opportunities.",
  },
];

const pilotOutcomes = [
  "Operational baseline and data assessment",
  "Connected asset and telemetry model",
  "Focused digital-twin workspace",
  "AI-generated operational findings",
  "Human-reviewed recommendations",
  "Estimated or measured savings opportunity",
  "Technical and commercial scale pathway",
  "Production integration requirements",
];

const deploymentOptions = [
  {
    icon: CloudCog,
    title: "Cloud platform",
    description:
      "Centralised analytics, intelligence and multi-site access for enterprise and portfolio operations.",
  },
  {
    icon: ServerCog,
    title: "Private deployment",
    description:
      "Controlled deployment patterns for organisations with specific security or data requirements.",
  },
  {
    icon: Network,
    title: "Edge-connected architecture",
    description:
      "Gateway and edge connectivity for operational data, resilience and lower-latency processing.",
  },
  {
    icon: GitBranch,
    title: "Hybrid environment",
    description:
      "Combine existing operational systems, edge connectivity and cloud-based intelligence.",
  },
];

function EnergIQHeroVisual() {
  return (
    <div className="as-energiq-hero__visual" aria-hidden="true">
      <div className="as-energiq-orbit as-energiq-orbit--outer" />
      <div className="as-energiq-orbit as-energiq-orbit--middle" />
      <div className="as-energiq-orbit as-energiq-orbit--inner" />

      <div className="as-energiq-visual__centre">
        <span className="as-energiq-visual__icon">
          <Zap size={31} />
        </span>

        <strong>EnergIQ</strong>
        <small>Energy & Operational Intelligence</small>
      </div>

      <div className="as-energiq-visual__node as-energiq-visual__node--assets">
        <Network size={18} />

        <span>
          <strong>Connected assets</strong>
          <small>Telemetry, BMS and IoT</small>
        </span>
      </div>

      <div className="as-energiq-visual__node as-energiq-visual__node--twin">
        <Layers3 size={18} />

        <span>
          <strong>Digital twin</strong>
          <small>Operational context</small>
        </span>
      </div>

      <div className="as-energiq-visual__node as-energiq-visual__node--agents">
        <BrainCircuit size={18} />

        <span>
          <strong>Decision agents</strong>
          <small>Analysis and recommendations</small>
        </span>
      </div>

      <div className="as-energiq-visual__node as-energiq-visual__node--outcomes">
        <BarChart3 size={18} />

        <span>
          <strong>Measured outcomes</strong>
          <small>Energy, cost and operations</small>
        </span>
      </div>
    </div>
  );
}

function EnergIQPage({ openContactModal }) {
  const handleContactClick = () => {
    if (typeof openContactModal === "function") {
      openContactModal();
    }
  };

  return (
    <main className="as-energiq-page">
      {/* Hero */}
      <section className="as-energiq-hero">
        <div className="as-energiq-hero__ambient as-energiq-hero__ambient--one" />
        <div className="as-energiq-hero__ambient as-energiq-hero__ambient--two" />

        <div className="as-energiq-container as-energiq-hero__layout">
          <div className="as-energiq-hero__content">
            <div className="as-energiq-eyebrow">
              <Zap size={15} />
              A product of Automation Spectrum Pty Ltd
            </div>

            <h1>
              AI-powered energy and{" "}
              <span>operational intelligence.</span>
            </h1>

            <p>
              EnergIQ helps energy-intensive organisations understand
              operational performance, identify avoidable costs and make
              controlled, data-informed decisions across assets, facilities
              and energy systems.
            </p>

            <div className="as-energiq-hero__actions">
              <button
                type="button"
                className="as-energiq-button as-energiq-button--primary"
                onClick={handleContactClick}
              >
                Discuss an EnergIQ pilot
                <ArrowRight size={18} />
              </button>

              <a
                href="https://energiqtech.com"
                target="_blank"
                rel="noreferrer"
                className="as-energiq-button as-energiq-button--secondary"
              >
                Visit EnergIQ website
              </a>
            </div>

            <div className="as-energiq-hero__assurance">
              <div>
                <Check size={16} />
                Existing-data pilots
              </div>

              <div>
                <Check size={16} />
                Human-approved decisions
              </div>

              <div>
                <Check size={16} />
                Pilot-to-production pathway
              </div>
            </div>
          </div>

          <EnergIQHeroVisual />
        </div>
      </section>

      {/* Company relationship */}
      <section className="as-energiq-intro">
        <div className="as-energiq-container as-energiq-intro__layout">
          <div className="as-energiq-section-heading">
            <span className="as-energiq-section-heading__eyebrow">
              Product and company relationship
            </span>

            <h2>EnergIQ is developed and commercialised by Automation Spectrum</h2>
          </div>

          <div className="as-energiq-intro__content">
            <p>
              EnergIQ is Automation Spectrum&apos;s energy and operational
              intelligence product. Industry offerings such as Cold Storage AI,
              Building AI, Warehouse &amp; Logistics AI and DER intelligence
              are product configurations within the EnergIQ platform.
            </p>

            <p>
              Customers contract with Automation Spectrum Pty Ltd, while
              EnergIQ identifies the product and relevant industry solution
              being delivered.
            </p>

            <div className="as-energiq-intro__statement">
              <Building2 size={19} />

              <p>
                <strong>Contracting entity:</strong> Automation Spectrum Pty Ltd
                <br />
                <strong>Product:</strong> EnergIQ
                <br />
                <strong>Solution:</strong> The relevant industry or operational
                configuration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform capabilities */}
      <section className="as-energiq-section as-energiq-capabilities">
        <div className="as-energiq-container">
          <div className="as-energiq-section-heading as-energiq-section-heading--center">
            <span className="as-energiq-section-heading__eyebrow">
              Platform capabilities
            </span>

            <h2>From operational data to controlled improvement</h2>

            <p>
              EnergIQ combines connected data, contextual models, AI analysis
              and human oversight into practical operational workflows.
            </p>
          </div>

          <div className="as-energiq-capabilities__grid">
            {platformCapabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  className="as-energiq-capability-card"
                  key={capability.title}
                >
                  <span className="as-energiq-capability-card__icon">
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
      <section className="as-energiq-section as-energiq-workflow">
        <div className="as-energiq-container">
          <div className="as-energiq-section-heading as-energiq-section-heading--center">
            <span className="as-energiq-section-heading__eyebrow">
              Human-in-the-loop workflow
            </span>

            <h2>Detect, understand, recommend and measure</h2>

            <p>
              EnergIQ is designed to support accountable operational
              decision-making rather than uncontrolled automation.
            </p>
          </div>

          <div className="as-energiq-workflow__grid">
            {workflowSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article className="as-energiq-workflow-step" key={step.number}>
                  <div className="as-energiq-workflow-step__header">
                    <span>{step.number}</span>
                    <Icon size={21} />
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>

          <div className="as-energiq-workflow__summary">
            <Workflow size={21} />

            <p>
              Detect → Digital Twin → Analyse → Simulate → Approve → Measure
            </p>
          </div>
        </div>
      </section>

      {/* Priority industries */}
      <section className="as-energiq-section as-energiq-industries">
        <div className="as-energiq-container">
          <div className="as-energiq-section-heading">
            <span className="as-energiq-section-heading__eyebrow">
              Initial commercial focus
            </span>

            <h2>Focused industries with measurable operational opportunities</h2>

            <p>
              EnergIQ&apos;s near-term commercial focus is on environments
              where energy intensity, equipment performance and operational
              complexity create a clear business case.
            </p>
          </div>

          <div className="as-energiq-industries__grid">
            {priorityIndustries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  className="as-energiq-industry-card"
                  key={industry.title}
                >
                  <span className="as-energiq-industry-card__icon">
                    <Icon size={25} />
                  </span>

                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>

                  <div className="as-energiq-industry-card__examples">
                    {industry.examples.map((example) => (
                      <div key={example}>
                        <Check size={15} />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DER */}
      <section className="as-energiq-section as-energiq-der">
        <div className="as-energiq-container as-energiq-der__layout">
          <div className="as-energiq-der__content">
            <span className="as-energiq-section-heading__eyebrow">
              Strategic energy opportunity
            </span>

            <h2>Distributed energy and portfolio intelligence</h2>

            <p>
              EnergIQ&apos;s connected-energy architecture can also support
              distributed energy resources, flexible demand, batteries, solar
              and portfolio-level decision intelligence.
            </p>

            <p>
              These capabilities are strategically relevant to energy
              retailers, network operators, VPP operators, infrastructure
              portfolios and grant-supported energy innovation programs.
            </p>

            <button
              type="button"
              className="as-energiq-button as-energiq-button--primary"
              onClick={handleContactClick}
            >
              Discuss a DER opportunity
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="as-energiq-der__diagram">
            <div className="as-energiq-der__asset">
              <Zap size={23} />
              <span>
                <strong>Flexible load</strong>
                <small>Demand and operational response</small>
              </span>
            </div>

            <div className="as-energiq-der__asset">
              <BatteryCharging size={23} />
              <span>
                <strong>Battery storage</strong>
                <small>Dispatch and optimisation</small>
              </span>
            </div>

            <div className="as-energiq-der__asset">
              <CloudCog size={23} />
              <span>
                <strong>Portfolio intelligence</strong>
                <small>Connected visibility and coordination</small>
              </span>
            </div>

            <div className="as-energiq-der__core">
              <BrainCircuit size={28} />
              <strong>EnergIQ DER Intelligence</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Connected sources */}
      <section className="as-energiq-section as-energiq-connected">
        <div className="as-energiq-container">
          <div className="as-energiq-section-heading as-energiq-section-heading--center">
            <span className="as-energiq-section-heading__eyebrow">
              Connected operational environment
            </span>

            <h2>Designed to work with existing systems and data</h2>

            <p>
              EnergIQ can begin with available data and progressively connect
              more operational systems as the customer moves from pilot to
              production.
            </p>
          </div>

          <div className="as-energiq-connected__grid">
            {connectedSources.map((source) => {
              const Icon = source.icon;

              return (
                <article className="as-energiq-connected-card" key={source.title}>
                  <span className="as-energiq-connected-card__icon">
                    <Icon size={22} />
                  </span>

                  <h3>{source.title}</h3>
                  <p>{source.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="as-energiq-section as-energiq-use-cases">
        <div className="as-energiq-container">
          <div className="as-energiq-section-heading">
            <span className="as-energiq-section-heading__eyebrow">
              Example operational scenarios
            </span>

            <h2>Use cases configured around the customer environment</h2>

            <p>
              The exact workflow depends on available telemetry, operational
              constraints, customer priorities and agreed pilot outcomes.
            </p>
          </div>

          <div className="as-energiq-use-cases__grid">
            {useCases.map((useCase) => {
              const Icon = useCase.icon;

              return (
                <article className="as-energiq-use-case" key={useCase.title}>
                  <span className="as-energiq-use-case__icon">
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

      {/* Pilot model */}
      <section className="as-energiq-section as-energiq-pilot">
        <div className="as-energiq-container as-energiq-pilot__layout">
          <div className="as-energiq-pilot__content">
            <span className="as-energiq-section-heading__eyebrow">
              EnergIQ pilot model
            </span>

            <h2>Begin with available data and a focused operational problem</h2>

            <p>
              An EnergIQ pilot can begin without immediately installing new
              control hardware. Existing exports, telemetry, meter data or
              representative information may be sufficient to validate the
              initial use case.
            </p>

            <p>
              Additional gateways, live integrations and control workflows can
              be introduced when the pilot demonstrates sufficient technical
              and commercial value.
            </p>

            <div className="as-energiq-pilot__actions">
              <button
                type="button"
                className="as-energiq-button as-energiq-button--primary"
                onClick={handleContactClick}
              >
                Discuss pilot suitability
                <ArrowRight size={18} />
              </button>

              <Link
                to="/pilot-programs"
                className="as-energiq-button as-energiq-button--secondary"
              >
                View pilot process
              </Link>
            </div>
          </div>

          <div className="as-energiq-pilot__outcomes">
            <span>Typical pilot outputs</span>

            {pilotOutcomes.map((outcome) => (
              <div key={outcome}>
                <CheckCircle2 size={17} />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section className="as-energiq-section as-energiq-deployment">
        <div className="as-energiq-container">
          <div className="as-energiq-section-heading as-energiq-section-heading--center">
            <span className="as-energiq-section-heading__eyebrow">
              Deployment architecture
            </span>

            <h2>Flexible architecture for operational environments</h2>

            <p>
              Deployment can be aligned with customer systems, data
              requirements, latency, resilience and security expectations.
            </p>
          </div>

          <div className="as-energiq-deployment__grid">
            {deploymentOptions.map((option) => {
              const Icon = option.icon;

              return (
                <article
                  className="as-energiq-deployment-card"
                  key={option.title}
                >
                  <span className="as-energiq-deployment-card__icon">
                    <Icon size={23} />
                  </span>

                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="as-energiq-section as-energiq-governance">
        <div className="as-energiq-container as-energiq-governance__layout">
          <div className="as-energiq-governance__content">
            <span className="as-energiq-section-heading__eyebrow">
              Operational trust
            </span>

            <h2>Designed to assist operational teams, not bypass them</h2>

            <p>
              EnergIQ can provide recommendations, simulations and evidence
              while leaving critical operational decisions with authorised
              users.
            </p>

            <p>
              Approval records, recommendations and outcomes can be retained to
              support auditability, learning and continuous improvement.
            </p>
          </div>

          <div className="as-energiq-governance__cards">
            <article>
              <ShieldCheck size={23} />
              <h3>Human approval</h3>
              <p>Consequential actions remain controlled by authorised users.</p>
            </article>

            <article>
              <Database size={23} />
              <h3>Evidence and context</h3>
              <p>Recommendations can include operational data and reasoning.</p>
            </article>

            <article>
              <Activity size={23} />
              <h3>Outcome tracking</h3>
              <p>Applied actions and resulting performance can be reviewed.</p>
            </article>

            <article>
              <Network size={23} />
              <h3>Progressive integration</h3>
              <p>Automation can increase only when the customer is ready.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="as-energiq-cta">
        <div className="as-energiq-cta__glow" />

        <div className="as-energiq-container as-energiq-cta__content">
          <div>
            <span className="as-energiq-section-heading__eyebrow">
              Explore EnergIQ
            </span>

            <h2>
              Bring us an energy-intensive operational problem worth solving.
            </h2>

            <p>
              Automation Spectrum will help assess the available information,
              appropriate EnergIQ configuration and a focused pilot pathway.
            </p>
          </div>

          <div className="as-energiq-cta__actions">
            <button
              type="button"
              className="as-energiq-button as-energiq-button--primary"
              onClick={handleContactClick}
            >
              Start an EnergIQ discussion
              <ArrowRight size={18} />
            </button>

            <a
              href="https://energiqtech.com"
              target="_blank"
              rel="noreferrer"
              className="as-energiq-button as-energiq-button--secondary"
            >
              Explore EnergIQ Tech
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EnergIQPage;