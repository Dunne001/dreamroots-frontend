import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function BookingCTA({ title, subtitle }) {
  return (
    <section style={{
      padding: 'clamp(4rem, 8vw, 7rem) 0',
      background: 'var(--clr-deep)',
      borderTop: '1px solid var(--clr-border)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Gold glow */}
      <div aria-hidden style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '300px',
        background: 'radial-gradient(ellipse, var(--clr-gold-glow) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="gold-line-center" style={{ marginBottom: '1.5rem' }} />

          <h2 className="display-md" style={{ marginBottom: '1rem', fontStyle: 'italic' }}>
            {title || 'Ready to Transform Your Organization?'}
          </h2>
          <p style={{ color: 'var(--clr-text-muted)', marginBottom: '2.5rem', maxWidth: '480px', margin: '0 auto 2.5rem' }}>
            {subtitle || 'Partner with DreamRoots Kenya for expert consulting, capacity building, and sustainable solutions that drive real impact.'}
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/booking" className="btn-gold"><span>Book a Consultation</span></Link>
            <Link to="/contact" className="btn-ghost">Get in Touch</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

