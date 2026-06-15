import { useEffect, useState } from 'react'
import styles from './Footer.module.css'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/deepak-gadhave-deshmukh/', icon: 'in' },
  { label: 'GitHub', href: 'https://github.com/gd-deepak', icon: '⌥' },
  { label: 'Instagram', href: 'https://www.instagram.com/its_ro.hit', icon: '📷' },
  { label: 'WhatsApp', href: 'https://wa.me/919096365035', icon: '💬' },
]

export default function Footer() {
  const [visitors, setVisitors] = useState(0)

  useEffect(() => {
    fetch('https://countapi.mileshilliard.com/api/v1/hit/deepak_bio_visits')
      .then((res) => res.json())
      .then((data) => setVisitors(data.value))
      .catch((err) => console.error(err))
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>दिपक गाढवे-देशमुख</span>
          <p className={styles.tagline}>सॉफ्टवेअर अभियंता | सातारा, महाराष्ट्र 🇮🇳</p>
        </div>

        <div className={styles.mid}>
          <div className={styles.socialRow}>
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={s.label}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <p className={styles.visitors}>
            👀 : {visitors.toLocaleString()}
          </p>

          <p className={styles.copy}>
            © {new Date().getFullYear()} सर्व हक्क राखीव · React &amp; Vite ने बनवले
          </p>
        </div>

        <button
          className={styles.top}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑ वर जा
        </button>
      </div>
    </footer>
  )
}