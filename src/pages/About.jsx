import { about } from '../data/siteData'
import './About.css'

function About() {
  return (
    <section className="page-section">
      <header className="page-header">
        <p className="eyebrow">About</p>
        <h1>Who I am</h1>
        <p className="lead">{about.intro}</p>
      </header>

      <div className="about-grid">
        <article className="card">
          <h2>Interests</h2>
          <ul>
            {about.interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h2>Hobbies</h2>
          <ul>
            {about.hobbies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default About
