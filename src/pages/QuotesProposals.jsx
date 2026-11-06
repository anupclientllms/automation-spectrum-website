
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Check,
  FilePenLine,
  Sparkles,
  ClipboardList,
  Calculator,
  Database,
  ShieldCheck,
  Send,
  Clock3,
  RefreshCw,
  Users,
  GitBranch,
  FileCheck2,
  Zap,
  CheckCircle2,
} from "lucide-react";

import "../styles/quotes-proposals.css";

const capabilities = [
  {
    icon: FilePenLine,
    title: "AI-assisted proposal drafting",
    text: "Turn customer requirements, project notes and service details into structured first drafts for team review.",
  },
  {
    icon: Calculator,
    title: "Quote and pricing workflows",
    text: "Prepare itemised estimates using approved pricing rules, rate cards and business-specific calculations.",
  },
  {
    icon: ClipboardList,
    title: "Reusable templates",
    text: "Maintain consistent layouts, scope descriptions, terms and branding across quotes and proposals.",
  },
  {
    icon: Database,
    title: "CRM and system integration",
    text: "Bring customer information, products, services and opportunity details into connected quoting workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Reviews and approvals",
    text: "Route pricing exceptions, commercial terms and high-value proposals to authorised team members.",
  },
  {
    icon: Send,
    title: "Delivery and follow-ups",
    text: "Coordinate approved proposal delivery, status tracking and timely customer follow-up reminders.",
  },
];

const useCases = [
  {
    icon: Users,
    title: "Professional services",
    text: "Prepare consulting proposals, statements of work, service estimates and client engagement documents.",
  },
  {
    icon: Calculator,
    title: "Trades and field services",
    text: "Build quotes from job details, labour rates, materials and approved service pricing.",
  },
  {
    icon: GitBranch,
    title: "B2B sales teams",
    text: "Connect sales opportunities with proposal preparation, internal approvals and follow-up activities.",
  },
];

const steps = [
  {
    number: "01",
    title: "Capture",
    text: "Collect customer requirements, opportunity details and relevant supporting information.",
  },
  {
    number: "02",
    title: "Prepare",
    text: "Generate a structured draft using templates, approved data and defined pricing rules.",
  },
  {
    number: "03",
    title: "Review",
    text: "Validate scope, calculations and commercial terms before an authorised person approves.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "Send the approved proposal and coordinate tracking, reminders and follow-ups.",
  },
];

const outcomes = [
  "Faster preparation of quotes and proposals",
  "Consistent branding, structure and commercial terms",
  "Pricing validation and human approval controls",
  "Integration with CRM, ERP and business applications",
  "Better visibility into proposal status and follow-ups",
];

