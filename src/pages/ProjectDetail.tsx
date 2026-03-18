import { useMemo } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import type { Project } from '../data/projects'

type ProjectsContext = {
  projects: Project[]
}

function ProjectDetail() {
  const { slug } = useParams()
  const { projects } = useOutletContext<ProjectsContext>()

  const project = useMemo(
    () => projects.find((item) => item.slug === slug),
    [projects, slug]
  )

  if (!project) {
    return (
      <div className="projects-placeholder">
        <h2>Project not found</h2>
        <p className="text-muted">Try selecting a project from the sidebar.</p>
      </div>
    )
  }

  return (
    <article className="project-writeup">
      <header className="mb-4">
        <h2 className="mb-2">{project.title}</h2>
        <p className="text-muted">{project.summary}</p>
        <div className="project-meta">
          <div>
            <span className="text-uppercase text-muted small">Role</span>
            <p className="mb-0 fw-semibold">{project.role}</p>
          </div>
          <div>
            <span className="text-uppercase text-muted small">Tech</span>
            <p className="mb-0">{project.tech.join(' · ')}</p>
          </div>
        </div>
      </header>

      <section className="mb-4">
        <h3 className="h5">Highlights</h3>
        <ul>
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h3 className="h5">Writeup</h3>
        <div
          className="content-stack"
          dangerouslySetInnerHTML={{ __html: project.writeup }}
        />
      </section>

      {project.lessonsLearned.length > 0 ? (
        <section>
          <h3 className="h5">Lessons Learned</h3>
          <ul>
            {project.lessonsLearned.map((lesson) => (
              <li key={lesson}>{lesson}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  )
}

export default ProjectDetail