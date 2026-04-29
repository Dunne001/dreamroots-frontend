import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import PageWrapper from '../components/ui/PageWrapper'
import BookingCTA from '../components/ui/BookingCTA'
import DynamicLucideIcon from '../components/ui/DynamicLucideIcon'
import api from '../utils/api'

// Unique gradient per service (based on slug)
function getServiceGradient(slug) {
  const gradients = {
    'ict': 'linear-gradient(135deg, #0F2027, #203A43, #2C5364)',
    'finance': 'linear-gradient(135deg, #1A2980, #26D0CE)',
    'education-consultancy': 'linear-gradient(135deg, #2b1b3e, #44318d)',
    'human-resource-management': 'linear-gradient(135deg, #304352, #d7d2cc)',
    'marketing': 'linear-gradient(135deg, #c21500, #ffc500)',
    'research': 'linear-gradient(135deg, #1D976C, #93F9B9)',
    'soft-skills-training': 'linear-gradient(135deg, #4B79A1, #283E51)',
    'training-capacity-building': 'linear-gradient(135deg, #0B3B3B, #1C7C6B)'
  }
  return gradients[slug] || 'linear-gradient(135deg, #1B4F72, #117A65)'
}

// Per-service icon themes (with animation types)
function getServiceIcons(slug) {
  const themes = {
    'ict': [
      { name: 'Laptop', type: 'rotate', duration: 12, size: 60 },
      { name: 'Cloud', type: 'zoom', duration: 10, size: 70 },
      { name: 'Code2', type: 'pulse', duration: 8, size: 50 },
      { name: 'Shield', type: 'rotate', duration: 15, size: 55 },
      { name: 'Database', type: 'radial', duration: 18, size: 65 },
      { name: 'Cpu', type: 'zoom', duration: 9, size: 60 },
    ],
    'finance': [
      { name: 'LineChart', type: 'zoom', duration: 11, size: 65 },
      { name: 'Coins', type: 'rotate', duration: 13, size: 55 },
      { name: 'PiggyBank', type: 'pulse', duration: 9, size: 60 },
      { name: 'TrendingUp', type: 'radial', duration: 16, size: 50 },
      { name: 'BarChart', type: 'rotate', duration: 14, size: 60 },
      { name: 'Wallet', type: 'zoom', duration: 10, size: 55 },
    ],
    'education-consultancy': [
      { name: 'GraduationCap', type: 'rotate', duration: 12, size: 60 },
      { name: 'BookOpen', type: 'zoom', duration: 10, size: 55 },
      { name: 'School', type: 'pulse', duration: 8, size: 65 },
      { name: 'Users', type: 'radial', duration: 15, size: 60 },
      { name: 'Lightbulb', type: 'rotate', duration: 11, size: 50 },
    ],
    'human-resource-management': [
      { name: 'Users', type: 'radial', duration: 14, size: 65 },
      { name: 'Briefcase', type: 'rotate', duration: 12, size: 60 },
      { name: 'Handshake', type: 'zoom', duration: 10, size: 55 },
      { name: 'BadgeCheck', type: 'pulse', duration: 8, size: 50 },
      { name: 'Building', type: 'zoom', duration: 9, size: 70 },
    ],
    'marketing': [
      { name: 'Megaphone', type: 'pulse', duration: 7, size: 60 },
      { name: 'BarChart', type: 'zoom', duration: 11, size: 55 },
      { name: 'Share2', type: 'rotate', duration: 9, size: 50 },
      { name: 'Target', type: 'radial', duration: 15, size: 65 },
      { name: 'Globe', type: 'pulse', duration: 8, size: 70 },
    ],
    'research': [
      { name: 'Microscope', type: 'zoom', duration: 14, size: 60 },
      { name: 'FlaskConical', type: 'rotate', duration: 12, size: 55 },
      { name: 'ClipboardCheck', type: 'pulse', duration: 9, size: 50 },
      { name: 'Search', type: 'radial', duration: 16, size: 65 },
      { name: 'Dna', type: 'pulse', duration: 8, size: 70 },
    ],
    'soft-skills-training': [
      { name: 'Handshake', type: 'zoom', duration: 11, size: 60 },
      { name: 'MessageSquare', type: 'rotate', duration: 13, size: 55 },
      { name: 'Star', type: 'pulse', duration: 7, size: 50 },
      { name: 'HeartHandshake', type: 'rotate', duration: 12, size: 60 },
    ],
    'training-capacity-building': [
      { name: 'School', type: 'zoom', duration: 12, size: 65 },
      { name: 'ClipboardList', type: 'rotate', duration: 10, size: 60 },
      { name: 'Presentation', type: 'pulse', duration: 9, size: 55 },
      { name: 'Trophy', type: 'pulse', duration: 8, size: 65 },
    ],
  }
  return themes[slug] || themes['ict']
}

// Horizontal marquee with center highlighting
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
        width: '100%',
        overflow: 'hidden',
        background: 'rgba(0,0,0,0.3)',
        backdropFilter: 'blur(8px)',
        borderTop: '1px solid rgba(255,215,0,0.3)',
        borderBottom: '1px solid rgba(255,215,0,0.3)',
        padding: '1rem 0',
        whiteSpace: 'nowrap',
      }}
    >
      <div
        ref={wrapperRef}
        style={{
          display: 'inline-flex',
          gap: '2rem',
          willChange: 'transform',
        }}
      >
        {items.map((item, idx) => {
          const isCentered = (idx % subcategories.length) === centerIndex
          return (
            <span
              key={idx}
              style={{
                display: 'inline-block',
                padding: '0.5rem 1.5rem',
                fontSize: isCentered ? '1.1rem' : '0.9rem',
                fontWeight: isCentered ? 'bold' : 'normal',
                background: isCentered ? 'rgba(255,215,0,0.25)' : 'transparent',
                borderRadius: '40px',
                border: isCentered ? '1px solid rgba(255,215,0,0.8)' : '1px solid rgba(255,215,0,0.3)',
                color: isCentered ? '#FFD700' : 'rgba(255,255,255,0.9)',
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

function ServiceHero({ service }) {
  const subcategories = service.sections?.map(s => s.title) || []
  const gradient = getServiceGradient(service.slug)
  const icons = getServiceIcons(service.slug)

  // Prepare icons with random positions
  const preparedIcons = icons.map(icon => ({
    ...icon,
    top: Math.random() * 70 + 15,
    left: Math.random() * 70 + 15,
    delay: Math.random() * 5,
    dx: (Math.random() - 0.5) * 200,
    dy: (Math.random() - 0.5) * 150 - 50,
  }))

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
      0% { transform: scale(1); opacity: 0.1; }
      50% { transform: scale(1.2); opacity: 0.3; }
      100% { transform: scale(1); opacity: 0.1; }
    }
    @keyframes iconRadial {
      0% { transform: translate(-50%, -50%) scale(0.2); opacity: 0; }
      20% { opacity: 0.25; }
      100% { transform: translate(calc(var(--dx, 100px)), calc(var(--dy, -80px))) scale(1); opacity: 0.12; }
    }
  `

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <style>{animationStyles}</style>

      {/* Animated gradient background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: gradient,
          backgroundSize: '200% 200%',
          animation: 'gradientShift 12s ease infinite',
          zIndex: 0,
        }}
      />

      {/* Floating particles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 80 + 20,
              height: Math.random() * 80 + 20,
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              background: 'rgba(255,215,0,0.1)',
              borderRadius: '50%',
              filter: 'blur(8px)',
              animation: `floatParticle ${Math.random() * 10 + 8}s infinite alternate`,
              animationDelay: Math.random() * 5 + 's',
            }}
          />
        ))}
      </div>

      {/* Floating service-specific icons with different animations */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        {preparedIcons.map((icon, idx) => {
          let animationName
          switch (icon.type) {
            case 'rotate': animationName = 'iconRotate'; break
            case 'zoom': animationName = 'iconZoom'; break
            case 'pulse': animationName = 'iconPulse'; break
            case 'radial': animationName = 'iconRadial'; break
            default: animationName = 'iconRotate'
          }
          const isRadial = icon.type === 'radial'
          return (
            <div
              key={idx}
              style={{
                position: 'absolute',
                ...(isRadial ? { top: '50%', left: '50%' } : { top: `${icon.top}%`, left: `${icon.left}%` }),
                '--dx': `${icon.dx}px`,
                '--dy': `${icon.dy}px`,
                opacity: isRadial ? 0 : 0.15,
                animation: `${animationName} ${icon.duration}s infinite alternate ease-in-out`,
                animationDelay: `${icon.delay}s`,
              }}
            >
              <DynamicLucideIcon name={icon.name} size={icon.size} strokeWidth={1} color="white" />
            </div>
          )
        })}
      </div>

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 100%)',
          zIndex: 1,
        }}
      />

      {/* Centered content */}
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
        }}
      >
        <DynamicLucideIcon
          name={service.icon}
          size={80}
          strokeWidth={1.5}
          color="var(--clr-gold)"
          style={{ marginBottom: '1rem' }}
        />
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '0.5rem' }}>
          {service.name}
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          {service.summary}
        </p>
      </div>

      {/* Subcategory marquee at bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2 }}>
        {subcategories.length > 0 && <SubcategoryMarquee subcategories={subcategories} />}
      </div>
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
      
      <section className="section" style={{ background: 'var(--clr-void)', position: 'relative', zIndex: 2 }}>
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