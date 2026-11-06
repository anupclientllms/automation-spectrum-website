
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Check,
  CalendarClock,
  CalendarDays,
  Clock3,
  Users,
  ClipboardList,
  Workflow,
  BellRing,
  Database,
  BarChart3,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  RefreshCw,
  MapPin,
  Truck,
  Settings2,
  Zap,
} from "lucide-react";

import "../styles/scheduling-operations.css";

const capabilities = [
  {
    icon: CalendarDays,
    title: "Appointments & bookings",
    text: "Coordinate customer appointments, service bookings and availability across teams and connected calendars.",
  },
  {
    icon: ClipboardList,
    title: "Job & task scheduling",
    text: "Create, prioritise and assign jobs based on availability, deadlines, skills and operational requirements.",
  },
  {
    icon: Users,
    title: "Staff rostering & allocation",
    text: "Support shift planning, staff allocation and workload balancing using business-defined rules and constraints.",
  },
  {
    icon: Truck,
    title: "Dispatch & field operations",
    text: "Coordinate field service visits, job assignments, locations and operational updates across mobile teams.",
  },
  {
    icon: BellRing,
    title: "Reminders & notifications",
    text: "Automate appointment reminders, job updates, task notifications and approved customer communications.",
  },
  {
    icon: BarChart3,
    title: "Operational visibility",
    text: "Bring together job status, scheduling exceptions, team workloads and operational performance information.",
  },
];

const useCases = [
  {
    icon: Settings2,
    title: "Trades & field services",
    text: "Coordinate technicians, service appointments, work orders, customer notifications and job completion updates.",
  },
  {
    icon: Users,
    title: "Professional services",
    text: "Manage consultations, project tasks, staff availability, recurring activities and client appointments.",
  },
  {
    icon: Workflow,
    title: "Growing operations teams",
    text: "Connect work requests, resource allocation, internal approvals and cross-team task coordination.",
  },
];

const steps = [
  {
    number: "01",
    title: "Capture",
    text: "Receive booking requests, work orders, tasks and operational requirements from connected channels.",
  },
  {
    number: "02",
    title: "Plan",
    text: "Apply scheduling rules, availability, priorities and resource constraints to prepare assignments.",
  },
  {
    number: "03",
    title: "Coordinate",
    text: "Confirm assignments, notify relevant people and connect updates with existing business systems.",
  },
  {
    number: "04",
    title: "Monitor",
    text: "Track progress, identify exceptions and support rescheduling or escalation when conditions change.",
  },
];

const outcomes = [
  "Less manual coordination across calendars and spreadsheets",
  "Clearer visibility into appointments, jobs and workloads",
  "Scheduling rules aligned with business constraints",
  "Automated reminders and operational status updates",
  "Integration with CRM, ERP and workforce systems",
  "Human control over exceptions and critical decisions",
];

