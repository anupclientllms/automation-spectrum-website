
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Check,
  Files,
  FileSearch,
  FileText,
  FileCheck2,
  FileClock,
  ScanText,
  Sparkles,
  Database,
  ShieldCheck,
  Workflow,
  CheckCircle2,
  Clock3,
  BookOpen,
  GitCompare,
  FolderSearch,
  BellRing,
  RefreshCw,
  Zap,
} from "lucide-react";

import "../styles/documents-contracts.css";
import SEO from "./SEO";

const capabilities = [
  {
    icon: FolderSearch,
    title: "Intelligent document search",
    text: "Find relevant information across approved documents and knowledge repositories using natural-language search.",
  },
  {
    icon: ScanText,
    title: "Document data extraction",
    text: "Extract structured information from contracts, forms, PDFs and business documents for validation and downstream workflows.",
  },
  {
    icon: FileSearch,
    title: "Contract intelligence",
    text: "Identify important clauses, obligations, dates, commercial terms and potential review items in contractual documents.",
  },
  {
    icon: GitCompare,
    title: "Document comparison",
    text: "Compare document versions, highlight changes and prepare structured summaries to support efficient review.",
  },
  {
    icon: Workflow,
    title: "Review & approval workflows",
    text: "Coordinate document reviews, approvals, exception handling and authorised sign-off across relevant teams.",
  },
  {
    icon: BellRing,
    title: "Obligation & renewal tracking",
    text: "Track important contract dates, renewal windows, review milestones and follow-up activities.",
  },
];

const useCases = [
  {
    icon: FileCheck2,
    title: "Contracts & agreements",
    text: "Support contract review, clause identification, obligation tracking, version comparison and approval coordination.",
  },
  {
    icon: BookOpen,
    title: "Policies & knowledge documents",
    text: "Help employees locate relevant information across internal policies, procedures, manuals and approved knowledge sources.",
  },
  {
    icon: FileText,
    title: "Business document processing",
    text: "Extract, classify and validate information from forms, supplier documents, applications and operational records.",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect",
    text: "Connect approved document repositories, business systems and relevant information sources.",
  },
  {
    number: "02",
    title: "Understand",
    text: "Classify documents, extract key information and retrieve relevant content using intelligent processing.",
  },
  {
    number: "03",
    title: "Review",
    text: "Present findings, comparisons and potential exceptions for validation by authorised team members.",
  },
  {
    number: "04",
    title: "Act",
    text: "Coordinate approved updates, reminders, document routing and connected business workflows.",
  },
];

const outcomes = [
  "Faster access to relevant business information",
  "Reduced manual document reading and data entry",
  "Clearer visibility into contractual dates and obligations",
  "Consistent document review and approval processes",
  "Integration with existing repositories and business systems",
  "Human validation for legal and commercial decisions",
];

