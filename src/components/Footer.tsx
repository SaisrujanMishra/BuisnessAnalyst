import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contact } from '../data/portfolio';

export default function Footer() {
  const [copyStatus, setCopyStatus] = useState('Copy email');
  const resetTimer = useRef<number>();

  useEffect(() => () => {
    if (resetTimer.current) window.clearTimeout(resetTimer.current);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopyStatus('Email copied');
    } catch {
      setCopyStatus('Select the email to copy');
    }
    if (resetTimer.current) window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setCopyStatus('Copy email'), 2400);
  };

  return (
    <footer id="contact" className="site-footer">
      <div className="page-shell">
        <div className="footer-contact">
          <p className="eyebrow">Contact</p>
          <h2 className="footer-title">Discuss a role or project.</h2>
          <p className="footer-description">
            Open to business, product, and technical analyst opportunities in Mumbai or remotely.
          </p>
          <div className="footer-email-row">
            <a className="footer-email" href={`mailto:${contact.email}`}>
              {contact.email} <ArrowUpRight aria-hidden="true" />
            </a>
            <button className="text-button footer-copy" type="button" onClick={copyEmail}>
              <span aria-live="polite">{copyStatus}</span>
            </button>
          </div>
        </div>

        <nav className="footer-links" aria-label="Contact and profile links">
          <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <Link to="/resume">Resume</Link>
        </nav>

        <div className="footer-bottom">
          <Link className="footer-signature" to="/">Saisrujan Mishra</Link>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
