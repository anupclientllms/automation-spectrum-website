import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness, Check,
  ChevronRight, ClipboardCheck, Compass, Database, GitBranch,
  Layers3, Lightbulb, Network, Route, ShieldCheck, Sparkles,
  Target, Users, Workflow,
} from "lucide-react";
import "../styles/ai-consulting.css";

const offerings = [
  { icon: Compass, title: "AI opportunity discovery", text: "Identify high-value use cases across teams, data, documents and operational workflows." },
  { icon: Target, title: "Business case & prioritisation", text: "Assess feasibility, expected value, dependencies and delivery effort before committing to a build." },
  { icon: Layers3, title: "AI solution architecture", text: "Design practical LLM, RAG, agentic AI and integration architectures suited to your environment." },
  { icon: ShieldCheck, title: "Responsible AI & controls", text: "Plan security, data access, evaluation, human oversight and operational safeguards from the outset." },
  { icon: Workflow, title: "Proof of concept & pilot planning", text: "Define focused validation activities, success criteria and a pathway to production." },
  { icon: Route, title: "Implementation roadmap", text: "Translate findings into phased work packages, technical priorities and measurable milestones." },
];

const scenarios = [
  { icon: Database, title: "Knowledge trapped in documents", text: "Explore secure knowledge assistants that help teams find and use information more efficiently." },
  { icon: GitBranch, title: "Disconnected business systems", text: "Find opportunities to connect applications, APIs and data flows through intelligent automation." },
  { icon: Users, title: "Repetitive manual decisions", text: "Identify reviewable AI-assisted workflows that keep people accountable for important decisions." },
];

const steps = [
  { number: "01", title: "Discover", text: "Discuss business goals, pain points, current processes and available information." },
  { number: "02", title: "Assess", text: "Evaluate candidate use cases, technical readiness, risks and likely value." },
  { number: "03", title: "Design", text: "Recommend an architecture, delivery approach and clear validation measures." },
  { number: "04", title: "Advance", text: "Move into a targeted prototype, pilot or implementation plan when the case is justified." },
];

