import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProjectsLayout from './pages/ProjectsLayout'
import ProjectsIndex from './pages/ProjectsIndex'
import ProjectDetail from './pages/ProjectDetail'
import Resume from './pages/Resume'
import Beyond from './pages/Beyond'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<ProjectsLayout />}>
          <Route index element={<ProjectsIndex />} />
          <Route path=":slug" element={<ProjectDetail />} />
        </Route>
        <Route path="resume" element={<Resume />} />
        <Route path="beyond" element={<Beyond />} />
      </Route>
    </Routes>
  )
}

export default App