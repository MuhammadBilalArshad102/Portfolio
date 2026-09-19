import { useState } from "react";
import { contact, profile } from "../data/portfolioData";
import Reveal from "./Reveal";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  SendIcon,
  CheckCircleIcon,
} from "./Icons";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validate = () => {
    const next = {};

    if (!form.name.trim()) {
      next.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "That email doesn't look right.";
    }

    if (!form.message.trim()) {
      next.message = "Add a short message.";
    } else if (form.message.trim().length < 10) {
      next.message = "A little more detail would help.";
    }

    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("sending");

    try {
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      const response = await fetch(
        "https://formspree.io/f/xjyvvvnn",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: new FormData(e.target),
        }
      );

      if (response.ok) {
        setStatus("sent");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const contactItems = [
    {
      icon: MailIcon,
      label: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: PhoneIcon,
      label: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    },
    {
      icon: MapPinIcon,
      label: profile.location,
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: GithubIcon,
      href: profile.socials.github,
      label: "GitHub",
    },
    {
      icon: LinkedinIcon,
      href: profile.socials.linkedin,
      label: "LinkedIn",
    },
    {
      icon: TwitterIcon,
      href: profile.socials.twitter,
      label: "Twitter",
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-2">Get in touch</p>

          <h2 className="section-heading">
            {contact.heading}
          </h2>

          <p className="mt-2 font-mono text-sm text-ink-500 dark:text-paper-200/60">
            {contact.subheading}
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-14">
          <Reveal delay={100}>
            <div className="space-y-8">
              <p className="text-ink-700 dark:text-paper-200/90 leading-relaxed">
                {contact.description}
              </p>

              <ul className="space-y-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  const content = (
                    <span className="flex items-center gap-3 text-sm">
                      <span className="w-9 h-9 rounded-md bg-ink-900/5 dark:bg-paper-100/8 flex items-center justify-center text-ink-700 dark:text-paper-100 shrink-0">
                        <Icon width={16} height={16} />
                      </span>

                      <span className="text-ink-700 dark:text-paper-200/90">
                        {item.label}
                      </span>
                    </span>
                  );

                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="hover:text-amber-dark dark:hover:text-amber transition-colors inline-block"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="flex gap-3 pt-2">
                {socialLinks.map((s) => {
                  const Icon = s.icon;

                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-md border border-ink-900/15 dark:border-paper-100/15 flex items-center justify-center text-ink-700 dark:text-paper-100 hover:border-teal hover:text-teal-dark dark:hover:text-teal hover:-translate-y-0.5 transition-all duration-150"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="card p-6 sm:p-8 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-xs text-ink-500 dark:text-paper-200/60 mb-1.5"
                >
                  name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full px-3.5 py-2.5 rounded-md bg-paper-50 dark:bg-ink-900 border text-sm text-ink-900 dark:text-paper-50 placeholder:text-ink-400 dark:placeholder:text-paper-200/30 focus:outline-none focus:ring-2 focus:ring-teal/50 transition-shadow ${
                    errors.name
                      ? "border-red-400"
                      : "border-ink-900/15 dark:border-paper-100/15"
                  }`}
                />

                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs text-ink-500 dark:text-paper-200/60 mb-1.5"
                >
                  email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full px-3.5 py-2.5 rounded-md bg-paper-50 dark:bg-ink-900 border text-sm text-ink-900 dark:text-paper-50 placeholder:text-ink-400 dark:placeholder:text-paper-200/30 focus:outline-none focus:ring-2 focus:ring-teal/50 transition-shadow ${
                    errors.email
                      ? "border-red-400"
                      : "border-ink-900/15 dark:border-paper-100/15"
                  }`}
                />

                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs text-ink-500 dark:text-paper-200/60 mb-1.5"
                >
                  message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What are you building?"
                  className={`w-full px-3.5 py-2.5 rounded-md bg-paper-50 dark:bg-ink-900 border text-sm text-ink-900 dark:text-paper-50 placeholder:text-ink-400 dark:placeholder:text-paper-200/30 focus:outline-none focus:ring-2 focus:ring-teal/50 transition-shadow resize-none ${
                    errors.message
                      ? "border-red-400"
                      : "border-ink-900/15 dark:border-paper-100/15"
                  }`}
                />

                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sent" ? (
                  <>
                    <CheckCircleIcon /> Message sent
                  </>
                ) : status === "sending" ? (
                  "Sending…"
                ) : (
                  <>
                    Send message <SendIcon />
                  </>
                )}
              </button>

              {status === "sent" && (
                <p className="text-xs text-teal-dark dark:text-teal text-center font-mono">
                  Thanks — I'll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-xs text-red-500 text-center font-mono">
                  Something went wrong — try again, or email me directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}