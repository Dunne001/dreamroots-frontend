import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper   from '../components/ui/PageWrapper'
import PageHero      from '../components/ui/PageHero'
import BookingCTA    from '../components/ui/BookingCTA'
import { SERVICES }  from '../data/site'

export default function Services() {
  return (
    <PageWrapper
      title="Services"
      description="DreamRoots Kenya offers comprehensive consulting services: Finance, ICT, Research, HR, Marketing, Education, Soft Skills, and Capacity Building."
    >
      <PageHero
        label="What We Offer"
        title="Our Services"
        subtitle="A comprehensive suite of consulting services tailored to your unique organizational needs — from strategy through implementation."
        breadcrumb={['Home', 'Services']}
      />

      <section className="section" style={{ background: 'var(--clr-void)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={`/services/${svc.slug}`} style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '3.5rem 1fr auto',
                      alignItems: 'center',
                      gap: '2rem',
                      padding: '2rem 2.5rem',
                      background: 'var(--clr-surface)',
                      border: '1px solid var(--clr-border)',
                      transition: 'background 0.3s, border-color 0.3s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--clr-elevated)'
                      e.currentTarget.style.borderColor = 'var(--clr-border-md)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'var(--clr-surface)'
                      e.currentTarget.style.borderColor = 'var(--clr-border)'
                    }}
                  >
                    {/* Number */}
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      color: 'var(--clr-gold)',
                      fontSize: '0.8rem',
                      opacity: 0.5,
                      letterSpacing: '0.08em',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '1rem', color: 'var(--clr-gold)', opacity: 0.7 }}>{svc.icon}</span>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 300, color: 'var(--clr-text)' }}>
                          {svc.title}
                        </h2>
                      </div>
                      <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.85rem', lineHeight: 1.7 }}>{svc.summary}</p>
                    </div>

                    <span style={{ color: 'var(--clr-gold)', fontSize: '1.2rem', flexShrink: 0 }}>→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </PageWrapper>
  )
}

