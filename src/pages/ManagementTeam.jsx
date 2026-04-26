import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageWrapper from '../components/ui/PageWrapper'
import PageHero   from '../components/ui/PageHero'
import BookingCTA from '../components/ui/BookingCTA'
import SectionHeader from '../components/ui/SectionHeader'
import { TEAM } from '../data/site'

/* Department filter options */
const DEPARTMENTS = ['All', ...Array.from(new Set(TEAM.map(m => m.department)))]

/* ─── Team Member Card ──────────────────────────────────────── */
function TeamCard({ member, index }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: '1000px' }}
    >
      <div
        style={{
          position: 'relative',
          height: '420px',
          cursor: 'pointer',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
        onClick={() => setFlipped(!flipped)}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setFlipped(!flipped)}
        aria-label={`View ${member.name} profile`}
      >
        {/* Front face */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          background: 'var(--clr-surface)',
          border: '1px solid var(--clr-border)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Photo area */}
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: 'var(--clr-elevated)' }}>
            <img
              src={member.image}
              alt={member.name}
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                filter: 'grayscale(15%) contrast(1.05)',
                display: 'block',
              }}
              onError={e => {
                e.target.style.display = 'none'
              }}
            />
            {/* Gradient overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, var(--clr-surface) 0%, transparent 50%)',
            }} />

            {/* Dept badge */}
            <span style={{
              position: 'absolute', top: '1rem', right: '1rem',
              padding: '0.25rem 0.65rem',
              background: 'var(--clr-gold-dim)',
              border: '1px solid var(--clr-border-md)',
              color: 'var(--clr-gold)',
              fontSize: '0.6rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-sans)',
            }}>
              {member.department}
            </span>
          </div>

          {/* Info */}
          <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.3rem',
              fontWeight: 300,
              color: 'var(--clr-text)',
              marginBottom: '0.3rem',
              lineHeight: 1.2,
            }}>
              {member.name}
            </h3>
            <p className="label" style={{ color: 'var(--clr-gold)', letterSpacing: '0.15em', fontSize: '0.65rem' }}>
              {member.title}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.75rem' }}>
              <span style={{ color: 'var(--clr-text-faint)', fontSize: '0.7rem', letterSpacing: '0.1em', fontFamily: 'var(--font-sans)' }}>
                Hover to view profile
              </span>
              <span style={{ color: 'var(--clr-gold)', fontSize: '0.7rem' }}>→</span>
            </div>
          </div>
        </div>

        {/* Back face */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          background: 'var(--clr-elevated)',
          border: '1px solid var(--clr-border-md)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2rem',
        }}>
          {/* Gold corner */}
          <div aria-hidden style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
            background: 'linear-gradient(90deg, transparent, var(--clr-gold), transparent)',
          }} />

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <span className="gold-line" />
              <span className="label gold" style={{ fontSize: '0.6rem' }}>{member.department}</span>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.4rem',
              fontWeight: 300,
              color: 'var(--clr-text)',
              marginBottom: '0.25rem',
            }}>
              {member.name}
            </h3>
            <p className="label gold" style={{ letterSpacing: '0.15em', fontSize: '0.65rem', marginBottom: '1.25rem' }}>
              {member.title}
            </p>

            <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.83rem', lineHeight: 1.85 }}>
              {member.bio}
            </p>
          </div>

          {/* Expertise */}
          <div>
            <div style={{ height: '1px', background: 'var(--clr-border)', marginBottom: '1rem' }} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {member.expertise.map((tag) => (
                <span key={tag} style={{
                  padding: '0.2rem 0.6rem',
                  border: '1px solid var(--clr-border)',
                  color: 'var(--clr-text-faint)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function ManagementTeam() {
  const [activeDept, setActiveDept] = useState('All')

  const filtered = activeDept === 'All'
    ? TEAM
    : TEAM.filter(m => m.department === activeDept)

  return (
    <PageWrapper
      title="Management Team"
      description="Meet the expert management team behind DreamRoots Kenya — seasoned consultants across education, HR, ICT, research, finance, and more."
    >
      <PageHero
        label="Our People"
        title="Management Team"
        subtitle="A multidisciplinary team of seasoned professionals bringing decades of collective expertise across Kenya's most critical development sectors."
        breadcrumb={['Home', 'About', 'Management Team']}
      />

      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 0', background: 'var(--clr-void)' }}>
        <div className="container">

          <SectionHeader
            label="Expert Consultants"
            title="The Minds Behind the Mission"
            subtitle="Each team member brings specialized expertise, field experience, and a shared commitment to transformative results."
          />

          {/* Department filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '4rem' }}>
            {DEPARTMENTS.map(dept => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                style={{
                  padding: '0.45rem 1.1rem',
                  background: activeDept === dept ? 'var(--clr-gold)' : 'transparent',
                  border: `1px solid ${activeDept === dept ? 'var(--clr-gold)' : 'var(--clr-border)'}`,
                  color: activeDept === dept ? 'var(--clr-void)' : 'var(--clr-text-muted)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  fontWeight: activeDept === dept ? 500 : 300,
                }}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDept}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2px',
              }}
            >
              {filtered.map((member, i) => (
                <TeamCard key={member.id} member={member} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Count indicator */}
          <motion.div
            layout
            style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <span className="gold-line" />
            <span style={{ color: 'var(--clr-text-faint)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
              Showing {filtered.length} of {TEAM.length} team members
            </span>
          </motion.div>
        </div>
      </section>

      <BookingCTA
        title="Expertise You Can Trust"
        subtitle="Our management team's combined experience spans education, finance, HR, ICT, legal, research, and logistics — giving you one partner for every challenge."
      />
    </PageWrapper>
  )
}

