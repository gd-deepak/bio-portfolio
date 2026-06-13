import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'माझ्याबद्दल', id: 'about' },
  { label: 'शिक्षण', id: 'education' },
  { label: 'अनुभव', id: 'experience' },
  { label: 'फोटो', id: 'gallery' },
  { label: 'संपर्क', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <button className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          दिपक
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          {links.map(l => (
            <button key={l.id} className={styles.navLink} onClick={() => handleNav(l.id)}>
              {l.label}
            </button>
          ))}
          <a
            href="https://deepak-g.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.portfolioBtn}
          >
            🌐 Portfolio
          </a>
        </nav>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="मेनू उघडा"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`} />
        </button>
      </div>
    </header>
  )
}
