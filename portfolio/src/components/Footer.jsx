export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">G<span>.</span></div>

          <p className="footer-copy">
            © {year} Ganesh. Built with <span>♥</span> using React & Vite
          </p>

          <div className="footer-links">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>Home</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>Projects</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact</a>
          </div>
        </div>
      </footer>

      {/* Scroll-to-top button */}
      <button
        className="scroll-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    </>
  );
}
