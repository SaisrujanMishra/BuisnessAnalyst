const workflow = [
  {
    number: '01',
    title: 'Understand the context',
    text: 'Clarify the user, objective, constraints, and the decision the work needs to support.',
  },
  {
    number: '02',
    title: 'Make the requirements clear',
    text: 'Map the workflow, document the needs, and turn assumptions into testable requirements.',
  },
  {
    number: '03',
    title: 'Build, test, and refine',
    text: 'Deliver the product or analysis, evaluate the result, and document what should improve next.',
  },
];

export default function About() {
  return (
    <section id="approach" className="section-block approach-section" aria-labelledby="approach-title">
      <div className="page-shell approach-grid">
        <div className="approach-copy" data-reveal>
          <p className="eyebrow">01 / Approach</p>
          <h2 id="approach-title">From context to a working result.</h2>
          <p className="lead-copy">
            My background is in Computer Science. My focus is business and product analysis, supported by
            experience building full-stack applications and machine-learning projects.
          </p>
          <p className="education-note">
            <strong>B.Tech, Computer Science & Engineering</strong>
            <span>VIT Vellore · Blockchain Technology · 2025</span>
          </p>
        </div>
        <div className="workflow-list">
          {workflow.map((item) => (
            <article key={item.number} className="workflow-item" data-reveal>
              <span className="workflow-number" aria-hidden="true">{item.number}</span>
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
