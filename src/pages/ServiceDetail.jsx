import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import PageWrapper from '../components/ui/PageWrapper'
import BookingCTA from '../components/ui/BookingCTA'
import DynamicLucideIcon from '../components/ui/DynamicLucideIcon'
import api from '../utils/api'

// ------------------------------------------------------------
// Unique theme per service (slug → theme)
// Each icon now has its own animation type: 'rotate', 'zoom', 'pulse', 'radial'
// ------------------------------------------------------------
const serviceThemes = {
  'ict': {
    gradient: 'linear-gradient(135deg, #0F2027, #203A43, #2C5364)',
    icons: [
      { name: 'Laptop', type: 'rotate', duration: 12, baseSize: 60 },
      { name: 'Cloud', type: 'zoom', duration: 10, baseSize: 70 },
      { name: 'Code2', type: 'pulse', duration: 8, baseSize: 50 },
      { name: 'Shield', type: 'rotate', duration: 15, baseSize: 55 },
      { name: 'Database', type: 'radial', duration: 18, baseSize: 65 },
      { name: 'Cpu', type: 'zoom', duration: 9, baseSize: 60 },
      { name: 'Wifi', type: 'pulse', duration: 7, baseSize: 50 },
      { name: 'Server', type: 'radial', duration: 20, baseSize: 70 },
    ],
    particleCount: 30,
    particleColor: 'rgba(0, 255, 255, 0.08)',
  },
  'finance': {
    gradient: 'linear-gradient(135deg, #1A2980, #26D0CE)',
    icons: [
      { name: 'LineChart', type: 'zoom', duration: 11, baseSize: 65 },
      { name: 'Coins', type: 'rotate', duration: 13, baseSize: 55 },
      { name: 'PiggyBank', type: 'pulse', duration: 9, baseSize: 60 },
      { name: 'TrendingUp', type: 'radial', duration: 16, baseSize: 50 },
      { name: 'BarChart', type: 'rotate', duration: 14, baseSize: 60 },
      { name: 'Wallet', type: 'zoom', duration: 10, baseSize: 55 },
      { name: 'DollarSign', type: 'pulse', duration: 8, baseSize: 45 },
    ],
    particleCount: 25,
    particleColor: 'rgba(255, 215, 0, 0.08)',
  },
  'education-consultancy': {
    gradient: 'linear-gradient(135deg, #2b1b3e, #44318d)',
    icons: [
      { name: 'GraduationCap', type: 'rotate', duration: 12, baseSize: 60 },
      { name: 'BookOpen', type: 'zoom', duration: 10, baseSize: 55 },
      { name: 'School', type: 'pulse', duration: 8, baseSize: 65 },
      { name: 'Users', type: 'radial', duration: 15, baseSize: 60 },
      { name: 'Lightbulb', type: 'rotate', duration: 11, baseSize: 50 },
      { name: 'ClipboardList', type: 'zoom', duration: 9, baseSize: 55 },
    ],
    particleCount: 20,
    particleColor: 'rgba(255, 255, 255, 0.08)',
  },
  'human-resource-management': {
    gradient: 'linear-gradient(135deg, #304352, #d7d2cc)',
    icons: [
      { name: 'Users', type: 'radial', duration: 14, baseSize: 65 },
      { name: 'Briefcase', type: 'rotate', duration: 12, baseSize: 60 },
      { name: 'Handshake', type: 'zoom', duration: 10, baseSize: 55 },
      { name: 'BadgeCheck', type: 'pulse', duration: 8, baseSize: 50 },
      { name: 'UserCog', type: 'rotate', duration: 13, baseSize: 60 },
      { name: 'Building', type: 'zoom', duration: 9, baseSize: 70 },
    ],
    particleCount: 18,
    particleColor: 'rgba(255, 215, 0, 0.06)',
  },
  'marketing': {
    gradient: 'linear-gradient(135deg, #c21500, #ffc500)',
    icons: [
      { name: 'Megaphone', type: 'pulse', duration: 7, baseSize: 60 },
      { name: 'BarChart', type: 'zoom', duration: 11, baseSize: 55 },
      { name: 'Share2', type: 'rotate', duration: 9, baseSize: 50 },
      { name: 'Target', type: 'radial', duration: 15, baseSize: 65 },
      { name: 'Mail', type: 'zoom', duration: 10, baseSize: 55 },
      { name: 'TrendingUp', type: 'rotate', duration: 12, baseSize: 60 },
      { name: 'Globe', type: 'pulse', duration: 8, baseSize: 70 },
    ],
    particleCount: 28,
    particleColor: 'rgba(255, 100, 0, 0.1)',
  },
  'research': {
    gradient: 'linear-gradient(135deg, #1D976C, #93F9B9)',
    icons: [
      { name: 'Microscope', type: 'zoom', duration: 14, baseSize: 60 },
      { name: 'FlaskConical', type: 'rotate', duration: 12, baseSize: 55 },
      { name: 'ClipboardCheck', type: 'pulse', duration: 9, baseSize: 50 },
      { name: 'Search', type: 'radial', duration: 16, baseSize: 65 },
      { name: 'FileSearch', type: 'zoom', duration: 10, baseSize: 55 },
      { name: 'LineChart', type: 'rotate', duration: 11, baseSize: 60 },
      { name: 'Dna', type: 'pulse', duration: 8, baseSize: 70 },
    ],
    particleCount: 22,
    particleColor: 'rgba(255, 255, 255, 0.1)',
  },
  'soft-skills-training': {
    gradient: 'linear-gradient(135deg, #4B79A1, #283E51)',
    icons: [
      { name: 'Handshake', type: 'zoom', duration: 11, baseSize: 60 },
      { name: 'MessageSquare', type: 'rotate', duration: 13, baseSize: 55 },
      { name: 'Users', type: 'radial', duration: 14, baseSize: 65 },
      { name: 'Star', type: 'pulse', duration: 7, baseSize: 50 },
      { name: 'UserCheck', type: 'zoom', duration: 9, baseSize: 55 },
      { name: 'HeartHandshake', type: 'rotate', duration: 12, baseSize: 60 },
    ],
    particleCount: 24,
    particleColor: 'rgba(255, 215, 0, 0.07)',
  },
  'training-capacity-building': {
    gradient: 'linear-gradient(135deg, #0B3B3B, #1C7C6B)',
    icons: [
      { name: 'School', type: 'zoom', duration: 12, baseSize: 65 },
      { name: 'ClipboardList', type: 'rotate', duration: 10, baseSize: 60 },
      { name: 'Users', type: 'radial', duration: 15, baseSize: 70 },
      { name: 'Presentation', type: 'pulse', duration: 9, baseSize: 55 },
      { name: 'BarChart', type: 'zoom', duration: 11, baseSize: 60 },
      { name: 'Target', type: 'rotate', duration: 13, baseSize: 50 },
      { name: 'Trophy', type: 'pulse', duration: 8, baseSize: 65 },
    ],
    particleCount: 26,
    particleColor: 'rgba(0, 255, 200, 0.08)',
  },
}

