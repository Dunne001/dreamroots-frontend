import { Link } from 'react-router-dom'
import { SITE, NAV_LINKS, SERVICES } from '../../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--clr-void)',
      borderTop: '1px solid var(--clr-border)',
      paddingTop: '5rem',
      paddingBottom: '2.5rem',
    }}>
      <div className="container">

        {/* Main grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
        }}>

          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <div className="font-display gold" style={{ fontSize: '1.1rem', letterSpacing: '0.16em', marginBottom: '4px' }}>DreamRoots</div>
              <div className="label" style={{ color: 'var(--clr-text-faint)', letterSpacing: '0.3em', fontSize: '0.58rem' }}>Kenya Ltd.</div>
            </div>
            <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '240px', marginBottom: '1.5rem' }}>
              Rooted in Empowerment, Growing Your Potential. A leading Nairobi-based consultancy driving transformation across Kenya.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a href={`tel:${SITE.phone}`} style={{ color: 'var(--clr-text-faint)', fontSize: '0.8rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--clr-gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--clr-text-faint)'}
              >
                <span style={{ color: 'var(--clr-gold)', fontSize: '0.65rem' }}>✆</span> {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} style={{ color: 'var(--clr-text-faint)', fontSize: '0.8rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--clr-gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--clr-text-faint)'}
              >
                <span style={{ color: 'var(--clr-gold)', fontSize: '0.65rem' }}>✉</span> {SITE.email}
              </a>
              <span style={{ color: 'var(--clr-text-faint)', fontSize: '0.8rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: 'var(--clr-gold)', fontSize: '0.65rem', marginTop: '2px' }}>◎</span> {SITE.address}
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="label gold" style={{ marginBottom: '1.25rem' }}>Services</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    style={{ color: 'var(--clr-text-faint)', fontSize: '0.8rem', textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--clr-gold)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--clr-text-faint)'}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="label gold" style={{ marginBottom: '1.25rem' }}>Company</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Board of Directors', path: '/board' },
                { label: 'Management Team', path: '/team' },
                { label: 'Partners & Affiliations', path: '/partners' },
                { label: 'Publications', path: '/publications' },
              ].map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{ color: 'var(--clr-text-faint)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--clr-gold)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--clr-text-faint)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA block */}
          <div>
            <div className="label gold" style={{ marginBottom: '1.25rem' }}>Work With Us</div>
            <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.85rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Ready to transform your organization? Book a consultation with our expert team.
            </p>
            <Link to="/booking" className="btn-gold" style={{ display: 'inline-flex', justifyContent: 'center', width: '100%' }}>
              <span>Book a Consultation</span>
            </Link>
            <Link to="/contact" className="btn-ghost" style={{ display: 'inline-flex', justifyContent: 'center', width: '100%', marginTop: '0.75rem' }}>
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--clr-border)', marginBottom: '2rem' }} />

        {/* Bottom bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ color: 'var(--clr-text-faint)', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
            © {year} DreamRoots Kenya Ltd. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy'].map(label => (
              <Link key={label} to="#" style={{ color: 'var(--clr-text-faint)', fontSize: '0.72rem', textDecoration: 'none', letterSpacing: '0.08em', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--clr-gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--clr-text-faint)'}
              >
                {label}
              </Link>
            ))}
          </div>
          <p className="label" style={{ color: 'var(--clr-text-faint)', fontSize: '0.62rem' }}>
            Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  )
}

