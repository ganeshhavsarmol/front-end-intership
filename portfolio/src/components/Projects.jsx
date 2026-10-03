import { motion } from 'framer-motion';
import TravelImage from '../assets/trip.png';
import ShopImage from '../assets/shop.png';
import UserImage from '../assets/profile.png';

const projects = [
  {
    id: '01',
    title: 'Travel Website',
    description:
      'A stunning travel destination website featuring beautiful locations, trip planning features, and an immersive visual experience for adventure seekers.',
    image: TravelImage,
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://travel-page-manali.vercel.app/',
    githubUrl: 'https://github.com/ganeshhavsarmol',
  },
  {
    id: '02',
    title: 'Shopping Web Store',
    description:
      'A modern e-commerce storefront with product listings, responsive layout, intuitive navigation, and a smooth shopping experience for users.',
    image: ShopImage,
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    liveUrl: 'https://shopping-webstore.vercel.app/',
    githubUrl: 'https://github.com/ganeshhavsarmol',
  },
  {
    id: '03',
    title: 'Live User List',
    description:
      'A real-time user management application that fetches and displays live user data with search, filter, and dynamic updating capabilities.',
    image: UserImage,
    tech: ['React', 'JavaScript', 'REST API'],
    liveUrl: 'https://live-userlist.vercel.app/',
    githubUrl: 'https://github.com/ganeshhavsarmol',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="projects-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">💼 Portfolio</span>
            <h2 className="section-title">
              Featured <span>Projects</span>
            </h2>
            <div className="section-divider" />
            <p className="section-subtitle" style={{ marginTop: 16 }}>
              A selection of projects that showcase my skills and experience.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={container}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="project-card"
              variants={cardVariant}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Image */}
              <div className="project-image-container">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-image-overlay" />
                <span className="project-number">Project {project.id}</span>
              </div>

              {/* Body */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech-stack">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-project-primary"
                  >
                    <ExternalIcon />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-project-secondary"
                  >
                    <GithubIcon />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