const defaultTheme = {
  gradient: 'linear-gradient(135deg, #1B4F72, #117A65)',
  icons: [
    { name: 'Settings', type: 'pulse', duration: 10, baseSize: 50 },
    { name: 'HelpCircle', type: 'rotate', duration: 12, baseSize: 55 },
    { name: 'Zap', type: 'zoom', duration: 9, baseSize: 60 },
  ],
  particleCount: 20,
  particleColor: 'rgba(255, 215, 0, 0.08)',
}

function getServiceTheme(slug) {
  return serviceThemes[slug] || defaultTheme
}

// ------------------------------------------------------------
// Animation keyframes (added globally once in the component)
// ------------------------------------------------------------
const animationStyles = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes floatParticle {
    0% { transform: translateY(0px) translateX(0px); }
    100% { transform: translateY(-50px) translateX(25px); }
  }
  @keyframes iconRotate {
    0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
    100% { transform: translateY(-40px) translateX(30px) rotate(360deg); }
  }
  @keyframes iconZoom {
    0% { transform: translateY(0px) scale(1); opacity: 0.2; }
    50% { transform: translateY(-20px) scale(1.3); opacity: 0.4; }
    100% { transform: translateY(-60px) scale(0.8); opacity: 0.15; }
  }
  @keyframes iconPulse {
    0% { transform: scale(1); opacity: 0.1; text-shadow: 0 0 0px gold; }
    50% { transform: scale(1.2); opacity: 0.3; text-shadow: 0 0 15px gold; }
    100% { transform: scale(1); opacity: 0.1; text-shadow: 0 0 0px gold; }
  }
  @keyframes iconRadial {
    0% { transform: translate(-50%, -50%) scale(0.2); opacity: 0; }
    20% { opacity: 0.25; }
    100% { transform: translate(calc(var(--dx, 100px)), calc(var(--dy, -80px))) scale(1); opacity: 0.12; }
  }
