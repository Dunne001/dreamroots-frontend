import { motion } from 'framer-motion'

export default function SectionHeader({ label, title, subtitle, center = false, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        textAlign: center ? 'center' : 'left',
        marginBottom: '4rem',
      }}
    >
      {label && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '1rem',
          justifyContent: center ? 'center' : 'flex-start',
        }}>
          {!center && <span className="gold-line" />}
          <span className="label gold">{label}</span>
          {center && <span className="gold-line-center" style={{ width: '2rem' }} />}
        </div>
      )}

      <h2
        className="display-lg"
        style={{
          color: light ? 'var(--clr-text)' : 'var(--clr-text)',
          marginBottom: subtitle ? '1.25rem' : 0,
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="body-lg"
          style={{
            color: 'var(--clr-text-muted)',
            maxWidth: center ? '600px' : '540px',
            margin: center ? '0 auto' : 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

