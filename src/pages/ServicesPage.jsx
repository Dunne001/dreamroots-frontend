import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/services')
      .then(res => setServices(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div style={{ backgroundColor: '#1B4F72', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '16px' }}>Our Services</h1>
        <p style={{ color: '#ccc', fontSize: '1.1rem' }}>
          Comprehensive consulting solutions rooted in expertise and impact
        </p>
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        {loading ? (
          <p style={{ textAlign: 'center', color: '#1B4F72' }}>Loading services...</p>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {services.map(service => (
              <Link key={service.id} to={`/services/${service.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  padding: '32px 24px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  height: '100%',
                  transition: 'transform 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <h3 style={{ color: '#1B4F72', fontSize: '1.2rem', marginBottom: '12px' }}>
                    {service.name}
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.7', fontSize: '0.95rem' }}>
                    {service.summary}
                  </p>
                  <p style={{ color: '#2E86C1', marginTop: '20px', fontWeight: '600' }}>
                    View Details →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}