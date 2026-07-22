import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contact } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-grid">
        <div>
          <p className="eyebrow">Let&apos;s make the problem clearer.</p>
          <h2 className="footer-title">Have a role, project, or messy workflow?</h2>
          <a className="text-link footer-email" href={`mailto:${contact.email}`}>
            {contact.email}
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="footer-links" aria-label="Footer navigation">
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <a href={contact.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a>
          <a href={`mailto:${contact.email}`}><Mail aria-hidden="true" /> Email</a>
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <span>Designed and built by Saisrujan Mishra.</span>
        <span>React + TypeScript · {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
