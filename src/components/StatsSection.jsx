import { useState, useEffect, useRef } from 'react'

const stats = [
  { number: 500, suffix: '+', label: 'Clients Served', icon: '🤝' },
  { number: 10, suffix: '+', label: 'Years Experience', icon: '📅' },
  { number: 8, suffix: '', label: 'Service Areas', icon: '🏆' },
  { number: 50, suffix: '+', label: 'Expert Consultants', icon: '👨‍💼' }
]

const CountUp = ({ target, suffix }) => {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [started, target])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

const StatsSection = () => {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #1B4F72 0%, #2E86C1 100%)',
      padding: '5rem 1rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        textAlign: 'center'
      }}>
        {stats.map((stat, index) => (
          <div key={index} style={{
            padding: '2rem 1rem',
            borderRight: index < stats.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none'
          }}>
            <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>
              {stat.icon}
            </div>
            <div style={{
              color: 'white',
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>
              <CountUp target={stat.number} suffix={stat.suffix} />
            </div>
            <div style={{
              color: '#AED6F1',
              fontSize: '1rem',
              letterSpacing: '1px'
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsSection