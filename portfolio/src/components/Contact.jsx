import { useState } from 'react';
import { motion } from 'framer-motion';

const contactDetails = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'avsarmolganesh93@gmail.com',
    href: 'mailto:avsarmolganesh93@gmail.com',
    isLink: true,
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+91 93229 78542',
    href: 'tel:+919322978542',
    isLink: true,
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Chikhli, Buldhana, India',
    isLink: false,
  },
];

const socials = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    href: 'https://github.com/ganeshhavsarmol',
    label: 'GitHub',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    href: 'https://www.linkedin.com/in/ganesh-avsarmol-7a24b542a/',
    label: 'LinkedIn',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open mailto with form data
    const mailto = `mailto:avsarmolganesh93@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailto, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 60 }}
        >
          <span className="section-tag">📬 Get In Touch</span>
          <h2 className="section-title">
            Let's Work <span>Together</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle" style={{ marginTop: 16 }}>
            Got a project in mind? I'd love to hear about it and help bring it to life.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="contact-info-card">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, marginBottom: 8, color: 'var(--text-primary)' }}>
                Contact Info
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 24 }}>
                Feel free to reach out through any of the channels below.
              </p>

              {contactDetails.map((detail) => (
                <div key={detail.label} className="contact-detail">
                  <div className="contact-detail-icon">{detail.icon}</div>
                  <div>
                    <div className="contact-detail-label">{detail.label}</div>
                    {detail.isLink ? (
                      <a href={detail.href} className="contact-detail-value">
                        {detail.value}
                      </a>
                    ) : (
                      <span className="contact-detail-value">{detail.value}</span>
                    )}
                  </div>
                </div>
              ))}

              <div className="social-links" style={{ marginTop: 32 }}>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 600, alignSelf: 'center' }}>Follow me:</div>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="contact-form-card">
              <div className="form-header">
                <h3>Send a Message</h3>
                <p>I usually respond within 24 hours. ⚡</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      placeholder="Ganesh Avsarmol"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="hello@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    placeholder="Project Collaboration"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="form-submit">
                  {sent ? (
                    <>✅ Message Sent! Opening email client...</>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
