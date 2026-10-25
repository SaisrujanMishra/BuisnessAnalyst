import { ArrowUpRight, Download } from 'lucide-react';
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
            <p className="eyebrow">Saisrujan Mishra</p>
            <h1 id="resume-title">Resume and qualifications</h1>
            <p>
              Computer Science graduate with full-stack project experience and a focus on business and product analysis.
            </p>
          </div>
          <div className="resume-actions">
            <a className="primary-button" href={contact.resume} download="Saisrujan-Mishra-Resume.pdf">
              Download PDF <Download aria-hidden="true" />
            </a>
            <a className="text-link" href={GOOGLE_DRIVE_URL} target="_blank" rel="noreferrer">
              View in Drive <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="resume-records">
          <section className="resume-record" aria-labelledby="education-title">
            <h2 className="resume-record-label" id="education-title">Education</h2>
            <div className="resume-record-content">
              <h3>Vellore Institute of Technology</h3>
              <p>B.Tech in Computer Science & Engineering, specialization in Blockchain Technology.</p>
              <p className="resume-meta">2021–2025 · Vellore, India</p>
            </div>
          </section>

          <section className="resume-record" aria-labelledby="tools-title">
            <h2 className="resume-record-label" id="tools-title">Technical tools</h2>
            <div className="resume-record-content">
              <h3>Full-stack systems</h3>
              <p>React, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Supabase, Git, and Linux.</p>
            </div>
          </section>

          <section className="resume-record" aria-labelledby="credentials-title">
            <h2 className="resume-record-label" id="credentials-title">Credentials</h2>
            <div className="resume-record-content">
              <ul className="resume-credentials">
                {certifications.map((certification) => <li key={certification}>{certification}</li>)}
              </ul>
            </div>
          </section>
        </div>

        <section className="resume-document" aria-labelledby="resume-document-title">
          <div className="resume-document-heading">
            <h2 id="resume-document-title">Full resume</h2>
            <a className="text-link" href={contact.resume} target="_blank" rel="noreferrer">
              Open full screen <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <iframe src={`${contact.resume}#view=FitH`} title="Saisrujan Mishra resume PDF" loading="lazy" />
          <p className="resume-fallback">
            If the preview does not load, <a href={contact.resume} download>download the PDF</a>.
          </p>
        </section>
      </div>
    </section>
  );
}
