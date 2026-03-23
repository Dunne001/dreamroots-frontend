import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{background: '#1B2631', color: 'white', padding: '4rem 1rem 0'}}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '3rem',
        paddingBottom: '3rem'
      }}>

        {/* Column 1 — Brand */}
        <div>
          <h3 style={{fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white'}}>
            DreamRoots Kenya
          </h3>
          <p style={{color: '#AEB6BF', lineHeight: '1.8', fontSize: '0.95rem', marginBottom: '1.5rem'}}>
            Rooted in Empowerment, Growing Your Potential. A leading Nairobi-based consulting firm empowering organizations across Kenya.
          </p>
          <div style={{display: 'flex', gap: '0.8rem'}}>
            {['f', 'in', 'tw', 'yt'].map((s, i) => (
              <div key={i} style={{
                width: '36px', height: '36px',
                borderRadius: '50%',
                background: '#2E86C1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: 'bold'
              }}>
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h4 style={{fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1.2rem', color: 'white'}}>
            Quick Links
          </h4>
          {[
            {label: 'Home', path: '/'},
            {label: 'About Us', path: '/about/overview'},
            {label: 'Our Services', path: '/services'},
            {label: 'Publications', path: '/publications'},
            {label: 'Testimonials', path: '/about/testimonials'},
            {label: 'Contact Us', path: '/contact'},
            {label: 'Book a Consultation', path: '/booking'},
          ].map((link, i) => (
            <Link key={i} to={link.path} style={{
              display: 'block',
              color: '#AEB6BF',
              textDecoration: 'none',
              marginBottom: '0.6rem',
              fontSize: '0.95rem',
              transition: 'color 0.2s'
            }}
            onMouseEnter={e => e.target.style.color = '#2E86C1'}
            onMouseLeave={e => e.target.style.color = '#AEB6BF'}
            >
              → {link.label}
            </Link>
          ))}
        </div>

        {/* Column 3 — Services */}
        <div>
          <h4 style={{fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1.2rem', color: 'white'}}>
            Our Services
          </h4>
          {[
            {label: 'Education Consultancy', path: '/services/education-consultancy'},
            {label: 'ICT Solutions', path: '/services/ict'},
            {label: 'Finance', path: '/services/finance'},
            {label: 'Human Resource Management', path: '/services/human-resource-management'},
            {label: 'Marketing', path: '/services/marketing'},
            {label: 'Research', path: '/services/research'},
            {label: 'Soft Skills Training', path: '/services/soft-skills-training'},
            {label: 'Training & Capacity Building', path: '/services/training-capacity-building'},
          ].map((link, i) => (
            <Link key={i} to={link.path} style={{
              display: 'block',
              color: '#AEB6BF',
              textDecoration: 'none',
              marginBottom: '0.6rem',
              fontSize: '0.95rem'
            }}
            onMouseEnter={e => e.target.style.color = '#2E86C1'}
            onMouseLeave={e => e.target.style.color = '#AEB6BF'}
            >
              → {link.label}
            </Link>
          ))}
        </div>

        {/* Column 4 — Contact */}
        <div>
          <h4 style={{fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1.2rem', color: 'white'}}>
            Contact Us
          </h4>
          <div style={{marginBottom: '1rem'}}>
            <p style={{color: '#AEB6BF', fontSize: '0.95rem', marginBottom: '0.3rem'}}>📍 Location</p>
            <p style={{color: 'white', fontSize: '0.95rem'}}>P.O Box 1152-00511, Nairobi, Kenya</p>
          </div>
          <div style={{marginBottom: '1rem'}}>
            <p style={{color: '#AEB6BF', fontSize: '0.95rem', marginBottom: '0.3rem'}}>📞 Phone</p>
            <a href="tel:+254759098449" style={{color: 'white', textDecoration: 'none', fontSize: '0.95rem'}}>
              +254 759 098 449
            </a>
          </div>
          <div style={{marginBottom: '1rem'}}>
            <p style={{color: '#AEB6BF', fontSize: '0.95rem', marginBottom: '0.3rem'}}>📧 Email</p>
            <a href="mailto:info@dreamrootskenya.com" style={{color: 'white', textDecoration: 'none', fontSize: '0.95rem'}}>
              info@dreamrootskenya.com
            </a>
          </div>
          <div>
            <p style={{color: '#AEB6BF', fontSize: '0.95rem', marginBottom: '0.3rem'}}>💬 WhatsApp</p>
            <a href="https://wa.me/254759098449" target="_blank" rel="noreferrer" style={{color: '#25D366', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 'bold'}}>
              Chat with us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: '1px solid #2C3E50',
        padding: '1.5rem 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <p style={{color: '#AEB6BF', fontSize: '0.9rem', margin: 0}}>
          © 2025 DreamRoots Kenya Ltd. All rights reserved.
        </p>
        <div style={{display: 'flex', gap: '1.5rem'}}>
          <Link to="/privacy-policy" style={{color: '#AEB6BF', textDecoration: 'none', fontSize: '0.9rem'}}>
            Privacy Policy
          </Link>
          <Link to="/partners-affiliations" style={{color: '#AEB6BF', textDecoration: 'none', fontSize: '0.9rem'}}>
            Partners
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer