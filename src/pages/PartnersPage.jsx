import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const partners = [
  { name: 'Ministry of Education', category: 'Government', icon: '🏛️', description: 'Partnering to improve educational standards and curriculum development across Kenya.' },
  { name: 'Kenya ICT Authority', category: 'Government', icon: '💻', description: 'Collaborating on digital transformation initiatives and ICT capacity building programs.' },
  { name: 'Strathmore University', category: 'Academic', icon: '🎓', description: 'Joint research programs and professional development training partnerships.' },
  { name: 'University of Nairobi', category: 'Academic', icon: '🎓', description: 'Academic research collaborations and consultancy partnerships across multiple departments.' },
  { name: 'Kenya Red Cross', category: 'NGO', icon: '❤️', description: 'Community health research and capacity building for humanitarian response programs.' },
  { name: 'UNICEF Kenya', category: 'International', icon: '🌍', description: 'Child-focused research, education programs, and community development initiatives.' },
  { name: 'Kenya Private Sector Alliance', category: 'Private Sector', icon: '🤝', description: 'Business development, HR consultancy, and organizational strengthening for member companies.' },
  { name: 'Association of Chartered Certified Accountants', category: 'Professional Body', icon: '📊', description: 'Finance training, certification support, and professional development programs.' },
]

const categoryColors = {
  'Government': '#1B4F72',
  'Academic': '#117A65',
  'NGO': '#C0392B',
  'International': '#2E86C1',
  'Private Sector': '#154360',
  'Professional Body': '#0E6655'
}

const PartnersPage = () => (
  <div>
    <div style={{
      background: 'linear-gradient(135deg, #1B4F72 0%, #2E86C1 100%)',
      padding: '5rem 1rem', textAlign: 'center'
    }}>
      <p style={{color: '#AED6F1', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '0.5rem'}}>
        Our Network
      </p>
      <h1 style={{color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '1rem'}}>
        Partners & Affiliations
      </h1>
      <p style={{color: '#D6EAF8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto'}}>
        We collaborate with leading organizations across government, academia, civil society, and the private sector to deliver exceptional results.
      </p>
    </div>

    <div style={{padding: '5rem 1rem'}}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem', maxWidth: '1200px', margin: '0 auto'
      }}>
        {partners.map((p, i) => (
          <div key={i} style={{
            background: 'white', borderRadius: '16px', padding: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            borderTop: `4px solid ${categoryColors[p.category]}`,
            transition: 'all 0.3s'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-6px)'
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
          }}
          >
            <div style={{fontSize: '2.5rem', marginBottom: '0.8rem'}}>{p.icon}</div>
            <span style={{
              background: `${categoryColors[p.category]}15`,
              color: categoryColors[p.category],
              padding: '0.2rem 0.8rem', borderRadius: '20px',
              fontSize: '0.75rem', fontWeight: 'bold',
              display: 'inline-block', marginBottom: '0.8rem'
            }}>
              {p.category}
            </span>
            <h3 style={{color: '#1B4F72', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.8rem'}}>
              {p.name}
            </h3>
            <p style={{color: '#666', fontSize: '0.95rem', lineHeight: '1.7'}}>
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div style={{
      background: '#f8f9fa', padding: '5rem 1rem', textAlign: 'center'
    }}>
      <h2 style={{color: '#1B4F72', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem'}}>
        Become a Partner
      </h2>
      <p style={{color: '#666', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem'}}>
        We are always looking for strategic partnerships that create mutual value and drive positive impact across Kenya and East Africa.
      </p>
      <Link to="/contact" style={{
        background: '#1B4F72', color: 'white',
        textDecoration: 'none', padding: '0.9rem 2.5rem',
        borderRadius: '30px', fontWeight: 'bold', fontSize: '1rem'
      }}>
        Get In Touch →
      </Link>
    </div>

    <Footer />
  </div>
)

export default PartnersPage