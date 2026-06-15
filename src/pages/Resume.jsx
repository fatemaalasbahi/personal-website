import {
  certifications,
  education,
  projects,
  site,
  skills,
  work,
} from '../data/siteData'
import './Resume.css'

function Resume() {
  return (
    <section className="page-section resume-page">
      <header className="page-header resume-header">
        <div>
          <p className="eyebrow">Resume</p>
          <h1>{site.name}</h1>
          <p className="subtitle">{site.title}</p>
          <p className="lead">{site.location}</p>
        </div>
        <div className="resume-contact">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={site.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.resumePdf} download className="resume-download">
            Download PDF
          </a>
        </div>
      </header>

      <section className="resume-block">
        <h2>Summary</h2>
        <p>
          Computer science student at Memorial University with coursework and
          certifications in high-performance computing, machine learning, and
          cloud technologies. Experienced in Python-based data analysis,
          databases, MySQL, AWS, Microsoft Azure, community interpretation, and
          customer-facing roles. Fluent in Arabic and English.
        </p>
      </section>

      <section className="resume-block">
        <h2>Education</h2>
        {education.map((item) => (
          <article key={item.school} className="resume-item">
            <div className="resume-item-head">
              <h3>{item.school}</h3>
              <span>{item.period}</span>
            </div>
            <p className="subtitle">{item.program}</p>
            <p>{item.details}</p>
          </article>
        ))}
      </section>

      <section className="resume-block">
        <h2>Certifications & programs</h2>
        {certifications.map((item) => (
          <article key={item.title} className="resume-item">
            <div className="resume-item-head">
              <h3>{item.title}</h3>
              <span>{item.period}</span>
            </div>
            <p className="subtitle">{item.org}</p>
            {item.details && <p>{item.details}</p>}
          </article>
        ))}
      </section>

      <section className="resume-block">
        <h2>Experience</h2>
        {work.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="resume-item"
          >
            <div className="resume-item-head">
              <h3>{item.role}</h3>
              <span>{item.period}</span>
            </div>
            <p className="subtitle">{item.company}</p>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="resume-block">
        <h2>Projects</h2>
        {projects.map((project) => (
          <article key={project.name} className="resume-item">
            <div className="resume-item-head">
              <h3>{project.name}</h3>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
            <p>{project.description}</p>
            <p className="subtitle">{project.tech.join(' · ')}</p>
          </article>
        ))}
      </section>

      <section className="resume-block">
        <h2>Skills</h2>
        <p>{skills.technical.join(' · ')}</p>
        <p className="subtitle">Languages: {skills.languages.join(' · ')}</p>
      </section>
    </section>
  )
}

export default Resume
