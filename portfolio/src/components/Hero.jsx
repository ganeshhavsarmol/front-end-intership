import { motion } from 'framer-motion';
import GaneshhImage from '../assets/ganeshh.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left content */}
          <div>
            <motion.div
              className="hero-badge"
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={fadeUp}
            >
              <span className="hero-badge-dot" />
              Available for work
            </motion.div>

            <motion.p
              className="hero-greeting"
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUp}
            >
              Hey there! <span className="wave">👋</span>
            </motion.p>

            <motion.h1
              className="hero-name"
              initial="hidden"
              animate="visible"
              custom={0.3}
              variants={fadeUp}
            >
              I'm Ganesh
            </motion.h1>

            <motion.div
              className="hero-role-line"
              initial="hidden"
              animate="visible"
              custom={0.4}
              variants={fadeUp}
            >
              <h2 className="hero-role">
                <span className="hero-role-accent">Frontend</span> Developer
              </h2>
            </motion.div>

            <motion.p
              className="hero-description"
              initial="hidden"
              animate="visible"
              custom={0.5}
              variants={fadeUp}
            >
              I craft beautiful, performant web experiences with clean code
              and pixel-perfect design. Passionate about turning ideas into
              digital reality.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial="hidden"
              animate="visible"
              custom={0.6}
              variants={fadeUp}
            >
              <a
                href="#projects"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a
                href="#contact"
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </a>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial="hidden"
              animate="visible"
              custom={0.75}
              variants={fadeIn}
            >
              {[
                { number: '1+', label: 'Years Experience' },
                { number: '10+', label: 'Projects Built' },
                { number: '6', label: 'Technologies' },
              ].map((stat) => (
                <div key={stat.label} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — image */}
          <motion.div
            className="hero-image-area"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-image-wrapper">
              <div className="hero-image-bg" />
              <div className="hero-image-frame">
                <img src={GaneshhImage} alt="Ganesh - Frontend Developer" />
              </div>

              {/* Floating tech badges */}
              <div className="tech-badge-float badge-1">
                <span className="tech-icon-dot" style={{ background: '#61DBFB' }} />
                React.js
              </div>
              <div className="tech-badge-float badge-2">
                <span className="tech-icon-dot" style={{ background: '#F0DB4F' }} />
                JavaScript
              </div>
              <div className="tech-badge-float badge-3">
                <span className="tech-icon-dot" style={{ background: '#F54927' }} />
                HTML / CSS
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
