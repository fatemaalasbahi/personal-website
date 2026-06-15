import { projects } from '../data/siteData'
import './Projects.css'

function Projects() {
  return (
    <section className="page-section">
      <header className="page-header">
        <p className="eyebrow">Projects</p>
        <h1>Things I have built</h1>
        <p className="lead">
          Projects that reflect my interest in data, computing, and practical
          problem solving.
        </p>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            key={project.name}
            className={
              project.highlight ? 'project-card card featured' : 'project-card card'
            }
          >
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="tag-list">
              {project.tech.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  View on GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
