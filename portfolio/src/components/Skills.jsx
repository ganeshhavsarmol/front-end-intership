import { motion } from 'framer-motion';

const skills = [
  {
    name: 'HTML5',
    icon: '🌐',
    desc: 'Semantic markup, accessibility & modern HTML features',
    level: 90,
    color: '#F54927',
    bg: 'rgba(245, 73, 39, 0.12)',
  },
  {
    name: 'CSS3',
    icon: '🎨',
    desc: 'Flexbox, Grid, animations, and responsive design',
    level: 88,
    color: '#2965F1',
    bg: 'rgba(41, 101, 241, 0.12)',
  },
  {
    name: 'JavaScript',
    icon: '⚡',
    desc: 'ES6+, DOM manipulation, async/await & APIs',
    level: 82,
    color: '#F0DB4F',
    bg: 'rgba(240, 219, 79, 0.12)',
  },
  {
    name: 'React',
    icon: '⚛️',
    desc: 'Hooks, components, state management & JSX',
    level: 78,
    color: '#61DBFB',
    bg: 'rgba(97, 219, 251, 0.12)',
  },
  {
    name: 'Git',
    icon: '🔧',
    desc: 'Version control, branching & merge workflows',
    level: 75,
    color: '#F1502F',
    bg: 'rgba(241, 80, 47, 0.12)',
  },
  {
    name: 'GitHub',
    icon: '🐙',
    desc: 'Collaboration, pull requests & open source',
    level: 75,
    color: '#ffffff',
    bg: 'rgba(255, 255, 255, 0.08)',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">🛠️ What I Know</span>
          <h2 className="section-title">
            My Tech <span>Stack</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Technologies I use to build modern, responsive, and performant web applications.
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={container}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={card}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div
                className="skill-icon-wrapper"
                style={{ background: skill.bg }}
              >
                <span style={{ fontSize: 34 }}>{skill.icon}</span>
              </div>

              <div className="skill-name">{skill.name}</div>
              <div className="skill-desc">{skill.desc}</div>

              <div className="skill-level">
                <div className="skill-level-label">
                  <span>Proficiency</span>
                  <span style={{ color: skill.color }}>{skill.level}%</span>
                </div>
                <div className="skill-level-bar">
                  <motion.div
                    className="skill-level-fill"
                    style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
