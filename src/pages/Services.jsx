import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/ui/PageWrapper'
import SectionHeader from '../components/ui/SectionHeader'
import DynamicLucideIcon from '../components/ui/DynamicLucideIcon'
import api from '../utils/api'

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/services')
      .then(res => {
        setServices(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch services:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <PageWrapper title="Our Services">
        <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
          Loading services...
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper
      title="Our Services"
      description="Explore DreamRoots Kenya's comprehensive consulting services in Education, ICT, Finance, HR, Marketing, Research, and Training."
    >
      <section className="section" style={{ background: 'var(--clr-deep)' }}>
        <div className="container">
          <SectionHeader
            label="What We Do"
            title="All Services"
            subtitle="Tailored consulting solutions for Kenyan organizations and individuals."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {services.map(service => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="card-surface"
                  style={{
                    padding: '2rem',
                    height: '100%',
                    transition: 'all 0.3s',
                    border: '1px solid var(--clr-border)',
                    borderRadius: '8px',
                  }}
                >
                  <DynamicLucideIcon
                    name={service.icon}
                    size={40}
                    strokeWidth={1.5}
                    color="var(--clr-gold)"
                  />
                  <h3 style={{ fontSize: '1.5rem', marginTop: '1rem', marginBottom: '0.5rem' }}>
                    {service.name}
                  </h3>
                  <p style={{ color: 'var(--clr-text-muted)' }}>{service.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}