import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import PageWrapper from '../components/ui/PageWrapper'
import PageHero    from '../components/ui/PageHero'
import BookingCTA  from '../components/ui/BookingCTA'
import heroBg      from '../assets/slide2.jpg'

const POSTS = [
  {
    slug: 'empowering-kenyan-youth-through-education',
    title: 'Empowering Kenyan Youth Through Education Consultancy',
    date: '2026-05-12',
    category: 'Education',
    excerpt: 'How targeted education consulting is reshaping outcomes for students and institutions navigating Kenya\'s CBC curriculum transition.',
    readTime: '5 min read',
  },
  {
    slug: 'digital-transformation-east-africa',
    title: 'Digital Transformation Trends in East African Corporate Sectors',
    date: '2026-04-20',
    category: 'ICT',
    excerpt: 'Key strategies for businesses aiming to upgrade legacy IT infrastructure, implement cloud migration, and enforce security policies.',
    readTime: '7 min read',
  },
  {
    slug: 'market-research-feasibility-diagnostics',
    title: 'The Role of Rigorous Market Research in Feasibility Diagnostics',
    date: '2026-03-05',
    category: 'Research',
    excerpt: 'How data-driven feasibility assessments and demographic studies prevent strategic failures in commercial real estate and manufacturing.',
    readTime: '6 min read',
  },
]

function PostCard({ post, index }) {
  const date = new Date(post.date).toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        background: 'var(--clr-surface)',
        border: '1px solid var(--clr-border)',
        padding: '2.5rem',
        transition: 'border-color 0.3s',
        marginBottom: '1rem',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--clr-border-md)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--clr-border)'}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <span className="label blue" style={{ fontSize: '0.62rem' }}>{post.category}</span>
          <span style={{ color: 'var(--clr-text-faint)', fontSize: '0.72rem' }}>{date}</span>
          <span style={{ color: 'var(--clr-text-faint)', fontSize: '0.72rem' }}>· {post.readTime}</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', fontWeight: 300, color: 'var(--clr-text)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
          {post.title}
        </h2>
        <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          {post.excerpt}
        </p>
        <Link
          to={`/publications/${post.slug}`}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--clr-blue)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}
        >
          Read Article <span>→</span>
        </Link>
      </div>
    </motion.article>
  )
}

function Sidebar() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    console.log('Newsletter sub:', email)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Newsletter signup card */}
      <div style={{
        background: 'var(--clr-surface)',
        border: '1px solid var(--clr-border)',
        padding: '2.5rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <span className="blue-line" style={{ width: '1.5rem' }} />
          <span className="label blue">Newsletter</span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 300, marginBottom: '0.75rem' }}>
          Get Strategic Insights
        </h3>
        <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Subscribe to our quarterly brief for research papers, CBC updates, and East African business analyses.
        </p>
        
        {subscribed ? (
          <div style={{ color: 'var(--clr-blue)', fontSize: '0.88rem', fontWeight: 500 }}>
            ✓ Thank you! You've been subscribed.
          </div>
        ) : (
          <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                width: '100%',
                background: 'var(--clr-elevated)',
                border: '1px solid var(--clr-border)',
                color: 'var(--clr-text)',
                padding: '0.8rem 1rem',
                fontSize: '0.88rem',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
                borderRadius: 0,
              }}
              onFocus={e => e.target.style.borderColor = 'var(--clr-blue)'}
              onBlur={e => e.target.style.borderColor = 'var(--clr-border)'}
              required
            />
            <button type="submit" className="btn-blue" style={{ width: '100%', justifyContent: 'center' }}>
              <span>Subscribe</span>
            </button>
          </form>
        )}
      </div>

      {/* Research proposals card */}
      <div style={{
        background: 'var(--clr-surface)',
        border: '1px solid var(--clr-border)',
        padding: '2.5rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <span className="blue-line" style={{ width: '1.5rem' }} />
          <span className="label blue">Collaboration</span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 300, marginBottom: '0.75rem' }}>
          Call for Papers
        </h3>
        <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Are you a development researcher or corporate analyst? Partner with DreamRoots Kenya on research publications.
        </p>
        <Link to="/contact" className="btn-ghost" style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}>
          Propose Research
        </Link>
      </div>
    </div>
  )
}

export default function Publications() {
  return (
    <PageWrapper
      title="Publications"
      description="Insights, research, and perspectives from the DreamRoots Kenya consulting team."
    >
      <PageHero
        label="Insights"
        title="Publications"
        subtitle="Perspectives, research, and thought leadership from the DreamRoots Kenya team — informing smarter decisions across Kenya's development landscape."
        breadcrumb={['Home', 'Publications']}
        bgImage={heroBg}
      />

      <section className="section" style={{ background: 'var(--clr-void)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'start',
          }}>
            {/* Left Column: Posts */}
            <div style={{ gridColumn: 'span 2' }}>
              {POSTS.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {POSTS.map((post, i) => <PostCard key={post.slug} post={post} index={i} />)}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '6rem 2rem', background: 'var(--clr-surface)', border: '1px solid var(--clr-border)' }}>
                  <div style={{ fontSize: '2.5rem', color: 'var(--clr-blue)', marginBottom: '1.5rem', opacity: 0.4 }}>◎</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 300, marginBottom: '0.75rem' }}>Publications Coming Soon</h3>
                  <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem' }}>
                    Our team is preparing research, reports, and insights. Check back soon.
                  </p>
                </div>
              )}
            </div>

            {/* Right Column: Sidebar */}
            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </PageWrapper>
  )
}