function DocumentsContracts({ openContactModal }) {
  const handleContact = () => {
    if (typeof openContactModal === "function") {
      openContactModal();
    } else {
      window.location.href =
        "mailto:contact@automationspectrum.com.au?subject=Documents%20and%20Contracts%20Automation%20Enquiry";
    }
  };

  return (
    <>

    
      <SEO
        title="AI Document Processing & Contract Automation | Automation Spectrum"
        description="Streamline document and contract workflows with AI-powered data extraction, contract analysis, document classification, intelligent search, approval automation and human review."
        path="/solutions/documents-contracts"
      />

      <main className="as-documents-page">
        {/* HERO */}
        <section className="as-documents-hero">
          <div
            className="as-documents-glow as-documents-glow--left"
            aria-hidden="true"
          />
          <div
            className="as-documents-glow as-documents-glow--right"
            aria-hidden="true"
          />

          <div className="as-documents-container as-documents-hero__grid">
            <div className="as-documents-hero__copy">
              <span className="as-documents-eyebrow">
                <Files size={15} />
                DOCUMENTS & CONTRACTS
              </span>

              <h1>
                Find information faster.
                <span> Manage documents smarter.</span>
              </h1>

              <p>
                Automation Spectrum helps businesses streamline document
                processing, contract review and knowledge retrieval
                using intelligent AI workflows, connected information
                and human-controlled approvals.
              </p>

              <div className="as-documents-actions">
                <button
                  type="button"
                  className="as-documents-button as-documents-button--primary"
                  onClick={handleContact}
                >
                  Discuss your document workflows
                  <ArrowRight size={18} />
                </button>

                <a
                  href="#documents-capabilities"
                  className="as-documents-button as-documents-button--secondary"
                >
                  Explore capabilities
                  <ChevronRight size={18} />
                </a>
              </div>

              <div className="as-documents-highlights">
                <span>
                  <Check size={16} />
                  Intelligent search
                </span>
                <span>
                  <Check size={16} />
                  Faster document reviews
                </span>
                <span>
                  <Check size={16} />
                  Human oversight
                </span>
              </div>
            </div>

            {/* ILLUSTRATIVE DOCUMENT INTELLIGENCE WORKFLOW */}
            <div
              className="as-documents-visual"
              aria-label="Illustrative AI-assisted document and contract intelligence workflow"
            >
              <div className="as-documents-visual__top">
                <span>
                  <Sparkles size={17} />
                  DOCUMENT INTELLIGENCE
                </span>
                <span className="as-documents-visual__demo">
                  ILLUSTRATIVE
                </span>
              </div>

              <div className="as-documents-preview">
                <div className="as-documents-preview__header">
                  <span className="as-documents-preview__icon">
                    <FileText size={23} />
                  </span>

                  <div>
                    <strong>Service Agreement</strong>
                    <small>Example contract review</small>
                  </div>

                  <span className="as-documents-preview__badge">
                    REVIEW
                  </span>
                </div>

                <div className="as-documents-preview__content">
                  <div className="as-documents-preview__line as-documents-preview__line--wide" />
                  <div className="as-documents-preview__line" />
                  <div className="as-documents-preview__line as-documents-preview__line--medium" />

                  <div className="as-documents-preview__highlight">
                    <span>
                      <Sparkles size={14} />
                      AI-ASSISTED EXTRACTION
                    </span>

                    <div className="as-documents-preview__detail">
                      <span>Document type</span>
                      <strong>Service agreement</strong>
                    </div>

                    <div className="as-documents-preview__detail">
                      <span>Renewal provision</span>
                      <strong>Identified for review</strong>
                    </div>

                    <div className="as-documents-preview__detail">
                      <span>Approval status</span>
                      <strong>Human review required</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="as-documents-visual__workflow">
                <div className="as-documents-visual__workflow-item">
                  <span className="as-documents-visual__workflow-icon">
                    <Database size={19} />
                  </span>
                  <div>
                    <strong>Document connected</strong>
                    <small>Approved business repository</small>
                  </div>
                  <CheckCircle2
                    size={18}
                    className="as-documents-visual__check"
                  />
                </div>

                <div className="as-documents-visual__workflow-item">
                  <span className="as-documents-visual__workflow-icon">
                    <FileSearch size={19} />
                  </span>
                  <div>
                    <strong>Key information identified</strong>
                    <small>Clauses, dates and obligations</small>
                  </div>
                  <CheckCircle2
                    size={18}
                    className="as-documents-visual__check"
                  />
                </div>

                <div className="as-documents-visual__workflow-item">
                  <span className="as-documents-visual__workflow-icon">
                    <ShieldCheck size={19} />
                  </span>
                  <div>
                    <strong>Authorised review</strong>
                    <small>Findings awaiting validation</small>
                  </div>
                  <Clock3
                    size={18}
                    className="as-documents-visual__pending"
                  />
                </div>
              </div>

              <div className="as-documents-visual__footer">
                <RefreshCw size={15} />
                Connected documents, reviews and business workflows
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section
          id="documents-capabilities"
          className="as-documents-section as-documents-capabilities"
        >
          <div className="as-documents-container">
            <div className="as-documents-heading">
              <span className="as-documents-kicker">
                INTELLIGENT DOCUMENT OPERATIONS
              </span>

              <h2>
                Turn business documents into
                <span> accessible information.</span>
              </h2>

              <p>
                Reduce repetitive document handling while improving
                how your teams search, extract, compare, review
                and act on business information.
              </p>
            </div>

            <div className="as-documents-card-grid">
              {capabilities.map(({ icon: Icon, title, text }) => (
                <article className="as-documents-card" key={title}>
                  <div className="as-documents-card__icon">
                    <Icon size={24} />
                  </div>

                  <h3>{title}</h3>
                  <p>{text}</p>

                  <span
                    className="as-documents-card__accent"
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="as-documents-section as-documents-usecases">
          <div className="as-documents-container">
            <div className="as-documents-heading">
              <span className="as-documents-kicker">
                PRACTICAL APPLICATIONS
              </span>

              <h2>
                Built for information-heavy
                <span> business processes.</span>
              </h2>

              <p>
                From contracts and policies to operational documents,
                we design intelligent workflows around the information
                your business needs to manage.
              </p>
            </div>

            <div className="as-documents-usecase-grid">
              {useCases.map(({ icon: Icon, title, text }) => (
                <article
                  className="as-documents-usecase"
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
        <section className="as-documents-section as-documents-process">
          <div className="as-documents-container">
            <div className="as-documents-heading">
              <span className="as-documents-kicker">
                HOW IT WORKS
              </span>

              <h2>
                From document discovery to
                <span> controlled action.</span>
              </h2>

              <p>
                We combine document processing, information retrieval,
                business rules and human validation to support
                reliable operational workflows.
              </p>
            </div>

            <div className="as-documents-steps">
              {steps.map((step) => (
                <article
                  className="as-documents-step"
                  key={step.number}
                >
                  <span className="as-documents-step__number">
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
        <section className="as-documents-section as-documents-outcomes">
          <div className="as-documents-container as-documents-split">
            <div className="as-documents-outcomes__copy">
              <span className="as-documents-kicker">
                CONNECTED & CONTROLLED
              </span>

              <h2>
                Automate document handling.
                <span> Keep decisions accountable.</span>
              </h2>

              <p>
                AI can assist with document search, extraction,
                summaries and clause identification. Important legal,
                financial and commercial interpretations should remain
                subject to qualified human review and approval.
              </p>

              <Link
                to="/technology"
                className="as-documents-text-link"
              >
                Explore our technology
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="as-documents-outcomes__panel">
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
        <section className="as-documents-cta">
          <div className="as-documents-container as-documents-cta__grid">
            <div>
              <span className="as-documents-kicker">
                WORK WITH AUTOMATION SPECTRUM
              </span>

              <h2>
                Spending too much time
                <span> searching and reviewing documents?</span>
              </h2>

              <p>
                Tell us about your document and contract workflows.
                We can explore opportunities to simplify information
                retrieval, reduce repetitive processing and connect
                your existing business systems.
              </p>
            </div>

            <div className="as-documents-cta__actions">
              <button
                type="button"
                className="as-documents-button as-documents-button--primary"
                onClick={handleContact}
              >
                Book an AI discovery conversation
                <ArrowRight size={18} />
              </button>

              <Link
                to="/services/business-automation"
                className="as-documents-button as-documents-button--secondary"
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

export default DocumentsContracts;