function QuotesProposals({ openContactModal }) {
  const handleContact = () => {
    if (typeof openContactModal === "function") {
      openContactModal();
    } else {
      window.location.href =
        "mailto:contact@automationspectrum.com.au?subject=Quotes%20and%20Proposals%20Automation%20Enquiry";
    }
  };

  return (
    <main className="as-quotes-page">
      {/* HERO */}
      <section className="as-quotes-hero">
        <div className="as-quotes-glow as-quotes-glow--left" aria-hidden="true" />
        <div className="as-quotes-glow as-quotes-glow--right" aria-hidden="true" />

        <div className="as-quotes-container as-quotes-hero__grid">
          <div className="as-quotes-hero__copy">
            <span className="as-quotes-eyebrow">
              <FilePenLine size={15} />
              QUOTES & PROPOSALS
            </span>

            <h1>
              Create better proposals.
              <span> Spend less time preparing them.</span>
            </h1>

            <p>
              Automation Spectrum helps businesses streamline quoting and
              proposal preparation with intelligent document workflows,
              connected business data and human-controlled approvals.
            </p>

            <div className="as-quotes-actions">
              <button
                type="button"
                className="as-quotes-button as-quotes-button--primary"
                onClick={handleContact}
              >
                Discuss your quoting workflow
                <ArrowRight size={18} />
              </button>

              <a
                href="#quotes-capabilities"
                className="as-quotes-button as-quotes-button--secondary"
              >
                Explore capabilities
                <ChevronRight size={18} />
              </a>
            </div>

            <div className="as-quotes-highlights">
              <span><Check size={16} /> Reduce repetitive drafting</span>
              <span><Check size={16} /> Improve consistency</span>
              <span><Check size={16} /> Keep people in control</span>
            </div>
          </div>

          {/* ILLUSTRATIVE WORKFLOW */}
          <div
            className="as-quotes-visual"
            aria-label="Illustrative quote and proposal automation workflow"
          >
            <div className="as-quotes-visual__top">
              <span><Sparkles size={17} /> PROPOSAL WORKFLOW</span>
              <span className="as-quotes-visual__demo">ILLUSTRATIVE</span>
            </div>

            <div className="as-quotes-visual__document">
              <div className="as-quotes-visual__document-head">
                <span className="as-quotes-visual__document-icon">
                  <FilePenLine size={23} />
                </span>
                <div>
                  <strong>Service Proposal</strong>
                  <small>Draft prepared for review</small>
                </div>
                <span className="as-quotes-visual__status">DRAFT</span>
              </div>

              <div className="as-quotes-visual__line as-quotes-visual__line--wide" />
              <div className="as-quotes-visual__line" />
              <div className="as-quotes-visual__line as-quotes-visual__line--medium" />

              <div className="as-quotes-visual__details">
                <div>
                  <span>Scope</span>
                  <strong>Prepared</strong>
                </div>
                <div>
                  <span>Pricing</span>
                  <strong>Validated</strong>
                </div>
                <div>
                  <span>Approval</span>
                  <strong>Required</strong>
                </div>
              </div>
            </div>

            <div className="as-quotes-visual__flow">
              <div className="as-quotes-visual__flow-item">
                <span className="as-quotes-visual__flow-icon">
                  <Database size={19} />
                </span>
                <div>
                  <strong>Connected information</strong>
                  <small>Customer details, services and pricing</small>
                </div>
                <CheckCircle2 size={18} className="as-quotes-visual__check" />
              </div>

              <div className="as-quotes-visual__flow-item">
                <span className="as-quotes-visual__flow-icon">
                  <Sparkles size={19} />
                </span>
                <div>
                  <strong>AI-assisted preparation</strong>
                  <small>Structured draft and reusable content</small>
                </div>
                <CheckCircle2 size={18} className="as-quotes-visual__check" />
              </div>

              <div className="as-quotes-visual__flow-item">
                <span className="as-quotes-visual__flow-icon">
                  <ShieldCheck size={19} />
                </span>
                <div>
                  <strong>Human approval</strong>
                  <small>Review before customer delivery</small>
                </div>
                <Clock3 size={18} className="as-quotes-visual__pending" />
              </div>
            </div>

            <div className="as-quotes-visual__footer">
              <RefreshCw size={15} />
              Designed around your existing business systems
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        id="quotes-capabilities"
        className="as-quotes-section as-quotes-capabilities"
      >
        <div className="as-quotes-container">
          <div className="as-quotes-heading">
            <span className="as-quotes-kicker">WHAT WE CAN AUTOMATE</span>
            <h2>
              From customer enquiry to
              <span> approved proposal.</span>
            </h2>
            <p>
              Connect the activities involved in preparing, reviewing and
              delivering commercial proposals without losing oversight of
              important decisions.
            </p>
          </div>

          <div className="as-quotes-card-grid">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <article className="as-quotes-card" key={title}>
                <div className="as-quotes-card__icon">
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="as-quotes-card__accent" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="as-quotes-section as-quotes-usecases">
        <div className="as-quotes-container">
          <div className="as-quotes-heading">
            <span className="as-quotes-kicker">PRACTICAL APPLICATIONS</span>
            <h2>
              Built around the way
              <span> your business sells.</span>
            </h2>
            <p>
              Quoting processes vary by industry. We tailor workflows to your
              services, customers, pricing structure and approval requirements.
            </p>
          </div>

          <div className="as-quotes-usecase-grid">
            {useCases.map(({ icon: Icon, title, text }) => (
              <article className="as-quotes-usecase" key={title}>
                <Icon size={29} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="as-quotes-section as-quotes-process">
        <div className="as-quotes-container">
          <div className="as-quotes-heading">
            <span className="as-quotes-kicker">HOW IT WORKS</span>
            <h2>
              A clear process from
              <span> request to response.</span>
            </h2>
            <p>
              We focus on repeatable workflows with appropriate validation,
              approvals and operational visibility.
            </p>
          </div>

          <div className="as-quotes-steps">
            {steps.map((step) => (
              <article className="as-quotes-step" key={step.number}>
                <span className="as-quotes-step__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="as-quotes-section as-quotes-outcomes">
        <div className="as-quotes-container as-quotes-split">
          <div className="as-quotes-outcomes__copy">
            <span className="as-quotes-kicker">CONNECTED & CONTROLLED</span>
            <h2>
              Automate preparation.
              <span> Keep control of decisions.</span>
            </h2>
            <p>
              AI can help assemble information and prepare drafts, while
              pricing, contractual commitments and customer-facing documents
              remain subject to your business rules and approval processes.
            </p>
            <Link
              to="/technology"
              className="as-quotes-text-link"
            >
              Explore our technology
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="as-quotes-outcomes__panel">
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
      <section className="as-quotes-cta">
        <div className="as-quotes-container as-quotes-cta__grid">
          <div>
            <span className="as-quotes-kicker">
              WORK WITH AUTOMATION SPECTRUM
            </span>
            <h2>
              Still preparing every quote
              <span> from scratch?</span>
            </h2>
            <p>
              Tell us how your team currently prepares quotes and proposals.
              We can explore where intelligent automation could save time,
              improve consistency and simplify your workflow.
            </p>
          </div>

          <div className="as-quotes-cta__actions">
            <button
              type="button"
              className="as-quotes-button as-quotes-button--primary"
              onClick={handleContact}
            >
              Book an AI discovery conversation
              <ArrowRight size={18} />
            </button>

            <Link
              to="/services/business-automation"
              className="as-quotes-button as-quotes-button--secondary"
            >
              Explore business automation
              <Zap size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default QuotesProposals;
