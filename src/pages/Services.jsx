import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper   from '../components/ui/PageWrapper'
import PageHero      from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import BookingCTA    from '../components/ui/BookingCTA'
import { SERVICES }  from '../data/site'
import heroBg        from '../assets/slide3.jpg'

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
        bgImage={heroBg}
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
                      color: 'var(--clr-blue)',
                      fontSize: '0.8rem',
                      opacity: 0.5,
                      letterSpacing: '0.08em',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '1rem', color: 'var(--clr-blue)', opacity: 0.7 }}>{svc.icon}</span>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 300, color: 'var(--clr-text)' }}>
                          {svc.title}
                        </h2>
                      </div>
                      <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.85rem', lineHeight: 1.7 }}>{svc.summary}</p>
                    </div>

                    <span style={{ color: 'var(--clr-blue)', fontSize: '1.2rem', flexShrink: 0 }}>→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology timeline placeholder */}
      <section className="section" style={{ background: 'var(--clr-deep)', borderTop: '1px solid var(--clr-border)' }}>
        <div className="container">
          <SectionHeader
            label="Our Approach"
            title="How We Deliver Results"
            subtitle="A structured, collaborative methodology designed to ensure clarity, control, and sustainable success in every project."
            center
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2px', marginTop: '3rem' }}>
            {[
              {
                step: '01',
                title: 'Discovery & Alignment',
                desc: 'We start by listening. We analyze your current state, stakeholder needs, and define exact success metrics.',
              },
              {
                step: '02',
                title: 'Strategy & Co-Design',
                desc: 'Our specialists collaborate with your team to design tailored frameworks, technology choices, or HR structures.',
              },
              {
                step: '03',
                title: 'Implementation Support',
                desc: "We don't just write reports. We walk with you through curriculum rollout, software deployment, or policy training.",
              },
              {
                step: '04',
                title: 'Evaluation & Review',
                desc: 'We measure outcomes against baseline data, providing formal reviews and transition strategies for long-term growth.',
              },
            ].map((phase, idx) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  padding: '2.5rem 2rem',
                  background: 'var(--clr-surface)',
                  border: '1px solid var(--clr-border)',
                  transition: 'border-color 0.3s, background 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--clr-border-md)'
                  e.currentTarget.style.background = 'var(--clr-elevated)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--clr-border)'
                  e.currentTarget.style.background = 'var(--clr-surface)'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--clr-blue)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  marginBottom: '1rem',
                  opacity: 0.6,
                }}>
                  {phase.step}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 300,
                  color: 'var(--clr-text)',
                  marginBottom: '0.75rem',
                }}>
                  {phase.title}
                </h3>
                <p style={{
                  color: 'var(--clr-text-muted)',
                  fontSize: '0.83rem',
                  lineHeight: 1.75,
                }}>
                  {phase.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </PageWrapper>
  )
}

