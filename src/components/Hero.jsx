import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    title: "Empowering Institutions for a Smarter Future",
    subtitle: "Tailored training and innovative solutions designed to elevate your organization's performance.",
    bg: "#1B4F72"
  },
  {
    title: "Driving Excellence Through Research",
    subtitle: "Comprehensive research services that inform strategic decisions and foster sustainable growth.",
    bg: "#117A65"
  },
  {
    title: "Innovative ICT Solutions",
    subtitle: "Harness cutting-edge technology to streamline operations and enhance digital transformation.",
    bg: "#1A5276"
  },
  {
    title: "Professional Training That Transforms",
    subtitle: "Equip your team with skills and knowledge to excel in today's competitive environment.",
    bg: "#154360"
  },
  {
    title: "Consulting with a Local Touch, Global Vision",
    subtitle: "We combine practical experience and research to deliver solutions tailored to Kenya's unique needs.",
    bg: "#0E6655"
  }
]

const Hero = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <div style={{
      minHeight: '90vh',
      background: slide.bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      transition: 'background 1s ease',
      position: 'relative'
    }}>
      {/* Content */}
      <div style={{maxWidth: '800px'}}>
        <p style={{
          color: '#AED6F1',
          fontSize: '0.9rem',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: '1rem'
        }}>
          Rooted in Empowerment, Growing Your Potential
        </p>

        <h1 style={{
          color: 'white',
          fontSize: '3rem',
          fontWeight: 'bold',
          lineHeight: '1.2',
          marginBottom: '1.5rem'
        }}>
          {slide.title}
        </h1>

        <p style={{
          color: '#D6EAF8',
          fontSize: '1.1rem',
          lineHeight: '1.8',
          marginBottom: '2.5rem'
        }}>
          {slide.subtitle}
        </p>

        {/* CTA Buttons */}
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link to="/booking" style={{
            background: '#2E86C1',
            color: 'white',
            textDecoration: 'none',
            padding: '0.9rem 2.5rem',
            borderRadius: '30px',
            fontWeight: 'bold',
            fontSize: '1rem',
            transition: 'all 0.3s'
          }}>
            Book a Consultation
          </Link>
          <Link to="/services" style={{
            background: 'transparent',
            color: 'white',
            textDecoration: 'none',
            padding: '0.9rem 2.5rem',
            borderRadius: '30px',
            fontWeight: 'bold',
            fontSize: '1rem',
            border: '2px solid white'
          }}>
            Our Services
          </Link>
        </div>

        {/* Slide Dots */}
        <div style={{display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '3rem'}}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? '30px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: i === current ? 'white' : 'rgba(255,255,255,0.4)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero