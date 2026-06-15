import { skills } from '../data/siteData'
import './Skills.css'

function Skills() {
  return (
    <section className="page-section">
      <header className="page-header">
        <p className="eyebrow">Skills</p>
        <h1>What I work with</h1>
        <p className="lead">
          A mix of programming, data, and computing skills I have been building
          through coursework, certifications, and hands-on projects.
        </p>
      </header>

      <div className="skills-grid">
        <article className="card">
          <h2>Technical skills</h2>
          <div className="tag-list">
            {skills.technical.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </article>

        <article className="card">
          <h2>Languages</h2>
          <div className="tag-list">
            {skills.languages.map((language) => (
              <span key={language} className="tag accent">
                {language}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Skills
