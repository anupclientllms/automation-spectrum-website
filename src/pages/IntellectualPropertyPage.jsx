import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowLeft,
  Bot,
  Boxes,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Code2,
  Copyright,
  Database,
  FileCode2,
  FileText,
  Fingerprint,
  Globe2,
  Layers3,
  Lightbulb,
  LockKeyhole,
  Mail,
  Network,
  Palette,
  Scale,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

import "../styles/intellectualProperty.css";

const intellectualPropertySections = [
  {
    id: "purpose",
    number: "01",
    title: "Purpose of this notice",
    icon: FileText,
    content: (
      <>
        <p>
          This Intellectual Property Notice explains the permitted use of
          intellectual property presented on the Automation Spectrum Pty Ltd
          website, including material relating to separately incorporated
          technology businesses.
        </p>

        <p>
          It applies to public material made available through the Automation
          Spectrum website, including information relating to:
        </p>

        <ul>
          <li>Automation Spectrum Pty Ltd;</li>
          <li>EnerG IQ Tech;</li>
          <li>AIChatshoppie;</li>
          <li>pilot programs and demonstrations;</li>
          <li>technology, research and product architecture;</li>
          <li>graphics, diagrams, documents and user-interface material.</li>
        </ul>

        <p>
          Separate intellectual-property terms may apply to customer pilots,
          product subscriptions, integrations, development projects,
          partnerships and research collaborations.
        </p>
      </>
    ),
  },
  {
    id: "company-ownership",
    number: "02",
    title: "Company and product ownership",
    icon: Building2,
    content: (
      <>
        <p>
          Automation Spectrum Pty Ltd is an Australian enterprise AI technology
          company associated with AIChatshoppie and the founder-led development
          history of EnerG IQ Tech. EnerG IQ Tech Pty Ltd was separately
          incorporated on 19 October 2026 to advance EnerG IQ Tech development,
          demonstration and commercialisation.
        </p>

        <div className="as-ip-company-card">
          <div>
            <span>Legal entity</span>
            <strong>Automation Spectrum Pty Ltd</strong>
          </div>

          <div>
            <span>Australian Business Number</span>
            <strong>80 636 637 904</strong>
          </div>

          <div>
            <span>Australian Company Number</span>
            <strong>636 637 904</strong>
          </div>

          <div>
            <span>Separately incorporated energy platform company</span>
            <strong>EnerG IQ Tech Pty Ltd</strong>
          </div>

          <div>
            <span>EnerG IQ Tech ABN</span>
            <strong>67 703 353 468</strong>
          </div>

          <div>
            <span>Enterprise AI product</span>
            <strong>AIChatshoppie</strong>
          </div>
        </div>

        <p>
          EnerG IQ Tech Pty Ltd and Automation Spectrum Pty Ltd are distinct
          legal entities. The ownership, licensing and contracting arrangements
          applicable to particular technology or engagements are determined
          by the relevant rights and written agreements; this website does
          not assert an IP assignment between the companies.
        </p>
      </>
    ),
  },
  {
    id: "protected-material",
    number: "03",
    title: "Protected material",
    icon: Copyright,
    content: (
      <>
        <p>
          Intellectual property displayed, described or demonstrated through
          this website may belong to Automation Spectrum Pty Ltd, the
          relevant founder or other rights holders, including parties
          associated with EnerG IQ Tech. Publication here does not establish
          ownership by Automation Spectrum Pty Ltd.
        </p>

        <p>Protected material may include:</p>

        <ul>
          <li>source code, object code, APIs and software architecture;</li>
          <li>AI-agent designs and orchestration workflows;</li>
          <li>digital-twin models, logic and user experiences;</li>
          <li>
            machine-learning, retrieval and language-model configurations;
          </li>
          <li>prompts, templates, evaluation methods and guardrails;</li>
          <li>data schemas, taxonomies and normalisation approaches;</li>
          <li>algorithms, methodologies and technical documentation;</li>
          <li>product roadmaps, prototypes and demonstrations;</li>
          <li>website text, graphics, diagrams, videos and interface designs;</li>
          <li>research findings, reports, proposals and presentations;</li>
          <li>logos, icons, product names and visual brand elements.</li>
        </ul>
      </>
    ),
  },
  {
    id: "technology-ip",
    number: "04",
    title: "Technology and software intellectual property",
    icon: Code2,
    content: (
      <>
        <p>
          Technology described on this website may include reusable software
          components and platform capabilities developed across infrastructure,
          model, data and agentic-system layers. Rights in particular
          implementations remain with their respective rights holders.
        </p>

        <div className="as-ip-technology-grid">
          <div>
            <FileCode2 size={20} />
            <span>
              <strong>Application software</strong>
              <small>
                Frontend workspaces, APIs, services and product interfaces
              </small>
            </span>
          </div>

          <div>
            <BrainCircuit size={20} />
            <span>
              <strong>AI systems</strong>
              <small>
                Agents, prompts, models, retrieval and orchestration logic
              </small>
            </span>
          </div>

          <div>
            <Layers3 size={20} />
            <span>
              <strong>Digital twins</strong>
              <small>
                Asset models, simulations and operational relationships
              </small>
            </span>
          </div>

          <div>
            <Database size={20} />
            <span>
              <strong>Data architecture</strong>
              <small>
                Schemas, connectors, normalisation and intelligence pipelines
              </small>
            </span>
          </div>

          <div>
            <Workflow size={20} />
            <span>
              <strong>Decision workflows</strong>
              <small>
                Analysis, approval, execution and outcome-tracking processes
              </small>
            </span>
          </div>

          <div>
            <Network size={20} />
            <span>
              <strong>Integration capability</strong>
              <small>
                Gateway, enterprise, cloud, edge and system connectors
              </small>
            </span>
          </div>
        </div>

        <p>
          Viewing a demonstration, screenshot, diagram or description does not
          grant access to the underlying implementation or confer a right to
          reproduce it.
        </p>
      </>
    ),
  },
  {
    id: "product-ip",
    number: "05",
    title: "Product intellectual property",
    icon: Boxes,
    content: (
      <>
        <p>
          EnerG IQ Tech and AIChatshoppie contain distinct product-specific
          technology and share a founder-led engineering background.
          Their respective intellectual-property rights should not be
          inferred from their appearance together on this website.
        </p>

        <div className="as-ip-product-grid">
          <article className="as-ip-product-card as-ip-product-card--energy">
            <span className="as-ip-product-card__icon">
              <Zap size={24} />
            </span>

            <h3>EnerG IQ Tech</h3>

            <p>
              EnerG IQ Tech intellectual property may include operational digital
              twins, energy intelligence, decision agents, savings analysis,
              connected-asset workflows and industry-specific configurations.
            </p>
          </article>

          <article className="as-ip-product-card as-ip-product-card--enterprise">
            <span className="as-ip-product-card__icon">
              <BrainCircuit size={24} />
            </span>

            <h3>AIChatshoppie</h3>

            <p>
              AIChatshoppie intellectual property may include enterprise
              assistants, retrieval systems, agentic workflows, knowledge
              architectures, discovery experiences and domain-specific AI.
            </p>
          </article>
        </div>

        <p>
          Industry solutions, use cases and product configurations remain
          subject to the rights of their respective owners and the terms
          of applicable written agreements.
        </p>
      </>
    ),
  },
  {
    id: "brands",
    number: "06",
    title: "Names, logos and brand assets",
    icon: Palette,
    content: (
      <>
        <p>
          The names Automation Spectrum, EnerG IQ Tech and AIChatshoppie,
          together with their associated logos and visual elements, are
          associated with distinct business and product identities.
          Their appearance on this website does not establish common
          trademark or brand ownership.
        </p>

        <p>You must not use these assets in a way that:</p>

        <ul>
          <li>suggests endorsement or partnership without approval;</li>
          <li>creates confusion about product ownership;</li>
          <li>misrepresents your organisation as an authorised reseller;</li>
          <li>imitates the appearance of an official website or product;</li>
          <li>damages or weakens the distinctiveness of the brand;</li>
          <li>is misleading, unlawful or commercially deceptive.</li>
        </ul>

        <p>
          Written approval should be obtained from the relevant rights holder
          before using protected brand assets in public marketing, media, events, case studies or
          commercial material.
        </p>
      </>
    ),
  },
  {
    id: "website-use",
    number: "07",
    title: "Permitted website use",
    icon: Globe2,
    content: (
      <>
        <p>
          You may access and view public website material for legitimate
          personal, professional and internal business-information purposes.
        </p>

        <p>
          You may also share a normal link to a publicly accessible Automation
          Spectrum webpage, provided that the link does not misrepresent your
          relationship with Automation Spectrum.
        </p>

        <p>Without prior written permission, you must not:</p>

        <ul>
          <li>copy substantial portions of the website;</li>
          <li>republish website content as your own;</li>
          <li>sell, license or commercially distribute website material;</li>
          <li>modify logos or remove ownership notices;</li>
          <li>create derivative commercial products from demonstrations;</li>
          <li>frame or mirror the website in a misleading manner;</li>
          <li>use automated tools to extract protected material at scale;</li>
          <li>
            use website content to train, benchmark or improve a competing
            commercial system without authorisation.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "no-licence",
    number: "08",
    title: "No implied licence",
    icon: LockKeyhole,
    content: (
      <>
        <p>
          Access to this website does not grant a licence to software,
          products, patents, confidential information, trade secrets,
          methodologies, trademarks or other intellectual property of
          Automation Spectrum or any other relevant rights holder.
        </p>

        <p>
          Any right to access or use EnerG IQ Tech, AIChatshoppie, source code,
          documentation, APIs, models, connectors or customer environments must
          be granted expressly through a written licence, pilot agreement,
          subscription agreement or customer contract.
        </p>

        <p>
          No licence is created merely because a relevant technology provider:
        </p>

        <ul>
          <li>conducts a demonstration;</li>
          <li>shares a proposal or presentation;</li>
          <li>discusses a potential pilot;</li>
          <li>provides temporary test access;</li>
          <li>receives customer information or feedback;</li>
          <li>describes an architecture or technical method.</li>
        </ul>
      </>
    ),
  },
  {
    id: "customer-data",
    number: "09",
    title: "Customer data and customer materials",
    icon: Database,
    content: (
      <>
        <p>
          Customer data, documents, telemetry, records, branding and other
          customer-provided materials generally remain owned by the customer or
          the relevant rights holder.
        </p>

        <p>
          The relevant contracting party&apos;s right to access and process
          customer materials should be limited to the purposes described in
          the applicable agreement.
        </p>

        <p>
          Customer ownership of its materials does not, by itself, transfer
          ownership of a technology provider&apos;s:
        </p>

        <ul>
          <li>platform software;</li>
          <li>pre-existing product components;</li>
          <li>generic connectors and reusable integrations;</li>
          <li>AI-agent frameworks;</li>
          <li>digital-twin technology;</li>
          <li>models, prompts and retrieval architecture;</li>
          <li>general methodologies and development tools;</li>
          <li>improvements that do not disclose customer confidential information.</li>
        </ul>

        <p>
          Detailed data rights, usage permissions and retention arrangements
          should be addressed in the customer agreement.
        </p>
      </>
    ),
  },
  {
    id: "background-ip",
    number: "10",
    title: "Background and reusable intellectual property",
    icon: Layers3,
    content: (
      <>
        <p>
          Background intellectual property means technology, knowledge,
          designs, software, processes and materials that existed before an
          engagement or were developed independently of a particular customer
          project.
        </p>

        <p>
          Unless a written agreement states otherwise, each rights holder
          retains its own background intellectual property and reusable
          platform capability. This notice does not determine ownership
          of EnerG IQ Tech intellectual property.
        </p>

        <p>
          This may include components created or improved during a project
          where those components:
        </p>

        <ul>
          <li>are generic and reusable;</li>
          <li>do not reveal customer confidential information;</li>
          <li>are not uniquely commissioned customer materials;</li>
          <li>form part of a platform to which the relevant rights holder has rights;</li>
          <li>are improvements to the relevant rights holder&apos;s existing technology.</li>
        </ul>
      </>
    ),
  },
  {
    id: "project-outputs",
    number: "11",
    title: "Pilots and customer-specific outputs",
    icon: Workflow,
    content: (
      <>
        <p>
          Intellectual-property ownership for pilot reports, configured
          workspaces, integrations, custom software, models, dashboards,
          documents and other project outputs should be set out in the
          applicable written agreement.
        </p>

        <p>Depending on the engagement, the agreement may provide for:</p>

        <ul>
          <li>customer ownership of specified commissioned materials;</li>
          <li>a technology-provider licence to customer-specific materials;</li>
          <li>a customer licence to use the relevant provider&apos;s technology;</li>
          <li>shared rights in agreed collaborative research outputs;</li>
          <li>ownership of product improvements by the applicable rights holder;</li>
          <li>restrictions on reuse of confidential customer information.</li>
        </ul>

        <div className="as-ip-notice">
          <AlertTriangle size={19} />

          <p>
            The website itself does not determine ownership of customer-funded
            development. That ownership must be confirmed in the relevant
            signed agreement before project work begins.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "feedback",
    number: "12",
    title: "Feedback and product suggestions",
    icon: Lightbulb,
    content: (
      <>
        <p>
          Customers, users and partners may provide feedback about products,
          demonstrations or potential improvements discussed on this website.
        </p>

        <p>
          Use of feedback and suggestions is subject to applicable agreements
          and rights. The relevant technology provider may use general
          feedback to improve its products where permitted, without disclosing
          protected customer confidential information.
        </p>

        <p>
          Providing feedback does not automatically create:
        </p>

        <ul>
          <li>a right to product ownership;</li>
          <li>a royalty entitlement;</li>
          <li>a joint-development relationship;</li>
          <li>a patent or copyright assignment;</li>
          <li>an obligation to implement the suggestion.</li>
        </ul>
      </>
    ),
  },
  {
    id: "unsolicited-ideas",
    number: "13",
    title: "Unsolicited ideas and submissions",
    icon: Sparkles,
    content: (
      <>
        <p>
          Please do not send confidential inventions, source code, trade
          secrets, unpublished patent material or commercially sensitive
          concepts through a general website form.
        </p>

        <p>
          Information submitted without an existing confidentiality agreement
          may not be treated as confidential merely because the sender
          describes it as confidential.
        </p>

        <p>
          Before sharing a sensitive invention or commercial concept, contact
          Automation Spectrum to discuss whether a confidentiality agreement or
          another controlled process is appropriate.
        </p>
      </>
    ),
  },
  {
    id: "open-source",
    number: "14",
    title: "Open-source and third-party technology",
    icon: FileCode2,
    content: (
      <>
        <p>
          The products described on this website may use open-source software,
          third-party libraries, cloud services, models, datasets or other
          licensed technology.
        </p>

        <p>
          Those components remain subject to their applicable third-party
          licence terms and are not claimed as exclusively owned by Automation
          Spectrum.
        </p>

        <p>
          References to third-party technologies do not transfer ownership of
          proprietary configurations, integrations, orchestration, product
          designs or surrounding software held by their respective owners.
        </p>
      </>
    ),
  },
  {
    id: "ai-models",
    number: "15",
    title: "AI models, outputs and generated material",
    icon: Bot,
    content: (
      <>
        <p>
          AIChatshoppie and EnerG IQ Tech may use proprietary, open-source or
          third-party models as components within a larger product workflow.
        </p>

        <p>
          Ownership and permitted use of AI-generated outputs may depend on:
        </p>

        <ul>
          <li>the applicable customer agreement;</li>
          <li>the source information used;</li>
          <li>third-party model terms;</li>
          <li>customer instructions and user inputs;</li>
          <li>applicable copyright and other laws;</li>
          <li>whether the output contains protected third-party material.</li>
        </ul>

        <p>
          Automation Spectrum does not represent that every AI-generated output
          will qualify for intellectual-property protection or be free of all
          third-party rights.
        </p>
      </>
    ),
  },
  {
    id: "confidential-information",
    number: "16",
    title: "Confidential information and trade secrets",
    icon: Fingerprint,
    content: (
      <>
        <p>
          Certain materials presented by Automation Spectrum or a relevant
          technology provider may be confidential even where
          they are shared during a demonstration, pilot discussion, funding
          process, due-diligence exercise or commercial negotiation.
        </p>

        <p>Confidential material may include:</p>

        <ul>
          <li>non-public architecture and source code;</li>
          <li>security, infrastructure and deployment details;</li>
          <li>unreleased product features and roadmaps;</li>
          <li>commercial pricing and financial information;</li>
          <li>research methods and experimental results;</li>
          <li>customer information and project findings;</li>
          <li>grant, investor and commercialisation documentation.</li>
        </ul>

        <p>
          Confidential information must be used only for its authorised purpose
          and handled according to the applicable confidentiality agreement,
          contract or legal obligation.
        </p>
      </>
    ),
  },
  {
    id: "reverse-engineering",
    number: "17",
    title: "Reverse engineering and technical misuse",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          Except where expressly permitted by law or a written agreement, you
          must not:
        </p>

        <ul>
          <li>reverse engineer software belonging to a relevant rights holder;</li>
          <li>decompile or attempt to extract source code;</li>
          <li>circumvent technical protection measures;</li>
          <li>copy agent workflows or product logic to build a competing system;</li>
          <li>extract models, prompts, embeddings or private datasets;</li>
          <li>probe restricted APIs or product environments;</li>
          <li>use demonstrations to reproduce proprietary product functionality.</li>
        </ul>
      </>
    ),
  },
  {
    id: "copyright-requests",
    number: "18",
    title: "Copyright and infringement reports",
    icon: Scale,
    content: (
      <>
        <p>
          If you believe material on the Automation Spectrum website infringes
          your intellectual-property rights, please contact us with sufficient
          information to identify:
        </p>

        <ul>
          <li>the protected work or right;</li>
          <li>the allegedly infringing material;</li>
          <li>where the material appears;</li>
          <li>your relationship to the rights holder;</li>
          <li>your contact details;</li>
          <li>the action you are requesting.</li>
        </ul>

        <p>
          We may request further information before assessing or acting on a
          report.
        </p>
      </>
    ),
  },
  {
    id: "permissions",
    number: "19",
    title: "Permission requests",
    icon: CheckCircle2,
    content: (
      <>
        <p>
          Written permission should be requested before using protected
          Automation Spectrum material for:
        </p>

        <ul>
          <li>commercial publication;</li>
          <li>media or conference presentations;</li>
          <li>academic or research reproduction;</li>
          <li>marketing and promotional campaigns;</li>
          <li>training material or product demonstrations;</li>
          <li>reseller, partner or investor communications;</li>
          <li>creation of derivative software or product content.</li>
        </ul>

        <p>
          A permission request to the relevant rights holder should explain the material, intended use,
          audience, format and expected duration of use.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    number: "20",
    title: "Changes to this notice",
    icon: FileText,
    content: (
      <>
        <p>
          Automation Spectrum may update this notice to reflect changes to its
          products, intellectual-property portfolio, commercial arrangements or
          website.
        </p>

        <p>
          The current version will be published on this website and will show
          its effective date.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    number: "21",
    title: "Intellectual-property enquiries",
    icon: Mail,
    content: (
      <>
        <p>
          For Automation Spectrum website materials, permission requests,
          suspected infringement reports and intellectual-property enquiries
          may be directed to:
        </p>

        <div className="as-ip-contact-card">
          <strong>Automation Spectrum Pty Ltd</strong>
          <span>Intellectual Property Enquiries</span>

          <a href="mailto:contact@automationspectrum.com.au">
            contact@automationspectrum.com.au
          </a>

          <span>Melbourne, Victoria, Australia</span>
          <span>ABN 80 636 637 904</span>
        </div>

        <p>
          For EnerG IQ Tech-specific intellectual-property enquiries, contact
          EnerG IQ Tech Pty Ltd at{" "}
          <a href="mailto:anup@energiqtech.com">anup@energiqtech.com</a>.
        </p>
      </>
    ),
  },
];

function IntellectualPropertyPage() {
  return (
    <main className="as-ip-page">
      <section className="as-ip-hero">
        <div className="as-ip-hero__glow as-ip-hero__glow--one" />
        <div className="as-ip-hero__glow as-ip-hero__glow--two" />

        <div className="as-ip-container">
          <Link to="/" className="as-ip-back">
            <ArrowLeft size={16} />
            Back to Automation Spectrum
          </Link>

          <div className="as-ip-hero__badge">
            <Copyright size={16} />
            Technology, products and brand assets
          </div>

          <h1>Intellectual Property</h1>

          <p>
            This notice explains the permitted use of Automation Spectrum website
            material and technology information, including references to
            independently incorporated EnerG IQ Tech Pty Ltd.
          </p>

          <div className="as-ip-hero__meta">
            <span>
              <strong>Effective date</strong>
              22 July 2026
            </span>

            <span>
              <strong>Last updated</strong>
              21 October 2026
            </span>

            <span>
              <strong>Website operator</strong>
              Automation Spectrum Pty Ltd
            </span>
          </div>
        </div>
      </section>

      <section className="as-ip-content">
        <div className="as-ip-container as-ip-layout">
          <aside className="as-ip-navigation">
            <div className="as-ip-navigation__inner">
              <span>On this page</span>

              <nav aria-label="Intellectual Property sections">
                {intellectualPropertySections.map((section) => (
                  <a href={`#${section.id}`} key={section.id}>
                    <small>{section.number}</small>
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="as-ip-document">
            <div className="as-ip-summary">
              <ShieldCheck size={23} />

              <div>
                <strong>Ownership remains protected</strong>

                <p>
                  Public access to this website does not transfer ownership or
                  grant a licence to EnerG IQ Tech, AIChatshoppie or
                  underlying technology held by their respective rights holders.
                </p>
              </div>
            </div>

            {intellectualPropertySections.map((section) => {
              const Icon = section.icon;

              return (
                <section
                  id={section.id}
                  className="as-ip-document__section"
                  key={section.id}
                >
                  <div className="as-ip-document__heading">
                    <span className="as-ip-document__icon">
                      <Icon size={21} />
                    </span>

                    <div>
                      <small>{section.number}</small>
                      <h2>{section.title}</h2>
                    </div>
                  </div>

                  <div className="as-ip-document__body">
                    {section.content}
                  </div>
                </section>
              );
            })}

            <div className="as-ip-document__footer-note">
              <Mail size={20} />

              <div>
                <strong>Need permission to use our material?</strong>

                <p>
                  Contact Automation Spectrum regarding its website or materials.
                  For EnerG IQ Tech-specific permissions, contact
                  EnerG IQ Tech Pty Ltd directly.
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

export default IntellectualPropertyPage;