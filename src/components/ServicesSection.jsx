import { Link } from 'react-router-dom'

const services = [
  {
    title: "Education Consultancy",
    description: "College admissions guidance, curriculum development, educational program evaluation and ICT applications in education.",
    icon: "🎓",
    slug: "education-consultancy",
    color: "#1B4F72"
  },
  {
    title: "ICT Solutions",
    description: "IT strategy, network infrastructure, software development, cybersecurity and digital transformation services.",
    icon: "💻",
    slug: "ict",
    color: "#117A65"
  },
  {
    title: "Finance",
    description: "Financial planning, investment management, corporate finance, risk management and specialist accounting.",
    icon: "📊",
    slug: "finance",
    color: "#1A5276"
  },
  {
    title: "Human Resource Management",
    description: "Talent acquisition, employee engagement, HR policy, payroll management and organizational development.",
    icon: "👥",
    slug: "human-resource-management",
    color: "#154360"
  },
  {
    title: "Marketing",
    description: "Marketing strategy, digital marketing, branding, content development and market research analytics.",
    icon: "📢",
    slug: "marketing",
    color: "#0E6655"
  },
  {
    title: "Research",
    description: "Market and sector studies, data collection, feasibility studies, impact assessments and monitoring.",
    icon: "🔬",
    slug: "research",
    color: "#1B4F72"
  },
  {
    title: "Soft Skills Training",
    description: "Communication, emotional intelligence, leadership, critical thinking, time management and customer service.",
    icon: "🌟",
    slug: "soft-skills-training",
    color: "#117A65"
  },
  {
    title: "Training & Capacity Building",
    description: "Leadership development, community capacity building, organizational strengthening and innovative workshops.",
    icon: "🚀",
    slug: "training-capacity-building",
    color: "#1A5276"
  }
]

const ServicesSection = () => {
  return (
    <section style={{padding: '5rem 1rem', background: '#f8f9fa'}}>
      {/* Section Header */}
      <div style={{textAlign: 'center', marginBottom: '3rem'}}>
        <p style={{color: '#2E86C1', fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.5rem'}}>
          What We Offer
        </p>
        <h2 style={{color: '#1B4F72', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>
          Our Services
        </h2>
        <p style={{color: '#666', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8'}}>
          DreamRoots Kenya offers a comprehensive suite of consulting services tailored to your unique needs.
        </p>
        <div style={{width: '60px', height: '4px', background: '#2E86C1', margin: '1.5rem auto 0', borderRadius: '2px'}}/>
      </div>

      {/* Services Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              borderTop: `4px solid ${service.color}`
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
            }}
          >
            {/* Icon */}
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              width: '60px',
              height: '60px',
              background: `${service.color}15`,
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {service.icon}
            </div>

            {/* Title */}
            <h3 style={{
              color: '#1B4F72',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '0.8rem'
            }}>
              {service.title}
            </h3>

            {/* Description */}
            <p style={{
              color: '#666',
              fontSize: '0.95rem',
              lineHeight: '1.7',
              marginBottom: '1.5rem'
            }}>
              {service.description}
            </p>

            {/* Learn More Link */}
            <Link
              to={`/services/${service.slug}`}
              style={{
                color: service.color,
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div style={{textAlign: 'center', marginTop: '3rem'}}>
        <Link to="/services" style={{
          background: '#1B4F72',
          color: 'white',
          textDecoration: 'none',
          padding: '0.9rem 2.5rem',
          borderRadius: '30px',
          fontWeight: 'bold',
          fontSize: '1rem',
          display: 'inline-block'
        }}>
          View All Services
        </Link>
      </div>
    </section>
  )
}

export default ServicesSection