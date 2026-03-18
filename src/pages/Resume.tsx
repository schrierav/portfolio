import { useEffect } from 'react'
import resumePdf from '../assets/Ari Software Engineer Resume.pdf'

function Resume() {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <section className="resume-page text-center">
      <header className="page-header">
        <h1>Resume</h1>
        <p className="text-muted">
          Download the PDF or scroll through the embedded version below.
        </p>
      </header>

      <div className="d-flex flex-wrap gap-3 mb-4 justify-content-center">
        <a href={resumePdf} className="btn btn-primary" download>
          Download Resume (PDF)
        </a>
      </div>

      <div className="resume-frame shadow-sm border rounded">
        <iframe title="Resume" src={resumePdf} />
      </div>
    </section>
  )
}

export default Resume