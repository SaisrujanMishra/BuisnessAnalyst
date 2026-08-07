import { ArrowDownRight } from 'lucide-react';

const workflow = [
  {
    number: '01',
    title: 'Define the decision',
    text: 'Clarify the user, objective, constraints, and the result the work needs to support.',
  },
  {
    number: '02',
    title: 'Structure the requirements',
    text: 'Map the workflow, document the needs, and turn assumptions into testable requirements.',
  },
  {
    number: '03',
    title: 'Build and evaluate',
    text: 'Deliver the product or analysis, test the result, and record what should improve next.',
  },
];

export default function About() {
  return (
    <section id="approach" className="section-block section-block--tint" aria-labelledby="approach-title">
      <div className="page-shell approach-grid">
        <div className="approach-copy">
          <p className="eyebrow">How I work</p>
          <h2 id="approach-title">From requirement to delivery</h2>
          <p className="lead-copy">
            I&apos;m a Computer Science graduate from VIT with full-stack experience, now focused on business and
            product analysis. I clarify the context, document the workflow, and build a result that can be tested.
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
