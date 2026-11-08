
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Check,
  ChartNoAxesCombined,
  BarChart3,
  LineChart,
  Database,
  Sparkles,
  TrendingUp,
  TrendingDown,
  FileBarChart,
  BrainCircuit,
  Building2,
  PackageSearch,
  ShieldCheck,
  Workflow,
  CheckCircle2,
  Clock3,
  RefreshCw,
  Zap,
  Target,
  Activity,
  CircleAlert,
} from "lucide-react";

import "../styles/business-intelligence.css";
import SEO from "./SEO";

const capabilities = [
  {
    icon: FileBarChart,
    title: "Automated business reporting",
    text: "Bring together information from business systems to prepare recurring reports, performance summaries and management insights.",
  },
  {
    icon: BarChart3,
    title: "Performance dashboards",
    text: "Monitor important business metrics, operational trends and performance indicators through connected reporting views.",
  },
  {
    icon: LineChart,
    title: "Forecasting & planning",
    text: "Apply statistical models and forecasting methods to support demand planning, revenue projections and operational decisions.",
  },
  {
    icon: PackageSearch,
    title: "Supplier & purchasing analysis",
    text: "Analyse supplier performance, purchasing patterns, cost variations and procurement opportunities using connected business data.",
  },
  {
    icon: BrainCircuit,
    title: "AI-assisted insights",
    text: "Help teams explore business information, investigate trends and prepare explanations grounded in available data.",
  },
  {
    icon: CircleAlert,
    title: "Exceptions & anomaly detection",
    text: "Identify unusual changes, performance deviations and potential operational issues for further investigation.",
  },
];

const useCases = [
  {
    icon: Building2,
    title: "Business management",
    text: "Consolidate revenue, expenditure, operational performance and business KPIs into clearer management reporting.",
  },
  {
    icon: PackageSearch,
    title: "Procurement & suppliers",
    text: "Compare supplier costs, purchasing trends, delivery performance and opportunities to improve procurement decisions.",
  },
  {
    icon: Activity,
    title: "Operations & service delivery",
    text: "Understand workloads, service performance, operational bottlenecks and changes in business activity.",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect",
    text: "Connect relevant business applications, databases, spreadsheets and approved reporting sources.",
  },
  {
    number: "02",
    title: "Prepare",
    text: "Validate, standardise and organise information into reliable datasets and business metrics.",
  },
  {
    number: "03",
    title: "Analyse",
    text: "Apply reporting, forecasting and analytical methods to identify trends, drivers and exceptions.",
  },
  {
    number: "04",
    title: "Act",
    text: "Present useful insights, support decisions and coordinate approved follow-up actions across business workflows.",
  },
];

const outcomes = [
  "Less manual spreadsheet consolidation and reporting",
  "Consistent business metrics and performance visibility",
  "Forecasting based on historical data and defined assumptions",
  "Clearer supplier, purchasing and operational insights",
  "AI-assisted analysis grounded in connected information",
  "Human validation of important business decisions",
];

const chartData = [
  { label: "Jan", value: 36 },
  { label: "Feb", value: 48 },
  { label: "Mar", value: 43 },
  { label: "Apr", value: 61 },
  { label: "May", value: 56 },
  { label: "Jun", value: 75 },
  { label: "Jul", value: 68 },
];

