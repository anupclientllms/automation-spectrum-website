import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Bot, BrainCircuit, Check, ChevronRight,
  Database, FileSearch, GitBranch, Layers3, LockKeyhole, MessageSquareText,
  Network, SearchCheck, ShieldCheck, Sparkles, Workflow, Zap,
} from "lucide-react";
import "../styles/generative-ai.css";

const offerings = [
  { icon: MessageSquareText, title: "Enterprise AI Assistants", description: "Conversational assistants that help teams find information, complete routine tasks and work with internal business knowledge." },
  { icon: FileSearch, title: "RAG & Knowledge Systems", description: "Retrieval-augmented generation over approved documents and data sources, with citations, access controls and evaluation." },
  { icon: Bot, title: "AI Agents & Orchestration", description: "Tool-using agents and coordinated workflows for defined business processes, with clear permissions and human checkpoints." },
  { icon: Workflow, title: "Intelligent Workflow Automation", description: "Connect language models to business applications, APIs and approval workflows to reduce repetitive manual effort." },
  { icon: LockKeyhole, title: "Private & Domain-Specific AI", description: "Architecture choices for secure deployment, model selection, data boundaries and integration with enterprise systems." },
  { icon: SearchCheck, title: "Evaluation & AI Reliability", description: "Test answer quality, retrieval performance, cost, latency and failure modes before expanding into production." },
];

const useCases = [
  { title: "Knowledge discovery", description: "Search policies, manuals, contracts and internal documentation through a governed assistant." },
  { title: "Document-intensive operations", description: "Extract, classify and review information from forms, reports and business correspondence." },
  { title: "Customer and employee support", description: "Assist service teams with relevant answers, summaries and next-step recommendations." },
  { title: "Cross-system workflows", description: "Coordinate approved actions across CRMs, service platforms, databases and internal APIs." },
];

const steps = [
  { number: "01", title: "Discover", description: "Identify the workflow, users, data sources, risks and measurable success criteria." },
  { number: "02", title: "Design", description: "Select models, retrieval patterns, agent tools, integrations and governance controls." },
  { number: "03", title: "Validate", description: "Build a focused prototype and evaluate quality, security, performance and usability." },
  { number: "04", title: "Deploy & improve", description: "Integrate into business systems, monitor outcomes and improve with real feedback." },
];

const capabilities = [
  "LLM integration and model selection",
  "Retrieval pipelines and vector search",
  "Knowledge ingestion and data connectors",
  "Agent tools and workflow orchestration",
  "Python, APIs and enterprise integration",
  "Human approval and auditability",
  "Quality evaluation and observability",
  "Cloud and private deployment patterns",
];

