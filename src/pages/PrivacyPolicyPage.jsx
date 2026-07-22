import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  Cookie,
  Database,
  FileText,
  Globe2,
  LockKeyhole,
  Mail,
  Scale,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import "../styles/privacyPolicy.css";

const policySections = [
  {
    id: "scope",
    number: "01",
    title: "Scope of this policy",
    icon: FileText,
    content: (
      <>
        <p>
          This Privacy Policy explains how Automation Spectrum Pty Ltd
          collects, holds, uses and discloses personal information.
        </p>

        <p>
          It applies to personal information collected through:
        </p>

        <ul>
          <li>the Automation Spectrum corporate website;</li>
          <li>contact, pilot and partnership enquiry forms;</li>
          <li>commercial discussions and customer relationships;</li>
          <li>
            Automation Spectrum products, including EnergIQ and
            AIChatshoppie, where this policy is referenced;
          </li>
          <li>
            events, demonstrations, meetings, email communications and
            related business activities.
          </li>
        </ul>

        <p>
          A separate privacy notice, customer agreement or product-specific
          data-processing arrangement may apply where Automation Spectrum
          processes information through a customer implementation.
        </p>
      </>
    ),
  },
  {
    id: "information-collected",
    number: "02",
    title: "Personal information we may collect",
    icon: Database,
    content: (
      <>
        <p>
          The types of personal information we collect depend on how you
          interact with us. They may include:
        </p>

        <ul>
          <li>your name and professional title;</li>
          <li>business email address and telephone number;</li>
          <li>company, employer or organisation details;</li>
          <li>
            information included in an enquiry, proposal, application or
            message;
          </li>
          <li>
            records of meetings, demonstrations and commercial discussions;
          </li>
          <li>
            website and device information, such as browser type, approximate
            location, IP address and referring page;
          </li>
          <li>
            information about your interest in EnergIQ, AIChatshoppie or an
            Automation Spectrum pilot;
          </li>
          <li>
            billing, contracting and transaction information relating to
            customers and suppliers;
          </li>
          <li>
            employment or professional information where you contact us about
            work, advisory or partnership opportunities.
          </li>
        </ul>

        <p>
          We do not intentionally request sensitive personal information
          through our general website enquiry forms. Please avoid including
          health information, government identifiers, financial credentials or
          other sensitive information unless it is necessary and we have agreed
          on an appropriate method of providing it.
        </p>
      </>
    ),
  },
  {
    id: "collection",
    number: "03",
    title: "How we collect information",
    icon: UserCheck,
    content: (
      <>
        <p>We generally collect personal information:</p>

        <ul>
          <li>directly from you when you complete a form;</li>
          <li>when you email, call or meet with us;</li>
          <li>
            when your organisation provides information as part of a project,
            pilot or commercial engagement;
          </li>
          <li>
            from professional networking services and publicly available
            business sources;
          </li>
          <li>
            through website hosting, security, analytics or communication
            technologies;
          </li>
          <li>
            from authorised partners, advisers, introducers or service
            providers.
          </li>
        </ul>

        <p>
          Where practicable, you may contact us without providing unnecessary
          personal information. However, we may need identifying and contact
          information to respond to an enquiry, prepare an agreement or deliver
          a service.
        </p>
      </>
    ),
  },
  {
    id: "purposes",
    number: "04",
    title: "How we use personal information",
    icon: Building2,
    content: (
      <>
        <p>We may collect, hold and use personal information to:</p>

        <ul>
          <li>respond to enquiries and requests;</li>
          <li>
            assess potential EnergIQ or AIChatshoppie pilot opportunities;
          </li>
          <li>
            communicate about projects, products, demonstrations and
            partnerships;
          </li>
          <li>prepare proposals, contracts and invoices;</li>
          <li>deliver and support our products and services;</li>
          <li>manage customer, supplier and adviser relationships;</li>
          <li>improve our websites, products and business processes;</li>
          <li>
            protect our systems, users, intellectual property and commercial
            interests;
          </li>
          <li>
            comply with legal, accounting, regulatory and contractual
            obligations;
          </li>
          <li>
            send relevant business communications where permitted by law.
          </li>
        </ul>

        <p>
          We will not use personal information for an unrelated purpose unless
          you have consented or the use is otherwise permitted or required by
          law.
        </p>
      </>
    ),
  },
  {
    id: "ai-processing",
    number: "05",
    title: "AI systems and automated processing",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          Automation Spectrum develops AI-enabled products. Information
          provided during a project or pilot may be processed using automated
          systems where this is necessary to deliver the agreed capability.
        </p>

        <p>
          Depending on the engagement, this may include:
        </p>

        <ul>
          <li>retrieval across approved enterprise information;</li>
          <li>classification, summarisation or analysis;</li>
          <li>operational anomaly and pattern analysis;</li>
          <li>generation of recommendations or draft responses;</li>
          <li>coordination of controlled agentic workflows.</li>
        </ul>

        <p>
          The applicable customer agreement should specify the data sources,
          purposes, access controls, hosting arrangements and responsibility
          for reviewing AI-generated outputs.
        </p>

        <p>
          Automation Spectrum does not currently intend its public website
          contact form to make decisions that significantly affect an
          individual&apos;s rights or interests solely through automated
          processing.
        </p>
      </>
    ),
  },
  {
    id: "disclosure",
    number: "06",
    title: "Disclosure of personal information",
    icon: Globe2,
    content: (
      <>
        <p>
          We may disclose personal information where reasonably necessary to:
        </p>

        <ul>
          <li>
            cloud hosting, email, form-processing, analytics, security and
            technology service providers;
          </li>
          <li>
            professional advisers, including accountants, lawyers, funding
            advisers and commercialisation advisers;
          </li>
          <li>
            contractors and implementation partners supporting an authorised
            engagement;
          </li>
          <li>
            government bodies, regulators or law-enforcement agencies where
            required or authorised by law;
          </li>
          <li>
            a potential purchaser, investor or transaction adviser in
            connection with a legitimate corporate transaction, subject to
            appropriate confidentiality arrangements.
          </li>
        </ul>

        <p>
          We do not sell personal information as a standalone commercial
          product.
        </p>
      </>
    ),
  },
  {
    id: "overseas",
    number: "07",
    title: "Overseas service providers",
    icon: Globe2,
    content: (
      <>
        <p>
          Some technology and professional service providers used by
          Automation Spectrum may store or process information outside
          Australia.
        </p>

        <p>
          The countries involved may vary depending on the hosting, email,
          communications, analytics, development or customer-selected services
          used at the relevant time.
        </p>

        <p>
          Where practicable, we take reasonable steps to select reputable
          providers and use contractual, technical and access controls
          appropriate to the nature of the information.
        </p>

        <p>
          Product-specific hosting locations and international data transfers
          may be addressed separately in customer agreements.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    number: "08",
    title: "Cookies and website technologies",
    icon: Cookie,
    content: (
      <>
        <p>
          Our website may use cookies and similar technologies for essential
          website operation, security, performance measurement and user
          experience.
        </p>

        <p>These technologies may collect information such as:</p>

        <ul>
          <li>browser and device type;</li>
          <li>pages viewed and referring sources;</li>
          <li>approximate location derived from an IP address;</li>
          <li>website errors and performance information;</li>
          <li>interaction with website navigation and forms.</li>
        </ul>

        <p>
          You can generally control cookies through your browser settings.
          Disabling essential cookies may affect website functionality.
        </p>

        <p>
          This section should be updated before enabling advertising,
          behavioural tracking or additional analytics technologies.
        </p>
      </>
    ),
  },
  {
    id: "security",
    number: "09",
    title: "Security and retention",
    icon: LockKeyhole,
    content: (
      <>
        <p>
          We take reasonable technical and organisational measures designed to
          protect personal information from misuse, interference, loss and
          unauthorised access, modification or disclosure.
        </p>

        <p>Measures may include:</p>

        <ul>
          <li>access controls and authentication;</li>
          <li>secure hosting and encrypted communications;</li>
          <li>system monitoring and logging;</li>
          <li>restricted access based on business responsibility;</li>
          <li>backups, software updates and security review;</li>
          <li>confidentiality and contractual controls.</li>
        </ul>

        <p>
          No internet transmission or storage system can be guaranteed to be
          completely secure.
        </p>

        <p>
          We retain personal information for as long as reasonably necessary
          for the relevant business, contractual, legal, security or record
          keeping purpose. Information that is no longer required may be
          deleted, destroyed or de-identified where appropriate.
        </p>
      </>
    ),
  },
  {
    id: "breaches",
    number: "10",
    title: "Data incidents",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          If we become aware of a suspected data incident, we will assess and
          respond to it according to the nature of the information, the
          potential harm and our applicable legal and contractual obligations.
        </p>

        <p>
          Where the Notifiable Data Breaches scheme applies and an eligible
          data breach occurs, affected individuals and the Office of the
          Australian Information Commissioner may need to be notified.
        </p>
      </>
    ),
  },
  {
    id: "access",
    number: "11",
    title: "Access and correction",
    icon: UserCheck,
    content: (
      <>
        <p>
          You may request access to personal information we hold about you or
          ask us to correct information that is inaccurate, incomplete,
          irrelevant, misleading or out of date.
        </p>

        <p>
          Please send your request to:
        </p>

        <a
          className="as-privacy-inline-link"
          href="mailto:contact@automationspectrum.com.au"
        >
          contact@automationspectrum.com.au
        </a>

        <p>
          We may need to verify your identity before responding. In some
          circumstances, access may be limited or refused where permitted by
          law. If that occurs, we will generally explain the reason unless we
          are legally prevented from doing so.
        </p>
      </>
    ),
  },
  {
    id: "marketing",
    number: "12",
    title: "Business communications",
    icon: Mail,
    content: (
      <>
        <p>
          We may send relevant product, pilot, event or business
          communications where you have requested them, where they relate to an
          existing business relationship, or where otherwise permitted by law.
        </p>

        <p>
          You may request that we stop sending non-essential marketing
          communications by using an unsubscribe option where provided or by
          contacting us.
        </p>

        <p>
          Service, security, contractual and transaction-related communications
          may still be sent where required.
        </p>
      </>
    ),
  },
  {
    id: "complaints",
    number: "13",
    title: "Privacy questions and complaints",
    icon: Scale,
    content: (
      <>
        <p>
          Please contact us if you have a question, concern or complaint about
          how we have handled personal information.
        </p>

        <div className="as-privacy-contact-card">
          <strong>Automation Spectrum Pty Ltd</strong>
          <span>Privacy Enquiries</span>

          <a href="mailto:contact@automationspectrum.com.au">
            contact@automationspectrum.com.au
          </a>

          <span>Melbourne, Victoria, Australia</span>
          <span>ABN 80 636 637 904</span>
        </div>

        <p>
          Please provide enough information for us to understand and
          investigate the matter. We will acknowledge and respond within a
          reasonable period.
        </p>

        <p>
          If you are not satisfied with our response and Australian privacy law
          applies, you may be able to raise the matter with the Office of the
          Australian Information Commissioner.
        </p>
      </>
    ),
  },
  {
    id: "updates",
    number: "14",
    title: "Changes to this policy",
    icon: FileText,
    content: (
      <>
        <p>
          We may update this Privacy Policy to reflect changes to our business,
          websites, products, service providers or legal obligations.
        </p>

        <p>
          The current version will be published on this website and will show
          the date on which it was last updated.
        </p>
      </>
    ),
  },
];

