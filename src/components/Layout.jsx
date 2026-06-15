import { NavLink, Outlet } from 'react-router-dom'
import { navLinks, site } from '../data/siteData'
import './Layout.css'

function Layout() {
  return (
    <div className="site">
      <header className="site-header">
        <NavLink to="/" className="brand">
          <span className="brand-mark">FA</span>
          <span className="brand-text">{site.name}</span>
        </NavLink>
        <nav className="site-nav" aria-label="Main navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </p>
      </footer>
    </div>
  )
}

export default Layout
