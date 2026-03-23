import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const values = [
  { title: 'Integrity', desc: 'We uphold the highest standards of honesty, transparency, and ethical conduct.', icon: '⚖️' },
  { title: 'Excellence', desc: 'We are committed to delivering quality solutions that exceed expectations.', icon: '🏆' },
  { title: 'Collaboration', desc: 'We believe in the power of partnerships and teamwork to achieve shared success.', icon: '🤝' },
  { title: 'Innovation', desc: 'We embrace creativity and forward-thinking approaches to solve complex challenges.', icon: '💡' },
  { title: 'Inclusivity', desc: 'We value diversity and ensure our work benefits all segments of society.', icon: '🌍' },
  { title: 'Sustainability', desc: 'We prioritize long-term impact and responsible practices.', icon: '🌱' },
  { title: 'Empowerment', desc: 'We strive to build capacities and unlock potential in our clients.', icon: '🚀' },
]

const AboutPage = () => {
  return (
    <div>
      <div style={{
        background: 'linear-gradient(135deg, #1B4F72 0%, #2E86C1 100%)',
        padding: '5rem 1rem',
        textAlign: 'center'
      }}>
        <p style={{color: '#AED6F1', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '0.5rem'}}>
          Who We Are
        </p>
        <h1 style={{color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '1rem'}}>
          About DreamRoots Kenya
        </h1>
        <p style={{color: '#D6EAF8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto'}}>
          A visionary consulting firm dedicated to empowering individuals, organizations, and communities across Kenya and beyond.
        </p>
      </div>

      <div style={{maxWidth: '900px', margin: '0 auto', padding: '5rem 1rem'}}>
        <p style={{color: '#444', fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem'}}>
          DreamRoots Kenya is a visionary consulting firm dedicated to empowering individuals, organizations, and communities across Kenya and beyond to realize their fullest potential. Our mission is to provide actionable insights, expert guidance, and innovative solutions that drive sustainable growth and meaningful impact.
        </p>
        <p style={{color: '#444', fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem'}}>
          Founded with a passion for transformative change, DreamRoots Kenya operates at the intersection of strategic consulting, capacity building, and community development. We partner with a diverse range of stakeholders including government agencies, private sector companies, NGOs, and grassroots groups.
        </p>
        <p style={{color: '#444', fontSize: '1.1rem', lineHeight: '1.9'}}>
          Our approach is grounded in deep local understanding combined with global best practices. We prioritize inclusivity, sustainability, and empowerment in all our engagements, ensuring that the benefits of our work extend beyond immediate results to create lasting value.
        </p>
      </div>

      <div style={{background: '#f8f9fa', padding: '5rem 1rem'}}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{background: '#1B4F72', borderRadius: '16px', padding: '2.5rem', color: 'white'}}>
            <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🎯</div>
            <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>Our Mission</h3>
            <p style={{color: '#AED6F1', lineHeight: '1.8'}}>
              To empower individuals, organizations, and communities through innovative consulting, capacity building, and sustainable solutions that foster growth, resilience, and positive transformation.
            </p>
          </div>
          <div style={{background: '#117A65', borderRadius: '16px', padding: '2.5rem', color: 'white'}}>
            <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>👁️</div>
            <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>Our Vision</h3>
            <p style={{color: '#A9DFBF', lineHeight: '1.8'}}>
              To be a leading catalyst for social and economic development in Kenya and beyond, where every dream is rooted in strong foundations of knowledge, collaboration, and integrity.
            </p>
          </div>
        </div>
      </div>

      <div style={{padding: '5rem 1rem'}}>
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <p style={{color: '#2E86C1', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '0.5rem'}}>
            What Drives Us
          </p>
          <h2 style={{color: '#1B4F72', fontSize: '2.5rem', fontWeight: 'bold'}}>Our Core Values</h2>
          <div style={{width: '60px', height: '4px', background: '#2E86C1', margin: '1rem auto 0', borderRadius: '2px'}}/>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {values.map((v, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: '12px',
              padding: '1.8rem', boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
              borderLeft: '4px solid #2E86C1'
            }}>
              <div style={{fontSize: '2rem', marginBottom: '0.8rem'}}>{v.icon}</div>
              <h4 style={{color: '#1B4F72', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem'}}>{v.title}</h4>
              <p style={{color: '#666', fontSize: '0.95rem', lineHeight: '1.7'}}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{background: '#f8f9fa', padding: '4rem 1rem'}}>
        <div style={{textAlign: 'center', marginBottom: '2rem'}}>
          <h2 style={{color: '#1B4F72', fontSize: '2rem', fontWeight: 'bold'}}>Meet Our People</h2>
        </div>
        <div style={{display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap'}}>
          {[
            {label: 'Board of Directors', path: '/about/board'},
            {label: 'Management Team', path: '/about/team'},
            {label: 'Testimonials', path: '/about/testimonials'},
          ].map((item, i) => (
            <Link key={i} to={item.path} style={{
              background: '#1B4F72', color: 'white',
              textDecoration: 'none', padding: '0.9rem 2rem',
              borderRadius: '30px', fontWeight: 'bold', fontSize: '0.95rem'
            }}>
              {item.label} →
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage