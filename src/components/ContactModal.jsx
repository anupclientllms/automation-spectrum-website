import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  CheckCircle2,
  Mail,
  MapPin,
  Send,
  Sparkles,
  X,
} from "lucide-react";

import "../styles/contact.css";

const initialForm = {
  name: "",
  email: "",
  company: "",
  phone: "",
  enquiryType: "",
  product: "",
  message: "",
  consent: false,
};

const enquiryTypes = [
  "AI pilot",
  "Product enquiry",
  "Technology partnership",
  "Investment opportunity",
  "Grant or research collaboration",
  "Enterprise AI project",
  "General enquiry",
];

const productOptions = [
  "EnergIQ",
  "AIChatshoppie",
  "Both products",
  "Not sure yet",
];

function ContactModal({ isOpen, onClose }) {
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      firstInputRef.current?.focus();
    }, 120);

    const handleKeyDown = (event) => {
      if (event.key === "Escape" && submissionStatus !== "submitting") {
        handleClose();
      }

      if (event.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]',
        );

        if (!focusableElements.length) {
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement =
          focusableElements[focusableElements.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === firstElement
        ) {
          event.preventDefault();
          lastElement.focus();
        }

        if (
          !event.shiftKey &&
          document.activeElement === lastElement
        ) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, submissionStatus]);

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.enquiryType) {
      nextErrors.enquiryType = "Please select an enquiry type.";
    }

    if (!formData.product) {
      nextErrors.product = "Please select a product.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please describe your enquiry.";
    } else if (formData.message.trim().length < 20) {
      nextErrors.message =
        "Please provide at least 20 characters of information.";
    }

    if (!formData.consent) {
      nextErrors.consent =
        "Please confirm that we may contact you about this enquiry.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: "",
      }));
    }

    if (submissionStatus === "error") {
      setSubmissionStatus("idle");
      setSubmissionMessage("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmissionStatus("error");
      setSubmissionMessage(
        "The contact service is not configured yet. Please email contact@automationspectrum.com.au.",
      );
      return;
    }

    setSubmissionStatus("submitting");
    setSubmissionMessage("");

    const templateParameters = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      company: formData.company.trim() || "Not provided",
      phone: formData.phone.trim() || "Not provided",
      enquiry_type: formData.enquiryType,
      product: formData.product,
      message: formData.message.trim(),
      reply_to: formData.email.trim(),
      submitted_from: window.location.href,
      to_email: "contact@automationspectrum.com.au",
    };

    try {
      await emailjs.send(
        serviceId,
        templateId,
        templateParameters,
        publicKey,
      );

      setSubmissionStatus("success");
      setSubmissionMessage(
        "Thank you. Your enquiry has been sent to Automation Spectrum.",
      );
      setFormData(initialForm);
      setErrors({});
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setSubmissionStatus("error");
      setSubmissionMessage(
        "We could not send your enquiry. Please try again or email contact@automationspectrum.com.au.",
      );
    }
  };

  const handleClose = () => {
    if (submissionStatus === "submitting") {
      return;
    }

    setFormData(initialForm);
    setErrors({});
    setSubmissionStatus("idle");
    setSubmissionMessage("");

    if (typeof onClose === "function") {
      onClose();
    }
  };

  //const handleBackdropClick = (event) => {
   // if (event.target === event.currentTarget) {
   //   handleClose();
  //  }
  //};

  const handleBackdropClick = (event) => {
  // Close only when the actual backdrop is clicked.
  // Interactions with the dialog, its content or its scrollbar must not close it.
    if (event.target !== event.currentTarget) {
      return;
    }

    handleClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="as-contact-modal"
      role="presentation"
      onMouseDown={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="as-contact-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-description"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="as-contact-modal__close"
          onClick={handleClose}
          disabled={submissionStatus === "submitting"}
          aria-label="Close contact form"
        >
          <X size={21} />
        </button>

        <aside className="as-contact-modal__aside">
          <div className="as-contact-modal__aside-glow" />

          <div className="as-contact-modal__brand">
            <span className="as-contact-modal__brand-icon">
              <Sparkles size={22} />
            </span>

            <span>
              <strong>
                Automation <em>Spectrum</em>
              </strong>
              <small>Applied AI Platforms</small>
            </span>
          </div>

          <div className="as-contact-modal__aside-content">
            <span className="as-contact-modal__eyebrow">
              Start a conversation
            </span>

            <h2 id="contact-modal-title">
              Discuss an AI project, pilot or partnership.
            </h2>

            <p id="contact-modal-description">
              Tell us about your operational or enterprise challenge.
              We will review the opportunity and contact you to discuss
              an appropriate next step.
            </p>

            <div className="as-contact-modal__topics">
              <div>
                <CheckCircle2 size={17} />
                EnergIQ energy and operational intelligence
              </div>

              <div>
                <CheckCircle2 size={17} />
                AIChatshoppie enterprise AI solutions
              </div>

              <div>
                <CheckCircle2 size={17} />
                Pilot and proof-of-value engagements
              </div>

              <div>
                <CheckCircle2 size={17} />
                Technology, investment and research partnerships
              </div>
            </div>
          </div>

          <div className="as-contact-modal__company-details">
            <div>
              <Building2 size={16} />

              <span>
                <strong>Automation Spectrum Pty Ltd</strong>
                <small>ABN 80 636 637 904</small>
              </span>
            </div>

            <div>
              <MapPin size={16} />

              <span>
                <strong>Melbourne, Australia</strong>
                <small>Supporting Australian and global organisations</small>
              </span>
            </div>

            <a href="mailto:contact@automationspectrum.com.au">
              <Mail size={16} />

              <span>
                <strong>contact@automationspectrum.com.au</strong>
                <small>Projects, pilots and partnerships</small>
              </span>
            </a>
          </div>
        </aside>

        <section className="as-contact-modal__form-section">
          {submissionStatus === "success" ? (
            <div className="as-contact-modal__success">
              <span className="as-contact-modal__success-icon">
                <CheckCircle2 size={35} />
              </span>

              <span className="as-contact-modal__eyebrow">
                Enquiry received
              </span>

              <h3>Thank you for contacting Automation Spectrum.</h3>

              <p>{submissionMessage}</p>

              <p className="as-contact-modal__success-note">
                A member of our team will review the information and
                respond using the email address you provided.
              </p>

              <button
                type="button"
                className="as-contact-modal__primary-button"
                onClick={handleClose}
              >
                Close
                <ArrowRight size={18} />
              </button>
            </div>
          ) : (
            <>
              <div className="as-contact-modal__form-header">
                <span className="as-contact-modal__eyebrow">
                  Enquiry details
                </span>

                <h3>How can we help?</h3>

                <p>
                  Fields marked with an asterisk are required.
                </p>
              </div>

              <form
                className="as-contact-modal__form"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="as-contact-modal__form-grid">
                  <div className="as-contact-modal__field">
                    <label htmlFor="contact-name">
                      Name <span>*</span>
                    </label>

                    <input
                      ref={firstInputRef}
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      autoComplete="name"
                      disabled={submissionStatus === "submitting"}
                      aria-invalid={Boolean(errors.name)}
                    />

                    {errors.name && (
                      <small className="as-contact-modal__field-error">
                        {errors.name}
                      </small>
                    )}
                  </div>

                  <div className="as-contact-modal__field">
                    <label htmlFor="contact-email">
                      Business email <span>*</span>
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      autoComplete="email"
                      disabled={submissionStatus === "submitting"}
                      aria-invalid={Boolean(errors.email)}
                    />

                    {errors.email && (
                      <small className="as-contact-modal__field-error">
                        {errors.email}
                      </small>
                    )}
                  </div>

                  <div className="as-contact-modal__field">
                    <label htmlFor="contact-company">
                      Organisation
                    </label>

                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company or organisation"
                      autoComplete="organization"
                      disabled={submissionStatus === "submitting"}
                    />
                  </div>

                  <div className="as-contact-modal__field">
                    <label htmlFor="contact-phone">Phone</label>

                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+61"
                      autoComplete="tel"
                      disabled={submissionStatus === "submitting"}
                    />
                  </div>

                  <div className="as-contact-modal__field">
                    <label htmlFor="contact-enquiry-type">
                      Enquiry type <span>*</span>
                    </label>

                    <select
                      id="contact-enquiry-type"
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      disabled={submissionStatus === "submitting"}
                      aria-invalid={Boolean(errors.enquiryType)}
                    >
                      <option value="">Select enquiry type</option>

                      {enquiryTypes.map((type) => (
                        <option value={type} key={type}>
                          {type}
                        </option>
                      ))}
                    </select>

                    {errors.enquiryType && (
                      <small className="as-contact-modal__field-error">
                        {errors.enquiryType}
                      </small>
                    )}
                  </div>

                  <div className="as-contact-modal__field">
                    <label htmlFor="contact-product">
                      Product or platform <span>*</span>
                    </label>

                    <select
                      id="contact-product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      disabled={submissionStatus === "submitting"}
                      aria-invalid={Boolean(errors.product)}
                    >
                      <option value="">Select a product</option>

                      {productOptions.map((product) => (
                        <option value={product} key={product}>
                          {product}
                        </option>
                      ))}
                    </select>

                    {errors.product && (
                      <small className="as-contact-modal__field-error">
                        {errors.product}
                      </small>
                    )}
                  </div>

                  <div className="as-contact-modal__field as-contact-modal__field--full">
                    <label htmlFor="contact-message">
                      Tell us about your requirement <span>*</span>
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe the business problem, available data, target operations or AI capability you would like to explore."
                      rows={6}
                      maxLength={2000}
                      disabled={submissionStatus === "submitting"}
                      aria-invalid={Boolean(errors.message)}
                    />

                    <div className="as-contact-modal__textarea-meta">
                      <span>
                        {errors.message && (
                          <small className="as-contact-modal__field-error">
                            {errors.message}
                          </small>
                        )}
                      </span>

                      <small>{formData.message.length}/2000</small>
                    </div>
                  </div>
                </div>

                <div className="as-contact-modal__consent">
                  <label>
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      disabled={submissionStatus === "submitting"}
                    />

                    <span className="as-contact-modal__checkbox">
                      <CheckCircle2 size={14} />
                    </span>

                    <span>
                      I agree that Automation Spectrum may contact me
                      regarding this enquiry. <strong>*</strong>
                    </span>
                  </label>

                  {errors.consent && (
                    <small className="as-contact-modal__field-error">
                      {errors.consent}
                    </small>
                  )}
                </div>

                {submissionStatus === "error" && (
                  <div
                    className="as-contact-modal__status as-contact-modal__status--error"
                    role="alert"
                  >
                    <AlertCircle size={18} />
                    <span>{submissionMessage}</span>
                  </div>
                )}

                <div className="as-contact-modal__form-footer">
                  <p>
                    By submitting this form, you acknowledge our{" "}
                    <a href="/privacy-policy">Privacy Policy</a>.
                  </p>

                  <button
                    type="submit"
                    className="as-contact-modal__primary-button"
                    disabled={submissionStatus === "submitting"}
                  >
                    {submissionStatus === "submitting" ? (
                      <>
                        <span className="as-contact-modal__spinner" />
                        Sending enquiry
                      </>
                    ) : (
                      <>
                        Send enquiry
                        <Send size={17} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </section>
      </div>
    </div>
  );
}

export default ContactModal;