import { Award, Code2, Download, ExternalLink, GraduationCap, MapPin } from 'lucide-react';
import { contact } from '../data/portfolio';

const GOOGLE_DRIVE_URL = 'https://drive.google.com/file/d/1oyGj6ecMIAS7Hxczmc2vZ3KE65H-luZL/view?usp=sharing';

const certifications = [
  'AWS Certified Cloud Practitioner',
  'Microsoft Certified: Azure Administrator (AZ-104)',
  '100xDevs Full Stack Cohort',
  'MongoDB University: Connecting to a MongoDB Database',
];

export default function Resume() {
  return (
    <section className="section-block resume-section" aria-labelledby="resume-title">
      <div className="page-shell">
        <div className="resume-hero">
          <div>
            <p className="eyebrow">Resume</p>
            <h1 id="resume-title">Resume and qualifications</h1>
            <p>
              Computer Science graduate with full-stack project experience, cloud credentials, and a focus on
              business and product analysis.
            </p>
          </div>
          <div className="resume-actions">
            <a className="primary-button" href={contact.resume} download="Saisrujan-Mishra-Resume.pdf">
              Download PDF <Download aria-hidden="true" />
            </a>
            <a className="secondary-button" href={GOOGLE_DRIVE_URL} target="_blank" rel="noreferrer">
              Open in Drive <ExternalLink aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="resume-summary-grid">
          <article className="resume-summary-card resume-summary-card--wide">
            <span className="resume-card-icon"><GraduationCap aria-hidden="true" /></span>
            <p className="eyebrow">Education</p>
            <h2>Vellore Institute of Technology</h2>
            <p>B.Tech in Computer Science & Engineering, specialization in Blockchain Technology</p>
            <div className="resume-meta"><span>2021–2025</span><span><MapPin aria-hidden="true" /> Vellore, India</span></div>
          </article>

          <article className="resume-summary-card">
            <span className="resume-card-icon"><Code2 aria-hidden="true" /></span>
            <p className="eyebrow">Core stack</p>
            <h2>Full-stack systems</h2>
            <p>React, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Supabase, Git, and Linux.</p>
          </article>

          <article className="resume-summary-card">
            <span className="resume-card-icon"><Award aria-hidden="true" /></span>
            <p className="eyebrow">Credentials</p>
            <h2>Cloud and development</h2>
            <ul>
              {certifications.map((certification) => <li key={certification}>{certification}</li>)}
            </ul>
          </article>
        </div>

        <div className="resume-document">
          <div className="resume-document-heading">
            <div>
              <p className="eyebrow">Original document</p>
              <h2>Full resume</h2>
            </div>
            <a className="text-link" href={contact.resume} target="_blank" rel="noreferrer">
              Open full screen <ExternalLink aria-hidden="true" />
            </a>
          </div>
          <iframe src={`${contact.resume}#view=FitH`} title="Saisrujan Mishra resume PDF" />
          <p className="resume-fallback">
            If the preview does not load, <a href={contact.resume} download>download the PDF</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
