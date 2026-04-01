import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <nav style={{background: '#1B4F72', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 20px rgba(0,0,0,0.2)'}}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70px'
      }}>

        {/* Logo */}
<Link to="/" style={{textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
  <div style={{
    background: 'white',
    borderRadius: '8px',
    padding: '6px 12px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }}>
    <div style={{
      width: '38px',
      height: '38px',
      background: 'linear-gradient(135deg, #117A65, #1B4F72)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 8C17 11.31 14.76 14.08 11.75 14.82L11 22H13V24H11H9H7V22H9L8.25 14.82C5.24 14.08 3 11.31 3 8C3 4.13 6.13 1 10 1C10.34 1 10.67 1.03 11 1.08V3.09C10.68 3.03 10.34 3 10 3C7.24 3 5 5.24 5 8C5 10.76 7.24 13 10 13C12.76 13 15 10.76 15 8H17Z"/>
        <path d="M15 2L13 5H15L12 10L14 10L11 15H21L18 10L20 10L17 5H19L15 2Z"/>
      </svg>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', lineHeight: '1.1'}}>
      <span style={{color: '#1B4F72', fontWeight: '800', fontSize: '1rem', letterSpacing: '0.5px'}}>DreamRoots</span>
      <span style={{color: '#117A65', fontWeight: '600', fontSize: '0.7rem', letterSpacing: '1px', textTransform: 'uppercase'}}>Kenya</span>
    </div>
  </div>
</Link>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
          '@media (max-width: 768px)': {display: 'none'}
        }} id="desktop-menu">
          <Link to="/" style={{color: 'white', textDecoration: 'none', fontSize: '0.95rem'}}>Home</Link>

          {/* About Dropdown */}
          <div style={{position: 'relative'}}>
            <button
              onClick={() => { setAboutOpen(!aboutOpen); setServicesOpen(false) }}
              style={{color: 'white', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.95rem'}}
            >
              About Us ▾
            </button>
            {aboutOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: 0,
                background: 'white', minWidth: '200px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                borderRadius: '8px', padding: '0.5rem 0',
                zIndex: 100
              }}>
                {[
                  {label: 'Overview', path: '/about/overview'},
                  {label: 'Board of Directors', path: '/about/board'},
                  {label: 'Management Team', path: '/about/team'},
                  {label: 'Testimonials', path: '/about/testimonials'},
                ].map((item, i) => (
                  <Link key={i} to={item.path} onClick={() => setAboutOpen(false)} style={{
                    display: 'block', padding: '0.7rem 1.2rem',
                    color: '#1B4F72', textDecoration: 'none', fontSize: '0.9rem',
                    borderBottom: i < 3 ? '1px solid #f0f0f0' : 'none'
                  }}
                  onMouseEnter={e => e.target.style.background = '#EBF5FB'}
                  onMouseLeave={e => e.target.style.background = 'transparent'}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div style={{position: 'relative'}}>
            <button
              onClick={() => { setServicesOpen(!servicesOpen); setAboutOpen(false) }}
              style={{color: 'white', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.95rem'}}
            >
              Services ▾
            </button>
            {servicesOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: 0,
                background: 'white', minWidth: '240px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                borderRadius: '8px', padding: '0.5rem 0',
                zIndex: 100
              }}>
                {[
                  {label: '🎓 Education Consultancy', path: '/services/education-consultancy'},
                  {label: '💻 ICT Solutions', path: '/services/ict'},
                  {label: '📊 Finance', path: '/services/finance'},
                  {label: '👥 Human Resource Management', path: '/services/human-resource-management'},
                  {label: '📢 Marketing', path: '/services/marketing'},
                  {label: '🔬 Research', path: '/services/research'},
                  {label: '🌟 Soft Skills Training', path: '/services/soft-skills-training'},
                  {label: '🚀 Training & Capacity Building', path: '/services/training-capacity-building'},
                ].map((item, i, arr) => (
                  <Link key={i} to={item.path} onClick={() => setServicesOpen(false)} style={{
                    display: 'block', padding: '0.7rem 1.2rem',
                    color: '#1B4F72', textDecoration: 'none', fontSize: '0.9rem',
                    borderBottom: i < arr.length - 1 ? '1px solid #f0f0f0' : 'none'
                  }}
                  onMouseEnter={e => e.target.style.background = '#EBF5FB'}
                  onMouseLeave={e => e.target.style.background = 'transparent'}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/publications" style={{color: 'white', textDecoration: 'none', fontSize: '0.95rem'}}>Publications</Link>
          <Link to="/partners-affiliations" style={{color: 'white', textDecoration: 'none', fontSize: '0.95rem'}}>Partners</Link>
          <Link to="/contact" style={{color: 'white', textDecoration: 'none', fontSize: '0.95rem'}}>Contact</Link>
          <Link to="/booking" style={{
            background: '#2E86C1',
            color: 'white',
            textDecoration: 'none',
            padding: '0.5rem 1.2rem',
            borderRadius: '25px',
            fontSize: '0.9rem',
            fontWeight: 'bold'
          }}>
            Book Now
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'white',
            fontSize: '1.8rem',
            display: 'none',
            padding: '0.3rem'
          }}
          id="hamburger-btn"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          background: '#154360',
          padding: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          {[
            {label: 'Home', path: '/'},
            {label: 'About — Overview', path: '/about/overview'},
            {label: 'Board of Directors', path: '/about/board'},
            {label: 'Management Team', path: '/about/team'},
            {label: 'Services', path: '/services'},
            {label: 'Education Consultancy', path: '/services/education-consultancy'},
            {label: 'ICT Solutions', path: '/services/ict'},
            {label: 'Finance', path: '/services/finance'},
            {label: 'HRM', path: '/services/human-resource-management'},
            {label: 'Marketing', path: '/services/marketing'},
            {label: 'Research', path: '/services/research'},
            {label: 'Soft Skills', path: '/services/soft-skills-training'},
            {label: 'Training & Capacity', path: '/services/training-capacity-building'},
            {label: 'Publications', path: '/publications'},
            {label: 'Contact Us', path: '/contact'},
          ].map((item, i) => (
            <Link key={i} to={item.path} onClick={() => setIsOpen(false)} style={{
              display: 'block',
              color: 'white',
              textDecoration: 'none',
              padding: '0.7rem 0.5rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              fontSize: '0.95rem'
            }}>
              {item.label}
            </Link>
          ))}
          <Link to="/booking" onClick={() => setIsOpen(false)} style={{
            display: 'block',
            background: '#2E86C1',
            color: 'white',
            textDecoration: 'none',
            padding: '0.8rem',
            borderRadius: '25px',
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: '1rem'
          }}>
            Book Now
          </Link>
        </div>
      )}

      {/* CSS for responsive */}
      <style>{`
        @media (max-width: 768px) {
          #desktop-menu { display: none !important; }
          #hamburger-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          #hamburger-btn { display: none !important; }
        }
      `}</style>
    </nav>
  )
}

export default Navbar