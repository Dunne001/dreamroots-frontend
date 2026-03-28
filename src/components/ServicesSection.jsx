import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';

export default function ServicesSection() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/services')
      .then(res => setServices(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const icons = {
    'graduation-cap': '🎓',
    'laptop-code': '💻',
    'chart-line': '📊',
    'users': '👥',
    'bullhorn': '📣',
    'microscope': '🔬',
    'handshake': '🤝',
    'chalkboard-teacher': '📚',
  };

  if (loading) return (
    <section style={{ padding: '60px 20px', textAlign: 'center' }}>
      <p style={{ color: '#1B4F72' }}>Loading services...</p>
    </section>
  );

  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#1B4F72', fontSize: '2rem', marginBottom: '10px' }}>
          Our Services
        </h2>
        <p style={{ textAlign: 'center', color: '#555', marginBottom: '40px' }}>
          Comprehensive consulting solutions tailored for growth and impact
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {services.map(service => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '30px 24px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
                height: '100%',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
                  {icons[service.icon] || '⭐'}
                </div>
                <h3 style={{ color: '#1B4F72', fontSize: '1.1rem', marginBottom: '10px' }}>
                  {service.name}
                </h3>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {service.summary}
                </p>
                <p style={{ color: '#2E86C1', fontSize: '0.9rem', marginTop: '16px', fontWeight: '600' }}>
                  Learn More →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}