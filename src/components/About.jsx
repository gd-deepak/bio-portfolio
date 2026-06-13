import styles from './About.module.css'

const personalDetails = [
  { label: 'पूर्ण नाव', value: 'दिपक शंकर गाढवे - देशमुख', icon: '👤' },
  { label: 'जन्म दिनांक', value: '०६ / ०५ / १९९९', icon: '🎂' },
  { label: 'जन्म वेळ', value: 'संध्याकाळी ०६:४७', icon: '🕰' },
  { label: 'जन्म स्थळ', value: 'ठाणे, मुंबई', icon: '🏙' },
  { label: 'पत्ता', value: 'मु.पो. सिद्धेश्वर कुरोली, ता. खटाव, जि. सातारा — ४१५५२७', icon: '📍' },
  { label: 'मो. नंबर', value: '९०९६३६५०३५', icon: '📱' },
]

const physicalDetails = [
  { label: 'उंची', value: '५ फूट ११ इंच', icon: '📏' },
  { label: 'रंग', value: 'गोरा', icon: '✨' },
  { label: 'रक्तगट', value: 'O Positive', icon: '🩸' },
  { label: 'रास', value: 'धनु', icon: '♐' },
  { label: 'गण', value: 'मनुष्यगण', icon: '🌟' },
  { label: 'नाडी / देवक', value: 'अंत्य / सूर्यफूल', icon: '🌻' },
]

const familyDetails = [
  { label: 'वडील', value: 'श्री. शंकर कृष्णराव गाढवे - देशमुख (शेती)', icon: '👨' },
  { label: 'आई', value: 'सौ. रोहिणी शंकर गाढवे - देशमुख (गृहिणी)', icon: '👩' },
  { label: 'बहीण', value: 'सृष्टी शंकर गाढवे - देशमुख (अविवाहित)', icon: '👧' },
  { label: 'आजोळ', value: 'श्री. श्रीनिवास मारुती रणनवरे - इनामदार, मु.पो. बोथे, ता. माण, जि. सातारा', icon: '🏡' },
]

function Section({ title, items }) {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <div className={styles.grid}>
        {items.map(d => (
          <div key={d.label} className={styles.card}>
            <span className={styles.icon}>{d.icon}</span>
            <div>
              <p className={styles.cardLabel}>{d.label}</p>
              <p className={styles.cardValue}>{d.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">माझ्याबद्दल</span>
          <h2 className="section-title">वैयक्तिक माहिती</h2>
          <p className="section-subtitle">
            एक उत्साही Software Engineer — सातारा जिल्ह्याचा मुलगा, पुण्यात कार्यरत.
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.photoCol}>
            <div className={styles.imgWrap}>
              <img
                src="/photos/WhatsApp Image 2026-06-12 at 22.54.32.jpeg"
                alt="दिपक गाढवे-देशमुख"
                className={styles.img}
              />
              <div className={styles.imgOverlay}>
                <span className={styles.overlayName}>दिपक शंकर गाढवे-देशमुख</span>
                <span className={styles.overlayRole}>Software Engineer</span>
              </div>
            </div>

            <div className={styles.quoteBox}>
              <span className={styles.quoteIcon}>"</span>
              <p className={styles.quote}>
                Every problem hides an opportunity —
                I find that opportunity and bring it to life through code.
              </p>
            </div>
          </div>

          <div className={styles.infoCol}>
            <Section title="👤 वैयक्तिक तपशील" items={personalDetails} />
            <Section title="🌿 शारीरिक वैशिष्ट्ये" items={physicalDetails} />
            <Section title="👨‍👩‍👧 कुटुंब" items={familyDetails} />
          </div>
        </div>
      </div>
    </section>
  )
}
