import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const services = [
  { title: 'Education Consultancy', slug: 'education-consultancy', icon: '🎓', color: '#1B4F72',
    summary: 'College admissions guidance, curriculum development, educational program evaluation and ICT applications in education.' },
  { title: 'ICT Solutions', slug: 'ict', icon: '💻', color: '#117A65',
    summary: 'IT strategy, network infrastructure, software development, cybersecurity and digital transformation.' },
  { title: 'Finance', slug: 'finance', icon: '📊', color: '#1A5276',
    summary: 'Financial planning, investment management, corporate finance, risk management and specialist accounting.' },
  { title: 'Human Resource Management', slug: 'human-resource-management', icon: '👥', color: '#154360',
    summary: 'Talent acquisition, employee engagement, HR policy, payroll management and organizational development.' },
  { title: 'Marketing', slug: 'marketing', icon: '📢', color: '#0E6655',
    summary: 'Marketing strategy, digital marketing, branding, content development and market research analytics.' },
  { title: 'Research', slug: 'research', icon: '🔬', color: '#1B4F72',
    summary: 'Market and sector studies, data collection, feasibility studies, impact assessments and monitoring.' },
  { title: 'Soft Skills Training', slug: 'soft-skills-training', icon: '🌟', color: '#117A65',
    summary: 'Communication, emotional intelligence, leadership, critical thinking, time management and customer service.' },
  { title: 'Training & Capacity Building', slug: 'training-capacity-building', icon: '🚀', color: '#1A5276',
    summary: 'Leadership development, community capacity building, organizational strengthening and innovative workshops.' },
]

const ServicesPage = () => (
  <div>
    <div style={{
      background: 'linear-gradient(135deg, #1B4F72 0%, #2E86C1 100%)',
      padding: '5rem 1rem', textAlign: 'center'
    }}>
      <p style={{color: '#AED6F1', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '0.5rem'}}>
        What We Offer
      </p>
      <h1 style={{color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '1rem'}}>
        Our Services
      </h1>
      <p style={{color: '#D6EAF8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto'}}>
        DreamRoots Kenya offers a comprehensive suite of consulting services tailored to your unique needs across Kenya and beyond.
      </p>
    </div>

    <div style={{padding: '5rem 1rem'}}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem', maxWidth: '1200px', margin: '0 auto'
      }}>
        {services.map((s, i) => (
          <div key={i}
            style={{
              background: 'white', borderRadius: '16px', padding: '2.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              borderTop: `5px solid ${s.color}`, transition: 'all 0.3s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.15)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
            }}
          >
            <div style={{
              fontSize: '2.5rem', width: '65px', height: '65px',
              background: `${s.color}15`, borderRadius: '14px',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', marginBottom: '1.2rem'
            }}>
              {s.icon}
            </div>
            <h3 style={{color: '#1B4F72', fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.8rem'}}>
              {s.title}
            </h3>
            <p style={{color: '#666', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '0.95rem'}}>
              {s.summary}
            </p>
            <Link to={`/services/${s.slug}`} style={{
              color: s.color, fontWeight: 'bold',
              textDecoration: 'none', fontSize: '0.95rem'
            }}>
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </div>

    <div style={{
      background: 'linear-gradient(135deg, #1B4F72, #2E86C1)',
      padding: '5rem 1rem', textAlign: 'center'
    }}>
      <h2 style={{color: 'white', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>
        Ready to Get Started?
      </h2>
      <p style={{color: '#AED6F1', fontSize: '1.1rem', marginBottom: '2rem'}}>
        Book a consultation today and let us help you achieve your goals.
      </p>
      <Link to="/booking" style={{
        background: 'white', color: '#1B4F72',
        textDecoration: 'none', padding: '1rem 3rem',
        borderRadius: '30px', fontWeight: 'bold', fontSize: '1.1rem'
      }}>
        Book a Consultation
      </Link>
    </div>

    <Footer />
  </div>
)

export default ServicesPage