function PrivacyPolicyPage() {
  return (
    <main className="as-privacy-page">
      <section className="as-privacy-hero">
        <div className="as-privacy-hero__glow as-privacy-hero__glow--one" />
        <div className="as-privacy-hero__glow as-privacy-hero__glow--two" />

        <div className="as-privacy-container">
          <Link to="/" className="as-privacy-back">
            <ArrowLeft size={16} />
            Back to Automation Spectrum
          </Link>

          <div className="as-privacy-hero__badge">
            <ShieldCheck size={16} />
            Privacy and personal information
          </div>

          <h1>Privacy Policy</h1>

          <p>
            This policy explains how Automation Spectrum Pty Ltd manages
            personal information across its corporate activities, websites,
            products and commercial relationships.
          </p>

          <div className="as-privacy-hero__meta">
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

      <section className="as-privacy-content">
        <div className="as-privacy-container as-privacy-layout">
          <aside className="as-privacy-navigation">
            <div className="as-privacy-navigation__inner">
              <span>On this page</span>

              <nav aria-label="Privacy Policy sections">
                {policySections.map((section) => (
                  <a href={`#${section.id}`} key={section.id}>
                    <small>{section.number}</small>
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="as-privacy-policy">
            <div className="as-privacy-summary">
              <ShieldCheck size={23} />

              <div>
                <strong>Our approach</strong>

                <p>
                  Automation Spectrum aims to collect only information
                  reasonably necessary for its business activities and to
                  manage that information transparently, securely and
                  consistently with applicable privacy obligations.
                </p>
              </div>
            </div>

            {policySections.map((section) => {
              const Icon = section.icon;

              return (
                <section
                  id={section.id}
                  className="as-privacy-policy__section"
                  key={section.id}
                >
                  <div className="as-privacy-policy__heading">
                    <span className="as-privacy-policy__icon">
                      <Icon size={21} />
                    </span>

                    <div>
                      <small>{section.number}</small>
                      <h2>{section.title}</h2>
                    </div>
                  </div>

                  <div className="as-privacy-policy__body">
                    {section.content}
                  </div>
                </section>
              );
            })}

            <div className="as-privacy-policy__footer-note">
              <CheckCircle2 size={20} />

              <div>
                <strong>Need this policy in another format?</strong>

                <p>
                  Contact Automation Spectrum and we will take reasonable steps
                  to provide an accessible copy.
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

export default PrivacyPolicyPage;