function BusinessIntelligence({ openContactModal }) {
  const handleContact = () => {
    if (typeof openContactModal === "function") {
      openContactModal();
    } else {
      window.location.href =
        "mailto:contact@automationspectrum.com.au?subject=Business%20Intelligence%20Enquiry";
    }
  };

  return (
    <>
    
      <SEO
        title="Business Intelligence & AI Analytics Australia | Automation Spectrum"
        description="Turn business data into actionable insights with AI-powered business intelligence, interactive dashboards, KPI reporting, predictive analytics and connected data solutions."
        path="/solutions/business-intelligence"
      />


      <main className="as-bi-page">
        {/* HERO */}
        <section className="as-bi-hero">
          <div
            className="as-bi-glow as-bi-glow--left"
            aria-hidden="true"
          />
          <div
            className="as-bi-glow as-bi-glow--right"
            aria-hidden="true"
          />

          <div className="as-bi-container as-bi-hero__grid">
            <div className="as-bi-hero__copy">
              <span className="as-bi-eyebrow">
                <ChartNoAxesCombined size={15} />
                BUSINESS INTELLIGENCE
              </span>

              <h1>
                Turn business data into
                <span> better decisions.</span>
              </h1>

              <p>
                Automation Spectrum helps businesses connect data,
                automate reporting and uncover actionable insights
                through intelligent analytics, forecasting and
                AI-assisted business intelligence.
              </p>

              <div className="as-bi-actions">
                <button
                  type="button"
                  className="as-bi-button as-bi-button--primary"
                  onClick={handleContact}
                >
                  Discuss your reporting needs
                  <ArrowRight size={18} />
                </button>

                <a
                  href="#business-intelligence-capabilities"
                  className="as-bi-button as-bi-button--secondary"
                >
                  Explore capabilities
                  <ChevronRight size={18} />
                </a>
              </div>

              <div className="as-bi-highlights">
                <span>
                  <Check size={16} />
                  Connected business data
                </span>
                <span>
                  <Check size={16} />
                  Intelligent forecasting
                </span>
                <span>
                  <Check size={16} />
                  Actionable insights
                </span>
              </div>
            </div>

            {/* ILLUSTRATIVE ANALYTICS WORKFLOW */}
            <div
              className="as-bi-visual"
              aria-label="Illustrative business intelligence dashboard showing sample performance data"
            >
              <div className="as-bi-visual__top">
                <span>
                  <Sparkles size={17} />
                  BUSINESS INSIGHTS
                </span>
                <span className="as-bi-visual__demo">
                  ILLUSTRATIVE DATA
                </span>
              </div>

              <div className="as-bi-dashboard">
                <div className="as-bi-dashboard__header">
                  <div>
                    <span className="as-bi-dashboard__icon">
                      <BarChart3 size={22} />
                    </span>
                    <div>
                      <strong>Business Performance</strong>
                      <small>Example analytics overview</small>
                    </div>
                  </div>
                  <span className="as-bi-dashboard__badge">
                    SAMPLE
                  </span>
                </div>

                <div className="as-bi-metrics">
                  <div className="as-bi-metric">
                    <span>Revenue trend</span>
                    <strong>+12.8%</strong>
                    <small className="as-bi-metric__positive">
                      <TrendingUp size={13} />
                      Example change
                    </small>
                  </div>

                  <div className="as-bi-metric">
                    <span>Operating costs</span>
                    <strong>-4.2%</strong>
                    <small className="as-bi-metric__positive">
                      <TrendingDown size={13} />
                      Example change
                    </small>
                  </div>

                  <div className="as-bi-metric">
                    <span>Reports prepared</span>
                    <strong>24</strong>
                    <small>
                      <FileBarChart size={13} />
                      Illustrative total
                    </small>
                  </div>
                </div>

                <div className="as-bi-chart">
                  <div className="as-bi-chart__header">
                    <div>
                      <strong>Performance trend</strong>
                      <small>Sample monthly values</small>
                    </div>
                    <span>
                      <Activity size={14} />
                      TREND
                    </span>
                  </div>

                  <div className="as-bi-chart__plot">
                    <div
                      className="as-bi-chart__grid"
                      aria-hidden="true"
                    />

                    <div className="as-bi-chart__bars">
                      {chartData.map((item) => (
                        <div
                          className="as-bi-chart__column"
                          key={item.label}
                        >
                          <div className="as-bi-chart__bar-track">
                            <div
                              className="as-bi-chart__bar"
                              style={{
                                height: `${item.value}%`,
                              }}
                            />
                          </div>
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="as-bi-dashboard__insight">
                  <Sparkles size={17} />
                  <div>
                    <strong>AI-assisted insight</strong>
                    <p>
                      Example: Performance has increased across
                      the reporting period. Review the underlying
                      drivers before making decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="as-bi-visual__workflow">
                <div className="as-bi-visual__workflow-item">
                  <span className="as-bi-visual__workflow-icon">
                    <Database size={19} />
                  </span>
                  <div>
                    <strong>Business data connected</strong>
                    <small>Approved reporting sources</small>
                  </div>
                  <CheckCircle2
                    size={18}
                    className="as-bi-visual__check"
                  />
                </div>

                <div className="as-bi-visual__workflow-item">
                  <span className="as-bi-visual__workflow-icon">
                    <Workflow size={19} />
                  </span>
                  <div>
                    <strong>Analytics workflow</strong>
                    <small>Reporting, trends and forecasting</small>
                  </div>
                  <CheckCircle2
                    size={18}
                    className="as-bi-visual__check"
                  />
                </div>

                <div className="as-bi-visual__workflow-item">
                  <span className="as-bi-visual__workflow-icon">
                    <ShieldCheck size={19} />
                  </span>
                  <div>
                    <strong>Management review</strong>
                    <small>Insights ready for human evaluation</small>
                  </div>
                  <Clock3
                    size={18}
                    className="as-bi-visual__pending"
                  />
                </div>
              </div>

              <div className="as-bi-visual__footer">
                <RefreshCw size={15} />
                Connected reporting, analysis and business workflows
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section
          id="business-intelligence-capabilities"
          className="as-bi-section as-bi-capabilities"
        >
          <div className="as-bi-container">
            <div className="as-bi-heading">
              <span className="as-bi-kicker">
                INTELLIGENT BUSINESS ANALYTICS
              </span>

              <h2>
                From disconnected data to
                <span> meaningful insights.</span>
              </h2>

              <p>
                Connect reporting sources, improve visibility and
                support business decisions with structured analytics,
                forecasting and intelligent information workflows.
              </p>
            </div>

            <div className="as-bi-card-grid">
              {capabilities.map(({ icon: Icon, title, text }) => (
                <article className="as-bi-card" key={title}>
                  <div className="as-bi-card__icon">
                    <Icon size={24} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span
                    className="as-bi-card__accent"
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="as-bi-section as-bi-usecases">
          <div className="as-bi-container">
            <div className="as-bi-heading">
              <span className="as-bi-kicker">
                PRACTICAL APPLICATIONS
              </span>

              <h2>
                Better visibility across
                <span> your business.</span>
              </h2>

              <p>
                Business intelligence should reflect how your
                organisation operates. We tailor reporting and
                analytical workflows to the decisions your teams
                need to make.
              </p>
            </div>

            <div className="as-bi-usecase-grid">
              {useCases.map(({ icon: Icon, title, text }) => (
                <article
                  className="as-bi-usecase"
                  key={title}
                >
                  <Icon size={29} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="as-bi-section as-bi-process">
          <div className="as-bi-container">
            <div className="as-bi-heading">
              <span className="as-bi-kicker">
                HOW IT WORKS
              </span>

              <h2>
                From data collection to
                <span> informed action.</span>
              </h2>

              <p>
                We combine reliable data preparation, analytical
                methods and intelligent assistance to support
                repeatable business intelligence workflows.
              </p>
            </div>

            <div className="as-bi-steps">
              {steps.map((step) => (
                <article
                  className="as-bi-step"
                  key={step.number}
                >
                  <span className="as-bi-step__number">
                    {step.number}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* OUTCOMES */}
        <section className="as-bi-section as-bi-outcomes">
          <div className="as-bi-container as-bi-split">
            <div className="as-bi-outcomes__copy">
              <span className="as-bi-kicker">
                DATA-DRIVEN & CONTROLLED
              </span>

              <h2>
                Automate reporting.
                <span> Strengthen decision-making.</span>
              </h2>

              <p>
                Analytics and AI can help identify patterns,
                prepare forecasts and explain changes in
                business performance. Important decisions
                should remain grounded in validated data,
                transparent assumptions and human judgement.
              </p>

              <Link
                to="/technology"
                className="as-bi-text-link"
              >
                Explore our technology
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="as-bi-outcomes__panel">
              {outcomes.map((item) => (
                <div key={item}>
                  <Check size={19} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="as-bi-cta">
          <div className="as-bi-container as-bi-cta__grid">
            <div>
              <span className="as-bi-kicker">
                WORK WITH AUTOMATION SPECTRUM
              </span>

              <h2>
                Have business data but
                <span> need clearer insights?</span>
              </h2>

              <p>
                Tell us about your reporting, forecasting and
                analytical challenges. We can explore how
                intelligent business intelligence could
                improve visibility, reduce manual work and
                support better decisions.
              </p>
            </div>

            <div className="as-bi-cta__actions">
              <button
                type="button"
                className="as-bi-button as-bi-button--primary"
                onClick={handleContact}
              >
                Book an AI discovery conversation
                <ArrowRight size={18} />
              </button>

              <Link
                to="/services/business-automation"
                className="as-bi-button as-bi-button--secondary"
              >
                Explore business automation
                <Zap size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
    </>
    
  );
}

export default BusinessIntelligence;
