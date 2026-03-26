import { useState, useEffect } from 'react'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '6rem',
        right: '2rem',
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        background: '#1B4F72',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        zIndex: 9998,
        transition: 'all 0.3s'
      }}
      title="Back to top"
      onMouseEnter={e => e.currentTarget.style.background = '#2E86C1'}
      onMouseLeave={e => e.currentTarget.style.background = '#1B4F72'}
    >
      ↑
    </button>
  )
}

export default BackToTop