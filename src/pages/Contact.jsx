import { site } from '../data/siteData'
import './Contact.css'

function Contact() {
  return (
    <section className="page-section">
      <header className="page-header">
        <p className="eyebrow">Contact</p>
        <h1>Get in touch</h1>
        <p className="lead">
          Open to connecting about projects, opportunities, learning, or
          collaboration.
        </p>
      </header>

      <div className="contact-grid">
        <article className="card contact-card">
          <h2>Email</h2>
          <p>The best way to reach me directly.</p>
          <a href={`mailto:${site.email}`} className="contact-link">
            {site.email}
          </a>
        </article>

        <article className="card contact-card">
          <h2>LinkedIn</h2>
          <p>Connect with me professionally.</p>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            fatima-alasbahi
          </a>
        </article>

        <article className="card contact-card">
          <h2>GitHub</h2>
          <p>See my code and project repositories.</p>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            @fatemaalasbahi
          </a>
        </article>
      </div>
    </section>
  )
}

export default Contact