`

// ------------------------------------------------------------
// Subcategory marquee (same as before)
// ------------------------------------------------------------
function SubcategoryMarquee({ subcategories }) {
  const containerRef = useRef(null)
  const wrapperRef = useRef(null)
  const [items, setItems] = useState([])
  const [scrollOffset, setScrollOffset] = useState(0)
  const animationRef = useRef(null)
  const speed = 0.8
  const [centerIndex, setCenterIndex] = useState(-1)

  useEffect(() => {
    if (!subcategories.length) return
    setItems([...subcategories, ...subcategories])
  }, [subcategories])

  useEffect(() => {
    if (!items.length || !containerRef.current || !wrapperRef.current) return
    const animate = () => {
      let newOffset = scrollOffset - speed
      const wrapperWidth = wrapperRef.current.scrollWidth
      if (Math.abs(newOffset) >= wrapperWidth / 2) newOffset = 0
      setScrollOffset(newOffset)
      wrapperRef.current.style.transform = `translateX(${newOffset}px)`

      const containerRect = containerRef.current.getBoundingClientRect()
      const centerX = containerRect.left + containerRect.width / 2
      let minDistance = Infinity
      let closestIndex = -1
      const elements = wrapperRef.current.children
      for (let i = 0; i < elements.length; i++) {
        const rect = elements[i].getBoundingClientRect()
        const itemCenter = rect.left + rect.width / 2
        const distance = Math.abs(centerX - itemCenter)
        if (distance < minDistance) {
          minDistance = distance
          closestIndex = i
        }
      }
      if (closestIndex !== -1 && subcategories.length) {
        setCenterIndex(closestIndex % subcategories.length)
      }
      animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationRef.current)
  }, [items, scrollOffset, speed, subcategories])

  if (!subcategories.length) return null

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        overflow: 'hidden',
        background: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(8px)',
        borderTop: '1px solid rgba(255,215,0,0.3)',
        padding: '0.75rem 0',
        whiteSpace: 'nowrap',
      }}
    >
      <div ref={wrapperRef} style={{ display: 'inline-flex', gap: '2rem', willChange: 'transform' }}>
        {items.map((item, idx) => {
          const isCentered = (idx % subcategories.length) === centerIndex
          return (
            <span
              key={idx}
              style={{
                display: 'inline-block',
                padding: '0.4rem 1.2rem',
                fontSize: isCentered ? '1.1rem' : '0.85rem',
                fontWeight: isCentered ? 'bold' : 'normal',
                background: isCentered ? 'rgba(255,215,0,0.25)' : 'transparent',
                borderRadius: '60px',
                border: isCentered ? '1px solid rgba(255,215,0,0.8)' : '1px solid rgba(255,215,0,0.2)',
                color: isCentered ? '#FFD700' : 'rgba(255,255,255,0.8)',
                transition: 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                transform: isCentered ? 'scale(1.05)' : 'scale(1)',
                boxShadow: isCentered ? '0 0 12px rgba(255,215,0,0.4)' : 'none',
              }}
            >
              {item}
            </span>
          )
        })}
      </div>
    </div>
  )
}

// ------------------------------------------------------------
// ServiceHero with per‑icon animations
// ------------------------------------------------------------
function ServiceHero({ service }) {
  const subcategories = service.sections?.map(s => s.title) || []
  const theme = getServiceTheme(service.slug)

  // Generate floating particles
  const particles = Array.from({ length: theme.particleCount }).map(() => ({
    width: Math.random() * 80 + 20,
    height: Math.random() * 80 + 20,
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
    background: theme.particleColor,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 8,
  }))

  // Prepare icons with random positions and animation parameters
  const preparedIcons = theme.icons.map(icon => {
    const top = Math.random() * 80 + 10   // percentage
    const left = Math.random() * 80 + 10
    const delay = Math.random() * 5
    // For radial icons, we also need direction vectors
    const dx = (Math.random() - 0.5) * 200
    const dy = (Math.random() - 0.5) * 150 - 50
    return { ...icon, top, left, delay, dx, dy }
  })

  return (
    <div style={{ position: 'relative', height: '60vh', minHeight: '500px', overflow: 'hidden' }}>
      <style>{animationStyles}</style>

      {/* Animated gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: theme.gradient,
          backgroundSize: '200% 200%',
          animation: 'gradientShift 12s ease infinite',
        }}
      />

      {/* Floating blurred particles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {particles.map((p, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: p.width,
              height: p.height,
              top: p.top,
              left: p.left,
              background: p.background,
              borderRadius: '50%',
              filter: 'blur(8px)',
              animation: `floatParticle ${p.duration}s infinite alternate`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Floating icons with diverse behaviors */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {preparedIcons.map((icon, idx) => {
          let animationName, extraStyle = {}
          switch (icon.type) {
            case 'rotate':
              animationName = 'iconRotate'
              break
            case 'zoom':
              animationName = 'iconZoom'
              break
            case 'pulse':
              animationName = 'iconPulse'
              break
            case 'radial':
              animationName = 'iconRadial'
              // Use CSS custom properties for direction
              extraStyle = { '--dx': `${icon.dx}px`, '--dy': `${icon.dy}px` }
              // For radial, initial position is center of the hero, not the random top/left
              // We'll hardcode center for radial type
              if (icon.type === 'radial') {
                extraStyle.position = 'absolute'
                extraStyle.top = '50%'
                extraStyle.left = '50%'
                extraStyle.transform = 'translate(-50%, -50%)'
              } else {
                extraStyle.top = `${icon.top}%`
                extraStyle.left = `${icon.left}%`
              }
              break
            default:
              animationName = 'iconRotate'
          }
          // For non-radial icons, we set top/left normally
          const positionStyle = (icon.type !== 'radial') ? { top: `${icon.top}%`, left: `${icon.left}%` } : {}

          return (
            <div
              key={idx}
              style={{
                position: 'absolute',
                ...positionStyle,
                ...extraStyle,
                opacity: icon.type === 'radial' ? 0 : 0.15,
                animation: `${animationName} ${icon.duration}s infinite alternate ease-in-out`,
                animationDelay: `${icon.delay}s`,
              }}
            >
              <DynamicLucideIcon
                name={icon.name}
                size={icon.baseSize}
                strokeWidth={1}
                color="white"
              />
            </div>
          )
        })}
      </div>

      {/* Dark overlay for text readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 100%)',
          zIndex: 1,
        }}
      />

      {/* Foreground content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          padding: '0 1rem',
          marginBottom: '80px',
        }}
      >
        <DynamicLucideIcon
          name={service.icon}
          size={64}
          strokeWidth={1.5}
          color="var(--clr-gold)"
          style={{ marginBottom: '1rem' }}
        />
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '0.5rem' }}>
          {service.name}
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', marginBottom: '1.5rem' }}>
          {service.summary}
        </p>
      </div>

      <SubcategoryMarquee subcategories={subcategories} />
    </div>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get(`/services/${slug}`)
      .then(res => {
        setService(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch service:', err)
        setLoading(false)
      })
  }, [slug])

  if (loading) {
    return (
      <PageWrapper title="Loading...">
        <div style={{ textAlign: 'center', padding: '4rem' }}>Loading service details...</div>
      </PageWrapper>
    )
  }

  if (!service) {
    return (
      <PageWrapper title="Not Found">
        <div style={{ textAlign: 'center', padding: '4rem' }}>
          <h1>Service not found</h1>
          <p>Please check the URL.</p>
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper title={service.name} description={service.summary}>
      <ServiceHero service={service} />
      <section className="section" style={{ background: 'var(--clr-void)' }}>
        <div className="container">
          {service.content && (
            <div
              dangerouslySetInnerHTML={{ __html: service.content }}
              style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8 }}
            />
          )}
          {service.sections && service.sections.length > 0 && (
            <div style={{ marginTop: '3rem' }}>
              <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Key Focus Areas</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {service.sections.map(section => (
                  <div key={section.id} style={{ background: 'var(--clr-surface)', padding: '1.5rem', borderRadius: '8px' }}>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--clr-gold)' }}>{section.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: section.content }} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <BookingCTA />
    </PageWrapper>
  )
}