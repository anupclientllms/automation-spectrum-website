import { Link } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Handshake,
  Lightbulb,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import "../styles/partners.css";

const partnerTypes = [
  {
    icon: BriefcaseBusiness,
    title: "Business advisers & consultants",
    description: "Help clients turn operational challenges and growth ambitions into practical AI opportunities, supported by specialist technical delivery.",
    points: ["Client opportunity discovery", "AI strategy and solution scoping", "Collaborative client engagement"],
  },
  {
    icon: Handshake,
    title: "Referral & industry partners",
    description: "Introduce organisations that could benefit from intelligent automation, enterprise AI or purpose-built software solutions.",
    points: ["Qualified introductions", "Clear opportunity assessment", "Relationship-led collaboration"],
  },
  {
    icon: Network,
    title: "Technology & delivery partners",
    description: "Combine complementary platforms, integration capabilities and domain expertise to deliver end-to-end customer solutions.",
    points: ["System and data integration", "Joint solution development", "Implementation collaboration"],
  },
];

const opportunities = [
  {
    icon: BrainCircuit,
    title: "Enterprise AI & AI agents",
    description: "AI assistants, private knowledge systems, intelligent agents and governed workflows.",
  },
  {
    icon: Workflow,
    title: "Business process automation",
    description: "Reduce repetitive work, connect disconnected systems and improve operational productivity.",
  },
  {
    icon: Lightbulb,
    title: "Custom software & integrations",
    description: "Modernise business applications, connect APIs and deliver tailored digital capabilities.",
  },
  {
    icon: ShieldCheck,
    title: "AI discovery & pilot delivery",
    description: "Evaluate use cases, test feasibility and establish a practical pathway to implementation.",
  },
];

const steps = [
  { number: "01", title: "Connect", description: "Tell us about your practice, network or area of expertise." },
  { number: "02", title: "Explore", description: "Identify complementary capabilities and potential client opportunities." },
  { number: "03", title: "Collaborate", description: "Agree on roles, engagement approach and any commercial arrangements privately." },
  { number: "04", title: "Deliver", description: "Work together to create measurable outcomes and long-term client value." },
];

function Partners({ openContactModal }) {
  const handleContact = () => {
    if (typeof openContactModal === "function") openContactModal();
  };

  return (
    <main className="as-partners">
      <section className="as-partners-hero">
        <div className="as-partners-hero__ambient as-partners-hero__ambient--one" />
        <div className="as-partners-hero__ambient as-partners-hero__ambient--two" />
        <div className="as-container as-partners-hero__layout">
          <div className="as-partners-hero__content">
            <div className="as-eyebrow"><span className="as-eyebrow__dot" /> PARTNER WITH AUTOMATION SPECTRUM</div>
            <h1>Better business outcomes <span>through collaboration.</span></h1>
            <p>We collaborate with business advisers, industry specialists and technology partners to identify valuable AI opportunities and deliver practical solutions for their clients.</p>
            <div className="as-partners-hero__actions">
              <button type="button" className="as-button as-button--primary" onClick={handleContact}>Discuss a partnership <ArrowRight size={18} /></button>
              <a className="as-button as-button--secondary" href="#partner-models">Explore opportunities</a>
            </div>
            <div className="as-partners-hero__assurance">
              <span><Check size={16} /> Collaborative approach</span>
              <span><Check size={16} /> Practical AI delivery</span>
              <span><Check size={16} /> Client-first relationships</span>
            </div>
          </div>
          <div className="as-partners-visual" aria-hidden="true">
            <div className="as-partners-visual__ring as-partners-visual__ring--outer" />
            <div className="as-partners-visual__ring as-partners-visual__ring--inner" />
            <div className="as-partners-visual__core"><Handshake size={52} /><strong>Shared expertise</strong><small>MEASURABLE CLIENT VALUE</small></div>
            <div className="as-partners-visual__node as-partners-visual__node--one"><BriefcaseBusiness size={20} /><span>Advisers</span></div>
            <div className="as-partners-visual__node as-partners-visual__node--two"><BrainCircuit size={20} /><span>AI solutions</span></div>
            <div className="as-partners-visual__node as-partners-visual__node--three"><Network size={20} /><span>Technology</span></div>
          </div>
        </div>
      </section>

      <section className="as-partners-intro">
        <div className="as-container as-partners-intro__layout">
          <p><strong>Your client relationships and industry knowledge</strong> combined with our AI engineering and implementation capabilities can unlock new opportunities.</p>
          <div className="as-partners-intro__divider" />
          <p>Automation Spectrum Pty Ltd provides AI consulting, intelligent automation, custom software development and enterprise integration services.</p>
        </div>
      </section>

      <section id="partner-models" className="as-section as-partners-models">
        <div className="as-container">
          <div className="as-section-heading as-section-heading--center">
            <span className="as-section-heading__eyebrow">WHO WE COLLABORATE WITH</span>
            <h2>Partnerships built around complementary strengths</h2>
            <p>Different partners bring different expertise. We focus on opportunities where working together creates genuine value for customers.</p>
          </div>
          <div className="as-partners-models__grid">
            {partnerTypes.map(({ icon: Icon, title, description, points }) => (
              <article className="as-partners-model-card" key={title}>
                <div className="as-partners-model-card__icon"><Icon size={25} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="as-partners-model-card__points">{points.map((point) => <span key={point}><Check size={15} />{point}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="as-section as-partners-opportunities">
        <div className="as-container as-partners-opportunities__layout">
          <div className="as-partners-opportunities__intro">
            <span className="as-section-heading__eyebrow">CLIENT OPPORTUNITIES</span>
            <h2>Where we can help your clients</h2>
            <p>From initial discovery to working solutions, we help organisations apply AI and software engineering to meaningful business problems.</p>
            <Link to="/technology" className="as-button as-button--secondary">Explore our technology <ArrowRight size={18} /></Link>
          </div>
          <div className="as-partners-opportunities__grid">
            {opportunities.map(({ icon: Icon, title, description }) => (
              <article className="as-partners-opportunity-card" key={title}>
                <Icon size={24} /><div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="as-section as-partners-process">
        <div className="as-container">
          <div className="as-section-heading">
            <span className="as-section-heading__eyebrow">HOW COLLABORATION WORKS</span>
            <h2>Start with a conversation. Build on shared value.</h2>
            <p>Our approach is straightforward, flexible and tailored to the opportunity.</p>
          </div>
          <div className="as-partners-process__grid">
            {steps.map((step) => <article className="as-partners-process__step" key={step.number}><span className="as-partners-process__number">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}
          </div>
          <p className="as-partners-process__note">Referral, delivery and other commercial arrangements are considered individually based on the nature of the engagement.</p>
        </div>
      </section>

      <section className="as-partners-cta">
        <div className="as-partners-cta__glow" />
        <div className="as-container as-partners-cta__layout">
          <div>
            <span className="as-section-heading__eyebrow">LET'S WORK TOGETHER</span>
            <h2>Have a client opportunity or partnership idea?</h2>
            <p>Tell us about your expertise and the organisations you support. We'll explore whether there's a strong fit.</p>
          </div>
          <div className="as-partners-cta__actions">
            <button type="button" className="as-button as-button--primary" onClick={handleContact}>Start a partnership conversation <ArrowRight size={18} /></button>
            <Link className="as-button as-button--secondary" to="/company">About Automation Spectrum</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Partners;
