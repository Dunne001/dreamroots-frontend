import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper   from '../components/ui/PageWrapper'
import PageHero      from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import BookingCTA    from '../components/ui/BookingCTA'
import { VALUES }    from '../data/site'

export default function About() {
  return (
    <PageWrapper
      title="About Us"
      description="DreamRoots Kenya is a visionary consulting firm dedicated to empowering individuals, organizations, and communities across Kenya and beyond."
    >
      <PageHero
        label="Our Story"
        title="About DreamRoots Kenya"
        subtitle="Rooted in empowerment, driven by impact. A visionary consulting firm dedicated to unlocking the full potential of Kenya's people and institutions."
        breadcrumb={['Home', 'About']}
      />

      {/* About copy */}
      <section className="section" style={{ background: 'var(--clr-void)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'start' }}>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <span className="gold-line" />
                <span className="label gold">Who We Are</span>
              </div>
              <h2 className="display-md" style={{ marginBottom: '1.5rem', fontStyle: 'italic' }}>
                Every dream has roots.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'DreamRoots Kenya is a visionary consulting firm dedicated to empowering individuals, organizations, and communities across Kenya and beyond to realize their fullest potential.',
                  'Founded with a passion for transformative change, we operate at the intersection of strategic consulting, capacity building, and community development — partnering with government agencies, private sector companies, NGOs, and grassroots groups.',
                  'Our approach is grounded in deep local understanding combined with global best practices. We prioritize inclusivity, sustainability, and empowerment in all our engagements.',
                ].map((para, i) => (
                  <p key={i} style={{ color: 'var(--clr-text-muted)', lineHeight: 1.9, fontSize: '0.92rem' }}>{para}</p>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                <Link to="/team" className="btn-gold"><span>Meet Our Team</span></Link>
                <Link to="/board" className="btn-ghost">Board of Directors</Link>
              </div>
            </motion.div>

            {/* Mission / Vision */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {[
                {
                  label: 'Our Mission',
                  icon: '◈',
                  text: 'To empower individuals, organizations, and communities through innovative consulting, capacity building, and sustainable solutions that foster growth, resilience, and positive transformation.',
                },
                {
                  label: 'Our Vision',
                  icon: '◇',
                  text: 'To be a leading catalyst for social and economic development in Kenya and beyond — where every dream is rooted in strong foundations of knowledge, collaboration, and integrity.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  style={{
                    padding: '2.5rem',
                    background: 'var(--clr-surface)',
                    border: '1px solid var(--clr-border)',
                  }}
                >
                  <div style={{ fontSize: '1.5rem', color: 'var(--clr-gold)', marginBottom: '1rem', opacity: 0.7 }}>{item.icon}</div>
                  <div className="label gold" style={{ marginBottom: '0.75rem' }}>{item.label}</div>
                  <p style={{ color: 'var(--clr-text-muted)', lineHeight: 1.85, fontSize: '0.9rem' }}>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" style={{ background: 'var(--clr-deep)', borderTop: '1px solid var(--clr-border)' }}>
        <div className="container">
          <SectionHeader
            label="Core Values"
            title="What We Stand For"
            subtitle="Seven principles that guide every engagement, decision, and partnership at DreamRoots Kenya."
            center
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2px' }}>
            {VALUES.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                style={{
                  padding: '2rem',
                  background: 'var(--clr-surface)',
                  border: '1px solid var(--clr-border)',
                  transition: 'border-color 0.3s, background 0.3s',
                  position: 'relative',
                  overflow: 'hidden',
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
                {/* Number */}
                <span aria-hidden style={{
                  position: 'absolute', top: '0.75rem', right: '1rem',
                  fontFamily: 'var(--font-display)', fontSize: '3.5rem',
                  color: 'rgba(212,175,55,0.05)', letterSpacing: '0.05em', lineHeight: 1,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                  <span className="gold-line" style={{ width: '1.5rem' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 400, color: 'var(--clr-text)', marginBottom: '0.6rem' }}>
                  {val.title}
                </h3>
                <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.83rem', lineHeight: 1.8 }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </PageWrapper>
  )
}

