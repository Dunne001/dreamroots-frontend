import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: "DreamRoots Kenya transformed the way our organization approaches project management. Their expertise and hands-on support helped us streamline our processes, resulting in improved efficiency and greater impact in the communities we serve.",
    name: "James Mwangi",
    title: "Program Director",
    organization: "Umoja Community Initiative",
    initial: "J"
  },
  {
    quote: "Working with DreamRoots Kenya was a game-changer for our business. Their tailored strategies and insightful guidance helped us overcome challenges and unlock new growth opportunities. I highly recommend their services.",
    name: "Amina Njeri",
    title: "CEO",
    organization: "SafiTech Solutions",
    initial: "A"
  },
  {
    quote: "The team at DreamRoots Kenya demonstrated exceptional professionalism and deep knowledge in monitoring and evaluation. Their support enabled us to measure our impact accurately and improve our program outcomes significantly.",
    name: "Peter Otieno",
    title: "M&E Manager",
    organization: "GreenFuture NGO",
    initial: "P"
  },
  {
    quote: "DreamRoots Kenya's consultancy services helped our company embrace digital transformation smoothly. Their expert advice and training sessions empowered our staff and improved our operational efficiency.",
    name: "Grace Wanjiku",
    title: "Operations Manager",
    organization: "MajiTech Ltd.",
    initial: "G"
  },
  {
    quote: "I am impressed by DreamRoots Kenya's commitment to community empowerment. Their participatory approach and capacity-building initiatives have made a real difference in our local projects.",
    name: "Samuel Karanja",
    title: "Community Leader",
    organization: "Kibera Youth Empowerment Group",
    initial: "S"
  }
]

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  const next = () => setCurrent((current + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section style={{padding: '5rem 1rem', background: 'white'}}>
      {/* Header */}
      <div style={{textAlign: 'center', marginBottom: '3rem'}}>
        <p style={{color: '#2E86C1', fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.5rem'}}>
          Client Stories
        </p>
        <h2 style={{color: '#1B4F72', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>
          What Our Clients Say
        </h2>
        <div style={{width: '60px', height: '4px', background: '#2E86C1', margin: '0 auto', borderRadius: '2px'}}/>
      </div>

      {/* Testimonial Card */}
      <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '0 1rem'}}>
        
        {/* Quote Icon */}
        <div style={{fontSize: '4rem', color: '#2E86C1', lineHeight: '1', marginBottom: '1rem'}}>
          "
        </div>

        {/* Quote Text */}
        <p style={{
          color: '#444',
          fontSize: '1.1rem',
          lineHeight: '1.9',
          marginBottom: '2rem',
          fontStyle: 'italic',
          minHeight: '120px'
        }}>
          {t.quote}
        </p>

        {/* Author */}
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
          <div style={{
            width: '55px',
            height: '55px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1B4F72, #2E86C1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.3rem',
            fontWeight: 'bold'
          }}>
            {t.initial}
          </div>
          <div style={{textAlign: 'left'}}>
            <p style={{color: '#1B4F72', fontWeight: 'bold', fontSize: '1rem', margin: 0}}>
              {t.name}
            </p>
            <p style={{color: '#666', fontSize: '0.9rem', margin: 0}}>
              {t.title}, {t.organization}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '2.5rem'}}>
          <button onClick={prev} style={{
            width: '40px', height: '40px',
            borderRadius: '50%',
            border: '2px solid #1B4F72',
            background: 'transparent',
            color: '#1B4F72',
            cursor: 'pointer',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>←</button>

          {/* Dots */}
          <div style={{display: 'flex', gap: '0.5rem'}}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? '25px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: i === current ? '#1B4F72' : '#BDC3C7',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              />
            ))}
          </div>

          <button onClick={next} style={{
            width: '40px', height: '40px',
            borderRadius: '50%',
            border: '2px solid #1B4F72',
            background: 'transparent',
            color: '#1B4F72',
            cursor: 'pointer',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>→</button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection