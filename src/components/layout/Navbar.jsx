import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, SITE } from '../../data/site'

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const navRef = useRef(null)

  /* scroll effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* close on route change */
  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  /* close dropdown on outside click */
  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <header
      ref={navRef}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'background 0.4s, backdrop-filter 0.4s, border-color 0.4s',
        background: scrolled ? 'rgba(12,12,14,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--clr-border)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '5rem' }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '1px' }}>
          <span className="font-display gold" style={{ fontSize: '1rem', letterSpacing: '0.18em' }}>DreamRoots</span>
          <span className="label" style={{ color: 'var(--clr-text-muted)', letterSpacing: '0.3em', fontSize: '0.6rem' }}>Kenya Ltd.</span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <div key={link.path} style={{ position: 'relative' }}>
              {link.children ? (
                <>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === link.path ? null : link.path)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: '0.35rem',
                      padding: '0.5rem 0.85rem',
                      color: activeDropdown === link.path ? 'var(--clr-gold)' : 'var(--clr-text-muted)',
                      fontFamily: 'var(--font-sans)', fontSize: '0.75rem',
                      fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase',
                      transition: 'color 0.25s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--clr-gold)' }}
                    onMouseLeave={(e) => { if (activeDropdown !== link.path) e.currentTarget.style.color = 'var(--clr-text-muted)' }}
                  >
                    {link.label}
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ transition: 'transform 0.25s', transform: activeDropdown === link.path ? 'rotate(180deg)' : 'none' }}>
                      <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </button>

                  <AnimatePresence>
                    {activeDropdown === link.path && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          position: 'absolute', top: 'calc(100% + 0.5rem)', left: '50%',
                          transform: 'translateX(-50%)',
                          background: 'var(--clr-deep)',
                          border: '1px solid var(--clr-border)',
                          minWidth: '220px',
                          padding: '0.5rem 0',
                        }}
                      >
                        {link.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            style={({ isActive }) => ({
                              display: 'block',
                              padding: '0.65rem 1.25rem',
                              color: isActive ? 'var(--clr-gold)' : 'var(--clr-text-muted)',
                              textDecoration: 'none',
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.75rem',
                              letterSpacing: '0.1em',
                              textTransform: 'uppercase',
                              borderLeft: isActive ? '1px solid var(--clr-gold)' : '1px solid transparent',
                              transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                            })}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = 'var(--clr-gold)'
                              e.currentTarget.style.background = 'var(--clr-gold-glow)'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent'
                            }}
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <NavLink
                  to={link.path}
                  style={({ isActive }) => ({
                    display: 'block', padding: '0.5rem 0.85rem', textDecoration: 'none',
                    color: isActive ? 'var(--clr-gold)' : 'var(--clr-text-muted)',
                    fontFamily: 'var(--font-sans)', fontSize: '0.75rem',
                    fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase',
                    transition: 'color 0.25s',
                    position: 'relative',
                  })}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--clr-gold)' }}
                  onMouseLeave={(e) => { if (!e.currentTarget.classList.contains('active')) e.currentTarget.style.color = 'var(--clr-text-muted)' }}
                >
                  {link.label}
                </NavLink>
              )}
            </div>
          ))}

          <Link to="/booking" className="btn-gold" style={{ marginLeft: '1rem', padding: '0.65rem 1.5rem' }}>
            <span>Book Now</span>
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: '5px',
            padding: '0.5rem',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '1px',
              background: 'var(--clr-text)',
              transition: 'transform 0.3s, opacity 0.3s',
              transform: mobileOpen
                ? i === 0 ? 'rotate(45deg) translateY(8.5px)'
                : i === 2 ? 'rotate(-45deg) translateY(-8.5px)'
                : 'none'
                : 'none',
              opacity: mobileOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              background: 'var(--clr-deep)',
              borderTop: '1px solid var(--clr-border)',
              overflow: 'hidden',
            }}
          >
            <div className="container" style={{ paddingBlock: '2rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {NAV_LINKS.map((link) => (
                <div key={link.path}>
                  {link.children ? (
                    <>
                      <span className="label" style={{ color: 'var(--clr-gold)', display: 'block', paddingBlock: '0.75rem 0.4rem' }}>{link.label}</span>
                      {link.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          style={{ display: 'block', padding: '0.5rem 0 0.5rem 1rem', color: 'var(--clr-text-muted)', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      style={{ display: 'block', paddingBlock: '0.75rem', color: 'var(--clr-text-muted)', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}
                    >
                      {link.label}
                    </NavLink>
                  )}
                </div>
              ))}
              <Link to="/booking" className="btn-gold" style={{ marginTop: '1.5rem', justifyContent: 'center' }}>
                <span>Book a Consultation</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 900px) { .mobile-menu-btn { display: none !important; } }
        @media (max-width: 899px) { .desktop-nav { display: none !important; } }
      `}</style>
    </header>
  )
}

