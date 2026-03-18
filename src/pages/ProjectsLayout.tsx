import { NavLink, Outlet } from 'react-router-dom'
import { projects } from '../data/projects'

function ProjectsLayout() {
  return (
    <section className="projects-layout">
      <aside className="projects-nav">
        <h1 className="h4 mb-3">Projects</h1>
        <nav className="nav flex-column">
          {projects.map((project) => (
            <NavLink
              key={project.slug}
              to={`/projects/${project.slug}`}
              className={({ isActive }) =>
                `nav-link${isActive ? ' active' : ''}`
              }
            >
              {project.title}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="projects-detail">
        <Outlet context={{ projects }} />
      </div>
    </section>
  )
}

export default ProjectsLayout