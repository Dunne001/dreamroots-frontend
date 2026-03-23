import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    title: "Empowering Institutions for a Smarter Future",
    subtitle: "Tailored training and innovative solutions designed to elevate your organization's performance.",
    image: "https://dreamrootskenya.com/wp-content/uploads/2025/05/slide1.jpg",
    bg: "#1B4F72"
  },
  {
    title: "Driving Excellence Through Research",
    subtitle: "Comprehensive research services that inform strategic decisions and foster sustainable growth.",
    image: "https://dreamrootskenya.com/wp-content/uploads/2025/05/slide2.jpg",
    bg: "#117A65"
  },
  {
    title: "Innovative ICT Solutions",
    subtitle: "Harness cutting-edge technology to streamline operations and enhance digital transformation.",
    image: "https://dreamrootskenya.com/wp-content/uploads/2025/05/slide3.jpg",
    bg: "#1A5276"
  },
  {
    title: "Professional Training That Transforms",
    subtitle: "Equip your team with skills and knowledge to excel in today's competitive environment.",
    image: "https://dreamrootskenya.com/wp-content/uploads/2025/05/slide4.jpg",
    bg: "#154360"
  },
  {
    title: "Consulting with a Local Touch, Global Vision",
    subtitle: "We combine practical experience and research to deliver solutions tailored to Kenya's unique needs.",
    image: "https://dreamrootskenya.com/wp-content/uploads/2025/05/slide5.jpg",
    bg: "#0E6655"
  },
  {
    title: "Partnering for Institutional Success",
    subtitle: "Collaborate with experts committed to empowering educational and business institutions.",
    image: "https://dreamrootskenya.com/wp-content/uploads/2025/05/nairobi.jpg",
    bg: "#1B4F72"
  },
  {
    title: "Your Trusted Consulting Partner in Kenya",
    subtitle: "From strategy to implementation, we provide end-to-end support for your growth journey.",
    image: "https://dreamrootskenya.com/wp-content/uploads/2025/05/home-nairobi-scaled.jpg",
    bg: "#154360"
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
    <>
      <div style={{
        minHeight: '90vh',
        backgroundImage: `url(${slide.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem 1rem',
        position: 'relative',
        transition: 'background-image 0.5s ease'
      }}>
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(27, 79, 114, 0.55)'
        }}/>

        {/* Content */}
        <div style={{position: 'relative', zIndex: 1, maxWidth: '850px', width: '100%'}}>
          <p style={{
            color: '#AED6F1',
            fontSize: '0.85rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            Rooted in Empowerment, Growing Your Potential
          </p>

          <h1 style={{
            color: 'white',
            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
            fontWeight: 'bold',
            lineHeight: '1.2',
            marginBottom: '1.5rem'
          }}>
            {slide.title}
          </h1>

          <p style={{
            color: '#D6EAF8',
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            lineHeight: '1.8',
            marginBottom: '2.5rem',
            maxWidth: '650px',
            margin: '0 auto 2.5rem'
          }}>
            {slide.subtitle}
          </p>

          {/* Buttons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            <Link to="/booking" style={{
              background: '#2E86C1',
              color: 'white',
              textDecoration: 'none',
              padding: '0.9rem 2.5rem',
              borderRadius: '30px',
              fontWeight: 'bold',
              fontSize: '1rem'
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

          {/* Dots */}
          <div style={{display: 'flex', gap: '0.5rem', justifyContent: 'center'}}>
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} style={{
                width: i === current ? '30px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: i === current ? 'white' : 'rgba(255,255,255,0.4)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero