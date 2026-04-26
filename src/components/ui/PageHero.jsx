import { motion } from 'framer-motion'

export default function PageHero({ label, title, subtitle, breadcrumb }) {
  return (
    <section style={{
      paddingTop: 'calc(5rem + var(--section-py))',
      paddingBottom: 'var(--section-py)',
      background: 'var(--clr-deep)',
      borderBottom: '1px solid var(--clr-border)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative grid */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(var(--clr-border) 1px, transparent 1px),
          linear-gradient(90deg, var(--clr-border) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        opacity: 0.4,
      }} />

      {/* Gold accent corner */}
      <div aria-hidden style={{
        position: 'absolute', right: 0, top: 0,
        width: '30vw', height: '30vw', maxWidth: '400px', maxHeight: '400px',
        background: 'radial-gradient(ellipse at top right, var(--clr-gold-glow) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}
          >
            {breadcrumb.map((crumb, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: i === breadcrumb.length - 1 ? 'var(--clr-gold)' : 'var(--clr-text-faint)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {crumb}
                </span>
                {i < breadcrumb.length - 1 && <span style={{ color: 'var(--clr-text-faint)', fontSize: '0.65rem' }}>›</span>}
              </span>
            ))}
          </motion.div>
        )}

        {label && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}
          >
            <span className="gold-line" style={{ width: '3rem' }} />
            <span className="label gold">{label}</span>
          </motion.div>
        )}

        <motion.h1
          className="display-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '800px', marginBottom: subtitle ? '1.5rem' : 0 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="body-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ color: 'var(--clr-text-muted)', maxWidth: '580px' }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}

