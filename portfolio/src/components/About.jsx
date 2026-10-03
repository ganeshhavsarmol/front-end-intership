import { motion } from 'framer-motion';
import MyImage from '../assets/me.jpeg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const highlights = [
  {
    icon: '🎨',
    title: 'UI/UX Focus',
    desc: 'Pixel-perfect designs that delight users',
  },
  {
    icon: '⚡',
    title: 'Performance',
    desc: 'Optimized code for fast load times',
  },
  {
    icon: '📱',
    title: 'Responsive',
    desc: 'Flawless on all devices and screens',
  },
  {
    icon: '🤝',
    title: 'Collaborative',
    desc: 'Team player with clear communication',
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          {/* Left — image */}
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-image-frame">
              <img src={MyImage} alt="Ganesh" />
            </div>
            <div className="about-image-accent" />
            <div className="experience-badge">
              <div className="exp-number">1+</div>
              <div className="exp-label">Years of<br />Experience</div>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            className="about-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp}>
              <span className="section-tag">👤 About Me</span>
              <h2 className="section-title">
                Crafting Digital<br />
                <span>Experiences</span>
              </h2>
              <div className="section-divider" />
            </motion.div>

            <motion.p className="about-text" variants={fadeUp} style={{ marginTop: 24 }}>
              I'm <strong style={{ color: 'var(--text-primary)' }}>Ganesh</strong>, a passionate Frontend Developer
              based in India with 1+ years of hands-on experience building
              responsive and user-friendly web applications.
            </motion.p>

            <motion.p className="about-text" variants={fadeUp}>
              I specialize in bringing designs to life using modern web technologies.
              My approach combines clean, maintainable code with creative problem-solving
              to deliver digital experiences that users love.
            </motion.p>

            <motion.p className="about-text" variants={fadeUp}>
              When I'm not coding, I'm exploring new frontend trends, contributing
              to projects, and continuously leveling up my skills.
            </motion.p>

            <motion.div className="about-highlights" variants={fadeUp}>
              {highlights.map((item) => (
                <div key={item.title} className="highlight-item">
                  <div className="highlight-icon">{item.icon}</div>
                  <div className="highlight-title">{item.title}</div>
                  <div className="highlight-desc">{item.desc}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