function SchedulingOperations({ openContactModal }) {
  const handleContact = () => {
    if (typeof openContactModal === "function") {
      openContactModal();
    } else {
      window.location.href =
        "mailto:contact@automationspectrum.com.au?subject=Scheduling%20and%20Operations%20Automation%20Enquiry";
    }
  };

  return (
    <main className="as-scheduling-page">
      {/* HERO */}
      <section className="as-scheduling-hero">
        <div
          className="as-scheduling-glow as-scheduling-glow--left"
          aria-hidden="true"
        />
        <div
          className="as-scheduling-glow as-scheduling-glow--right"
          aria-hidden="true"
        />

        <div className="as-scheduling-container as-scheduling-hero__grid">
          <div className="as-scheduling-hero__copy">
            <span className="as-scheduling-eyebrow">
              <CalendarClock size={15} />
              SCHEDULING & OPERATIONS
            </span>

            <h1>
              Better scheduling.
              <span> Smoother operations.</span>
            </h1>

            <p>
              Automation Spectrum helps businesses coordinate
              appointments, jobs, people and operational workflows
              through intelligent scheduling, connected systems
              and practical automation.
            </p>

            <div className="as-scheduling-actions">
              <button
                type="button"
                className="as-scheduling-button as-scheduling-button--primary"
                onClick={handleContact}
              >
                Discuss your scheduling workflow
                <ArrowRight size={18} />
              </button>

              <a
                href="#scheduling-capabilities"
                className="as-scheduling-button as-scheduling-button--secondary"
              >
                Explore capabilities
                <ChevronRight size={18} />
              </a>
            </div>

            <div className="as-scheduling-highlights">
              <span>
                <Check size={16} />
                Reduce manual coordination
              </span>
              <span>
                <Check size={16} />
                Connect existing systems
              </span>
              <span>
                <Check size={16} />
                Manage exceptions
              </span>
            </div>
          </div>

          {/* ILLUSTRATIVE SCHEDULING WORKFLOW */}
          <div
            className="as-scheduling-visual"
            aria-label="Illustrative scheduling and operations workflow"
          >
            <div className="as-scheduling-visual__top">
              <span>
                <Sparkles size={17} />
                OPERATIONS WORKFLOW
              </span>
              <span className="as-scheduling-visual__demo">
                ILLUSTRATIVE
              </span>
            </div>

            <div className="as-scheduling-board">
              <div className="as-scheduling-board__header">
                <div>
                  <span className="as-scheduling-board__icon">
                    <CalendarDays size={22} />
                  </span>
                  <div>
                    <strong>Team Schedule</strong>
                    <small>Example daily operations view</small>
                  </div>
                </div>
                <span className="as-scheduling-board__badge">
                  3 JOBS
                </span>
              </div>

              <div className="as-scheduling-board__rows">
                <div className="as-scheduling-board__row">
                  <span className="as-scheduling-board__time">
                    09:00
                  </span>
                  <div className="as-scheduling-board__job">
                    <span className="as-scheduling-board__job-title">
                      <ClipboardList size={15} />
                      Service appointment
                    </span>
                    <small>
                      <MapPin size={12} />
                      Assigned technician
                    </small>
                  </div>
                  <CheckCircle2
                    size={18}
                    className="as-scheduling-board__complete"
                  />
                </div>

                <div className="as-scheduling-board__row">
                  <span className="as-scheduling-board__time">
                    11:30
                  </span>
                  <div className="as-scheduling-board__job">
                    <span className="as-scheduling-board__job-title">
                      <Users size={15} />
                      Client consultation
                    </span>
                    <small>
                      <Clock3 size={12} />
                      Confirmed booking
                    </small>
                  </div>
                  <CheckCircle2
                    size={18}
                    className="as-scheduling-board__complete"
                  />
                </div>

                <div className="as-scheduling-board__row">
                  <span className="as-scheduling-board__time">
                    14:00
                  </span>
                  <div className="as-scheduling-board__job">
                    <span className="as-scheduling-board__job-title">
                      <Settings2 size={15} />
                      Maintenance visit
                    </span>
                    <small>
                      <RefreshCw size={12} />
                      Awaiting confirmation
                    </small>
                  </div>
                  <Clock3
                    size={18}
                    className="as-scheduling-board__pending"
                  />
                </div>
              </div>
            </div>

            <div className="as-scheduling-visual__workflow">
              <div className="as-scheduling-visual__workflow-item">
                <span className="as-scheduling-visual__workflow-icon">
                  <Database size={19} />
                </span>
                <div>
                  <strong>Booking request received</strong>
                  <small>Connected calendar or business system</small>
                </div>
                <CheckCircle2
                  size={18}
                  className="as-scheduling-visual__check"
                />
              </div>

              <div className="as-scheduling-visual__workflow-item">
                <span className="as-scheduling-visual__workflow-icon">
                  <Workflow size={19} />
                </span>
                <div>
                  <strong>Scheduling rules applied</strong>
                  <small>Availability, priorities and constraints</small>
                </div>
                <CheckCircle2
                  size={18}
                  className="as-scheduling-visual__check"
                />
              </div>

              <div className="as-scheduling-visual__workflow-item">
                <span className="as-scheduling-visual__workflow-icon">
                  <BellRing size={19} />
                </span>
                <div>
                  <strong>Notifications prepared</strong>
                  <small>Confirmation and follow-up workflow</small>
                </div>
                <Clock3
                  size={18}
                  className="as-scheduling-visual__pending"
                />
              </div>
            </div>

            <div className="as-scheduling-visual__footer">
              <ShieldCheck size={15} />
              Scheduling decisions follow defined business rules
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        id="scheduling-capabilities"
        className="as-scheduling-section as-scheduling-capabilities"
      >
        <div className="as-scheduling-container">
          <div className="as-scheduling-heading">
            <span className="as-scheduling-kicker">
              INTELLIGENT OPERATIONS
            </span>

            <h2>
              Coordinate work with
              <span> less manual effort.</span>
            </h2>

            <p>
              Connect scheduling, resource allocation and operational
              activities across your teams while maintaining
              visibility and control over changing priorities.
            </p>
          </div>

          <div className="as-scheduling-card-grid">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <article
                className="as-scheduling-card"
                key={title}
              >
                <div className="as-scheduling-card__icon">
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span
                  className="as-scheduling-card__accent"
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="as-scheduling-section as-scheduling-usecases">
        <div className="as-scheduling-container">
          <div className="as-scheduling-heading">
            <span className="as-scheduling-kicker">
              PRACTICAL APPLICATIONS
            </span>

            <h2>
              Designed for businesses
              <span> managing people and work.</span>
            </h2>

            <p>
              From field service appointments to internal team
              coordination, we design scheduling solutions around
              real operational requirements.
            </p>
          </div>

          <div className="as-scheduling-usecase-grid">
            {useCases.map(({ icon: Icon, title, text }) => (
              <article
                className="as-scheduling-usecase"
                key={title}
              >
                <Icon size={29} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="as-scheduling-section as-scheduling-process">
        <div className="as-scheduling-container">
          <div className="as-scheduling-heading">
            <span className="as-scheduling-kicker">
              HOW IT WORKS
            </span>

            <h2>
              From work request to
              <span> coordinated delivery.</span>
            </h2>

            <p>
              We combine scheduling rules, connected data and
              intelligent workflow assistance to support everyday
              operations.
            </p>
          </div>

          <div className="as-scheduling-steps">
            {steps.map((step) => (
              <article
                className="as-scheduling-step"
                key={step.number}
              >
                <span className="as-scheduling-step__number">
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
      <section className="as-scheduling-section as-scheduling-outcomes">
        <div className="as-scheduling-container as-scheduling-split">
          <div className="as-scheduling-outcomes__copy">
            <span className="as-scheduling-kicker">
              CONNECTED & CONTROLLED
            </span>

            <h2>
              Automate coordination.
              <span> Keep teams in control.</span>
            </h2>

            <p>
              Scheduling automation can prepare assignments,
              identify conflicts and coordinate updates.
              Important exceptions, operational changes and
              resource decisions can remain subject to human
              review and approval.
            </p>

            <Link
              to="/technology"
              className="as-scheduling-text-link"
            >
              Explore our technology
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="as-scheduling-outcomes__panel">
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
      <section className="as-scheduling-cta">
        <div className="as-scheduling-container as-scheduling-cta__grid">
          <div>
            <span className="as-scheduling-kicker">
              WORK WITH AUTOMATION SPECTRUM
            </span>

            <h2>
              Spending too much time
              <span> coordinating work?</span>
            </h2>

            <p>
              Tell us about your scheduling and operational
              challenges. We can explore how intelligent
              automation could simplify coordination, improve
              visibility and connect your existing systems.
            </p>
          </div>

          <div className="as-scheduling-cta__actions">
            <button
              type="button"
              className="as-scheduling-button as-scheduling-button--primary"
              onClick={handleContact}
            >
              Book an AI discovery conversation
              <ArrowRight size={18} />
            </button>

            <Link
              to="/services/business-automation"
              className="as-scheduling-button as-scheduling-button--secondary"
            >
              Explore business automation
              <Zap size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SchedulingOperations;
