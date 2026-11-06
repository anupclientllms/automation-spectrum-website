import { Link } from "react-router-dom";
import {
  ArrowRight, Check, ChevronRight, ReceiptText, FileText, ScanLine,
  ShieldCheck, BellRing, CreditCard, GitBranch, ClipboardCheck,
  BarChart3, Sparkles, Mail, Database, Clock3, Zap, CheckCircle2,
  AlertCircle, Wallet, ArrowUpRight
} from "lucide-react";
import "../styles/invoices-payments.css";

const capabilities = [
  { icon: ScanLine, title: "Invoice & receipt capture", text: "Collect documents from email, uploads and shared folders, then extract supplier, dates, amounts, tax and line-item information." },
  { icon: ClipboardCheck, title: "Validation & approvals", text: "Check required fields, detect potential duplicates and route exceptions or high-value payments for human approval." },
  { icon: Database, title: "Accounting system integration", text: "Prepare validated records for your accounting or ERP platform using suitable APIs and controlled workflows." },
  { icon: BellRing, title: "Payment reminders & follow-ups", text: "Track due dates and prepare timely, personalised reminders for review before sending." },
  { icon: GitBranch, title: "Reconciliation support", text: "Assist with matching invoices, receipts and payment references, while flagging uncertain matches for investigation." },
  { icon: BarChart3, title: "Cash-flow visibility", text: "Bring outstanding invoices, upcoming obligations and payment status into a clearer operational view." },
];

const steps = [
  { number: "01", title: "Capture", text: "Bring invoices and receipts into one structured workflow." },
  { number: "02", title: "Extract & check", text: "Use document intelligence and rules to prepare reliable data." },
  { number: "03", title: "Approve & connect", text: "Route exceptions to people and sync approved records to existing systems." },
  { number: "04", title: "Track & follow up", text: "Monitor payment status and coordinate reminders and reporting." },
];

const useCases = [
  { icon: Wallet, title: "Accounts payable", text: "Reduce manual entry and coordinate supplier invoices, approval steps and payment preparation." },
  { icon: CreditCard, title: "Accounts receivable", text: "Keep track of customer invoices, outstanding balances and approved payment follow-ups." },
  { icon: FileText, title: "Receipts & expenses", text: "Organise receipts and supporting records for review, coding and reporting." },
];

function InvoicesPayments({ openContactModal }) {
  const handleContact = () => {
    if (typeof openContactModal === "function") openContactModal();
    else window.location.href = "mailto:contact@automationspectrum.com.au?subject=Invoices%20and%20Payments%20Automation%20Enquiry";
  };

  return (
    <main className="as-invoices-page">
      <section className="as-invoices-hero">
        <div className="as-invoices-hero__glow as-invoices-hero__glow--left" aria-hidden="true" />
        <div className="as-invoices-hero__glow as-invoices-hero__glow--right" aria-hidden="true" />
        <div className="as-invoices-container as-invoices-hero__grid">
          <div className="as-invoices-hero__copy">
            <span className="as-invoices-eyebrow"><ReceiptText size={15} /> INVOICES & PAYMENTS</span>
            <h1>Less invoice admin. <span>More control over cash flow.</span></h1>
            <p>Automation Spectrum builds intelligent invoice and payment workflows that reduce repetitive data entry, connect your finance tools and help teams stay on top of approvals, due dates and follow-ups.</p>
            <div className="as-invoices-actions">
              <button type="button" className="as-invoices-button as-invoices-button--primary" onClick={handleContact}>Discuss your finance workflow <ArrowRight size={18} /></button>
              <a className="as-invoices-button as-invoices-button--secondary" href="#invoice-capabilities">Explore capabilities <ChevronRight size={18} /></a>
            </div>
            <div className="as-invoices-hero__highlights">
              <span><Check size={16} /> Less manual processing</span>
              <span><Check size={16} /> Human approval controls</span>
              <span><Check size={16} /> Works with existing systems</span>
            </div>
          </div>
          <div className="as-invoices-hero__visual" aria-label="Illustrative invoice processing workflow">
            <div className="as-invoices-visual__top"><span><Sparkles size={17} /> FINANCE WORKFLOW</span><span className="as-invoices-visual__demo">ILLUSTRATIVE</span></div>
            <div className="as-invoices-visual__document">
              <div className="as-invoices-visual__document-heading"><div className="as-invoices-visual__icon"><FileText size={22} /></div><div><strong>Supplier invoice</strong><small>Received from connected inbox</small></div><span className="as-invoices-visual__status">Captured</span></div>
              <div className="as-invoices-visual__field"><span>Supplier</span><strong>Example Supplies Pty Ltd</strong></div>
              <div className="as-invoices-visual__field"><span>Invoice reference</span><strong>INV-2048</strong></div>
              <div className="as-invoices-visual__field"><span>Amount</span><strong>$2,480.00</strong></div>
            </div>
            <div className="as-invoices-visual__connector"><span /></div>
            <div className="as-invoices-visual__pipeline">
              <div><ScanLine size={19} /><span>Extract & validate</span><CheckCircle2 size={17} /></div>
              <div><ShieldCheck size={19} /><span>Human approval</span><Clock3 size={17} /></div>
              <div><Database size={19} /><span>Sync to finance system</span><ArrowRight size={17} /></div>
            </div>
            <div className="as-invoices-visual__note"><AlertCircle size={16} /> Exceptions and payment decisions remain reviewable.</div>
          </div>
        </div>
      </section>

      <section className="as-invoices-section" id="invoice-capabilities">
        <div className="as-invoices-container">
          <div className="as-invoices-heading"><span className="as-invoices-kicker">WHAT WE AUTOMATE</span><h2>Smarter workflows from <span>invoice to payment.</span></h2><p>Connect the routine steps, surface the exceptions and give your team a clearer view of what needs attention.</p></div>
          <div className="as-invoices-card-grid">{capabilities.map(({ icon: Icon, title, text }) => <article className="as-invoices-card" key={title}><div className="as-invoices-card__icon"><Icon size={24} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="as-invoices-section as-invoices-usecases">
        <div className="as-invoices-container">
          <div className="as-invoices-heading"><span className="as-invoices-kicker">PRACTICAL APPLICATIONS</span><h2>Built around how <span>your business operates.</span></h2><p>Start with the process causing the most manual work, then expand when the workflow is proven.</p></div>
          <div className="as-invoices-usecase-grid">{useCases.map(({ icon: Icon, title, text }) => <article className="as-invoices-usecase" key={title}><Icon size={27} /><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="as-invoices-section as-invoices-process">
        <div className="as-invoices-container"><div className="as-invoices-heading"><span className="as-invoices-kicker">HOW IT WORKS</span><h2>From incoming document <span>to actionable record.</span></h2><p>A practical implementation path with validation and accountability at every stage.</p></div><div className="as-invoices-steps">{steps.map(step => <article className="as-invoices-step" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div>
      </section>

      <section className="as-invoices-section as-invoices-outcomes">
        <div className="as-invoices-container as-invoices-split">
          <div><span className="as-invoices-kicker">DESIGNED FOR REAL OPERATIONS</span><h2>Automation with <span>visibility and control.</span></h2><p>Every organisation has different accounting systems, approval rules and payment policies. We design around those requirements rather than forcing a one-size-fits-all workflow.</p><Link to="/services/business-automation" className="as-invoices-text-link">Explore business automation <ArrowUpRight size={17} /></Link></div>
          <div className="as-invoices-outcomes__panel">{["Document extraction with field-level validation", "Duplicate checks and configurable exception handling", "Role-based reviews and approval checkpoints", "Integration with existing finance and business tools", "Audit-friendly workflow history and payment visibility", "Human review before sensitive financial actions"].map(item => <div key={item}><Check size={18} /><span>{item}</span></div>)}</div>
        </div>
      </section>

      <section className="as-invoices-cta"><div className="as-invoices-container as-invoices-cta__grid"><div><span className="as-invoices-kicker">WORK WITH AUTOMATION SPECTRUM</span><h2>Still processing invoices the hard way?</h2><p>Tell us about your current tools, document volumes and approval process. We'll explore a sensible place to start.</p></div><div className="as-invoices-cta__actions"><button type="button" className="as-invoices-button as-invoices-button--primary" onClick={handleContact}>Book an AI discovery conversation <ArrowRight size={18} /></button><Link to="/technology" className="as-invoices-button as-invoices-button--secondary">Explore our technology <Zap size={17} /></Link></div></div></section>
    </main>
  );
}

export default InvoicesPayments;