function AIConsulting({ openContactModal }) {
  const handleContact = () => {
    if (typeof openContactModal === "function") openContactModal();
    else window.location.href = "mailto:contact@automationspectrum.com.au?subject=AI%20Consulting%20Enquiry";
  };

  return (
    <main className="as-consulting-page">
      <section className="as-consulting-hero">
        <div className="as-consulting-hero__glow as-consulting-hero__glow--left" aria-hidden="true" />
        <div className="as-consulting-hero__glow as-consulting-hero__glow--right" aria-hidden="true" />
        <div className="as-consulting-container as-consulting-hero__grid">
          <div className="as-consulting-hero__copy">
            <span className="as-consulting-eyebrow"><BriefcaseBusiness size={15} /> AI CONSULTING & STRATEGY</span>
            <h1>Turn AI potential into <span>practical business value.</span></h1>
            <p>Automation Spectrum helps organisations identify where AI can make a meaningful difference, assess what is technically achievable and build a clear path from opportunity to implementation.</p>
            <div className="as-consulting-actions">
              <button className="as-consulting-button as-consulting-button--primary" type="button" onClick={handleContact}>Discuss your AI opportunity <ArrowRight size={18} /></button>
              <a className="as-consulting-button as-consulting-button--secondary" href="#consulting-services">Explore consulting services <ChevronRight size={18} /></a>
            </div>
            <div className="as-consulting-hero__highlights">
              <span><Check size={16} /> Business-first assessment</span>
              <span><Check size={16} /> Engineering-led advice</span>
              <span><Check size={16} /> Measurable outcomes</span>
            </div>
          </div>
          <div className="as-consulting-hero__visual" aria-label="AI consulting process from business opportunity to implementation">
            <div className="as-consulting-visual__halo" aria-hidden="true" />
            <div className="as-consulting-visual__header"><Sparkles size={18} /> AI OPPORTUNITY FRAMEWORK</div>
            <div className="as-consulting-visual__item"><span><Lightbulb size={22} /></span><div><strong>Business opportunity</strong><small>Problems, people & processes</small></div><span className="as-consulting-visual__index">01</span></div>
            <div className="as-consulting-visual__connector" aria-hidden="true" />
            <div className="as-consulting-visual__item"><span><BrainCircuit size={22} /></span><div><strong>AI feasibility</strong><small>Data, models & integration</small></div><span className="as-consulting-visual__index">02</span></div>
            <div className="as-consulting-visual__connector" aria-hidden="true" />
            <div className="as-consulting-visual__item"><span><ClipboardCheck size={22} /></span><div><strong>Delivery roadmap</strong><small>Priorities, risks & validation</small></div><span className="as-consulting-visual__index">03</span></div>
            <div className="as-consulting-visual__footer"><Network size={16} /> From strategy to working systems</div>
          </div>
        </div>
      </section>

      <section className="as-consulting-section as-consulting-intro">
        <div className="as-consulting-container as-consulting-split">
          <div><span className="as-consulting-kicker">WHY AI CONSULTING</span><h2>Start with the business problem, <span>not the model.</span></h2></div>
          <div className="as-consulting-intro__text"><p>AI can improve how organisations find information, support decisions and execute workflows. But not every problem requires an LLM, an autonomous agent or a new platform.</p><p>Our approach combines business discovery with hands-on software, data and AI engineering experience to help you select the right opportunities and avoid unnecessary complexity.</p><Link to="/technology" className="as-consulting-text-link">Explore our technical capabilities <ArrowUpRight size={17} /></Link></div>
        </div>
      </section>

      <section className="as-consulting-section as-consulting-services" id="consulting-services">
        <div className="as-consulting-container">
          <div className="as-consulting-heading"><span className="as-consulting-kicker">WHAT WE HELP WITH</span><h2>Practical AI advisory, from first idea to delivery plan.</h2><p>Engage us for focused discovery or for the technical direction needed to move an initiative forward.</p></div>
          <div className="as-consulting-card-grid">{offerings.map(({ icon: Icon, title, text }) => <article className="as-consulting-card" key={title}><span className="as-consulting-card__icon"><Icon size={24} /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="as-consulting-section as-consulting-usecases">
        <div className="as-consulting-container"><div className="as-consulting-heading"><span className="as-consulting-kicker">TYPICAL OPPORTUNITIES</span><h2>Where an AI strategy can create clarity.</h2><p>Common starting points for organisations exploring applied AI.</p></div>
          <div className="as-consulting-usecase-grid">{scenarios.map(({ icon: Icon, title, text }) => <article className="as-consulting-usecase" key={title}><Icon size={25} /><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="as-consulting-section as-consulting-process">
        <div className="as-consulting-container"><div className="as-consulting-heading"><span className="as-consulting-kicker">OUR APPROACH</span><h2>A clear, staged engagement.</h2><p>Start small, validate assumptions and invest further when the evidence supports it.</p></div><div className="as-consulting-steps">{steps.map(step => <article className="as-consulting-step" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div>
      </section>

      <section className="as-consulting-section as-consulting-outcomes">
        <div className="as-consulting-container as-consulting-split"><div><span className="as-consulting-kicker">POSSIBLE DELIVERABLES</span><h2>Clarity you can <span>act on.</span></h2><p>The exact scope is agreed for each engagement, rather than assuming every organisation needs the same package.</p></div><div className="as-consulting-outcomes__panel">{["Prioritised AI use cases and opportunity assessment", "Feasibility and data-readiness findings", "Recommended solution architecture", "Risk, security and human-oversight considerations", "Pilot scope, success criteria and phased roadmap"].map(item => <div key={item}><Check size={18} /><span>{item}</span></div>)}</div></div>
      </section>

      <section className="as-consulting-cta"><div className="as-consulting-container as-consulting-cta__grid"><div><span className="as-consulting-kicker">WORK WITH AUTOMATION SPECTRUM</span><h2>Have an AI idea, challenge or opportunity?</h2><p>Let's explore whether AI is the right fit and what a sensible next step could look like.</p></div><div className="as-consulting-cta__actions"><button type="button" className="as-consulting-button as-consulting-button--primary" onClick={handleContact}>Book an AI discovery conversation <ArrowRight size={18} /></button><Link to="/partners" className="as-consulting-button as-consulting-button--secondary">Explore collaboration opportunities</Link></div></div></section>
    </main>
  );
}

export default AIConsulting;
