import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import PageWrapper from '../components/ui/PageWrapper'
import SectionHeader from '../components/ui/SectionHeader'
import BookingCTA from '../components/ui/BookingCTA'
import DynamicLucideIcon from '../components/ui/DynamicLucideIcon'
import { HERO_SLIDES, STATS } from '../data/site'
import api from '../utils/api'

// Hero Slider Component
function HeroSlider() {
  return (
    <section style={{ position: 'relative', height: '100svh', minHeight: '600px', overflow: 'hidden' }}>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        style={{ height: '100%' }}
      >
        {HERO_SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div style={{ position: 'relative', height: '100%' }}>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(105deg, rgba(12,12,14,0.88) 0%, rgba(12,12,14,0.55) 60%, rgba(12,12,14,0.3) 100%)',
              }} />
              <div className="container" style={{
                position: 'relative', zIndex: 1, height: '100%',
                display: 'flex', alignItems: 'center', paddingTop: '5rem',
              }}>
                <div style={{ maxWidth: '680px' }}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}
                  >
                    <span className="gold-line" style={{ width: '3rem' }} />
                    <span className="label gold">DreamRoots Kenya</span>
                  </motion.div>
                  <motion.h1
                    className="display-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    style={{ whiteSpace: 'pre-line', marginBottom: '1.5rem' }}
                  >
                    {slide.heading}
                  </motion.h1>
                  <motion.p
                    className="body-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    style={{ color: 'rgba(232,230,224,0.75)', marginBottom: '2.5rem', maxWidth: '480px' }}
                  >
                    {slide.sub}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                  >
                    <Link to="/booking" className="btn-gold"><span>{slide.cta}</span></Link>
                    <Link to="/services" className="btn-ghost">Our Services</Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{
        position: 'absolute', bottom: '3.5rem', left: '50%', transform: 'translateX(-50%)',
        zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
      }}>
        <span className="label" style={{ color: 'var(--clr-text-faint)', fontSize: '0.6rem' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          style={{ width: '1px', height: '2.5rem', background: 'linear-gradient(to bottom, var(--clr-gold), transparent)' }}
        />
      </div>
    </section>
  )
}

// Stats Strip Component
function StatsStrip() {
  return (
    <section style={{
      background: 'var(--clr-deep)',
      borderTop: '1px solid var(--clr-border)',
      borderBottom: '1px solid var(--clr-border)',
      padding: '3rem 0',
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem' }}>
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                color: 'var(--clr-gold)',
                letterSpacing: '0.08em',
                marginBottom: '0.35rem',
              }}>
                {stat.value}
              </div>
              <div className="label" style={{ color: 'var(--clr-text-faint)' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Services Section (fetched from API)
function ServicesSection({ services }) {
  if (!services || services.length === 0) {
    return (
      <section className="section" style={{ background: 'var(--clr-deep)' }}>
        <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
          Loading services...
        </div>
      </section>
    )
  }

  return (
    <section className="section" style={{ background: 'var(--clr-deep)' }}>
      <div className="container">
        <SectionHeader
          label="What We Do"
          title="Our Services"
          subtitle="Comprehensive consulting solutions tailored to Kenya's unique landscape and global best practices."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  background: 'var(--clr-surface)',
                  padding: '2rem',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  border: '1px solid var(--clr-border)',
                  height: '100%',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.borderColor = 'var(--clr-gold)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--clr-border)'
                }}
              >
                <DynamicLucideIcon
                  name={service.icon}
                  size={48}
                  strokeWidth={1.5}
                  color="var(--clr-gold)"
                />
                <h3 style={{ fontSize: '1.5rem', marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--clr-text)' }}>
                  {service.name}
                </h3>
                <p style={{ color: 'var(--clr-text-muted)', lineHeight: 1.6 }}>
                  {service.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/services" className="btn-ghost">View All Services</Link>
        </div>
      </div>
    </section>
  )
}

// Main Home Component
export default function Home() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/services')
      .then(response => {
        setServices(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching services:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <PageWrapper title="DreamRoots Kenya - Loading">
        <div style={{ textAlign: 'center', padding: '4rem' }}>Loading...</div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper
      title="DreamRoots Kenya | Rooted in Empowerment, Growing Your Potential"
      description="DreamRoots Kenya is a Nairobi-based consulting firm specializing in Education Consultancy, ICT, Finance, HR, Marketing, Research, and Training."
    >
      <HeroSlider />
      <StatsStrip />
      <ServicesSection services={services} />
      <BookingCTA />
    </PageWrapper>
  )
}