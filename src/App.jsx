import './App.css'

function App() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Personal landing page</p>
        <h1>Fatema Alasbahi</h1>
        <p className="bio">
          Building thoughtful web experiences with modern tools. Welcome to my
          corner of the internet.
        </p>
      </header>

      <section className="links" aria-label="Contact links">
        <a
          href="https://github.com/fatemaalasbahi"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a href="mailto:hello@example.com">Email</a>
      </section>

      <footer className="footer">
        <p>Built with Vite + React · Deployed on Vercel</p>
      </footer>
    </main>
  )
}

export default App
