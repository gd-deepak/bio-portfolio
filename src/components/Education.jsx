import styles from './Education.module.css'

const education = [
  {
    degree: 'Master of Computer Applications (M.C.A)',
    field: 'Computer Applications',
    institution: 'Institute of Industrial & Computer Management and Research (IICMR), Pune',
    university: 'Savitribai Phule Pune University',
    year: '2021 – 2023',
    grade: '8.53 CGPA',
    icon: '🎓',
    highlight: true,
  },
  {
    degree: 'Bachelor of Computer Science (B.C.S)',
    field: 'Computer Science',
    institution: 'Yashwantrao Chavhan College of Science, Karad',
    university: 'Shivaji University, Kolhapur',
    year: '2018 – 2021',
    grade: '8.5 CGPA',
    icon: '📚',
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <span className="section-label">शिक्षण</span>
        <h2 className="section-title">शैक्षणिक पात्रता</h2>

        <div className={styles.layout}>
          <div className={styles.timeline}>
            {education.map((edu, i) => (
              <div key={i} className={`${styles.item} ${edu.highlight ? styles.featured : ''}`}>
                <div className={styles.dotCol}>
                  <div className={styles.dot}>{edu.icon}</div>
                  {i < education.length - 1 && <div className={styles.line} />}
                </div>
                <div className={styles.card}>
                  {edu.highlight && <span className={styles.badge}>सर्वोच्च पदवी</span>}
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <p className={styles.field}>{edu.field}</p>
                  <p className={styles.institution}>🏫 {edu.institution}</p>
                  <p className={styles.university}>🎓 {edu.university}</p>
                  <div className={styles.meta}>
                    <span className={styles.year}>📅 {edu.year}</span>
                    <span className={styles.grade}>⭐ {edu.grade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.sidebar}>
            <h3 className={styles.subHead}>💼 नोकरीची माहिती</h3>
            <div className={styles.jobCard}>
              <span className={styles.jobIcon}>💼</span>
              <div>
                <p className={styles.jobLabel}>पद</p>
                <p className={styles.jobValue}>Software Developer</p>
              </div>
            </div>
            <div className={styles.jobCard}>
              <span className={styles.jobIcon}>🏢</span>
              <div>
                <p className={styles.jobLabel}>संस्था</p>
                <p className={styles.jobValue}>Vertical Relevance India Pvt. Ltd., Pune</p>
              </div>
            </div>

            <div className={styles.downloadBox}>
              <p className={styles.downloadText}>संपूर्ण जीवन परिचय डाउनलोड करा</p>
              <a
                href="/bio.pdf"
                download="दिपक_गाढवे_देशमुख_बायोडाटा.pdf"
                className={styles.downloadBtn}
              >
                📄 बायोडाटा डाउनलोड करा
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
