import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <nav style={{background:'#1B4F72', position:'sticky', top:0, zIndex:1000}}>
      <div style={{maxWidth:'1200px', margin:'0 auto', padding:'0 1rem', display:'flex', justifyContent:'space-between', alignItems:'center', height:'70px'}}>
        
        {/* Logo */}
        <Link to="/" style={{color:'white', textDecoration:'none', fontSize:'1.4rem', fontWeight:'bold'}}>
          DreamRoots Kenya
        </Link>

        {/* Desktop Menu */}
        <div style={{display:'flex', gap:'1.5rem', alignItems:'center'}} className="desktop-menu">
          <Link to="/" style={{color:'white', textDecoration:'none', fontSize:'0.95rem'}}>Home</Link>
          
          {/* About Dropdown */}
          <div style={{position:'relative'}}>
            <button onClick={() => setAboutOpen(!aboutOpen)} style={{color:'white', background:'none', border:'none', cursor:'pointer', fontSize:'0.95rem'}}>
              About Us ▾
            </button>
            {aboutOpen && (
              <div style={{position:'absolute', top:'100%', left:0, background:'white', minWidth:'200px', boxShadow:'0 4px 20px rgba(0,0,0,0.15)', borderRadius:'8px', padding:'0.5rem 0'}}>
                <Link to="/about/overview" onClick={() => setAboutOpen(false)} style={{display:'block', padding:'0.6rem 1rem', color:'#1B4F72', textDecoration:'none', fontSize:'0.9rem'}}>Overview</Link>
                <Link to="/about/board" onClick={() => setAboutOpen(false)} style={{display:'block', padding:'0.6rem 1rem', color:'#1B4F72', textDecoration:'none', fontSize:'0.9rem'}}>Board of Directors</Link>
                <Link to="/about/team" onClick={() => setAboutOpen(false)} style={{display:'block', padding:'0.6rem 1rem', color:'#1B4F72', textDecoration:'none', fontSize:'0.9rem'}}>Management Team</Link>
                <Link to="/about/testimonials" onClick={() => setAboutOpen(false)} style={{display:'block', padding:'0.6rem 1rem', color:'#1B4F72', textDecoration:'none', fontSize:'0.9rem'}}>Testimonials</Link>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div style={{position:'relative'}}>
            <button onClick={() => setServicesOpen(!servicesOpen)} style={{color:'white', background:'none', border:'none', cursor:'pointer', fontSize:'0.95rem'}}>
              Services ▾
            </button>
            {servicesOpen && (
              <div style={{position:'absolute', top:'100%', left:0, background:'white', minWidth:'220px', boxShadow:'0 4px 20px rgba(0,0,0,0.15)', borderRadius:'8px', padding:'0.5rem 0'}}>
                <Link to="/services/education-consultancy" onClick={() => setServicesOpen(false)} style={{display:'block', padding:'0.6rem 1rem', color:'#1B4F72', textDecoration:'none', fontSize:'0.9rem'}}>Education Consultancy</Link>
                <Link to="/services/ict" onClick={() => setServicesOpen(false)} style={{display:'block', padding:'0.6rem 1rem', color:'#1B4F72', textDecoration:'none', fontSize:'0.9rem'}}>ICT</Link>
                <Link to="/services/finance" onClick={() => setServicesOpen(false)} style={{display:'block', padding:'0.6rem 1rem', color:'#1B4F72', textDecoration:'none', fontSize:'0.9rem'}}>Finance</Link>
                <Link to="/services/human-resource-management" onClick={() => setServicesOpen(false)} style={{display:'block', padding:'0.6rem 1rem', color:'#1B4F72', textDecoration:'none', fontSize:'0.9rem'}}>Human Resource Management</Link>
                <Link to="/services/marketing" onClick={() => setServicesOpen(false)} style={{display:'block', padding:'0.6rem 1rem', color:'#1B4F72', textDecoration:'none', fontSize:'0.9rem'}}>Marketing</Link>
                <Link to="/services/research" onClick={() => setServicesOpen(false)} style={{display:'block', padding:'0.6rem 1rem', color:'#1B4F72', textDecoration:'none', fontSize:'0.9rem'}}>Research</Link>
                <Link to="/services/soft-skills-training" onClick={() => setServicesOpen(false)} style={{display:'block', padding:'0.6rem 1rem', color:'#1B4F72', textDecoration:'none', fontSize:'0.9rem'}}>Soft Skills Training</Link>
                <Link to="/services/training-capacity-building" onClick={() => setServicesOpen(false)} style={{display:'block', padding:'0.6rem 1rem', color:'#1B4F72', textDecoration:'none', fontSize:'0.9rem'}}>Training & Capacity Building</Link>
              </div>
            )}
          </div>

          <Link to="/publications" style={{color:'white', textDecoration:'none', fontSize:'0.95rem'}}>Publications</Link>
          <Link to="/contact" style={{color:'white', textDecoration:'none', fontSize:'0.95rem'}}>Contact</Link>
          <Link to="/booking" style={{background:'#2E86C1', color:'white', textDecoration:'none', padding:'0.5rem 1.2rem', borderRadius:'25px', fontSize:'0.9rem', fontWeight:'bold'}}>Book Now</Link>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} style={{display:'none', background:'none', border:'none', cursor:'pointer', color:'white', fontSize:'1.5rem'}} className="hamburger">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{background:'#1B4F72', padding:'1rem', borderTop:'1px solid rgba(255,255,255,0.2)'}}>
          <Link to="/" onClick={() => setIsOpen(false)} style={{display:'block', color:'white', textDecoration:'none', padding:'0.7rem 0', borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Home</Link>
          <Link to="/about/overview" onClick={() => setIsOpen(false)} style={{display:'block', color:'white', textDecoration:'none', padding:'0.7rem 0', borderBottom:'1px solid rgba(255,255,255,0.1)'}}>About Us</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} style={{display:'block', color:'white', textDecoration:'none', padding:'0.7rem 0', borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Services</Link>
          <Link to="/publications" onClick={() => setIsOpen(false)} style={{display:'block', color:'white', textDecoration:'none', padding:'0.7rem 0', borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Publications</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} style={{display:'block', color:'white', textDecoration:'none', padding:'0.7rem 0', borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Contact</Link>
          <Link to="/booking" onClick={() => setIsOpen(false)} style={{display:'block', color:'white', textDecoration:'none', padding:'0.7rem 1rem', marginTop:'0.5rem', background:'#2E86C1', borderRadius:'25px', textAlign:'center', fontWeight:'bold'}}>Book Now</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar