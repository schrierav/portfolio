import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="container py-5">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout