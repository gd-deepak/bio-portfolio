import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bgPattern} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.textSide}>
          <div className={styles.greeting}>
            <span className={styles.greetEmoji}>🙏</span>
            नमस्कार!
          </div>

          <h1 className={styles.name}>
            I'm <span className={styles.highlight}>दिपक शंकर गाढवे-देशमुख</span>
          </h1>

          <div className={styles.roleRow}>
            <span className={styles.roleDot} />
            <span className={styles.role}>Senior Software Engineer · M.C.A ·</span>
          </div>

          <p className={styles.company}>
            🏢 &nbsp;Vertical Relevance India Pvt. Ltd., Pune &nbsp;|&nbsp; 📍 Satara, Maharashtra
          </p>

          <p className={styles.tagline}>
            Building tomorrow's world through technology —<br />
            one code, one solution, one dream.
          </p>

          <div className={styles.actions}>
            <button
              className={styles.btnPrimary}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              संपर्क करा ✉
            </button>
            <a
              href="https://deepak-g.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPortfolio}
            >
              🌐 Live Portfolio
            </a>
            <a
              href="/bio.pdf"
              download="दिपक_गाढवे_देशमुख_बायोडाटा.pdf"
              className={styles.btnDownload}
            >
              📄 बायोडाटा डाउनलोड करा
            </a>
          </div>
        </div>

        <div className={styles.photoSide}>
          <div className={styles.photoOuter}>
            <div className={styles.photoRing} />
            <div className={styles.photoFrame}>
              <img
                src="/photos/WhatsApp Image 2026-06-12 at 22.54.31 (1).jpeg"
                alt="दिपक गाढवे-देशमुख"
                className={styles.photo}
              />
            </div>
          </div>
          <div className={styles.floatCard}>
            <span className={styles.floatIcon}>💻</span>
            <div>
              <div className={styles.floatTitle}>Software Engineer</div>
              <div className={styles.floatSub}>Vertical Relevance, Pune</div>
            </div>
          </div>
          <div className={`${styles.floatCard} ${styles.floatCard2}`}>
            <span className={styles.floatIcon}>🎓</span>
            <div>
              <div className={styles.floatTitle}>M.C.A पदवीधर</div>
              <div className={styles.floatSub}>सातारा, महाराष्ट्र</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollDot} />
        खाली स्क्रोल करा
      </div>
    </section>
  )
}
