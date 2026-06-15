import { Link } from 'react-router-dom'
import { site } from '../data/siteData'
import './Home.css'

function Home() {
  return (
    <section className="home">
      <div className="home-grid">
        <div className="profile-card">
          <img
            src={site.profilePhoto}
            alt={`Portrait of ${site.name}`}
            className="avatar"
          />
          <p className="eyebrow">{site.title}</p>
          <h1>{site.name}</h1>
          <p className="tagline">{site.tagline}</p>
          <p className="location">{site.location}</p>

          <div className="home-links">
            <a href={site.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${site.email}`}>Email</a>
            <a href={site.resumePdf} download>
              Resume PDF
            </a>
          </div>
        </div>

        <div className="home-panels">
          <article className="panel">
            <h2>About me</h2>
            <p>
              Computer science student at Memorial University with interests in
              AI, high-performance computing, photography, and genetics.
            </p>
            <Link to="/about" className="text-link">
              Read more →
            </Link>
          </article>

          <article className="panel">
            <h2>Featured project</h2>
            <p>
              Offshore Equipment Escalation Agent — an IBM watsonx Hackathon
              project with team SFVS-Hackers, where I worked on UI/UX and
              frontend development.
            </p>
            <Link to="/projects" className="text-link">
              View projects →
            </Link>
          </article>

          <article className="panel">
            <h2>Resume</h2>
            <p>
              Education, certifications, work experience, and skills — online or
              as a downloadable PDF.
            </p>
            <Link to="/resume" className="text-link">
              View resume →
            </Link>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Home
