function Projects() {
  return (
    <section>
      <header className="page-header">
        <h1>Projects</h1>
        <p className="text-muted">
          A few recent builds that showcase my frontend focus and product thinking.
        </p>
      </header>

      <div className="project-grid">
        {[
          {
            title: 'Project One',
            description:
              'A responsive product landing page focused on conversion and content clarity.',
            bullets: [
              'Built reusable UI sections with semantic HTML.',
              'Optimized page performance and accessibility.',
              'Implemented a scalable component layout.',
            ],
          },
          {
            title: 'Project Two',
            description:
              'A dashboard experience for monitoring key business metrics in real time.',
            bullets: [
              'Crafted data visualizations and summary cards.',
              'Designed a consistent spacing and typography system.',
              'Collaborated with stakeholders on UX decisions.',
            ],
          },
          {
            title: 'Project Three',
            description:
              'A lightweight portfolio CMS for quick content updates.',
            bullets: [
              'Structured content blocks for easy editing.',
              'Focused on clean, minimal visual language.',
              'Documented setup steps for fast onboarding.',
            ],
          },
        ].map((project) => (
          <article key={project.title} className="project-card">
            <h2 className="h4">{project.title}</h2>
            <p className="text-muted">{project.description}</p>
            <ul>
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="project-links text-muted">
              <span>Links: </span>
              <span>Live Demo · GitHub</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects