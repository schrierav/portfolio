import { Link } from "react-router-dom";
import headshot from "../assets/headshot.jpg";

function Home() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* LEFT SIDE (TEXT) */}
        <div className="col-md-6 text-center text-md-start">
          <p className="text-uppercase text-muted fw-semibold small">
            Software Engineer • Cloud Infrastructure • Full-Stack
          </p>

          <h1 className="display-5 fw-bold">
            Hi, I’m Ari.
          </h1>

          <p className="lead text-muted">
            I'm an English-teacher-turned-software-engineer who builds scalable systems and automation pipelines, with a focus on cloud infrastructure and real-world reliability.
          </p>

          <div className="d-flex flex-wrap gap-3 mt-4 justify-content-center justify-content-md-start">
            <Link className="btn btn-outline-primary" to="/projects">
              See What I've Made
            </Link>
            <Link className="btn btn-outline-primary" to="/resume">
              Check Out My Resume
            </Link>
            <Link className="btn btn-outline-primary" to="https://www.linkedin.com/in/ari-schrier/" target="_blank" rel="noopener noreferrer">
              Find Me On LinkedIn
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src={headshot}
            alt="Ari"
            className="img-fluid rounded-circle shadow"
            style={{
              width: "250px",
              height: "250px",
              objectFit: "cover"
            }}
          />
        </div>

      </div>
    </div>
  );
}

export default Home;