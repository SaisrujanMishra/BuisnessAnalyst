import { ArrowDownRight } from 'lucide-react';

const workflow = [
  {
    number: '01',
    title: 'Frame the problem',
    text: 'Clarify the user, business goal, constraints, and the decision the work needs to support.',
  },
  {
    number: '02',
    title: 'Build the evidence',
    text: 'Map the journey, structure the data, and turn assumptions into requirements or testable measures.',
  },
  {
    number: '03',
    title: 'Ship the feedback loop',
    text: 'Deliver a dashboard, workflow, or product that makes the next decision faster and more reliable.',
  },
];

export default function About() {
  return (
    <section id="approach" className="section-block section-block--tint" aria-labelledby="approach-title">
      <div className="page-shell approach-grid">
        <div className="approach-copy">
          <p className="eyebrow">How I work</p>
          <h2 id="approach-title">Analyst brain.<br />Builder hands.</h2>
          <p className="lead-copy">
            I&apos;m a Computer Science graduate from VIT with hands-on full-stack experience and a growing focus on
            business and product analysis. I enjoy the work between a vague request and a useful, measurable result.
          </p>
          <div className="education-note">
            <ArrowDownRight aria-hidden="true" />
            <div>
              <strong>B.Tech, Computer Science & Engineering</strong>
              <span>Blockchain Technology · VIT Vellore · 2025</span>
            </div>
          </div>
        </div>

        <div className="workflow-list">
          {workflow.map((item) => (
            <article key={item.number} className="workflow-item">
              <span>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
