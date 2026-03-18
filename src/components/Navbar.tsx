import { NavLink } from 'react-router-dom'

function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link${isActive ? ' active' : ''}`

  return (
    <nav className="navbar navbar-expand-sm border-bottom bg-white sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-semibold" to="/">
          Your Name
        </NavLink>
        <div className="navbar-nav ms-auto gap-2">
          <NavLink className={linkClass} to="/">
            Home
          </NavLink>
          <NavLink className={linkClass} to="/projects">
            Projects
          </NavLink>
          <NavLink className={linkClass} to="/resume">
            Resume
          </NavLink>
          <NavLink className={linkClass} to="/beyond">
            Beyond
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar