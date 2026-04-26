import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/ui/PageWrapper'
import PageHero    from '../components/ui/PageHero'
import BookingCTA  from '../components/ui/BookingCTA'
import { SERVICES } from '../data/site'

export default function ServiceDetail() {
  const { slug } = useParams()
  const svc = SERVICES.find(s => s.slug === slug)

  if (!svc) return <Navigate to="/services" replace />

  const idx = SERVICES.indexOf(svc)
  const prev = SERVICES[idx - 1]
  const next = SERVICES[idx + 1]

  return (
    <PageWrapper
      title={svc.title}
      description={svc.summary}
    >
      <PageHero
        label="Services"
        title={svc.title}
        subtitle={svc.summary}
        breadcrumb={['Home', 'Services', svc.title]}
      />

      <section className="section" style={{ background: 'var(--clr-void)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'start' }}>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '1.6rem', color: 'var(--clr-gold)', opacity: 0.7 }}>{svc.icon}</span>
                <span className="gold-line" />
              </div>
              <p style={{ color: 'var(--clr-text-muted)', lineHeight: 1.95, fontSize: '0.95rem', marginBottom: '2.5rem' }}>
                {svc.description}
              </p>
              <Link to="/booking" className="btn-gold"><span>Book This Service</span></Link>
            </motion.div>

            {/* Offerings */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                background: 'var(--clr-surface)',
                border: '1px solid var(--clr-border)',
                padding: '2.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                <span className="gold-line" />
                <span className="label gold">What's Included</span>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0' }}>
                {svc.offerings.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '0.9rem 0',
                      borderBottom: i < svc.offerings.length - 1 ? '1px solid var(--clr-border)' : 'none',
                      color: 'var(--clr-text-muted)',
                      fontSize: '0.88rem',
                    }}
                  >
                    <span style={{ color: 'var(--clr-gold)', fontSize: '0.5rem', flexShrink: 0 }}>◆</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Service navigation */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginTop: '5rem', paddingTop: '2rem',
            borderTop: '1px solid var(--clr-border)',
            flexWrap: 'wrap', gap: '1rem',
          }}>
            {prev ? (
              <Link to={`/services/${prev.slug}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--clr-text-muted)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--clr-gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--clr-text-muted)'}
              >
                ← {prev.title}
              </Link>
            ) : <div />}

            <Link to="/services" style={{ color: 'var(--clr-text-faint)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--clr-gold)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--clr-text-faint)'}
            >
              All Services
            </Link>

            {next ? (
              <Link to={`/services/${next.slug}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--clr-text-muted)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--clr-gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--clr-text-faint)'}
              >
                {next.title} →
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      <BookingCTA title={`Ready to Engage Our ${svc.title} Services?`} />
    </PageWrapper>
  )
}

