import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Check, ChevronRight, Code2, Layers3,
  Database, Cloud, PlugZap, ShieldCheck, GitBranch, Gauge,
  Workflow, Boxes, ClipboardCheck, Sparkles, Network, Zap,
  Settings2, ServerCog, Users,
} from "lucide-react";
import "../styles/software-engineering.css";
import SEO from "./SEO";

const capabilities = [
  { icon: Layers3, title: "Custom web applications", text: "Purpose-built portals, operational dashboards and business applications designed around your processes and users." },
  { icon: PlugZap, title: "API & system integration", text: "Connect CRMs, ERPs, finance tools and third-party platforms through secure APIs and dependable data flows." },
  { icon: Database, title: "Backend engineering & data", text: "Robust services, database design, business logic and data pipelines built for maintainability and growth." },
  { icon: Cloud, title: "Cloud platforms & deployment", text: "Application architecture, cloud infrastructure, CI/CD pipelines, observability and release processes." },
  { icon: GitBranch, title: "Modernisation & extensions", text: "Improve existing software, replace manual processes and extend legacy systems without unnecessary disruption." },
  { icon: ShieldCheck, title: "Security & reliability", text: "Authentication, role-based access, testing, monitoring and operational safeguards appropriate to the project." },
];

const useCases = [
  { icon: Settings2, title: "Growing businesses", text: "Customer and supplier portals, job management, approval workflows and integrated reporting." },
  { icon: Boxes, title: "Industrial & operational teams", text: "Equipment-data integration, asset dashboards, workflow systems and operational visibility." },
  { icon: Users, title: "Enterprise & technology teams", text: "API development, application modernisation, modular frontends and specialist engineering delivery." },
];

const steps = [
  { number: "01", title: "Discover", text: "Clarify business objectives, users, constraints, integrations and success criteria." },
  { number: "02", title: "Architect", text: "Define the solution, data flows, security boundaries and phased delivery plan." },
  { number: "03", title: "Build & test", text: "Develop iteratively with reviews, automated checks and integration testing." },
  { number: "04", title: "Launch & improve", text: "Deploy, monitor, document and evolve the application with your team." },
];

