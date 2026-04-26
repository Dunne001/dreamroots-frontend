import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/ui/PageWrapper'

export default function NotFound() {
  return (
    <PageWrapper title="Page Not Found">
      <section style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--clr-void)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background number */}
        <div aria-hidden style={{
          position: 'absolute',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(12rem, 30vw, 24rem)',
          color: 'rgba(212,175,55,0.03)',
          letterSpacing: '0.05em',
          userSelect: 'none',
          lineHeight: 1,
        }}>
          404
        </div>

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="gold-line-center" style={{ marginBottom: '2rem' }} />

            <p className="label gold" style={{ marginBottom: '1.25rem' }}>404 — Page Not Found</p>

            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              marginBottom: '1.25rem',
            }}>
              This page doesn't exist.
            </h1>

            <p style={{ color: 'var(--clr-text-muted)', maxWidth: '400px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
              The page you're looking for may have moved or been removed. Let's get you back on track.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/" className="btn-gold"><span>Back to Home</span></Link>
              <Link to="/contact" className="btn-ghost">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}

