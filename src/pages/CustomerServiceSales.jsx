
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Check,
  MessagesSquare,
  Bot,
  Sparkles,
  Database,
  Users,
  Clock3,
  ShieldCheck,
  Workflow,
  Send,
  BarChart3,
  CheckCircle2,
  Headphones,
  UserRoundCheck,
  MessageCircle,
  GitBranch,
  Zap,
  Inbox,
  Target,
  RefreshCw,
} from "lucide-react";

import "../styles/customer-service-sales.css";
import SEO from "./SEO";

const capabilities = [
  {
    icon: Bot,
    title: "AI customer assistants",
    text: "Help customers find answers to common questions using approved business knowledge, product information and support content.",
  },
  {
    icon: Inbox,
    title: "Intelligent enquiry management",
    text: "Capture and categorise incoming enquiries, identify priorities and route requests to the appropriate teams.",
  },
  {
    icon: Target,
    title: "Lead qualification",
    text: "Collect relevant customer requirements, identify potential sales opportunities and prepare structured information for your sales team.",
  },
  {
    icon: Database,
    title: "CRM integration",
    text: "Connect customer conversations, enquiry details and follow-up activities with existing CRM and business systems.",
  },
  {
    icon: Send,
    title: "Sales follow-ups",
    text: "Prepare personalised follow-up drafts, coordinate reminders and support approved customer communications.",
  },
  {
    icon: BarChart3,
    title: "Customer and sales intelligence",
    text: "Identify enquiry trends, common customer issues, response bottlenecks and opportunities to improve service.",
  },
];

const useCases = [
  {
    icon: Headphones,
    title: "Customer support teams",
    text: "Assist with FAQs, service enquiries, ticket classification, knowledge retrieval and escalation to support staff.",
  },
  {
    icon: Users,
    title: "Sales and business development",
    text: "Capture leads, qualify opportunities, maintain CRM records and coordinate customer follow-ups.",
  },
  {
    icon: GitBranch,
    title: "Service-based businesses",
    text: "Manage enquiries, service requests, appointments and customer communications across connected workflows.",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect",
    text: "Bring together customer communication channels, business knowledge and relevant CRM information.",
  },
  {
    number: "02",
    title: "Understand",
    text: "Classify enquiries, identify customer intent and retrieve relevant information from approved sources.",
  },
  {
    number: "03",
    title: "Assist",
    text: "Prepare responses, create tasks, update records and involve staff where human judgement is needed.",
  },
  {
    number: "04",
    title: "Improve",
    text: "Monitor outcomes, review exceptions and refine workflows using operational feedback.",
  },
];

const outcomes = [
  "Faster handling of routine customer enquiries",
  "Consistent responses grounded in approved information",
  "Better lead capture and qualification",
  "Connected CRM records and follow-up activities",
  "Human escalation for sensitive or complex requests",
  "Improved visibility into customer service performance",
];

