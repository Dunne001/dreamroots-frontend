import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: "DreamRoots Kenya transformed the way our organization approaches project management. Their expertise and hands-on support helped us streamline our processes, resulting in improved efficiency and greater impact in the communities we serve.",
    name: "James Mwangi",
    title: "Program Director",
    organization: "Umoja Community Initiative",
    initial: "J",
    stars: 5,
    service: "Training & Capacity Building"
  },
  {
    quote: "Working with DreamRoots Kenya was a game-changer for our business. Their tailored strategies and insightful guidance helped us overcome challenges and unlock new growth opportunities. I highly recommend their services to any serious business.",
    name: "Amina Njeri",
    title: "CEO",
    organization: "SafiTech Solutions",
    initial: "A",
    stars: 5,
    service: "ICT Solutions"
  },
  {
    quote: "The team demonstrated exceptional professionalism and deep knowledge in monitoring and evaluation. Their support enabled us to measure our impact accurately and improve our program outcomes significantly. Truly world class consultants.",
    name: "Peter Otieno",
    title: "M&E Manager",
    organization: "GreenFuture NGO",
    initial: "P",
    stars: 5,
    service: "Research"
  },
  {
    quote: "DreamRoots Kenya helped our company embrace digital transformation smoothly. Their expert advice and training sessions empowered our staff and improved our operational efficiency by over 40%. Exceptional value for money.",
    name: "Grace Wanjiku",
    title: "Operations Manager",
    organization: "MajiTech Ltd.",
    initial: "G",
    stars: 5,
    service: "ICT Solutions"
  },
  {
    quote: "I am deeply impressed by DreamRoots Kenya's commitment to community empowerment. Their participatory approach and capacity-building initiatives have made a real, measurable difference in our local projects. Highly recommended!",
    name: "Samuel Karanja",
    title: "Community Leader",
    organization: "Kibera Youth Empowerment Group",
    initial: "S",
    stars: 5,
    service: "Capacity Building"
  },
  {
    quote: "The HR consultancy services from DreamRoots Kenya helped us restructure our entire recruitment process. We reduced our hiring time by 60% and improved staff retention significantly. Their team truly understands the Kenyan job market.",
    name: "Patricia Kamau",
    title: "HR Director",
    organization: "Savanna Financial Services",
    initial: "P",
    stars: 5,
    service: "Human Resource Management"
  },
  {
    quote: "Our school's performance improved dramatically after engaging DreamRoots Kenya for curriculum development and teacher training. Parents have noticed the difference and student enrollment has increased by 35% this year.",
    name: "John Mutua",
    title: "School Principal",
    organization: "Greenview Academy, Nairobi",
    initial: "J",
    stars: 5,
    service: "Education Consultancy"
  },
  {
    quote: "The financial planning and investment advisory services we received were outstanding. DreamRoots Kenya helped us identify new revenue streams and cut operational costs by 25%. Our business is now on a clear growth trajectory.",
    name: "Margaret Oduya",
    title: "Managing Director",
    organization: "Oduya & Associates",
    initial: "M",
    stars: 5,
    service: "Finance"
  }
]

