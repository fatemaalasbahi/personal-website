import { certifications, education, work } from '../data/siteData'
import './Experience.css'

function Experience() {
  return (
    <section className="page-section">
      <header className="page-header">
        <p className="eyebrow">Experience</p>
        <h1>Education & work</h1>
        <p className="lead">
          My academic path, recent certifications, and the roles that have
          shaped how I learn and work with people.
        </p>
      </header>

      <div className="timeline-section">
        <h2>Education</h2>
        <div className="timeline">
          {education.map((item) => (
            <article key={item.school} className="timeline-item card">
              <div className="timeline-meta">{item.period}</div>
              <h3>{item.school}</h3>
              <p className="subtitle">{item.program}</p>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="timeline-section">
        <h2>Certifications & programs</h2>
        <div className="timeline">
          {certifications.map((item) => (
            <article key={item.title} className="timeline-item card">
              <div className="timeline-meta">{item.period}</div>
              <h3>{item.title}</h3>
              <p className="subtitle">{item.org}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="timeline-section">
        <h2>Work experience</h2>
        <div className="timeline">
          {work.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="timeline-item card"
            >
              <div className="timeline-meta">{item.period}</div>
              <h3>{item.role}</h3>
              <p className="subtitle">{item.company}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