function CustomerServiceSales({ openContactModal }) {
  const handleContact = () => {
    if (typeof openContactModal === "function") {
      openContactModal();
    } else {
      window.location.href =
        "mailto:contact@automationspectrum.com.au?subject=Customer%20Service%20and%20Sales%20Automation%20Enquiry";
    }
  };

  return (
    <>
    
      <SEO
        title="AI Customer Service & Sales Automation | Automation Spectrum"
        description="Improve customer service and sales with AI-powered assistants, automated enquiry handling, lead qualification, CRM integration, intelligent follow-ups and customer support workflows."
        path="/solutions/customer-service-sales"
      />


      <main className="as-cssales-page">
        {/* HERO */}
        <section className="as-cssales-hero">
          <div
            className="as-cssales-glow as-cssales-glow--left"
            aria-hidden="true"
          />
          <div
            className="as-cssales-glow as-cssales-glow--right"
            aria-hidden="true"
          />

          <div className="as-cssales-container as-cssales-hero__grid">
            <div className="as-cssales-hero__copy">
              <span className="as-cssales-eyebrow">
                <MessagesSquare size={15} />
                CUSTOMER SERVICE & SALES
              </span>

              <h1>
                Better conversations.
                <span> Smarter customer workflows.</span>
              </h1>

              <p>
                Automation Spectrum helps businesses connect customer
                service, sales and CRM workflows using intelligent AI
                assistants, automation and human-controlled processes.
              </p>

              <div className="as-cssales-actions">
                <button
                  type="button"
                  className="as-cssales-button as-cssales-button--primary"
                  onClick={handleContact}
                >
                  Discuss your customer workflows
                  <ArrowRight size={18} />
                </button>

                <a
                  href="#customer-sales-capabilities"
                  className="as-cssales-button as-cssales-button--secondary"
                >
                  Explore capabilities
                  <ChevronRight size={18} />
                </a>
              </div>

              <div className="as-cssales-highlights">
                <span>
                  <Check size={16} />
                  Faster responses
                </span>
                <span>
                  <Check size={16} />
                  Connected customer data
                </span>
                <span>
                  <Check size={16} />
                  Human oversight
                </span>
              </div>
            </div>

            {/* ILLUSTRATIVE CUSTOMER WORKFLOW */}
            <div
              className="as-cssales-visual"
              aria-label="Illustrative AI-assisted customer service and sales workflow"
            >
              <div className="as-cssales-visual__top">
                <span>
                  <Sparkles size={17} />
                  CUSTOMER INTELLIGENCE
                </span>
                <span className="as-cssales-visual__demo">
                  ILLUSTRATIVE
                </span>
              </div>

              <div className="as-cssales-chat">
                <div className="as-cssales-chat__header">
                  <span className="as-cssales-chat__avatar">
                    <Bot size={23} />
                  </span>

                  <div>
                    <strong>AI Customer Assistant</strong>
                    <small>Connected to approved business knowledge</small>
                  </div>

                  <span className="as-cssales-chat__indicator" />
                </div>

                <div className="as-cssales-chat__messages">
                  <div className="as-cssales-chat__message as-cssales-chat__message--customer">
                    <span>Customer enquiry</span>
                    <p>
                      I'd like to know more about your services and
                      request a consultation.
                    </p>
                  </div>

                  <div className="as-cssales-chat__message as-cssales-chat__message--assistant">
                    <span>
                      <Sparkles size={13} />
                      AI-assisted response
                    </span>
                    <p>
                      I can help with information about our services
                      and collect a few details for the team.
                    </p>
                  </div>
                </div>

                <div className="as-cssales-chat__status">
                  <CheckCircle2 size={16} />
                  Enquiry captured for follow-up
                </div>
              </div>

              <div className="as-cssales-visual__workflow">
                <div className="as-cssales-visual__workflow-item">
                  <span className="as-cssales-visual__workflow-icon">
                    <MessageCircle size={19} />
                  </span>
                  <div>
                    <strong>Enquiry classified</strong>
                    <small>Consultation request</small>
                  </div>
                  <CheckCircle2
                    size={18}
                    className="as-cssales-visual__check"
                  />
                </div>

                <div className="as-cssales-visual__workflow-item">
                  <span className="as-cssales-visual__workflow-icon">
                    <Database size={19} />
                  </span>
                  <div>
                    <strong>CRM workflow</strong>
                    <small>Lead record prepared</small>
                  </div>
                  <CheckCircle2
                    size={18}
                    className="as-cssales-visual__check"
                  />
                </div>

                <div className="as-cssales-visual__workflow-item">
                  <span className="as-cssales-visual__workflow-icon">
                    <UserRoundCheck size={19} />
                  </span>
                  <div>
                    <strong>Sales team follow-up</strong>
                    <small>Assigned for human review</small>
                  </div>
                  <Clock3
                    size={18}
                    className="as-cssales-visual__pending"
                  />
                </div>
              </div>

              <div className="as-cssales-visual__footer">
                <RefreshCw size={15} />
                Connected conversations and business workflows
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section
          id="customer-sales-capabilities"
          className="as-cssales-section as-cssales-capabilities"
        >
          <div className="as-cssales-container">
            <div className="as-cssales-heading">
              <span className="as-cssales-kicker">
                INTELLIGENT CUSTOMER OPERATIONS
              </span>

              <h2>
                Connect every enquiry with
                <span> the right next action.</span>
              </h2>

              <p>
                From answering routine questions to qualifying leads
                and coordinating sales activities, intelligent workflows
                help teams respond consistently and stay organised.
              </p>
            </div>

            <div className="as-cssales-card-grid">
              {capabilities.map(({ icon: Icon, title, text }) => (
                <article className="as-cssales-card" key={title}>
                  <div className="as-cssales-card__icon">
                    <Icon size={24} />
                  </div>

                  <h3>{title}</h3>
                  <p>{text}</p>

                  <span
                    className="as-cssales-card__accent"
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="as-cssales-section as-cssales-usecases">
          <div className="as-cssales-container">
            <div className="as-cssales-heading">
              <span className="as-cssales-kicker">
                PRACTICAL APPLICATIONS
              </span>

              <h2>
                Designed for teams that
                <span> work with customers.</span>
              </h2>

              <p>
                Different businesses have different customer journeys.
                We design solutions around your existing communication
                channels, systems and operating processes.
              </p>
            </div>

            <div className="as-cssales-usecase-grid">
              {useCases.map(({ icon: Icon, title, text }) => (
                <article className="as-cssales-usecase" key={title}>
                  <Icon size={29} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="as-cssales-section as-cssales-process">
          <div className="as-cssales-container">
            <div className="as-cssales-heading">
              <span className="as-cssales-kicker">
                HOW IT WORKS
              </span>

              <h2>
                From first contact to
                <span> meaningful follow-up.</span>
              </h2>

              <p>
                We combine business knowledge, integrations and
                controlled AI workflows to support customer-facing
                teams throughout the engagement process.
              </p>
            </div>

            <div className="as-cssales-steps">
              {steps.map((step) => (
                <article
                  className="as-cssales-step"
                  key={step.number}
                >
                  <span className="as-cssales-step__number">
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
        <section className="as-cssales-section as-cssales-outcomes">
          <div className="as-cssales-container as-cssales-split">
            <div className="as-cssales-outcomes__copy">
              <span className="as-cssales-kicker">
                AI WITH HUMAN OVERSIGHT
              </span>

              <h2>
                Automate routine interactions.
                <span> Strengthen human relationships.</span>
              </h2>

              <p>
                AI can help retrieve information, draft responses,
                classify enquiries and coordinate tasks. Complex
                customer issues, commercial commitments and sensitive
                decisions can remain with authorised staff.
              </p>

              <Link
                to="/technology"
                className="as-cssales-text-link"
              >
                Explore our technology
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="as-cssales-outcomes__panel">
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
        <section className="as-cssales-cta">
          <div className="as-cssales-container as-cssales-cta__grid">
            <div>
              <span className="as-cssales-kicker">
                WORK WITH AUTOMATION SPECTRUM
              </span>

              <h2>
                Ready to improve your
                <span> customer experience?</span>
              </h2>

              <p>
                Tell us about your customer service and sales
                processes. We can explore opportunities to reduce
                repetitive work, improve response times and connect
                your existing business systems.
              </p>
            </div>

            <div className="as-cssales-cta__actions">
              <button
                type="button"
                className="as-cssales-button as-cssales-button--primary"
                onClick={handleContact}
              >
                Book an AI discovery conversation
                <ArrowRight size={18} />
              </button>

              <Link
                to="/services/business-automation"
                className="as-cssales-button as-cssales-button--secondary"
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

export default CustomerServiceSales;