const Stars = ({ count }) => (
  <div style={{display: 'flex', gap: '0.2rem', justifyContent: 'center', marginBottom: '1rem'}}>
    {[...Array(count)].map((_, i) => (
      <span key={i} style={{color: '#F4D03F', fontSize: '1.2rem'}}>★</span>
    ))}
  </div>
)

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      goNext()
    }, 6000)
    return () => clearInterval(timer)
  }, [current])

  const goNext = () => {
    setAnimating(true)
    setTimeout(() => {
      setCurrent(prev => (prev + 1) % testimonials.length)
      setAnimating(false)
    }, 300)
  }

  const goPrev = () => {
    setAnimating(true)
    setTimeout(() => {
      setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
      setAnimating(false)
    }, 300)
  }

  const t = testimonials[current]

  return (
    <section style={{padding: '5rem 1rem', background: 'white'}}>
      <div style={{textAlign: 'center', marginBottom: '3rem'}}>
        <p style={{color: '#2E86C1', fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.5rem'}}>
          Client Stories
        </p>
        <h2 style={{color: '#1B4F72', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>
          What Our Clients Say
        </h2>
        <p style={{color: '#666', fontSize: '1rem', marginBottom: '0.5rem'}}>
          Real results from real organizations across Kenya
        </p>
        <div style={{width: '60px', height: '4px', background: '#2E86C1', margin: '1rem auto 0', borderRadius: '2px'}}/>
      </div>

      {/* Trust Badges */}
      <div style={{
        display: 'flex', gap: '2rem',
        justifyContent: 'center', flexWrap: 'wrap',
        marginBottom: '3rem'
      }}>
        {[
          { number: '500+', label: 'Happy Clients' },
          { number: '98%', label: 'Satisfaction Rate' },
          { number: '10+', label: 'Years of Trust' },
          { number: '50+', label: 'Expert Consultants' },
        ].map((badge, i) => (
          <div key={i} style={{
            textAlign: 'center',
            padding: '1rem 1.5rem',
            background: '#EBF5FB',
            borderRadius: '12px',
            minWidth: '120px'
          }}>
            <p style={{color: '#1B4F72', fontSize: '1.8rem', fontWeight: 'bold', margin: 0}}>{badge.number}</p>
            <p style={{color: '#666', fontSize: '0.85rem', margin: 0}}>{badge.label}</p>
          </div>
        ))}
      </div>

      {/* Testimonial Card */}
      <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '0 1rem'}}>
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '3rem 2rem',
          boxShadow: '0 8px 40px rgba(27, 79, 114, 0.12)',
          border: '1px solid #EBF5FB',
          opacity: animating ? 0 : 1,
          transform: animating ? 'translateY(10px)' : 'translateY(0)',
          transition: 'all 0.3s ease'
        }}>
          {/* Service Badge */}
          <span style={{
            background: '#EBF5FB', color: '#1B4F72',
            padding: '0.3rem 1rem', borderRadius: '20px',
            fontSize: '0.8rem', fontWeight: 'bold',
            display: 'inline-block', marginBottom: '1rem'
          }}>
            {t.service}
          </span>

          {/* Stars */}
          <Stars count={t.stars} />

          {/* Quote */}
          <div style={{fontSize: '3rem', color: '#2E86C1', lineHeight: '1', marginBottom: '0.5rem'}}>"</div>

          <p style={{
            color: '#333', fontSize: '1.1rem',
            lineHeight: '1.9', marginBottom: '2rem',
            fontStyle: 'italic', minHeight: '100px'
          }}>
            {t.quote}
          </p>

          {/* Author */}
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
            <div style={{
              width: '55px', height: '55px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #1B4F72, #2E86C1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontSize: '1.3rem', fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(27,79,114,0.3)'
            }}>
              {t.initial}
            </div>
            <div style={{textAlign: 'left'}}>
              <p style={{color: '#1B4F72', fontWeight: 'bold', fontSize: '1rem', margin: 0}}>{t.name}</p>
              <p style={{color: '#666', fontSize: '0.9rem', margin: 0}}>{t.title}, {t.organization}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '2rem'}}>
          <button onClick={goPrev} style={{
            width: '40px', height: '40px', borderRadius: '50%',
            border: '2px solid #1B4F72', background: 'transparent',
            color: '#1B4F72', cursor: 'pointer', fontSize: '1rem'
          }}>←</button>

          <div style={{display: 'flex', gap: '0.5rem'}}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} style={{
                width: i === current ? '25px' : '10px',
                height: '10px', borderRadius: '5px',
                background: i === current ? '#1B4F72' : '#BDC3C7',
                border: 'none', cursor: 'pointer', transition: 'all 0.3s'
              }} />
            ))}
          </div>

          <button onClick={goNext} style={{
            width: '40px', height: '40px', borderRadius: '50%',
            border: '2px solid #1B4F72', background: 'transparent',
            color: '#1B4F72', cursor: 'pointer', fontSize: '1rem'
          }}>→</button>
        </div>

        {/* Counter */}
        <p style={{color: '#888', fontSize: '0.9rem', marginTop: '1rem'}}>
          {current + 1} of {testimonials.length}
        </p>
      </div>
    </section>
  )
}

export default TestimonialsSection