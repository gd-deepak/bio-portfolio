import styles from './Skills.module.css'

const techSkills = [
  { name: 'Java 8 / 11 / 21', level: 92 },
  { name: 'Spring Boot & Spring Security', level: 90 },
  { name: 'Apache Kafka (Event-Driven)', level: 82 },
  { name: 'Microservices / Hexagonal Arch.', level: 85 },
  { name: 'PostgreSQL / MySQL / Redis', level: 80 },
  { name: 'Elasticsearch / OpenSearch', level: 75 },
  { name: 'AWS (S3, EC2, ECS, CloudWatch)', level: 78 },
  { name: 'Docker / JWT / REST APIs', level: 82 },
]

const techCategories = [
  { icon: '☕', label: 'Languages', items: ['Java 8/11/21', 'SQL'] },
  { icon: '🍃', label: 'Frameworks', items: ['Spring Boot', 'Spring Security', 'Hibernate / JPA', 'Lombok'] },
  { icon: '📨', label: 'Messaging', items: ['Apache Kafka', 'Event-Driven', 'Hexagonal Arch.'] },
  { icon: '🗄', label: 'Databases', items: ['PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch'] },
  { icon: '☁', label: 'Cloud & DevOps', items: ['AWS S3/EC2/ECS', 'Docker', 'Flyway', 'Liquibase'] },
  { icon: '🔐', label: 'Security & QA', items: ['JWT', 'Okta', 'JUnit', 'Mockito', 'SonarQube', 'Checkmarx'] },
  { icon: '💳', label: 'Payments', items: ['Visa Direct', 'MasterCard', 'Stablecoin / USDC'] },
  { icon: '🛠', label: 'Tools', items: ['Gradle', 'Git / Bitbucket', 'Swagger', 'Postman', 'Jira'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <span className="section-label">कौशल्ये</span>
        <h2 className="section-title">तांत्रिक कौशल्ये</h2>
        <p className="section-subtitle" style={{ marginBottom: '52px' }}>
          4+ years of hands-on expertise across Java backend, cloud, distributed systems & payment integrations.
        </p>

        <div className={styles.layout}>
          <div className={styles.barsCol}>
            <h3 className={styles.colTitle}>📊 Proficiency Levels</h3>
            <div className={styles.bars}>
              {techSkills.map(s => (
                <div key={s.name} className={styles.barItem}>
                  <div className={styles.barMeta}>
                    <span className={styles.barName}>{s.name}</span>
                    <span className={styles.barPct}>{s.level}%</span>
                  </div>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.gridCol}>
            <h3 className={styles.colTitle}>🗂 Tech Stack Overview</h3>
            <div className={styles.catGrid}>
              {techCategories.map(cat => (
                <div key={cat.label} className={styles.catCard}>
                  <div className={styles.catHeader}>
                    <span className={styles.catIcon}>{cat.icon}</span>
                    <span className={styles.catLabel}>{cat.label}</span>
                  </div>
                  <div className={styles.catTags}>
                    {cat.items.map(item => (
                      <span key={item} className={styles.tag}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
