import styles from './Experience.module.css'

const jobs = [
  {
    role: 'Software Developer',
    company: 'Vertical Relevance India Pvt. Ltd.',
    location: 'Remote',
    duration: 'Nov 2025 – Present',
    current: true,
    icon: '🚀',
    color: '#e85d04',
    points: [
      'Building Money MovementHub StableCoin platform using Java 21 & Spring Boot with Hexagonal Architecture',
      'Implemented core banking: bank onboarding, USD ↔ USDC stablecoin conversion, Mint, Burn, Transfer In/Out',
      'Designed event-driven transaction pipelines using Apache Kafka',
      'Integrated Visa Direct & MasterCard for real-time cross-border fund transfers',
      'Code quality enforcement via SpotBugs, Checkstyle, Checkmarx (Gradle)',
    ],
    tech: ['Java 21', 'Spring Boot', 'Kafka', 'Hexagonal Arch', 'Visa Direct', 'MasterCard', 'PostgreSQL', 'Gradle'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Trinesis Technologies Pvt. Ltd.',
    location: 'Pune, India',
    duration: 'May 2023 – Nov 2025',
    current: false,
    icon: '💼',
    color: '#d97706',
    points: [
      'Built DRIMS — Document Records Information Management System with 17 backend microservices',
      'Designed intelligent metadata extraction and schema-based validation pipeline',
      'Integrated Elasticsearch for full-text & filtered search over millions of documents',
      'Managed secure document storage on AWS S3; enforced JWT auth/authorization',
      'Awarded Employee of the Month and Employee of the Year',
    ],
    tech: ['Java 17', 'Spring Boot', 'Microservices', 'Elasticsearch', 'AWS S3', 'PostgreSQL', 'JWT', 'Docker'],
  },
]

const awards = [
  { icon: '🏆', title: 'Employee of the Year', org: 'Trinesis Technologies Pvt. Ltd.' },
  { icon: '⭐', title: 'Employee of the Month', org: 'Trinesis Technologies Pvt. Ltd.' },
  { icon: '☁', title: 'AWS Solution Architect Associate', org: 'Amazon Web Services' },
  { icon: '🌐', title: 'CCNA Certified', org: 'Cisco Networking Academy' },
]

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <span className="section-label">कार्य अनुभव</span>
        <h2 className="section-title">व्यावसायिक प्रवास</h2>
        <p className="section-subtitle" style={{ marginBottom: '52px' }}>
          4+ years building fintech & enterprise platforms across high-performance distributed systems.
        </p>

        <div className={styles.layout}>
          <div className={styles.timeline}>
            {jobs.map((job, i) => (
              <div key={i} className={`${styles.item} ${job.current ? styles.current : ''}`}>
                <div className={styles.dotCol}>
                  <div className={styles.dot} style={{ background: job.color }}>{job.icon}</div>
                  {i < jobs.length - 1 && <div className={styles.line} />}
                </div>
                <div className={styles.card}>
                  {job.current && <span className={styles.badge}>सध्या कार्यरत</span>}
                  <div className={styles.cardTop}>
                    <div>
                      <h3 className={styles.role}>{job.role}</h3>
                      <p className={styles.company}>🏢 {job.company} &nbsp;·&nbsp; 📍 {job.location}</p>
                    </div>
                    <span className={styles.duration}>{job.duration}</span>
                  </div>
                  {/* <ul className={styles.points}>
                    {job.points.map((p, j) => (
                      <li key={j} className={styles.point}>{p}</li>
                    ))}
                  </ul> */}
                  {/* <div className={styles.techRow}>
                    {job.tech.map(t => (
                      <span key={t} className={styles.tech}>{t}</span>
                    ))}
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* <div className={styles.sidebar}>
            <h3 className={styles.sideTitle}>🏅 पुरस्कार & प्रमाणपत्रे</h3>
            {awards.map((a, i) => (
              <div key={i} className={styles.awardCard}>
                <span className={styles.awardIcon}>{a.icon}</span>
                <div>
                  <p className={styles.awardTitle}>{a.title}</p>
                  <p className={styles.awardOrg}>{a.org}</p>
                </div>
              </div>
            ))}

            <div className={styles.statsGrid}>
              {[
                { val: '4+', label: 'Years Exp.' },
                { val: '2', label: 'Companies' },
                { val: '19+', label: 'Microservices' },
                { val: '4', label: 'Certifications' },
              ].map(s => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statVal}>{s.val}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
