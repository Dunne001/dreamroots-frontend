import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import PageWrapper   from '../components/ui/PageWrapper'
import SectionHeader from '../components/ui/SectionHeader'
import BookingCTA    from '../components/ui/BookingCTA'
import { HERO_SLIDES, SERVICES, BOARD, STATS, SITE } from '../data/site'

/* ─── Hero Slider ───────────────────────────────────────────── */
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
              {/* Background image */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} />
              {/* Overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(105deg, rgba(12,12,14,0.88) 0%, rgba(12,12,14,0.55) 60%, rgba(12,12,14,0.3) 100%)',
              }} />

              {/* Content */}
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
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
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

      {/* Scroll indicator */}
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

/* ─── Stats strip ───────────────────────────────────────────── */
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

/* ─── About Teaser ──────────────────────────────────────────── */
function AboutTeaser() {
  return (
    <section className="section" style={{ background: 'var(--clr-void)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'center' }}>

          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span className="gold-line" />
                <span className="label gold">Who We Are</span>
              </div>
              <h2 className="display-lg" style={{ marginBottom: '1.5rem' }}>
                Rooted in Purpose.<br />
                <span style={{ fontStyle: 'italic', color: 'var(--clr-text-muted)', fontFamily: 'var(--font-serif)', fontWeight: 300 }}>
                  Driven by Impact.
                </span>
              </h2>
              <p className="body-lg" style={{ color: 'var(--clr-text-muted)', marginBottom: '1.25rem' }}>
                DreamRoots Kenya is a Nairobi-based consulting firm empowering organizations and individuals across Kenya with innovative solutions in Finance, ICT, Research, Human Resource Management, and Marketing.
              </p>
              <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem', lineHeight: 1.85, marginBottom: '2rem' }}>
                Our expert team blends deep local knowledge with global best practices to deliver tailored strategies that drive growth, resilience, and lasting impact.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn-gold"><span>Our Story</span></Link>
                <Link to="/team" className="btn-ghost">Meet the Team</Link>
              </div>
            </motion.div>
          </div>

          {/* Values list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {['Integrity', 'Excellence', 'Collaboration', 'Innovation', 'Sustainability'].map((v, i) => (
              <div key={v} style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1rem 0',
                borderBottom: '1px solid var(--clr-border)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--clr-gold)',
                  fontSize: '0.75rem',
                  opacity: 0.5,
                  minWidth: '2.5rem',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ color: 'var(--clr-text)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>{v}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── Services Grid ─────────────────────────────────────────── */
function ServicesSection() {
  return (
    <section className="section" style={{ background: 'var(--clr-deep)' }}>
      <div className="container">
        <SectionHeader
          label="What We Do"
          title="Our Services"
          subtitle="Comprehensive consulting solutions tailored to Kenya's unique landscape and global best practices."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2px' }}>
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
            >
              <Link
                to={`/services/${svc.slug}`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
                  className="card-surface"
                  style={{
                    padding: '2.25rem 2rem',
                    height: '100%',
                    transition: 'background 0.3s, border-color 0.3s',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--clr-elevated)'
                    e.currentTarget.querySelector('.svc-arrow').style.opacity = '1'
                    e.currentTarget.querySelector('.svc-arrow').style.transform = 'translateX(0)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'var(--clr-surface)'
                    e.currentTarget.querySelector('.svc-arrow').style.opacity = '0'
                    e.currentTarget.querySelector('.svc-arrow').style.transform = 'translateX(-8px)'
                  }}
                >
                  <div style={{ fontSize: '1.4rem', color: 'var(--clr-gold)', marginBottom: '1.25rem', opacity: 0.7 }}>{svc.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 300, color: 'var(--clr-text)', marginBottom: '0.75rem' }}>
                    {svc.title}
                  </h3>
                  <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.83rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                    {svc.summary}
                  </p>
                  <div
                    className="svc-arrow"
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                      color: 'var(--clr-gold)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                      opacity: 0, transform: 'translateX(-8px)', transition: 'all 0.3s',
                    }}
                  >
                    Learn more <span>→</span>
                  </div>

                  {/* Bottom accent */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
                    background: 'linear-gradient(90deg, var(--clr-gold), transparent)',
                    transform: 'scaleX(0)', transformOrigin: 'left',
                    transition: 'transform 0.4s',
                  }} className="svc-underline" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link to="/services" className="btn-ghost">View All Services</Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Board Preview ─────────────────────────────────────────── */
function BoardPreview() {
  return (
    <section className="section" style={{ background: 'var(--clr-void)' }}>
      <div className="container">
        <SectionHeader
          label="Leadership"
          title="Board of Directors"
          subtitle="Experienced leaders providing strategic governance and direction across DreamRoots Kenya's consulting practice."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2px', marginBottom: '3rem' }}>
          {BOARD.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                background: 'var(--clr-surface)',
                border: '1px solid var(--clr-border)',
                overflow: 'hidden',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--clr-border-md)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--clr-border)'}
            >
              <div style={{ height: '240px', overflow: 'hidden', background: 'var(--clr-elevated)', position: 'relative' }}>
                <img
                  src={member.image} alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(20%)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--clr-surface) 0%, transparent 55%)' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 300, marginBottom: '0.25rem' }}>{member.name}</h3>
                <p className="label gold" style={{ fontSize: '0.65rem', letterSpacing: '0.18em' }}>{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/board" className="btn-gold"><span>View Board</span></Link>
          <Link to="/team" className="btn-ghost">Management Team</Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <PageWrapper
      title={null}
      description="DreamRoots Kenya — Rooted in Empowerment, Growing Your Potential. Leading Nairobi-based consulting firm specializing in Finance, ICT, Research, HR, and Education."
    >
      <HeroSlider />
      <StatsStrip />
      <AboutTeaser />
      <ServicesSection />
      <BoardPreview />
      <BookingCTA />
    </PageWrapper>
  )
}

