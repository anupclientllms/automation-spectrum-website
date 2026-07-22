import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowLeft,
  Bot,
  Building2,
  CheckCircle2,
  Copyright,
  Database,
  ExternalLink,
  FileText,
  Globe2,
  Gavel,
  Laptop,
  LockKeyhole,
  Mail,
  Scale,
  ShieldCheck,
  UserCheck,
  Workflow,
} from "lucide-react";

import "../styles/termsOfUse.css";

const termsSections = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of these terms",
    icon: CheckCircle2,
    content: (
      <>
        <p>
          These Terms of Use govern your access to and use of the Automation
          Spectrum website and any website content, demonstrations, forms,
          downloadable materials or public product information made available
          through it.
        </p>

        <p>
          By accessing or using this website, you agree to these Terms of Use.
          If you do not agree, you should not use the website.
        </p>

        <p>
          These terms apply only to public website use unless another agreement
          expressly incorporates them.
        </p>
      </>
    ),
  },
  {
    id: "company",
    number: "02",
    title: "About Automation Spectrum",
    icon: Building2,
    content: (
      <>
        <p>
          This website is operated by Automation Spectrum Pty Ltd, an
          Australian company based in Melbourne, Victoria.
        </p>

        <div className="as-terms-company-card">
          <span>Legal entity</span>
          <strong>Automation Spectrum Pty Ltd</strong>

          <span>Australian Business Number</span>
          <strong>80 636 637 904</strong>

          <span>Australian Company Number</span>
          <strong>636 637 904</strong>

          <span>Products</span>
          <strong>EnergIQ and AIChatshoppie</strong>
        </div>

        <p>
          EnergIQ and AIChatshoppie are products of Automation Spectrum Pty
          Ltd. References to either product on this website do not create a
          separate contracting entity.
        </p>
      </>
    ),
  },
  {
    id: "informational-purpose",
    number: "03",
    title: "Website information",
    icon: FileText,
    content: (
      <>
        <p>
          The website provides general information about Automation Spectrum,
          EnergIQ, AIChatshoppie, pilot programs, technology capabilities and
          potential commercial applications.
        </p>

        <p>
          Website content is provided for general information and business
          discussion purposes. It is not:
        </p>

        <ul>
          <li>a binding commercial proposal;</li>
          <li>a guarantee that a product or feature is generally available;</li>
          <li>professional legal, financial, engineering or regulatory advice;</li>
          <li>
            a substitute for technical due diligence or professional
            assessment;
          </li>
          <li>
            a commitment to deliver a pilot, integration, deployment or
            particular outcome.
          </li>
        </ul>

        <p>
          Any binding scope, deliverables, responsibilities, pricing,
          performance commitments or implementation terms must be set out in a
          separate written agreement.
        </p>
      </>
    ),
  },
  {
    id: "product-status",
    number: "04",
    title: "Products, pilots and demonstrations",
    icon: Laptop,
    content: (
      <>
        <p>
          Product descriptions, prototypes, demonstrations, screenshots,
          simulations and example workflows may show current, planned,
          experimental or configurable capabilities.
        </p>

        <p>
          Product availability may depend on:
        </p>

        <ul>
          <li>the customer use case and operating environment;</li>
          <li>data quality and system access;</li>
          <li>technical and security requirements;</li>
          <li>third-party platforms and integrations;</li>
          <li>pilot findings and production-readiness assessment;</li>
          <li>commercial agreement and implementation scope.</li>
        </ul>

        <p>
          A pilot, proof of value or demonstration does not automatically
          include production deployment, ongoing support, software licensing,
          hardware, integrations or operational control.
        </p>
      </>
    ),
  },
  {
    id: "accounts",
    number: "05",
    title: "Accounts and restricted environments",
    icon: UserCheck,
    content: (
      <>
        <p>
          Some Automation Spectrum services may later require an account,
          authorised invitation or customer-specific access credentials.
        </p>

        <p>Where account access is provided, you must:</p>

        <ul>
          <li>provide accurate registration information;</li>
          <li>keep credentials confidential and secure;</li>
          <li>use the account only for authorised business purposes;</li>
          <li>not share access with unauthorised persons;</li>
          <li>notify us promptly of suspected misuse or unauthorised access;</li>
          <li>comply with any customer or product-specific terms.</li>
        </ul>

        <p>
          We may suspend or restrict access where reasonably necessary to
          protect security, systems, users, intellectual property or contractual
          obligations.
        </p>
      </>
    ),
  },
  {
    id: "permitted-use",
    number: "06",
    title: "Permitted use",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          You may access and use the public website for legitimate personal,
          professional and business-information purposes.
        </p>

        <p>You must not:</p>

        <ul>
          <li>use the website unlawfully, fraudulently or deceptively;</li>
          <li>attempt to gain unauthorised access to systems or information;</li>
          <li>
            introduce malware, malicious code, automated attacks or disruptive
            traffic;
          </li>
          <li>scrape or harvest information at unreasonable scale;</li>
          <li>circumvent access, security or usage controls;</li>
          <li>impersonate another person or misrepresent your organisation;</li>
          <li>
            use website content to create a misleading association,
            endorsement or partnership;
          </li>
          <li>
            reproduce or commercially exploit protected content without
            permission;
          </li>
          <li>
            use the website in a way that could damage Automation Spectrum,
            its products, customers or service providers.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "enquiries",
    number: "07",
    title: "Enquiries and submitted information",
    icon: Mail,
    content: (
      <>
        <p>
          When submitting a contact, pilot, partnership or general enquiry, you
          must provide information that is accurate to the best of your
          knowledge.
        </p>

        <p>
          Do not submit confidential, commercially sensitive, regulated or
          security-critical information through a general website form unless
          Automation Spectrum has agreed to an appropriate method of receiving
          it.
        </p>

        <p>
          Submission of an enquiry does not:
        </p>

        <ul>
          <li>create a customer relationship;</li>
          <li>create a partnership or advisory relationship;</li>
          <li>create an obligation to accept or respond to the opportunity;</li>
          <li>make Automation Spectrum responsible for protecting unsolicited trade secrets;</li>
          <li>constitute acceptance of a proposal or commercial term.</li>
        </ul>
      </>
    ),
  },
  {
    id: "ai-output",
    number: "08",
    title: "AI-generated information",
    icon: Bot,
    content: (
      <>
        <p>
          Automation Spectrum develops AI-enabled products and may demonstrate
          AI-generated responses, recommendations, classifications,
          simulations, summaries or workflow outputs.
        </p>

        <p>
          AI-generated information may be incomplete, inaccurate, outdated or
          unsuitable for a particular purpose. It should be reviewed using
          appropriate professional and operational judgement.
        </p>

        <p>
          Unless expressly agreed in writing, you must not rely solely on
          AI-generated information for:
        </p>

        <ul>
          <li>safety-critical operational decisions;</li>
          <li>medical, legal or financial decisions;</li>
          <li>regulatory or compliance determinations;</li>
          <li>automatic control of critical equipment;</li>
          <li>decisions significantly affecting an individual;</li>
          <li>emergency response or public-safety activity.</li>
        </ul>

        <p>
          Product-specific agreements may include additional review,
          governance, audit and human-approval requirements.
        </p>
      </>
    ),
  },
  {
    id: "operational-decisions",
    number: "09",
    title: "Operational and energy decisions",
    icon: Workflow,
    content: (
      <>
        <p>
          EnergIQ may present operational analysis, simulations, savings
          estimates, anomaly findings or suggested actions.
        </p>

        <p>
          Actual outcomes depend on customer systems, tariffs, weather,
          equipment condition, operational constraints, implementation quality
          and other factors outside Automation Spectrum&apos;s control.
        </p>

        <p>
          Customers and authorised operators remain responsible for:
        </p>

        <ul>
          <li>reviewing operational recommendations;</li>
          <li>confirming safety and technical suitability;</li>
          <li>obtaining required internal or regulatory approvals;</li>
          <li>deciding whether and how to implement an action;</li>
          <li>monitoring equipment and operational outcomes.</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    number: "10",
    title: "Intellectual property",
    icon: Copyright,
    content: (
      <>
        <p>
          Unless otherwise stated, the website and its content are owned by or
          licensed to Automation Spectrum Pty Ltd.
        </p>

        <p>Protected material may include:</p>

        <ul>
          <li>software and source-code concepts;</li>
          <li>product architecture and workflows;</li>
          <li>text, graphics, diagrams and interface designs;</li>
          <li>logos, names and brand elements;</li>
          <li>digital-twin, agent and product demonstrations;</li>
          <li>documents, proposals and downloadable materials;</li>
          <li>research, models, prompts, data structures and methodologies.</li>
        </ul>

        <p>
          You may view and make reasonable internal use of public website
          content. You may not copy, modify, distribute, sell, licence,
          reverse-engineer or create derivative commercial material without
          written permission, except where permitted by law.
        </p>

        <p>
          EnergIQ, AIChatshoppie, Automation Spectrum and associated marks may
          not be used in a way that suggests endorsement, affiliation or
          ownership without authorisation.
        </p>

        <p>
          Further information is available in our{" "}
          <Link to="/intellectual-property">
            Intellectual Property notice
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "third-party-services",
    number: "11",
    title: "Third-party services and links",
    icon: ExternalLink,
    content: (
      <>
        <p>
          The website may contain links to third-party websites, product
          services, hosting platforms, professional networks or external
          resources.
        </p>

        <p>
          Third-party services are controlled by their respective operators and
          may be subject to separate terms, privacy policies and availability.
        </p>

        <p>
          A link does not necessarily indicate that Automation Spectrum
          endorses, controls or accepts responsibility for the third-party
          service.
        </p>
      </>
    ),
  },
  {
    id: "availability",
    number: "12",
    title: "Website availability and changes",
    icon: Globe2,
    content: (
      <>
        <p>
          We may update, modify, suspend or discontinue any part of the public
          website without prior notice.
        </p>

        <p>
          We do not guarantee that the website will always be available,
          uninterrupted, secure or free from errors.
        </p>

        <p>
          Website content may be updated after publication and may not always
          reflect the latest product scope, commercial position or technical
          capability.
        </p>
      </>
    ),
  },
  {
    id: "security",
    number: "13",
    title: "Security",
    icon: LockKeyhole,
    content: (
      <>
        <p>
          You must not test, scan or probe the security of the website or
          related systems without prior written authorisation.
        </p>

        <p>
          If you believe you have identified a legitimate security issue,
          please report it responsibly to:
        </p>

        <a
          className="as-terms-inline-link"
          href="mailto:contact@automationspectrum.com.au"
        >
          contact@automationspectrum.com.au
        </a>

        <p>
          Do not publicly disclose a suspected vulnerability before giving us
          a reasonable opportunity to investigate.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    number: "14",
    title: "Privacy",
    icon: Database,
    content: (
      <>
        <p>
          Personal information collected through the website is handled in
          accordance with our Privacy Policy and any applicable
          product-specific or customer-specific arrangements.
        </p>

        <p>
          Please review the{" "}
          <Link to="/privacy-policy">Automation Spectrum Privacy Policy</Link>{" "}
          before submitting personal information.
        </p>
      </>
    ),
  },
  {
    id: "warranties",
    number: "15",
    title: "Warranties and disclaimers",
    icon: AlertTriangle,
    content: (
      <>
        <p>
          To the maximum extent permitted by law, public website content is
          provided on an “as available” basis without additional guarantees
          about completeness, accuracy, suitability, reliability or
          uninterrupted availability.
        </p>

        <p>
          Automation Spectrum does not guarantee that:
        </p>

        <ul>
          <li>website content will meet every user&apos;s requirements;</li>
          <li>demonstrated capabilities will be available in every deployment;</li>
          <li>estimated savings or outcomes will be achieved;</li>
          <li>third-party services will remain available or unchanged;</li>
          <li>the website will be error-free or continuously available.</li>
        </ul>

        <p>
          Nothing in these Terms of Use excludes, restricts or modifies any
          guarantee, right or remedy that cannot lawfully be excluded,
          restricted or modified, including rights that may apply under the
          Australian Consumer Law.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    number: "16",
    title: "Limitation of liability",
    icon: Scale,
    content: (
      <>
        <p>
          To the maximum extent permitted by law, Automation Spectrum is not
          liable for loss arising solely from:
        </p>

        <ul>
          <li>reliance on general public website information;</li>
          <li>use of an unauthorised or unsupported workflow;</li>
          <li>failure to independently review AI-generated information;</li>
          <li>third-party websites, systems or services;</li>
          <li>website interruption, malware introduced by third parties or unauthorised access;</li>
          <li>changes made to customer systems without appropriate review;</li>
          <li>information submitted through an insecure or inappropriate channel.</li>
        </ul>

        <p>
          Where liability cannot lawfully be excluded, it is limited only to
          the extent permitted by applicable law.
        </p>

        <p>
          Any liability relating to a paid product, pilot, subscription,
          integration or professional engagement will be governed primarily by
          the applicable written customer agreement.
        </p>
      </>
    ),
  },
  {
    id: "indemnity",
    number: "17",
    title: "Responsibility for misuse",
    icon: Gavel,
    content: (
      <>
        <p>
          You are responsible for your unlawful or unauthorised use of the
          website.
        </p>

        <p>
          To the extent permitted by law, you are responsible for reasonable
          loss, claims or costs arising from:
        </p>

        <ul>
          <li>your material breach of these terms;</li>
          <li>your infringement of another person&apos;s rights;</li>
          <li>your unauthorised interference with the website or systems;</li>
          <li>information or material you unlawfully submit through the website.</li>
        </ul>
      </>
    ),
  },
  {
    id: "termination",
    number: "18",
    title: "Suspension and termination",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          We may restrict, suspend or terminate access to the website or
          restricted services where reasonably necessary because of:
        </p>

        <ul>
          <li>a breach of these terms;</li>
          <li>security or operational risk;</li>
          <li>suspected fraud, misuse or unlawful conduct;</li>
          <li>legal, regulatory or contractual requirements;</li>
          <li>discontinuation of the relevant website or service.</li>
        </ul>
      </>
    ),
  },
  {
    id: "governing-law",
    number: "19",
    title: "Governing law",
    icon: Scale,
    content: (
      <>
        <p>
          These Terms of Use are governed by the laws of Victoria, Australia.
        </p>

        <p>
          Subject to any applicable mandatory legal rights, the courts of
          Victoria and courts entitled to hear appeals from them will have
          jurisdiction in relation to disputes concerning these terms.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    number: "20",
    title: "Changes to these terms",
    icon: FileText,
    content: (
      <>
        <p>
          We may update these Terms of Use to reflect changes to our website,
          products, services, business practices or legal obligations.
        </p>

        <p>
          The current version will be published on this website and will
          display its effective date.
        </p>

        <p>
          Your continued use of the website after updated terms take effect
          indicates acceptance of those updated terms.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    number: "21",
    title: "Contact",
    icon: Mail,
    content: (
      <>
        <p>
          Questions about these Terms of Use may be directed to:
        </p>

        <div className="as-terms-contact-card">
          <strong>Automation Spectrum Pty Ltd</strong>
          <span>Legal and Website Enquiries</span>

          <a href="mailto:contact@automationspectrum.com.au">
            contact@automationspectrum.com.au
          </a>

          <span>Melbourne, Victoria, Australia</span>
          <span>ABN 80 636 637 904</span>
        </div>
      </>
    ),
  },
];

function TermsOfUsePage() {
  return (
    <main className="as-terms-page">
      <section className="as-terms-hero">
        <div className="as-terms-hero__glow as-terms-hero__glow--one" />
        <div className="as-terms-hero__glow as-terms-hero__glow--two" />

        <div className="as-terms-container">
          <Link to="/" className="as-terms-back">
            <ArrowLeft size={16} />
            Back to Automation Spectrum
          </Link>

          <div className="as-terms-hero__badge">
            <Gavel size={16} />
            Website terms and conditions
          </div>

          <h1>Terms of Use</h1>

          <p>
            These terms govern access to the Automation Spectrum corporate
            website and its public information about EnergIQ, AIChatshoppie,
            technology capabilities and pilot programs.
          </p>

          <div className="as-terms-hero__meta">
            <span>
              <strong>Effective date</strong>
              22 July 2026
            </span>

            <span>
              <strong>Last updated</strong>
              22 July 2026
            </span>

            <span>
              <strong>Entity</strong>
              Automation Spectrum Pty Ltd
            </span>
          </div>
        </div>
      </section>

      <section className="as-terms-content">
        <div className="as-terms-container as-terms-layout">
          <aside className="as-terms-navigation">
            <div className="as-terms-navigation__inner">
              <span>On this page</span>

              <nav aria-label="Terms of Use sections">
                {termsSections.map((section) => (
                  <a href={`#${section.id}`} key={section.id}>
                    <small>{section.number}</small>
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="as-terms-document">
            <div className="as-terms-summary">
              <ShieldCheck size={23} />

              <div>
                <strong>Important distinction</strong>

                <p>
                  These website terms do not replace a pilot agreement,
                  customer contract, subscription agreement, software licence,
                  data-processing agreement or statement of work.
                </p>
              </div>
            </div>

            {termsSections.map((section) => {
              const Icon = section.icon;

              return (
                <section
                  id={section.id}
                  className="as-terms-document__section"
                  key={section.id}
                >
                  <div className="as-terms-document__heading">
                    <span className="as-terms-document__icon">
                      <Icon size={21} />
                    </span>

                    <div>
                      <small>{section.number}</small>
                      <h2>{section.title}</h2>
                    </div>
                  </div>

                  <div className="as-terms-document__body">
                    {section.content}
                  </div>
                </section>
              );
            })}

            <div className="as-terms-document__footer-note">
              <Mail size={20} />

              <div>
                <strong>Questions about these terms?</strong>

                <p>
                  Contact Automation Spectrum before using the website in a way
                  that may require permission or clarification.
                </p>

                <a href="mailto:contact@automationspectrum.com.au">
                  contact@automationspectrum.com.au
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default TermsOfUsePage;