function SoftwareEngineering({ openContactModal }) {
  const handleContact = () => {
    if (typeof openContactModal === "function") openContactModal();
    else window.location.href = "mailto:contact@automationspectrum.com.au?subject=Custom%20Software%20Engineering%20Enquiry";
  };

  return (
    <>
    
      <SEO
        title="Custom Software Engineering & Development | Automation Spectrum"
        description="Build scalable business applications with Automation Spectrum. Expert Python, Django, React, API development, cloud architecture, system integration and AI-enabled software engineering."
        path="/services/software-engineering"
      />

      <main className="as-software-page">
        <section className="as-software-hero">
          <div className="as-software-hero__glow as-software-hero__glow--left" aria-hidden="true" />
          <div className="as-software-hero__glow as-software-hero__glow--right" aria-hidden="true" />
          <div className="as-software-container as-software-hero__grid">
            <div className="as-software-hero__copy">
              <span className="as-software-eyebrow"><Code2 size={15} /> CUSTOM SOFTWARE ENGINEERING</span>
              <h1>Software built around <span>your business.</span></h1>
              <p>From modern web applications and cloud services to complex integrations, Automation Spectrum engineers practical software that fits your workflows, connects your systems and supports long-term growth.</p>
              <div className="as-software-actions">
                <button type="button" className="as-software-button as-software-button--primary" onClick={handleContact}>Discuss your software project <ArrowRight size={18} /></button>
                <a className="as-software-button as-software-button--secondary" href="#software-capabilities">Explore capabilities <ChevronRight size={18} /></a>
              </div>
              <div className="as-software-hero__highlights">
                <span><Check size={16} /> Built for your requirements</span>
                <span><Check size={16} /> Integrates existing systems</span>
                <span><Check size={16} /> Designed for maintainability</span>
              </div>
            </div>
            <div className="as-software-hero__visual" aria-label="Illustrative software engineering architecture">
              <div className="as-software-visual__halo" aria-hidden="true" />
              <div className="as-software-visual__header"><Sparkles size={18} /> CONNECTED APPLICATION ARCHITECTURE</div>
              <div className="as-software-visual__item"><span><Layers3 size={22} /></span><div><strong>Web & business applications</strong><small>Customer portals, dashboards and workflows</small></div><span className="as-software-visual__index">01</span></div>
              <div className="as-software-visual__connector" aria-hidden="true" />
              <div className="as-software-visual__item"><span><ServerCog size={22} /></span><div><strong>Services, APIs & business logic</strong><small>Secure backend services and integrations</small></div><span className="as-software-visual__index">02</span></div>
              <div className="as-software-visual__connector" aria-hidden="true" />
              <div className="as-software-visual__item"><span><Database size={22} /></span><div><strong>Data, cloud & enterprise systems</strong><small>Reliable data flows and managed deployment</small></div><span className="as-software-visual__index">03</span></div>
              <div className="as-software-visual__footer"><Network size={16} /> One solution, connected to your operations</div>
            </div>
          </div>
        </section>

        <section className="as-software-section as-software-intro">
          <div className="as-software-container as-software-split">
            <div><span className="as-software-kicker">WHY CUSTOM SOFTWARE</span><h2>Make technology <span>fit the way you work.</span></h2></div>
            <div className="as-software-intro__text">
              <p>Off-the-shelf tools are often the right starting point. But when workflows, data or integrations are unique, teams may need software that connects what they already use and fills the gaps.</p>
              <p>We help assess whether to configure, integrate, extend or build—choosing an approach that balances business value, cost, delivery time and ongoing ownership.</p>
              <Link to="/services/ai-consulting" className="as-software-text-link">Explore AI consulting & strategy <ArrowUpRight size={17} /></Link>
            </div>
          </div>
        </section>

        <section className="as-software-section as-software-services" id="software-capabilities">
          <div className="as-software-container">
            <div className="as-software-heading"><span className="as-software-kicker">ENGINEERING CAPABILITIES</span><h2>From application to integration.</h2><p>Full-stack delivery for focused business tools, connected platforms and complex software projects.</p></div>
            <div className="as-software-card-grid">{capabilities.map(({ icon: Icon, title, text }) => <article className="as-software-card" key={title}><span className="as-software-card__icon"><Icon size={24} /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section className="as-software-section as-software-usecases">
          <div className="as-software-container">
            <div className="as-software-heading"><span className="as-software-kicker">WHERE WE HELP</span><h2>Engineering for businesses of different sizes.</h2><p>Illustrative software opportunities, not claims of completed client deployments.</p></div>
            <div className="as-software-usecase-grid">{useCases.map(({ icon: Icon, title, text }) => <article className="as-software-usecase" key={title}><Icon size={25} /><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section className="as-software-section as-software-process">
          <div className="as-software-container">
            <div className="as-software-heading"><span className="as-software-kicker">OUR APPROACH</span><h2>Structured delivery. Practical outcomes.</h2><p>Build incrementally, validate assumptions early and keep the solution understandable and maintainable.</p></div>
            <div className="as-software-steps">{steps.map(step => <article className="as-software-step" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
          </div>
        </section>

        <section className="as-software-section as-software-outcomes">
          <div className="as-software-container as-software-split">
            <div><span className="as-software-kicker">TECHNOLOGY & DELIVERY</span><h2>Modern engineering, <span>grounded in your needs.</span></h2><p>Technology selection follows the requirements. Our engineering experience spans Python/Django, React, APIs, relational databases, AWS/Azure and CI/CD workflows.</p></div>
            <div className="as-software-outcomes__panel">{[
              "Frontend and backend application development",
              "REST APIs, third-party integrations and data pipelines",
              "Cloud architecture, deployment and CI/CD",
              "Authentication, permissions and operational monitoring",
              "Testing, technical documentation and handover",
            ].map(item => <div key={item}><Check size={18} /><span>{item}</span></div>)}</div>
          </div>
        </section>

        <section className="as-software-cta">
          <div className="as-software-container as-software-cta__grid">
            <div><span className="as-software-kicker">WORK WITH AUTOMATION SPECTRUM</span><h2>Have a software project in mind?</h2><p>Whether you need a new application, an integration or help modernising an existing system, tell us what you're trying to achieve.</p></div>
            <div className="as-software-cta__actions"><button type="button" className="as-software-button as-software-button--primary" onClick={handleContact}>Book an AI discovery conversation <ArrowRight size={18} /></button><Link to="/technology" className="as-software-button as-software-button--secondary">Explore our technology <Zap size={17} /></Link></div>
          </div>
        </section>
      </main>
    
    
    
    </>
    
  );
}

export default SoftwareEngineering;
