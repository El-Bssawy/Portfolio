import { useState } from "react";
import { useLang } from "../context/language";
import { links } from "../data/content";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(null);

  const copy = async (value, key) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHead title={t.contact.title} />

        <div className="contact-grid">
          <Reveal className="contact-info">
            <h3>
              {t.contact.heading}{" "}
              <span className="gradient-text">{t.contact.headingAccent}</span>
            </h3>
            <p>{t.contact.text}</p>

            <div className="info-list">
              {t.contact.info.map((info, i) => (
                <div className="info-row" key={info.title}>
                  <span className="info-icon">
                    <i className={info.icon}></i>
                  </span>
                  <div className="info-text">
                    <span className="info-label">{info.title}</span>
                    <span className="info-value" dir={info.ltr ? "ltr" : undefined}>
                      {info.value}
                    </span>
                  </div>
                  <div className="info-actions">
                    {info.mailto && (
                      <a
                        className="copy-btn mail-btn"
                        href={info.mailto}
                        aria-label="Email"
                        title="Email"
                      >
                        <i className="fa-regular fa-envelope"></i>
                      </a>
                    )}
                    {info.whatsapp && (
                      <a
                        className="copy-btn whatsapp-btn"
                        href={info.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="WhatsApp"
                        title="WhatsApp"
                      >
                        <i className="fa-brands fa-whatsapp"></i>
                      </a>
                    )}
                    <button
                      type="button"
                      className="copy-btn"
                      onClick={() => copy(info.value, i)}
                      aria-label="Copy"
                    >
                      <i
                        className={
                          copied === i ? "fa-solid fa-check" : "fa-regular fa-copy"
                        }
                      ></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-block">
              <h4>{t.contact.socialTitle}</h4>
              <div className="social-links">
                {links.social.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    title={s.name}
                  >
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="contact-form" delay={100}>
            <div className="form-head">
              <h3>{t.contact.form.title}</h3>
              <p>{t.contact.form.subtitle}</p>
            </div>

            <form action={links.formspree} method="POST">
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.form.name}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.form.email}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder={t.contact.form.subject}
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder={t.contact.form.message}
                required
              ></textarea>
              <button type="submit" className="btn btn-primary submit">
                {t.contact.form.send}
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
