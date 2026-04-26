import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/ui/PageWrapper'
import PageHero    from '../components/ui/PageHero'
import BookingCTA  from '../components/ui/BookingCTA'

const POSTS = [
  {
    slug: 'empowering-kenyan-youth-through-education',
    title: 'Empowering Kenyan Youth Through Education Consultancy',
    date: '2025-05-12',
    category: 'Education',
    excerpt: 'How targeted education consulting is reshaping outcomes for students and institutions navigating Kenya\'s CBC curriculum transition.',
    readTime: '5 min read',
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
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '2rem',
        alignItems: 'start',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--clr-border-md)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--clr-border)'}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <span className="label gold" style={{ fontSize: '0.62rem' }}>{post.category}</span>
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
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--clr-gold)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}
        >
          Read Article <span>→</span>
        </Link>
      </div>
    </motion.article>
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
      />

      <section className="section" style={{ background: 'var(--clr-void)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          {POSTS.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {POSTS.map((post, i) => <PostCard key={post.slug} post={post} index={i} />)}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '6rem 2rem', background: 'var(--clr-surface)', border: '1px solid var(--clr-border)' }}>
              <div style={{ fontSize: '2.5rem', color: 'var(--clr-gold)', marginBottom: '1.5rem', opacity: 0.4 }}>◎</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 300, marginBottom: '0.75rem' }}>Publications Coming Soon</h3>
              <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem' }}>
                Our team is preparing research, reports, and insights. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <BookingCTA />
    </PageWrapper>
  )
}

