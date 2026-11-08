import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Check, ChevronRight, Workflow,
  FileText, ReceiptText, CalendarClock, MessagesSquare,
  GitBranch, ClipboardCheck, ShieldCheck, Sparkles,
  Database, Users, Settings2, BarChart3, Zap, Network,
} from "lucide-react";
import "../styles/business-automation.css";
import SEO from "./SEO";

const capabilities = [
  { icon: ReceiptText, title: "Invoices & document workflows", text: "Capture information from invoices, receipts and forms, validate fields and prepare records for approval or accounting systems." },
  { icon: MessagesSquare, title: "Enquiries & follow-ups", text: "Route incoming enquiries, draft responses and coordinate approved follow-ups across email and CRM workflows." },
  { icon: CalendarClock, title: "Scheduling & task coordination", text: "Connect bookings, job assignments, reminders and status updates so teams spend less time chasing information." },
  { icon: GitBranch, title: "Connected business systems", text: "Move data between CRM, ERP, finance and operational applications using APIs and controlled integrations." },
  { icon: ClipboardCheck, title: "Approvals & exception handling", text: "Automatically prepare routine work while directing unusual cases, financial changes and important decisions to people." },
  { icon: BarChart3, title: "Reporting & operational visibility", text: "Consolidate activity and performance information into timely dashboards, alerts and management reports." },
];

const useCases = [
  { icon: Settings2, title: "Trades & field services", text: "Job enquiries, quote preparation, supplier invoices, work orders and appointment reminders." },
  { icon: FileText, title: "Professional services", text: "Document intake, client onboarding, information gathering, approvals and recurring reporting." },
  { icon: Database, title: "Growing SMEs & operations", text: "Purchase orders, inventory updates, exception queues and cross-system coordination." },
];

const steps = [
  { number: "01", title: "Map", text: "Understand the current workflow, bottlenecks, systems and approval points." },
  { number: "02", title: "Design", text: "Choose the simplest appropriate mix of rules, integrations and AI assistance." },
  { number: "03", title: "Validate", text: "Test with representative records, edge cases, permissions and clear success measures." },
  { number: "04", title: "Deploy", text: "Roll out with monitoring, human controls, documentation and iterative improvement." },
];

