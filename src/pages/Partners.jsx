import { motion } from 'framer-motion'
import PageWrapper from '../components/ui/PageWrapper'
import PageHero    from '../components/ui/PageHero'
import BookingCTA  from '../components/ui/BookingCTA'

const PARTNERS = [
  // Add real partners here when available
  // { name: 'Partner Name', logo: '/logos/partner.svg', url: 'https://...', description: '...' }
]

const PARTNER_CATEGORIES = ['Government Bodies', 'NGOs & Development Organizations', 'Academic Institutions', 'Private Sector']

export default function Partners() {
  return (
    <PageWrapper
      title="Partners & Affiliations"
      description="DreamRoots Kenya's network of strategic partners, affiliates, and collaborators across Kenya and East Africa."
    >
      <PageHero
        label="Our Network"
        title="Partners & Affiliations"
        subtitle="We collaborate with leading organizations across government, civil society, academia, and the private sector to amplify impact."
        breadcrumb={['Home', 'Partners & Affiliations']}
      />

      <section className="section" style={{ background: 'var(--clr-void)' }}>
        <div className="container">
          {PARTNERS.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2px' }}>
              {PARTNERS.map((partner, i) => (
                <motion.a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2.5rem',
                    background: 'var(--clr-surface)',
                    border: '1px solid var(--clr-border)',
                    textDecoration: 'none',
                    transition: 'border-color 0.3s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--clr-border-md)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--clr-border)'}
                >
                  <img src={partner.logo} alt={partner.name} style={{ maxHeight: '60px', maxWidth: '140px', objectFit: 'contain', filter: 'brightness(0) invert(0.6)' }} />
                </motion.a>
              ))}
            </div>
          ) : (
            /* Premium placeholder state */
            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 5rem' }}
              >
                <span className="gold-line-center" style={{ marginBottom: '2rem' }} />
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 300, fontStyle: 'italic', marginBottom: '1rem' }}>
                  Building a Network of Impact
                </h2>
                <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem', lineHeight: 1.85 }}>
                  DreamRoots Kenya partners with strategic organizations across multiple sectors to deliver comprehensive solutions and amplify community impact across Kenya and East Africa.
                </p>
              </motion.div>

              {/* Category blocks */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2px' }}>
                {PARTNER_CATEGORIES.map((cat, i) => (
                  <motion.div
                    key={cat}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    style={{
                      padding: '2.5rem',
                      background: 'var(--clr-surface)',
                      border: '1px solid var(--clr-border)',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: '1.5rem', color: 'var(--clr-gold)', opacity: 0.4, marginBottom: '1rem' }}>
                      {['◈', '◇', '△', '○'][i]}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 300, color: 'var(--clr-text)', marginBottom: '0.5rem' }}>
                      {cat}
                    </h3>
                    <p style={{ color: 'var(--clr-text-faint)', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                      Partnerships announced soon
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <BookingCTA
        title="Interested in Partnering with Us?"
        subtitle="We welcome strategic collaborations with organizations aligned with our mission of empowerment and sustainable development."
      />
    </PageWrapper>
  )
}