export default function GenerativeAI({ openContactModal }) {
  const handleContact = () => {
    if (typeof openContactModal === "function") openContactModal();
    else window.location.href = "mailto:contact@automationspectrum.com.au?subject=Generative%20AI%20project%20enquiry";
  };

  return (
    <main className="as-genai-page">
      <section className="as-genai-hero">
        <div className="as-genai-hero__glow as-genai-hero__glow--left" />
        <div className="as-genai-hero__glow as-genai-hero__glow--right" />
        <div className="as-genai-container as-genai-hero__layout">
          <div className="as-genai-hero__content">
            <span className="as-genai-eyebrow"><Sparkles size={15} /> GENERATIVE AI & AGENTS</span>
            <h1>Generative AI built for <span>real business workflows.</span></h1>
            <p>Move beyond isolated AI demos. Automation Spectrum designs and engineers enterprise assistants, knowledge systems and AI-enabled workflows that connect with your existing information, applications and teams.</p>
            <div className="as-genai-actions">
              <button type="button" onClick={handleContact} className="as-genai-button as-genai-button--primary">Discuss a GenAI project <ArrowRight size={18} /></button>
              <a href="#genai-solutions" className="as-genai-button as-genai-button--secondary">Explore solutions <ChevronRight size={18} /></a>
            </div>
            <div className="as-genai-hero__highlights">
              <span><Check size={16} /> Enterprise integration</span>
              <span><Check size={16} /> Human oversight</span>
              <span><Check size={16} /> Measurable outcomes</span>
            </div>
          </div>
          <div className="as-genai-visual" aria-label="Enterprise knowledge connected to AI models, agents and human review">
            <div className="as-genai-visual__halo" />
            <div className="as-genai-visual__core"><BrainCircuit size={42} /><strong>Enterprise GenAI</strong><small>Knowledge · Models · Agents</small></div>
            <div className="as-genai-visual__node as-genai-visual__node--data"><Database size={21} /><span><strong>Business knowledge</strong><small>Documents & systems</small></span></div>
            <div className="as-genai-visual__node as-genai-visual__node--agents"><Bot size={21} /><span><strong>AI agents</strong><small>Tools & workflows</small></span></div>
            <div className="as-genai-visual__node as-genai-visual__node--trust"><ShieldCheck size={21} /><span><strong>Human oversight</strong><small>Review & control</small></span></div>
          </div>
        </div>
      </section>

      <section className="as-genai-section as-genai-section--solutions" id="genai-solutions">
        <div className="as-genai-container">
          <div className="as-genai-heading"><span className="as-genai-kicker">WHAT WE BUILD</span><h2>Practical Generative AI solutions</h2><p>Purpose-built capabilities that fit the way your organisation works—not generic chat interfaces disconnected from business operations.</p></div>
          <div className="as-genai-card-grid">
            {offerings.map(({ icon: Icon, title, description }) => <article className="as-genai-card" key={title}><div className="as-genai-card__icon"><Icon size={25} /></div><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="as-genai-section as-genai-section--approach">
        <div className="as-genai-container as-genai-split">
          <div><span className="as-genai-kicker">ENGINEERED, NOT JUST PROMPTED</span><h2>Grounded answers. Controlled actions. Connected systems.</h2><p>Reliable enterprise GenAI depends on more than a powerful model. It requires the right context, integration architecture, evaluation and operational controls.</p><p>We combine retrieval, structured business data, application APIs and human approval points so AI can support meaningful work while staying within defined boundaries.</p><Link className="as-genai-text-link" to="/technology">Explore our technology <ArrowUpRight size={17} /></Link></div>
          <div className="as-genai-architecture">
            <div><Database size={20} /><span>Approved enterprise information</span></div>
            <span className="as-genai-architecture__connector"><GitBranch size={20} /></span>
            <div><Layers3 size={20} /><span>Retrieval, context & model layer</span></div>
            <span className="as-genai-architecture__connector"><Network size={20} /></span>
            <div><Bot size={20} /><span>Assistants, agents & integrations</span></div>
            <span className="as-genai-architecture__connector"><ShieldCheck size={20} /></span>
            <div><ShieldCheck size={20} /><span>Evaluation, permissions & human review</span></div>
          </div>
        </div>
      </section>

      <section className="as-genai-section as-genai-section--cases">
        <div className="as-genai-container"><div className="as-genai-heading"><span className="as-genai-kicker">BUSINESS APPLICATIONS</span><h2>Where Generative AI can add value</h2><p>We prioritise use cases with identifiable users, accessible data and a clear way to assess business benefit.</p></div>
          <div className="as-genai-usecases">{useCases.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
        </div>
      </section>

      <section className="as-genai-section as-genai-section--delivery">
        <div className="as-genai-container"><div className="as-genai-heading"><span className="as-genai-kicker">HOW WE WORK</span><h2>From opportunity to production</h2><p>Start with a focused problem, validate the approach and expand only when the solution demonstrates value.</p></div>
          <div className="as-genai-steps">{steps.map(step => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
        </div>
      </section>

      <section className="as-genai-section as-genai-section--capabilities">
        <div className="as-genai-container as-genai-split"><div><span className="as-genai-kicker">TECHNICAL DELIVERY</span><h2>Engineering capability behind the experience</h2><p>Our approach combines AI application development with the software architecture, integration and deployment expertise needed for enterprise use.</p><Link className="as-genai-text-link" to="/services/ai-consulting">Need a strategy first? Explore AI Consulting <ArrowRight size={17} /></Link></div>
          <div className="as-genai-checklist">{capabilities.map(item => <div key={item}><Check size={17} /><span>{item}</span></div>)}</div>
        </div>
      </section>

      <section className="as-genai-cta"><div className="as-genai-container as-genai-cta__layout"><div><span className="as-genai-kicker">WORK WITH AUTOMATION SPECTRUM</span><h2>Have a Generative AI opportunity in mind?</h2><p>Tell us about your workflow, data and business goals. We can help assess a practical starting point and the right implementation approach.</p></div><button type="button" onClick={handleContact} className="as-genai-button as-genai-button--primary">Start a conversation <ArrowRight size={18} /></button></div></section>
    </main>
  );
}