function BusinessAutomation({ openContactModal }) {
  const handleContact = () => {
    if (typeof openContactModal === "function") openContactModal();
    else window.location.href = "mailto:contact@automationspectrum.com.au?subject=Business%20Automation%20Enquiry";
  };

  return (
    <>
      <SEO
        title="Business Process Automation & AI Solutions Australia | Automation Spectrum"
        description="Streamline business operations with AI-powered workflow automation, invoice processing, CRM and ERP integrations, document management, approvals and intelligent reporting."
        path="/services/business-automation"
      />

      <main className="as-automation-page">
        <section className="as-automation-hero">
          <div className="as-automation-hero__glow as-automation-hero__glow--left" aria-hidden="true" />
          <div className="as-automation-hero__glow as-automation-hero__glow--right" aria-hidden="true" />
          <div className="as-automation-container as-automation-hero__grid">
            <div className="as-automation-hero__copy">
              <span className="as-automation-eyebrow"><Workflow size={15} /> BUSINESS AUTOMATION</span>
              <h1>Less repetitive work. <span>More time for business.</span></h1>
              <p>Automation Spectrum designs and builds intelligent workflows that connect your systems, streamline everyday processes and keep your people in control of important decisions.</p>
              <div className="as-automation-actions">
                <button type="button" className="as-automation-button as-automation-button--primary" onClick={handleContact}>Discuss an automation opportunity <ArrowRight size={18} /></button>
                <a className="as-automation-button as-automation-button--secondary" href="#automation-capabilities">Explore capabilities <ChevronRight size={18} /></a>
              </div>
              <div className="as-automation-hero__highlights">
                <span><Check size={16} /> Reduce repetitive administration</span>
                <span><Check size={16} /> Connect existing tools</span>
                <span><Check size={16} /> Human approval where needed</span>
              </div>
            </div>
            <div className="as-automation-hero__visual" aria-label="Illustrative business automation workflow">
              <div className="as-automation-visual__halo" aria-hidden="true" />
              <div className="as-automation-visual__header"><Sparkles size={18} /> CONNECTED WORKFLOW</div>
              <div className="as-automation-visual__item"><span><ReceiptText size={22} /></span><div><strong>Incoming request or document</strong><small>Email, form, invoice or job request</small></div><span className="as-automation-visual__index">01</span></div>
              <div className="as-automation-visual__connector" aria-hidden="true" />
              <div className="as-automation-visual__item"><span><Workflow size={22} /></span><div><strong>Automated processing</strong><small>Extract, validate, route and prepare</small></div><span className="as-automation-visual__index">02</span></div>
              <div className="as-automation-visual__connector" aria-hidden="true" />
              <div className="as-automation-visual__item"><span><Users size={22} /></span><div><strong>Review and connected action</strong><small>Approve, update systems and notify</small></div><span className="as-automation-visual__index">03</span></div>
              <div className="as-automation-visual__footer"><Network size={16} /> Your existing systems, working together</div>
            </div>
          </div>
        </section>

        <section className="as-automation-section as-automation-intro">
          <div className="as-automation-container as-automation-split">
            <div><span className="as-automation-kicker">WHY AUTOMATE</span><h2>Make everyday processes <span>work better.</span></h2></div>
            <div className="as-automation-intro__text">
              <p>Many teams spend valuable time copying data, sorting emails, updating spreadsheets, following up on approvals and moving information between applications.</p>
              <p>We help identify repetitive work that can be simplified with existing software, integrations, rules-based automation or AI-assisted processing. The right approach depends on your business, data and systems—not on adding AI everywhere.</p>
              <Link to="/services/ai-consulting" className="as-automation-text-link">Explore AI consulting & strategy <ArrowUpRight size={17} /></Link>
            </div>
          </div>
        </section>

        <section className="as-automation-section as-automation-services" id="automation-capabilities">
          <div className="as-automation-container">
            <div className="as-automation-heading"><span className="as-automation-kicker">WHAT WE AUTOMATE</span><h2>Practical automation across your business.</h2><p>From a single time-consuming task to a connected workflow spanning multiple systems.</p></div>
            <div className="as-automation-card-grid">{capabilities.map(({ icon: Icon, title, text }) => <article className="as-automation-card" key={title}><span className="as-automation-card__icon"><Icon size={24} /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section className="as-automation-section as-automation-usecases">
          <div className="as-automation-container">
            <div className="as-automation-heading"><span className="as-automation-kicker">BUSINESS EXAMPLES</span><h2>Useful for small teams and complex operations.</h2><p>Illustrative opportunities across different business environments—not claims of completed client deployments.</p></div>
            <div className="as-automation-usecase-grid">{useCases.map(({ icon: Icon, title, text }) => <article className="as-automation-usecase" key={title}><Icon size={25} /><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section className="as-automation-section as-automation-process">
          <div className="as-automation-container">
            <div className="as-automation-heading"><span className="as-automation-kicker">HOW WE DELIVER</span><h2>Start with one workflow. Prove the value.</h2><p>We aim for reliable automation with clear ownership, rather than automating an inefficient process unchanged.</p></div>
            <div className="as-automation-steps">{steps.map(step => <article className="as-automation-step" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
          </div>
        </section>

        <section className="as-automation-section as-automation-outcomes">
          <div className="as-automation-container as-automation-split">
            <div><span className="as-automation-kicker">WHAT A SOLUTION CAN INCLUDE</span><h2>Connected workflows with <span>the right controls.</span></h2><p>We scope the integration and operating requirements for each business, including what should remain subject to human review.</p></div>
            <div className="as-automation-outcomes__panel">{[
              "Workflow mapping and automation opportunities",
              "Integration with existing applications and APIs",
              "Document extraction, validation and exception queues",
              "Role-based approvals and audit-friendly activity records",
              "Monitoring, testing, handover and ongoing improvements",
            ].map(item => <div key={item}><Check size={18} /><span>{item}</span></div>)}</div>
          </div>
        </section>

        <section className="as-automation-cta">
          <div className="as-automation-container as-automation-cta__grid">
            <div><span className="as-automation-kicker">WORK WITH AUTOMATION SPECTRUM</span><h2>What manual task slows your team down?</h2><p>Tell us about your current process. We can explore whether automation is worthwhile and how to start.</p></div>
            <div className="as-automation-cta__actions"><button type="button" className="as-automation-button as-automation-button--primary" onClick={handleContact}>Book an AI discovery conversation <ArrowRight size={18} /></button><Link to="/technology" className="as-automation-button as-automation-button--secondary">Explore our technology <Zap size={17} /></Link></div>
          </div>
        </section>
      </main>
    
    
    </>
    
  );
}

export default BusinessAutomation;
