import { motion } from 'framer-motion'
import PageWrapper from '../components/ui/PageWrapper'
import PageHero   from '../components/ui/PageHero'
import BookingCTA from '../components/ui/BookingCTA'
import { BOARD }  from '../data/site'

/* ─── Board Member Card ─────────────────────────────────────── */
function BoardCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'grid',
        gridTemplateColumns: index % 2 === 0 ? '1fr 1.4fr' : '1.4fr 1fr',
        gap: 0,
        border: '1px solid var(--clr-border)',
        background: 'var(--clr-surface)',
        overflow: 'hidden',
        transition: 'border-color 0.4s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--clr-border-md)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--clr-border)'}
    >
      {/* Image panel — alternates left/right */}
      {index % 2 !== 0 && <ContentPanel member={member} />}

      <div style={{ position: 'relative', overflow: 'hidden', minHeight: '420px', background: 'var(--clr-elevated)' }}>
        {/* Gold corner accent */}
        <div aria-hidden style={{
          position: 'absolute', zIndex: 2,
          ...(index % 2 === 0
            ? { top: 0, right: 0, width: '80px', height: '80px',
                background: 'linear-gradient(225deg, var(--clr-gold-dim) 0%, transparent 60%)' }
            : { top: 0, left: 0, width: '80px', height: '80px',
                background: 'linear-gradient(315deg, var(--clr-gold-dim) 0%, transparent 60%)' }
          ),
        }} />

        {/* Number */}
        <div aria-hidden style={{
          position: 'absolute', zIndex: 2,
          bottom: '1.5rem',
          ...(index % 2 === 0 ? { left: '1.5rem' } : { right: '1.5rem' }),
          fontFamily: 'var(--font-display)',
          fontSize: '5rem',
          fontWeight: 400,
          color: 'rgba(212,175,55,0.06)',
          lineHeight: 1,
          userSelect: 'none',
          letterSpacing: '0.05em',
        }}>
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Photo */}
        <motion.img
          src={member.image}
          alt={member.name}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6 }}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
            filter: 'grayscale(20%) contrast(1.05)',
          }}
          onError={e => {
            e.target.style.display = 'none'
            e.target.parentElement.style.display = 'flex'
            e.target.parentElement.style.alignItems = 'center'
            e.target.parentElement.style.justifyContent = 'center'
          }}
        />
      </div>

      {index % 2 === 0 && <ContentPanel member={member} />}
    </motion.div>
  )
}

function ContentPanel({ member }) {
  return (
    <div style={{ padding: 'clamp(2.5rem, 5vw, 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem' }}>
      {/* Role badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span className="gold-line" />
        <span className="label gold">{member.role}</span>
      </div>

      {/* Name */}
      <div>
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
          fontWeight: 300,
          color: 'var(--clr-text)',
          marginBottom: '0.35rem',
          lineHeight: 1.2,
        }}>
          {member.name}
        </h3>
        <p className="label" style={{ color: 'var(--clr-gold)', letterSpacing: '0.2em' }}>{member.title}</p>
      </div>

      {/* Bio */}
      <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem', lineHeight: 1.85, borderLeft: '2px solid var(--clr-border)', paddingLeft: '1.25rem' }}>
        {member.bio}
      </p>

      {/* Expertise tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {member.expertise.map((tag) => (
          <span key={tag} style={{
            padding: '0.3rem 0.8rem',
            border: '1px solid var(--clr-border)',
            color: 'var(--clr-text-muted)',
            fontSize: '0.68rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-sans)',
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function BoardOfDirectors() {
  return (
    <PageWrapper
      title="Board of Directors"
      description="Meet the DreamRoots Kenya Board of Directors — experienced leaders shaping the strategic direction of our consultancy."
    >
      <PageHero
        label="Governance"
        title="Board of Directors"
        subtitle="Seasoned leaders providing strategic direction, ethical governance, and institutional oversight across DreamRoots Kenya's consulting practice."
        breadcrumb={['Home', 'About', 'Board of Directors']}
      />

      {/* Intro quote */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 0', background: 'var(--clr-void)' }}>
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="gold-line-center" style={{ marginBottom: '2rem' }} />
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--clr-text)',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
            }}>
              "Our board represents decades of collective wisdom across finance, governance, human capital, and strategic development — united by a singular commitment to Kenya's growth."
            </p>
            <span className="label" style={{ color: 'var(--clr-text-faint)' }}>DreamRoots Kenya Leadership</span>
          </motion.blockquote>
        </div>
      </section>

      {/* Board cards */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 0 clamp(4rem, 8vw, 8rem)', background: 'var(--clr-void)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {BOARD.map((member, i) => (
              <BoardCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        title="Work with Experienced Leaders"
        subtitle="Our board's collective expertise ensures every engagement is grounded in strategic insight, integrity, and long-term vision."
      />

      {/* Responsive override */}
      <style>{`
        @media (max-width: 720px) {
          .board-card-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageWrapper>
  )
}

