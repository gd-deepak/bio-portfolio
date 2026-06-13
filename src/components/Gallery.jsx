import { useState } from 'react'
import { photos as photoPaths } from 'virtual:photos'
import styles from './Gallery.module.css'

// Spans assigned by position so the layout looks nice regardless of count
function getSpan(i, total) {
  if (i === 0) return 'tall'
  if (total > 3 && i === Math.floor(total / 2)) return 'wide'
  return ''
}

const photos = photoPaths.map((src, i) => ({
  src,
  caption: `फोटो ${i + 1}`,
  span: getSpan(i, photoPaths.length),
}))

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  if (photos.length === 0) return null

  return (
    <section id="gallery">
      <div className="container">
        <span className="section-label">फोटो गॅलरी</span>
        {/* <h2 className="section-title">माझे छायाचित्रण</h2> */}
        <p className="section-subtitle" style={{ marginBottom: '48px' }}>
          फोटो पाहण्यासाठी फोटो वर क्लिक करा. &nbsp;({photos.length} फोटो)
        </p>

        <div className={styles.grid}>
          {photos.map((p, i) => (
            <div
              key={i}
              className={`${styles.cell} ${p.span === 'tall' ? styles.tall : ''} ${p.span === 'wide' ? styles.wide : ''}`}
              onClick={() => setLightbox({ ...p, index: i })}
            >
              <img src={p.src} alt={p.caption} className={styles.img} loading="lazy" />
              <div className={styles.overlay}>
                <span className={styles.caption}>{p.caption}</span>
                <span className={styles.zoomIcon}>🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <div className={styles.lightboxInner} onClick={e => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setLightbox(null)}>✕</button>

            {lightbox.index > 0 && (
              <button
                className={`${styles.navBtn} ${styles.navPrev}`}
                onClick={() => setLightbox({ ...photos[lightbox.index - 1], index: lightbox.index - 1 })}
              >‹</button>
            )}

            <img src={lightbox.src} alt={lightbox.caption} className={styles.lightboxImg} />

            {lightbox.index < photos.length - 1 && (
              <button
                className={`${styles.navBtn} ${styles.navNext}`}
                onClick={() => setLightbox({ ...photos[lightbox.index + 1], index: lightbox.index + 1 })}
              >›</button>
            )}

            <p className={styles.lightboxCaption}>
              {lightbox.caption} &nbsp;·&nbsp; {lightbox.index + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
